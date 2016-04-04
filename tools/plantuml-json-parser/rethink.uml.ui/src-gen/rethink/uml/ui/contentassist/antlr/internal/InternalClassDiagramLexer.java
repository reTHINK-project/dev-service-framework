package rethink.uml.ui.contentassist.antlr.internal;

// Hack: Use our own Lexer superclass by means of import. 
// Currently there is no other way to specify the superclass for the lexer.
import org.eclipse.xtext.ui.editor.contentassist.antlr.internal.Lexer;


import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

@SuppressWarnings("all")
public class InternalClassDiagramLexer extends Lexer {
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

    public InternalClassDiagramLexer() {;} 
    public InternalClassDiagramLexer(CharStream input) {
        this(input, new RecognizerSharedState());
    }
    public InternalClassDiagramLexer(CharStream input, RecognizerSharedState state) {
        super(input,state);

    }
    public String getGrammarFileName() { return "../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g"; }

    // $ANTLR start "T__12"
    public final void mT__12() throws RecognitionException {
        try {
            int _type = T__12;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:11:7: ( 'up' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:11:9: 'up'
            {
            match("up"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__12"

    // $ANTLR start "T__13"
    public final void mT__13() throws RecognitionException {
        try {
            int _type = T__13;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:12:7: ( 'down' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:12:9: 'down'
            {
            match("down"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__13"

    // $ANTLR start "T__14"
    public final void mT__14() throws RecognitionException {
        try {
            int _type = T__14;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:13:7: ( 'left' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:13:9: 'left'
            {
            match("left"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__14"

    // $ANTLR start "T__15"
    public final void mT__15() throws RecognitionException {
        try {
            int _type = T__15;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:14:7: ( 'right' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:14:9: 'right'
            {
            match("right"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__15"

    // $ANTLR start "T__16"
    public final void mT__16() throws RecognitionException {
        try {
            int _type = T__16;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:15:7: ( 'top' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:15:9: 'top'
            {
            match("top"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__16"

    // $ANTLR start "T__17"
    public final void mT__17() throws RecognitionException {
        try {
            int _type = T__17;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:16:7: ( 'bottom' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:16:9: 'bottom'
            {
            match("bottom"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__17"

    // $ANTLR start "T__18"
    public final void mT__18() throws RecognitionException {
        try {
            int _type = T__18;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:17:7: ( 'null' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:17:9: 'null'
            {
            match("null"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__18"

    // $ANTLR start "T__19"
    public final void mT__19() throws RecognitionException {
        try {
            int _type = T__19;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:18:7: ( 'string' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:18:9: 'string'
            {
            match("string"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__19"

    // $ANTLR start "T__20"
    public final void mT__20() throws RecognitionException {
        try {
            int _type = T__20;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:19:7: ( 'number' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:19:9: 'number'
            {
            match("number"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__20"

    // $ANTLR start "T__21"
    public final void mT__21() throws RecognitionException {
        try {
            int _type = T__21;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:20:7: ( 'integer' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:20:9: 'integer'
            {
            match("integer"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__21"

    // $ANTLR start "T__22"
    public final void mT__22() throws RecognitionException {
        try {
            int _type = T__22;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:21:7: ( 'boolean' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:21:9: 'boolean'
            {
            match("boolean"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__22"

    // $ANTLR start "T__23"
    public final void mT__23() throws RecognitionException {
        try {
            int _type = T__23;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:22:7: ( 'package' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:22:9: 'package'
            {
            match("package"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__23"

    // $ANTLR start "T__24"
    public final void mT__24() throws RecognitionException {
        try {
            int _type = T__24;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:23:7: ( 'class' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:23:9: 'class'
            {
            match("class"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__24"

    // $ANTLR start "T__25"
    public final void mT__25() throws RecognitionException {
        try {
            int _type = T__25;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:24:7: ( 'enum' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:24:9: 'enum'
            {
            match("enum"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__25"

    // $ANTLR start "T__26"
    public final void mT__26() throws RecognitionException {
        try {
            int _type = T__26;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:25:7: ( 'note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:25:9: 'note'
            {
            match("note"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__26"

    // $ANTLR start "T__27"
    public final void mT__27() throws RecognitionException {
        try {
            int _type = T__27;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:26:7: ( 'as' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:26:9: 'as'
            {
            match("as"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__27"

    // $ANTLR start "T__28"
    public final void mT__28() throws RecognitionException {
        try {
            int _type = T__28;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:27:7: ( 'of' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:27:9: 'of'
            {
            match("of"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__28"

    // $ANTLR start "T__29"
    public final void mT__29() throws RecognitionException {
        try {
            int _type = T__29;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:28:7: ( ':' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:28:9: ':'
            {
            match(':'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__29"

    // $ANTLR start "T__30"
    public final void mT__30() throws RecognitionException {
        try {
            int _type = T__30;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:29:7: ( '?' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:29:9: '?'
            {
            match('?'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__30"

    // $ANTLR start "T__31"
    public final void mT__31() throws RecognitionException {
        try {
            int _type = T__31;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:30:7: ( 'Node' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:30:9: 'Node'
            {
            match("Node"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__31"

    // $ANTLR start "T__32"
    public final void mT__32() throws RecognitionException {
        try {
            int _type = T__32;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:31:7: ( 'Rect' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:31:9: 'Rect'
            {
            match("Rect"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__32"

    // $ANTLR start "T__33"
    public final void mT__33() throws RecognitionException {
        try {
            int _type = T__33;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:32:7: ( 'Folder' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:32:9: 'Folder'
            {
            match("Folder"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__33"

    // $ANTLR start "T__34"
    public final void mT__34() throws RecognitionException {
        try {
            int _type = T__34;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:33:7: ( 'Frame' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:33:9: 'Frame'
            {
            match("Frame"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__34"

    // $ANTLR start "T__35"
    public final void mT__35() throws RecognitionException {
        try {
            int _type = T__35;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:34:7: ( 'Cloud' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:34:9: 'Cloud'
            {
            match("Cloud"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__35"

    // $ANTLR start "T__36"
    public final void mT__36() throws RecognitionException {
        try {
            int _type = T__36;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:35:7: ( 'Database' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:35:9: 'Database'
            {
            match("Database"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__36"

    // $ANTLR start "T__37"
    public final void mT__37() throws RecognitionException {
        try {
            int _type = T__37;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:36:7: ( 'none' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:36:9: 'none'
            {
            match("none"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__37"

    // $ANTLR start "T__38"
    public final void mT__38() throws RecognitionException {
        try {
            int _type = T__38;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:37:7: ( '*' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:37:9: '*'
            {
            match('*'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__38"

    // $ANTLR start "T__39"
    public final void mT__39() throws RecognitionException {
        try {
            int _type = T__39;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:38:7: ( 'o' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:38:9: 'o'
            {
            match('o'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__39"

    // $ANTLR start "T__40"
    public final void mT__40() throws RecognitionException {
        try {
            int _type = T__40;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:39:7: ( '@startuml' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:39:9: '@startuml'
            {
            match("@startuml"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__40"

    // $ANTLR start "T__41"
    public final void mT__41() throws RecognitionException {
        try {
            int _type = T__41;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:40:7: ( '@enduml' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:40:9: '@enduml'
            {
            match("@enduml"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__41"

    // $ANTLR start "T__42"
    public final void mT__42() throws RecognitionException {
        try {
            int _type = T__42;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:41:7: ( '{' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:41:9: '{'
            {
            match('{'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__42"

    // $ANTLR start "T__43"
    public final void mT__43() throws RecognitionException {
        try {
            int _type = T__43;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:42:7: ( '}' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:42:9: '}'
            {
            match('}'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__43"

    // $ANTLR start "T__44"
    public final void mT__44() throws RecognitionException {
        try {
            int _type = T__44;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:43:7: ( '<<' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:43:9: '<<'
            {
            match("<<"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__44"

    // $ANTLR start "T__45"
    public final void mT__45() throws RecognitionException {
        try {
            int _type = T__45;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:44:7: ( '>>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:44:9: '>>'
            {
            match(">>"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__45"

    // $ANTLR start "T__46"
    public final void mT__46() throws RecognitionException {
        try {
            int _type = T__46;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:45:7: ( '-' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:45:9: '-'
            {
            match('-'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__46"

    // $ANTLR start "T__47"
    public final void mT__47() throws RecognitionException {
        try {
            int _type = T__47;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:46:7: ( '.' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:46:9: '.'
            {
            match('.'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__47"

    // $ANTLR start "T__48"
    public final void mT__48() throws RecognitionException {
        try {
            int _type = T__48;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:47:7: ( '[' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:47:9: '['
            {
            match('['); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__48"

    // $ANTLR start "T__49"
    public final void mT__49() throws RecognitionException {
        try {
            int _type = T__49;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:48:7: ( ']' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:48:9: ']'
            {
            match(']'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__49"

    // $ANTLR start "T__50"
    public final void mT__50() throws RecognitionException {
        try {
            int _type = T__50;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:49:7: ( '|' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:49:9: '|'
            {
            match('|'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__50"

    // $ANTLR start "T__51"
    public final void mT__51() throws RecognitionException {
        try {
            int _type = T__51;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:50:7: ( 'end note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:50:9: 'end note'
            {
            match("end note"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__51"

    // $ANTLR start "T__52"
    public final void mT__52() throws RecognitionException {
        try {
            int _type = T__52;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:51:7: ( '>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:51:9: '>'
            {
            match('>'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__52"

    // $ANTLR start "T__53"
    public final void mT__53() throws RecognitionException {
        try {
            int _type = T__53;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:52:7: ( '|>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:52:9: '|>'
            {
            match("|>"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__53"

    // $ANTLR start "T__54"
    public final void mT__54() throws RecognitionException {
        try {
            int _type = T__54;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:53:7: ( '=' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:53:9: '='
            {
            match('='); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__54"

    // $ANTLR start "T__55"
    public final void mT__55() throws RecognitionException {
        try {
            int _type = T__55;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:54:7: ( '[]' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:54:9: '[]'
            {
            match("[]"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "T__55"

    // $ANTLR start "RULE_ID"
    public final void mRULE_ID() throws RecognitionException {
        try {
            int _type = RULE_ID;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5232:9: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5232:11: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )*
            {
            if ( (input.LA(1)>='A' && input.LA(1)<='Z')||input.LA(1)=='_'||(input.LA(1)>='a' && input.LA(1)<='z') ) {
                input.consume();

            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;}

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5232:35: ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )*
            loop1:
            do {
                int alt1=2;
                int LA1_0 = input.LA(1);

                if ( ((LA1_0>='0' && LA1_0<='9')||(LA1_0>='A' && LA1_0<='Z')||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')) ) {
                    alt1=1;
                }


                switch (alt1) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:
            	    {
            	    if ( (input.LA(1)>='0' && input.LA(1)<='9')||(input.LA(1)>='A' && input.LA(1)<='Z')||input.LA(1)=='_'||(input.LA(1)>='a' && input.LA(1)<='z') ) {
            	        input.consume();

            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;}


            	    }
            	    break;

            	default :
            	    break loop1;
                }
            } while (true);


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "RULE_ID"

    // $ANTLR start "RULE_WS"
    public final void mRULE_WS() throws RecognitionException {
        try {
            int _type = RULE_WS;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5234:9: ( ( ' ' | '\\t' )+ )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5234:11: ( ' ' | '\\t' )+
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5234:11: ( ' ' | '\\t' )+
            int cnt2=0;
            loop2:
            do {
                int alt2=2;
                int LA2_0 = input.LA(1);

                if ( (LA2_0=='\t'||LA2_0==' ') ) {
                    alt2=1;
                }


                switch (alt2) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:
            	    {
            	    if ( input.LA(1)=='\t'||input.LA(1)==' ' ) {
            	        input.consume();

            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;}


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


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "RULE_WS"

    // $ANTLR start "RULE_END_LINE"
    public final void mRULE_END_LINE() throws RecognitionException {
        try {
            int _type = RULE_END_LINE;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5236:15: ( ( '\\t' | '\\r' | '\\n' )+ )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5236:17: ( '\\t' | '\\r' | '\\n' )+
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5236:17: ( '\\t' | '\\r' | '\\n' )+
            int cnt3=0;
            loop3:
            do {
                int alt3=2;
                int LA3_0 = input.LA(1);

                if ( ((LA3_0>='\t' && LA3_0<='\n')||LA3_0=='\r') ) {
                    alt3=1;
                }


                switch (alt3) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:
            	    {
            	    if ( (input.LA(1)>='\t' && input.LA(1)<='\n')||input.LA(1)=='\r' ) {
            	        input.consume();

            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;}


            	    }
            	    break;

            	default :
            	    if ( cnt3 >= 1 ) break loop3;
                        EarlyExitException eee =
                            new EarlyExitException(3, input);
                        throw eee;
                }
                cnt3++;
            } while (true);


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "RULE_END_LINE"

    // $ANTLR start "RULE_ML_COMMENT"
    public final void mRULE_ML_COMMENT() throws RecognitionException {
        try {
            int _type = RULE_ML_COMMENT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5238:17: ( '/*' ( options {greedy=false; } : . )* '*/' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5238:19: '/*' ( options {greedy=false; } : . )* '*/'
            {
            match("/*"); 

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5238:24: ( options {greedy=false; } : . )*
            loop4:
            do {
                int alt4=2;
                int LA4_0 = input.LA(1);

                if ( (LA4_0=='*') ) {
                    int LA4_1 = input.LA(2);

                    if ( (LA4_1=='/') ) {
                        alt4=2;
                    }
                    else if ( ((LA4_1>='\u0000' && LA4_1<='.')||(LA4_1>='0' && LA4_1<='\uFFFF')) ) {
                        alt4=1;
                    }


                }
                else if ( ((LA4_0>='\u0000' && LA4_0<=')')||(LA4_0>='+' && LA4_0<='\uFFFF')) ) {
                    alt4=1;
                }


                switch (alt4) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5238:52: .
            	    {
            	    matchAny(); 

            	    }
            	    break;

            	default :
            	    break loop4;
                }
            } while (true);

            match("*/"); 


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "RULE_ML_COMMENT"

    // $ANTLR start "RULE_SL_COMMENT"
    public final void mRULE_SL_COMMENT() throws RecognitionException {
        try {
            int _type = RULE_SL_COMMENT;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5240:17: ( '//' (~ ( ( '\\n' | '\\r' ) ) )* ( ( '\\r' )? '\\n' )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5240:19: '//' (~ ( ( '\\n' | '\\r' ) ) )* ( ( '\\r' )? '\\n' )?
            {
            match("//"); 

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5240:24: (~ ( ( '\\n' | '\\r' ) ) )*
            loop5:
            do {
                int alt5=2;
                int LA5_0 = input.LA(1);

                if ( ((LA5_0>='\u0000' && LA5_0<='\t')||(LA5_0>='\u000B' && LA5_0<='\f')||(LA5_0>='\u000E' && LA5_0<='\uFFFF')) ) {
                    alt5=1;
                }


                switch (alt5) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5240:24: ~ ( ( '\\n' | '\\r' ) )
            	    {
            	    if ( (input.LA(1)>='\u0000' && input.LA(1)<='\t')||(input.LA(1)>='\u000B' && input.LA(1)<='\f')||(input.LA(1)>='\u000E' && input.LA(1)<='\uFFFF') ) {
            	        input.consume();

            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;}


            	    }
            	    break;

            	default :
            	    break loop5;
                }
            } while (true);

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5240:40: ( ( '\\r' )? '\\n' )?
            int alt7=2;
            int LA7_0 = input.LA(1);

            if ( (LA7_0=='\n'||LA7_0=='\r') ) {
                alt7=1;
            }
            switch (alt7) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5240:41: ( '\\r' )? '\\n'
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5240:41: ( '\\r' )?
                    int alt6=2;
                    int LA6_0 = input.LA(1);

                    if ( (LA6_0=='\r') ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5240:41: '\\r'
                            {
                            match('\r'); 

                            }
                            break;

                    }

                    match('\n'); 

                    }
                    break;

            }


            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "RULE_SL_COMMENT"

    // $ANTLR start "RULE_MULTI"
    public final void mRULE_MULTI() throws RecognitionException {
        try {
            int _type = RULE_MULTI;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5242:12: ( '\"' ( ( '0' | '1' ) '..' )? ( '1' | '*' ) '\"' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5242:14: '\"' ( ( '0' | '1' ) '..' )? ( '1' | '*' ) '\"'
            {
            match('\"'); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5242:18: ( ( '0' | '1' ) '..' )?
            int alt8=2;
            int LA8_0 = input.LA(1);

            if ( (LA8_0=='1') ) {
                int LA8_1 = input.LA(2);

                if ( (LA8_1=='.') ) {
                    alt8=1;
                }
            }
            else if ( (LA8_0=='0') ) {
                alt8=1;
            }
            switch (alt8) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5242:19: ( '0' | '1' ) '..'
                    {
                    if ( (input.LA(1)>='0' && input.LA(1)<='1') ) {
                        input.consume();

                    }
                    else {
                        MismatchedSetException mse = new MismatchedSetException(null,input);
                        recover(mse);
                        throw mse;}

                    match(".."); 


                    }
                    break;

            }

            if ( input.LA(1)=='*'||input.LA(1)=='1' ) {
                input.consume();

            }
            else {
                MismatchedSetException mse = new MismatchedSetException(null,input);
                recover(mse);
                throw mse;}

            match('\"'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "RULE_MULTI"

    // $ANTLR start "RULE_STRING"
    public final void mRULE_STRING() throws RecognitionException {
        try {
            int _type = RULE_STRING;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5244:13: ( '\"' ( '\\\\' . | ~ ( ( '\\\\' | '\"' ) ) )* '\"' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5244:15: '\"' ( '\\\\' . | ~ ( ( '\\\\' | '\"' ) ) )* '\"'
            {
            match('\"'); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5244:19: ( '\\\\' . | ~ ( ( '\\\\' | '\"' ) ) )*
            loop9:
            do {
                int alt9=3;
                int LA9_0 = input.LA(1);

                if ( (LA9_0=='\\') ) {
                    alt9=1;
                }
                else if ( ((LA9_0>='\u0000' && LA9_0<='!')||(LA9_0>='#' && LA9_0<='[')||(LA9_0>=']' && LA9_0<='\uFFFF')) ) {
                    alt9=2;
                }


                switch (alt9) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5244:20: '\\\\' .
            	    {
            	    match('\\'); 
            	    matchAny(); 

            	    }
            	    break;
            	case 2 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5244:27: ~ ( ( '\\\\' | '\"' ) )
            	    {
            	    if ( (input.LA(1)>='\u0000' && input.LA(1)<='!')||(input.LA(1)>='#' && input.LA(1)<='[')||(input.LA(1)>=']' && input.LA(1)<='\uFFFF') ) {
            	        input.consume();

            	    }
            	    else {
            	        MismatchedSetException mse = new MismatchedSetException(null,input);
            	        recover(mse);
            	        throw mse;}


            	    }
            	    break;

            	default :
            	    break loop9;
                }
            } while (true);

            match('\"'); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "RULE_STRING"

    // $ANTLR start "RULE_ANY_OTHER"
    public final void mRULE_ANY_OTHER() throws RecognitionException {
        try {
            int _type = RULE_ANY_OTHER;
            int _channel = DEFAULT_TOKEN_CHANNEL;
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5246:16: ( . )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5246:18: .
            {
            matchAny(); 

            }

            state.type = _type;
            state.channel = _channel;
        }
        finally {
        }
    }
    // $ANTLR end "RULE_ANY_OTHER"

    public void mTokens() throws RecognitionException {
        // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:8: ( T__12 | T__13 | T__14 | T__15 | T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | T__30 | T__31 | T__32 | T__33 | T__34 | T__35 | T__36 | T__37 | T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | RULE_ID | RULE_WS | RULE_END_LINE | RULE_ML_COMMENT | RULE_SL_COMMENT | RULE_MULTI | RULE_STRING | RULE_ANY_OTHER )
        int alt10=52;
        alt10 = dfa10.predict(input);
        switch (alt10) {
            case 1 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:10: T__12
                {
                mT__12(); 

                }
                break;
            case 2 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:16: T__13
                {
                mT__13(); 

                }
                break;
            case 3 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:22: T__14
                {
                mT__14(); 

                }
                break;
            case 4 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:28: T__15
                {
                mT__15(); 

                }
                break;
            case 5 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:34: T__16
                {
                mT__16(); 

                }
                break;
            case 6 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:40: T__17
                {
                mT__17(); 

                }
                break;
            case 7 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:46: T__18
                {
                mT__18(); 

                }
                break;
            case 8 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:52: T__19
                {
                mT__19(); 

                }
                break;
            case 9 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:58: T__20
                {
                mT__20(); 

                }
                break;
            case 10 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:64: T__21
                {
                mT__21(); 

                }
                break;
            case 11 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:70: T__22
                {
                mT__22(); 

                }
                break;
            case 12 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:76: T__23
                {
                mT__23(); 

                }
                break;
            case 13 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:82: T__24
                {
                mT__24(); 

                }
                break;
            case 14 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:88: T__25
                {
                mT__25(); 

                }
                break;
            case 15 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:94: T__26
                {
                mT__26(); 

                }
                break;
            case 16 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:100: T__27
                {
                mT__27(); 

                }
                break;
            case 17 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:106: T__28
                {
                mT__28(); 

                }
                break;
            case 18 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:112: T__29
                {
                mT__29(); 

                }
                break;
            case 19 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:118: T__30
                {
                mT__30(); 

                }
                break;
            case 20 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:124: T__31
                {
                mT__31(); 

                }
                break;
            case 21 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:130: T__32
                {
                mT__32(); 

                }
                break;
            case 22 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:136: T__33
                {
                mT__33(); 

                }
                break;
            case 23 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:142: T__34
                {
                mT__34(); 

                }
                break;
            case 24 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:148: T__35
                {
                mT__35(); 

                }
                break;
            case 25 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:154: T__36
                {
                mT__36(); 

                }
                break;
            case 26 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:160: T__37
                {
                mT__37(); 

                }
                break;
            case 27 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:166: T__38
                {
                mT__38(); 

                }
                break;
            case 28 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:172: T__39
                {
                mT__39(); 

                }
                break;
            case 29 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:178: T__40
                {
                mT__40(); 

                }
                break;
            case 30 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:184: T__41
                {
                mT__41(); 

                }
                break;
            case 31 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:190: T__42
                {
                mT__42(); 

                }
                break;
            case 32 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:196: T__43
                {
                mT__43(); 

                }
                break;
            case 33 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:202: T__44
                {
                mT__44(); 

                }
                break;
            case 34 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:208: T__45
                {
                mT__45(); 

                }
                break;
            case 35 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:214: T__46
                {
                mT__46(); 

                }
                break;
            case 36 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:220: T__47
                {
                mT__47(); 

                }
                break;
            case 37 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:226: T__48
                {
                mT__48(); 

                }
                break;
            case 38 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:232: T__49
                {
                mT__49(); 

                }
                break;
            case 39 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:238: T__50
                {
                mT__50(); 

                }
                break;
            case 40 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:244: T__51
                {
                mT__51(); 

                }
                break;
            case 41 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:250: T__52
                {
                mT__52(); 

                }
                break;
            case 42 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:256: T__53
                {
                mT__53(); 

                }
                break;
            case 43 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:262: T__54
                {
                mT__54(); 

                }
                break;
            case 44 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:268: T__55
                {
                mT__55(); 

                }
                break;
            case 45 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:274: RULE_ID
                {
                mRULE_ID(); 

                }
                break;
            case 46 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:282: RULE_WS
                {
                mRULE_WS(); 

                }
                break;
            case 47 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:290: RULE_END_LINE
                {
                mRULE_END_LINE(); 

                }
                break;
            case 48 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:304: RULE_ML_COMMENT
                {
                mRULE_ML_COMMENT(); 

                }
                break;
            case 49 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:320: RULE_SL_COMMENT
                {
                mRULE_SL_COMMENT(); 

                }
                break;
            case 50 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:336: RULE_MULTI
                {
                mRULE_MULTI(); 

                }
                break;
            case 51 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:347: RULE_STRING
                {
                mRULE_STRING(); 

                }
                break;
            case 52 :
                // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1:359: RULE_ANY_OTHER
                {
                mRULE_ANY_OTHER(); 

                }
                break;

        }

    }


    protected DFA10 dfa10 = new DFA10(this);
    static final String DFA10_eotS =
        "\1\uffff\15\52\1\71\2\uffff\5\52\1\uffff\1\50\2\uffff\1\50\1\111"+
        "\2\uffff\1\115\1\uffff\1\120\2\uffff\1\122\2\uffff\2\50\1\uffff"+
        "\1\133\1\uffff\14\52\1\154\1\155\3\uffff\6\52\21\uffff\1\122\10"+
        "\uffff\3\52\1\171\14\52\2\uffff\6\52\2\uffff\1\u008e\1\u008f\1\52"+
        "\1\uffff\2\52\1\u0093\1\52\1\u0095\1\u0096\4\52\1\u009b\1\uffff"+
        "\1\u009c\1\u009d\4\52\4\uffff\1\u00a2\2\52\1\uffff\1\52\2\uffff"+
        "\3\52\1\u00a9\3\uffff\1\52\1\u00ab\1\u00ac\1\52\1\uffff\1\u00ae"+
        "\1\52\1\u00b0\1\u00b1\2\52\1\uffff\1\u00b4\2\uffff\1\52\1\uffff"+
        "\1\u00b6\2\uffff\1\u00b7\1\u00b8\1\uffff\1\52\3\uffff\1\u00ba\1"+
        "\uffff";
    static final String DFA10_eofS =
        "\u00bb\uffff";
    static final String DFA10_minS =
        "\1\0\1\160\1\157\1\145\1\151\3\157\1\164\1\156\1\141\1\154\1\156"+
        "\1\163\1\60\2\uffff\1\157\1\145\1\157\1\154\1\141\1\uffff\1\145"+
        "\2\uffff\1\74\1\76\2\uffff\1\135\1\uffff\1\76\2\uffff\1\11\2\uffff"+
        "\1\52\1\0\1\uffff\1\60\1\uffff\1\167\1\146\1\147\1\160\1\157\1\154"+
        "\1\156\1\162\1\164\1\143\1\141\1\144\2\60\3\uffff\1\144\1\143\1"+
        "\154\1\141\1\157\1\164\21\uffff\1\11\3\uffff\3\0\2\uffff\1\156\1"+
        "\164\1\150\1\60\1\164\2\154\1\142\2\145\1\151\1\145\1\153\1\163"+
        "\1\155\1\40\2\uffff\1\145\1\164\1\144\1\155\1\165\1\141\1\0\1\uffff"+
        "\2\60\1\164\1\uffff\1\157\1\145\1\60\1\145\2\60\1\156\1\147\1\141"+
        "\1\163\1\60\1\uffff\2\60\2\145\1\144\1\142\1\0\3\uffff\1\60\1\155"+
        "\1\141\1\uffff\1\162\2\uffff\1\147\1\145\1\147\1\60\3\uffff\1\162"+
        "\2\60\1\141\1\uffff\1\60\1\156\2\60\1\162\1\145\1\uffff\1\60\2\uffff"+
        "\1\163\1\uffff\1\60\2\uffff\2\60\1\uffff\1\145\3\uffff\1\60\1\uffff";
    static final String DFA10_maxS =
        "\1\uffff\1\160\1\157\1\145\1\151\2\157\1\165\1\164\1\156\1\141"+
        "\1\154\1\156\1\163\1\172\2\uffff\1\157\1\145\1\162\1\154\1\141\1"+
        "\uffff\1\163\2\uffff\1\74\1\76\2\uffff\1\135\1\uffff\1\76\2\uffff"+
        "\1\15\2\uffff\1\57\1\uffff\1\uffff\1\172\1\uffff\1\167\1\146\1\147"+
        "\1\160\1\164\1\155\1\164\1\162\1\164\1\143\1\141\1\165\2\172\3\uffff"+
        "\1\144\1\143\1\154\1\141\1\157\1\164\21\uffff\1\15\3\uffff\3\uffff"+
        "\2\uffff\1\156\1\164\1\150\1\172\1\164\2\154\1\142\2\145\1\151\1"+
        "\145\1\153\1\163\1\155\1\40\2\uffff\1\145\1\164\1\144\1\155\1\165"+
        "\1\141\1\uffff\1\uffff\2\172\1\164\1\uffff\1\157\1\145\1\172\1\145"+
        "\2\172\1\156\1\147\1\141\1\163\1\172\1\uffff\2\172\2\145\1\144\1"+
        "\142\1\uffff\3\uffff\1\172\1\155\1\141\1\uffff\1\162\2\uffff\1\147"+
        "\1\145\1\147\1\172\3\uffff\1\162\2\172\1\141\1\uffff\1\172\1\156"+
        "\2\172\1\162\1\145\1\uffff\1\172\2\uffff\1\163\1\uffff\1\172\2\uffff"+
        "\2\172\1\uffff\1\145\3\uffff\1\172\1\uffff";
    static final String DFA10_acceptS =
        "\17\uffff\1\22\1\23\5\uffff\1\33\1\uffff\1\37\1\40\2\uffff\1\43"+
        "\1\44\1\uffff\1\46\1\uffff\1\53\1\55\1\uffff\1\56\1\57\2\uffff\1"+
        "\64\1\uffff\1\55\16\uffff\1\34\1\22\1\23\6\uffff\1\33\1\35\1\36"+
        "\1\37\1\40\1\41\1\42\1\51\1\43\1\44\1\54\1\45\1\46\1\52\1\47\1\53"+
        "\1\56\1\uffff\1\57\1\60\1\61\3\uffff\1\63\1\1\20\uffff\1\20\1\21"+
        "\7\uffff\1\62\3\uffff\1\5\13\uffff\1\50\7\uffff\1\62\1\2\1\3\3\uffff"+
        "\1\7\1\uffff\1\17\1\32\4\uffff\1\16\1\24\1\25\4\uffff\1\4\6\uffff"+
        "\1\15\1\uffff\1\27\1\30\1\uffff\1\6\1\uffff\1\11\1\10\2\uffff\1"+
        "\26\1\uffff\1\13\1\12\1\14\1\uffff\1\31";
    static final String DFA10_specialS =
        "\1\6\46\uffff\1\5\57\uffff\1\0\1\2\1\4\32\uffff\1\3\27\uffff\1"+
        "\1\56\uffff}>";
    static final String[] DFA10_transitionS = {
            "\11\50\1\43\1\45\2\50\1\45\22\50\1\44\1\50\1\47\7\50\1\26\2"+
            "\50\1\34\1\35\1\46\12\50\1\17\1\50\1\32\1\41\1\33\1\20\1\27"+
            "\2\42\1\24\1\25\1\42\1\23\7\42\1\21\3\42\1\22\10\42\1\36\1\50"+
            "\1\37\1\50\1\42\1\50\1\15\1\6\1\13\1\2\1\14\3\42\1\11\2\42\1"+
            "\3\1\42\1\7\1\16\1\12\1\42\1\4\1\10\1\5\1\1\5\42\1\30\1\40\1"+
            "\31\uff82\50",
            "\1\51",
            "\1\53",
            "\1\54",
            "\1\55",
            "\1\56",
            "\1\57",
            "\1\61\5\uffff\1\60",
            "\1\62",
            "\1\63",
            "\1\64",
            "\1\65",
            "\1\66",
            "\1\67",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\5\52\1\70\24\52",
            "",
            "",
            "\1\74",
            "\1\75",
            "\1\76\2\uffff\1\77",
            "\1\100",
            "\1\101",
            "",
            "\1\104\15\uffff\1\103",
            "",
            "",
            "\1\107",
            "\1\110",
            "",
            "",
            "\1\114",
            "",
            "\1\117",
            "",
            "",
            "\1\123\1\124\2\uffff\1\124",
            "",
            "",
            "\1\125\4\uffff\1\126",
            "\52\132\1\131\5\132\1\130\1\127\uffce\132",
            "",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "",
            "\1\134",
            "\1\135",
            "\1\136",
            "\1\137",
            "\1\141\4\uffff\1\140",
            "\1\142\1\143",
            "\1\145\5\uffff\1\144",
            "\1\146",
            "\1\147",
            "\1\150",
            "\1\151",
            "\1\153\20\uffff\1\152",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "",
            "",
            "",
            "\1\156",
            "\1\157",
            "\1\160",
            "\1\161",
            "\1\162",
            "\1\163",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\1\123\1\124\2\uffff\1\124",
            "",
            "",
            "",
            "\42\132\1\165\13\132\1\164\uffd1\132",
            "\56\132\1\164\uffd1\132",
            "\42\132\1\165\uffdd\132",
            "",
            "",
            "\1\166",
            "\1\167",
            "\1\170",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\1\172",
            "\1\173",
            "\1\174",
            "\1\175",
            "\1\176",
            "\1\177",
            "\1\u0080",
            "\1\u0081",
            "\1\u0082",
            "\1\u0083",
            "\1\u0084",
            "\1\u0085",
            "",
            "",
            "\1\u0086",
            "\1\u0087",
            "\1\u0088",
            "\1\u0089",
            "\1\u008a",
            "\1\u008b",
            "\56\132\1\u008c\uffd1\132",
            "",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\1\u0090",
            "",
            "\1\u0091",
            "\1\u0092",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\1\u0094",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\1\u0097",
            "\1\u0098",
            "\1\u0099",
            "\1\u009a",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\1\u009e",
            "\1\u009f",
            "\1\u00a0",
            "\1\u00a1",
            "\52\132\1\131\6\132\1\131\uffce\132",
            "",
            "",
            "",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\1\u00a3",
            "\1\u00a4",
            "",
            "\1\u00a5",
            "",
            "",
            "\1\u00a6",
            "\1\u00a7",
            "\1\u00a8",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "",
            "",
            "",
            "\1\u00aa",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\1\u00ad",
            "",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\1\u00af",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\1\u00b2",
            "\1\u00b3",
            "",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "",
            "",
            "\1\u00b5",
            "",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "",
            "",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            "",
            "\1\u00b9",
            "",
            "",
            "",
            "\12\52\7\uffff\32\52\4\uffff\1\52\1\uffff\32\52",
            ""
    };

    static final short[] DFA10_eot = DFA.unpackEncodedString(DFA10_eotS);
    static final short[] DFA10_eof = DFA.unpackEncodedString(DFA10_eofS);
    static final char[] DFA10_min = DFA.unpackEncodedStringToUnsignedChars(DFA10_minS);
    static final char[] DFA10_max = DFA.unpackEncodedStringToUnsignedChars(DFA10_maxS);
    static final short[] DFA10_accept = DFA.unpackEncodedString(DFA10_acceptS);
    static final short[] DFA10_special = DFA.unpackEncodedString(DFA10_specialS);
    static final short[][] DFA10_transition;

    static {
        int numStates = DFA10_transitionS.length;
        DFA10_transition = new short[numStates][];
        for (int i=0; i<numStates; i++) {
            DFA10_transition[i] = DFA.unpackEncodedString(DFA10_transitionS[i]);
        }
    }

    class DFA10 extends DFA {

        public DFA10(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 10;
            this.eot = DFA10_eot;
            this.eof = DFA10_eof;
            this.min = DFA10_min;
            this.max = DFA10_max;
            this.accept = DFA10_accept;
            this.special = DFA10_special;
            this.transition = DFA10_transition;
        }
        public String getDescription() {
            return "1:1: Tokens : ( T__12 | T__13 | T__14 | T__15 | T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | T__30 | T__31 | T__32 | T__33 | T__34 | T__35 | T__36 | T__37 | T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | RULE_ID | RULE_WS | RULE_END_LINE | RULE_ML_COMMENT | RULE_SL_COMMENT | RULE_MULTI | RULE_STRING | RULE_ANY_OTHER );";
        }
        public int specialStateTransition(int s, IntStream _input) throws NoViableAltException {
            IntStream input = _input;
        	int _s = s;
            switch ( s ) {
                    case 0 : 
                        int LA10_87 = input.LA(1);

                        s = -1;
                        if ( (LA10_87=='.') ) {s = 116;}

                        else if ( (LA10_87=='\"') ) {s = 117;}

                        else if ( ((LA10_87>='\u0000' && LA10_87<='!')||(LA10_87>='#' && LA10_87<='-')||(LA10_87>='/' && LA10_87<='\uFFFF')) ) {s = 90;}

                        if ( s>=0 ) return s;
                        break;
                    case 1 : 
                        int LA10_140 = input.LA(1);

                        s = -1;
                        if ( (LA10_140=='*'||LA10_140=='1') ) {s = 89;}

                        else if ( ((LA10_140>='\u0000' && LA10_140<=')')||(LA10_140>='+' && LA10_140<='0')||(LA10_140>='2' && LA10_140<='\uFFFF')) ) {s = 90;}

                        if ( s>=0 ) return s;
                        break;
                    case 2 : 
                        int LA10_88 = input.LA(1);

                        s = -1;
                        if ( (LA10_88=='.') ) {s = 116;}

                        else if ( ((LA10_88>='\u0000' && LA10_88<='-')||(LA10_88>='/' && LA10_88<='\uFFFF')) ) {s = 90;}

                        if ( s>=0 ) return s;
                        break;
                    case 3 : 
                        int LA10_116 = input.LA(1);

                        s = -1;
                        if ( (LA10_116=='.') ) {s = 140;}

                        else if ( ((LA10_116>='\u0000' && LA10_116<='-')||(LA10_116>='/' && LA10_116<='\uFFFF')) ) {s = 90;}

                        if ( s>=0 ) return s;
                        break;
                    case 4 : 
                        int LA10_89 = input.LA(1);

                        s = -1;
                        if ( (LA10_89=='\"') ) {s = 117;}

                        else if ( ((LA10_89>='\u0000' && LA10_89<='!')||(LA10_89>='#' && LA10_89<='\uFFFF')) ) {s = 90;}

                        if ( s>=0 ) return s;
                        break;
                    case 5 : 
                        int LA10_39 = input.LA(1);

                        s = -1;
                        if ( (LA10_39=='1') ) {s = 87;}

                        else if ( (LA10_39=='0') ) {s = 88;}

                        else if ( (LA10_39=='*') ) {s = 89;}

                        else if ( ((LA10_39>='\u0000' && LA10_39<=')')||(LA10_39>='+' && LA10_39<='/')||(LA10_39>='2' && LA10_39<='\uFFFF')) ) {s = 90;}

                        else s = 40;

                        if ( s>=0 ) return s;
                        break;
                    case 6 : 
                        int LA10_0 = input.LA(1);

                        s = -1;
                        if ( (LA10_0=='u') ) {s = 1;}

                        else if ( (LA10_0=='d') ) {s = 2;}

                        else if ( (LA10_0=='l') ) {s = 3;}

                        else if ( (LA10_0=='r') ) {s = 4;}

                        else if ( (LA10_0=='t') ) {s = 5;}

                        else if ( (LA10_0=='b') ) {s = 6;}

                        else if ( (LA10_0=='n') ) {s = 7;}

                        else if ( (LA10_0=='s') ) {s = 8;}

                        else if ( (LA10_0=='i') ) {s = 9;}

                        else if ( (LA10_0=='p') ) {s = 10;}

                        else if ( (LA10_0=='c') ) {s = 11;}

                        else if ( (LA10_0=='e') ) {s = 12;}

                        else if ( (LA10_0=='a') ) {s = 13;}

                        else if ( (LA10_0=='o') ) {s = 14;}

                        else if ( (LA10_0==':') ) {s = 15;}

                        else if ( (LA10_0=='?') ) {s = 16;}

                        else if ( (LA10_0=='N') ) {s = 17;}

                        else if ( (LA10_0=='R') ) {s = 18;}

                        else if ( (LA10_0=='F') ) {s = 19;}

                        else if ( (LA10_0=='C') ) {s = 20;}

                        else if ( (LA10_0=='D') ) {s = 21;}

                        else if ( (LA10_0=='*') ) {s = 22;}

                        else if ( (LA10_0=='@') ) {s = 23;}

                        else if ( (LA10_0=='{') ) {s = 24;}

                        else if ( (LA10_0=='}') ) {s = 25;}

                        else if ( (LA10_0=='<') ) {s = 26;}

                        else if ( (LA10_0=='>') ) {s = 27;}

                        else if ( (LA10_0=='-') ) {s = 28;}

                        else if ( (LA10_0=='.') ) {s = 29;}

                        else if ( (LA10_0=='[') ) {s = 30;}

                        else if ( (LA10_0==']') ) {s = 31;}

                        else if ( (LA10_0=='|') ) {s = 32;}

                        else if ( (LA10_0=='=') ) {s = 33;}

                        else if ( ((LA10_0>='A' && LA10_0<='B')||LA10_0=='E'||(LA10_0>='G' && LA10_0<='M')||(LA10_0>='O' && LA10_0<='Q')||(LA10_0>='S' && LA10_0<='Z')||LA10_0=='_'||(LA10_0>='f' && LA10_0<='h')||(LA10_0>='j' && LA10_0<='k')||LA10_0=='m'||LA10_0=='q'||(LA10_0>='v' && LA10_0<='z')) ) {s = 34;}

                        else if ( (LA10_0=='\t') ) {s = 35;}

                        else if ( (LA10_0==' ') ) {s = 36;}

                        else if ( (LA10_0=='\n'||LA10_0=='\r') ) {s = 37;}

                        else if ( (LA10_0=='/') ) {s = 38;}

                        else if ( (LA10_0=='\"') ) {s = 39;}

                        else if ( ((LA10_0>='\u0000' && LA10_0<='\b')||(LA10_0>='\u000B' && LA10_0<='\f')||(LA10_0>='\u000E' && LA10_0<='\u001F')||LA10_0=='!'||(LA10_0>='#' && LA10_0<=')')||(LA10_0>='+' && LA10_0<=',')||(LA10_0>='0' && LA10_0<='9')||LA10_0==';'||LA10_0=='\\'||LA10_0=='^'||LA10_0=='`'||(LA10_0>='~' && LA10_0<='\uFFFF')) ) {s = 40;}

                        if ( s>=0 ) return s;
                        break;
            }
            NoViableAltException nvae =
                new NoViableAltException(getDescription(), 10, _s, input);
            error(nvae);
            throw nvae;
        }
    }
 

}