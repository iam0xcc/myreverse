

function hook_specific_method_of_class(className, funcName)
{
    var hook = ObjC.classes[className][funcName];
    Interceptor.attach(hook.implementation, {
      onEnter: function(args) {
        // args[0] is self
        // args[1] is selector (SEL "sendMessageWithText:")
        // args[2] holds the first function argument, an NSString
        var lr = this.context.lr;
        var m = Process.findModuleByAddress(lr)

		var log = "";
		console.log("\n");
		console.log("\n");
		xbacktrace("***************************************************************************")
        log = log + ("[*] Detected call xx to: " + className + " -> " + funcName) + "\n";
        log = log + "\t===called"  + "\n";
        //For viewing and manipulating arguments
        log = log + "\t[-] Value1: "+ObjC.Object(args[2])+ "\n";
        log = log + "\t[-] Value2: "+(ObjC.Object(args[2])).toString() + "\n";
        log = log + "\t[-] lr: "+ ptr(lr).sub(m.base) + "\n";
		console.log(log);
        // console.log(args[2]);
      }
    });
}


function hookOpenUrl()
{
    // (agent) Watching method: - openURL:options:completionHandler:
    // (agent) Watching method: - canOpenURL:
    // (agent) Watching method: - _applicationOpenURLAction:payload:origin:
    // (agent) Watching method: - _shouldAttemptOpenURL:
    // (agent) Watching method: - _urlWithSettingsPrivateURLSchemeIfNeeded:
    // (agent) Watching method: - openURL:
    // (agent) Watching method: - _openURL:
    // (agent) Watching method: - _canOpenURL:publicURLsOnly:
    // (agent) Watching method: - applicationOpenToShortCut:
    // (agent) Watching method: - applicationOpenURL:
    // (agent) Watching method: - openURL:withCompletionHandler:
    // (agent) Watching method: - _applicationOpenURL:payload:
    // (agent) Watching method: - _openURL:originatingView:completionHandler:



    hook_specific_method_of_class("UIApplication","- openURL:options:completionHandler:");
    hook_specific_method_of_class("UIApplication","- _applicationOpenURLAction:payload:origin:");
    hook_specific_method_of_class("UIApplication","- openURL:");
    hook_specific_method_of_class("UIApplication","- canOpenURL:");
    hook_specific_method_of_class("UIApplication","- applicationOpenURL:");
    hook_specific_method_of_class("UIApplication","- openURL:withCompletionHandler:");
    hook_specific_method_of_class("UIApplication","- _applicationOpenURL:payload:");
    hook_specific_method_of_class("UIApplication","- _openURL:originatingView:completionHandler:");





    // var openURL = ObjC.classes["UIApplication"]["- openURL:options:completionHandler:"];
    // Interceptor.attach(openURL.implementation, {
    //   onEnter: function(args) {
    //     // args[0] is self
    //     // args[1] is selector (SEL "sendMessageWithText:")
    //     // args[2] holds the first function argument, an NSString
    //     console.log("[*] Detected call to: " + openURL + " -> " + "- openURL:options:completionHandler:");
    //     //For viewing and manipulating arguments
    //     console.log("\t[-] Value1: "+ObjC.Object(args[2]));
    //     console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
    //     //console.log(args[2]);
    //   }
    // });



}
