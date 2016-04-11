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
            else if ( ((LA2_0>=23 && LA2_0<=26)) ) {
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
            case 23:
                {
                alt3=1;
                }
                break;
            case 24:
            case 25:
                {
                alt3=2;
                }
                break;
            case 26:
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:907:1: rule__Property__Alternatives_1_0_1_1 : ( ( ( rule__Property__TypeAssignment_1_0_1_1_0 ) ) | ( ( rule__Property__EntityListAssignment_1_0_1_1_1 ) ) );
    public final void rule__Property__Alternatives_1_0_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:911:1: ( ( ( rule__Property__TypeAssignment_1_0_1_1_0 ) ) | ( ( rule__Property__EntityListAssignment_1_0_1_1_1 ) ) )
            int alt11=2;
            int LA11_0 = input.LA(1);

            if ( (LA11_0==RULE_ID||(LA11_0>=19 && LA11_0<=22)) ) {
                alt11=1;
            }
            else if ( (LA11_0==48) ) {
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

            if ( ((LA14_0>=19 && LA14_0<=22)) ) {
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:995:1: rule__Text__Alternatives : ( ( RULE_ID ) | ( RULE_STRING ) | ( RULE_ANY_OTHER ) | ( 'up' ) | ( 'down' ) | ( 'top' ) | ( 'bottom' ) | ( 'left' ) | ( 'right' ) | ( 'null' ) | ( 'string' ) | ( 'number' ) | ( 'integer' ) | ( 'boolean' ) | ( 'package' ) | ( 'class' ) | ( 'enum' ) | ( 'note' ) | ( 'as' ) | ( 'of' ) | ( ':' ) | ( '?' ) );
    public final void rule__Text__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:999:1: ( ( RULE_ID ) | ( RULE_STRING ) | ( RULE_ANY_OTHER ) | ( 'up' ) | ( 'down' ) | ( 'top' ) | ( 'bottom' ) | ( 'left' ) | ( 'right' ) | ( 'null' ) | ( 'string' ) | ( 'number' ) | ( 'integer' ) | ( 'boolean' ) | ( 'package' ) | ( 'class' ) | ( 'enum' ) | ( 'note' ) | ( 'as' ) | ( 'of' ) | ( ':' ) | ( '?' ) )
            int alt15=22;
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
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1106:6: ( 'package' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1106:6: ( 'package' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1107:1: 'package'
                    {
                     before(grammarAccess.getTextAccess().getPackageKeyword_14()); 
                    match(input,23,FOLLOW_23_in_rule__Text__Alternatives2363); 
                     after(grammarAccess.getTextAccess().getPackageKeyword_14()); 

                    }


                    }
                    break;
                case 16 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1114:6: ( 'class' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1114:6: ( 'class' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1115:1: 'class'
                    {
                     before(grammarAccess.getTextAccess().getClassKeyword_15()); 
                    match(input,24,FOLLOW_24_in_rule__Text__Alternatives2383); 
                     after(grammarAccess.getTextAccess().getClassKeyword_15()); 

                    }


                    }
                    break;
                case 17 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1122:6: ( 'enum' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1122:6: ( 'enum' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1123:1: 'enum'
                    {
                     before(grammarAccess.getTextAccess().getEnumKeyword_16()); 
                    match(input,25,FOLLOW_25_in_rule__Text__Alternatives2403); 
                     after(grammarAccess.getTextAccess().getEnumKeyword_16()); 

                    }


                    }
                    break;
                case 18 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1130:6: ( 'note' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1130:6: ( 'note' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1131:1: 'note'
                    {
                     before(grammarAccess.getTextAccess().getNoteKeyword_17()); 
                    match(input,26,FOLLOW_26_in_rule__Text__Alternatives2423); 
                     after(grammarAccess.getTextAccess().getNoteKeyword_17()); 

                    }


                    }
                    break;
                case 19 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1138:6: ( 'as' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1138:6: ( 'as' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1139:1: 'as'
                    {
                     before(grammarAccess.getTextAccess().getAsKeyword_18()); 
                    match(input,27,FOLLOW_27_in_rule__Text__Alternatives2443); 
                     after(grammarAccess.getTextAccess().getAsKeyword_18()); 

                    }


                    }
                    break;
                case 20 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1146:6: ( 'of' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1146:6: ( 'of' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1147:1: 'of'
                    {
                     before(grammarAccess.getTextAccess().getOfKeyword_19()); 
                    match(input,28,FOLLOW_28_in_rule__Text__Alternatives2463); 
                     after(grammarAccess.getTextAccess().getOfKeyword_19()); 

                    }


                    }
                    break;
                case 21 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1154:6: ( ':' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1154:6: ( ':' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1155:1: ':'
                    {
                     before(grammarAccess.getTextAccess().getColonKeyword_20()); 
                    match(input,29,FOLLOW_29_in_rule__Text__Alternatives2483); 
                     after(grammarAccess.getTextAccess().getColonKeyword_20()); 

                    }


                    }
                    break;
                case 22 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1162:6: ( '?' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1162:6: ( '?' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1163:1: '?'
                    {
                     before(grammarAccess.getTextAccess().getQuestionMarkKeyword_21()); 
                    match(input,30,FOLLOW_30_in_rule__Text__Alternatives2503); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1175:1: rule__PackageStyle__Alternatives : ( ( ( 'Node' ) ) | ( ( 'Rect' ) ) | ( ( 'Folder' ) ) | ( ( 'Frame' ) ) | ( ( 'Cloud' ) ) | ( ( 'Database' ) ) );
    public final void rule__PackageStyle__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1179:1: ( ( ( 'Node' ) ) | ( ( 'Rect' ) ) | ( ( 'Folder' ) ) | ( ( 'Frame' ) ) | ( ( 'Cloud' ) ) | ( ( 'Database' ) ) )
            int alt16=6;
            switch ( input.LA(1) ) {
            case 31:
                {
                alt16=1;
                }
                break;
            case 32:
                {
                alt16=2;
                }
                break;
            case 33:
                {
                alt16=3;
                }
                break;
            case 34:
                {
                alt16=4;
                }
                break;
            case 35:
                {
                alt16=5;
                }
                break;
            case 36:
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
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1180:1: ( ( 'Node' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1180:1: ( ( 'Node' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1181:1: ( 'Node' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getNodeEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1182:1: ( 'Node' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1182:3: 'Node'
                    {
                    match(input,31,FOLLOW_31_in_rule__PackageStyle__Alternatives2538); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getNodeEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1187:6: ( ( 'Rect' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1187:6: ( ( 'Rect' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1188:1: ( 'Rect' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getRectEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1189:1: ( 'Rect' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1189:3: 'Rect'
                    {
                    match(input,32,FOLLOW_32_in_rule__PackageStyle__Alternatives2559); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getRectEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1194:6: ( ( 'Folder' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1194:6: ( ( 'Folder' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1195:1: ( 'Folder' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getFolderEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1196:1: ( 'Folder' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1196:3: 'Folder'
                    {
                    match(input,33,FOLLOW_33_in_rule__PackageStyle__Alternatives2580); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getFolderEnumLiteralDeclaration_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1201:6: ( ( 'Frame' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1201:6: ( ( 'Frame' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1202:1: ( 'Frame' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getFrameEnumLiteralDeclaration_3()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1203:1: ( 'Frame' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1203:3: 'Frame'
                    {
                    match(input,34,FOLLOW_34_in_rule__PackageStyle__Alternatives2601); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getFrameEnumLiteralDeclaration_3()); 

                    }


                    }
                    break;
                case 5 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1208:6: ( ( 'Cloud' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1208:6: ( ( 'Cloud' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1209:1: ( 'Cloud' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getCloudEnumLiteralDeclaration_4()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1210:1: ( 'Cloud' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1210:3: 'Cloud'
                    {
                    match(input,35,FOLLOW_35_in_rule__PackageStyle__Alternatives2622); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getCloudEnumLiteralDeclaration_4()); 

                    }


                    }
                    break;
                case 6 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1215:6: ( ( 'Database' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1215:6: ( ( 'Database' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1216:1: ( 'Database' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getDatabaseEnumLiteralDeclaration_5()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1217:1: ( 'Database' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1217:3: 'Database'
                    {
                    match(input,36,FOLLOW_36_in_rule__PackageStyle__Alternatives2643); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1227:1: rule__CompType__Alternatives : ( ( ( 'none' ) ) | ( ( '*' ) ) | ( ( 'o' ) ) );
    public final void rule__CompType__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1231:1: ( ( ( 'none' ) ) | ( ( '*' ) ) | ( ( 'o' ) ) )
            int alt17=3;
            switch ( input.LA(1) ) {
            case 37:
                {
                alt17=1;
                }
                break;
            case 38:
                {
                alt17=2;
                }
                break;
            case 39:
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
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1232:1: ( ( 'none' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1232:1: ( ( 'none' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1233:1: ( 'none' )
                    {
                     before(grammarAccess.getCompTypeAccess().getNoneEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1234:1: ( 'none' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1234:3: 'none'
                    {
                    match(input,37,FOLLOW_37_in_rule__CompType__Alternatives2679); 

                    }

                     after(grammarAccess.getCompTypeAccess().getNoneEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1239:6: ( ( '*' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1239:6: ( ( '*' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1240:1: ( '*' )
                    {
                     before(grammarAccess.getCompTypeAccess().getCompEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1241:1: ( '*' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1241:3: '*'
                    {
                    match(input,38,FOLLOW_38_in_rule__CompType__Alternatives2700); 

                    }

                     after(grammarAccess.getCompTypeAccess().getCompEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1246:6: ( ( 'o' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1246:6: ( ( 'o' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1247:1: ( 'o' )
                    {
                     before(grammarAccess.getCompTypeAccess().getAgreEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1248:1: ( 'o' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1248:3: 'o'
                    {
                    match(input,39,FOLLOW_39_in_rule__CompType__Alternatives2721); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1258:1: rule__NotePosition__Alternatives : ( ( ( 'top' ) ) | ( ( 'bottom' ) ) | ( ( 'left' ) ) | ( ( 'right' ) ) );
    public final void rule__NotePosition__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1262:1: ( ( ( 'top' ) ) | ( ( 'bottom' ) ) | ( ( 'left' ) ) | ( ( 'right' ) ) )
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
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1263:1: ( ( 'top' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1263:1: ( ( 'top' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1264:1: ( 'top' )
                    {
                     before(grammarAccess.getNotePositionAccess().getTopEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1265:1: ( 'top' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1265:3: 'top'
                    {
                    match(input,16,FOLLOW_16_in_rule__NotePosition__Alternatives2757); 

                    }

                     after(grammarAccess.getNotePositionAccess().getTopEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1270:6: ( ( 'bottom' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1270:6: ( ( 'bottom' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1271:1: ( 'bottom' )
                    {
                     before(grammarAccess.getNotePositionAccess().getBottomEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1272:1: ( 'bottom' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1272:3: 'bottom'
                    {
                    match(input,17,FOLLOW_17_in_rule__NotePosition__Alternatives2778); 

                    }

                     after(grammarAccess.getNotePositionAccess().getBottomEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1277:6: ( ( 'left' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1277:6: ( ( 'left' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1278:1: ( 'left' )
                    {
                     before(grammarAccess.getNotePositionAccess().getLeftEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1279:1: ( 'left' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1279:3: 'left'
                    {
                    match(input,14,FOLLOW_14_in_rule__NotePosition__Alternatives2799); 

                    }

                     after(grammarAccess.getNotePositionAccess().getLeftEnumLiteralDeclaration_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1284:6: ( ( 'right' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1284:6: ( ( 'right' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1285:1: ( 'right' )
                    {
                     before(grammarAccess.getNotePositionAccess().getRightEnumLiteralDeclaration_3()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1286:1: ( 'right' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1286:3: 'right'
                    {
                    match(input,15,FOLLOW_15_in_rule__NotePosition__Alternatives2820); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1296:1: rule__NativeType__Alternatives : ( ( ( 'string' ) ) | ( ( 'number' ) ) | ( ( 'integer' ) ) | ( ( 'boolean' ) ) );
    public final void rule__NativeType__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1300:1: ( ( ( 'string' ) ) | ( ( 'number' ) ) | ( ( 'integer' ) ) | ( ( 'boolean' ) ) )
            int alt19=4;
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
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 19, 0, input);

                throw nvae;
            }

            switch (alt19) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1301:1: ( ( 'string' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1301:1: ( ( 'string' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1302:1: ( 'string' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getStringEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1303:1: ( 'string' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1303:3: 'string'
                    {
                    match(input,19,FOLLOW_19_in_rule__NativeType__Alternatives2856); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getStringEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1308:6: ( ( 'number' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1308:6: ( ( 'number' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1309:1: ( 'number' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getNumberEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1310:1: ( 'number' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1310:3: 'number'
                    {
                    match(input,20,FOLLOW_20_in_rule__NativeType__Alternatives2877); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getNumberEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1315:6: ( ( 'integer' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1315:6: ( ( 'integer' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1316:1: ( 'integer' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getIntegerEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1317:1: ( 'integer' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1317:3: 'integer'
                    {
                    match(input,21,FOLLOW_21_in_rule__NativeType__Alternatives2898); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getIntegerEnumLiteralDeclaration_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1322:6: ( ( 'boolean' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1322:6: ( ( 'boolean' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1323:1: ( 'boolean' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getBooleanEnumLiteralDeclaration_3()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1324:1: ( 'boolean' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1324:3: 'boolean'
                    {
                    match(input,22,FOLLOW_22_in_rule__NativeType__Alternatives2919); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1336:1: rule__DomainModel__Group__0 : rule__DomainModel__Group__0__Impl rule__DomainModel__Group__1 ;
    public final void rule__DomainModel__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1340:1: ( rule__DomainModel__Group__0__Impl rule__DomainModel__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1341:2: rule__DomainModel__Group__0__Impl rule__DomainModel__Group__1
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__0__Impl_in_rule__DomainModel__Group__02952);
            rule__DomainModel__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__1_in_rule__DomainModel__Group__02955);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1348:1: rule__DomainModel__Group__0__Impl : ( '@startuml' ) ;
    public final void rule__DomainModel__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1352:1: ( ( '@startuml' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1353:1: ( '@startuml' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1353:1: ( '@startuml' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1354:1: '@startuml'
            {
             before(grammarAccess.getDomainModelAccess().getStartumlKeyword_0()); 
            match(input,40,FOLLOW_40_in_rule__DomainModel__Group__0__Impl2983); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1367:1: rule__DomainModel__Group__1 : rule__DomainModel__Group__1__Impl rule__DomainModel__Group__2 ;
    public final void rule__DomainModel__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1371:1: ( rule__DomainModel__Group__1__Impl rule__DomainModel__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1372:2: rule__DomainModel__Group__1__Impl rule__DomainModel__Group__2
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__1__Impl_in_rule__DomainModel__Group__13014);
            rule__DomainModel__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__2_in_rule__DomainModel__Group__13017);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1379:1: rule__DomainModel__Group__1__Impl : ( () ) ;
    public final void rule__DomainModel__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1383:1: ( ( () ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1384:1: ( () )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1384:1: ( () )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1385:1: ()
            {
             before(grammarAccess.getDomainModelAccess().getDomainModelAction_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1386:1: ()
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1388:1: 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1398:1: rule__DomainModel__Group__2 : rule__DomainModel__Group__2__Impl rule__DomainModel__Group__3 ;
    public final void rule__DomainModel__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1402:1: ( rule__DomainModel__Group__2__Impl rule__DomainModel__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1403:2: rule__DomainModel__Group__2__Impl rule__DomainModel__Group__3
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__2__Impl_in_rule__DomainModel__Group__23075);
            rule__DomainModel__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__3_in_rule__DomainModel__Group__23078);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1410:1: rule__DomainModel__Group__2__Impl : ( ( rule__DomainModel__FileAssignment_2 )? ) ;
    public final void rule__DomainModel__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1414:1: ( ( ( rule__DomainModel__FileAssignment_2 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1415:1: ( ( rule__DomainModel__FileAssignment_2 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1415:1: ( ( rule__DomainModel__FileAssignment_2 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1416:1: ( rule__DomainModel__FileAssignment_2 )?
            {
             before(grammarAccess.getDomainModelAccess().getFileAssignment_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1417:1: ( rule__DomainModel__FileAssignment_2 )?
            int alt20=2;
            int LA20_0 = input.LA(1);

            if ( (LA20_0==RULE_STRING) ) {
                alt20=1;
            }
            switch (alt20) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1417:2: rule__DomainModel__FileAssignment_2
                    {
                    pushFollow(FOLLOW_rule__DomainModel__FileAssignment_2_in_rule__DomainModel__Group__2__Impl3105);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1427:1: rule__DomainModel__Group__3 : rule__DomainModel__Group__3__Impl rule__DomainModel__Group__4 ;
    public final void rule__DomainModel__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1431:1: ( rule__DomainModel__Group__3__Impl rule__DomainModel__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1432:2: rule__DomainModel__Group__3__Impl rule__DomainModel__Group__4
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__3__Impl_in_rule__DomainModel__Group__33136);
            rule__DomainModel__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__4_in_rule__DomainModel__Group__33139);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1439:1: rule__DomainModel__Group__3__Impl : ( RULE_END_LINE ) ;
    public final void rule__DomainModel__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1443:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1444:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1444:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1445:1: RULE_END_LINE
            {
             before(grammarAccess.getDomainModelAccess().getEND_LINETerminalRuleCall_3()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__DomainModel__Group__3__Impl3166); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1456:1: rule__DomainModel__Group__4 : rule__DomainModel__Group__4__Impl rule__DomainModel__Group__5 ;
    public final void rule__DomainModel__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1460:1: ( rule__DomainModel__Group__4__Impl rule__DomainModel__Group__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1461:2: rule__DomainModel__Group__4__Impl rule__DomainModel__Group__5
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__4__Impl_in_rule__DomainModel__Group__43195);
            rule__DomainModel__Group__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__5_in_rule__DomainModel__Group__43198);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1468:1: rule__DomainModel__Group__4__Impl : ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) ) ;
    public final void rule__DomainModel__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1472:1: ( ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1473:1: ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1473:1: ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1474:1: ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1474:1: ( ( rule__DomainModel__PackagesAssignment_4 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1475:1: ( rule__DomainModel__PackagesAssignment_4 )
            {
             before(grammarAccess.getDomainModelAccess().getPackagesAssignment_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1476:1: ( rule__DomainModel__PackagesAssignment_4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1476:2: rule__DomainModel__PackagesAssignment_4
            {
            pushFollow(FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3227);
            rule__DomainModel__PackagesAssignment_4();

            state._fsp--;


            }

             after(grammarAccess.getDomainModelAccess().getPackagesAssignment_4()); 

            }

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1479:1: ( ( rule__DomainModel__PackagesAssignment_4 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1480:1: ( rule__DomainModel__PackagesAssignment_4 )*
            {
             before(grammarAccess.getDomainModelAccess().getPackagesAssignment_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1481:1: ( rule__DomainModel__PackagesAssignment_4 )*
            loop21:
            do {
                int alt21=2;
                int LA21_0 = input.LA(1);

                if ( (LA21_0==23) ) {
                    alt21=1;
                }


                switch (alt21) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1481:2: rule__DomainModel__PackagesAssignment_4
            	    {
            	    pushFollow(FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3239);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1492:1: rule__DomainModel__Group__5 : rule__DomainModel__Group__5__Impl ;
    public final void rule__DomainModel__Group__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1496:1: ( rule__DomainModel__Group__5__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1497:2: rule__DomainModel__Group__5__Impl
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__5__Impl_in_rule__DomainModel__Group__53272);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1503:1: rule__DomainModel__Group__5__Impl : ( '@enduml' ) ;
    public final void rule__DomainModel__Group__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1507:1: ( ( '@enduml' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1508:1: ( '@enduml' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1508:1: ( '@enduml' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1509:1: '@enduml'
            {
             before(grammarAccess.getDomainModelAccess().getEndumlKeyword_5()); 
            match(input,41,FOLLOW_41_in_rule__DomainModel__Group__5__Impl3300); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1534:1: rule__CPackage__Group__0 : rule__CPackage__Group__0__Impl rule__CPackage__Group__1 ;
    public final void rule__CPackage__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1538:1: ( rule__CPackage__Group__0__Impl rule__CPackage__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1539:2: rule__CPackage__Group__0__Impl rule__CPackage__Group__1
            {
            pushFollow(FOLLOW_rule__CPackage__Group__0__Impl_in_rule__CPackage__Group__03343);
            rule__CPackage__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__1_in_rule__CPackage__Group__03346);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1546:1: rule__CPackage__Group__0__Impl : ( 'package' ) ;
    public final void rule__CPackage__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1550:1: ( ( 'package' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1551:1: ( 'package' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1551:1: ( 'package' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1552:1: 'package'
            {
             before(grammarAccess.getCPackageAccess().getPackageKeyword_0()); 
            match(input,23,FOLLOW_23_in_rule__CPackage__Group__0__Impl3374); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1565:1: rule__CPackage__Group__1 : rule__CPackage__Group__1__Impl rule__CPackage__Group__2 ;
    public final void rule__CPackage__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1569:1: ( rule__CPackage__Group__1__Impl rule__CPackage__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1570:2: rule__CPackage__Group__1__Impl rule__CPackage__Group__2
            {
            pushFollow(FOLLOW_rule__CPackage__Group__1__Impl_in_rule__CPackage__Group__13405);
            rule__CPackage__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__2_in_rule__CPackage__Group__13408);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1577:1: rule__CPackage__Group__1__Impl : ( ( rule__CPackage__NameAssignment_1 ) ) ;
    public final void rule__CPackage__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1581:1: ( ( ( rule__CPackage__NameAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1582:1: ( ( rule__CPackage__NameAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1582:1: ( ( rule__CPackage__NameAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1583:1: ( rule__CPackage__NameAssignment_1 )
            {
             before(grammarAccess.getCPackageAccess().getNameAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1584:1: ( rule__CPackage__NameAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1584:2: rule__CPackage__NameAssignment_1
            {
            pushFollow(FOLLOW_rule__CPackage__NameAssignment_1_in_rule__CPackage__Group__1__Impl3435);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1594:1: rule__CPackage__Group__2 : rule__CPackage__Group__2__Impl rule__CPackage__Group__3 ;
    public final void rule__CPackage__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1598:1: ( rule__CPackage__Group__2__Impl rule__CPackage__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1599:2: rule__CPackage__Group__2__Impl rule__CPackage__Group__3
            {
            pushFollow(FOLLOW_rule__CPackage__Group__2__Impl_in_rule__CPackage__Group__23465);
            rule__CPackage__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__3_in_rule__CPackage__Group__23468);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1606:1: rule__CPackage__Group__2__Impl : ( ( rule__CPackage__Group_2__0 )? ) ;
    public final void rule__CPackage__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1610:1: ( ( ( rule__CPackage__Group_2__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1611:1: ( ( rule__CPackage__Group_2__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1611:1: ( ( rule__CPackage__Group_2__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1612:1: ( rule__CPackage__Group_2__0 )?
            {
             before(grammarAccess.getCPackageAccess().getGroup_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1613:1: ( rule__CPackage__Group_2__0 )?
            int alt22=2;
            int LA22_0 = input.LA(1);

            if ( (LA22_0==44) ) {
                alt22=1;
            }
            switch (alt22) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1613:2: rule__CPackage__Group_2__0
                    {
                    pushFollow(FOLLOW_rule__CPackage__Group_2__0_in_rule__CPackage__Group__2__Impl3495);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1623:1: rule__CPackage__Group__3 : rule__CPackage__Group__3__Impl rule__CPackage__Group__4 ;
    public final void rule__CPackage__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1627:1: ( rule__CPackage__Group__3__Impl rule__CPackage__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1628:2: rule__CPackage__Group__3__Impl rule__CPackage__Group__4
            {
            pushFollow(FOLLOW_rule__CPackage__Group__3__Impl_in_rule__CPackage__Group__33526);
            rule__CPackage__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__4_in_rule__CPackage__Group__33529);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1635:1: rule__CPackage__Group__3__Impl : ( '{' ) ;
    public final void rule__CPackage__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1639:1: ( ( '{' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1640:1: ( '{' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1640:1: ( '{' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1641:1: '{'
            {
             before(grammarAccess.getCPackageAccess().getLeftCurlyBracketKeyword_3()); 
            match(input,42,FOLLOW_42_in_rule__CPackage__Group__3__Impl3557); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1654:1: rule__CPackage__Group__4 : rule__CPackage__Group__4__Impl rule__CPackage__Group__5 ;
    public final void rule__CPackage__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1658:1: ( rule__CPackage__Group__4__Impl rule__CPackage__Group__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1659:2: rule__CPackage__Group__4__Impl rule__CPackage__Group__5
            {
            pushFollow(FOLLOW_rule__CPackage__Group__4__Impl_in_rule__CPackage__Group__43588);
            rule__CPackage__Group__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__5_in_rule__CPackage__Group__43591);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1666:1: rule__CPackage__Group__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__CPackage__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1670:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1671:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1671:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1672:1: RULE_END_LINE
            {
             before(grammarAccess.getCPackageAccess().getEND_LINETerminalRuleCall_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__4__Impl3618); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1683:1: rule__CPackage__Group__5 : rule__CPackage__Group__5__Impl rule__CPackage__Group__6 ;
    public final void rule__CPackage__Group__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1687:1: ( rule__CPackage__Group__5__Impl rule__CPackage__Group__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1688:2: rule__CPackage__Group__5__Impl rule__CPackage__Group__6
            {
            pushFollow(FOLLOW_rule__CPackage__Group__5__Impl_in_rule__CPackage__Group__53647);
            rule__CPackage__Group__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__6_in_rule__CPackage__Group__53650);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1695:1: rule__CPackage__Group__5__Impl : ( ( rule__CPackage__ElementsAssignment_5 )* ) ;
    public final void rule__CPackage__Group__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1699:1: ( ( ( rule__CPackage__ElementsAssignment_5 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1700:1: ( ( rule__CPackage__ElementsAssignment_5 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1700:1: ( ( rule__CPackage__ElementsAssignment_5 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1701:1: ( rule__CPackage__ElementsAssignment_5 )*
            {
             before(grammarAccess.getCPackageAccess().getElementsAssignment_5()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1702:1: ( rule__CPackage__ElementsAssignment_5 )*
            loop23:
            do {
                int alt23=2;
                int LA23_0 = input.LA(1);

                if ( (LA23_0==RULE_ID||(LA23_0>=23 && LA23_0<=26)) ) {
                    alt23=1;
                }


                switch (alt23) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1702:2: rule__CPackage__ElementsAssignment_5
            	    {
            	    pushFollow(FOLLOW_rule__CPackage__ElementsAssignment_5_in_rule__CPackage__Group__5__Impl3677);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1712:1: rule__CPackage__Group__6 : rule__CPackage__Group__6__Impl rule__CPackage__Group__7 ;
    public final void rule__CPackage__Group__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1716:1: ( rule__CPackage__Group__6__Impl rule__CPackage__Group__7 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1717:2: rule__CPackage__Group__6__Impl rule__CPackage__Group__7
            {
            pushFollow(FOLLOW_rule__CPackage__Group__6__Impl_in_rule__CPackage__Group__63708);
            rule__CPackage__Group__6__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__7_in_rule__CPackage__Group__63711);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1724:1: rule__CPackage__Group__6__Impl : ( '}' ) ;
    public final void rule__CPackage__Group__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1728:1: ( ( '}' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1729:1: ( '}' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1729:1: ( '}' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1730:1: '}'
            {
             before(grammarAccess.getCPackageAccess().getRightCurlyBracketKeyword_6()); 
            match(input,43,FOLLOW_43_in_rule__CPackage__Group__6__Impl3739); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1743:1: rule__CPackage__Group__7 : rule__CPackage__Group__7__Impl ;
    public final void rule__CPackage__Group__7() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1747:1: ( rule__CPackage__Group__7__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1748:2: rule__CPackage__Group__7__Impl
            {
            pushFollow(FOLLOW_rule__CPackage__Group__7__Impl_in_rule__CPackage__Group__73770);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1754:1: rule__CPackage__Group__7__Impl : ( RULE_END_LINE ) ;
    public final void rule__CPackage__Group__7__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1758:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1759:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1759:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1760:1: RULE_END_LINE
            {
             before(grammarAccess.getCPackageAccess().getEND_LINETerminalRuleCall_7()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__7__Impl3797); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1787:1: rule__CPackage__Group_2__0 : rule__CPackage__Group_2__0__Impl rule__CPackage__Group_2__1 ;
    public final void rule__CPackage__Group_2__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1791:1: ( rule__CPackage__Group_2__0__Impl rule__CPackage__Group_2__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1792:2: rule__CPackage__Group_2__0__Impl rule__CPackage__Group_2__1
            {
            pushFollow(FOLLOW_rule__CPackage__Group_2__0__Impl_in_rule__CPackage__Group_2__03842);
            rule__CPackage__Group_2__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group_2__1_in_rule__CPackage__Group_2__03845);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1799:1: rule__CPackage__Group_2__0__Impl : ( '<<' ) ;
    public final void rule__CPackage__Group_2__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1803:1: ( ( '<<' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1804:1: ( '<<' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1804:1: ( '<<' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1805:1: '<<'
            {
             before(grammarAccess.getCPackageAccess().getLessThanSignLessThanSignKeyword_2_0()); 
            match(input,44,FOLLOW_44_in_rule__CPackage__Group_2__0__Impl3873); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1818:1: rule__CPackage__Group_2__1 : rule__CPackage__Group_2__1__Impl rule__CPackage__Group_2__2 ;
    public final void rule__CPackage__Group_2__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1822:1: ( rule__CPackage__Group_2__1__Impl rule__CPackage__Group_2__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1823:2: rule__CPackage__Group_2__1__Impl rule__CPackage__Group_2__2
            {
            pushFollow(FOLLOW_rule__CPackage__Group_2__1__Impl_in_rule__CPackage__Group_2__13904);
            rule__CPackage__Group_2__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group_2__2_in_rule__CPackage__Group_2__13907);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1830:1: rule__CPackage__Group_2__1__Impl : ( ( rule__CPackage__StyleAssignment_2_1 ) ) ;
    public final void rule__CPackage__Group_2__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1834:1: ( ( ( rule__CPackage__StyleAssignment_2_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1835:1: ( ( rule__CPackage__StyleAssignment_2_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1835:1: ( ( rule__CPackage__StyleAssignment_2_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1836:1: ( rule__CPackage__StyleAssignment_2_1 )
            {
             before(grammarAccess.getCPackageAccess().getStyleAssignment_2_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1837:1: ( rule__CPackage__StyleAssignment_2_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1837:2: rule__CPackage__StyleAssignment_2_1
            {
            pushFollow(FOLLOW_rule__CPackage__StyleAssignment_2_1_in_rule__CPackage__Group_2__1__Impl3934);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1847:1: rule__CPackage__Group_2__2 : rule__CPackage__Group_2__2__Impl ;
    public final void rule__CPackage__Group_2__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1851:1: ( rule__CPackage__Group_2__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1852:2: rule__CPackage__Group_2__2__Impl
            {
            pushFollow(FOLLOW_rule__CPackage__Group_2__2__Impl_in_rule__CPackage__Group_2__23964);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1858:1: rule__CPackage__Group_2__2__Impl : ( '>>' ) ;
    public final void rule__CPackage__Group_2__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1862:1: ( ( '>>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1863:1: ( '>>' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1863:1: ( '>>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1864:1: '>>'
            {
             before(grammarAccess.getCPackageAccess().getGreaterThanSignGreaterThanSignKeyword_2_2()); 
            match(input,45,FOLLOW_45_in_rule__CPackage__Group_2__2__Impl3992); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1883:1: rule__Relation__Group__0 : rule__Relation__Group__0__Impl rule__Relation__Group__1 ;
    public final void rule__Relation__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1887:1: ( rule__Relation__Group__0__Impl rule__Relation__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1888:2: rule__Relation__Group__0__Impl rule__Relation__Group__1
            {
            pushFollow(FOLLOW_rule__Relation__Group__0__Impl_in_rule__Relation__Group__04029);
            rule__Relation__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__1_in_rule__Relation__Group__04032);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1895:1: rule__Relation__Group__0__Impl : ( ( rule__Relation__LeftRefAssignment_0 ) ) ;
    public final void rule__Relation__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1899:1: ( ( ( rule__Relation__LeftRefAssignment_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1900:1: ( ( rule__Relation__LeftRefAssignment_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1900:1: ( ( rule__Relation__LeftRefAssignment_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1901:1: ( rule__Relation__LeftRefAssignment_0 )
            {
             before(grammarAccess.getRelationAccess().getLeftRefAssignment_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1902:1: ( rule__Relation__LeftRefAssignment_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1902:2: rule__Relation__LeftRefAssignment_0
            {
            pushFollow(FOLLOW_rule__Relation__LeftRefAssignment_0_in_rule__Relation__Group__0__Impl4059);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1912:1: rule__Relation__Group__1 : rule__Relation__Group__1__Impl rule__Relation__Group__2 ;
    public final void rule__Relation__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1916:1: ( rule__Relation__Group__1__Impl rule__Relation__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1917:2: rule__Relation__Group__1__Impl rule__Relation__Group__2
            {
            pushFollow(FOLLOW_rule__Relation__Group__1__Impl_in_rule__Relation__Group__14089);
            rule__Relation__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__2_in_rule__Relation__Group__14092);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1924:1: rule__Relation__Group__1__Impl : ( ( rule__Relation__RelTypeAssignment_1 ) ) ;
    public final void rule__Relation__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1928:1: ( ( ( rule__Relation__RelTypeAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1929:1: ( ( rule__Relation__RelTypeAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1929:1: ( ( rule__Relation__RelTypeAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1930:1: ( rule__Relation__RelTypeAssignment_1 )
            {
             before(grammarAccess.getRelationAccess().getRelTypeAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1931:1: ( rule__Relation__RelTypeAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1931:2: rule__Relation__RelTypeAssignment_1
            {
            pushFollow(FOLLOW_rule__Relation__RelTypeAssignment_1_in_rule__Relation__Group__1__Impl4119);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1941:1: rule__Relation__Group__2 : rule__Relation__Group__2__Impl rule__Relation__Group__3 ;
    public final void rule__Relation__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1945:1: ( rule__Relation__Group__2__Impl rule__Relation__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1946:2: rule__Relation__Group__2__Impl rule__Relation__Group__3
            {
            pushFollow(FOLLOW_rule__Relation__Group__2__Impl_in_rule__Relation__Group__24149);
            rule__Relation__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__3_in_rule__Relation__Group__24152);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1953:1: rule__Relation__Group__2__Impl : ( ( rule__Relation__RightRefAssignment_2 ) ) ;
    public final void rule__Relation__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1957:1: ( ( ( rule__Relation__RightRefAssignment_2 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1958:1: ( ( rule__Relation__RightRefAssignment_2 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1958:1: ( ( rule__Relation__RightRefAssignment_2 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1959:1: ( rule__Relation__RightRefAssignment_2 )
            {
             before(grammarAccess.getRelationAccess().getRightRefAssignment_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1960:1: ( rule__Relation__RightRefAssignment_2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1960:2: rule__Relation__RightRefAssignment_2
            {
            pushFollow(FOLLOW_rule__Relation__RightRefAssignment_2_in_rule__Relation__Group__2__Impl4179);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1970:1: rule__Relation__Group__3 : rule__Relation__Group__3__Impl rule__Relation__Group__4 ;
    public final void rule__Relation__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1974:1: ( rule__Relation__Group__3__Impl rule__Relation__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1975:2: rule__Relation__Group__3__Impl rule__Relation__Group__4
            {
            pushFollow(FOLLOW_rule__Relation__Group__3__Impl_in_rule__Relation__Group__34209);
            rule__Relation__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__4_in_rule__Relation__Group__34212);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1982:1: rule__Relation__Group__3__Impl : ( ( rule__Relation__Group_3__0 )? ) ;
    public final void rule__Relation__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1986:1: ( ( ( rule__Relation__Group_3__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1987:1: ( ( rule__Relation__Group_3__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1987:1: ( ( rule__Relation__Group_3__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1988:1: ( rule__Relation__Group_3__0 )?
            {
             before(grammarAccess.getRelationAccess().getGroup_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1989:1: ( rule__Relation__Group_3__0 )?
            int alt24=2;
            int LA24_0 = input.LA(1);

            if ( (LA24_0==29) ) {
                alt24=1;
            }
            switch (alt24) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1989:2: rule__Relation__Group_3__0
                    {
                    pushFollow(FOLLOW_rule__Relation__Group_3__0_in_rule__Relation__Group__3__Impl4239);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1999:1: rule__Relation__Group__4 : rule__Relation__Group__4__Impl ;
    public final void rule__Relation__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2003:1: ( rule__Relation__Group__4__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2004:2: rule__Relation__Group__4__Impl
            {
            pushFollow(FOLLOW_rule__Relation__Group__4__Impl_in_rule__Relation__Group__44270);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2010:1: rule__Relation__Group__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Relation__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2014:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2015:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2015:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2016:1: RULE_END_LINE
            {
             before(grammarAccess.getRelationAccess().getEND_LINETerminalRuleCall_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Relation__Group__4__Impl4297); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2037:1: rule__Relation__Group_3__0 : rule__Relation__Group_3__0__Impl rule__Relation__Group_3__1 ;
    public final void rule__Relation__Group_3__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2041:1: ( rule__Relation__Group_3__0__Impl rule__Relation__Group_3__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2042:2: rule__Relation__Group_3__0__Impl rule__Relation__Group_3__1
            {
            pushFollow(FOLLOW_rule__Relation__Group_3__0__Impl_in_rule__Relation__Group_3__04336);
            rule__Relation__Group_3__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group_3__1_in_rule__Relation__Group_3__04339);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2049:1: rule__Relation__Group_3__0__Impl : ( ':' ) ;
    public final void rule__Relation__Group_3__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2053:1: ( ( ':' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2054:1: ( ':' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2054:1: ( ':' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2055:1: ':'
            {
             before(grammarAccess.getRelationAccess().getColonKeyword_3_0()); 
            match(input,29,FOLLOW_29_in_rule__Relation__Group_3__0__Impl4367); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2068:1: rule__Relation__Group_3__1 : rule__Relation__Group_3__1__Impl ;
    public final void rule__Relation__Group_3__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2072:1: ( rule__Relation__Group_3__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2073:2: rule__Relation__Group_3__1__Impl
            {
            pushFollow(FOLLOW_rule__Relation__Group_3__1__Impl_in_rule__Relation__Group_3__14398);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2079:1: rule__Relation__Group_3__1__Impl : ( ( rule__Relation__NameAssignment_3_1 ) ) ;
    public final void rule__Relation__Group_3__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2083:1: ( ( ( rule__Relation__NameAssignment_3_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2084:1: ( ( rule__Relation__NameAssignment_3_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2084:1: ( ( rule__Relation__NameAssignment_3_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2085:1: ( rule__Relation__NameAssignment_3_1 )
            {
             before(grammarAccess.getRelationAccess().getNameAssignment_3_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2086:1: ( rule__Relation__NameAssignment_3_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2086:2: rule__Relation__NameAssignment_3_1
            {
            pushFollow(FOLLOW_rule__Relation__NameAssignment_3_1_in_rule__Relation__Group_3__1__Impl4425);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2100:1: rule__RelationParse__Group_0__0 : rule__RelationParse__Group_0__0__Impl rule__RelationParse__Group_0__1 ;
    public final void rule__RelationParse__Group_0__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2104:1: ( rule__RelationParse__Group_0__0__Impl rule__RelationParse__Group_0__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2105:2: rule__RelationParse__Group_0__0__Impl rule__RelationParse__Group_0__1
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__0__Impl_in_rule__RelationParse__Group_0__04459);
            rule__RelationParse__Group_0__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__1_in_rule__RelationParse__Group_0__04462);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2112:1: rule__RelationParse__Group_0__0__Impl : ( ( rule__RelationParse__CompAssignment_0_0 ) ) ;
    public final void rule__RelationParse__Group_0__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2116:1: ( ( ( rule__RelationParse__CompAssignment_0_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2117:1: ( ( rule__RelationParse__CompAssignment_0_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2117:1: ( ( rule__RelationParse__CompAssignment_0_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2118:1: ( rule__RelationParse__CompAssignment_0_0 )
            {
             before(grammarAccess.getRelationParseAccess().getCompAssignment_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2119:1: ( rule__RelationParse__CompAssignment_0_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2119:2: rule__RelationParse__CompAssignment_0_0
            {
            pushFollow(FOLLOW_rule__RelationParse__CompAssignment_0_0_in_rule__RelationParse__Group_0__0__Impl4489);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2129:1: rule__RelationParse__Group_0__1 : rule__RelationParse__Group_0__1__Impl rule__RelationParse__Group_0__2 ;
    public final void rule__RelationParse__Group_0__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2133:1: ( rule__RelationParse__Group_0__1__Impl rule__RelationParse__Group_0__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2134:2: rule__RelationParse__Group_0__1__Impl rule__RelationParse__Group_0__2
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__1__Impl_in_rule__RelationParse__Group_0__14519);
            rule__RelationParse__Group_0__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__2_in_rule__RelationParse__Group_0__14522);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2141:1: rule__RelationParse__Group_0__1__Impl : ( ( rule__RelationParse__TypeAssignment_0_1 ) ) ;
    public final void rule__RelationParse__Group_0__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2145:1: ( ( ( rule__RelationParse__TypeAssignment_0_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2146:1: ( ( rule__RelationParse__TypeAssignment_0_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2146:1: ( ( rule__RelationParse__TypeAssignment_0_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2147:1: ( rule__RelationParse__TypeAssignment_0_1 )
            {
             before(grammarAccess.getRelationParseAccess().getTypeAssignment_0_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2148:1: ( rule__RelationParse__TypeAssignment_0_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2148:2: rule__RelationParse__TypeAssignment_0_1
            {
            pushFollow(FOLLOW_rule__RelationParse__TypeAssignment_0_1_in_rule__RelationParse__Group_0__1__Impl4549);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2158:1: rule__RelationParse__Group_0__2 : rule__RelationParse__Group_0__2__Impl rule__RelationParse__Group_0__3 ;
    public final void rule__RelationParse__Group_0__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2162:1: ( rule__RelationParse__Group_0__2__Impl rule__RelationParse__Group_0__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2163:2: rule__RelationParse__Group_0__2__Impl rule__RelationParse__Group_0__3
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__2__Impl_in_rule__RelationParse__Group_0__24579);
            rule__RelationParse__Group_0__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__3_in_rule__RelationParse__Group_0__24582);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2170:1: rule__RelationParse__Group_0__2__Impl : ( ( rule__RelationParse__DirectAssignment_0_2 )? ) ;
    public final void rule__RelationParse__Group_0__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2174:1: ( ( ( rule__RelationParse__DirectAssignment_0_2 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2175:1: ( ( rule__RelationParse__DirectAssignment_0_2 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2175:1: ( ( rule__RelationParse__DirectAssignment_0_2 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2176:1: ( rule__RelationParse__DirectAssignment_0_2 )?
            {
             before(grammarAccess.getRelationParseAccess().getDirectAssignment_0_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2177:1: ( rule__RelationParse__DirectAssignment_0_2 )?
            int alt25=2;
            int LA25_0 = input.LA(1);

            if ( (LA25_0==52) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2177:2: rule__RelationParse__DirectAssignment_0_2
                    {
                    pushFollow(FOLLOW_rule__RelationParse__DirectAssignment_0_2_in_rule__RelationParse__Group_0__2__Impl4609);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2187:1: rule__RelationParse__Group_0__3 : rule__RelationParse__Group_0__3__Impl rule__RelationParse__Group_0__4 ;
    public final void rule__RelationParse__Group_0__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2191:1: ( rule__RelationParse__Group_0__3__Impl rule__RelationParse__Group_0__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2192:2: rule__RelationParse__Group_0__3__Impl rule__RelationParse__Group_0__4
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__3__Impl_in_rule__RelationParse__Group_0__34640);
            rule__RelationParse__Group_0__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__4_in_rule__RelationParse__Group_0__34643);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2199:1: rule__RelationParse__Group_0__3__Impl : ( RULE_WS ) ;
    public final void rule__RelationParse__Group_0__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2203:1: ( ( RULE_WS ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2204:1: ( RULE_WS )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2204:1: ( RULE_WS )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2205:1: RULE_WS
            {
             before(grammarAccess.getRelationParseAccess().getWSTerminalRuleCall_0_3()); 
            match(input,RULE_WS,FOLLOW_RULE_WS_in_rule__RelationParse__Group_0__3__Impl4670); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2216:1: rule__RelationParse__Group_0__4 : rule__RelationParse__Group_0__4__Impl ;
    public final void rule__RelationParse__Group_0__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2220:1: ( rule__RelationParse__Group_0__4__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2221:2: rule__RelationParse__Group_0__4__Impl
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__4__Impl_in_rule__RelationParse__Group_0__44699);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2227:1: rule__RelationParse__Group_0__4__Impl : ( ( rule__RelationParse__MultiAssignment_0_4 )? ) ;
    public final void rule__RelationParse__Group_0__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2231:1: ( ( ( rule__RelationParse__MultiAssignment_0_4 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2232:1: ( ( rule__RelationParse__MultiAssignment_0_4 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2232:1: ( ( rule__RelationParse__MultiAssignment_0_4 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2233:1: ( rule__RelationParse__MultiAssignment_0_4 )?
            {
             before(grammarAccess.getRelationParseAccess().getMultiAssignment_0_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2234:1: ( rule__RelationParse__MultiAssignment_0_4 )?
            int alt26=2;
            int LA26_0 = input.LA(1);

            if ( (LA26_0==RULE_MULTI) ) {
                alt26=1;
            }
            switch (alt26) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2234:2: rule__RelationParse__MultiAssignment_0_4
                    {
                    pushFollow(FOLLOW_rule__RelationParse__MultiAssignment_0_4_in_rule__RelationParse__Group_0__4__Impl4726);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2254:1: rule__RelationParse__Group_1__0 : rule__RelationParse__Group_1__0__Impl rule__RelationParse__Group_1__1 ;
    public final void rule__RelationParse__Group_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2258:1: ( rule__RelationParse__Group_1__0__Impl rule__RelationParse__Group_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2259:2: rule__RelationParse__Group_1__0__Impl rule__RelationParse__Group_1__1
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__0__Impl_in_rule__RelationParse__Group_1__04767);
            rule__RelationParse__Group_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_1__1_in_rule__RelationParse__Group_1__04770);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2266:1: rule__RelationParse__Group_1__0__Impl : ( ( rule__RelationParse__TypeAssignment_1_0 ) ) ;
    public final void rule__RelationParse__Group_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2270:1: ( ( ( rule__RelationParse__TypeAssignment_1_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2271:1: ( ( rule__RelationParse__TypeAssignment_1_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2271:1: ( ( rule__RelationParse__TypeAssignment_1_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2272:1: ( rule__RelationParse__TypeAssignment_1_0 )
            {
             before(grammarAccess.getRelationParseAccess().getTypeAssignment_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2273:1: ( rule__RelationParse__TypeAssignment_1_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2273:2: rule__RelationParse__TypeAssignment_1_0
            {
            pushFollow(FOLLOW_rule__RelationParse__TypeAssignment_1_0_in_rule__RelationParse__Group_1__0__Impl4797);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2283:1: rule__RelationParse__Group_1__1 : rule__RelationParse__Group_1__1__Impl rule__RelationParse__Group_1__2 ;
    public final void rule__RelationParse__Group_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2287:1: ( rule__RelationParse__Group_1__1__Impl rule__RelationParse__Group_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2288:2: rule__RelationParse__Group_1__1__Impl rule__RelationParse__Group_1__2
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__1__Impl_in_rule__RelationParse__Group_1__14827);
            rule__RelationParse__Group_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_1__2_in_rule__RelationParse__Group_1__14830);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2295:1: rule__RelationParse__Group_1__1__Impl : ( ( rule__RelationParse__Alternatives_1_1 )? ) ;
    public final void rule__RelationParse__Group_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2299:1: ( ( ( rule__RelationParse__Alternatives_1_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2300:1: ( ( rule__RelationParse__Alternatives_1_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2300:1: ( ( rule__RelationParse__Alternatives_1_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2301:1: ( rule__RelationParse__Alternatives_1_1 )?
            {
             before(grammarAccess.getRelationParseAccess().getAlternatives_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2302:1: ( rule__RelationParse__Alternatives_1_1 )?
            int alt27=2;
            int LA27_0 = input.LA(1);

            if ( ((LA27_0>=52 && LA27_0<=53)) ) {
                alt27=1;
            }
            switch (alt27) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2302:2: rule__RelationParse__Alternatives_1_1
                    {
                    pushFollow(FOLLOW_rule__RelationParse__Alternatives_1_1_in_rule__RelationParse__Group_1__1__Impl4857);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2312:1: rule__RelationParse__Group_1__2 : rule__RelationParse__Group_1__2__Impl rule__RelationParse__Group_1__3 ;
    public final void rule__RelationParse__Group_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2316:1: ( rule__RelationParse__Group_1__2__Impl rule__RelationParse__Group_1__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2317:2: rule__RelationParse__Group_1__2__Impl rule__RelationParse__Group_1__3
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__2__Impl_in_rule__RelationParse__Group_1__24888);
            rule__RelationParse__Group_1__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_1__3_in_rule__RelationParse__Group_1__24891);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2324:1: rule__RelationParse__Group_1__2__Impl : ( RULE_WS ) ;
    public final void rule__RelationParse__Group_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2328:1: ( ( RULE_WS ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2329:1: ( RULE_WS )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2329:1: ( RULE_WS )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2330:1: RULE_WS
            {
             before(grammarAccess.getRelationParseAccess().getWSTerminalRuleCall_1_2()); 
            match(input,RULE_WS,FOLLOW_RULE_WS_in_rule__RelationParse__Group_1__2__Impl4918); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2341:1: rule__RelationParse__Group_1__3 : rule__RelationParse__Group_1__3__Impl ;
    public final void rule__RelationParse__Group_1__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2345:1: ( rule__RelationParse__Group_1__3__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2346:2: rule__RelationParse__Group_1__3__Impl
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__3__Impl_in_rule__RelationParse__Group_1__34947);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2352:1: rule__RelationParse__Group_1__3__Impl : ( ( rule__RelationParse__MultiAssignment_1_3 )? ) ;
    public final void rule__RelationParse__Group_1__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2356:1: ( ( ( rule__RelationParse__MultiAssignment_1_3 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2357:1: ( ( rule__RelationParse__MultiAssignment_1_3 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2357:1: ( ( rule__RelationParse__MultiAssignment_1_3 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2358:1: ( rule__RelationParse__MultiAssignment_1_3 )?
            {
             before(grammarAccess.getRelationParseAccess().getMultiAssignment_1_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2359:1: ( rule__RelationParse__MultiAssignment_1_3 )?
            int alt28=2;
            int LA28_0 = input.LA(1);

            if ( (LA28_0==RULE_MULTI) ) {
                alt28=1;
            }
            switch (alt28) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2359:2: rule__RelationParse__MultiAssignment_1_3
                    {
                    pushFollow(FOLLOW_rule__RelationParse__MultiAssignment_1_3_in_rule__RelationParse__Group_1__3__Impl4974);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2377:1: rule__StrongRel__Group__0 : rule__StrongRel__Group__0__Impl rule__StrongRel__Group__1 ;
    public final void rule__StrongRel__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2381:1: ( rule__StrongRel__Group__0__Impl rule__StrongRel__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2382:2: rule__StrongRel__Group__0__Impl rule__StrongRel__Group__1
            {
            pushFollow(FOLLOW_rule__StrongRel__Group__0__Impl_in_rule__StrongRel__Group__05013);
            rule__StrongRel__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__StrongRel__Group__1_in_rule__StrongRel__Group__05016);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2389:1: rule__StrongRel__Group__0__Impl : ( '-' ) ;
    public final void rule__StrongRel__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2393:1: ( ( '-' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2394:1: ( '-' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2394:1: ( '-' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2395:1: '-'
            {
             before(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_0()); 
            match(input,46,FOLLOW_46_in_rule__StrongRel__Group__0__Impl5044); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2408:1: rule__StrongRel__Group__1 : rule__StrongRel__Group__1__Impl rule__StrongRel__Group__2 ;
    public final void rule__StrongRel__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2412:1: ( rule__StrongRel__Group__1__Impl rule__StrongRel__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2413:2: rule__StrongRel__Group__1__Impl rule__StrongRel__Group__2
            {
            pushFollow(FOLLOW_rule__StrongRel__Group__1__Impl_in_rule__StrongRel__Group__15075);
            rule__StrongRel__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__StrongRel__Group__2_in_rule__StrongRel__Group__15078);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2420:1: rule__StrongRel__Group__1__Impl : ( ( rule__StrongRel__Alternatives_1 )? ) ;
    public final void rule__StrongRel__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2424:1: ( ( ( rule__StrongRel__Alternatives_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2425:1: ( ( rule__StrongRel__Alternatives_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2425:1: ( ( rule__StrongRel__Alternatives_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2426:1: ( rule__StrongRel__Alternatives_1 )?
            {
             before(grammarAccess.getStrongRelAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2427:1: ( rule__StrongRel__Alternatives_1 )?
            int alt29=2;
            int LA29_0 = input.LA(1);

            if ( ((LA29_0>=12 && LA29_0<=15)) ) {
                alt29=1;
            }
            switch (alt29) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2427:2: rule__StrongRel__Alternatives_1
                    {
                    pushFollow(FOLLOW_rule__StrongRel__Alternatives_1_in_rule__StrongRel__Group__1__Impl5105);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2437:1: rule__StrongRel__Group__2 : rule__StrongRel__Group__2__Impl ;
    public final void rule__StrongRel__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2441:1: ( rule__StrongRel__Group__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2442:2: rule__StrongRel__Group__2__Impl
            {
            pushFollow(FOLLOW_rule__StrongRel__Group__2__Impl_in_rule__StrongRel__Group__25136);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2448:1: rule__StrongRel__Group__2__Impl : ( ( ( '-' ) ) ( ( '-' )* ) ) ;
    public final void rule__StrongRel__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2452:1: ( ( ( ( '-' ) ) ( ( '-' )* ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2453:1: ( ( ( '-' ) ) ( ( '-' )* ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2453:1: ( ( ( '-' ) ) ( ( '-' )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2454:1: ( ( '-' ) ) ( ( '-' )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2454:1: ( ( '-' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2455:1: ( '-' )
            {
             before(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2456:1: ( '-' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2457:2: '-'
            {
            match(input,46,FOLLOW_46_in_rule__StrongRel__Group__2__Impl5167); 

            }

             after(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 

            }

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2461:1: ( ( '-' )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2462:1: ( '-' )*
            {
             before(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2463:1: ( '-' )*
            loop30:
            do {
                int alt30=2;
                int LA30_0 = input.LA(1);

                if ( (LA30_0==46) ) {
                    alt30=1;
                }


                switch (alt30) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2464:2: '-'
            	    {
            	    match(input,46,FOLLOW_46_in_rule__StrongRel__Group__2__Impl5183); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2482:1: rule__WeakRel__Group__0 : rule__WeakRel__Group__0__Impl rule__WeakRel__Group__1 ;
    public final void rule__WeakRel__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2486:1: ( rule__WeakRel__Group__0__Impl rule__WeakRel__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2487:2: rule__WeakRel__Group__0__Impl rule__WeakRel__Group__1
            {
            pushFollow(FOLLOW_rule__WeakRel__Group__0__Impl_in_rule__WeakRel__Group__05224);
            rule__WeakRel__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__WeakRel__Group__1_in_rule__WeakRel__Group__05227);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2494:1: rule__WeakRel__Group__0__Impl : ( '.' ) ;
    public final void rule__WeakRel__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2498:1: ( ( '.' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2499:1: ( '.' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2499:1: ( '.' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2500:1: '.'
            {
             before(grammarAccess.getWeakRelAccess().getFullStopKeyword_0()); 
            match(input,47,FOLLOW_47_in_rule__WeakRel__Group__0__Impl5255); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2513:1: rule__WeakRel__Group__1 : rule__WeakRel__Group__1__Impl rule__WeakRel__Group__2 ;
    public final void rule__WeakRel__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2517:1: ( rule__WeakRel__Group__1__Impl rule__WeakRel__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2518:2: rule__WeakRel__Group__1__Impl rule__WeakRel__Group__2
            {
            pushFollow(FOLLOW_rule__WeakRel__Group__1__Impl_in_rule__WeakRel__Group__15286);
            rule__WeakRel__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__WeakRel__Group__2_in_rule__WeakRel__Group__15289);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2525:1: rule__WeakRel__Group__1__Impl : ( ( rule__WeakRel__Alternatives_1 )? ) ;
    public final void rule__WeakRel__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2529:1: ( ( ( rule__WeakRel__Alternatives_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2530:1: ( ( rule__WeakRel__Alternatives_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2530:1: ( ( rule__WeakRel__Alternatives_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2531:1: ( rule__WeakRel__Alternatives_1 )?
            {
             before(grammarAccess.getWeakRelAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2532:1: ( rule__WeakRel__Alternatives_1 )?
            int alt31=2;
            int LA31_0 = input.LA(1);

            if ( ((LA31_0>=12 && LA31_0<=15)) ) {
                alt31=1;
            }
            switch (alt31) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2532:2: rule__WeakRel__Alternatives_1
                    {
                    pushFollow(FOLLOW_rule__WeakRel__Alternatives_1_in_rule__WeakRel__Group__1__Impl5316);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2542:1: rule__WeakRel__Group__2 : rule__WeakRel__Group__2__Impl ;
    public final void rule__WeakRel__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2546:1: ( rule__WeakRel__Group__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2547:2: rule__WeakRel__Group__2__Impl
            {
            pushFollow(FOLLOW_rule__WeakRel__Group__2__Impl_in_rule__WeakRel__Group__25347);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2553:1: rule__WeakRel__Group__2__Impl : ( ( ( '.' ) ) ( ( '.' )* ) ) ;
    public final void rule__WeakRel__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2557:1: ( ( ( ( '.' ) ) ( ( '.' )* ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2558:1: ( ( ( '.' ) ) ( ( '.' )* ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2558:1: ( ( ( '.' ) ) ( ( '.' )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2559:1: ( ( '.' ) ) ( ( '.' )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2559:1: ( ( '.' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2560:1: ( '.' )
            {
             before(grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2561:1: ( '.' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2562:2: '.'
            {
            match(input,47,FOLLOW_47_in_rule__WeakRel__Group__2__Impl5378); 

            }

             after(grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 

            }

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2566:1: ( ( '.' )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2567:1: ( '.' )*
            {
             before(grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2568:1: ( '.' )*
            loop32:
            do {
                int alt32=2;
                int LA32_0 = input.LA(1);

                if ( (LA32_0==47) ) {
                    alt32=1;
                }


                switch (alt32) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2569:2: '.'
            	    {
            	    match(input,47,FOLLOW_47_in_rule__WeakRel__Group__2__Impl5394); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2587:1: rule__Enumer__Group__0 : rule__Enumer__Group__0__Impl rule__Enumer__Group__1 ;
    public final void rule__Enumer__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2591:1: ( rule__Enumer__Group__0__Impl rule__Enumer__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2592:2: rule__Enumer__Group__0__Impl rule__Enumer__Group__1
            {
            pushFollow(FOLLOW_rule__Enumer__Group__0__Impl_in_rule__Enumer__Group__05435);
            rule__Enumer__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__1_in_rule__Enumer__Group__05438);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2599:1: rule__Enumer__Group__0__Impl : ( 'enum' ) ;
    public final void rule__Enumer__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2603:1: ( ( 'enum' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2604:1: ( 'enum' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2604:1: ( 'enum' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2605:1: 'enum'
            {
             before(grammarAccess.getEnumerAccess().getEnumKeyword_0()); 
            match(input,25,FOLLOW_25_in_rule__Enumer__Group__0__Impl5466); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2618:1: rule__Enumer__Group__1 : rule__Enumer__Group__1__Impl rule__Enumer__Group__2 ;
    public final void rule__Enumer__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2622:1: ( rule__Enumer__Group__1__Impl rule__Enumer__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2623:2: rule__Enumer__Group__1__Impl rule__Enumer__Group__2
            {
            pushFollow(FOLLOW_rule__Enumer__Group__1__Impl_in_rule__Enumer__Group__15497);
            rule__Enumer__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__2_in_rule__Enumer__Group__15500);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2630:1: rule__Enumer__Group__1__Impl : ( ( rule__Enumer__NameAssignment_1 ) ) ;
    public final void rule__Enumer__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2634:1: ( ( ( rule__Enumer__NameAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2635:1: ( ( rule__Enumer__NameAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2635:1: ( ( rule__Enumer__NameAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2636:1: ( rule__Enumer__NameAssignment_1 )
            {
             before(grammarAccess.getEnumerAccess().getNameAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2637:1: ( rule__Enumer__NameAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2637:2: rule__Enumer__NameAssignment_1
            {
            pushFollow(FOLLOW_rule__Enumer__NameAssignment_1_in_rule__Enumer__Group__1__Impl5527);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2647:1: rule__Enumer__Group__2 : rule__Enumer__Group__2__Impl rule__Enumer__Group__3 ;
    public final void rule__Enumer__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2651:1: ( rule__Enumer__Group__2__Impl rule__Enumer__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2652:2: rule__Enumer__Group__2__Impl rule__Enumer__Group__3
            {
            pushFollow(FOLLOW_rule__Enumer__Group__2__Impl_in_rule__Enumer__Group__25557);
            rule__Enumer__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__3_in_rule__Enumer__Group__25560);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2659:1: rule__Enumer__Group__2__Impl : ( '{' ) ;
    public final void rule__Enumer__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2663:1: ( ( '{' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2664:1: ( '{' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2664:1: ( '{' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2665:1: '{'
            {
             before(grammarAccess.getEnumerAccess().getLeftCurlyBracketKeyword_2()); 
            match(input,42,FOLLOW_42_in_rule__Enumer__Group__2__Impl5588); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2678:1: rule__Enumer__Group__3 : rule__Enumer__Group__3__Impl rule__Enumer__Group__4 ;
    public final void rule__Enumer__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2682:1: ( rule__Enumer__Group__3__Impl rule__Enumer__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2683:2: rule__Enumer__Group__3__Impl rule__Enumer__Group__4
            {
            pushFollow(FOLLOW_rule__Enumer__Group__3__Impl_in_rule__Enumer__Group__35619);
            rule__Enumer__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__4_in_rule__Enumer__Group__35622);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2690:1: rule__Enumer__Group__3__Impl : ( ( RULE_END_LINE )? ) ;
    public final void rule__Enumer__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2694:1: ( ( ( RULE_END_LINE )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2695:1: ( ( RULE_END_LINE )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2695:1: ( ( RULE_END_LINE )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2696:1: ( RULE_END_LINE )?
            {
             before(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2697:1: ( RULE_END_LINE )?
            int alt33=2;
            int LA33_0 = input.LA(1);

            if ( (LA33_0==RULE_END_LINE) ) {
                alt33=1;
            }
            switch (alt33) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2697:3: RULE_END_LINE
                    {
                    match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__3__Impl5650); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2707:1: rule__Enumer__Group__4 : rule__Enumer__Group__4__Impl rule__Enumer__Group__5 ;
    public final void rule__Enumer__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2711:1: ( rule__Enumer__Group__4__Impl rule__Enumer__Group__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2712:2: rule__Enumer__Group__4__Impl rule__Enumer__Group__5
            {
            pushFollow(FOLLOW_rule__Enumer__Group__4__Impl_in_rule__Enumer__Group__45681);
            rule__Enumer__Group__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__5_in_rule__Enumer__Group__45684);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2719:1: rule__Enumer__Group__4__Impl : ( ( rule__Enumer__Group_4__0 )* ) ;
    public final void rule__Enumer__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2723:1: ( ( ( rule__Enumer__Group_4__0 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2724:1: ( ( rule__Enumer__Group_4__0 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2724:1: ( ( rule__Enumer__Group_4__0 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2725:1: ( rule__Enumer__Group_4__0 )*
            {
             before(grammarAccess.getEnumerAccess().getGroup_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2726:1: ( rule__Enumer__Group_4__0 )*
            loop34:
            do {
                int alt34=2;
                int LA34_0 = input.LA(1);

                if ( (LA34_0==RULE_ID) ) {
                    alt34=1;
                }


                switch (alt34) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2726:2: rule__Enumer__Group_4__0
            	    {
            	    pushFollow(FOLLOW_rule__Enumer__Group_4__0_in_rule__Enumer__Group__4__Impl5711);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2736:1: rule__Enumer__Group__5 : rule__Enumer__Group__5__Impl rule__Enumer__Group__6 ;
    public final void rule__Enumer__Group__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2740:1: ( rule__Enumer__Group__5__Impl rule__Enumer__Group__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2741:2: rule__Enumer__Group__5__Impl rule__Enumer__Group__6
            {
            pushFollow(FOLLOW_rule__Enumer__Group__5__Impl_in_rule__Enumer__Group__55742);
            rule__Enumer__Group__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__6_in_rule__Enumer__Group__55745);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2748:1: rule__Enumer__Group__5__Impl : ( '}' ) ;
    public final void rule__Enumer__Group__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2752:1: ( ( '}' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2753:1: ( '}' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2753:1: ( '}' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2754:1: '}'
            {
             before(grammarAccess.getEnumerAccess().getRightCurlyBracketKeyword_5()); 
            match(input,43,FOLLOW_43_in_rule__Enumer__Group__5__Impl5773); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2767:1: rule__Enumer__Group__6 : rule__Enumer__Group__6__Impl ;
    public final void rule__Enumer__Group__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2771:1: ( rule__Enumer__Group__6__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2772:2: rule__Enumer__Group__6__Impl
            {
            pushFollow(FOLLOW_rule__Enumer__Group__6__Impl_in_rule__Enumer__Group__65804);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2778:1: rule__Enumer__Group__6__Impl : ( RULE_END_LINE ) ;
    public final void rule__Enumer__Group__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2782:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2783:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2783:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2784:1: RULE_END_LINE
            {
             before(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_6()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__6__Impl5831); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2809:1: rule__Enumer__Group_4__0 : rule__Enumer__Group_4__0__Impl rule__Enumer__Group_4__1 ;
    public final void rule__Enumer__Group_4__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2813:1: ( rule__Enumer__Group_4__0__Impl rule__Enumer__Group_4__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2814:2: rule__Enumer__Group_4__0__Impl rule__Enumer__Group_4__1
            {
            pushFollow(FOLLOW_rule__Enumer__Group_4__0__Impl_in_rule__Enumer__Group_4__05874);
            rule__Enumer__Group_4__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group_4__1_in_rule__Enumer__Group_4__05877);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2821:1: rule__Enumer__Group_4__0__Impl : ( ( rule__Enumer__TypesAssignment_4_0 ) ) ;
    public final void rule__Enumer__Group_4__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2825:1: ( ( ( rule__Enumer__TypesAssignment_4_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2826:1: ( ( rule__Enumer__TypesAssignment_4_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2826:1: ( ( rule__Enumer__TypesAssignment_4_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2827:1: ( rule__Enumer__TypesAssignment_4_0 )
            {
             before(grammarAccess.getEnumerAccess().getTypesAssignment_4_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2828:1: ( rule__Enumer__TypesAssignment_4_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2828:2: rule__Enumer__TypesAssignment_4_0
            {
            pushFollow(FOLLOW_rule__Enumer__TypesAssignment_4_0_in_rule__Enumer__Group_4__0__Impl5904);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2838:1: rule__Enumer__Group_4__1 : rule__Enumer__Group_4__1__Impl ;
    public final void rule__Enumer__Group_4__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2842:1: ( rule__Enumer__Group_4__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2843:2: rule__Enumer__Group_4__1__Impl
            {
            pushFollow(FOLLOW_rule__Enumer__Group_4__1__Impl_in_rule__Enumer__Group_4__15934);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2849:1: rule__Enumer__Group_4__1__Impl : ( ( RULE_END_LINE )? ) ;
    public final void rule__Enumer__Group_4__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2853:1: ( ( ( RULE_END_LINE )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2854:1: ( ( RULE_END_LINE )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2854:1: ( ( RULE_END_LINE )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2855:1: ( RULE_END_LINE )?
            {
             before(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_4_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2856:1: ( RULE_END_LINE )?
            int alt35=2;
            int LA35_0 = input.LA(1);

            if ( (LA35_0==RULE_END_LINE) ) {
                alt35=1;
            }
            switch (alt35) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2856:3: RULE_END_LINE
                    {
                    match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Enumer__Group_4__1__Impl5962); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2870:1: rule__Clazz__Group__0 : rule__Clazz__Group__0__Impl rule__Clazz__Group__1 ;
    public final void rule__Clazz__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2874:1: ( rule__Clazz__Group__0__Impl rule__Clazz__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2875:2: rule__Clazz__Group__0__Impl rule__Clazz__Group__1
            {
            pushFollow(FOLLOW_rule__Clazz__Group__0__Impl_in_rule__Clazz__Group__05997);
            rule__Clazz__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__1_in_rule__Clazz__Group__06000);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2882:1: rule__Clazz__Group__0__Impl : ( 'class' ) ;
    public final void rule__Clazz__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2886:1: ( ( 'class' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2887:1: ( 'class' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2887:1: ( 'class' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2888:1: 'class'
            {
             before(grammarAccess.getClazzAccess().getClassKeyword_0()); 
            match(input,24,FOLLOW_24_in_rule__Clazz__Group__0__Impl6028); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2901:1: rule__Clazz__Group__1 : rule__Clazz__Group__1__Impl rule__Clazz__Group__2 ;
    public final void rule__Clazz__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2905:1: ( rule__Clazz__Group__1__Impl rule__Clazz__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2906:2: rule__Clazz__Group__1__Impl rule__Clazz__Group__2
            {
            pushFollow(FOLLOW_rule__Clazz__Group__1__Impl_in_rule__Clazz__Group__16059);
            rule__Clazz__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__2_in_rule__Clazz__Group__16062);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2913:1: rule__Clazz__Group__1__Impl : ( ( rule__Clazz__NameAssignment_1 ) ) ;
    public final void rule__Clazz__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2917:1: ( ( ( rule__Clazz__NameAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2918:1: ( ( rule__Clazz__NameAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2918:1: ( ( rule__Clazz__NameAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2919:1: ( rule__Clazz__NameAssignment_1 )
            {
             before(grammarAccess.getClazzAccess().getNameAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2920:1: ( rule__Clazz__NameAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2920:2: rule__Clazz__NameAssignment_1
            {
            pushFollow(FOLLOW_rule__Clazz__NameAssignment_1_in_rule__Clazz__Group__1__Impl6089);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2930:1: rule__Clazz__Group__2 : rule__Clazz__Group__2__Impl rule__Clazz__Group__3 ;
    public final void rule__Clazz__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2934:1: ( rule__Clazz__Group__2__Impl rule__Clazz__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2935:2: rule__Clazz__Group__2__Impl rule__Clazz__Group__3
            {
            pushFollow(FOLLOW_rule__Clazz__Group__2__Impl_in_rule__Clazz__Group__26119);
            rule__Clazz__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__3_in_rule__Clazz__Group__26122);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2942:1: rule__Clazz__Group__2__Impl : ( ( rule__Clazz__Group_2__0 )? ) ;
    public final void rule__Clazz__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2946:1: ( ( ( rule__Clazz__Group_2__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2947:1: ( ( rule__Clazz__Group_2__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2947:1: ( ( rule__Clazz__Group_2__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2948:1: ( rule__Clazz__Group_2__0 )?
            {
             before(grammarAccess.getClazzAccess().getGroup_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2949:1: ( rule__Clazz__Group_2__0 )?
            int alt36=2;
            int LA36_0 = input.LA(1);

            if ( (LA36_0==44) ) {
                alt36=1;
            }
            switch (alt36) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2949:2: rule__Clazz__Group_2__0
                    {
                    pushFollow(FOLLOW_rule__Clazz__Group_2__0_in_rule__Clazz__Group__2__Impl6149);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2959:1: rule__Clazz__Group__3 : rule__Clazz__Group__3__Impl rule__Clazz__Group__4 ;
    public final void rule__Clazz__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2963:1: ( rule__Clazz__Group__3__Impl rule__Clazz__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2964:2: rule__Clazz__Group__3__Impl rule__Clazz__Group__4
            {
            pushFollow(FOLLOW_rule__Clazz__Group__3__Impl_in_rule__Clazz__Group__36180);
            rule__Clazz__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__4_in_rule__Clazz__Group__36183);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2971:1: rule__Clazz__Group__3__Impl : ( ( rule__Clazz__Group_3__0 )? ) ;
    public final void rule__Clazz__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2975:1: ( ( ( rule__Clazz__Group_3__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2976:1: ( ( rule__Clazz__Group_3__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2976:1: ( ( rule__Clazz__Group_3__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2977:1: ( rule__Clazz__Group_3__0 )?
            {
             before(grammarAccess.getClazzAccess().getGroup_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2978:1: ( rule__Clazz__Group_3__0 )?
            int alt37=2;
            int LA37_0 = input.LA(1);

            if ( (LA37_0==42) ) {
                alt37=1;
            }
            switch (alt37) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2978:2: rule__Clazz__Group_3__0
                    {
                    pushFollow(FOLLOW_rule__Clazz__Group_3__0_in_rule__Clazz__Group__3__Impl6210);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2988:1: rule__Clazz__Group__4 : rule__Clazz__Group__4__Impl ;
    public final void rule__Clazz__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2992:1: ( rule__Clazz__Group__4__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2993:2: rule__Clazz__Group__4__Impl
            {
            pushFollow(FOLLOW_rule__Clazz__Group__4__Impl_in_rule__Clazz__Group__46241);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2999:1: rule__Clazz__Group__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Clazz__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3003:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3004:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3004:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3005:1: RULE_END_LINE
            {
             before(grammarAccess.getClazzAccess().getEND_LINETerminalRuleCall_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Clazz__Group__4__Impl6268); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3026:1: rule__Clazz__Group_2__0 : rule__Clazz__Group_2__0__Impl rule__Clazz__Group_2__1 ;
    public final void rule__Clazz__Group_2__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3030:1: ( rule__Clazz__Group_2__0__Impl rule__Clazz__Group_2__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3031:2: rule__Clazz__Group_2__0__Impl rule__Clazz__Group_2__1
            {
            pushFollow(FOLLOW_rule__Clazz__Group_2__0__Impl_in_rule__Clazz__Group_2__06307);
            rule__Clazz__Group_2__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_2__1_in_rule__Clazz__Group_2__06310);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3038:1: rule__Clazz__Group_2__0__Impl : ( '<<' ) ;
    public final void rule__Clazz__Group_2__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3042:1: ( ( '<<' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3043:1: ( '<<' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3043:1: ( '<<' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3044:1: '<<'
            {
             before(grammarAccess.getClazzAccess().getLessThanSignLessThanSignKeyword_2_0()); 
            match(input,44,FOLLOW_44_in_rule__Clazz__Group_2__0__Impl6338); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3057:1: rule__Clazz__Group_2__1 : rule__Clazz__Group_2__1__Impl rule__Clazz__Group_2__2 ;
    public final void rule__Clazz__Group_2__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3061:1: ( rule__Clazz__Group_2__1__Impl rule__Clazz__Group_2__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3062:2: rule__Clazz__Group_2__1__Impl rule__Clazz__Group_2__2
            {
            pushFollow(FOLLOW_rule__Clazz__Group_2__1__Impl_in_rule__Clazz__Group_2__16369);
            rule__Clazz__Group_2__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_2__2_in_rule__Clazz__Group_2__16372);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3069:1: rule__Clazz__Group_2__1__Impl : ( ( rule__Clazz__StereotypeAssignment_2_1 ) ) ;
    public final void rule__Clazz__Group_2__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3073:1: ( ( ( rule__Clazz__StereotypeAssignment_2_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3074:1: ( ( rule__Clazz__StereotypeAssignment_2_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3074:1: ( ( rule__Clazz__StereotypeAssignment_2_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3075:1: ( rule__Clazz__StereotypeAssignment_2_1 )
            {
             before(grammarAccess.getClazzAccess().getStereotypeAssignment_2_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3076:1: ( rule__Clazz__StereotypeAssignment_2_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3076:2: rule__Clazz__StereotypeAssignment_2_1
            {
            pushFollow(FOLLOW_rule__Clazz__StereotypeAssignment_2_1_in_rule__Clazz__Group_2__1__Impl6399);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3086:1: rule__Clazz__Group_2__2 : rule__Clazz__Group_2__2__Impl ;
    public final void rule__Clazz__Group_2__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3090:1: ( rule__Clazz__Group_2__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3091:2: rule__Clazz__Group_2__2__Impl
            {
            pushFollow(FOLLOW_rule__Clazz__Group_2__2__Impl_in_rule__Clazz__Group_2__26429);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3097:1: rule__Clazz__Group_2__2__Impl : ( '>>' ) ;
    public final void rule__Clazz__Group_2__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3101:1: ( ( '>>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3102:1: ( '>>' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3102:1: ( '>>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3103:1: '>>'
            {
             before(grammarAccess.getClazzAccess().getGreaterThanSignGreaterThanSignKeyword_2_2()); 
            match(input,45,FOLLOW_45_in_rule__Clazz__Group_2__2__Impl6457); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3122:1: rule__Clazz__Group_3__0 : rule__Clazz__Group_3__0__Impl rule__Clazz__Group_3__1 ;
    public final void rule__Clazz__Group_3__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3126:1: ( rule__Clazz__Group_3__0__Impl rule__Clazz__Group_3__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3127:2: rule__Clazz__Group_3__0__Impl rule__Clazz__Group_3__1
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__0__Impl_in_rule__Clazz__Group_3__06494);
            rule__Clazz__Group_3__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_3__1_in_rule__Clazz__Group_3__06497);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3134:1: rule__Clazz__Group_3__0__Impl : ( '{' ) ;
    public final void rule__Clazz__Group_3__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3138:1: ( ( '{' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3139:1: ( '{' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3139:1: ( '{' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3140:1: '{'
            {
             before(grammarAccess.getClazzAccess().getLeftCurlyBracketKeyword_3_0()); 
            match(input,42,FOLLOW_42_in_rule__Clazz__Group_3__0__Impl6525); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3153:1: rule__Clazz__Group_3__1 : rule__Clazz__Group_3__1__Impl rule__Clazz__Group_3__2 ;
    public final void rule__Clazz__Group_3__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3157:1: ( rule__Clazz__Group_3__1__Impl rule__Clazz__Group_3__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3158:2: rule__Clazz__Group_3__1__Impl rule__Clazz__Group_3__2
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__1__Impl_in_rule__Clazz__Group_3__16556);
            rule__Clazz__Group_3__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_3__2_in_rule__Clazz__Group_3__16559);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3165:1: rule__Clazz__Group_3__1__Impl : ( ( RULE_END_LINE )? ) ;
    public final void rule__Clazz__Group_3__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3169:1: ( ( ( RULE_END_LINE )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3170:1: ( ( RULE_END_LINE )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3170:1: ( ( RULE_END_LINE )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3171:1: ( RULE_END_LINE )?
            {
             before(grammarAccess.getClazzAccess().getEND_LINETerminalRuleCall_3_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3172:1: ( RULE_END_LINE )?
            int alt38=2;
            int LA38_0 = input.LA(1);

            if ( (LA38_0==RULE_END_LINE) ) {
                alt38=1;
            }
            switch (alt38) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3172:3: RULE_END_LINE
                    {
                    match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Clazz__Group_3__1__Impl6587); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3182:1: rule__Clazz__Group_3__2 : rule__Clazz__Group_3__2__Impl rule__Clazz__Group_3__3 ;
    public final void rule__Clazz__Group_3__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3186:1: ( rule__Clazz__Group_3__2__Impl rule__Clazz__Group_3__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3187:2: rule__Clazz__Group_3__2__Impl rule__Clazz__Group_3__3
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__2__Impl_in_rule__Clazz__Group_3__26618);
            rule__Clazz__Group_3__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_3__3_in_rule__Clazz__Group_3__26621);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3194:1: rule__Clazz__Group_3__2__Impl : ( ( rule__Clazz__PropertiesAssignment_3_2 )* ) ;
    public final void rule__Clazz__Group_3__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3198:1: ( ( ( rule__Clazz__PropertiesAssignment_3_2 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3199:1: ( ( rule__Clazz__PropertiesAssignment_3_2 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3199:1: ( ( rule__Clazz__PropertiesAssignment_3_2 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3200:1: ( rule__Clazz__PropertiesAssignment_3_2 )*
            {
             before(grammarAccess.getClazzAccess().getPropertiesAssignment_3_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3201:1: ( rule__Clazz__PropertiesAssignment_3_2 )*
            loop39:
            do {
                int alt39=2;
                int LA39_0 = input.LA(1);

                if ( (LA39_0==RULE_ID) ) {
                    alt39=1;
                }


                switch (alt39) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3201:2: rule__Clazz__PropertiesAssignment_3_2
            	    {
            	    pushFollow(FOLLOW_rule__Clazz__PropertiesAssignment_3_2_in_rule__Clazz__Group_3__2__Impl6648);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3211:1: rule__Clazz__Group_3__3 : rule__Clazz__Group_3__3__Impl ;
    public final void rule__Clazz__Group_3__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3215:1: ( rule__Clazz__Group_3__3__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3216:2: rule__Clazz__Group_3__3__Impl
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__3__Impl_in_rule__Clazz__Group_3__36679);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3222:1: rule__Clazz__Group_3__3__Impl : ( '}' ) ;
    public final void rule__Clazz__Group_3__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3226:1: ( ( '}' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3227:1: ( '}' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3227:1: ( '}' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3228:1: '}'
            {
             before(grammarAccess.getClazzAccess().getRightCurlyBracketKeyword_3_3()); 
            match(input,43,FOLLOW_43_in_rule__Clazz__Group_3__3__Impl6707); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3249:1: rule__Property__Group__0 : rule__Property__Group__0__Impl rule__Property__Group__1 ;
    public final void rule__Property__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3253:1: ( rule__Property__Group__0__Impl rule__Property__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3254:2: rule__Property__Group__0__Impl rule__Property__Group__1
            {
            pushFollow(FOLLOW_rule__Property__Group__0__Impl_in_rule__Property__Group__06746);
            rule__Property__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group__1_in_rule__Property__Group__06749);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3261:1: rule__Property__Group__0__Impl : ( ( rule__Property__NameAssignment_0 ) ) ;
    public final void rule__Property__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3265:1: ( ( ( rule__Property__NameAssignment_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3266:1: ( ( rule__Property__NameAssignment_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3266:1: ( ( rule__Property__NameAssignment_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3267:1: ( rule__Property__NameAssignment_0 )
            {
             before(grammarAccess.getPropertyAccess().getNameAssignment_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3268:1: ( rule__Property__NameAssignment_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3268:2: rule__Property__NameAssignment_0
            {
            pushFollow(FOLLOW_rule__Property__NameAssignment_0_in_rule__Property__Group__0__Impl6776);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3278:1: rule__Property__Group__1 : rule__Property__Group__1__Impl rule__Property__Group__2 ;
    public final void rule__Property__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3282:1: ( rule__Property__Group__1__Impl rule__Property__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3283:2: rule__Property__Group__1__Impl rule__Property__Group__2
            {
            pushFollow(FOLLOW_rule__Property__Group__1__Impl_in_rule__Property__Group__16806);
            rule__Property__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group__2_in_rule__Property__Group__16809);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3290:1: rule__Property__Group__1__Impl : ( ( rule__Property__Alternatives_1 ) ) ;
    public final void rule__Property__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3294:1: ( ( ( rule__Property__Alternatives_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3295:1: ( ( rule__Property__Alternatives_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3295:1: ( ( rule__Property__Alternatives_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3296:1: ( rule__Property__Alternatives_1 )
            {
             before(grammarAccess.getPropertyAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3297:1: ( rule__Property__Alternatives_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3297:2: rule__Property__Alternatives_1
            {
            pushFollow(FOLLOW_rule__Property__Alternatives_1_in_rule__Property__Group__1__Impl6836);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3307:1: rule__Property__Group__2 : rule__Property__Group__2__Impl ;
    public final void rule__Property__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3311:1: ( rule__Property__Group__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3312:2: rule__Property__Group__2__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group__2__Impl_in_rule__Property__Group__26866);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3318:1: rule__Property__Group__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Property__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3322:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3323:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3323:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3324:1: RULE_END_LINE
            {
             before(grammarAccess.getPropertyAccess().getEND_LINETerminalRuleCall_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Property__Group__2__Impl6893); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3341:1: rule__Property__Group_1_0__0 : rule__Property__Group_1_0__0__Impl rule__Property__Group_1_0__1 ;
    public final void rule__Property__Group_1_0__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3345:1: ( rule__Property__Group_1_0__0__Impl rule__Property__Group_1_0__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3346:2: rule__Property__Group_1_0__0__Impl rule__Property__Group_1_0__1
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0__0__Impl_in_rule__Property__Group_1_0__06928);
            rule__Property__Group_1_0__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group_1_0__1_in_rule__Property__Group_1_0__06931);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3353:1: rule__Property__Group_1_0__0__Impl : ( ( rule__Property__OptionalAssignment_1_0_0 )? ) ;
    public final void rule__Property__Group_1_0__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3357:1: ( ( ( rule__Property__OptionalAssignment_1_0_0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3358:1: ( ( rule__Property__OptionalAssignment_1_0_0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3358:1: ( ( rule__Property__OptionalAssignment_1_0_0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3359:1: ( rule__Property__OptionalAssignment_1_0_0 )?
            {
             before(grammarAccess.getPropertyAccess().getOptionalAssignment_1_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3360:1: ( rule__Property__OptionalAssignment_1_0_0 )?
            int alt40=2;
            int LA40_0 = input.LA(1);

            if ( (LA40_0==30) ) {
                alt40=1;
            }
            switch (alt40) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3360:2: rule__Property__OptionalAssignment_1_0_0
                    {
                    pushFollow(FOLLOW_rule__Property__OptionalAssignment_1_0_0_in_rule__Property__Group_1_0__0__Impl6958);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3370:1: rule__Property__Group_1_0__1 : rule__Property__Group_1_0__1__Impl ;
    public final void rule__Property__Group_1_0__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3374:1: ( rule__Property__Group_1_0__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3375:2: rule__Property__Group_1_0__1__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0__1__Impl_in_rule__Property__Group_1_0__16989);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3381:1: rule__Property__Group_1_0__1__Impl : ( ( rule__Property__Group_1_0_1__0 )? ) ;
    public final void rule__Property__Group_1_0__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3385:1: ( ( ( rule__Property__Group_1_0_1__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3386:1: ( ( rule__Property__Group_1_0_1__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3386:1: ( ( rule__Property__Group_1_0_1__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3387:1: ( rule__Property__Group_1_0_1__0 )?
            {
             before(grammarAccess.getPropertyAccess().getGroup_1_0_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3388:1: ( rule__Property__Group_1_0_1__0 )?
            int alt41=2;
            int LA41_0 = input.LA(1);

            if ( (LA41_0==29) ) {
                alt41=1;
            }
            switch (alt41) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3388:2: rule__Property__Group_1_0_1__0
                    {
                    pushFollow(FOLLOW_rule__Property__Group_1_0_1__0_in_rule__Property__Group_1_0__1__Impl7016);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3402:1: rule__Property__Group_1_0_1__0 : rule__Property__Group_1_0_1__0__Impl rule__Property__Group_1_0_1__1 ;
    public final void rule__Property__Group_1_0_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3406:1: ( rule__Property__Group_1_0_1__0__Impl rule__Property__Group_1_0_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3407:2: rule__Property__Group_1_0_1__0__Impl rule__Property__Group_1_0_1__1
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0_1__0__Impl_in_rule__Property__Group_1_0_1__07051);
            rule__Property__Group_1_0_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group_1_0_1__1_in_rule__Property__Group_1_0_1__07054);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3414:1: rule__Property__Group_1_0_1__0__Impl : ( ':' ) ;
    public final void rule__Property__Group_1_0_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3418:1: ( ( ':' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3419:1: ( ':' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3419:1: ( ':' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3420:1: ':'
            {
             before(grammarAccess.getPropertyAccess().getColonKeyword_1_0_1_0()); 
            match(input,29,FOLLOW_29_in_rule__Property__Group_1_0_1__0__Impl7082); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3433:1: rule__Property__Group_1_0_1__1 : rule__Property__Group_1_0_1__1__Impl ;
    public final void rule__Property__Group_1_0_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3437:1: ( rule__Property__Group_1_0_1__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3438:2: rule__Property__Group_1_0_1__1__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0_1__1__Impl_in_rule__Property__Group_1_0_1__17113);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3444:1: rule__Property__Group_1_0_1__1__Impl : ( ( rule__Property__Alternatives_1_0_1_1 ) ) ;
    public final void rule__Property__Group_1_0_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3448:1: ( ( ( rule__Property__Alternatives_1_0_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3449:1: ( ( rule__Property__Alternatives_1_0_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3449:1: ( ( rule__Property__Alternatives_1_0_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3450:1: ( rule__Property__Alternatives_1_0_1_1 )
            {
             before(grammarAccess.getPropertyAccess().getAlternatives_1_0_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3451:1: ( rule__Property__Alternatives_1_0_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3451:2: rule__Property__Alternatives_1_0_1_1
            {
            pushFollow(FOLLOW_rule__Property__Alternatives_1_0_1_1_in_rule__Property__Group_1_0_1__1__Impl7140);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3465:1: rule__Property__Group_1_1__0 : rule__Property__Group_1_1__0__Impl rule__Property__Group_1_1__1 ;
    public final void rule__Property__Group_1_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3469:1: ( rule__Property__Group_1_1__0__Impl rule__Property__Group_1_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3470:2: rule__Property__Group_1_1__0__Impl rule__Property__Group_1_1__1
            {
            pushFollow(FOLLOW_rule__Property__Group_1_1__0__Impl_in_rule__Property__Group_1_1__07174);
            rule__Property__Group_1_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group_1_1__1_in_rule__Property__Group_1_1__07177);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3477:1: rule__Property__Group_1_1__0__Impl : ( ( rule__Property__ConstantAssignment_1_1_0 ) ) ;
    public final void rule__Property__Group_1_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3481:1: ( ( ( rule__Property__ConstantAssignment_1_1_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3482:1: ( ( rule__Property__ConstantAssignment_1_1_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3482:1: ( ( rule__Property__ConstantAssignment_1_1_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3483:1: ( rule__Property__ConstantAssignment_1_1_0 )
            {
             before(grammarAccess.getPropertyAccess().getConstantAssignment_1_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3484:1: ( rule__Property__ConstantAssignment_1_1_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3484:2: rule__Property__ConstantAssignment_1_1_0
            {
            pushFollow(FOLLOW_rule__Property__ConstantAssignment_1_1_0_in_rule__Property__Group_1_1__0__Impl7204);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3494:1: rule__Property__Group_1_1__1 : rule__Property__Group_1_1__1__Impl ;
    public final void rule__Property__Group_1_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3498:1: ( rule__Property__Group_1_1__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3499:2: rule__Property__Group_1_1__1__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group_1_1__1__Impl_in_rule__Property__Group_1_1__17234);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3505:1: rule__Property__Group_1_1__1__Impl : ( ( rule__Property__ValueAssignment_1_1_1 ) ) ;
    public final void rule__Property__Group_1_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3509:1: ( ( ( rule__Property__ValueAssignment_1_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3510:1: ( ( rule__Property__ValueAssignment_1_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3510:1: ( ( rule__Property__ValueAssignment_1_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3511:1: ( rule__Property__ValueAssignment_1_1_1 )
            {
             before(grammarAccess.getPropertyAccess().getValueAssignment_1_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3512:1: ( rule__Property__ValueAssignment_1_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3512:2: rule__Property__ValueAssignment_1_1_1
            {
            pushFollow(FOLLOW_rule__Property__ValueAssignment_1_1_1_in_rule__Property__Group_1_1__1__Impl7261);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3526:1: rule__EntityList__Group__0 : rule__EntityList__Group__0__Impl rule__EntityList__Group__1 ;
    public final void rule__EntityList__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3530:1: ( rule__EntityList__Group__0__Impl rule__EntityList__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3531:2: rule__EntityList__Group__0__Impl rule__EntityList__Group__1
            {
            pushFollow(FOLLOW_rule__EntityList__Group__0__Impl_in_rule__EntityList__Group__07295);
            rule__EntityList__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group__1_in_rule__EntityList__Group__07298);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3538:1: rule__EntityList__Group__0__Impl : ( '[' ) ;
    public final void rule__EntityList__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3542:1: ( ( '[' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3543:1: ( '[' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3543:1: ( '[' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3544:1: '['
            {
             before(grammarAccess.getEntityListAccess().getLeftSquareBracketKeyword_0()); 
            match(input,48,FOLLOW_48_in_rule__EntityList__Group__0__Impl7326); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3557:1: rule__EntityList__Group__1 : rule__EntityList__Group__1__Impl rule__EntityList__Group__2 ;
    public final void rule__EntityList__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3561:1: ( rule__EntityList__Group__1__Impl rule__EntityList__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3562:2: rule__EntityList__Group__1__Impl rule__EntityList__Group__2
            {
            pushFollow(FOLLOW_rule__EntityList__Group__1__Impl_in_rule__EntityList__Group__17357);
            rule__EntityList__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group__2_in_rule__EntityList__Group__17360);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3569:1: rule__EntityList__Group__1__Impl : ( ( rule__EntityList__RefsAssignment_1 ) ) ;
    public final void rule__EntityList__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3573:1: ( ( ( rule__EntityList__RefsAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3574:1: ( ( rule__EntityList__RefsAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3574:1: ( ( rule__EntityList__RefsAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3575:1: ( rule__EntityList__RefsAssignment_1 )
            {
             before(grammarAccess.getEntityListAccess().getRefsAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3576:1: ( rule__EntityList__RefsAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3576:2: rule__EntityList__RefsAssignment_1
            {
            pushFollow(FOLLOW_rule__EntityList__RefsAssignment_1_in_rule__EntityList__Group__1__Impl7387);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3586:1: rule__EntityList__Group__2 : rule__EntityList__Group__2__Impl rule__EntityList__Group__3 ;
    public final void rule__EntityList__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3590:1: ( rule__EntityList__Group__2__Impl rule__EntityList__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3591:2: rule__EntityList__Group__2__Impl rule__EntityList__Group__3
            {
            pushFollow(FOLLOW_rule__EntityList__Group__2__Impl_in_rule__EntityList__Group__27417);
            rule__EntityList__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group__3_in_rule__EntityList__Group__27420);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3598:1: rule__EntityList__Group__2__Impl : ( ( rule__EntityList__Group_2__0 )* ) ;
    public final void rule__EntityList__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3602:1: ( ( ( rule__EntityList__Group_2__0 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3603:1: ( ( rule__EntityList__Group_2__0 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3603:1: ( ( rule__EntityList__Group_2__0 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3604:1: ( rule__EntityList__Group_2__0 )*
            {
             before(grammarAccess.getEntityListAccess().getGroup_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3605:1: ( rule__EntityList__Group_2__0 )*
            loop42:
            do {
                int alt42=2;
                int LA42_0 = input.LA(1);

                if ( (LA42_0==50) ) {
                    alt42=1;
                }


                switch (alt42) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3605:2: rule__EntityList__Group_2__0
            	    {
            	    pushFollow(FOLLOW_rule__EntityList__Group_2__0_in_rule__EntityList__Group__2__Impl7447);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3615:1: rule__EntityList__Group__3 : rule__EntityList__Group__3__Impl ;
    public final void rule__EntityList__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3619:1: ( rule__EntityList__Group__3__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3620:2: rule__EntityList__Group__3__Impl
            {
            pushFollow(FOLLOW_rule__EntityList__Group__3__Impl_in_rule__EntityList__Group__37478);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3626:1: rule__EntityList__Group__3__Impl : ( ']' ) ;
    public final void rule__EntityList__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3630:1: ( ( ']' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3631:1: ( ']' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3631:1: ( ']' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3632:1: ']'
            {
             before(grammarAccess.getEntityListAccess().getRightSquareBracketKeyword_3()); 
            match(input,49,FOLLOW_49_in_rule__EntityList__Group__3__Impl7506); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3653:1: rule__EntityList__Group_2__0 : rule__EntityList__Group_2__0__Impl rule__EntityList__Group_2__1 ;
    public final void rule__EntityList__Group_2__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3657:1: ( rule__EntityList__Group_2__0__Impl rule__EntityList__Group_2__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3658:2: rule__EntityList__Group_2__0__Impl rule__EntityList__Group_2__1
            {
            pushFollow(FOLLOW_rule__EntityList__Group_2__0__Impl_in_rule__EntityList__Group_2__07545);
            rule__EntityList__Group_2__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group_2__1_in_rule__EntityList__Group_2__07548);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3665:1: rule__EntityList__Group_2__0__Impl : ( '|' ) ;
    public final void rule__EntityList__Group_2__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3669:1: ( ( '|' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3670:1: ( '|' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3670:1: ( '|' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3671:1: '|'
            {
             before(grammarAccess.getEntityListAccess().getVerticalLineKeyword_2_0()); 
            match(input,50,FOLLOW_50_in_rule__EntityList__Group_2__0__Impl7576); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3684:1: rule__EntityList__Group_2__1 : rule__EntityList__Group_2__1__Impl ;
    public final void rule__EntityList__Group_2__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3688:1: ( rule__EntityList__Group_2__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3689:2: rule__EntityList__Group_2__1__Impl
            {
            pushFollow(FOLLOW_rule__EntityList__Group_2__1__Impl_in_rule__EntityList__Group_2__17607);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3695:1: rule__EntityList__Group_2__1__Impl : ( ( rule__EntityList__RefsAssignment_2_1 ) ) ;
    public final void rule__EntityList__Group_2__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3699:1: ( ( ( rule__EntityList__RefsAssignment_2_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3700:1: ( ( rule__EntityList__RefsAssignment_2_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3700:1: ( ( rule__EntityList__RefsAssignment_2_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3701:1: ( rule__EntityList__RefsAssignment_2_1 )
            {
             before(grammarAccess.getEntityListAccess().getRefsAssignment_2_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3702:1: ( rule__EntityList__RefsAssignment_2_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3702:2: rule__EntityList__RefsAssignment_2_1
            {
            pushFollow(FOLLOW_rule__EntityList__RefsAssignment_2_1_in_rule__EntityList__Group_2__1__Impl7634);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3716:1: rule__Note__Group__0 : rule__Note__Group__0__Impl rule__Note__Group__1 ;
    public final void rule__Note__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3720:1: ( rule__Note__Group__0__Impl rule__Note__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3721:2: rule__Note__Group__0__Impl rule__Note__Group__1
            {
            pushFollow(FOLLOW_rule__Note__Group__0__Impl_in_rule__Note__Group__07668);
            rule__Note__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group__1_in_rule__Note__Group__07671);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3728:1: rule__Note__Group__0__Impl : ( 'note' ) ;
    public final void rule__Note__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3732:1: ( ( 'note' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3733:1: ( 'note' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3733:1: ( 'note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3734:1: 'note'
            {
             before(grammarAccess.getNoteAccess().getNoteKeyword_0()); 
            match(input,26,FOLLOW_26_in_rule__Note__Group__0__Impl7699); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3747:1: rule__Note__Group__1 : rule__Note__Group__1__Impl ;
    public final void rule__Note__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3751:1: ( rule__Note__Group__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3752:2: rule__Note__Group__1__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group__1__Impl_in_rule__Note__Group__17730);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3758:1: rule__Note__Group__1__Impl : ( ( rule__Note__Alternatives_1 ) ) ;
    public final void rule__Note__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3762:1: ( ( ( rule__Note__Alternatives_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3763:1: ( ( rule__Note__Alternatives_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3763:1: ( ( rule__Note__Alternatives_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3764:1: ( rule__Note__Alternatives_1 )
            {
             before(grammarAccess.getNoteAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3765:1: ( rule__Note__Alternatives_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3765:2: rule__Note__Alternatives_1
            {
            pushFollow(FOLLOW_rule__Note__Alternatives_1_in_rule__Note__Group__1__Impl7757);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3779:1: rule__Note__Group_1_0_0__0 : rule__Note__Group_1_0_0__0__Impl rule__Note__Group_1_0_0__1 ;
    public final void rule__Note__Group_1_0_0__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3783:1: ( rule__Note__Group_1_0_0__0__Impl rule__Note__Group_1_0_0__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3784:2: rule__Note__Group_1_0_0__0__Impl rule__Note__Group_1_0_0__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0__0__Impl_in_rule__Note__Group_1_0_0__07791);
            rule__Note__Group_1_0_0__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_0__1_in_rule__Note__Group_1_0_0__07794);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3791:1: rule__Note__Group_1_0_0__0__Impl : ( ( rule__Note__PositionAssignment_1_0_0_0 ) ) ;
    public final void rule__Note__Group_1_0_0__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3795:1: ( ( ( rule__Note__PositionAssignment_1_0_0_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3796:1: ( ( rule__Note__PositionAssignment_1_0_0_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3796:1: ( ( rule__Note__PositionAssignment_1_0_0_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3797:1: ( rule__Note__PositionAssignment_1_0_0_0 )
            {
             before(grammarAccess.getNoteAccess().getPositionAssignment_1_0_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3798:1: ( rule__Note__PositionAssignment_1_0_0_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3798:2: rule__Note__PositionAssignment_1_0_0_0
            {
            pushFollow(FOLLOW_rule__Note__PositionAssignment_1_0_0_0_in_rule__Note__Group_1_0_0__0__Impl7821);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3808:1: rule__Note__Group_1_0_0__1 : rule__Note__Group_1_0_0__1__Impl ;
    public final void rule__Note__Group_1_0_0__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3812:1: ( rule__Note__Group_1_0_0__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3813:2: rule__Note__Group_1_0_0__1__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0__1__Impl_in_rule__Note__Group_1_0_0__17851);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3819:1: rule__Note__Group_1_0_0__1__Impl : ( ( rule__Note__Group_1_0_0_1__0 ) ) ;
    public final void rule__Note__Group_1_0_0__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3823:1: ( ( ( rule__Note__Group_1_0_0_1__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3824:1: ( ( rule__Note__Group_1_0_0_1__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3824:1: ( ( rule__Note__Group_1_0_0_1__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3825:1: ( rule__Note__Group_1_0_0_1__0 )
            {
             before(grammarAccess.getNoteAccess().getGroup_1_0_0_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3826:1: ( rule__Note__Group_1_0_0_1__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3826:2: rule__Note__Group_1_0_0_1__0
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__0_in_rule__Note__Group_1_0_0__1__Impl7878);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3840:1: rule__Note__Group_1_0_0_1__0 : rule__Note__Group_1_0_0_1__0__Impl rule__Note__Group_1_0_0_1__1 ;
    public final void rule__Note__Group_1_0_0_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3844:1: ( rule__Note__Group_1_0_0_1__0__Impl rule__Note__Group_1_0_0_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3845:2: rule__Note__Group_1_0_0_1__0__Impl rule__Note__Group_1_0_0_1__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__0__Impl_in_rule__Note__Group_1_0_0_1__07912);
            rule__Note__Group_1_0_0_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__1_in_rule__Note__Group_1_0_0_1__07915);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3852:1: rule__Note__Group_1_0_0_1__0__Impl : ( ':' ) ;
    public final void rule__Note__Group_1_0_0_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3856:1: ( ( ':' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3857:1: ( ':' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3857:1: ( ':' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3858:1: ':'
            {
             before(grammarAccess.getNoteAccess().getColonKeyword_1_0_0_1_0()); 
            match(input,29,FOLLOW_29_in_rule__Note__Group_1_0_0_1__0__Impl7943); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3871:1: rule__Note__Group_1_0_0_1__1 : rule__Note__Group_1_0_0_1__1__Impl rule__Note__Group_1_0_0_1__2 ;
    public final void rule__Note__Group_1_0_0_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3875:1: ( rule__Note__Group_1_0_0_1__1__Impl rule__Note__Group_1_0_0_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3876:2: rule__Note__Group_1_0_0_1__1__Impl rule__Note__Group_1_0_0_1__2
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__1__Impl_in_rule__Note__Group_1_0_0_1__17974);
            rule__Note__Group_1_0_0_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__2_in_rule__Note__Group_1_0_0_1__17977);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3883:1: rule__Note__Group_1_0_0_1__1__Impl : ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) ) ;
    public final void rule__Note__Group_1_0_0_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3887:1: ( ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3888:1: ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3888:1: ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3889:1: ( rule__Note__ValueAssignment_1_0_0_1_1 )
            {
             before(grammarAccess.getNoteAccess().getValueAssignment_1_0_0_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3890:1: ( rule__Note__ValueAssignment_1_0_0_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3890:2: rule__Note__ValueAssignment_1_0_0_1_1
            {
            pushFollow(FOLLOW_rule__Note__ValueAssignment_1_0_0_1_1_in_rule__Note__Group_1_0_0_1__1__Impl8004);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3900:1: rule__Note__Group_1_0_0_1__2 : rule__Note__Group_1_0_0_1__2__Impl ;
    public final void rule__Note__Group_1_0_0_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3904:1: ( rule__Note__Group_1_0_0_1__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3905:2: rule__Note__Group_1_0_0_1__2__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__2__Impl_in_rule__Note__Group_1_0_0_1__28034);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3911:1: rule__Note__Group_1_0_0_1__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_0_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3915:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3916:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3916:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3917:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_0_1_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_0_1__2__Impl8061); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3934:1: rule__Note__Group_1_0_1__0 : rule__Note__Group_1_0_1__0__Impl rule__Note__Group_1_0_1__1 ;
    public final void rule__Note__Group_1_0_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3938:1: ( rule__Note__Group_1_0_1__0__Impl rule__Note__Group_1_0_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3939:2: rule__Note__Group_1_0_1__0__Impl rule__Note__Group_1_0_1__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__0__Impl_in_rule__Note__Group_1_0_1__08096);
            rule__Note__Group_1_0_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__1_in_rule__Note__Group_1_0_1__08099);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3946:1: rule__Note__Group_1_0_1__0__Impl : ( 'of' ) ;
    public final void rule__Note__Group_1_0_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3950:1: ( ( 'of' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3951:1: ( 'of' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3951:1: ( 'of' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3952:1: 'of'
            {
             before(grammarAccess.getNoteAccess().getOfKeyword_1_0_1_0()); 
            match(input,28,FOLLOW_28_in_rule__Note__Group_1_0_1__0__Impl8127); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3965:1: rule__Note__Group_1_0_1__1 : rule__Note__Group_1_0_1__1__Impl rule__Note__Group_1_0_1__2 ;
    public final void rule__Note__Group_1_0_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3969:1: ( rule__Note__Group_1_0_1__1__Impl rule__Note__Group_1_0_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3970:2: rule__Note__Group_1_0_1__1__Impl rule__Note__Group_1_0_1__2
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__1__Impl_in_rule__Note__Group_1_0_1__18158);
            rule__Note__Group_1_0_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__2_in_rule__Note__Group_1_0_1__18161);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3977:1: rule__Note__Group_1_0_1__1__Impl : ( ( rule__Note__OfAssignment_1_0_1_1 ) ) ;
    public final void rule__Note__Group_1_0_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3981:1: ( ( ( rule__Note__OfAssignment_1_0_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3982:1: ( ( rule__Note__OfAssignment_1_0_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3982:1: ( ( rule__Note__OfAssignment_1_0_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3983:1: ( rule__Note__OfAssignment_1_0_1_1 )
            {
             before(grammarAccess.getNoteAccess().getOfAssignment_1_0_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3984:1: ( rule__Note__OfAssignment_1_0_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3984:2: rule__Note__OfAssignment_1_0_1_1
            {
            pushFollow(FOLLOW_rule__Note__OfAssignment_1_0_1_1_in_rule__Note__Group_1_0_1__1__Impl8188);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3994:1: rule__Note__Group_1_0_1__2 : rule__Note__Group_1_0_1__2__Impl rule__Note__Group_1_0_1__3 ;
    public final void rule__Note__Group_1_0_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3998:1: ( rule__Note__Group_1_0_1__2__Impl rule__Note__Group_1_0_1__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3999:2: rule__Note__Group_1_0_1__2__Impl rule__Note__Group_1_0_1__3
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__2__Impl_in_rule__Note__Group_1_0_1__28218);
            rule__Note__Group_1_0_1__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__3_in_rule__Note__Group_1_0_1__28221);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4006:1: rule__Note__Group_1_0_1__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4010:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4011:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4011:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4012:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__2__Impl8248); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4023:1: rule__Note__Group_1_0_1__3 : rule__Note__Group_1_0_1__3__Impl rule__Note__Group_1_0_1__4 ;
    public final void rule__Note__Group_1_0_1__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4027:1: ( rule__Note__Group_1_0_1__3__Impl rule__Note__Group_1_0_1__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4028:2: rule__Note__Group_1_0_1__3__Impl rule__Note__Group_1_0_1__4
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__3__Impl_in_rule__Note__Group_1_0_1__38277);
            rule__Note__Group_1_0_1__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__4_in_rule__Note__Group_1_0_1__38280);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4035:1: rule__Note__Group_1_0_1__3__Impl : ( ( rule__Note__ValueAssignment_1_0_1_3 ) ) ;
    public final void rule__Note__Group_1_0_1__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4039:1: ( ( ( rule__Note__ValueAssignment_1_0_1_3 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4040:1: ( ( rule__Note__ValueAssignment_1_0_1_3 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4040:1: ( ( rule__Note__ValueAssignment_1_0_1_3 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4041:1: ( rule__Note__ValueAssignment_1_0_1_3 )
            {
             before(grammarAccess.getNoteAccess().getValueAssignment_1_0_1_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4042:1: ( rule__Note__ValueAssignment_1_0_1_3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4042:2: rule__Note__ValueAssignment_1_0_1_3
            {
            pushFollow(FOLLOW_rule__Note__ValueAssignment_1_0_1_3_in_rule__Note__Group_1_0_1__3__Impl8307);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4052:1: rule__Note__Group_1_0_1__4 : rule__Note__Group_1_0_1__4__Impl rule__Note__Group_1_0_1__5 ;
    public final void rule__Note__Group_1_0_1__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4056:1: ( rule__Note__Group_1_0_1__4__Impl rule__Note__Group_1_0_1__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4057:2: rule__Note__Group_1_0_1__4__Impl rule__Note__Group_1_0_1__5
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__4__Impl_in_rule__Note__Group_1_0_1__48337);
            rule__Note__Group_1_0_1__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__5_in_rule__Note__Group_1_0_1__48340);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4064:1: rule__Note__Group_1_0_1__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_1__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4068:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4069:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4069:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4070:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__4__Impl8367); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4081:1: rule__Note__Group_1_0_1__5 : rule__Note__Group_1_0_1__5__Impl rule__Note__Group_1_0_1__6 ;
    public final void rule__Note__Group_1_0_1__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4085:1: ( rule__Note__Group_1_0_1__5__Impl rule__Note__Group_1_0_1__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4086:2: rule__Note__Group_1_0_1__5__Impl rule__Note__Group_1_0_1__6
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__5__Impl_in_rule__Note__Group_1_0_1__58396);
            rule__Note__Group_1_0_1__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__6_in_rule__Note__Group_1_0_1__58399);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4093:1: rule__Note__Group_1_0_1__5__Impl : ( 'end note' ) ;
    public final void rule__Note__Group_1_0_1__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4097:1: ( ( 'end note' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4098:1: ( 'end note' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4098:1: ( 'end note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4099:1: 'end note'
            {
             before(grammarAccess.getNoteAccess().getEndNoteKeyword_1_0_1_5()); 
            match(input,51,FOLLOW_51_in_rule__Note__Group_1_0_1__5__Impl8427); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4112:1: rule__Note__Group_1_0_1__6 : rule__Note__Group_1_0_1__6__Impl ;
    public final void rule__Note__Group_1_0_1__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4116:1: ( rule__Note__Group_1_0_1__6__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4117:2: rule__Note__Group_1_0_1__6__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__6__Impl_in_rule__Note__Group_1_0_1__68458);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4123:1: rule__Note__Group_1_0_1__6__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_1__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4127:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4128:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4128:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4129:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_6()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__6__Impl8485); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4154:1: rule__Note__Group_1_1__0 : rule__Note__Group_1_1__0__Impl rule__Note__Group_1_1__1 ;
    public final void rule__Note__Group_1_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4158:1: ( rule__Note__Group_1_1__0__Impl rule__Note__Group_1_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4159:2: rule__Note__Group_1_1__0__Impl rule__Note__Group_1_1__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__0__Impl_in_rule__Note__Group_1_1__08528);
            rule__Note__Group_1_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__1_in_rule__Note__Group_1_1__08531);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4166:1: rule__Note__Group_1_1__0__Impl : ( 'as' ) ;
    public final void rule__Note__Group_1_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4170:1: ( ( 'as' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4171:1: ( 'as' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4171:1: ( 'as' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4172:1: 'as'
            {
             before(grammarAccess.getNoteAccess().getAsKeyword_1_1_0()); 
            match(input,27,FOLLOW_27_in_rule__Note__Group_1_1__0__Impl8559); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4185:1: rule__Note__Group_1_1__1 : rule__Note__Group_1_1__1__Impl rule__Note__Group_1_1__2 ;
    public final void rule__Note__Group_1_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4189:1: ( rule__Note__Group_1_1__1__Impl rule__Note__Group_1_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4190:2: rule__Note__Group_1_1__1__Impl rule__Note__Group_1_1__2
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__1__Impl_in_rule__Note__Group_1_1__18590);
            rule__Note__Group_1_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__2_in_rule__Note__Group_1_1__18593);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4197:1: rule__Note__Group_1_1__1__Impl : ( ( rule__Note__NameAssignment_1_1_1 ) ) ;
    public final void rule__Note__Group_1_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4201:1: ( ( ( rule__Note__NameAssignment_1_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4202:1: ( ( rule__Note__NameAssignment_1_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4202:1: ( ( rule__Note__NameAssignment_1_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4203:1: ( rule__Note__NameAssignment_1_1_1 )
            {
             before(grammarAccess.getNoteAccess().getNameAssignment_1_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4204:1: ( rule__Note__NameAssignment_1_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4204:2: rule__Note__NameAssignment_1_1_1
            {
            pushFollow(FOLLOW_rule__Note__NameAssignment_1_1_1_in_rule__Note__Group_1_1__1__Impl8620);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4214:1: rule__Note__Group_1_1__2 : rule__Note__Group_1_1__2__Impl rule__Note__Group_1_1__3 ;
    public final void rule__Note__Group_1_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4218:1: ( rule__Note__Group_1_1__2__Impl rule__Note__Group_1_1__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4219:2: rule__Note__Group_1_1__2__Impl rule__Note__Group_1_1__3
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__2__Impl_in_rule__Note__Group_1_1__28650);
            rule__Note__Group_1_1__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__3_in_rule__Note__Group_1_1__28653);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4226:1: rule__Note__Group_1_1__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4230:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4231:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4231:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4232:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__2__Impl8680); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4243:1: rule__Note__Group_1_1__3 : rule__Note__Group_1_1__3__Impl rule__Note__Group_1_1__4 ;
    public final void rule__Note__Group_1_1__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4247:1: ( rule__Note__Group_1_1__3__Impl rule__Note__Group_1_1__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4248:2: rule__Note__Group_1_1__3__Impl rule__Note__Group_1_1__4
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__3__Impl_in_rule__Note__Group_1_1__38709);
            rule__Note__Group_1_1__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__4_in_rule__Note__Group_1_1__38712);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4255:1: rule__Note__Group_1_1__3__Impl : ( ( rule__Note__ValueAssignment_1_1_3 ) ) ;
    public final void rule__Note__Group_1_1__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4259:1: ( ( ( rule__Note__ValueAssignment_1_1_3 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4260:1: ( ( rule__Note__ValueAssignment_1_1_3 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4260:1: ( ( rule__Note__ValueAssignment_1_1_3 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4261:1: ( rule__Note__ValueAssignment_1_1_3 )
            {
             before(grammarAccess.getNoteAccess().getValueAssignment_1_1_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4262:1: ( rule__Note__ValueAssignment_1_1_3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4262:2: rule__Note__ValueAssignment_1_1_3
            {
            pushFollow(FOLLOW_rule__Note__ValueAssignment_1_1_3_in_rule__Note__Group_1_1__3__Impl8739);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4272:1: rule__Note__Group_1_1__4 : rule__Note__Group_1_1__4__Impl rule__Note__Group_1_1__5 ;
    public final void rule__Note__Group_1_1__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4276:1: ( rule__Note__Group_1_1__4__Impl rule__Note__Group_1_1__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4277:2: rule__Note__Group_1_1__4__Impl rule__Note__Group_1_1__5
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__4__Impl_in_rule__Note__Group_1_1__48769);
            rule__Note__Group_1_1__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__5_in_rule__Note__Group_1_1__48772);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4284:1: rule__Note__Group_1_1__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_1__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4288:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4289:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4289:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4290:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__4__Impl8799); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4301:1: rule__Note__Group_1_1__5 : rule__Note__Group_1_1__5__Impl rule__Note__Group_1_1__6 ;
    public final void rule__Note__Group_1_1__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4305:1: ( rule__Note__Group_1_1__5__Impl rule__Note__Group_1_1__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4306:2: rule__Note__Group_1_1__5__Impl rule__Note__Group_1_1__6
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__5__Impl_in_rule__Note__Group_1_1__58828);
            rule__Note__Group_1_1__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__6_in_rule__Note__Group_1_1__58831);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4313:1: rule__Note__Group_1_1__5__Impl : ( 'end note' ) ;
    public final void rule__Note__Group_1_1__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4317:1: ( ( 'end note' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4318:1: ( 'end note' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4318:1: ( 'end note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4319:1: 'end note'
            {
             before(grammarAccess.getNoteAccess().getEndNoteKeyword_1_1_5()); 
            match(input,51,FOLLOW_51_in_rule__Note__Group_1_1__5__Impl8859); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4332:1: rule__Note__Group_1_1__6 : rule__Note__Group_1_1__6__Impl ;
    public final void rule__Note__Group_1_1__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4336:1: ( rule__Note__Group_1_1__6__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4337:2: rule__Note__Group_1_1__6__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__6__Impl_in_rule__Note__Group_1_1__68890);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4343:1: rule__Note__Group_1_1__6__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_1__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4347:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4348:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4348:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4349:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_6()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__6__Impl8917); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4374:1: rule__DataType__Group__0 : rule__DataType__Group__0__Impl rule__DataType__Group__1 ;
    public final void rule__DataType__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4378:1: ( rule__DataType__Group__0__Impl rule__DataType__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4379:2: rule__DataType__Group__0__Impl rule__DataType__Group__1
            {
            pushFollow(FOLLOW_rule__DataType__Group__0__Impl_in_rule__DataType__Group__08960);
            rule__DataType__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DataType__Group__1_in_rule__DataType__Group__08963);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4386:1: rule__DataType__Group__0__Impl : ( ( rule__DataType__Alternatives_0 ) ) ;
    public final void rule__DataType__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4390:1: ( ( ( rule__DataType__Alternatives_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4391:1: ( ( rule__DataType__Alternatives_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4391:1: ( ( rule__DataType__Alternatives_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4392:1: ( rule__DataType__Alternatives_0 )
            {
             before(grammarAccess.getDataTypeAccess().getAlternatives_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4393:1: ( rule__DataType__Alternatives_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4393:2: rule__DataType__Alternatives_0
            {
            pushFollow(FOLLOW_rule__DataType__Alternatives_0_in_rule__DataType__Group__0__Impl8990);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4403:1: rule__DataType__Group__1 : rule__DataType__Group__1__Impl ;
    public final void rule__DataType__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4407:1: ( rule__DataType__Group__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4408:2: rule__DataType__Group__1__Impl
            {
            pushFollow(FOLLOW_rule__DataType__Group__1__Impl_in_rule__DataType__Group__19020);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4414:1: rule__DataType__Group__1__Impl : ( ( rule__DataType__IsArrayAssignment_1 )? ) ;
    public final void rule__DataType__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4418:1: ( ( ( rule__DataType__IsArrayAssignment_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4419:1: ( ( rule__DataType__IsArrayAssignment_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4419:1: ( ( rule__DataType__IsArrayAssignment_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4420:1: ( rule__DataType__IsArrayAssignment_1 )?
            {
             before(grammarAccess.getDataTypeAccess().getIsArrayAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4421:1: ( rule__DataType__IsArrayAssignment_1 )?
            int alt43=2;
            int LA43_0 = input.LA(1);

            if ( (LA43_0==55) ) {
                alt43=1;
            }
            switch (alt43) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4421:2: rule__DataType__IsArrayAssignment_1
                    {
                    pushFollow(FOLLOW_rule__DataType__IsArrayAssignment_1_in_rule__DataType__Group__1__Impl9047);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4435:1: rule__QualifiedName__Group__0 : rule__QualifiedName__Group__0__Impl rule__QualifiedName__Group__1 ;
    public final void rule__QualifiedName__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4439:1: ( rule__QualifiedName__Group__0__Impl rule__QualifiedName__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4440:2: rule__QualifiedName__Group__0__Impl rule__QualifiedName__Group__1
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group__0__Impl_in_rule__QualifiedName__Group__09082);
            rule__QualifiedName__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__QualifiedName__Group__1_in_rule__QualifiedName__Group__09085);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4447:1: rule__QualifiedName__Group__0__Impl : ( RULE_ID ) ;
    public final void rule__QualifiedName__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4451:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4452:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4452:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4453:1: RULE_ID
            {
             before(grammarAccess.getQualifiedNameAccess().getIDTerminalRuleCall_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__QualifiedName__Group__0__Impl9112); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4464:1: rule__QualifiedName__Group__1 : rule__QualifiedName__Group__1__Impl ;
    public final void rule__QualifiedName__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4468:1: ( rule__QualifiedName__Group__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4469:2: rule__QualifiedName__Group__1__Impl
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group__1__Impl_in_rule__QualifiedName__Group__19141);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4475:1: rule__QualifiedName__Group__1__Impl : ( ( rule__QualifiedName__Group_1__0 )* ) ;
    public final void rule__QualifiedName__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4479:1: ( ( ( rule__QualifiedName__Group_1__0 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4480:1: ( ( rule__QualifiedName__Group_1__0 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4480:1: ( ( rule__QualifiedName__Group_1__0 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4481:1: ( rule__QualifiedName__Group_1__0 )*
            {
             before(grammarAccess.getQualifiedNameAccess().getGroup_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4482:1: ( rule__QualifiedName__Group_1__0 )*
            loop44:
            do {
                int alt44=2;
                int LA44_0 = input.LA(1);

                if ( (LA44_0==47) ) {
                    int LA44_2 = input.LA(2);

                    if ( (LA44_2==RULE_ID) ) {
                        alt44=1;
                    }


                }


                switch (alt44) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4482:2: rule__QualifiedName__Group_1__0
            	    {
            	    pushFollow(FOLLOW_rule__QualifiedName__Group_1__0_in_rule__QualifiedName__Group__1__Impl9168);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4496:1: rule__QualifiedName__Group_1__0 : rule__QualifiedName__Group_1__0__Impl rule__QualifiedName__Group_1__1 ;
    public final void rule__QualifiedName__Group_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4500:1: ( rule__QualifiedName__Group_1__0__Impl rule__QualifiedName__Group_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4501:2: rule__QualifiedName__Group_1__0__Impl rule__QualifiedName__Group_1__1
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group_1__0__Impl_in_rule__QualifiedName__Group_1__09203);
            rule__QualifiedName__Group_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__QualifiedName__Group_1__1_in_rule__QualifiedName__Group_1__09206);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4508:1: rule__QualifiedName__Group_1__0__Impl : ( '.' ) ;
    public final void rule__QualifiedName__Group_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4512:1: ( ( '.' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4513:1: ( '.' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4513:1: ( '.' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4514:1: '.'
            {
             before(grammarAccess.getQualifiedNameAccess().getFullStopKeyword_1_0()); 
            match(input,47,FOLLOW_47_in_rule__QualifiedName__Group_1__0__Impl9234); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4527:1: rule__QualifiedName__Group_1__1 : rule__QualifiedName__Group_1__1__Impl ;
    public final void rule__QualifiedName__Group_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4531:1: ( rule__QualifiedName__Group_1__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4532:2: rule__QualifiedName__Group_1__1__Impl
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group_1__1__Impl_in_rule__QualifiedName__Group_1__19265);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4538:1: rule__QualifiedName__Group_1__1__Impl : ( RULE_ID ) ;
    public final void rule__QualifiedName__Group_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4542:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4543:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4543:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4544:1: RULE_ID
            {
             before(grammarAccess.getQualifiedNameAccess().getIDTerminalRuleCall_1_1()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__QualifiedName__Group_1__1__Impl9292); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4560:1: rule__DomainModel__FileAssignment_2 : ( RULE_STRING ) ;
    public final void rule__DomainModel__FileAssignment_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4564:1: ( ( RULE_STRING ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4565:1: ( RULE_STRING )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4565:1: ( RULE_STRING )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4566:1: RULE_STRING
            {
             before(grammarAccess.getDomainModelAccess().getFileSTRINGTerminalRuleCall_2_0()); 
            match(input,RULE_STRING,FOLLOW_RULE_STRING_in_rule__DomainModel__FileAssignment_29330); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4575:1: rule__DomainModel__PackagesAssignment_4 : ( ruleCPackage ) ;
    public final void rule__DomainModel__PackagesAssignment_4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4579:1: ( ( ruleCPackage ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4580:1: ( ruleCPackage )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4580:1: ( ruleCPackage )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4581:1: ruleCPackage
            {
             before(grammarAccess.getDomainModelAccess().getPackagesCPackageParserRuleCall_4_0()); 
            pushFollow(FOLLOW_ruleCPackage_in_rule__DomainModel__PackagesAssignment_49361);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4590:1: rule__CPackage__NameAssignment_1 : ( ruleQualifiedName ) ;
    public final void rule__CPackage__NameAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4594:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4595:1: ( ruleQualifiedName )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4595:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4596:1: ruleQualifiedName
            {
             before(grammarAccess.getCPackageAccess().getNameQualifiedNameParserRuleCall_1_0()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__CPackage__NameAssignment_19392);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4605:1: rule__CPackage__StyleAssignment_2_1 : ( rulePackageStyle ) ;
    public final void rule__CPackage__StyleAssignment_2_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4609:1: ( ( rulePackageStyle ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4610:1: ( rulePackageStyle )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4610:1: ( rulePackageStyle )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4611:1: rulePackageStyle
            {
             before(grammarAccess.getCPackageAccess().getStylePackageStyleEnumRuleCall_2_1_0()); 
            pushFollow(FOLLOW_rulePackageStyle_in_rule__CPackage__StyleAssignment_2_19423);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4620:1: rule__CPackage__ElementsAssignment_5 : ( ruleElement ) ;
    public final void rule__CPackage__ElementsAssignment_5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4624:1: ( ( ruleElement ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4625:1: ( ruleElement )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4625:1: ( ruleElement )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4626:1: ruleElement
            {
             before(grammarAccess.getCPackageAccess().getElementsElementParserRuleCall_5_0()); 
            pushFollow(FOLLOW_ruleElement_in_rule__CPackage__ElementsAssignment_59454);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4635:1: rule__Relation__LeftRefAssignment_0 : ( ( ruleQualifiedName ) ) ;
    public final void rule__Relation__LeftRefAssignment_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4639:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4640:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4640:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4641:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getRelationAccess().getLeftRefNodeCrossReference_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4642:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4643:1: ruleQualifiedName
            {
             before(grammarAccess.getRelationAccess().getLeftRefNodeQualifiedNameParserRuleCall_0_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__Relation__LeftRefAssignment_09489);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4654:1: rule__Relation__RelTypeAssignment_1 : ( ruleRelationParse ) ;
    public final void rule__Relation__RelTypeAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4658:1: ( ( ruleRelationParse ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4659:1: ( ruleRelationParse )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4659:1: ( ruleRelationParse )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4660:1: ruleRelationParse
            {
             before(grammarAccess.getRelationAccess().getRelTypeRelationParseParserRuleCall_1_0()); 
            pushFollow(FOLLOW_ruleRelationParse_in_rule__Relation__RelTypeAssignment_19524);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4669:1: rule__Relation__RightRefAssignment_2 : ( ( ruleQualifiedName ) ) ;
    public final void rule__Relation__RightRefAssignment_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4673:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4674:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4674:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4675:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getRelationAccess().getRightRefNodeCrossReference_2_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4676:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4677:1: ruleQualifiedName
            {
             before(grammarAccess.getRelationAccess().getRightRefNodeQualifiedNameParserRuleCall_2_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__Relation__RightRefAssignment_29559);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4688:1: rule__Relation__NameAssignment_3_1 : ( ruleText ) ;
    public final void rule__Relation__NameAssignment_3_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4692:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4693:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4693:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4694:1: ruleText
            {
             before(grammarAccess.getRelationAccess().getNameTextParserRuleCall_3_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Relation__NameAssignment_3_19594);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4703:1: rule__RelationParse__CompAssignment_0_0 : ( ruleCompType ) ;
    public final void rule__RelationParse__CompAssignment_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4707:1: ( ( ruleCompType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4708:1: ( ruleCompType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4708:1: ( ruleCompType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4709:1: ruleCompType
            {
             before(grammarAccess.getRelationParseAccess().getCompCompTypeEnumRuleCall_0_0_0()); 
            pushFollow(FOLLOW_ruleCompType_in_rule__RelationParse__CompAssignment_0_09625);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4718:1: rule__RelationParse__TypeAssignment_0_1 : ( ruleRelationType ) ;
    public final void rule__RelationParse__TypeAssignment_0_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4722:1: ( ( ruleRelationType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4723:1: ( ruleRelationType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4723:1: ( ruleRelationType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4724:1: ruleRelationType
            {
             before(grammarAccess.getRelationParseAccess().getTypeRelationTypeParserRuleCall_0_1_0()); 
            pushFollow(FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_0_19656);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4733:1: rule__RelationParse__DirectAssignment_0_2 : ( ( '>' ) ) ;
    public final void rule__RelationParse__DirectAssignment_0_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4737:1: ( ( ( '>' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4738:1: ( ( '>' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4738:1: ( ( '>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4739:1: ( '>' )
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_0_2_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4740:1: ( '>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4741:1: '>'
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_0_2_0()); 
            match(input,52,FOLLOW_52_in_rule__RelationParse__DirectAssignment_0_29692); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4756:1: rule__RelationParse__MultiAssignment_0_4 : ( RULE_MULTI ) ;
    public final void rule__RelationParse__MultiAssignment_0_4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4760:1: ( ( RULE_MULTI ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4761:1: ( RULE_MULTI )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4761:1: ( RULE_MULTI )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4762:1: RULE_MULTI
            {
             before(grammarAccess.getRelationParseAccess().getMultiMULTITerminalRuleCall_0_4_0()); 
            match(input,RULE_MULTI,FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_0_49731); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4771:1: rule__RelationParse__TypeAssignment_1_0 : ( ruleRelationType ) ;
    public final void rule__RelationParse__TypeAssignment_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4775:1: ( ( ruleRelationType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4776:1: ( ruleRelationType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4776:1: ( ruleRelationType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4777:1: ruleRelationType
            {
             before(grammarAccess.getRelationParseAccess().getTypeRelationTypeParserRuleCall_1_0_0()); 
            pushFollow(FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_1_09762);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4786:1: rule__RelationParse__DirectAssignment_1_1_0 : ( ( '>' ) ) ;
    public final void rule__RelationParse__DirectAssignment_1_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4790:1: ( ( ( '>' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4791:1: ( ( '>' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4791:1: ( ( '>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4792:1: ( '>' )
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_1_1_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4793:1: ( '>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4794:1: '>'
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_1_1_0_0()); 
            match(input,52,FOLLOW_52_in_rule__RelationParse__DirectAssignment_1_1_09798); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4809:1: rule__RelationParse__ExtAssignment_1_1_1 : ( ( '|>' ) ) ;
    public final void rule__RelationParse__ExtAssignment_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4813:1: ( ( ( '|>' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4814:1: ( ( '|>' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4814:1: ( ( '|>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4815:1: ( '|>' )
            {
             before(grammarAccess.getRelationParseAccess().getExtVerticalLineGreaterThanSignKeyword_1_1_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4816:1: ( '|>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4817:1: '|>'
            {
             before(grammarAccess.getRelationParseAccess().getExtVerticalLineGreaterThanSignKeyword_1_1_1_0()); 
            match(input,53,FOLLOW_53_in_rule__RelationParse__ExtAssignment_1_1_19842); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4832:1: rule__RelationParse__MultiAssignment_1_3 : ( RULE_MULTI ) ;
    public final void rule__RelationParse__MultiAssignment_1_3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4836:1: ( ( RULE_MULTI ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4837:1: ( RULE_MULTI )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4837:1: ( RULE_MULTI )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4838:1: RULE_MULTI
            {
             before(grammarAccess.getRelationParseAccess().getMultiMULTITerminalRuleCall_1_3_0()); 
            match(input,RULE_MULTI,FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_1_39881); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4847:1: rule__RelationType__StrongAssignment_0 : ( ruleStrongRel ) ;
    public final void rule__RelationType__StrongAssignment_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4851:1: ( ( ruleStrongRel ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4852:1: ( ruleStrongRel )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4852:1: ( ruleStrongRel )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4853:1: ruleStrongRel
            {
             before(grammarAccess.getRelationTypeAccess().getStrongStrongRelParserRuleCall_0_0()); 
            pushFollow(FOLLOW_ruleStrongRel_in_rule__RelationType__StrongAssignment_09912);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4862:1: rule__RelationType__WeakAssignment_1 : ( ruleWeakRel ) ;
    public final void rule__RelationType__WeakAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4866:1: ( ( ruleWeakRel ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4867:1: ( ruleWeakRel )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4867:1: ( ruleWeakRel )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4868:1: ruleWeakRel
            {
             before(grammarAccess.getRelationTypeAccess().getWeakWeakRelParserRuleCall_1_0()); 
            pushFollow(FOLLOW_ruleWeakRel_in_rule__RelationType__WeakAssignment_19943);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4877:1: rule__Enumer__NameAssignment_1 : ( RULE_ID ) ;
    public final void rule__Enumer__NameAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4881:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4882:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4882:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4883:1: RULE_ID
            {
             before(grammarAccess.getEnumerAccess().getNameIDTerminalRuleCall_1_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Enumer__NameAssignment_19974); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4892:1: rule__Enumer__TypesAssignment_4_0 : ( RULE_ID ) ;
    public final void rule__Enumer__TypesAssignment_4_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4896:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4897:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4897:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4898:1: RULE_ID
            {
             before(grammarAccess.getEnumerAccess().getTypesIDTerminalRuleCall_4_0_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Enumer__TypesAssignment_4_010005); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4907:1: rule__Clazz__NameAssignment_1 : ( RULE_ID ) ;
    public final void rule__Clazz__NameAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4911:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4912:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4912:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4913:1: RULE_ID
            {
             before(grammarAccess.getClazzAccess().getNameIDTerminalRuleCall_1_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Clazz__NameAssignment_110036); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4922:1: rule__Clazz__StereotypeAssignment_2_1 : ( ruleText ) ;
    public final void rule__Clazz__StereotypeAssignment_2_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4926:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4927:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4927:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4928:1: ruleText
            {
             before(grammarAccess.getClazzAccess().getStereotypeTextParserRuleCall_2_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Clazz__StereotypeAssignment_2_110067);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4937:1: rule__Clazz__PropertiesAssignment_3_2 : ( ruleProperty ) ;
    public final void rule__Clazz__PropertiesAssignment_3_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4941:1: ( ( ruleProperty ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4942:1: ( ruleProperty )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4942:1: ( ruleProperty )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4943:1: ruleProperty
            {
             before(grammarAccess.getClazzAccess().getPropertiesPropertyParserRuleCall_3_2_0()); 
            pushFollow(FOLLOW_ruleProperty_in_rule__Clazz__PropertiesAssignment_3_210098);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4952:1: rule__Property__NameAssignment_0 : ( RULE_ID ) ;
    public final void rule__Property__NameAssignment_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4956:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4957:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4957:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4958:1: RULE_ID
            {
             before(grammarAccess.getPropertyAccess().getNameIDTerminalRuleCall_0_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Property__NameAssignment_010129); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4967:1: rule__Property__OptionalAssignment_1_0_0 : ( ( '?' ) ) ;
    public final void rule__Property__OptionalAssignment_1_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4971:1: ( ( ( '?' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4972:1: ( ( '?' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4972:1: ( ( '?' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4973:1: ( '?' )
            {
             before(grammarAccess.getPropertyAccess().getOptionalQuestionMarkKeyword_1_0_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4974:1: ( '?' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4975:1: '?'
            {
             before(grammarAccess.getPropertyAccess().getOptionalQuestionMarkKeyword_1_0_0_0()); 
            match(input,30,FOLLOW_30_in_rule__Property__OptionalAssignment_1_0_010165); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4990:1: rule__Property__TypeAssignment_1_0_1_1_0 : ( ruleDataType ) ;
    public final void rule__Property__TypeAssignment_1_0_1_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4994:1: ( ( ruleDataType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4995:1: ( ruleDataType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4995:1: ( ruleDataType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4996:1: ruleDataType
            {
             before(grammarAccess.getPropertyAccess().getTypeDataTypeParserRuleCall_1_0_1_1_0_0()); 
            pushFollow(FOLLOW_ruleDataType_in_rule__Property__TypeAssignment_1_0_1_1_010204);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5005:1: rule__Property__EntityListAssignment_1_0_1_1_1 : ( ruleEntityList ) ;
    public final void rule__Property__EntityListAssignment_1_0_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5009:1: ( ( ruleEntityList ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5010:1: ( ruleEntityList )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5010:1: ( ruleEntityList )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5011:1: ruleEntityList
            {
             before(grammarAccess.getPropertyAccess().getEntityListEntityListParserRuleCall_1_0_1_1_1_0()); 
            pushFollow(FOLLOW_ruleEntityList_in_rule__Property__EntityListAssignment_1_0_1_1_110235);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5020:1: rule__Property__ConstantAssignment_1_1_0 : ( ( '=' ) ) ;
    public final void rule__Property__ConstantAssignment_1_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5024:1: ( ( ( '=' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5025:1: ( ( '=' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5025:1: ( ( '=' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5026:1: ( '=' )
            {
             before(grammarAccess.getPropertyAccess().getConstantEqualsSignKeyword_1_1_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5027:1: ( '=' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5028:1: '='
            {
             before(grammarAccess.getPropertyAccess().getConstantEqualsSignKeyword_1_1_0_0()); 
            match(input,54,FOLLOW_54_in_rule__Property__ConstantAssignment_1_1_010271); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5043:1: rule__Property__ValueAssignment_1_1_1 : ( ruleText ) ;
    public final void rule__Property__ValueAssignment_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5047:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5048:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5048:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5049:1: ruleText
            {
             before(grammarAccess.getPropertyAccess().getValueTextParserRuleCall_1_1_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Property__ValueAssignment_1_1_110310);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5058:1: rule__EntityList__RefsAssignment_1 : ( ( ruleQualifiedName ) ) ;
    public final void rule__EntityList__RefsAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5062:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5063:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5063:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5064:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityCrossReference_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5065:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5066:1: ruleQualifiedName
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityQualifiedNameParserRuleCall_1_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_110345);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5077:1: rule__EntityList__RefsAssignment_2_1 : ( ( ruleQualifiedName ) ) ;
    public final void rule__EntityList__RefsAssignment_2_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5081:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5082:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5082:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5083:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityCrossReference_2_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5084:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5085:1: ruleQualifiedName
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityQualifiedNameParserRuleCall_2_1_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_2_110384);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5096:1: rule__Note__PositionAssignment_1_0_0_0 : ( ruleNotePosition ) ;
    public final void rule__Note__PositionAssignment_1_0_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5100:1: ( ( ruleNotePosition ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5101:1: ( ruleNotePosition )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5101:1: ( ruleNotePosition )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5102:1: ruleNotePosition
            {
             before(grammarAccess.getNoteAccess().getPositionNotePositionEnumRuleCall_1_0_0_0_0()); 
            pushFollow(FOLLOW_ruleNotePosition_in_rule__Note__PositionAssignment_1_0_0_010419);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5111:1: rule__Note__ValueAssignment_1_0_0_1_1 : ( ruleText ) ;
    public final void rule__Note__ValueAssignment_1_0_0_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5115:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5116:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5116:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5117:1: ruleText
            {
             before(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_0_0_1_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_0_1_110450);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5126:1: rule__Note__OfAssignment_1_0_1_1 : ( ( RULE_ID ) ) ;
    public final void rule__Note__OfAssignment_1_0_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5130:1: ( ( ( RULE_ID ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5131:1: ( ( RULE_ID ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5131:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5132:1: ( RULE_ID )
            {
             before(grammarAccess.getNoteAccess().getOfEntityCrossReference_1_0_1_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5133:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5134:1: RULE_ID
            {
             before(grammarAccess.getNoteAccess().getOfEntityIDTerminalRuleCall_1_0_1_1_0_1()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Note__OfAssignment_1_0_1_110485); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5145:1: rule__Note__ValueAssignment_1_0_1_3 : ( ruleText ) ;
    public final void rule__Note__ValueAssignment_1_0_1_3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5149:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5150:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5150:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5151:1: ruleText
            {
             before(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_0_1_3_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_1_310520);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5160:1: rule__Note__NameAssignment_1_1_1 : ( RULE_ID ) ;
    public final void rule__Note__NameAssignment_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5164:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5165:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5165:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5166:1: RULE_ID
            {
             before(grammarAccess.getNoteAccess().getNameIDTerminalRuleCall_1_1_1_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Note__NameAssignment_1_1_110551); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5175:1: rule__Note__ValueAssignment_1_1_3 : ( ruleText ) ;
    public final void rule__Note__ValueAssignment_1_1_3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5179:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5180:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5180:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5181:1: ruleText
            {
             before(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_1_3_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_1_310582);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5190:1: rule__DataType__NativeAssignment_0_0 : ( ruleNativeType ) ;
    public final void rule__DataType__NativeAssignment_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5194:1: ( ( ruleNativeType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5195:1: ( ruleNativeType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5195:1: ( ruleNativeType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5196:1: ruleNativeType
            {
             before(grammarAccess.getDataTypeAccess().getNativeNativeTypeEnumRuleCall_0_0_0()); 
            pushFollow(FOLLOW_ruleNativeType_in_rule__DataType__NativeAssignment_0_010613);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5205:1: rule__DataType__EntityAssignment_0_1 : ( ( ruleQualifiedName ) ) ;
    public final void rule__DataType__EntityAssignment_0_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5209:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5210:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5210:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5211:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getDataTypeAccess().getEntityEntityCrossReference_0_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5212:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5213:1: ruleQualifiedName
            {
             before(grammarAccess.getDataTypeAccess().getEntityEntityQualifiedNameParserRuleCall_0_1_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__DataType__EntityAssignment_0_110648);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5224:1: rule__DataType__IsArrayAssignment_1 : ( ( '[]' ) ) ;
    public final void rule__DataType__IsArrayAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5228:1: ( ( ( '[]' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5229:1: ( ( '[]' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5229:1: ( ( '[]' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5230:1: ( '[]' )
            {
             before(grammarAccess.getDataTypeAccess().getIsArrayLeftSquareBracketRightSquareBracketKeyword_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5231:1: ( '[]' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5232:1: '[]'
            {
             before(grammarAccess.getDataTypeAccess().getIsArrayLeftSquareBracketRightSquareBracketKeyword_1_0()); 
            match(input,55,FOLLOW_55_in_rule__DataType__IsArrayAssignment_110688); 
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
    public static final BitSet FOLLOW_rule__Text__Alternatives_in_ruleText1134 = new BitSet(new long[]{0x000000007FFFF072L});
    public static final BitSet FOLLOW_rule__Text__Alternatives_in_ruleText1146 = new BitSet(new long[]{0x000000007FFFF072L});
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
    public static final BitSet FOLLOW_31_in_rule__PackageStyle__Alternatives2538 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_32_in_rule__PackageStyle__Alternatives2559 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_33_in_rule__PackageStyle__Alternatives2580 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_34_in_rule__PackageStyle__Alternatives2601 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_35_in_rule__PackageStyle__Alternatives2622 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_36_in_rule__PackageStyle__Alternatives2643 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_rule__CompType__Alternatives2679 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_38_in_rule__CompType__Alternatives2700 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_39_in_rule__CompType__Alternatives2721 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_16_in_rule__NotePosition__Alternatives2757 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_17_in_rule__NotePosition__Alternatives2778 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_14_in_rule__NotePosition__Alternatives2799 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_15_in_rule__NotePosition__Alternatives2820 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_19_in_rule__NativeType__Alternatives2856 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_20_in_rule__NativeType__Alternatives2877 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_21_in_rule__NativeType__Alternatives2898 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_22_in_rule__NativeType__Alternatives2919 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__0__Impl_in_rule__DomainModel__Group__02952 = new BitSet(new long[]{0x00000000000000A0L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__1_in_rule__DomainModel__Group__02955 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_40_in_rule__DomainModel__Group__0__Impl2983 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__1__Impl_in_rule__DomainModel__Group__13014 = new BitSet(new long[]{0x00000000000000A0L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__2_in_rule__DomainModel__Group__13017 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__2__Impl_in_rule__DomainModel__Group__23075 = new BitSet(new long[]{0x00000000000000A0L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__3_in_rule__DomainModel__Group__23078 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__FileAssignment_2_in_rule__DomainModel__Group__2__Impl3105 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__3__Impl_in_rule__DomainModel__Group__33136 = new BitSet(new long[]{0x0000000000800000L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__4_in_rule__DomainModel__Group__33139 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__DomainModel__Group__3__Impl3166 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__4__Impl_in_rule__DomainModel__Group__43195 = new BitSet(new long[]{0x0000020000000000L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__5_in_rule__DomainModel__Group__43198 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3227 = new BitSet(new long[]{0x0000000000800002L});
    public static final BitSet FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3239 = new BitSet(new long[]{0x0000000000800002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__5__Impl_in_rule__DomainModel__Group__53272 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_41_in_rule__DomainModel__Group__5__Impl3300 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__0__Impl_in_rule__CPackage__Group__03343 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__CPackage__Group__1_in_rule__CPackage__Group__03346 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_23_in_rule__CPackage__Group__0__Impl3374 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__1__Impl_in_rule__CPackage__Group__13405 = new BitSet(new long[]{0x0000140000000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group__2_in_rule__CPackage__Group__13408 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__NameAssignment_1_in_rule__CPackage__Group__1__Impl3435 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__2__Impl_in_rule__CPackage__Group__23465 = new BitSet(new long[]{0x0000140000000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group__3_in_rule__CPackage__Group__23468 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__0_in_rule__CPackage__Group__2__Impl3495 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__3__Impl_in_rule__CPackage__Group__33526 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__CPackage__Group__4_in_rule__CPackage__Group__33529 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_42_in_rule__CPackage__Group__3__Impl3557 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__4__Impl_in_rule__CPackage__Group__43588 = new BitSet(new long[]{0x0000080007800010L});
    public static final BitSet FOLLOW_rule__CPackage__Group__5_in_rule__CPackage__Group__43591 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__4__Impl3618 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__5__Impl_in_rule__CPackage__Group__53647 = new BitSet(new long[]{0x0000080007800010L});
    public static final BitSet FOLLOW_rule__CPackage__Group__6_in_rule__CPackage__Group__53650 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__ElementsAssignment_5_in_rule__CPackage__Group__5__Impl3677 = new BitSet(new long[]{0x0000000007800012L});
    public static final BitSet FOLLOW_rule__CPackage__Group__6__Impl_in_rule__CPackage__Group__63708 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__CPackage__Group__7_in_rule__CPackage__Group__63711 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_rule__CPackage__Group__6__Impl3739 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__7__Impl_in_rule__CPackage__Group__73770 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__7__Impl3797 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__0__Impl_in_rule__CPackage__Group_2__03842 = new BitSet(new long[]{0x0000001F80000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__1_in_rule__CPackage__Group_2__03845 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_44_in_rule__CPackage__Group_2__0__Impl3873 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__1__Impl_in_rule__CPackage__Group_2__13904 = new BitSet(new long[]{0x0000200000000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__2_in_rule__CPackage__Group_2__13907 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__StyleAssignment_2_1_in_rule__CPackage__Group_2__1__Impl3934 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__2__Impl_in_rule__CPackage__Group_2__23964 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_45_in_rule__CPackage__Group_2__2__Impl3992 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__0__Impl_in_rule__Relation__Group__04029 = new BitSet(new long[]{0x0000C0E000000000L});
    public static final BitSet FOLLOW_rule__Relation__Group__1_in_rule__Relation__Group__04032 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__LeftRefAssignment_0_in_rule__Relation__Group__0__Impl4059 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__1__Impl_in_rule__Relation__Group__14089 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Relation__Group__2_in_rule__Relation__Group__14092 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__RelTypeAssignment_1_in_rule__Relation__Group__1__Impl4119 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__2__Impl_in_rule__Relation__Group__24149 = new BitSet(new long[]{0x0000000020000080L});
    public static final BitSet FOLLOW_rule__Relation__Group__3_in_rule__Relation__Group__24152 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__RightRefAssignment_2_in_rule__Relation__Group__2__Impl4179 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__3__Impl_in_rule__Relation__Group__34209 = new BitSet(new long[]{0x0000000020000080L});
    public static final BitSet FOLLOW_rule__Relation__Group__4_in_rule__Relation__Group__34212 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__0_in_rule__Relation__Group__3__Impl4239 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__4__Impl_in_rule__Relation__Group__44270 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Relation__Group__4__Impl4297 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__0__Impl_in_rule__Relation__Group_3__04336 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__1_in_rule__Relation__Group_3__04339 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_29_in_rule__Relation__Group_3__0__Impl4367 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__1__Impl_in_rule__Relation__Group_3__14398 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__NameAssignment_3_1_in_rule__Relation__Group_3__1__Impl4425 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__0__Impl_in_rule__RelationParse__Group_0__04459 = new BitSet(new long[]{0x0000C0E000000000L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__1_in_rule__RelationParse__Group_0__04462 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__CompAssignment_0_0_in_rule__RelationParse__Group_0__0__Impl4489 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__1__Impl_in_rule__RelationParse__Group_0__14519 = new BitSet(new long[]{0x0010000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__2_in_rule__RelationParse__Group_0__14522 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__TypeAssignment_0_1_in_rule__RelationParse__Group_0__1__Impl4549 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__2__Impl_in_rule__RelationParse__Group_0__24579 = new BitSet(new long[]{0x0010000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__3_in_rule__RelationParse__Group_0__24582 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__DirectAssignment_0_2_in_rule__RelationParse__Group_0__2__Impl4609 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__3__Impl_in_rule__RelationParse__Group_0__34640 = new BitSet(new long[]{0x0000000000000200L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__4_in_rule__RelationParse__Group_0__34643 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_WS_in_rule__RelationParse__Group_0__3__Impl4670 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__4__Impl_in_rule__RelationParse__Group_0__44699 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__MultiAssignment_0_4_in_rule__RelationParse__Group_0__4__Impl4726 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__0__Impl_in_rule__RelationParse__Group_1__04767 = new BitSet(new long[]{0x0030000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__1_in_rule__RelationParse__Group_1__04770 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__TypeAssignment_1_0_in_rule__RelationParse__Group_1__0__Impl4797 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__1__Impl_in_rule__RelationParse__Group_1__14827 = new BitSet(new long[]{0x0030000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__2_in_rule__RelationParse__Group_1__14830 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Alternatives_1_1_in_rule__RelationParse__Group_1__1__Impl4857 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__2__Impl_in_rule__RelationParse__Group_1__24888 = new BitSet(new long[]{0x0000000000000200L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__3_in_rule__RelationParse__Group_1__24891 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_WS_in_rule__RelationParse__Group_1__2__Impl4918 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__3__Impl_in_rule__RelationParse__Group_1__34947 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__MultiAssignment_1_3_in_rule__RelationParse__Group_1__3__Impl4974 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__0__Impl_in_rule__StrongRel__Group__05013 = new BitSet(new long[]{0x000040000000F000L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__1_in_rule__StrongRel__Group__05016 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_46_in_rule__StrongRel__Group__0__Impl5044 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__1__Impl_in_rule__StrongRel__Group__15075 = new BitSet(new long[]{0x000040000000F000L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__2_in_rule__StrongRel__Group__15078 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Alternatives_1_in_rule__StrongRel__Group__1__Impl5105 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__2__Impl_in_rule__StrongRel__Group__25136 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_46_in_rule__StrongRel__Group__2__Impl5167 = new BitSet(new long[]{0x0000400000000002L});
    public static final BitSet FOLLOW_46_in_rule__StrongRel__Group__2__Impl5183 = new BitSet(new long[]{0x0000400000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__0__Impl_in_rule__WeakRel__Group__05224 = new BitSet(new long[]{0x000080000000F000L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__1_in_rule__WeakRel__Group__05227 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_47_in_rule__WeakRel__Group__0__Impl5255 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__1__Impl_in_rule__WeakRel__Group__15286 = new BitSet(new long[]{0x000080000000F000L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__2_in_rule__WeakRel__Group__15289 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Alternatives_1_in_rule__WeakRel__Group__1__Impl5316 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__2__Impl_in_rule__WeakRel__Group__25347 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_47_in_rule__WeakRel__Group__2__Impl5378 = new BitSet(new long[]{0x0000800000000002L});
    public static final BitSet FOLLOW_47_in_rule__WeakRel__Group__2__Impl5394 = new BitSet(new long[]{0x0000800000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__0__Impl_in_rule__Enumer__Group__05435 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Enumer__Group__1_in_rule__Enumer__Group__05438 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_25_in_rule__Enumer__Group__0__Impl5466 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__1__Impl_in_rule__Enumer__Group__15497 = new BitSet(new long[]{0x0000040000000000L});
    public static final BitSet FOLLOW_rule__Enumer__Group__2_in_rule__Enumer__Group__15500 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__NameAssignment_1_in_rule__Enumer__Group__1__Impl5527 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__2__Impl_in_rule__Enumer__Group__25557 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Enumer__Group__3_in_rule__Enumer__Group__25560 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_42_in_rule__Enumer__Group__2__Impl5588 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__3__Impl_in_rule__Enumer__Group__35619 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Enumer__Group__4_in_rule__Enumer__Group__35622 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__3__Impl5650 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__4__Impl_in_rule__Enumer__Group__45681 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Enumer__Group__5_in_rule__Enumer__Group__45684 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__0_in_rule__Enumer__Group__4__Impl5711 = new BitSet(new long[]{0x0000000000000012L});
    public static final BitSet FOLLOW_rule__Enumer__Group__5__Impl_in_rule__Enumer__Group__55742 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Enumer__Group__6_in_rule__Enumer__Group__55745 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_rule__Enumer__Group__5__Impl5773 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__6__Impl_in_rule__Enumer__Group__65804 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__6__Impl5831 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__0__Impl_in_rule__Enumer__Group_4__05874 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__1_in_rule__Enumer__Group_4__05877 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__TypesAssignment_4_0_in_rule__Enumer__Group_4__0__Impl5904 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__1__Impl_in_rule__Enumer__Group_4__15934 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Enumer__Group_4__1__Impl5962 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__0__Impl_in_rule__Clazz__Group__05997 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Clazz__Group__1_in_rule__Clazz__Group__06000 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_24_in_rule__Clazz__Group__0__Impl6028 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__1__Impl_in_rule__Clazz__Group__16059 = new BitSet(new long[]{0x0000140000000080L});
    public static final BitSet FOLLOW_rule__Clazz__Group__2_in_rule__Clazz__Group__16062 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__NameAssignment_1_in_rule__Clazz__Group__1__Impl6089 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__2__Impl_in_rule__Clazz__Group__26119 = new BitSet(new long[]{0x0000140000000080L});
    public static final BitSet FOLLOW_rule__Clazz__Group__3_in_rule__Clazz__Group__26122 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__0_in_rule__Clazz__Group__2__Impl6149 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__3__Impl_in_rule__Clazz__Group__36180 = new BitSet(new long[]{0x0000140000000080L});
    public static final BitSet FOLLOW_rule__Clazz__Group__4_in_rule__Clazz__Group__36183 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__0_in_rule__Clazz__Group__3__Impl6210 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__4__Impl_in_rule__Clazz__Group__46241 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Clazz__Group__4__Impl6268 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__0__Impl_in_rule__Clazz__Group_2__06307 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__1_in_rule__Clazz__Group_2__06310 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_44_in_rule__Clazz__Group_2__0__Impl6338 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__1__Impl_in_rule__Clazz__Group_2__16369 = new BitSet(new long[]{0x0000200000000000L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__2_in_rule__Clazz__Group_2__16372 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__StereotypeAssignment_2_1_in_rule__Clazz__Group_2__1__Impl6399 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__2__Impl_in_rule__Clazz__Group_2__26429 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_45_in_rule__Clazz__Group_2__2__Impl6457 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__0__Impl_in_rule__Clazz__Group_3__06494 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__1_in_rule__Clazz__Group_3__06497 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_42_in_rule__Clazz__Group_3__0__Impl6525 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__1__Impl_in_rule__Clazz__Group_3__16556 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__2_in_rule__Clazz__Group_3__16559 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Clazz__Group_3__1__Impl6587 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__2__Impl_in_rule__Clazz__Group_3__26618 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__3_in_rule__Clazz__Group_3__26621 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__PropertiesAssignment_3_2_in_rule__Clazz__Group_3__2__Impl6648 = new BitSet(new long[]{0x0000000000000012L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__3__Impl_in_rule__Clazz__Group_3__36679 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_rule__Clazz__Group_3__3__Impl6707 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group__0__Impl_in_rule__Property__Group__06746 = new BitSet(new long[]{0x0040000060000000L});
    public static final BitSet FOLLOW_rule__Property__Group__1_in_rule__Property__Group__06749 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__NameAssignment_0_in_rule__Property__Group__0__Impl6776 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group__1__Impl_in_rule__Property__Group__16806 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Property__Group__2_in_rule__Property__Group__16809 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Alternatives_1_in_rule__Property__Group__1__Impl6836 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group__2__Impl_in_rule__Property__Group__26866 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Property__Group__2__Impl6893 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0__0__Impl_in_rule__Property__Group_1_0__06928 = new BitSet(new long[]{0x0000000060000000L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0__1_in_rule__Property__Group_1_0__06931 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__OptionalAssignment_1_0_0_in_rule__Property__Group_1_0__0__Impl6958 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0__1__Impl_in_rule__Property__Group_1_0__16989 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__0_in_rule__Property__Group_1_0__1__Impl7016 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__0__Impl_in_rule__Property__Group_1_0_1__07051 = new BitSet(new long[]{0x0001000000780010L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__1_in_rule__Property__Group_1_0_1__07054 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_29_in_rule__Property__Group_1_0_1__0__Impl7082 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__1__Impl_in_rule__Property__Group_1_0_1__17113 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Alternatives_1_0_1_1_in_rule__Property__Group_1_0_1__1__Impl7140 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_1__0__Impl_in_rule__Property__Group_1_1__07174 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Property__Group_1_1__1_in_rule__Property__Group_1_1__07177 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__ConstantAssignment_1_1_0_in_rule__Property__Group_1_1__0__Impl7204 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_1__1__Impl_in_rule__Property__Group_1_1__17234 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__ValueAssignment_1_1_1_in_rule__Property__Group_1_1__1__Impl7261 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__0__Impl_in_rule__EntityList__Group__07295 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__EntityList__Group__1_in_rule__EntityList__Group__07298 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_48_in_rule__EntityList__Group__0__Impl7326 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__1__Impl_in_rule__EntityList__Group__17357 = new BitSet(new long[]{0x0006000000000000L});
    public static final BitSet FOLLOW_rule__EntityList__Group__2_in_rule__EntityList__Group__17360 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__RefsAssignment_1_in_rule__EntityList__Group__1__Impl7387 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__2__Impl_in_rule__EntityList__Group__27417 = new BitSet(new long[]{0x0006000000000000L});
    public static final BitSet FOLLOW_rule__EntityList__Group__3_in_rule__EntityList__Group__27420 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__0_in_rule__EntityList__Group__2__Impl7447 = new BitSet(new long[]{0x0004000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__3__Impl_in_rule__EntityList__Group__37478 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_49_in_rule__EntityList__Group__3__Impl7506 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__0__Impl_in_rule__EntityList__Group_2__07545 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__1_in_rule__EntityList__Group_2__07548 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_50_in_rule__EntityList__Group_2__0__Impl7576 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__1__Impl_in_rule__EntityList__Group_2__17607 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__RefsAssignment_2_1_in_rule__EntityList__Group_2__1__Impl7634 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group__0__Impl_in_rule__Note__Group__07668 = new BitSet(new long[]{0x000000001803C000L});
    public static final BitSet FOLLOW_rule__Note__Group__1_in_rule__Note__Group__07671 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_26_in_rule__Note__Group__0__Impl7699 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group__1__Impl_in_rule__Note__Group__17730 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Alternatives_1_in_rule__Note__Group__1__Impl7757 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__0__Impl_in_rule__Note__Group_1_0_0__07791 = new BitSet(new long[]{0x0000000020000000L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__1_in_rule__Note__Group_1_0_0__07794 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__PositionAssignment_1_0_0_0_in_rule__Note__Group_1_0_0__0__Impl7821 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__1__Impl_in_rule__Note__Group_1_0_0__17851 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__0_in_rule__Note__Group_1_0_0__1__Impl7878 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__0__Impl_in_rule__Note__Group_1_0_0_1__07912 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__1_in_rule__Note__Group_1_0_0_1__07915 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_29_in_rule__Note__Group_1_0_0_1__0__Impl7943 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__1__Impl_in_rule__Note__Group_1_0_0_1__17974 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__2_in_rule__Note__Group_1_0_0_1__17977 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__ValueAssignment_1_0_0_1_1_in_rule__Note__Group_1_0_0_1__1__Impl8004 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__2__Impl_in_rule__Note__Group_1_0_0_1__28034 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_0_1__2__Impl8061 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__0__Impl_in_rule__Note__Group_1_0_1__08096 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__1_in_rule__Note__Group_1_0_1__08099 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_28_in_rule__Note__Group_1_0_1__0__Impl8127 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__1__Impl_in_rule__Note__Group_1_0_1__18158 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__2_in_rule__Note__Group_1_0_1__18161 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__OfAssignment_1_0_1_1_in_rule__Note__Group_1_0_1__1__Impl8188 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__2__Impl_in_rule__Note__Group_1_0_1__28218 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__3_in_rule__Note__Group_1_0_1__28221 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__2__Impl8248 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__3__Impl_in_rule__Note__Group_1_0_1__38277 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__4_in_rule__Note__Group_1_0_1__38280 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__ValueAssignment_1_0_1_3_in_rule__Note__Group_1_0_1__3__Impl8307 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__4__Impl_in_rule__Note__Group_1_0_1__48337 = new BitSet(new long[]{0x0008000000000000L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__5_in_rule__Note__Group_1_0_1__48340 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__4__Impl8367 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__5__Impl_in_rule__Note__Group_1_0_1__58396 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__6_in_rule__Note__Group_1_0_1__58399 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_51_in_rule__Note__Group_1_0_1__5__Impl8427 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__6__Impl_in_rule__Note__Group_1_0_1__68458 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__6__Impl8485 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__0__Impl_in_rule__Note__Group_1_1__08528 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__1_in_rule__Note__Group_1_1__08531 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_27_in_rule__Note__Group_1_1__0__Impl8559 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__1__Impl_in_rule__Note__Group_1_1__18590 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__2_in_rule__Note__Group_1_1__18593 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__NameAssignment_1_1_1_in_rule__Note__Group_1_1__1__Impl8620 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__2__Impl_in_rule__Note__Group_1_1__28650 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__3_in_rule__Note__Group_1_1__28653 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__2__Impl8680 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__3__Impl_in_rule__Note__Group_1_1__38709 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__4_in_rule__Note__Group_1_1__38712 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__ValueAssignment_1_1_3_in_rule__Note__Group_1_1__3__Impl8739 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__4__Impl_in_rule__Note__Group_1_1__48769 = new BitSet(new long[]{0x0008000000000000L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__5_in_rule__Note__Group_1_1__48772 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__4__Impl8799 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__5__Impl_in_rule__Note__Group_1_1__58828 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__6_in_rule__Note__Group_1_1__58831 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_51_in_rule__Note__Group_1_1__5__Impl8859 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__6__Impl_in_rule__Note__Group_1_1__68890 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__6__Impl8917 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__Group__0__Impl_in_rule__DataType__Group__08960 = new BitSet(new long[]{0x0080000000000000L});
    public static final BitSet FOLLOW_rule__DataType__Group__1_in_rule__DataType__Group__08963 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__Alternatives_0_in_rule__DataType__Group__0__Impl8990 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__Group__1__Impl_in_rule__DataType__Group__19020 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__IsArrayAssignment_1_in_rule__DataType__Group__1__Impl9047 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group__0__Impl_in_rule__QualifiedName__Group__09082 = new BitSet(new long[]{0x0000800000000000L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group__1_in_rule__QualifiedName__Group__09085 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__QualifiedName__Group__0__Impl9112 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group__1__Impl_in_rule__QualifiedName__Group__19141 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__0_in_rule__QualifiedName__Group__1__Impl9168 = new BitSet(new long[]{0x0000800000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__0__Impl_in_rule__QualifiedName__Group_1__09203 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__1_in_rule__QualifiedName__Group_1__09206 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_47_in_rule__QualifiedName__Group_1__0__Impl9234 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__1__Impl_in_rule__QualifiedName__Group_1__19265 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__QualifiedName__Group_1__1__Impl9292 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_STRING_in_rule__DomainModel__FileAssignment_29330 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCPackage_in_rule__DomainModel__PackagesAssignment_49361 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__CPackage__NameAssignment_19392 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rulePackageStyle_in_rule__CPackage__StyleAssignment_2_19423 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleElement_in_rule__CPackage__ElementsAssignment_59454 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__Relation__LeftRefAssignment_09489 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationParse_in_rule__Relation__RelTypeAssignment_19524 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__Relation__RightRefAssignment_29559 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Relation__NameAssignment_3_19594 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCompType_in_rule__RelationParse__CompAssignment_0_09625 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_0_19656 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_52_in_rule__RelationParse__DirectAssignment_0_29692 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_0_49731 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_1_09762 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_52_in_rule__RelationParse__DirectAssignment_1_1_09798 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_53_in_rule__RelationParse__ExtAssignment_1_1_19842 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_1_39881 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleStrongRel_in_rule__RelationType__StrongAssignment_09912 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleWeakRel_in_rule__RelationType__WeakAssignment_19943 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Enumer__NameAssignment_19974 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Enumer__TypesAssignment_4_010005 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Clazz__NameAssignment_110036 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Clazz__StereotypeAssignment_2_110067 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleProperty_in_rule__Clazz__PropertiesAssignment_3_210098 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Property__NameAssignment_010129 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_30_in_rule__Property__OptionalAssignment_1_0_010165 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleDataType_in_rule__Property__TypeAssignment_1_0_1_1_010204 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntityList_in_rule__Property__EntityListAssignment_1_0_1_1_110235 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_54_in_rule__Property__ConstantAssignment_1_1_010271 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Property__ValueAssignment_1_1_110310 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_110345 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_2_110384 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNotePosition_in_rule__Note__PositionAssignment_1_0_0_010419 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_0_1_110450 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Note__OfAssignment_1_0_1_110485 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_1_310520 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Note__NameAssignment_1_1_110551 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_1_310582 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNativeType_in_rule__DataType__NativeAssignment_0_010613 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__DataType__EntityAssignment_0_110648 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_55_in_rule__DataType__IsArrayAssignment_110688 = new BitSet(new long[]{0x0000000000000002L});

}