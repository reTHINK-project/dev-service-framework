package rethink.uml.parser.antlr.internal; 

import org.eclipse.xtext.*;
import org.eclipse.xtext.parser.*;
import org.eclipse.xtext.parser.impl.*;
import org.eclipse.emf.ecore.util.EcoreUtil;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.common.util.Enumerator;
import org.eclipse.xtext.parser.antlr.AbstractInternalAntlrParser;
import org.eclipse.xtext.parser.antlr.XtextTokenStream;
import org.eclipse.xtext.parser.antlr.XtextTokenStream.HiddenTokens;
import org.eclipse.xtext.parser.antlr.AntlrDatatypeRuleToken;
import rethink.uml.services.ClassDiagramGrammarAccess;



import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

@SuppressWarnings("all")
public class InternalClassDiagramParser extends AbstractInternalAntlrParser {
    public static final String[] tokenNames = new String[] {
        "<invalid>", "<EOR>", "<DOWN>", "<UP>", "RULE_STRING", "RULE_END_LINE", "RULE_WS", "RULE_MULTI", "RULE_ID", "RULE_ANY_OTHER", "RULE_ML_COMMENT", "RULE_SL_COMMENT", "'@startuml'", "'@enduml'", "'package'", "'<<'", "'>>'", "'{'", "'}'", "':'", "'>'", "'|>'", "'-'", "'up'", "'down'", "'left'", "'right'", "'.'", "'enum'", "'class'", "'?'", "'='", "'['", "'|'", "']'", "'note'", "'of'", "'end note'", "'as'", "'[]'", "'top'", "'bottom'", "'null'", "'string'", "'number'", "'integer'", "'boolean'", "'Node'", "'Rect'", "'Folder'", "'Frame'", "'Cloud'", "'Database'", "'none'", "'*'", "'o'"
    };
    public static final int T__50=50;
    public static final int T__19=19;
    public static final int RULE_END_LINE=5;
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
    public static final int RULE_ID=8;
    public static final int RULE_MULTI=7;
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
    public static final int RULE_STRING=4;
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
    public static final int RULE_WS=6;
    public static final int RULE_ANY_OTHER=9;
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
    public String getGrammarFileName() { return "../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g"; }



     	private ClassDiagramGrammarAccess grammarAccess;
     	
        public InternalClassDiagramParser(TokenStream input, ClassDiagramGrammarAccess grammarAccess) {
            this(input);
            this.grammarAccess = grammarAccess;
            registerRules(grammarAccess.getGrammar());
        }
        
        @Override
        protected String getFirstRuleName() {
        	return "DomainModel";	
       	}
       	
       	@Override
       	protected ClassDiagramGrammarAccess getGrammarAccess() {
       		return grammarAccess;
       	}



    // $ANTLR start "entryRuleDomainModel"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:68:1: entryRuleDomainModel returns [EObject current=null] : iv_ruleDomainModel= ruleDomainModel EOF ;
    public final EObject entryRuleDomainModel() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleDomainModel = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:69:2: (iv_ruleDomainModel= ruleDomainModel EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:70:2: iv_ruleDomainModel= ruleDomainModel EOF
            {
             newCompositeNode(grammarAccess.getDomainModelRule()); 
            pushFollow(FOLLOW_ruleDomainModel_in_entryRuleDomainModel75);
            iv_ruleDomainModel=ruleDomainModel();

            state._fsp--;

             current =iv_ruleDomainModel; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleDomainModel85); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleDomainModel"


    // $ANTLR start "ruleDomainModel"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:77:1: ruleDomainModel returns [EObject current=null] : (otherlv_0= '@startuml' () ( (lv_file_2_0= RULE_STRING ) )? this_END_LINE_3= RULE_END_LINE ( (lv_packages_4_0= ruleCPackage ) )+ otherlv_5= '@enduml' ) ;
    public final EObject ruleDomainModel() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token lv_file_2_0=null;
        Token this_END_LINE_3=null;
        Token otherlv_5=null;
        EObject lv_packages_4_0 = null;


         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:80:28: ( (otherlv_0= '@startuml' () ( (lv_file_2_0= RULE_STRING ) )? this_END_LINE_3= RULE_END_LINE ( (lv_packages_4_0= ruleCPackage ) )+ otherlv_5= '@enduml' ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:81:1: (otherlv_0= '@startuml' () ( (lv_file_2_0= RULE_STRING ) )? this_END_LINE_3= RULE_END_LINE ( (lv_packages_4_0= ruleCPackage ) )+ otherlv_5= '@enduml' )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:81:1: (otherlv_0= '@startuml' () ( (lv_file_2_0= RULE_STRING ) )? this_END_LINE_3= RULE_END_LINE ( (lv_packages_4_0= ruleCPackage ) )+ otherlv_5= '@enduml' )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:81:3: otherlv_0= '@startuml' () ( (lv_file_2_0= RULE_STRING ) )? this_END_LINE_3= RULE_END_LINE ( (lv_packages_4_0= ruleCPackage ) )+ otherlv_5= '@enduml'
            {
            otherlv_0=(Token)match(input,12,FOLLOW_12_in_ruleDomainModel122); 

                	newLeafNode(otherlv_0, grammarAccess.getDomainModelAccess().getStartumlKeyword_0());
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:85:1: ()
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:86:5: 
            {

                    current = forceCreateModelElement(
                        grammarAccess.getDomainModelAccess().getDomainModelAction_1(),
                        current);
                

            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:91:2: ( (lv_file_2_0= RULE_STRING ) )?
            int alt1=2;
            int LA1_0 = input.LA(1);

            if ( (LA1_0==RULE_STRING) ) {
                alt1=1;
            }
            switch (alt1) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:92:1: (lv_file_2_0= RULE_STRING )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:92:1: (lv_file_2_0= RULE_STRING )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:93:3: lv_file_2_0= RULE_STRING
                    {
                    lv_file_2_0=(Token)match(input,RULE_STRING,FOLLOW_RULE_STRING_in_ruleDomainModel148); 

                    			newLeafNode(lv_file_2_0, grammarAccess.getDomainModelAccess().getFileSTRINGTerminalRuleCall_2_0()); 
                    		

                    	        if (current==null) {
                    	            current = createModelElement(grammarAccess.getDomainModelRule());
                    	        }
                           		setWithLastConsumed(
                           			current, 
                           			"file",
                            		lv_file_2_0, 
                            		"STRING");
                    	    

                    }


                    }
                    break;

            }

            this_END_LINE_3=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleDomainModel165); 
             
                newLeafNode(this_END_LINE_3, grammarAccess.getDomainModelAccess().getEND_LINETerminalRuleCall_3()); 
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:113:1: ( (lv_packages_4_0= ruleCPackage ) )+
            int cnt2=0;
            loop2:
            do {
                int alt2=2;
                int LA2_0 = input.LA(1);

                if ( (LA2_0==14) ) {
                    alt2=1;
                }


                switch (alt2) {
            	case 1 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:114:1: (lv_packages_4_0= ruleCPackage )
            	    {
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:114:1: (lv_packages_4_0= ruleCPackage )
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:115:3: lv_packages_4_0= ruleCPackage
            	    {
            	     
            	    	        newCompositeNode(grammarAccess.getDomainModelAccess().getPackagesCPackageParserRuleCall_4_0()); 
            	    	    
            	    pushFollow(FOLLOW_ruleCPackage_in_ruleDomainModel185);
            	    lv_packages_4_0=ruleCPackage();

            	    state._fsp--;


            	    	        if (current==null) {
            	    	            current = createModelElementForParent(grammarAccess.getDomainModelRule());
            	    	        }
            	           		add(
            	           			current, 
            	           			"packages",
            	            		lv_packages_4_0, 
            	            		"CPackage");
            	    	        afterParserOrEnumRuleCall();
            	    	    

            	    }


            	    }
            	    break;

            	default :
            	    if ( cnt2 >= 1 ) break loop2;
                        EarlyExitException eee =
                            new EarlyExitException(2, input);
                        throw eee;
                }
                cnt2++;
            } while (true);

            otherlv_5=(Token)match(input,13,FOLLOW_13_in_ruleDomainModel198); 

                	newLeafNode(otherlv_5, grammarAccess.getDomainModelAccess().getEndumlKeyword_5());
                

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleDomainModel"


    // $ANTLR start "entryRuleElement"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:143:1: entryRuleElement returns [EObject current=null] : iv_ruleElement= ruleElement EOF ;
    public final EObject entryRuleElement() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleElement = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:144:2: (iv_ruleElement= ruleElement EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:145:2: iv_ruleElement= ruleElement EOF
            {
             newCompositeNode(grammarAccess.getElementRule()); 
            pushFollow(FOLLOW_ruleElement_in_entryRuleElement234);
            iv_ruleElement=ruleElement();

            state._fsp--;

             current =iv_ruleElement; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleElement244); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleElement"


    // $ANTLR start "ruleElement"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:152:1: ruleElement returns [EObject current=null] : (this_Relation_0= ruleRelation | this_CPackage_1= ruleCPackage | this_EntityAndNote_2= ruleEntityAndNote ) ;
    public final EObject ruleElement() throws RecognitionException {
        EObject current = null;

        EObject this_Relation_0 = null;

        EObject this_CPackage_1 = null;

        EObject this_EntityAndNote_2 = null;


         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:155:28: ( (this_Relation_0= ruleRelation | this_CPackage_1= ruleCPackage | this_EntityAndNote_2= ruleEntityAndNote ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:156:1: (this_Relation_0= ruleRelation | this_CPackage_1= ruleCPackage | this_EntityAndNote_2= ruleEntityAndNote )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:156:1: (this_Relation_0= ruleRelation | this_CPackage_1= ruleCPackage | this_EntityAndNote_2= ruleEntityAndNote )
            int alt3=3;
            switch ( input.LA(1) ) {
            case RULE_ID:
                {
                alt3=1;
                }
                break;
            case 14:
                {
                alt3=2;
                }
                break;
            case 28:
            case 29:
            case 35:
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
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:157:5: this_Relation_0= ruleRelation
                    {
                     
                            newCompositeNode(grammarAccess.getElementAccess().getRelationParserRuleCall_0()); 
                        
                    pushFollow(FOLLOW_ruleRelation_in_ruleElement291);
                    this_Relation_0=ruleRelation();

                    state._fsp--;

                     
                            current = this_Relation_0; 
                            afterParserOrEnumRuleCall();
                        

                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:167:5: this_CPackage_1= ruleCPackage
                    {
                     
                            newCompositeNode(grammarAccess.getElementAccess().getCPackageParserRuleCall_1()); 
                        
                    pushFollow(FOLLOW_ruleCPackage_in_ruleElement318);
                    this_CPackage_1=ruleCPackage();

                    state._fsp--;

                     
                            current = this_CPackage_1; 
                            afterParserOrEnumRuleCall();
                        

                    }
                    break;
                case 3 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:177:5: this_EntityAndNote_2= ruleEntityAndNote
                    {
                     
                            newCompositeNode(grammarAccess.getElementAccess().getEntityAndNoteParserRuleCall_2()); 
                        
                    pushFollow(FOLLOW_ruleEntityAndNote_in_ruleElement345);
                    this_EntityAndNote_2=ruleEntityAndNote();

                    state._fsp--;

                     
                            current = this_EntityAndNote_2; 
                            afterParserOrEnumRuleCall();
                        

                    }
                    break;

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleElement"


    // $ANTLR start "entryRuleEntityAndNote"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:193:1: entryRuleEntityAndNote returns [EObject current=null] : iv_ruleEntityAndNote= ruleEntityAndNote EOF ;
    public final EObject entryRuleEntityAndNote() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleEntityAndNote = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:194:2: (iv_ruleEntityAndNote= ruleEntityAndNote EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:195:2: iv_ruleEntityAndNote= ruleEntityAndNote EOF
            {
             newCompositeNode(grammarAccess.getEntityAndNoteRule()); 
            pushFollow(FOLLOW_ruleEntityAndNote_in_entryRuleEntityAndNote380);
            iv_ruleEntityAndNote=ruleEntityAndNote();

            state._fsp--;

             current =iv_ruleEntityAndNote; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleEntityAndNote390); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleEntityAndNote"


    // $ANTLR start "ruleEntityAndNote"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:202:1: ruleEntityAndNote returns [EObject current=null] : (this_Entity_0= ruleEntity | this_Note_1= ruleNote ) ;
    public final EObject ruleEntityAndNote() throws RecognitionException {
        EObject current = null;

        EObject this_Entity_0 = null;

        EObject this_Note_1 = null;


         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:205:28: ( (this_Entity_0= ruleEntity | this_Note_1= ruleNote ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:206:1: (this_Entity_0= ruleEntity | this_Note_1= ruleNote )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:206:1: (this_Entity_0= ruleEntity | this_Note_1= ruleNote )
            int alt4=2;
            int LA4_0 = input.LA(1);

            if ( ((LA4_0>=28 && LA4_0<=29)) ) {
                alt4=1;
            }
            else if ( (LA4_0==35) ) {
                alt4=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 4, 0, input);

                throw nvae;
            }
            switch (alt4) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:207:5: this_Entity_0= ruleEntity
                    {
                     
                            newCompositeNode(grammarAccess.getEntityAndNoteAccess().getEntityParserRuleCall_0()); 
                        
                    pushFollow(FOLLOW_ruleEntity_in_ruleEntityAndNote437);
                    this_Entity_0=ruleEntity();

                    state._fsp--;

                     
                            current = this_Entity_0; 
                            afterParserOrEnumRuleCall();
                        

                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:217:5: this_Note_1= ruleNote
                    {
                     
                            newCompositeNode(grammarAccess.getEntityAndNoteAccess().getNoteParserRuleCall_1()); 
                        
                    pushFollow(FOLLOW_ruleNote_in_ruleEntityAndNote464);
                    this_Note_1=ruleNote();

                    state._fsp--;

                     
                            current = this_Note_1; 
                            afterParserOrEnumRuleCall();
                        

                    }
                    break;

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleEntityAndNote"


    // $ANTLR start "entryRuleEntity"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:233:1: entryRuleEntity returns [EObject current=null] : iv_ruleEntity= ruleEntity EOF ;
    public final EObject entryRuleEntity() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleEntity = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:234:2: (iv_ruleEntity= ruleEntity EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:235:2: iv_ruleEntity= ruleEntity EOF
            {
             newCompositeNode(grammarAccess.getEntityRule()); 
            pushFollow(FOLLOW_ruleEntity_in_entryRuleEntity499);
            iv_ruleEntity=ruleEntity();

            state._fsp--;

             current =iv_ruleEntity; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleEntity509); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleEntity"


    // $ANTLR start "ruleEntity"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:242:1: ruleEntity returns [EObject current=null] : (this_Enumer_0= ruleEnumer | this_Clazz_1= ruleClazz ) ;
    public final EObject ruleEntity() throws RecognitionException {
        EObject current = null;

        EObject this_Enumer_0 = null;

        EObject this_Clazz_1 = null;


         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:245:28: ( (this_Enumer_0= ruleEnumer | this_Clazz_1= ruleClazz ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:246:1: (this_Enumer_0= ruleEnumer | this_Clazz_1= ruleClazz )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:246:1: (this_Enumer_0= ruleEnumer | this_Clazz_1= ruleClazz )
            int alt5=2;
            int LA5_0 = input.LA(1);

            if ( (LA5_0==28) ) {
                alt5=1;
            }
            else if ( (LA5_0==29) ) {
                alt5=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 5, 0, input);

                throw nvae;
            }
            switch (alt5) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:247:5: this_Enumer_0= ruleEnumer
                    {
                     
                            newCompositeNode(grammarAccess.getEntityAccess().getEnumerParserRuleCall_0()); 
                        
                    pushFollow(FOLLOW_ruleEnumer_in_ruleEntity556);
                    this_Enumer_0=ruleEnumer();

                    state._fsp--;

                     
                            current = this_Enumer_0; 
                            afterParserOrEnumRuleCall();
                        

                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:257:5: this_Clazz_1= ruleClazz
                    {
                     
                            newCompositeNode(grammarAccess.getEntityAccess().getClazzParserRuleCall_1()); 
                        
                    pushFollow(FOLLOW_ruleClazz_in_ruleEntity583);
                    this_Clazz_1=ruleClazz();

                    state._fsp--;

                     
                            current = this_Clazz_1; 
                            afterParserOrEnumRuleCall();
                        

                    }
                    break;

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleEntity"


    // $ANTLR start "entryRuleCPackage"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:273:1: entryRuleCPackage returns [EObject current=null] : iv_ruleCPackage= ruleCPackage EOF ;
    public final EObject entryRuleCPackage() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleCPackage = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:274:2: (iv_ruleCPackage= ruleCPackage EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:275:2: iv_ruleCPackage= ruleCPackage EOF
            {
             newCompositeNode(grammarAccess.getCPackageRule()); 
            pushFollow(FOLLOW_ruleCPackage_in_entryRuleCPackage618);
            iv_ruleCPackage=ruleCPackage();

            state._fsp--;

             current =iv_ruleCPackage; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleCPackage628); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleCPackage"


    // $ANTLR start "ruleCPackage"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:282:1: ruleCPackage returns [EObject current=null] : (otherlv_0= 'package' ( (lv_name_1_0= ruleQualifiedName ) ) (otherlv_2= '<<' ( (lv_style_3_0= rulePackageStyle ) ) otherlv_4= '>>' )? otherlv_5= '{' this_END_LINE_6= RULE_END_LINE ( (lv_elements_7_0= ruleElement ) )* otherlv_8= '}' this_END_LINE_9= RULE_END_LINE ) ;
    public final EObject ruleCPackage() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token otherlv_2=null;
        Token otherlv_4=null;
        Token otherlv_5=null;
        Token this_END_LINE_6=null;
        Token otherlv_8=null;
        Token this_END_LINE_9=null;
        AntlrDatatypeRuleToken lv_name_1_0 = null;

        Enumerator lv_style_3_0 = null;

        EObject lv_elements_7_0 = null;


         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:285:28: ( (otherlv_0= 'package' ( (lv_name_1_0= ruleQualifiedName ) ) (otherlv_2= '<<' ( (lv_style_3_0= rulePackageStyle ) ) otherlv_4= '>>' )? otherlv_5= '{' this_END_LINE_6= RULE_END_LINE ( (lv_elements_7_0= ruleElement ) )* otherlv_8= '}' this_END_LINE_9= RULE_END_LINE ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:286:1: (otherlv_0= 'package' ( (lv_name_1_0= ruleQualifiedName ) ) (otherlv_2= '<<' ( (lv_style_3_0= rulePackageStyle ) ) otherlv_4= '>>' )? otherlv_5= '{' this_END_LINE_6= RULE_END_LINE ( (lv_elements_7_0= ruleElement ) )* otherlv_8= '}' this_END_LINE_9= RULE_END_LINE )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:286:1: (otherlv_0= 'package' ( (lv_name_1_0= ruleQualifiedName ) ) (otherlv_2= '<<' ( (lv_style_3_0= rulePackageStyle ) ) otherlv_4= '>>' )? otherlv_5= '{' this_END_LINE_6= RULE_END_LINE ( (lv_elements_7_0= ruleElement ) )* otherlv_8= '}' this_END_LINE_9= RULE_END_LINE )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:286:3: otherlv_0= 'package' ( (lv_name_1_0= ruleQualifiedName ) ) (otherlv_2= '<<' ( (lv_style_3_0= rulePackageStyle ) ) otherlv_4= '>>' )? otherlv_5= '{' this_END_LINE_6= RULE_END_LINE ( (lv_elements_7_0= ruleElement ) )* otherlv_8= '}' this_END_LINE_9= RULE_END_LINE
            {
            otherlv_0=(Token)match(input,14,FOLLOW_14_in_ruleCPackage665); 

                	newLeafNode(otherlv_0, grammarAccess.getCPackageAccess().getPackageKeyword_0());
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:290:1: ( (lv_name_1_0= ruleQualifiedName ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:291:1: (lv_name_1_0= ruleQualifiedName )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:291:1: (lv_name_1_0= ruleQualifiedName )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:292:3: lv_name_1_0= ruleQualifiedName
            {
             
            	        newCompositeNode(grammarAccess.getCPackageAccess().getNameQualifiedNameParserRuleCall_1_0()); 
            	    
            pushFollow(FOLLOW_ruleQualifiedName_in_ruleCPackage686);
            lv_name_1_0=ruleQualifiedName();

            state._fsp--;


            	        if (current==null) {
            	            current = createModelElementForParent(grammarAccess.getCPackageRule());
            	        }
                   		set(
                   			current, 
                   			"name",
                    		lv_name_1_0, 
                    		"QualifiedName");
            	        afterParserOrEnumRuleCall();
            	    

            }


            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:308:2: (otherlv_2= '<<' ( (lv_style_3_0= rulePackageStyle ) ) otherlv_4= '>>' )?
            int alt6=2;
            int LA6_0 = input.LA(1);

            if ( (LA6_0==15) ) {
                alt6=1;
            }
            switch (alt6) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:308:4: otherlv_2= '<<' ( (lv_style_3_0= rulePackageStyle ) ) otherlv_4= '>>'
                    {
                    otherlv_2=(Token)match(input,15,FOLLOW_15_in_ruleCPackage699); 

                        	newLeafNode(otherlv_2, grammarAccess.getCPackageAccess().getLessThanSignLessThanSignKeyword_2_0());
                        
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:312:1: ( (lv_style_3_0= rulePackageStyle ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:313:1: (lv_style_3_0= rulePackageStyle )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:313:1: (lv_style_3_0= rulePackageStyle )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:314:3: lv_style_3_0= rulePackageStyle
                    {
                     
                    	        newCompositeNode(grammarAccess.getCPackageAccess().getStylePackageStyleEnumRuleCall_2_1_0()); 
                    	    
                    pushFollow(FOLLOW_rulePackageStyle_in_ruleCPackage720);
                    lv_style_3_0=rulePackageStyle();

                    state._fsp--;


                    	        if (current==null) {
                    	            current = createModelElementForParent(grammarAccess.getCPackageRule());
                    	        }
                           		set(
                           			current, 
                           			"style",
                            		lv_style_3_0, 
                            		"PackageStyle");
                    	        afterParserOrEnumRuleCall();
                    	    

                    }


                    }

                    otherlv_4=(Token)match(input,16,FOLLOW_16_in_ruleCPackage732); 

                        	newLeafNode(otherlv_4, grammarAccess.getCPackageAccess().getGreaterThanSignGreaterThanSignKeyword_2_2());
                        

                    }
                    break;

            }

            otherlv_5=(Token)match(input,17,FOLLOW_17_in_ruleCPackage746); 

                	newLeafNode(otherlv_5, grammarAccess.getCPackageAccess().getLeftCurlyBracketKeyword_3());
                
            this_END_LINE_6=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleCPackage757); 
             
                newLeafNode(this_END_LINE_6, grammarAccess.getCPackageAccess().getEND_LINETerminalRuleCall_4()); 
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:342:1: ( (lv_elements_7_0= ruleElement ) )*
            loop7:
            do {
                int alt7=2;
                int LA7_0 = input.LA(1);

                if ( (LA7_0==RULE_ID||LA7_0==14||(LA7_0>=28 && LA7_0<=29)||LA7_0==35) ) {
                    alt7=1;
                }


                switch (alt7) {
            	case 1 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:343:1: (lv_elements_7_0= ruleElement )
            	    {
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:343:1: (lv_elements_7_0= ruleElement )
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:344:3: lv_elements_7_0= ruleElement
            	    {
            	     
            	    	        newCompositeNode(grammarAccess.getCPackageAccess().getElementsElementParserRuleCall_5_0()); 
            	    	    
            	    pushFollow(FOLLOW_ruleElement_in_ruleCPackage777);
            	    lv_elements_7_0=ruleElement();

            	    state._fsp--;


            	    	        if (current==null) {
            	    	            current = createModelElementForParent(grammarAccess.getCPackageRule());
            	    	        }
            	           		add(
            	           			current, 
            	           			"elements",
            	            		lv_elements_7_0, 
            	            		"Element");
            	    	        afterParserOrEnumRuleCall();
            	    	    

            	    }


            	    }
            	    break;

            	default :
            	    break loop7;
                }
            } while (true);

            otherlv_8=(Token)match(input,18,FOLLOW_18_in_ruleCPackage790); 

                	newLeafNode(otherlv_8, grammarAccess.getCPackageAccess().getRightCurlyBracketKeyword_6());
                
            this_END_LINE_9=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleCPackage801); 
             
                newLeafNode(this_END_LINE_9, grammarAccess.getCPackageAccess().getEND_LINETerminalRuleCall_7()); 
                

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleCPackage"


    // $ANTLR start "entryRuleRelation"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:376:1: entryRuleRelation returns [EObject current=null] : iv_ruleRelation= ruleRelation EOF ;
    public final EObject entryRuleRelation() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleRelation = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:377:2: (iv_ruleRelation= ruleRelation EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:378:2: iv_ruleRelation= ruleRelation EOF
            {
             newCompositeNode(grammarAccess.getRelationRule()); 
            pushFollow(FOLLOW_ruleRelation_in_entryRuleRelation836);
            iv_ruleRelation=ruleRelation();

            state._fsp--;

             current =iv_ruleRelation; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleRelation846); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleRelation"


    // $ANTLR start "ruleRelation"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:385:1: ruleRelation returns [EObject current=null] : ( ( ( ruleQualifiedName ) ) ( (lv_relType_1_0= ruleRelationParse ) ) ( ( ruleQualifiedName ) ) (otherlv_3= ':' ( (lv_name_4_0= ruleText ) ) )? this_END_LINE_5= RULE_END_LINE ) ;
    public final EObject ruleRelation() throws RecognitionException {
        EObject current = null;

        Token otherlv_3=null;
        Token this_END_LINE_5=null;
        EObject lv_relType_1_0 = null;

        AntlrDatatypeRuleToken lv_name_4_0 = null;


         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:388:28: ( ( ( ( ruleQualifiedName ) ) ( (lv_relType_1_0= ruleRelationParse ) ) ( ( ruleQualifiedName ) ) (otherlv_3= ':' ( (lv_name_4_0= ruleText ) ) )? this_END_LINE_5= RULE_END_LINE ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:389:1: ( ( ( ruleQualifiedName ) ) ( (lv_relType_1_0= ruleRelationParse ) ) ( ( ruleQualifiedName ) ) (otherlv_3= ':' ( (lv_name_4_0= ruleText ) ) )? this_END_LINE_5= RULE_END_LINE )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:389:1: ( ( ( ruleQualifiedName ) ) ( (lv_relType_1_0= ruleRelationParse ) ) ( ( ruleQualifiedName ) ) (otherlv_3= ':' ( (lv_name_4_0= ruleText ) ) )? this_END_LINE_5= RULE_END_LINE )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:389:2: ( ( ruleQualifiedName ) ) ( (lv_relType_1_0= ruleRelationParse ) ) ( ( ruleQualifiedName ) ) (otherlv_3= ':' ( (lv_name_4_0= ruleText ) ) )? this_END_LINE_5= RULE_END_LINE
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:389:2: ( ( ruleQualifiedName ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:390:1: ( ruleQualifiedName )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:390:1: ( ruleQualifiedName )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:391:3: ruleQualifiedName
            {

            			if (current==null) {
            	            current = createModelElement(grammarAccess.getRelationRule());
            	        }
                    
             
            	        newCompositeNode(grammarAccess.getRelationAccess().getLeftRefEntityAndNoteCrossReference_0_0()); 
            	    
            pushFollow(FOLLOW_ruleQualifiedName_in_ruleRelation894);
            ruleQualifiedName();

            state._fsp--;

             
            	        afterParserOrEnumRuleCall();
            	    

            }


            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:404:2: ( (lv_relType_1_0= ruleRelationParse ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:405:1: (lv_relType_1_0= ruleRelationParse )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:405:1: (lv_relType_1_0= ruleRelationParse )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:406:3: lv_relType_1_0= ruleRelationParse
            {
             
            	        newCompositeNode(grammarAccess.getRelationAccess().getRelTypeRelationParseParserRuleCall_1_0()); 
            	    
            pushFollow(FOLLOW_ruleRelationParse_in_ruleRelation915);
            lv_relType_1_0=ruleRelationParse();

            state._fsp--;


            	        if (current==null) {
            	            current = createModelElementForParent(grammarAccess.getRelationRule());
            	        }
                   		set(
                   			current, 
                   			"relType",
                    		lv_relType_1_0, 
                    		"RelationParse");
            	        afterParserOrEnumRuleCall();
            	    

            }


            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:422:2: ( ( ruleQualifiedName ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:423:1: ( ruleQualifiedName )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:423:1: ( ruleQualifiedName )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:424:3: ruleQualifiedName
            {

            			if (current==null) {
            	            current = createModelElement(grammarAccess.getRelationRule());
            	        }
                    
             
            	        newCompositeNode(grammarAccess.getRelationAccess().getRightRefEntityAndNoteCrossReference_2_0()); 
            	    
            pushFollow(FOLLOW_ruleQualifiedName_in_ruleRelation938);
            ruleQualifiedName();

            state._fsp--;

             
            	        afterParserOrEnumRuleCall();
            	    

            }


            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:437:2: (otherlv_3= ':' ( (lv_name_4_0= ruleText ) ) )?
            int alt8=2;
            int LA8_0 = input.LA(1);

            if ( (LA8_0==19) ) {
                alt8=1;
            }
            switch (alt8) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:437:4: otherlv_3= ':' ( (lv_name_4_0= ruleText ) )
                    {
                    otherlv_3=(Token)match(input,19,FOLLOW_19_in_ruleRelation951); 

                        	newLeafNode(otherlv_3, grammarAccess.getRelationAccess().getColonKeyword_3_0());
                        
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:441:1: ( (lv_name_4_0= ruleText ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:442:1: (lv_name_4_0= ruleText )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:442:1: (lv_name_4_0= ruleText )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:443:3: lv_name_4_0= ruleText
                    {
                     
                    	        newCompositeNode(grammarAccess.getRelationAccess().getNameTextParserRuleCall_3_1_0()); 
                    	    
                    pushFollow(FOLLOW_ruleText_in_ruleRelation972);
                    lv_name_4_0=ruleText();

                    state._fsp--;


                    	        if (current==null) {
                    	            current = createModelElementForParent(grammarAccess.getRelationRule());
                    	        }
                           		set(
                           			current, 
                           			"name",
                            		lv_name_4_0, 
                            		"Text");
                    	        afterParserOrEnumRuleCall();
                    	    

                    }


                    }


                    }
                    break;

            }

            this_END_LINE_5=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleRelation985); 
             
                newLeafNode(this_END_LINE_5, grammarAccess.getRelationAccess().getEND_LINETerminalRuleCall_4()); 
                

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleRelation"


    // $ANTLR start "entryRuleRelationParse"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:471:1: entryRuleRelationParse returns [EObject current=null] : iv_ruleRelationParse= ruleRelationParse EOF ;
    public final EObject entryRuleRelationParse() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleRelationParse = null;


         
        		HiddenTokens myHiddenTokenState = ((XtextTokenStream)input).setHiddenTokens();
        	
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:475:2: (iv_ruleRelationParse= ruleRelationParse EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:476:2: iv_ruleRelationParse= ruleRelationParse EOF
            {
             newCompositeNode(grammarAccess.getRelationParseRule()); 
            pushFollow(FOLLOW_ruleRelationParse_in_entryRuleRelationParse1026);
            iv_ruleRelationParse=ruleRelationParse();

            state._fsp--;

             current =iv_ruleRelationParse; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleRelationParse1036); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {

            	myHiddenTokenState.restore();

        }
        return current;
    }
    // $ANTLR end "entryRuleRelationParse"


    // $ANTLR start "ruleRelationParse"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:486:1: ruleRelationParse returns [EObject current=null] : ( ( ( (lv_comp_0_0= ruleCompType ) ) ( (lv_type_1_0= ruleRelationType ) ) ( (lv_direct_2_0= '>' ) )? this_WS_3= RULE_WS ( (lv_multi_4_0= RULE_MULTI ) )? ) | ( ( (lv_type_5_0= ruleRelationType ) ) ( ( (lv_direct_6_0= '>' ) ) | ( (lv_ext_7_0= '|>' ) ) )? this_WS_8= RULE_WS ( (lv_multi_9_0= RULE_MULTI ) )? ) ) ;
    public final EObject ruleRelationParse() throws RecognitionException {
        EObject current = null;

        Token lv_direct_2_0=null;
        Token this_WS_3=null;
        Token lv_multi_4_0=null;
        Token lv_direct_6_0=null;
        Token lv_ext_7_0=null;
        Token this_WS_8=null;
        Token lv_multi_9_0=null;
        Enumerator lv_comp_0_0 = null;

        EObject lv_type_1_0 = null;

        EObject lv_type_5_0 = null;


         enterRule(); 
        		HiddenTokens myHiddenTokenState = ((XtextTokenStream)input).setHiddenTokens();
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:490:28: ( ( ( ( (lv_comp_0_0= ruleCompType ) ) ( (lv_type_1_0= ruleRelationType ) ) ( (lv_direct_2_0= '>' ) )? this_WS_3= RULE_WS ( (lv_multi_4_0= RULE_MULTI ) )? ) | ( ( (lv_type_5_0= ruleRelationType ) ) ( ( (lv_direct_6_0= '>' ) ) | ( (lv_ext_7_0= '|>' ) ) )? this_WS_8= RULE_WS ( (lv_multi_9_0= RULE_MULTI ) )? ) ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:491:1: ( ( ( (lv_comp_0_0= ruleCompType ) ) ( (lv_type_1_0= ruleRelationType ) ) ( (lv_direct_2_0= '>' ) )? this_WS_3= RULE_WS ( (lv_multi_4_0= RULE_MULTI ) )? ) | ( ( (lv_type_5_0= ruleRelationType ) ) ( ( (lv_direct_6_0= '>' ) ) | ( (lv_ext_7_0= '|>' ) ) )? this_WS_8= RULE_WS ( (lv_multi_9_0= RULE_MULTI ) )? ) )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:491:1: ( ( ( (lv_comp_0_0= ruleCompType ) ) ( (lv_type_1_0= ruleRelationType ) ) ( (lv_direct_2_0= '>' ) )? this_WS_3= RULE_WS ( (lv_multi_4_0= RULE_MULTI ) )? ) | ( ( (lv_type_5_0= ruleRelationType ) ) ( ( (lv_direct_6_0= '>' ) ) | ( (lv_ext_7_0= '|>' ) ) )? this_WS_8= RULE_WS ( (lv_multi_9_0= RULE_MULTI ) )? ) )
            int alt13=2;
            int LA13_0 = input.LA(1);

            if ( ((LA13_0>=53 && LA13_0<=55)) ) {
                alt13=1;
            }
            else if ( (LA13_0==22||LA13_0==27) ) {
                alt13=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 13, 0, input);

                throw nvae;
            }
            switch (alt13) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:491:2: ( ( (lv_comp_0_0= ruleCompType ) ) ( (lv_type_1_0= ruleRelationType ) ) ( (lv_direct_2_0= '>' ) )? this_WS_3= RULE_WS ( (lv_multi_4_0= RULE_MULTI ) )? )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:491:2: ( ( (lv_comp_0_0= ruleCompType ) ) ( (lv_type_1_0= ruleRelationType ) ) ( (lv_direct_2_0= '>' ) )? this_WS_3= RULE_WS ( (lv_multi_4_0= RULE_MULTI ) )? )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:491:3: ( (lv_comp_0_0= ruleCompType ) ) ( (lv_type_1_0= ruleRelationType ) ) ( (lv_direct_2_0= '>' ) )? this_WS_3= RULE_WS ( (lv_multi_4_0= RULE_MULTI ) )?
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:491:3: ( (lv_comp_0_0= ruleCompType ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:492:1: (lv_comp_0_0= ruleCompType )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:492:1: (lv_comp_0_0= ruleCompType )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:493:3: lv_comp_0_0= ruleCompType
                    {
                     
                    	        newCompositeNode(grammarAccess.getRelationParseAccess().getCompCompTypeEnumRuleCall_0_0_0()); 
                    	    
                    pushFollow(FOLLOW_ruleCompType_in_ruleRelationParse1087);
                    lv_comp_0_0=ruleCompType();

                    state._fsp--;


                    	        if (current==null) {
                    	            current = createModelElementForParent(grammarAccess.getRelationParseRule());
                    	        }
                           		set(
                           			current, 
                           			"comp",
                            		lv_comp_0_0, 
                            		"CompType");
                    	        afterParserOrEnumRuleCall();
                    	    

                    }


                    }

                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:509:2: ( (lv_type_1_0= ruleRelationType ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:510:1: (lv_type_1_0= ruleRelationType )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:510:1: (lv_type_1_0= ruleRelationType )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:511:3: lv_type_1_0= ruleRelationType
                    {
                     
                    	        newCompositeNode(grammarAccess.getRelationParseAccess().getTypeRelationTypeParserRuleCall_0_1_0()); 
                    	    
                    pushFollow(FOLLOW_ruleRelationType_in_ruleRelationParse1108);
                    lv_type_1_0=ruleRelationType();

                    state._fsp--;


                    	        if (current==null) {
                    	            current = createModelElementForParent(grammarAccess.getRelationParseRule());
                    	        }
                           		set(
                           			current, 
                           			"type",
                            		lv_type_1_0, 
                            		"RelationType");
                    	        afterParserOrEnumRuleCall();
                    	    

                    }


                    }

                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:527:2: ( (lv_direct_2_0= '>' ) )?
                    int alt9=2;
                    int LA9_0 = input.LA(1);

                    if ( (LA9_0==20) ) {
                        alt9=1;
                    }
                    switch (alt9) {
                        case 1 :
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:528:1: (lv_direct_2_0= '>' )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:528:1: (lv_direct_2_0= '>' )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:529:3: lv_direct_2_0= '>'
                            {
                            lv_direct_2_0=(Token)match(input,20,FOLLOW_20_in_ruleRelationParse1126); 

                                    newLeafNode(lv_direct_2_0, grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_0_2_0());
                                

                            	        if (current==null) {
                            	            current = createModelElement(grammarAccess.getRelationParseRule());
                            	        }
                                   		setWithLastConsumed(current, "direct", true, ">");
                            	    

                            }


                            }
                            break;

                    }

                    this_WS_3=(Token)match(input,RULE_WS,FOLLOW_RULE_WS_in_ruleRelationParse1151); 
                     
                        newLeafNode(this_WS_3, grammarAccess.getRelationParseAccess().getWSTerminalRuleCall_0_3()); 
                        
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:546:1: ( (lv_multi_4_0= RULE_MULTI ) )?
                    int alt10=2;
                    int LA10_0 = input.LA(1);

                    if ( (LA10_0==RULE_MULTI) ) {
                        alt10=1;
                    }
                    switch (alt10) {
                        case 1 :
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:547:1: (lv_multi_4_0= RULE_MULTI )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:547:1: (lv_multi_4_0= RULE_MULTI )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:548:3: lv_multi_4_0= RULE_MULTI
                            {
                            lv_multi_4_0=(Token)match(input,RULE_MULTI,FOLLOW_RULE_MULTI_in_ruleRelationParse1167); 

                            			newLeafNode(lv_multi_4_0, grammarAccess.getRelationParseAccess().getMultiMULTITerminalRuleCall_0_4_0()); 
                            		

                            	        if (current==null) {
                            	            current = createModelElement(grammarAccess.getRelationParseRule());
                            	        }
                                   		setWithLastConsumed(
                                   			current, 
                                   			"multi",
                                    		lv_multi_4_0, 
                                    		"MULTI");
                            	    

                            }


                            }
                            break;

                    }


                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:565:6: ( ( (lv_type_5_0= ruleRelationType ) ) ( ( (lv_direct_6_0= '>' ) ) | ( (lv_ext_7_0= '|>' ) ) )? this_WS_8= RULE_WS ( (lv_multi_9_0= RULE_MULTI ) )? )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:565:6: ( ( (lv_type_5_0= ruleRelationType ) ) ( ( (lv_direct_6_0= '>' ) ) | ( (lv_ext_7_0= '|>' ) ) )? this_WS_8= RULE_WS ( (lv_multi_9_0= RULE_MULTI ) )? )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:565:7: ( (lv_type_5_0= ruleRelationType ) ) ( ( (lv_direct_6_0= '>' ) ) | ( (lv_ext_7_0= '|>' ) ) )? this_WS_8= RULE_WS ( (lv_multi_9_0= RULE_MULTI ) )?
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:565:7: ( (lv_type_5_0= ruleRelationType ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:566:1: (lv_type_5_0= ruleRelationType )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:566:1: (lv_type_5_0= ruleRelationType )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:567:3: lv_type_5_0= ruleRelationType
                    {
                     
                    	        newCompositeNode(grammarAccess.getRelationParseAccess().getTypeRelationTypeParserRuleCall_1_0_0()); 
                    	    
                    pushFollow(FOLLOW_ruleRelationType_in_ruleRelationParse1202);
                    lv_type_5_0=ruleRelationType();

                    state._fsp--;


                    	        if (current==null) {
                    	            current = createModelElementForParent(grammarAccess.getRelationParseRule());
                    	        }
                           		set(
                           			current, 
                           			"type",
                            		lv_type_5_0, 
                            		"RelationType");
                    	        afterParserOrEnumRuleCall();
                    	    

                    }


                    }

                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:583:2: ( ( (lv_direct_6_0= '>' ) ) | ( (lv_ext_7_0= '|>' ) ) )?
                    int alt11=3;
                    int LA11_0 = input.LA(1);

                    if ( (LA11_0==20) ) {
                        alt11=1;
                    }
                    else if ( (LA11_0==21) ) {
                        alt11=2;
                    }
                    switch (alt11) {
                        case 1 :
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:583:3: ( (lv_direct_6_0= '>' ) )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:583:3: ( (lv_direct_6_0= '>' ) )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:584:1: (lv_direct_6_0= '>' )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:584:1: (lv_direct_6_0= '>' )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:585:3: lv_direct_6_0= '>'
                            {
                            lv_direct_6_0=(Token)match(input,20,FOLLOW_20_in_ruleRelationParse1221); 

                                    newLeafNode(lv_direct_6_0, grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_1_1_0_0());
                                

                            	        if (current==null) {
                            	            current = createModelElement(grammarAccess.getRelationParseRule());
                            	        }
                                   		setWithLastConsumed(current, "direct", true, ">");
                            	    

                            }


                            }


                            }
                            break;
                        case 2 :
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:599:6: ( (lv_ext_7_0= '|>' ) )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:599:6: ( (lv_ext_7_0= '|>' ) )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:600:1: (lv_ext_7_0= '|>' )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:600:1: (lv_ext_7_0= '|>' )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:601:3: lv_ext_7_0= '|>'
                            {
                            lv_ext_7_0=(Token)match(input,21,FOLLOW_21_in_ruleRelationParse1258); 

                                    newLeafNode(lv_ext_7_0, grammarAccess.getRelationParseAccess().getExtVerticalLineGreaterThanSignKeyword_1_1_1_0());
                                

                            	        if (current==null) {
                            	            current = createModelElement(grammarAccess.getRelationParseRule());
                            	        }
                                   		setWithLastConsumed(current, "ext", true, "|>");
                            	    

                            }


                            }


                            }
                            break;

                    }

                    this_WS_8=(Token)match(input,RULE_WS,FOLLOW_RULE_WS_in_ruleRelationParse1284); 
                     
                        newLeafNode(this_WS_8, grammarAccess.getRelationParseAccess().getWSTerminalRuleCall_1_2()); 
                        
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:618:1: ( (lv_multi_9_0= RULE_MULTI ) )?
                    int alt12=2;
                    int LA12_0 = input.LA(1);

                    if ( (LA12_0==RULE_MULTI) ) {
                        alt12=1;
                    }
                    switch (alt12) {
                        case 1 :
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:619:1: (lv_multi_9_0= RULE_MULTI )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:619:1: (lv_multi_9_0= RULE_MULTI )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:620:3: lv_multi_9_0= RULE_MULTI
                            {
                            lv_multi_9_0=(Token)match(input,RULE_MULTI,FOLLOW_RULE_MULTI_in_ruleRelationParse1300); 

                            			newLeafNode(lv_multi_9_0, grammarAccess.getRelationParseAccess().getMultiMULTITerminalRuleCall_1_3_0()); 
                            		

                            	        if (current==null) {
                            	            current = createModelElement(grammarAccess.getRelationParseRule());
                            	        }
                                   		setWithLastConsumed(
                                   			current, 
                                   			"multi",
                                    		lv_multi_9_0, 
                                    		"MULTI");
                            	    

                            }


                            }
                            break;

                    }


                    }


                    }
                    break;

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {

            	myHiddenTokenState.restore();

        }
        return current;
    }
    // $ANTLR end "ruleRelationParse"


    // $ANTLR start "entryRuleRelationType"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:647:1: entryRuleRelationType returns [EObject current=null] : iv_ruleRelationType= ruleRelationType EOF ;
    public final EObject entryRuleRelationType() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleRelationType = null;


         
        		HiddenTokens myHiddenTokenState = ((XtextTokenStream)input).setHiddenTokens();
        	
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:651:2: (iv_ruleRelationType= ruleRelationType EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:652:2: iv_ruleRelationType= ruleRelationType EOF
            {
             newCompositeNode(grammarAccess.getRelationTypeRule()); 
            pushFollow(FOLLOW_ruleRelationType_in_entryRuleRelationType1353);
            iv_ruleRelationType=ruleRelationType();

            state._fsp--;

             current =iv_ruleRelationType; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleRelationType1363); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {

            	myHiddenTokenState.restore();

        }
        return current;
    }
    // $ANTLR end "entryRuleRelationType"


    // $ANTLR start "ruleRelationType"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:662:1: ruleRelationType returns [EObject current=null] : ( ( (lv_strong_0_0= ruleStrongRel ) ) | ( (lv_weak_1_0= ruleWeakRel ) ) ) ;
    public final EObject ruleRelationType() throws RecognitionException {
        EObject current = null;

        AntlrDatatypeRuleToken lv_strong_0_0 = null;

        AntlrDatatypeRuleToken lv_weak_1_0 = null;


         enterRule(); 
        		HiddenTokens myHiddenTokenState = ((XtextTokenStream)input).setHiddenTokens();
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:666:28: ( ( ( (lv_strong_0_0= ruleStrongRel ) ) | ( (lv_weak_1_0= ruleWeakRel ) ) ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:667:1: ( ( (lv_strong_0_0= ruleStrongRel ) ) | ( (lv_weak_1_0= ruleWeakRel ) ) )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:667:1: ( ( (lv_strong_0_0= ruleStrongRel ) ) | ( (lv_weak_1_0= ruleWeakRel ) ) )
            int alt14=2;
            int LA14_0 = input.LA(1);

            if ( (LA14_0==22) ) {
                alt14=1;
            }
            else if ( (LA14_0==27) ) {
                alt14=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 14, 0, input);

                throw nvae;
            }
            switch (alt14) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:667:2: ( (lv_strong_0_0= ruleStrongRel ) )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:667:2: ( (lv_strong_0_0= ruleStrongRel ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:668:1: (lv_strong_0_0= ruleStrongRel )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:668:1: (lv_strong_0_0= ruleStrongRel )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:669:3: lv_strong_0_0= ruleStrongRel
                    {
                     
                    	        newCompositeNode(grammarAccess.getRelationTypeAccess().getStrongStrongRelParserRuleCall_0_0()); 
                    	    
                    pushFollow(FOLLOW_ruleStrongRel_in_ruleRelationType1413);
                    lv_strong_0_0=ruleStrongRel();

                    state._fsp--;


                    	        if (current==null) {
                    	            current = createModelElementForParent(grammarAccess.getRelationTypeRule());
                    	        }
                           		set(
                           			current, 
                           			"strong",
                            		true, 
                            		"StrongRel");
                    	        afterParserOrEnumRuleCall();
                    	    

                    }


                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:686:6: ( (lv_weak_1_0= ruleWeakRel ) )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:686:6: ( (lv_weak_1_0= ruleWeakRel ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:687:1: (lv_weak_1_0= ruleWeakRel )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:687:1: (lv_weak_1_0= ruleWeakRel )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:688:3: lv_weak_1_0= ruleWeakRel
                    {
                     
                    	        newCompositeNode(grammarAccess.getRelationTypeAccess().getWeakWeakRelParserRuleCall_1_0()); 
                    	    
                    pushFollow(FOLLOW_ruleWeakRel_in_ruleRelationType1440);
                    lv_weak_1_0=ruleWeakRel();

                    state._fsp--;


                    	        if (current==null) {
                    	            current = createModelElementForParent(grammarAccess.getRelationTypeRule());
                    	        }
                           		set(
                           			current, 
                           			"weak",
                            		true, 
                            		"WeakRel");
                    	        afterParserOrEnumRuleCall();
                    	    

                    }


                    }


                    }
                    break;

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {

            	myHiddenTokenState.restore();

        }
        return current;
    }
    // $ANTLR end "ruleRelationType"


    // $ANTLR start "entryRuleStrongRel"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:715:1: entryRuleStrongRel returns [String current=null] : iv_ruleStrongRel= ruleStrongRel EOF ;
    public final String entryRuleStrongRel() throws RecognitionException {
        String current = null;

        AntlrDatatypeRuleToken iv_ruleStrongRel = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:716:2: (iv_ruleStrongRel= ruleStrongRel EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:717:2: iv_ruleStrongRel= ruleStrongRel EOF
            {
             newCompositeNode(grammarAccess.getStrongRelRule()); 
            pushFollow(FOLLOW_ruleStrongRel_in_entryRuleStrongRel1481);
            iv_ruleStrongRel=ruleStrongRel();

            state._fsp--;

             current =iv_ruleStrongRel.getText(); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleStrongRel1492); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleStrongRel"


    // $ANTLR start "ruleStrongRel"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:724:1: ruleStrongRel returns [AntlrDatatypeRuleToken current=new AntlrDatatypeRuleToken()] : (kw= '-' (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )? (kw= '-' )+ ) ;
    public final AntlrDatatypeRuleToken ruleStrongRel() throws RecognitionException {
        AntlrDatatypeRuleToken current = new AntlrDatatypeRuleToken();

        Token kw=null;

         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:727:28: ( (kw= '-' (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )? (kw= '-' )+ ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:728:1: (kw= '-' (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )? (kw= '-' )+ )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:728:1: (kw= '-' (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )? (kw= '-' )+ )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:729:2: kw= '-' (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )? (kw= '-' )+
            {
            kw=(Token)match(input,22,FOLLOW_22_in_ruleStrongRel1530); 

                    current.merge(kw);
                    newLeafNode(kw, grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_0()); 
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:734:1: (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )?
            int alt15=5;
            switch ( input.LA(1) ) {
                case 23:
                    {
                    alt15=1;
                    }
                    break;
                case 24:
                    {
                    alt15=2;
                    }
                    break;
                case 25:
                    {
                    alt15=3;
                    }
                    break;
                case 26:
                    {
                    alt15=4;
                    }
                    break;
            }

            switch (alt15) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:735:2: kw= 'up'
                    {
                    kw=(Token)match(input,23,FOLLOW_23_in_ruleStrongRel1544); 

                            current.merge(kw);
                            newLeafNode(kw, grammarAccess.getStrongRelAccess().getUpKeyword_1_0()); 
                        

                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:742:2: kw= 'down'
                    {
                    kw=(Token)match(input,24,FOLLOW_24_in_ruleStrongRel1563); 

                            current.merge(kw);
                            newLeafNode(kw, grammarAccess.getStrongRelAccess().getDownKeyword_1_1()); 
                        

                    }
                    break;
                case 3 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:749:2: kw= 'left'
                    {
                    kw=(Token)match(input,25,FOLLOW_25_in_ruleStrongRel1582); 

                            current.merge(kw);
                            newLeafNode(kw, grammarAccess.getStrongRelAccess().getLeftKeyword_1_2()); 
                        

                    }
                    break;
                case 4 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:756:2: kw= 'right'
                    {
                    kw=(Token)match(input,26,FOLLOW_26_in_ruleStrongRel1601); 

                            current.merge(kw);
                            newLeafNode(kw, grammarAccess.getStrongRelAccess().getRightKeyword_1_3()); 
                        

                    }
                    break;

            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:761:3: (kw= '-' )+
            int cnt16=0;
            loop16:
            do {
                int alt16=2;
                int LA16_0 = input.LA(1);

                if ( (LA16_0==22) ) {
                    alt16=1;
                }


                switch (alt16) {
            	case 1 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:762:2: kw= '-'
            	    {
            	    kw=(Token)match(input,22,FOLLOW_22_in_ruleStrongRel1617); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 
            	        

            	    }
            	    break;

            	default :
            	    if ( cnt16 >= 1 ) break loop16;
                        EarlyExitException eee =
                            new EarlyExitException(16, input);
                        throw eee;
                }
                cnt16++;
            } while (true);


            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleStrongRel"


    // $ANTLR start "entryRuleWeakRel"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:775:1: entryRuleWeakRel returns [String current=null] : iv_ruleWeakRel= ruleWeakRel EOF ;
    public final String entryRuleWeakRel() throws RecognitionException {
        String current = null;

        AntlrDatatypeRuleToken iv_ruleWeakRel = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:776:2: (iv_ruleWeakRel= ruleWeakRel EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:777:2: iv_ruleWeakRel= ruleWeakRel EOF
            {
             newCompositeNode(grammarAccess.getWeakRelRule()); 
            pushFollow(FOLLOW_ruleWeakRel_in_entryRuleWeakRel1660);
            iv_ruleWeakRel=ruleWeakRel();

            state._fsp--;

             current =iv_ruleWeakRel.getText(); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleWeakRel1671); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleWeakRel"


    // $ANTLR start "ruleWeakRel"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:784:1: ruleWeakRel returns [AntlrDatatypeRuleToken current=new AntlrDatatypeRuleToken()] : (kw= '.' (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )? (kw= '.' )+ ) ;
    public final AntlrDatatypeRuleToken ruleWeakRel() throws RecognitionException {
        AntlrDatatypeRuleToken current = new AntlrDatatypeRuleToken();

        Token kw=null;

         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:787:28: ( (kw= '.' (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )? (kw= '.' )+ ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:788:1: (kw= '.' (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )? (kw= '.' )+ )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:788:1: (kw= '.' (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )? (kw= '.' )+ )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:789:2: kw= '.' (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )? (kw= '.' )+
            {
            kw=(Token)match(input,27,FOLLOW_27_in_ruleWeakRel1709); 

                    current.merge(kw);
                    newLeafNode(kw, grammarAccess.getWeakRelAccess().getFullStopKeyword_0()); 
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:794:1: (kw= 'up' | kw= 'down' | kw= 'left' | kw= 'right' )?
            int alt17=5;
            switch ( input.LA(1) ) {
                case 23:
                    {
                    alt17=1;
                    }
                    break;
                case 24:
                    {
                    alt17=2;
                    }
                    break;
                case 25:
                    {
                    alt17=3;
                    }
                    break;
                case 26:
                    {
                    alt17=4;
                    }
                    break;
            }

            switch (alt17) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:795:2: kw= 'up'
                    {
                    kw=(Token)match(input,23,FOLLOW_23_in_ruleWeakRel1723); 

                            current.merge(kw);
                            newLeafNode(kw, grammarAccess.getWeakRelAccess().getUpKeyword_1_0()); 
                        

                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:802:2: kw= 'down'
                    {
                    kw=(Token)match(input,24,FOLLOW_24_in_ruleWeakRel1742); 

                            current.merge(kw);
                            newLeafNode(kw, grammarAccess.getWeakRelAccess().getDownKeyword_1_1()); 
                        

                    }
                    break;
                case 3 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:809:2: kw= 'left'
                    {
                    kw=(Token)match(input,25,FOLLOW_25_in_ruleWeakRel1761); 

                            current.merge(kw);
                            newLeafNode(kw, grammarAccess.getWeakRelAccess().getLeftKeyword_1_2()); 
                        

                    }
                    break;
                case 4 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:816:2: kw= 'right'
                    {
                    kw=(Token)match(input,26,FOLLOW_26_in_ruleWeakRel1780); 

                            current.merge(kw);
                            newLeafNode(kw, grammarAccess.getWeakRelAccess().getRightKeyword_1_3()); 
                        

                    }
                    break;

            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:821:3: (kw= '.' )+
            int cnt18=0;
            loop18:
            do {
                int alt18=2;
                int LA18_0 = input.LA(1);

                if ( (LA18_0==27) ) {
                    alt18=1;
                }


                switch (alt18) {
            	case 1 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:822:2: kw= '.'
            	    {
            	    kw=(Token)match(input,27,FOLLOW_27_in_ruleWeakRel1796); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 
            	        

            	    }
            	    break;

            	default :
            	    if ( cnt18 >= 1 ) break loop18;
                        EarlyExitException eee =
                            new EarlyExitException(18, input);
                        throw eee;
                }
                cnt18++;
            } while (true);


            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleWeakRel"


    // $ANTLR start "entryRuleEnumer"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:835:1: entryRuleEnumer returns [EObject current=null] : iv_ruleEnumer= ruleEnumer EOF ;
    public final EObject entryRuleEnumer() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleEnumer = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:836:2: (iv_ruleEnumer= ruleEnumer EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:837:2: iv_ruleEnumer= ruleEnumer EOF
            {
             newCompositeNode(grammarAccess.getEnumerRule()); 
            pushFollow(FOLLOW_ruleEnumer_in_entryRuleEnumer1838);
            iv_ruleEnumer=ruleEnumer();

            state._fsp--;

             current =iv_ruleEnumer; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleEnumer1848); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleEnumer"


    // $ANTLR start "ruleEnumer"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:844:1: ruleEnumer returns [EObject current=null] : (otherlv_0= 'enum' ( (lv_name_1_0= RULE_ID ) ) otherlv_2= '{' (this_END_LINE_3= RULE_END_LINE )? ( ( (lv_types_4_0= RULE_ID ) ) (this_END_LINE_5= RULE_END_LINE )? )* otherlv_6= '}' this_END_LINE_7= RULE_END_LINE ) ;
    public final EObject ruleEnumer() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token lv_name_1_0=null;
        Token otherlv_2=null;
        Token this_END_LINE_3=null;
        Token lv_types_4_0=null;
        Token this_END_LINE_5=null;
        Token otherlv_6=null;
        Token this_END_LINE_7=null;

         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:847:28: ( (otherlv_0= 'enum' ( (lv_name_1_0= RULE_ID ) ) otherlv_2= '{' (this_END_LINE_3= RULE_END_LINE )? ( ( (lv_types_4_0= RULE_ID ) ) (this_END_LINE_5= RULE_END_LINE )? )* otherlv_6= '}' this_END_LINE_7= RULE_END_LINE ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:848:1: (otherlv_0= 'enum' ( (lv_name_1_0= RULE_ID ) ) otherlv_2= '{' (this_END_LINE_3= RULE_END_LINE )? ( ( (lv_types_4_0= RULE_ID ) ) (this_END_LINE_5= RULE_END_LINE )? )* otherlv_6= '}' this_END_LINE_7= RULE_END_LINE )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:848:1: (otherlv_0= 'enum' ( (lv_name_1_0= RULE_ID ) ) otherlv_2= '{' (this_END_LINE_3= RULE_END_LINE )? ( ( (lv_types_4_0= RULE_ID ) ) (this_END_LINE_5= RULE_END_LINE )? )* otherlv_6= '}' this_END_LINE_7= RULE_END_LINE )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:848:3: otherlv_0= 'enum' ( (lv_name_1_0= RULE_ID ) ) otherlv_2= '{' (this_END_LINE_3= RULE_END_LINE )? ( ( (lv_types_4_0= RULE_ID ) ) (this_END_LINE_5= RULE_END_LINE )? )* otherlv_6= '}' this_END_LINE_7= RULE_END_LINE
            {
            otherlv_0=(Token)match(input,28,FOLLOW_28_in_ruleEnumer1885); 

                	newLeafNode(otherlv_0, grammarAccess.getEnumerAccess().getEnumKeyword_0());
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:852:1: ( (lv_name_1_0= RULE_ID ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:853:1: (lv_name_1_0= RULE_ID )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:853:1: (lv_name_1_0= RULE_ID )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:854:3: lv_name_1_0= RULE_ID
            {
            lv_name_1_0=(Token)match(input,RULE_ID,FOLLOW_RULE_ID_in_ruleEnumer1902); 

            			newLeafNode(lv_name_1_0, grammarAccess.getEnumerAccess().getNameIDTerminalRuleCall_1_0()); 
            		

            	        if (current==null) {
            	            current = createModelElement(grammarAccess.getEnumerRule());
            	        }
                   		setWithLastConsumed(
                   			current, 
                   			"name",
                    		lv_name_1_0, 
                    		"ID");
            	    

            }


            }

            otherlv_2=(Token)match(input,17,FOLLOW_17_in_ruleEnumer1919); 

                	newLeafNode(otherlv_2, grammarAccess.getEnumerAccess().getLeftCurlyBracketKeyword_2());
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:874:1: (this_END_LINE_3= RULE_END_LINE )?
            int alt19=2;
            int LA19_0 = input.LA(1);

            if ( (LA19_0==RULE_END_LINE) ) {
                alt19=1;
            }
            switch (alt19) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:874:2: this_END_LINE_3= RULE_END_LINE
                    {
                    this_END_LINE_3=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleEnumer1931); 
                     
                        newLeafNode(this_END_LINE_3, grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_3()); 
                        

                    }
                    break;

            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:878:3: ( ( (lv_types_4_0= RULE_ID ) ) (this_END_LINE_5= RULE_END_LINE )? )*
            loop21:
            do {
                int alt21=2;
                int LA21_0 = input.LA(1);

                if ( (LA21_0==RULE_ID) ) {
                    alt21=1;
                }


                switch (alt21) {
            	case 1 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:878:4: ( (lv_types_4_0= RULE_ID ) ) (this_END_LINE_5= RULE_END_LINE )?
            	    {
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:878:4: ( (lv_types_4_0= RULE_ID ) )
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:879:1: (lv_types_4_0= RULE_ID )
            	    {
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:879:1: (lv_types_4_0= RULE_ID )
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:880:3: lv_types_4_0= RULE_ID
            	    {
            	    lv_types_4_0=(Token)match(input,RULE_ID,FOLLOW_RULE_ID_in_ruleEnumer1950); 

            	    			newLeafNode(lv_types_4_0, grammarAccess.getEnumerAccess().getTypesIDTerminalRuleCall_4_0_0()); 
            	    		

            	    	        if (current==null) {
            	    	            current = createModelElement(grammarAccess.getEnumerRule());
            	    	        }
            	           		addWithLastConsumed(
            	           			current, 
            	           			"types",
            	            		lv_types_4_0, 
            	            		"ID");
            	    	    

            	    }


            	    }

            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:896:2: (this_END_LINE_5= RULE_END_LINE )?
            	    int alt20=2;
            	    int LA20_0 = input.LA(1);

            	    if ( (LA20_0==RULE_END_LINE) ) {
            	        alt20=1;
            	    }
            	    switch (alt20) {
            	        case 1 :
            	            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:896:3: this_END_LINE_5= RULE_END_LINE
            	            {
            	            this_END_LINE_5=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleEnumer1967); 
            	             
            	                newLeafNode(this_END_LINE_5, grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_4_1()); 
            	                

            	            }
            	            break;

            	    }


            	    }
            	    break;

            	default :
            	    break loop21;
                }
            } while (true);

            otherlv_6=(Token)match(input,18,FOLLOW_18_in_ruleEnumer1982); 

                	newLeafNode(otherlv_6, grammarAccess.getEnumerAccess().getRightCurlyBracketKeyword_5());
                
            this_END_LINE_7=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleEnumer1993); 
             
                newLeafNode(this_END_LINE_7, grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_6()); 
                

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleEnumer"


    // $ANTLR start "entryRuleClazz"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:916:1: entryRuleClazz returns [EObject current=null] : iv_ruleClazz= ruleClazz EOF ;
    public final EObject entryRuleClazz() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleClazz = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:917:2: (iv_ruleClazz= ruleClazz EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:918:2: iv_ruleClazz= ruleClazz EOF
            {
             newCompositeNode(grammarAccess.getClazzRule()); 
            pushFollow(FOLLOW_ruleClazz_in_entryRuleClazz2028);
            iv_ruleClazz=ruleClazz();

            state._fsp--;

             current =iv_ruleClazz; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleClazz2038); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleClazz"


    // $ANTLR start "ruleClazz"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:925:1: ruleClazz returns [EObject current=null] : (otherlv_0= 'class' ( (lv_name_1_0= RULE_ID ) ) (otherlv_2= '<<' ( (lv_stereotype_3_0= ruleText ) ) otherlv_4= '>>' )? (otherlv_5= '{' (this_END_LINE_6= RULE_END_LINE )? ( (lv_properties_7_0= ruleProperty ) )* otherlv_8= '}' )? this_END_LINE_9= RULE_END_LINE ) ;
    public final EObject ruleClazz() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token lv_name_1_0=null;
        Token otherlv_2=null;
        Token otherlv_4=null;
        Token otherlv_5=null;
        Token this_END_LINE_6=null;
        Token otherlv_8=null;
        Token this_END_LINE_9=null;
        AntlrDatatypeRuleToken lv_stereotype_3_0 = null;

        EObject lv_properties_7_0 = null;


         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:928:28: ( (otherlv_0= 'class' ( (lv_name_1_0= RULE_ID ) ) (otherlv_2= '<<' ( (lv_stereotype_3_0= ruleText ) ) otherlv_4= '>>' )? (otherlv_5= '{' (this_END_LINE_6= RULE_END_LINE )? ( (lv_properties_7_0= ruleProperty ) )* otherlv_8= '}' )? this_END_LINE_9= RULE_END_LINE ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:929:1: (otherlv_0= 'class' ( (lv_name_1_0= RULE_ID ) ) (otherlv_2= '<<' ( (lv_stereotype_3_0= ruleText ) ) otherlv_4= '>>' )? (otherlv_5= '{' (this_END_LINE_6= RULE_END_LINE )? ( (lv_properties_7_0= ruleProperty ) )* otherlv_8= '}' )? this_END_LINE_9= RULE_END_LINE )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:929:1: (otherlv_0= 'class' ( (lv_name_1_0= RULE_ID ) ) (otherlv_2= '<<' ( (lv_stereotype_3_0= ruleText ) ) otherlv_4= '>>' )? (otherlv_5= '{' (this_END_LINE_6= RULE_END_LINE )? ( (lv_properties_7_0= ruleProperty ) )* otherlv_8= '}' )? this_END_LINE_9= RULE_END_LINE )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:929:3: otherlv_0= 'class' ( (lv_name_1_0= RULE_ID ) ) (otherlv_2= '<<' ( (lv_stereotype_3_0= ruleText ) ) otherlv_4= '>>' )? (otherlv_5= '{' (this_END_LINE_6= RULE_END_LINE )? ( (lv_properties_7_0= ruleProperty ) )* otherlv_8= '}' )? this_END_LINE_9= RULE_END_LINE
            {
            otherlv_0=(Token)match(input,29,FOLLOW_29_in_ruleClazz2075); 

                	newLeafNode(otherlv_0, grammarAccess.getClazzAccess().getClassKeyword_0());
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:933:1: ( (lv_name_1_0= RULE_ID ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:934:1: (lv_name_1_0= RULE_ID )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:934:1: (lv_name_1_0= RULE_ID )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:935:3: lv_name_1_0= RULE_ID
            {
            lv_name_1_0=(Token)match(input,RULE_ID,FOLLOW_RULE_ID_in_ruleClazz2092); 

            			newLeafNode(lv_name_1_0, grammarAccess.getClazzAccess().getNameIDTerminalRuleCall_1_0()); 
            		

            	        if (current==null) {
            	            current = createModelElement(grammarAccess.getClazzRule());
            	        }
                   		setWithLastConsumed(
                   			current, 
                   			"name",
                    		lv_name_1_0, 
                    		"ID");
            	    

            }


            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:951:2: (otherlv_2= '<<' ( (lv_stereotype_3_0= ruleText ) ) otherlv_4= '>>' )?
            int alt22=2;
            int LA22_0 = input.LA(1);

            if ( (LA22_0==15) ) {
                alt22=1;
            }
            switch (alt22) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:951:4: otherlv_2= '<<' ( (lv_stereotype_3_0= ruleText ) ) otherlv_4= '>>'
                    {
                    otherlv_2=(Token)match(input,15,FOLLOW_15_in_ruleClazz2110); 

                        	newLeafNode(otherlv_2, grammarAccess.getClazzAccess().getLessThanSignLessThanSignKeyword_2_0());
                        
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:955:1: ( (lv_stereotype_3_0= ruleText ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:956:1: (lv_stereotype_3_0= ruleText )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:956:1: (lv_stereotype_3_0= ruleText )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:957:3: lv_stereotype_3_0= ruleText
                    {
                     
                    	        newCompositeNode(grammarAccess.getClazzAccess().getStereotypeTextParserRuleCall_2_1_0()); 
                    	    
                    pushFollow(FOLLOW_ruleText_in_ruleClazz2131);
                    lv_stereotype_3_0=ruleText();

                    state._fsp--;


                    	        if (current==null) {
                    	            current = createModelElementForParent(grammarAccess.getClazzRule());
                    	        }
                           		set(
                           			current, 
                           			"stereotype",
                            		lv_stereotype_3_0, 
                            		"Text");
                    	        afterParserOrEnumRuleCall();
                    	    

                    }


                    }

                    otherlv_4=(Token)match(input,16,FOLLOW_16_in_ruleClazz2143); 

                        	newLeafNode(otherlv_4, grammarAccess.getClazzAccess().getGreaterThanSignGreaterThanSignKeyword_2_2());
                        

                    }
                    break;

            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:977:3: (otherlv_5= '{' (this_END_LINE_6= RULE_END_LINE )? ( (lv_properties_7_0= ruleProperty ) )* otherlv_8= '}' )?
            int alt25=2;
            int LA25_0 = input.LA(1);

            if ( (LA25_0==17) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:977:5: otherlv_5= '{' (this_END_LINE_6= RULE_END_LINE )? ( (lv_properties_7_0= ruleProperty ) )* otherlv_8= '}'
                    {
                    otherlv_5=(Token)match(input,17,FOLLOW_17_in_ruleClazz2158); 

                        	newLeafNode(otherlv_5, grammarAccess.getClazzAccess().getLeftCurlyBracketKeyword_3_0());
                        
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:981:1: (this_END_LINE_6= RULE_END_LINE )?
                    int alt23=2;
                    int LA23_0 = input.LA(1);

                    if ( (LA23_0==RULE_END_LINE) ) {
                        alt23=1;
                    }
                    switch (alt23) {
                        case 1 :
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:981:2: this_END_LINE_6= RULE_END_LINE
                            {
                            this_END_LINE_6=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleClazz2170); 
                             
                                newLeafNode(this_END_LINE_6, grammarAccess.getClazzAccess().getEND_LINETerminalRuleCall_3_1()); 
                                

                            }
                            break;

                    }

                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:985:3: ( (lv_properties_7_0= ruleProperty ) )*
                    loop24:
                    do {
                        int alt24=2;
                        int LA24_0 = input.LA(1);

                        if ( (LA24_0==RULE_ID) ) {
                            alt24=1;
                        }


                        switch (alt24) {
                    	case 1 :
                    	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:986:1: (lv_properties_7_0= ruleProperty )
                    	    {
                    	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:986:1: (lv_properties_7_0= ruleProperty )
                    	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:987:3: lv_properties_7_0= ruleProperty
                    	    {
                    	     
                    	    	        newCompositeNode(grammarAccess.getClazzAccess().getPropertiesPropertyParserRuleCall_3_2_0()); 
                    	    	    
                    	    pushFollow(FOLLOW_ruleProperty_in_ruleClazz2192);
                    	    lv_properties_7_0=ruleProperty();

                    	    state._fsp--;


                    	    	        if (current==null) {
                    	    	            current = createModelElementForParent(grammarAccess.getClazzRule());
                    	    	        }
                    	           		add(
                    	           			current, 
                    	           			"properties",
                    	            		lv_properties_7_0, 
                    	            		"Property");
                    	    	        afterParserOrEnumRuleCall();
                    	    	    

                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop24;
                        }
                    } while (true);

                    otherlv_8=(Token)match(input,18,FOLLOW_18_in_ruleClazz2205); 

                        	newLeafNode(otherlv_8, grammarAccess.getClazzAccess().getRightCurlyBracketKeyword_3_3());
                        

                    }
                    break;

            }

            this_END_LINE_9=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleClazz2218); 
             
                newLeafNode(this_END_LINE_9, grammarAccess.getClazzAccess().getEND_LINETerminalRuleCall_4()); 
                

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleClazz"


    // $ANTLR start "entryRuleProperty"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1019:1: entryRuleProperty returns [EObject current=null] : iv_ruleProperty= ruleProperty EOF ;
    public final EObject entryRuleProperty() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleProperty = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1020:2: (iv_ruleProperty= ruleProperty EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1021:2: iv_ruleProperty= ruleProperty EOF
            {
             newCompositeNode(grammarAccess.getPropertyRule()); 
            pushFollow(FOLLOW_ruleProperty_in_entryRuleProperty2253);
            iv_ruleProperty=ruleProperty();

            state._fsp--;

             current =iv_ruleProperty; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleProperty2263); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleProperty"


    // $ANTLR start "ruleProperty"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1028:1: ruleProperty returns [EObject current=null] : ( ( (lv_name_0_0= RULE_ID ) ) ( ( ( (lv_optional_1_0= '?' ) )? (otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) ) )? ) | ( ( (lv_constant_6_0= '=' ) ) ( (lv_value_7_0= ruleText ) ) ) ) this_END_LINE_8= RULE_END_LINE ) ;
    public final EObject ruleProperty() throws RecognitionException {
        EObject current = null;

        Token lv_name_0_0=null;
        Token lv_optional_1_0=null;
        Token otherlv_2=null;
        Token lv_constant_6_0=null;
        Token this_END_LINE_8=null;
        EObject lv_type_3_0 = null;

        EObject lv_entityList_5_0 = null;

        AntlrDatatypeRuleToken lv_value_7_0 = null;


         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1031:28: ( ( ( (lv_name_0_0= RULE_ID ) ) ( ( ( (lv_optional_1_0= '?' ) )? (otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) ) )? ) | ( ( (lv_constant_6_0= '=' ) ) ( (lv_value_7_0= ruleText ) ) ) ) this_END_LINE_8= RULE_END_LINE ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1032:1: ( ( (lv_name_0_0= RULE_ID ) ) ( ( ( (lv_optional_1_0= '?' ) )? (otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) ) )? ) | ( ( (lv_constant_6_0= '=' ) ) ( (lv_value_7_0= ruleText ) ) ) ) this_END_LINE_8= RULE_END_LINE )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1032:1: ( ( (lv_name_0_0= RULE_ID ) ) ( ( ( (lv_optional_1_0= '?' ) )? (otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) ) )? ) | ( ( (lv_constant_6_0= '=' ) ) ( (lv_value_7_0= ruleText ) ) ) ) this_END_LINE_8= RULE_END_LINE )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1032:2: ( (lv_name_0_0= RULE_ID ) ) ( ( ( (lv_optional_1_0= '?' ) )? (otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) ) )? ) | ( ( (lv_constant_6_0= '=' ) ) ( (lv_value_7_0= ruleText ) ) ) ) this_END_LINE_8= RULE_END_LINE
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1032:2: ( (lv_name_0_0= RULE_ID ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1033:1: (lv_name_0_0= RULE_ID )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1033:1: (lv_name_0_0= RULE_ID )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1034:3: lv_name_0_0= RULE_ID
            {
            lv_name_0_0=(Token)match(input,RULE_ID,FOLLOW_RULE_ID_in_ruleProperty2305); 

            			newLeafNode(lv_name_0_0, grammarAccess.getPropertyAccess().getNameIDTerminalRuleCall_0_0()); 
            		

            	        if (current==null) {
            	            current = createModelElement(grammarAccess.getPropertyRule());
            	        }
                   		setWithLastConsumed(
                   			current, 
                   			"name",
                    		lv_name_0_0, 
                    		"ID");
            	    

            }


            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1050:2: ( ( ( (lv_optional_1_0= '?' ) )? (otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) ) )? ) | ( ( (lv_constant_6_0= '=' ) ) ( (lv_value_7_0= ruleText ) ) ) )
            int alt29=2;
            int LA29_0 = input.LA(1);

            if ( (LA29_0==RULE_END_LINE||LA29_0==19||LA29_0==30) ) {
                alt29=1;
            }
            else if ( (LA29_0==31) ) {
                alt29=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 29, 0, input);

                throw nvae;
            }
            switch (alt29) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1050:3: ( ( (lv_optional_1_0= '?' ) )? (otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) ) )? )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1050:3: ( ( (lv_optional_1_0= '?' ) )? (otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) ) )? )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1050:4: ( (lv_optional_1_0= '?' ) )? (otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) ) )?
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1050:4: ( (lv_optional_1_0= '?' ) )?
                    int alt26=2;
                    int LA26_0 = input.LA(1);

                    if ( (LA26_0==30) ) {
                        alt26=1;
                    }
                    switch (alt26) {
                        case 1 :
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1051:1: (lv_optional_1_0= '?' )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1051:1: (lv_optional_1_0= '?' )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1052:3: lv_optional_1_0= '?'
                            {
                            lv_optional_1_0=(Token)match(input,30,FOLLOW_30_in_ruleProperty2330); 

                                    newLeafNode(lv_optional_1_0, grammarAccess.getPropertyAccess().getOptionalQuestionMarkKeyword_1_0_0_0());
                                

                            	        if (current==null) {
                            	            current = createModelElement(grammarAccess.getPropertyRule());
                            	        }
                                   		setWithLastConsumed(current, "optional", true, "?");
                            	    

                            }


                            }
                            break;

                    }

                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1065:3: (otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) ) )?
                    int alt28=2;
                    int LA28_0 = input.LA(1);

                    if ( (LA28_0==19) ) {
                        alt28=1;
                    }
                    switch (alt28) {
                        case 1 :
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1065:5: otherlv_2= ':' ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) )
                            {
                            otherlv_2=(Token)match(input,19,FOLLOW_19_in_ruleProperty2357); 

                                	newLeafNode(otherlv_2, grammarAccess.getPropertyAccess().getColonKeyword_1_0_1_0());
                                
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1069:1: ( ( (lv_type_3_0= ruleDataType ) ) | ( ( ruleQualifiedName ) ) | ( (lv_entityList_5_0= ruleEntityList ) ) )
                            int alt27=3;
                            switch ( input.LA(1) ) {
                            case 43:
                            case 44:
                            case 45:
                            case 46:
                                {
                                alt27=1;
                                }
                                break;
                            case RULE_ID:
                                {
                                alt27=2;
                                }
                                break;
                            case 32:
                                {
                                alt27=3;
                                }
                                break;
                            default:
                                NoViableAltException nvae =
                                    new NoViableAltException("", 27, 0, input);

                                throw nvae;
                            }

                            switch (alt27) {
                                case 1 :
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1069:2: ( (lv_type_3_0= ruleDataType ) )
                                    {
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1069:2: ( (lv_type_3_0= ruleDataType ) )
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1070:1: (lv_type_3_0= ruleDataType )
                                    {
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1070:1: (lv_type_3_0= ruleDataType )
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1071:3: lv_type_3_0= ruleDataType
                                    {
                                     
                                    	        newCompositeNode(grammarAccess.getPropertyAccess().getTypeDataTypeParserRuleCall_1_0_1_1_0_0()); 
                                    	    
                                    pushFollow(FOLLOW_ruleDataType_in_ruleProperty2379);
                                    lv_type_3_0=ruleDataType();

                                    state._fsp--;


                                    	        if (current==null) {
                                    	            current = createModelElementForParent(grammarAccess.getPropertyRule());
                                    	        }
                                           		set(
                                           			current, 
                                           			"type",
                                            		lv_type_3_0, 
                                            		"DataType");
                                    	        afterParserOrEnumRuleCall();
                                    	    

                                    }


                                    }


                                    }
                                    break;
                                case 2 :
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1088:6: ( ( ruleQualifiedName ) )
                                    {
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1088:6: ( ( ruleQualifiedName ) )
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1089:1: ( ruleQualifiedName )
                                    {
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1089:1: ( ruleQualifiedName )
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1090:3: ruleQualifiedName
                                    {

                                    			if (current==null) {
                                    	            current = createModelElement(grammarAccess.getPropertyRule());
                                    	        }
                                            
                                     
                                    	        newCompositeNode(grammarAccess.getPropertyAccess().getEntityEntityCrossReference_1_0_1_1_1_0()); 
                                    	    
                                    pushFollow(FOLLOW_ruleQualifiedName_in_ruleProperty2408);
                                    ruleQualifiedName();

                                    state._fsp--;

                                     
                                    	        afterParserOrEnumRuleCall();
                                    	    

                                    }


                                    }


                                    }
                                    break;
                                case 3 :
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1104:6: ( (lv_entityList_5_0= ruleEntityList ) )
                                    {
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1104:6: ( (lv_entityList_5_0= ruleEntityList ) )
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1105:1: (lv_entityList_5_0= ruleEntityList )
                                    {
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1105:1: (lv_entityList_5_0= ruleEntityList )
                                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1106:3: lv_entityList_5_0= ruleEntityList
                                    {
                                     
                                    	        newCompositeNode(grammarAccess.getPropertyAccess().getEntityListEntityListParserRuleCall_1_0_1_1_2_0()); 
                                    	    
                                    pushFollow(FOLLOW_ruleEntityList_in_ruleProperty2435);
                                    lv_entityList_5_0=ruleEntityList();

                                    state._fsp--;


                                    	        if (current==null) {
                                    	            current = createModelElementForParent(grammarAccess.getPropertyRule());
                                    	        }
                                           		set(
                                           			current, 
                                           			"entityList",
                                            		lv_entityList_5_0, 
                                            		"EntityList");
                                    	        afterParserOrEnumRuleCall();
                                    	    

                                    }


                                    }


                                    }
                                    break;

                            }


                            }
                            break;

                    }


                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1123:6: ( ( (lv_constant_6_0= '=' ) ) ( (lv_value_7_0= ruleText ) ) )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1123:6: ( ( (lv_constant_6_0= '=' ) ) ( (lv_value_7_0= ruleText ) ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1123:7: ( (lv_constant_6_0= '=' ) ) ( (lv_value_7_0= ruleText ) )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1123:7: ( (lv_constant_6_0= '=' ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1124:1: (lv_constant_6_0= '=' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1124:1: (lv_constant_6_0= '=' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1125:3: lv_constant_6_0= '='
                    {
                    lv_constant_6_0=(Token)match(input,31,FOLLOW_31_in_ruleProperty2464); 

                            newLeafNode(lv_constant_6_0, grammarAccess.getPropertyAccess().getConstantEqualsSignKeyword_1_1_0_0());
                        

                    	        if (current==null) {
                    	            current = createModelElement(grammarAccess.getPropertyRule());
                    	        }
                           		setWithLastConsumed(current, "constant", true, "=");
                    	    

                    }


                    }

                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1138:2: ( (lv_value_7_0= ruleText ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1139:1: (lv_value_7_0= ruleText )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1139:1: (lv_value_7_0= ruleText )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1140:3: lv_value_7_0= ruleText
                    {
                     
                    	        newCompositeNode(grammarAccess.getPropertyAccess().getValueTextParserRuleCall_1_1_1_0()); 
                    	    
                    pushFollow(FOLLOW_ruleText_in_ruleProperty2498);
                    lv_value_7_0=ruleText();

                    state._fsp--;


                    	        if (current==null) {
                    	            current = createModelElementForParent(grammarAccess.getPropertyRule());
                    	        }
                           		set(
                           			current, 
                           			"value",
                            		lv_value_7_0, 
                            		"Text");
                    	        afterParserOrEnumRuleCall();
                    	    

                    }


                    }


                    }


                    }
                    break;

            }

            this_END_LINE_8=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleProperty2511); 
             
                newLeafNode(this_END_LINE_8, grammarAccess.getPropertyAccess().getEND_LINETerminalRuleCall_2()); 
                

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleProperty"


    // $ANTLR start "entryRuleEntityList"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1168:1: entryRuleEntityList returns [EObject current=null] : iv_ruleEntityList= ruleEntityList EOF ;
    public final EObject entryRuleEntityList() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleEntityList = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1169:2: (iv_ruleEntityList= ruleEntityList EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1170:2: iv_ruleEntityList= ruleEntityList EOF
            {
             newCompositeNode(grammarAccess.getEntityListRule()); 
            pushFollow(FOLLOW_ruleEntityList_in_entryRuleEntityList2546);
            iv_ruleEntityList=ruleEntityList();

            state._fsp--;

             current =iv_ruleEntityList; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleEntityList2556); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleEntityList"


    // $ANTLR start "ruleEntityList"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1177:1: ruleEntityList returns [EObject current=null] : (otherlv_0= '[' ( ( ruleQualifiedName ) ) (otherlv_2= '|' ( ( ruleQualifiedName ) ) )* otherlv_4= ']' ) ;
    public final EObject ruleEntityList() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token otherlv_2=null;
        Token otherlv_4=null;

         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1180:28: ( (otherlv_0= '[' ( ( ruleQualifiedName ) ) (otherlv_2= '|' ( ( ruleQualifiedName ) ) )* otherlv_4= ']' ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1181:1: (otherlv_0= '[' ( ( ruleQualifiedName ) ) (otherlv_2= '|' ( ( ruleQualifiedName ) ) )* otherlv_4= ']' )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1181:1: (otherlv_0= '[' ( ( ruleQualifiedName ) ) (otherlv_2= '|' ( ( ruleQualifiedName ) ) )* otherlv_4= ']' )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1181:3: otherlv_0= '[' ( ( ruleQualifiedName ) ) (otherlv_2= '|' ( ( ruleQualifiedName ) ) )* otherlv_4= ']'
            {
            otherlv_0=(Token)match(input,32,FOLLOW_32_in_ruleEntityList2593); 

                	newLeafNode(otherlv_0, grammarAccess.getEntityListAccess().getLeftSquareBracketKeyword_0());
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1185:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1186:1: ( ruleQualifiedName )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1186:1: ( ruleQualifiedName )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1187:3: ruleQualifiedName
            {

            			if (current==null) {
            	            current = createModelElement(grammarAccess.getEntityListRule());
            	        }
                    
             
            	        newCompositeNode(grammarAccess.getEntityListAccess().getRefsEntityCrossReference_1_0()); 
            	    
            pushFollow(FOLLOW_ruleQualifiedName_in_ruleEntityList2616);
            ruleQualifiedName();

            state._fsp--;

             
            	        afterParserOrEnumRuleCall();
            	    

            }


            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1200:2: (otherlv_2= '|' ( ( ruleQualifiedName ) ) )*
            loop30:
            do {
                int alt30=2;
                int LA30_0 = input.LA(1);

                if ( (LA30_0==33) ) {
                    alt30=1;
                }


                switch (alt30) {
            	case 1 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1200:4: otherlv_2= '|' ( ( ruleQualifiedName ) )
            	    {
            	    otherlv_2=(Token)match(input,33,FOLLOW_33_in_ruleEntityList2629); 

            	        	newLeafNode(otherlv_2, grammarAccess.getEntityListAccess().getVerticalLineKeyword_2_0());
            	        
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1204:1: ( ( ruleQualifiedName ) )
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1205:1: ( ruleQualifiedName )
            	    {
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1205:1: ( ruleQualifiedName )
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1206:3: ruleQualifiedName
            	    {

            	    			if (current==null) {
            	    	            current = createModelElement(grammarAccess.getEntityListRule());
            	    	        }
            	            
            	     
            	    	        newCompositeNode(grammarAccess.getEntityListAccess().getRefsEntityCrossReference_2_1_0()); 
            	    	    
            	    pushFollow(FOLLOW_ruleQualifiedName_in_ruleEntityList2652);
            	    ruleQualifiedName();

            	    state._fsp--;

            	     
            	    	        afterParserOrEnumRuleCall();
            	    	    

            	    }


            	    }


            	    }
            	    break;

            	default :
            	    break loop30;
                }
            } while (true);

            otherlv_4=(Token)match(input,34,FOLLOW_34_in_ruleEntityList2666); 

                	newLeafNode(otherlv_4, grammarAccess.getEntityListAccess().getRightSquareBracketKeyword_3());
                

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleEntityList"


    // $ANTLR start "entryRuleNote"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1231:1: entryRuleNote returns [EObject current=null] : iv_ruleNote= ruleNote EOF ;
    public final EObject entryRuleNote() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleNote = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1232:2: (iv_ruleNote= ruleNote EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1233:2: iv_ruleNote= ruleNote EOF
            {
             newCompositeNode(grammarAccess.getNoteRule()); 
            pushFollow(FOLLOW_ruleNote_in_entryRuleNote2702);
            iv_ruleNote=ruleNote();

            state._fsp--;

             current =iv_ruleNote; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleNote2712); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleNote"


    // $ANTLR start "ruleNote"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1240:1: ruleNote returns [EObject current=null] : (otherlv_0= 'note' ( ( ( ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE ) ) | (otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE ) ) | (otherlv_12= 'as' ( (lv_name_13_0= RULE_ID ) ) this_END_LINE_14= RULE_END_LINE ( (lv_value_15_0= ruleText ) ) this_END_LINE_16= RULE_END_LINE otherlv_17= 'end note' this_END_LINE_18= RULE_END_LINE ) ) ) ;
    public final EObject ruleNote() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token otherlv_2=null;
        Token this_END_LINE_4=null;
        Token otherlv_5=null;
        Token otherlv_6=null;
        Token this_END_LINE_7=null;
        Token this_END_LINE_9=null;
        Token otherlv_10=null;
        Token this_END_LINE_11=null;
        Token otherlv_12=null;
        Token lv_name_13_0=null;
        Token this_END_LINE_14=null;
        Token this_END_LINE_16=null;
        Token otherlv_17=null;
        Token this_END_LINE_18=null;
        Enumerator lv_position_1_0 = null;

        AntlrDatatypeRuleToken lv_value_3_0 = null;

        AntlrDatatypeRuleToken lv_value_8_0 = null;

        AntlrDatatypeRuleToken lv_value_15_0 = null;


         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1243:28: ( (otherlv_0= 'note' ( ( ( ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE ) ) | (otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE ) ) | (otherlv_12= 'as' ( (lv_name_13_0= RULE_ID ) ) this_END_LINE_14= RULE_END_LINE ( (lv_value_15_0= ruleText ) ) this_END_LINE_16= RULE_END_LINE otherlv_17= 'end note' this_END_LINE_18= RULE_END_LINE ) ) ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1244:1: (otherlv_0= 'note' ( ( ( ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE ) ) | (otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE ) ) | (otherlv_12= 'as' ( (lv_name_13_0= RULE_ID ) ) this_END_LINE_14= RULE_END_LINE ( (lv_value_15_0= ruleText ) ) this_END_LINE_16= RULE_END_LINE otherlv_17= 'end note' this_END_LINE_18= RULE_END_LINE ) ) )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1244:1: (otherlv_0= 'note' ( ( ( ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE ) ) | (otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE ) ) | (otherlv_12= 'as' ( (lv_name_13_0= RULE_ID ) ) this_END_LINE_14= RULE_END_LINE ( (lv_value_15_0= ruleText ) ) this_END_LINE_16= RULE_END_LINE otherlv_17= 'end note' this_END_LINE_18= RULE_END_LINE ) ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1244:3: otherlv_0= 'note' ( ( ( ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE ) ) | (otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE ) ) | (otherlv_12= 'as' ( (lv_name_13_0= RULE_ID ) ) this_END_LINE_14= RULE_END_LINE ( (lv_value_15_0= ruleText ) ) this_END_LINE_16= RULE_END_LINE otherlv_17= 'end note' this_END_LINE_18= RULE_END_LINE ) )
            {
            otherlv_0=(Token)match(input,35,FOLLOW_35_in_ruleNote2749); 

                	newLeafNode(otherlv_0, grammarAccess.getNoteAccess().getNoteKeyword_0());
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1248:1: ( ( ( ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE ) ) | (otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE ) ) | (otherlv_12= 'as' ( (lv_name_13_0= RULE_ID ) ) this_END_LINE_14= RULE_END_LINE ( (lv_value_15_0= ruleText ) ) this_END_LINE_16= RULE_END_LINE otherlv_17= 'end note' this_END_LINE_18= RULE_END_LINE ) )
            int alt32=2;
            int LA32_0 = input.LA(1);

            if ( ((LA32_0>=25 && LA32_0<=26)||LA32_0==36||(LA32_0>=40 && LA32_0<=41)) ) {
                alt32=1;
            }
            else if ( (LA32_0==38) ) {
                alt32=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 32, 0, input);

                throw nvae;
            }
            switch (alt32) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1248:2: ( ( ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE ) ) | (otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE ) )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1248:2: ( ( ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE ) ) | (otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE ) )
                    int alt31=2;
                    int LA31_0 = input.LA(1);

                    if ( ((LA31_0>=25 && LA31_0<=26)||(LA31_0>=40 && LA31_0<=41)) ) {
                        alt31=1;
                    }
                    else if ( (LA31_0==36) ) {
                        alt31=2;
                    }
                    else {
                        NoViableAltException nvae =
                            new NoViableAltException("", 31, 0, input);

                        throw nvae;
                    }
                    switch (alt31) {
                        case 1 :
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1248:3: ( ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE ) )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1248:3: ( ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE ) )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1248:4: ( (lv_position_1_0= ruleNotePosition ) ) (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1248:4: ( (lv_position_1_0= ruleNotePosition ) )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1249:1: (lv_position_1_0= ruleNotePosition )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1249:1: (lv_position_1_0= ruleNotePosition )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1250:3: lv_position_1_0= ruleNotePosition
                            {
                             
                            	        newCompositeNode(grammarAccess.getNoteAccess().getPositionNotePositionEnumRuleCall_1_0_0_0_0()); 
                            	    
                            pushFollow(FOLLOW_ruleNotePosition_in_ruleNote2773);
                            lv_position_1_0=ruleNotePosition();

                            state._fsp--;


                            	        if (current==null) {
                            	            current = createModelElementForParent(grammarAccess.getNoteRule());
                            	        }
                                   		set(
                                   			current, 
                                   			"position",
                                    		lv_position_1_0, 
                                    		"NotePosition");
                            	        afterParserOrEnumRuleCall();
                            	    

                            }


                            }

                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1266:2: (otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1266:4: otherlv_2= ':' ( (lv_value_3_0= ruleText ) ) this_END_LINE_4= RULE_END_LINE
                            {
                            otherlv_2=(Token)match(input,19,FOLLOW_19_in_ruleNote2786); 

                                	newLeafNode(otherlv_2, grammarAccess.getNoteAccess().getColonKeyword_1_0_0_1_0());
                                
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1270:1: ( (lv_value_3_0= ruleText ) )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1271:1: (lv_value_3_0= ruleText )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1271:1: (lv_value_3_0= ruleText )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1272:3: lv_value_3_0= ruleText
                            {
                             
                            	        newCompositeNode(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_0_0_1_1_0()); 
                            	    
                            pushFollow(FOLLOW_ruleText_in_ruleNote2807);
                            lv_value_3_0=ruleText();

                            state._fsp--;


                            	        if (current==null) {
                            	            current = createModelElementForParent(grammarAccess.getNoteRule());
                            	        }
                                   		set(
                                   			current, 
                                   			"value",
                                    		lv_value_3_0, 
                                    		"Text");
                            	        afterParserOrEnumRuleCall();
                            	    

                            }


                            }

                            this_END_LINE_4=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleNote2818); 
                             
                                newLeafNode(this_END_LINE_4, grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_0_1_2()); 
                                

                            }


                            }


                            }
                            break;
                        case 2 :
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1293:6: (otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1293:6: (otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1293:8: otherlv_5= 'of' ( (otherlv_6= RULE_ID ) ) this_END_LINE_7= RULE_END_LINE ( (lv_value_8_0= ruleText ) ) this_END_LINE_9= RULE_END_LINE otherlv_10= 'end note' this_END_LINE_11= RULE_END_LINE
                            {
                            otherlv_5=(Token)match(input,36,FOLLOW_36_in_ruleNote2838); 

                                	newLeafNode(otherlv_5, grammarAccess.getNoteAccess().getOfKeyword_1_0_1_0());
                                
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1297:1: ( (otherlv_6= RULE_ID ) )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1298:1: (otherlv_6= RULE_ID )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1298:1: (otherlv_6= RULE_ID )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1299:3: otherlv_6= RULE_ID
                            {

                            			if (current==null) {
                            	            current = createModelElement(grammarAccess.getNoteRule());
                            	        }
                                    
                            otherlv_6=(Token)match(input,RULE_ID,FOLLOW_RULE_ID_in_ruleNote2858); 

                            		newLeafNode(otherlv_6, grammarAccess.getNoteAccess().getOfEntityCrossReference_1_0_1_1_0()); 
                            	

                            }


                            }

                            this_END_LINE_7=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleNote2869); 
                             
                                newLeafNode(this_END_LINE_7, grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_2()); 
                                
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1314:1: ( (lv_value_8_0= ruleText ) )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1315:1: (lv_value_8_0= ruleText )
                            {
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1315:1: (lv_value_8_0= ruleText )
                            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1316:3: lv_value_8_0= ruleText
                            {
                             
                            	        newCompositeNode(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_0_1_3_0()); 
                            	    
                            pushFollow(FOLLOW_ruleText_in_ruleNote2889);
                            lv_value_8_0=ruleText();

                            state._fsp--;


                            	        if (current==null) {
                            	            current = createModelElementForParent(grammarAccess.getNoteRule());
                            	        }
                                   		set(
                                   			current, 
                                   			"value",
                                    		lv_value_8_0, 
                                    		"Text");
                            	        afterParserOrEnumRuleCall();
                            	    

                            }


                            }

                            this_END_LINE_9=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleNote2900); 
                             
                                newLeafNode(this_END_LINE_9, grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_4()); 
                                
                            otherlv_10=(Token)match(input,37,FOLLOW_37_in_ruleNote2911); 

                                	newLeafNode(otherlv_10, grammarAccess.getNoteAccess().getEndNoteKeyword_1_0_1_5());
                                
                            this_END_LINE_11=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleNote2922); 
                             
                                newLeafNode(this_END_LINE_11, grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_6()); 
                                

                            }


                            }
                            break;

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1345:6: (otherlv_12= 'as' ( (lv_name_13_0= RULE_ID ) ) this_END_LINE_14= RULE_END_LINE ( (lv_value_15_0= ruleText ) ) this_END_LINE_16= RULE_END_LINE otherlv_17= 'end note' this_END_LINE_18= RULE_END_LINE )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1345:6: (otherlv_12= 'as' ( (lv_name_13_0= RULE_ID ) ) this_END_LINE_14= RULE_END_LINE ( (lv_value_15_0= ruleText ) ) this_END_LINE_16= RULE_END_LINE otherlv_17= 'end note' this_END_LINE_18= RULE_END_LINE )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1345:8: otherlv_12= 'as' ( (lv_name_13_0= RULE_ID ) ) this_END_LINE_14= RULE_END_LINE ( (lv_value_15_0= ruleText ) ) this_END_LINE_16= RULE_END_LINE otherlv_17= 'end note' this_END_LINE_18= RULE_END_LINE
                    {
                    otherlv_12=(Token)match(input,38,FOLLOW_38_in_ruleNote2942); 

                        	newLeafNode(otherlv_12, grammarAccess.getNoteAccess().getAsKeyword_1_1_0());
                        
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1349:1: ( (lv_name_13_0= RULE_ID ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1350:1: (lv_name_13_0= RULE_ID )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1350:1: (lv_name_13_0= RULE_ID )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1351:3: lv_name_13_0= RULE_ID
                    {
                    lv_name_13_0=(Token)match(input,RULE_ID,FOLLOW_RULE_ID_in_ruleNote2959); 

                    			newLeafNode(lv_name_13_0, grammarAccess.getNoteAccess().getNameIDTerminalRuleCall_1_1_1_0()); 
                    		

                    	        if (current==null) {
                    	            current = createModelElement(grammarAccess.getNoteRule());
                    	        }
                           		setWithLastConsumed(
                           			current, 
                           			"name",
                            		lv_name_13_0, 
                            		"ID");
                    	    

                    }


                    }

                    this_END_LINE_14=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleNote2975); 
                     
                        newLeafNode(this_END_LINE_14, grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_2()); 
                        
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1371:1: ( (lv_value_15_0= ruleText ) )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1372:1: (lv_value_15_0= ruleText )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1372:1: (lv_value_15_0= ruleText )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1373:3: lv_value_15_0= ruleText
                    {
                     
                    	        newCompositeNode(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_1_3_0()); 
                    	    
                    pushFollow(FOLLOW_ruleText_in_ruleNote2995);
                    lv_value_15_0=ruleText();

                    state._fsp--;


                    	        if (current==null) {
                    	            current = createModelElementForParent(grammarAccess.getNoteRule());
                    	        }
                           		set(
                           			current, 
                           			"value",
                            		lv_value_15_0, 
                            		"Text");
                    	        afterParserOrEnumRuleCall();
                    	    

                    }


                    }

                    this_END_LINE_16=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleNote3006); 
                     
                        newLeafNode(this_END_LINE_16, grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_4()); 
                        
                    otherlv_17=(Token)match(input,37,FOLLOW_37_in_ruleNote3017); 

                        	newLeafNode(otherlv_17, grammarAccess.getNoteAccess().getEndNoteKeyword_1_1_5());
                        
                    this_END_LINE_18=(Token)match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_ruleNote3028); 
                     
                        newLeafNode(this_END_LINE_18, grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_6()); 
                        

                    }


                    }
                    break;

            }


            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleNote"


    // $ANTLR start "entryRuleDataType"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1409:1: entryRuleDataType returns [EObject current=null] : iv_ruleDataType= ruleDataType EOF ;
    public final EObject entryRuleDataType() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleDataType = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1410:2: (iv_ruleDataType= ruleDataType EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1411:2: iv_ruleDataType= ruleDataType EOF
            {
             newCompositeNode(grammarAccess.getDataTypeRule()); 
            pushFollow(FOLLOW_ruleDataType_in_entryRuleDataType3065);
            iv_ruleDataType=ruleDataType();

            state._fsp--;

             current =iv_ruleDataType; 
            match(input,EOF,FOLLOW_EOF_in_entryRuleDataType3075); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleDataType"


    // $ANTLR start "ruleDataType"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1418:1: ruleDataType returns [EObject current=null] : ( ( (lv_native_0_0= ruleNativeType ) ) ( (lv_isArray_1_0= '[]' ) )? ) ;
    public final EObject ruleDataType() throws RecognitionException {
        EObject current = null;

        Token lv_isArray_1_0=null;
        Enumerator lv_native_0_0 = null;


         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1421:28: ( ( ( (lv_native_0_0= ruleNativeType ) ) ( (lv_isArray_1_0= '[]' ) )? ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1422:1: ( ( (lv_native_0_0= ruleNativeType ) ) ( (lv_isArray_1_0= '[]' ) )? )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1422:1: ( ( (lv_native_0_0= ruleNativeType ) ) ( (lv_isArray_1_0= '[]' ) )? )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1422:2: ( (lv_native_0_0= ruleNativeType ) ) ( (lv_isArray_1_0= '[]' ) )?
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1422:2: ( (lv_native_0_0= ruleNativeType ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1423:1: (lv_native_0_0= ruleNativeType )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1423:1: (lv_native_0_0= ruleNativeType )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1424:3: lv_native_0_0= ruleNativeType
            {
             
            	        newCompositeNode(grammarAccess.getDataTypeAccess().getNativeNativeTypeEnumRuleCall_0_0()); 
            	    
            pushFollow(FOLLOW_ruleNativeType_in_ruleDataType3121);
            lv_native_0_0=ruleNativeType();

            state._fsp--;


            	        if (current==null) {
            	            current = createModelElementForParent(grammarAccess.getDataTypeRule());
            	        }
                   		set(
                   			current, 
                   			"native",
                    		lv_native_0_0, 
                    		"NativeType");
            	        afterParserOrEnumRuleCall();
            	    

            }


            }

            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1440:2: ( (lv_isArray_1_0= '[]' ) )?
            int alt33=2;
            int LA33_0 = input.LA(1);

            if ( (LA33_0==39) ) {
                alt33=1;
            }
            switch (alt33) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1441:1: (lv_isArray_1_0= '[]' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1441:1: (lv_isArray_1_0= '[]' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1442:3: lv_isArray_1_0= '[]'
                    {
                    lv_isArray_1_0=(Token)match(input,39,FOLLOW_39_in_ruleDataType3139); 

                            newLeafNode(lv_isArray_1_0, grammarAccess.getDataTypeAccess().getIsArrayLeftSquareBracketRightSquareBracketKeyword_1_0());
                        

                    	        if (current==null) {
                    	            current = createModelElement(grammarAccess.getDataTypeRule());
                    	        }
                           		setWithLastConsumed(current, "isArray", true, "[]");
                    	    

                    }


                    }
                    break;

            }


            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleDataType"


    // $ANTLR start "entryRuleQualifiedName"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1463:1: entryRuleQualifiedName returns [String current=null] : iv_ruleQualifiedName= ruleQualifiedName EOF ;
    public final String entryRuleQualifiedName() throws RecognitionException {
        String current = null;

        AntlrDatatypeRuleToken iv_ruleQualifiedName = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1464:2: (iv_ruleQualifiedName= ruleQualifiedName EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1465:2: iv_ruleQualifiedName= ruleQualifiedName EOF
            {
             newCompositeNode(grammarAccess.getQualifiedNameRule()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_entryRuleQualifiedName3190);
            iv_ruleQualifiedName=ruleQualifiedName();

            state._fsp--;

             current =iv_ruleQualifiedName.getText(); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleQualifiedName3201); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleQualifiedName"


    // $ANTLR start "ruleQualifiedName"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1472:1: ruleQualifiedName returns [AntlrDatatypeRuleToken current=new AntlrDatatypeRuleToken()] : (this_ID_0= RULE_ID (kw= '.' this_ID_2= RULE_ID )* ) ;
    public final AntlrDatatypeRuleToken ruleQualifiedName() throws RecognitionException {
        AntlrDatatypeRuleToken current = new AntlrDatatypeRuleToken();

        Token this_ID_0=null;
        Token kw=null;
        Token this_ID_2=null;

         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1475:28: ( (this_ID_0= RULE_ID (kw= '.' this_ID_2= RULE_ID )* ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1476:1: (this_ID_0= RULE_ID (kw= '.' this_ID_2= RULE_ID )* )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1476:1: (this_ID_0= RULE_ID (kw= '.' this_ID_2= RULE_ID )* )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1476:6: this_ID_0= RULE_ID (kw= '.' this_ID_2= RULE_ID )*
            {
            this_ID_0=(Token)match(input,RULE_ID,FOLLOW_RULE_ID_in_ruleQualifiedName3241); 

            		current.merge(this_ID_0);
                
             
                newLeafNode(this_ID_0, grammarAccess.getQualifiedNameAccess().getIDTerminalRuleCall_0()); 
                
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1483:1: (kw= '.' this_ID_2= RULE_ID )*
            loop34:
            do {
                int alt34=2;
                int LA34_0 = input.LA(1);

                if ( (LA34_0==27) ) {
                    int LA34_2 = input.LA(2);

                    if ( (LA34_2==RULE_ID) ) {
                        alt34=1;
                    }


                }


                switch (alt34) {
            	case 1 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1484:2: kw= '.' this_ID_2= RULE_ID
            	    {
            	    kw=(Token)match(input,27,FOLLOW_27_in_ruleQualifiedName3260); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getQualifiedNameAccess().getFullStopKeyword_1_0()); 
            	        
            	    this_ID_2=(Token)match(input,RULE_ID,FOLLOW_RULE_ID_in_ruleQualifiedName3275); 

            	    		current.merge(this_ID_2);
            	        
            	     
            	        newLeafNode(this_ID_2, grammarAccess.getQualifiedNameAccess().getIDTerminalRuleCall_1_1()); 
            	        

            	    }
            	    break;

            	default :
            	    break loop34;
                }
            } while (true);


            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleQualifiedName"


    // $ANTLR start "entryRuleText"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1504:1: entryRuleText returns [String current=null] : iv_ruleText= ruleText EOF ;
    public final String entryRuleText() throws RecognitionException {
        String current = null;

        AntlrDatatypeRuleToken iv_ruleText = null;


        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1505:2: (iv_ruleText= ruleText EOF )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1506:2: iv_ruleText= ruleText EOF
            {
             newCompositeNode(grammarAccess.getTextRule()); 
            pushFollow(FOLLOW_ruleText_in_entryRuleText3323);
            iv_ruleText=ruleText();

            state._fsp--;

             current =iv_ruleText.getText(); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleText3334); 

            }

        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleText"


    // $ANTLR start "ruleText"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1513:1: ruleText returns [AntlrDatatypeRuleToken current=new AntlrDatatypeRuleToken()] : (this_ID_0= RULE_ID | this_STRING_1= RULE_STRING | this_ANY_OTHER_2= RULE_ANY_OTHER | kw= 'up' | kw= 'down' | kw= 'top' | kw= 'bottom' | kw= 'left' | kw= 'right' | kw= 'null' | kw= 'string' | kw= 'number' | kw= 'integer' | kw= 'boolean' | kw= 'package' | kw= 'class' | kw= 'enum' | kw= 'note' | kw= 'as' | kw= 'of' | kw= ':' | kw= '?' )+ ;
    public final AntlrDatatypeRuleToken ruleText() throws RecognitionException {
        AntlrDatatypeRuleToken current = new AntlrDatatypeRuleToken();

        Token this_ID_0=null;
        Token this_STRING_1=null;
        Token this_ANY_OTHER_2=null;
        Token kw=null;

         enterRule(); 
            
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1516:28: ( (this_ID_0= RULE_ID | this_STRING_1= RULE_STRING | this_ANY_OTHER_2= RULE_ANY_OTHER | kw= 'up' | kw= 'down' | kw= 'top' | kw= 'bottom' | kw= 'left' | kw= 'right' | kw= 'null' | kw= 'string' | kw= 'number' | kw= 'integer' | kw= 'boolean' | kw= 'package' | kw= 'class' | kw= 'enum' | kw= 'note' | kw= 'as' | kw= 'of' | kw= ':' | kw= '?' )+ )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1517:1: (this_ID_0= RULE_ID | this_STRING_1= RULE_STRING | this_ANY_OTHER_2= RULE_ANY_OTHER | kw= 'up' | kw= 'down' | kw= 'top' | kw= 'bottom' | kw= 'left' | kw= 'right' | kw= 'null' | kw= 'string' | kw= 'number' | kw= 'integer' | kw= 'boolean' | kw= 'package' | kw= 'class' | kw= 'enum' | kw= 'note' | kw= 'as' | kw= 'of' | kw= ':' | kw= '?' )+
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1517:1: (this_ID_0= RULE_ID | this_STRING_1= RULE_STRING | this_ANY_OTHER_2= RULE_ANY_OTHER | kw= 'up' | kw= 'down' | kw= 'top' | kw= 'bottom' | kw= 'left' | kw= 'right' | kw= 'null' | kw= 'string' | kw= 'number' | kw= 'integer' | kw= 'boolean' | kw= 'package' | kw= 'class' | kw= 'enum' | kw= 'note' | kw= 'as' | kw= 'of' | kw= ':' | kw= '?' )+
            int cnt35=0;
            loop35:
            do {
                int alt35=23;
                switch ( input.LA(1) ) {
                case RULE_ID:
                    {
                    alt35=1;
                    }
                    break;
                case RULE_STRING:
                    {
                    alt35=2;
                    }
                    break;
                case RULE_ANY_OTHER:
                    {
                    alt35=3;
                    }
                    break;
                case 23:
                    {
                    alt35=4;
                    }
                    break;
                case 24:
                    {
                    alt35=5;
                    }
                    break;
                case 40:
                    {
                    alt35=6;
                    }
                    break;
                case 41:
                    {
                    alt35=7;
                    }
                    break;
                case 25:
                    {
                    alt35=8;
                    }
                    break;
                case 26:
                    {
                    alt35=9;
                    }
                    break;
                case 42:
                    {
                    alt35=10;
                    }
                    break;
                case 43:
                    {
                    alt35=11;
                    }
                    break;
                case 44:
                    {
                    alt35=12;
                    }
                    break;
                case 45:
                    {
                    alt35=13;
                    }
                    break;
                case 46:
                    {
                    alt35=14;
                    }
                    break;
                case 14:
                    {
                    alt35=15;
                    }
                    break;
                case 29:
                    {
                    alt35=16;
                    }
                    break;
                case 28:
                    {
                    alt35=17;
                    }
                    break;
                case 35:
                    {
                    alt35=18;
                    }
                    break;
                case 38:
                    {
                    alt35=19;
                    }
                    break;
                case 36:
                    {
                    alt35=20;
                    }
                    break;
                case 19:
                    {
                    alt35=21;
                    }
                    break;
                case 30:
                    {
                    alt35=22;
                    }
                    break;

                }

                switch (alt35) {
            	case 1 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1517:6: this_ID_0= RULE_ID
            	    {
            	    this_ID_0=(Token)match(input,RULE_ID,FOLLOW_RULE_ID_in_ruleText3374); 

            	    		current.merge(this_ID_0);
            	        
            	     
            	        newLeafNode(this_ID_0, grammarAccess.getTextAccess().getIDTerminalRuleCall_0()); 
            	        

            	    }
            	    break;
            	case 2 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1525:10: this_STRING_1= RULE_STRING
            	    {
            	    this_STRING_1=(Token)match(input,RULE_STRING,FOLLOW_RULE_STRING_in_ruleText3400); 

            	    		current.merge(this_STRING_1);
            	        
            	     
            	        newLeafNode(this_STRING_1, grammarAccess.getTextAccess().getSTRINGTerminalRuleCall_1()); 
            	        

            	    }
            	    break;
            	case 3 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1533:10: this_ANY_OTHER_2= RULE_ANY_OTHER
            	    {
            	    this_ANY_OTHER_2=(Token)match(input,RULE_ANY_OTHER,FOLLOW_RULE_ANY_OTHER_in_ruleText3426); 

            	    		current.merge(this_ANY_OTHER_2);
            	        
            	     
            	        newLeafNode(this_ANY_OTHER_2, grammarAccess.getTextAccess().getANY_OTHERTerminalRuleCall_2()); 
            	        

            	    }
            	    break;
            	case 4 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1542:2: kw= 'up'
            	    {
            	    kw=(Token)match(input,23,FOLLOW_23_in_ruleText3450); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getUpKeyword_3()); 
            	        

            	    }
            	    break;
            	case 5 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1549:2: kw= 'down'
            	    {
            	    kw=(Token)match(input,24,FOLLOW_24_in_ruleText3469); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getDownKeyword_4()); 
            	        

            	    }
            	    break;
            	case 6 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1556:2: kw= 'top'
            	    {
            	    kw=(Token)match(input,40,FOLLOW_40_in_ruleText3488); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getTopKeyword_5()); 
            	        

            	    }
            	    break;
            	case 7 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1563:2: kw= 'bottom'
            	    {
            	    kw=(Token)match(input,41,FOLLOW_41_in_ruleText3507); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getBottomKeyword_6()); 
            	        

            	    }
            	    break;
            	case 8 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1570:2: kw= 'left'
            	    {
            	    kw=(Token)match(input,25,FOLLOW_25_in_ruleText3526); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getLeftKeyword_7()); 
            	        

            	    }
            	    break;
            	case 9 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1577:2: kw= 'right'
            	    {
            	    kw=(Token)match(input,26,FOLLOW_26_in_ruleText3545); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getRightKeyword_8()); 
            	        

            	    }
            	    break;
            	case 10 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1584:2: kw= 'null'
            	    {
            	    kw=(Token)match(input,42,FOLLOW_42_in_ruleText3564); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getNullKeyword_9()); 
            	        

            	    }
            	    break;
            	case 11 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1591:2: kw= 'string'
            	    {
            	    kw=(Token)match(input,43,FOLLOW_43_in_ruleText3583); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getStringKeyword_10()); 
            	        

            	    }
            	    break;
            	case 12 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1598:2: kw= 'number'
            	    {
            	    kw=(Token)match(input,44,FOLLOW_44_in_ruleText3602); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getNumberKeyword_11()); 
            	        

            	    }
            	    break;
            	case 13 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1605:2: kw= 'integer'
            	    {
            	    kw=(Token)match(input,45,FOLLOW_45_in_ruleText3621); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getIntegerKeyword_12()); 
            	        

            	    }
            	    break;
            	case 14 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1612:2: kw= 'boolean'
            	    {
            	    kw=(Token)match(input,46,FOLLOW_46_in_ruleText3640); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getBooleanKeyword_13()); 
            	        

            	    }
            	    break;
            	case 15 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1619:2: kw= 'package'
            	    {
            	    kw=(Token)match(input,14,FOLLOW_14_in_ruleText3659); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getPackageKeyword_14()); 
            	        

            	    }
            	    break;
            	case 16 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1626:2: kw= 'class'
            	    {
            	    kw=(Token)match(input,29,FOLLOW_29_in_ruleText3678); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getClassKeyword_15()); 
            	        

            	    }
            	    break;
            	case 17 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1633:2: kw= 'enum'
            	    {
            	    kw=(Token)match(input,28,FOLLOW_28_in_ruleText3697); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getEnumKeyword_16()); 
            	        

            	    }
            	    break;
            	case 18 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1640:2: kw= 'note'
            	    {
            	    kw=(Token)match(input,35,FOLLOW_35_in_ruleText3716); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getNoteKeyword_17()); 
            	        

            	    }
            	    break;
            	case 19 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1647:2: kw= 'as'
            	    {
            	    kw=(Token)match(input,38,FOLLOW_38_in_ruleText3735); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getAsKeyword_18()); 
            	        

            	    }
            	    break;
            	case 20 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1654:2: kw= 'of'
            	    {
            	    kw=(Token)match(input,36,FOLLOW_36_in_ruleText3754); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getOfKeyword_19()); 
            	        

            	    }
            	    break;
            	case 21 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1661:2: kw= ':'
            	    {
            	    kw=(Token)match(input,19,FOLLOW_19_in_ruleText3773); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getColonKeyword_20()); 
            	        

            	    }
            	    break;
            	case 22 :
            	    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1668:2: kw= '?'
            	    {
            	    kw=(Token)match(input,30,FOLLOW_30_in_ruleText3792); 

            	            current.merge(kw);
            	            newLeafNode(kw, grammarAccess.getTextAccess().getQuestionMarkKeyword_21()); 
            	        

            	    }
            	    break;

            	default :
            	    if ( cnt35 >= 1 ) break loop35;
                        EarlyExitException eee =
                            new EarlyExitException(35, input);
                        throw eee;
                }
                cnt35++;
            } while (true);


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleText"


    // $ANTLR start "rulePackageStyle"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1681:1: rulePackageStyle returns [Enumerator current=null] : ( (enumLiteral_0= 'Node' ) | (enumLiteral_1= 'Rect' ) | (enumLiteral_2= 'Folder' ) | (enumLiteral_3= 'Frame' ) | (enumLiteral_4= 'Cloud' ) | (enumLiteral_5= 'Database' ) ) ;
    public final Enumerator rulePackageStyle() throws RecognitionException {
        Enumerator current = null;

        Token enumLiteral_0=null;
        Token enumLiteral_1=null;
        Token enumLiteral_2=null;
        Token enumLiteral_3=null;
        Token enumLiteral_4=null;
        Token enumLiteral_5=null;

         enterRule(); 
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1683:28: ( ( (enumLiteral_0= 'Node' ) | (enumLiteral_1= 'Rect' ) | (enumLiteral_2= 'Folder' ) | (enumLiteral_3= 'Frame' ) | (enumLiteral_4= 'Cloud' ) | (enumLiteral_5= 'Database' ) ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1684:1: ( (enumLiteral_0= 'Node' ) | (enumLiteral_1= 'Rect' ) | (enumLiteral_2= 'Folder' ) | (enumLiteral_3= 'Frame' ) | (enumLiteral_4= 'Cloud' ) | (enumLiteral_5= 'Database' ) )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1684:1: ( (enumLiteral_0= 'Node' ) | (enumLiteral_1= 'Rect' ) | (enumLiteral_2= 'Folder' ) | (enumLiteral_3= 'Frame' ) | (enumLiteral_4= 'Cloud' ) | (enumLiteral_5= 'Database' ) )
            int alt36=6;
            switch ( input.LA(1) ) {
            case 47:
                {
                alt36=1;
                }
                break;
            case 48:
                {
                alt36=2;
                }
                break;
            case 49:
                {
                alt36=3;
                }
                break;
            case 50:
                {
                alt36=4;
                }
                break;
            case 51:
                {
                alt36=5;
                }
                break;
            case 52:
                {
                alt36=6;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 36, 0, input);

                throw nvae;
            }

            switch (alt36) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1684:2: (enumLiteral_0= 'Node' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1684:2: (enumLiteral_0= 'Node' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1684:4: enumLiteral_0= 'Node'
                    {
                    enumLiteral_0=(Token)match(input,47,FOLLOW_47_in_rulePackageStyle3847); 

                            current = grammarAccess.getPackageStyleAccess().getNodeEnumLiteralDeclaration_0().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_0, grammarAccess.getPackageStyleAccess().getNodeEnumLiteralDeclaration_0()); 
                        

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1690:6: (enumLiteral_1= 'Rect' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1690:6: (enumLiteral_1= 'Rect' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1690:8: enumLiteral_1= 'Rect'
                    {
                    enumLiteral_1=(Token)match(input,48,FOLLOW_48_in_rulePackageStyle3864); 

                            current = grammarAccess.getPackageStyleAccess().getRectEnumLiteralDeclaration_1().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_1, grammarAccess.getPackageStyleAccess().getRectEnumLiteralDeclaration_1()); 
                        

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1696:6: (enumLiteral_2= 'Folder' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1696:6: (enumLiteral_2= 'Folder' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1696:8: enumLiteral_2= 'Folder'
                    {
                    enumLiteral_2=(Token)match(input,49,FOLLOW_49_in_rulePackageStyle3881); 

                            current = grammarAccess.getPackageStyleAccess().getFolderEnumLiteralDeclaration_2().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_2, grammarAccess.getPackageStyleAccess().getFolderEnumLiteralDeclaration_2()); 
                        

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1702:6: (enumLiteral_3= 'Frame' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1702:6: (enumLiteral_3= 'Frame' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1702:8: enumLiteral_3= 'Frame'
                    {
                    enumLiteral_3=(Token)match(input,50,FOLLOW_50_in_rulePackageStyle3898); 

                            current = grammarAccess.getPackageStyleAccess().getFrameEnumLiteralDeclaration_3().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_3, grammarAccess.getPackageStyleAccess().getFrameEnumLiteralDeclaration_3()); 
                        

                    }


                    }
                    break;
                case 5 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1708:6: (enumLiteral_4= 'Cloud' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1708:6: (enumLiteral_4= 'Cloud' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1708:8: enumLiteral_4= 'Cloud'
                    {
                    enumLiteral_4=(Token)match(input,51,FOLLOW_51_in_rulePackageStyle3915); 

                            current = grammarAccess.getPackageStyleAccess().getCloudEnumLiteralDeclaration_4().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_4, grammarAccess.getPackageStyleAccess().getCloudEnumLiteralDeclaration_4()); 
                        

                    }


                    }
                    break;
                case 6 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1714:6: (enumLiteral_5= 'Database' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1714:6: (enumLiteral_5= 'Database' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1714:8: enumLiteral_5= 'Database'
                    {
                    enumLiteral_5=(Token)match(input,52,FOLLOW_52_in_rulePackageStyle3932); 

                            current = grammarAccess.getPackageStyleAccess().getDatabaseEnumLiteralDeclaration_5().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_5, grammarAccess.getPackageStyleAccess().getDatabaseEnumLiteralDeclaration_5()); 
                        

                    }


                    }
                    break;

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "rulePackageStyle"


    // $ANTLR start "ruleCompType"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1724:1: ruleCompType returns [Enumerator current=null] : ( (enumLiteral_0= 'none' ) | (enumLiteral_1= '*' ) | (enumLiteral_2= 'o' ) ) ;
    public final Enumerator ruleCompType() throws RecognitionException {
        Enumerator current = null;

        Token enumLiteral_0=null;
        Token enumLiteral_1=null;
        Token enumLiteral_2=null;

         enterRule(); 
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1726:28: ( ( (enumLiteral_0= 'none' ) | (enumLiteral_1= '*' ) | (enumLiteral_2= 'o' ) ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1727:1: ( (enumLiteral_0= 'none' ) | (enumLiteral_1= '*' ) | (enumLiteral_2= 'o' ) )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1727:1: ( (enumLiteral_0= 'none' ) | (enumLiteral_1= '*' ) | (enumLiteral_2= 'o' ) )
            int alt37=3;
            switch ( input.LA(1) ) {
            case 53:
                {
                alt37=1;
                }
                break;
            case 54:
                {
                alt37=2;
                }
                break;
            case 55:
                {
                alt37=3;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 37, 0, input);

                throw nvae;
            }

            switch (alt37) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1727:2: (enumLiteral_0= 'none' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1727:2: (enumLiteral_0= 'none' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1727:4: enumLiteral_0= 'none'
                    {
                    enumLiteral_0=(Token)match(input,53,FOLLOW_53_in_ruleCompType3977); 

                            current = grammarAccess.getCompTypeAccess().getNoneEnumLiteralDeclaration_0().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_0, grammarAccess.getCompTypeAccess().getNoneEnumLiteralDeclaration_0()); 
                        

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1733:6: (enumLiteral_1= '*' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1733:6: (enumLiteral_1= '*' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1733:8: enumLiteral_1= '*'
                    {
                    enumLiteral_1=(Token)match(input,54,FOLLOW_54_in_ruleCompType3994); 

                            current = grammarAccess.getCompTypeAccess().getCompEnumLiteralDeclaration_1().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_1, grammarAccess.getCompTypeAccess().getCompEnumLiteralDeclaration_1()); 
                        

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1739:6: (enumLiteral_2= 'o' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1739:6: (enumLiteral_2= 'o' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1739:8: enumLiteral_2= 'o'
                    {
                    enumLiteral_2=(Token)match(input,55,FOLLOW_55_in_ruleCompType4011); 

                            current = grammarAccess.getCompTypeAccess().getAgreEnumLiteralDeclaration_2().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_2, grammarAccess.getCompTypeAccess().getAgreEnumLiteralDeclaration_2()); 
                        

                    }


                    }
                    break;

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleCompType"


    // $ANTLR start "ruleNotePosition"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1749:1: ruleNotePosition returns [Enumerator current=null] : ( (enumLiteral_0= 'top' ) | (enumLiteral_1= 'bottom' ) | (enumLiteral_2= 'left' ) | (enumLiteral_3= 'right' ) ) ;
    public final Enumerator ruleNotePosition() throws RecognitionException {
        Enumerator current = null;

        Token enumLiteral_0=null;
        Token enumLiteral_1=null;
        Token enumLiteral_2=null;
        Token enumLiteral_3=null;

         enterRule(); 
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1751:28: ( ( (enumLiteral_0= 'top' ) | (enumLiteral_1= 'bottom' ) | (enumLiteral_2= 'left' ) | (enumLiteral_3= 'right' ) ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1752:1: ( (enumLiteral_0= 'top' ) | (enumLiteral_1= 'bottom' ) | (enumLiteral_2= 'left' ) | (enumLiteral_3= 'right' ) )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1752:1: ( (enumLiteral_0= 'top' ) | (enumLiteral_1= 'bottom' ) | (enumLiteral_2= 'left' ) | (enumLiteral_3= 'right' ) )
            int alt38=4;
            switch ( input.LA(1) ) {
            case 40:
                {
                alt38=1;
                }
                break;
            case 41:
                {
                alt38=2;
                }
                break;
            case 25:
                {
                alt38=3;
                }
                break;
            case 26:
                {
                alt38=4;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 38, 0, input);

                throw nvae;
            }

            switch (alt38) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1752:2: (enumLiteral_0= 'top' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1752:2: (enumLiteral_0= 'top' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1752:4: enumLiteral_0= 'top'
                    {
                    enumLiteral_0=(Token)match(input,40,FOLLOW_40_in_ruleNotePosition4056); 

                            current = grammarAccess.getNotePositionAccess().getTopEnumLiteralDeclaration_0().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_0, grammarAccess.getNotePositionAccess().getTopEnumLiteralDeclaration_0()); 
                        

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1758:6: (enumLiteral_1= 'bottom' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1758:6: (enumLiteral_1= 'bottom' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1758:8: enumLiteral_1= 'bottom'
                    {
                    enumLiteral_1=(Token)match(input,41,FOLLOW_41_in_ruleNotePosition4073); 

                            current = grammarAccess.getNotePositionAccess().getBottomEnumLiteralDeclaration_1().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_1, grammarAccess.getNotePositionAccess().getBottomEnumLiteralDeclaration_1()); 
                        

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1764:6: (enumLiteral_2= 'left' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1764:6: (enumLiteral_2= 'left' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1764:8: enumLiteral_2= 'left'
                    {
                    enumLiteral_2=(Token)match(input,25,FOLLOW_25_in_ruleNotePosition4090); 

                            current = grammarAccess.getNotePositionAccess().getLeftEnumLiteralDeclaration_2().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_2, grammarAccess.getNotePositionAccess().getLeftEnumLiteralDeclaration_2()); 
                        

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1770:6: (enumLiteral_3= 'right' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1770:6: (enumLiteral_3= 'right' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1770:8: enumLiteral_3= 'right'
                    {
                    enumLiteral_3=(Token)match(input,26,FOLLOW_26_in_ruleNotePosition4107); 

                            current = grammarAccess.getNotePositionAccess().getRightEnumLiteralDeclaration_3().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_3, grammarAccess.getNotePositionAccess().getRightEnumLiteralDeclaration_3()); 
                        

                    }


                    }
                    break;

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleNotePosition"


    // $ANTLR start "ruleNativeType"
    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1780:1: ruleNativeType returns [Enumerator current=null] : ( (enumLiteral_0= 'string' ) | (enumLiteral_1= 'number' ) | (enumLiteral_2= 'integer' ) | (enumLiteral_3= 'boolean' ) ) ;
    public final Enumerator ruleNativeType() throws RecognitionException {
        Enumerator current = null;

        Token enumLiteral_0=null;
        Token enumLiteral_1=null;
        Token enumLiteral_2=null;
        Token enumLiteral_3=null;

         enterRule(); 
        try {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1782:28: ( ( (enumLiteral_0= 'string' ) | (enumLiteral_1= 'number' ) | (enumLiteral_2= 'integer' ) | (enumLiteral_3= 'boolean' ) ) )
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1783:1: ( (enumLiteral_0= 'string' ) | (enumLiteral_1= 'number' ) | (enumLiteral_2= 'integer' ) | (enumLiteral_3= 'boolean' ) )
            {
            // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1783:1: ( (enumLiteral_0= 'string' ) | (enumLiteral_1= 'number' ) | (enumLiteral_2= 'integer' ) | (enumLiteral_3= 'boolean' ) )
            int alt39=4;
            switch ( input.LA(1) ) {
            case 43:
                {
                alt39=1;
                }
                break;
            case 44:
                {
                alt39=2;
                }
                break;
            case 45:
                {
                alt39=3;
                }
                break;
            case 46:
                {
                alt39=4;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 39, 0, input);

                throw nvae;
            }

            switch (alt39) {
                case 1 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1783:2: (enumLiteral_0= 'string' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1783:2: (enumLiteral_0= 'string' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1783:4: enumLiteral_0= 'string'
                    {
                    enumLiteral_0=(Token)match(input,43,FOLLOW_43_in_ruleNativeType4152); 

                            current = grammarAccess.getNativeTypeAccess().getStringEnumLiteralDeclaration_0().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_0, grammarAccess.getNativeTypeAccess().getStringEnumLiteralDeclaration_0()); 
                        

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1789:6: (enumLiteral_1= 'number' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1789:6: (enumLiteral_1= 'number' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1789:8: enumLiteral_1= 'number'
                    {
                    enumLiteral_1=(Token)match(input,44,FOLLOW_44_in_ruleNativeType4169); 

                            current = grammarAccess.getNativeTypeAccess().getNumberEnumLiteralDeclaration_1().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_1, grammarAccess.getNativeTypeAccess().getNumberEnumLiteralDeclaration_1()); 
                        

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1795:6: (enumLiteral_2= 'integer' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1795:6: (enumLiteral_2= 'integer' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1795:8: enumLiteral_2= 'integer'
                    {
                    enumLiteral_2=(Token)match(input,45,FOLLOW_45_in_ruleNativeType4186); 

                            current = grammarAccess.getNativeTypeAccess().getIntegerEnumLiteralDeclaration_2().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_2, grammarAccess.getNativeTypeAccess().getIntegerEnumLiteralDeclaration_2()); 
                        

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1801:6: (enumLiteral_3= 'boolean' )
                    {
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1801:6: (enumLiteral_3= 'boolean' )
                    // ../rethink.uml/src-gen/rethink/uml/parser/antlr/internal/InternalClassDiagram.g:1801:8: enumLiteral_3= 'boolean'
                    {
                    enumLiteral_3=(Token)match(input,46,FOLLOW_46_in_ruleNativeType4203); 

                            current = grammarAccess.getNativeTypeAccess().getBooleanEnumLiteralDeclaration_3().getEnumLiteral().getInstance();
                            newLeafNode(enumLiteral_3, grammarAccess.getNativeTypeAccess().getBooleanEnumLiteralDeclaration_3()); 
                        

                    }


                    }
                    break;

            }


            }

             leaveRule(); 
        }
         
            catch (RecognitionException re) { 
                recover(input,re); 
                appendSkippedTokens();
            } 
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleNativeType"

    // Delegated rules


 

    public static final BitSet FOLLOW_ruleDomainModel_in_entryRuleDomainModel75 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleDomainModel85 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_12_in_ruleDomainModel122 = new BitSet(new long[]{0x0000000000000030L});
    public static final BitSet FOLLOW_RULE_STRING_in_ruleDomainModel148 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleDomainModel165 = new BitSet(new long[]{0x0000000000004000L});
    public static final BitSet FOLLOW_ruleCPackage_in_ruleDomainModel185 = new BitSet(new long[]{0x0000000000006000L});
    public static final BitSet FOLLOW_13_in_ruleDomainModel198 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleElement_in_entryRuleElement234 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleElement244 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelation_in_ruleElement291 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCPackage_in_ruleElement318 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntityAndNote_in_ruleElement345 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntityAndNote_in_entryRuleEntityAndNote380 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleEntityAndNote390 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntity_in_ruleEntityAndNote437 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNote_in_ruleEntityAndNote464 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntity_in_entryRuleEntity499 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleEntity509 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEnumer_in_ruleEntity556 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleClazz_in_ruleEntity583 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCPackage_in_entryRuleCPackage618 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleCPackage628 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_14_in_ruleCPackage665 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_ruleCPackage686 = new BitSet(new long[]{0x0000000000028000L});
    public static final BitSet FOLLOW_15_in_ruleCPackage699 = new BitSet(new long[]{0x001F800000000000L});
    public static final BitSet FOLLOW_rulePackageStyle_in_ruleCPackage720 = new BitSet(new long[]{0x0000000000010000L});
    public static final BitSet FOLLOW_16_in_ruleCPackage732 = new BitSet(new long[]{0x0000000000020000L});
    public static final BitSet FOLLOW_17_in_ruleCPackage746 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleCPackage757 = new BitSet(new long[]{0x0000000830044100L});
    public static final BitSet FOLLOW_ruleElement_in_ruleCPackage777 = new BitSet(new long[]{0x0000000830044100L});
    public static final BitSet FOLLOW_18_in_ruleCPackage790 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleCPackage801 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelation_in_entryRuleRelation836 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleRelation846 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_ruleRelation894 = new BitSet(new long[]{0x00E0000008400000L});
    public static final BitSet FOLLOW_ruleRelationParse_in_ruleRelation915 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_ruleRelation938 = new BitSet(new long[]{0x0000000000080020L});
    public static final BitSet FOLLOW_19_in_ruleRelation951 = new BitSet(new long[]{0x00007F5877884310L});
    public static final BitSet FOLLOW_ruleText_in_ruleRelation972 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleRelation985 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationParse_in_entryRuleRelationParse1026 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleRelationParse1036 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCompType_in_ruleRelationParse1087 = new BitSet(new long[]{0x00E0000008400000L});
    public static final BitSet FOLLOW_ruleRelationType_in_ruleRelationParse1108 = new BitSet(new long[]{0x0000000000100040L});
    public static final BitSet FOLLOW_20_in_ruleRelationParse1126 = new BitSet(new long[]{0x0000000000000040L});
    public static final BitSet FOLLOW_RULE_WS_in_ruleRelationParse1151 = new BitSet(new long[]{0x0000000000000082L});
    public static final BitSet FOLLOW_RULE_MULTI_in_ruleRelationParse1167 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationType_in_ruleRelationParse1202 = new BitSet(new long[]{0x0000000000300040L});
    public static final BitSet FOLLOW_20_in_ruleRelationParse1221 = new BitSet(new long[]{0x0000000000000040L});
    public static final BitSet FOLLOW_21_in_ruleRelationParse1258 = new BitSet(new long[]{0x0000000000000040L});
    public static final BitSet FOLLOW_RULE_WS_in_ruleRelationParse1284 = new BitSet(new long[]{0x0000000000000082L});
    public static final BitSet FOLLOW_RULE_MULTI_in_ruleRelationParse1300 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationType_in_entryRuleRelationType1353 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleRelationType1363 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleStrongRel_in_ruleRelationType1413 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleWeakRel_in_ruleRelationType1440 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleStrongRel_in_entryRuleStrongRel1481 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleStrongRel1492 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_22_in_ruleStrongRel1530 = new BitSet(new long[]{0x0000000007C00000L});
    public static final BitSet FOLLOW_23_in_ruleStrongRel1544 = new BitSet(new long[]{0x0000000000400000L});
    public static final BitSet FOLLOW_24_in_ruleStrongRel1563 = new BitSet(new long[]{0x0000000000400000L});
    public static final BitSet FOLLOW_25_in_ruleStrongRel1582 = new BitSet(new long[]{0x0000000000400000L});
    public static final BitSet FOLLOW_26_in_ruleStrongRel1601 = new BitSet(new long[]{0x0000000000400000L});
    public static final BitSet FOLLOW_22_in_ruleStrongRel1617 = new BitSet(new long[]{0x0000000000400002L});
    public static final BitSet FOLLOW_ruleWeakRel_in_entryRuleWeakRel1660 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleWeakRel1671 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_27_in_ruleWeakRel1709 = new BitSet(new long[]{0x000000000F800000L});
    public static final BitSet FOLLOW_23_in_ruleWeakRel1723 = new BitSet(new long[]{0x0000000008000000L});
    public static final BitSet FOLLOW_24_in_ruleWeakRel1742 = new BitSet(new long[]{0x0000000008000000L});
    public static final BitSet FOLLOW_25_in_ruleWeakRel1761 = new BitSet(new long[]{0x0000000008000000L});
    public static final BitSet FOLLOW_26_in_ruleWeakRel1780 = new BitSet(new long[]{0x0000000008000000L});
    public static final BitSet FOLLOW_27_in_ruleWeakRel1796 = new BitSet(new long[]{0x0000000008000002L});
    public static final BitSet FOLLOW_ruleEnumer_in_entryRuleEnumer1838 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleEnumer1848 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_28_in_ruleEnumer1885 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_RULE_ID_in_ruleEnumer1902 = new BitSet(new long[]{0x0000000000020000L});
    public static final BitSet FOLLOW_17_in_ruleEnumer1919 = new BitSet(new long[]{0x0000000000040120L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleEnumer1931 = new BitSet(new long[]{0x0000000000040100L});
    public static final BitSet FOLLOW_RULE_ID_in_ruleEnumer1950 = new BitSet(new long[]{0x0000000000040120L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleEnumer1967 = new BitSet(new long[]{0x0000000000040100L});
    public static final BitSet FOLLOW_18_in_ruleEnumer1982 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleEnumer1993 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleClazz_in_entryRuleClazz2028 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleClazz2038 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_29_in_ruleClazz2075 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_RULE_ID_in_ruleClazz2092 = new BitSet(new long[]{0x0000000000028020L});
    public static final BitSet FOLLOW_15_in_ruleClazz2110 = new BitSet(new long[]{0x00007F5877884310L});
    public static final BitSet FOLLOW_ruleText_in_ruleClazz2131 = new BitSet(new long[]{0x0000000000010000L});
    public static final BitSet FOLLOW_16_in_ruleClazz2143 = new BitSet(new long[]{0x0000000000020020L});
    public static final BitSet FOLLOW_17_in_ruleClazz2158 = new BitSet(new long[]{0x0000000000040120L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleClazz2170 = new BitSet(new long[]{0x0000000000040100L});
    public static final BitSet FOLLOW_ruleProperty_in_ruleClazz2192 = new BitSet(new long[]{0x0000000000040100L});
    public static final BitSet FOLLOW_18_in_ruleClazz2205 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleClazz2218 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleProperty_in_entryRuleProperty2253 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleProperty2263 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_ruleProperty2305 = new BitSet(new long[]{0x00000000C0080020L});
    public static final BitSet FOLLOW_30_in_ruleProperty2330 = new BitSet(new long[]{0x0000000000080020L});
    public static final BitSet FOLLOW_19_in_ruleProperty2357 = new BitSet(new long[]{0x0000780100000100L});
    public static final BitSet FOLLOW_ruleDataType_in_ruleProperty2379 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_ruleProperty2408 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_ruleEntityList_in_ruleProperty2435 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_31_in_ruleProperty2464 = new BitSet(new long[]{0x00007F5877884310L});
    public static final BitSet FOLLOW_ruleText_in_ruleProperty2498 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleProperty2511 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntityList_in_entryRuleEntityList2546 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleEntityList2556 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_32_in_ruleEntityList2593 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_ruleEntityList2616 = new BitSet(new long[]{0x0000000600000000L});
    public static final BitSet FOLLOW_33_in_ruleEntityList2629 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_ruleEntityList2652 = new BitSet(new long[]{0x0000000600000000L});
    public static final BitSet FOLLOW_34_in_ruleEntityList2666 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNote_in_entryRuleNote2702 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleNote2712 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_35_in_ruleNote2749 = new BitSet(new long[]{0x0000035006000000L});
    public static final BitSet FOLLOW_ruleNotePosition_in_ruleNote2773 = new BitSet(new long[]{0x0000000000080000L});
    public static final BitSet FOLLOW_19_in_ruleNote2786 = new BitSet(new long[]{0x00007F5877884310L});
    public static final BitSet FOLLOW_ruleText_in_ruleNote2807 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleNote2818 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_36_in_ruleNote2838 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_RULE_ID_in_ruleNote2858 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleNote2869 = new BitSet(new long[]{0x00007F5877884310L});
    public static final BitSet FOLLOW_ruleText_in_ruleNote2889 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleNote2900 = new BitSet(new long[]{0x0000002000000000L});
    public static final BitSet FOLLOW_37_in_ruleNote2911 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleNote2922 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_38_in_ruleNote2942 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_RULE_ID_in_ruleNote2959 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleNote2975 = new BitSet(new long[]{0x00007F5877884310L});
    public static final BitSet FOLLOW_ruleText_in_ruleNote2995 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleNote3006 = new BitSet(new long[]{0x0000002000000000L});
    public static final BitSet FOLLOW_37_in_ruleNote3017 = new BitSet(new long[]{0x0000000000000020L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_ruleNote3028 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleDataType_in_entryRuleDataType3065 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleDataType3075 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNativeType_in_ruleDataType3121 = new BitSet(new long[]{0x0000008000000002L});
    public static final BitSet FOLLOW_39_in_ruleDataType3139 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_entryRuleQualifiedName3190 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleQualifiedName3201 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_ruleQualifiedName3241 = new BitSet(new long[]{0x0000000008000002L});
    public static final BitSet FOLLOW_27_in_ruleQualifiedName3260 = new BitSet(new long[]{0x0000000000000100L});
    public static final BitSet FOLLOW_RULE_ID_in_ruleQualifiedName3275 = new BitSet(new long[]{0x0000000008000002L});
    public static final BitSet FOLLOW_ruleText_in_entryRuleText3323 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleText3334 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_ruleText3374 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_RULE_STRING_in_ruleText3400 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_RULE_ANY_OTHER_in_ruleText3426 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_23_in_ruleText3450 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_24_in_ruleText3469 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_40_in_ruleText3488 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_41_in_ruleText3507 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_25_in_ruleText3526 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_26_in_ruleText3545 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_42_in_ruleText3564 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_43_in_ruleText3583 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_44_in_ruleText3602 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_45_in_ruleText3621 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_46_in_ruleText3640 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_14_in_ruleText3659 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_29_in_ruleText3678 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_28_in_ruleText3697 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_35_in_ruleText3716 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_38_in_ruleText3735 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_36_in_ruleText3754 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_19_in_ruleText3773 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_30_in_ruleText3792 = new BitSet(new long[]{0x00007F5877884312L});
    public static final BitSet FOLLOW_47_in_rulePackageStyle3847 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_48_in_rulePackageStyle3864 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_49_in_rulePackageStyle3881 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_50_in_rulePackageStyle3898 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_51_in_rulePackageStyle3915 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_52_in_rulePackageStyle3932 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_53_in_ruleCompType3977 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_54_in_ruleCompType3994 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_55_in_ruleCompType4011 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_40_in_ruleNotePosition4056 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_41_in_ruleNotePosition4073 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_25_in_ruleNotePosition4090 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_26_in_ruleNotePosition4107 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_ruleNativeType4152 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_44_in_ruleNativeType4169 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_45_in_ruleNativeType4186 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_46_in_ruleNativeType4203 = new BitSet(new long[]{0x0000000000000002L});

}