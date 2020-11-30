(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{391:function(e,t,a){"use strict";a.r(t);var s=a(25),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"app-manager-rules-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-manager-rules-specification"}},[e._v("#")]),e._v(" App Manager: Rules Specification")]),e._v(" "),a("p",[a("em",[e._v("Go to the "),a("a",{attrs:{href:"https://github.com/MuntashirAkon/AppManager/issues/24",target:"_blank",rel:"noopener noreferrer"}},[e._v("related issue"),a("OutboundLink")],1),e._v(" for discussion.")])]),e._v(" "),a("p",[a("strong",[e._v("App Manager")]),e._v(" currently supports blocking activities, broadcast receivers, content providers, services, app ops and permissions, and in future I may add more blocking options. In order to add more portability, it is necessary to import/export all these data.")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Table of Contents")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#background"}},[e._v("Background")])]),a("li",[a("a",{attrs:{href:"#rules-file-format"}},[e._v("Rules File Format")]),a("ul",[a("li",[a("a",{attrs:{href:"#internal"}},[e._v("Internal")])]),a("li",[a("a",{attrs:{href:"#external"}},[e._v("External")])])])])])]),a("p")]),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("All configuration files are stored at "),a("tt",[e._v("/data/data/io.github.muntashirakon.AppManager/Files/conf")]),e._v(", and "),a("tt",[e._v("/sdcard/Android/data/io.github.muntashirakon.AppManager/Files/ifw")]),e._v(" is used as a temporary storage. The latter directory is kept to provide compatibility for App Manager v2.5.5 or older as well. This latter directory will be removed in v2.6 as it is not secured to store sensitive data in the shared storage as any app having access to these directories can create or modify these files.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("From v2.5.6, this latter directory is mostly kept for temporary storage. If you're upgrading from v2.5.5 or older versions, make sure to apply "),a("RouterLink",{attrs:{to:"/guide/settings-page.html#global-component-blocking"}},[e._v("Global Component Blocking")]),e._v(" which will import all the rules from this directory automatically (you can later disable this option).")],1)]),e._v(" "),a("p",[e._v("Maintaining a database should be the best choice when it comes to storing data. But for now, I'll be using several "),a("code",[e._v("tsv")]),e._v(" files with each file having the name of the package and a "),a("code",[e._v(".tsv")]),e._v(" extension. The file/database will be queried/processed by the "),a("code",[e._v("RulesStorageManager")]),e._v(" class. Due to this abstraction, it should be easier to switch to database or encrypted database systems in future without changing the design of the entire project.")]),e._v(" "),a("h2",{attrs:{id:"rules-file-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules-file-format"}},[e._v("#")]),e._v(" Rules File Format")]),e._v(" "),a("h3",{attrs:{id:"internal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal"}},[e._v("#")]),e._v(" Internal")]),e._v(" "),a("p",[e._v("The format below is used internally within App Manager and "),a("em",[e._v("is not compatible with the external format.")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<name> <type> <mode>|<component_status>|<is_granted>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Where:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<name>")]),e._v(" - Component/permission/app op name (in case of app op, it could be string or integer)")]),e._v(" "),a("li",[a("code",[e._v("<type>")]),e._v(" - One of the "),a("code",[e._v("ACTIVITY")]),e._v(", "),a("code",[e._v("RECEIVER")]),e._v(", "),a("code",[e._v("PROVIDER")]),e._v(", "),a("code",[e._v("SERVICE")]),e._v(", "),a("code",[e._v("APP_OP")]),e._v(",  "),a("code",[e._v("PERMISSION")])]),e._v(" "),a("li",[a("code",[e._v("<mode>")]),e._v(" - (For app ops) The associated "),a("RouterLink",{attrs:{to:"/tech/AppOps.html#mode-constants"}},[e._v("mode constant")])],1),e._v(" "),a("li",[a("code",[e._v("<component_status>")]),e._v(" - (For components) Component status\n"),a("ul",[a("li",[a("code",[e._v("true")]),e._v(" - Component has been applied ("),a("code",[e._v("true")]),e._v(" value is kept for compatibility)")]),e._v(" "),a("li",[a("code",[e._v("false")]),e._v(" - Component hasn't been applied yet, but will be applied in future ("),a("code",[e._v("false")]),e._v(" value is kept for compatibility)")]),e._v(" "),a("li",[a("code",[e._v("unblocked")]),e._v(" - Component is scheduled to be unblocked")])])]),e._v(" "),a("li",[a("code",[e._v("<is_granted>")]),e._v(" - (For permissions) Whether the permission is granted or revoked")])]),e._v(" "),a("h3",{attrs:{id:"external"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external"}},[e._v("#")]),e._v(" External")]),e._v(" "),a("p",[e._v("External format is used for importing or exporting rules in App Manager.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<package_name> <component_name> <type> <mode>|<component_status>|<is_granted>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This the format is essentially the same as above except for the first item which is the name of the package.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Caution")]),e._v(" "),a("p",[e._v("The exprted rules have a different format than the internal one and should not be copied directly to the "),a("strong",[e._v("conf")]),e._v(" folder.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);