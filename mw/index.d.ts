import "./Api";
import "./language";
import "./util";
import "./user";
import "./loader";
import "./Map";
import "./Title";
import "./Uri";
import "./hook";
import "./storage";
import "./notification";
import "./message";

declare global {
    /**
     * Base library for MediaWiki.
     *
     * Exposed globally as `mw`, with `mediaWiki` as alias.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw
     */
    namespace mw {
        /**
         * Map of configuration values.
         *
         * Check out [the complete list of configuration values](https://www.mediawiki.org/wiki/Manual:Interface/JavaScript#mw.config)
         * on mediawiki.org.
         *
         * If `$wgLegacyJavaScriptGlobals` is true, this Map will add its values to the
         * global `window` object.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-property-config
         */
        const config: mw.Map<{
            debug: boolean;
            skin: string;
            stylepath: string;
            wgArticlePath: string;
            wgCaseSensitiveNamespaces: string[];
            wgContentLanguage: string;
            wgContentNamespaces: number[];
            wgDBname: string;
            wgEnableAPI: boolean;
            wgEnableWriteAPI: boolean;
            wgExtensionAssetsPath: string;
            wgFormattedNamespaces: Record<string, string>;
            wgNamespaceIds: Record<string, string>;
            wgScript: string;
            wgScriptPath: string;
            wgServer: string;
            wgSiteName: string;
            wgVariantArticlePath: string | false;
            wgVersion: string;
            wgAction: string;
            wgArticleId: number;
            wgCanonicalNamespace: string;
            wgCanonicalSpecialPageName: string | false;
            wgCategories: string[];
            wgCurRevisionId: number;
            wgIsArticle: boolean;
            wgIsProbablyEditable: boolean;
            wgNamespaceNumber: number;
            wgPageContentLanguage: string;
            wgPageContentModel: string;
            wgPageName: string;
            wgRedirectedFrom: string;
            wgRelevantPageName: string;
            wgRelevantUserName: string;
            wgRelevantPageIsProbablyEditable: boolean;
            wgRestrictionEdit: string[];
            wgRestrictionMove: string[];
            wgRevisionId: number;
            wgSearchType: string;
            wgTitle: string;
            wgUserEditCount: number;
            wgUserGroups: string[];
            wgUserId: number;
            wgUserLanguage: string;
            wgUserName: string;
            wgUserRegistration: number;
            wgIsMainPage: boolean;
            wgUserVariant: string;
            wgPostEdit: string;
            wgDiffOldId: number;
            wgDiffNewId: number;
            wgWikibaseItemId: string;
            [key: string]: any; // more config keys can be added by plugins
        }>;

        namespace html {
            function escape(s: string): string;

            function element(name: string, attrs?: any, contents?: string): string;
        }

        namespace log {
            function deprecate(
                obj: any,
                key: string,
                val: any,
                msg?: string,
                logName?: string
            ): void;

            function error(...msg: any[]): void;

            function warn(...msg: string[]): void;
        }

        // types for mw.widgets are out of scope!
        const widgets: any;
    }
}

export {};
