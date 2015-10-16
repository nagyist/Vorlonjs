module VORLON.WebStandards.Rules.Files {
    export var contentEncoding = <IFileRule>{
        id: "performances.contentencoding",
        title: "encode static content",
        description: "content encoding like gzip or deflate helps reducing the network bandwith required to display your website, it is especially important for mobile devices. Use content encoding for static files like CSS and JavaScript files.",
       
        check: function(rulecheck: any, analyzeSummary: any) {
            rulecheck.items = rulecheck.items || [];
            
            for (var n in analyzeSummary.files.stylesheets){                
                if (analyzeSummary.files.stylesheets[n].encoding && analyzeSummary.files.stylesheets[n].encoding == "none"){
                    rulecheck.failed = true;
                    rulecheck.items.push({
                        title : "use content encoding for " + n
                    });
                }                
            }
            
            for (var n in analyzeSummary.files.scripts){                
                if (analyzeSummary.files.scripts[n].encoding && analyzeSummary.files.scripts[n].encoding == "none"){
                    rulecheck.failed = true;
                    rulecheck.items.push({
                        title : "use content encoding for " + n
                    });
                }
            }
        }
    }
}
