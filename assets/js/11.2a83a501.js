(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{361:function(e,t,o){"use strict";o.r(t);var n=o(25),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"app-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#app-components"}},[e._v("#")]),e._v(" App Components")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Table of Contents")]),e._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#what-are-the-app-components"}},[e._v("What are the app components?")])]),o("li",[o("a",{attrs:{href:"#why-are-the-components-blocked-by-am-not-detected-by-other-related-apps"}},[e._v("Why are the components blocked by AM not detected by other related apps?")])]),o("li",[o("a",{attrs:{href:"#does-app-components-blocked-by-other-tools-retained-in-am"}},[e._v("Does app components blocked by other tools retained in AM?")])]),o("li",[o("a",{attrs:{href:"#what-happened-to-the-components-blocked-by-am-which-are-also-blocked-by-other-tools"}},[e._v("What happened to the components blocked by AM which are also blocked by other tools?")])]),o("li",[o("a",{attrs:{href:"#what-is-global-component-blocking"}},[e._v("What is global component blocking?")])]),o("li",[o("a",{attrs:{href:"#tracker-classes-versus-tracker-components"}},[e._v("Tracker classes versus tracker components")])]),o("li",[o("a",{attrs:{href:"#how-to-unblock-the-tracker-components-blocked-using-1-click-ops-or-batch-ops"}},[e._v("How to unblock the tracker components blocked using 1-Click Ops or Batch Ops?")])])])]),o("p")]),e._v(" "),o("h2",{attrs:{id:"what-are-the-app-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-app-components"}},[e._v("#")]),e._v(" What are the app components?")]),e._v(" "),o("p",[e._v("Activities, services, broadcast receivers (also known as receivers) and content providers (also known as providers) are combinedly called app components. More technically, they all inherit the "),o("code",[e._v("ComponentInfo")]),e._v(" class.")]),e._v(" "),o("h2",{attrs:{id:"why-are-the-components-blocked-by-am-not-detected-by-other-related-apps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-are-the-components-blocked-by-am-not-detected-by-other-related-apps"}},[e._v("#")]),e._v(" Why are the components blocked by AM not detected by other related apps?")]),e._v(" "),o("p",[e._v("It is because of the blocking method I'm using. This method is called "),o("a",{attrs:{href:"https://carteryagemann.com/pages/android-intent-firewall.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intent Firewall"),o("OutboundLink")],1),e._v(" (IFW) and is compatible with "),o("a",{attrs:{href:"https://github.com/tuyafeng/Watt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Watt"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/lihenggui/blocker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blocker"),o("OutboundLink")],1),e._v(". "),o("a",{attrs:{href:"https://www.myandroidtools.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("MyAndroidTool"),o("OutboundLink")],1),e._v(" (MAT) supports IFW but it uses a different format. There are other methods for blocking app components such as "),o("em",[e._v("pm")]),e._v(" and "),o("a",{attrs:{href:"https://github.com/RikkaApps/Shizuku",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shizuku"),o("OutboundLink")],1),e._v(". If an app component is blocked using these latter methods, the affected app can identify it and can unblock it as it has full access to its own components. Many deceptive apps actually exploit this in order to keep the tracker components unblocked.")]),e._v(" "),o("h2",{attrs:{id:"does-app-components-blocked-by-other-tools-retained-in-am"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#does-app-components-blocked-by-other-tools-retained-in-am"}},[e._v("#")]),e._v(" Does app components blocked by other tools retained in AM?")]),e._v(" "),o("p",[o("strong",[e._v("No.")]),e._v(" But components blocked by the Android System or any other tools are displayed in the "),o("RouterLink",{attrs:{to:"/guide/app-details-page.html#color-codes"}},[e._v("App Details")]),e._v(" page (within the component tabs). From v2.5.12, you can import these rules in "),o("RouterLink",{attrs:{to:"/guide/settings-page.html#import-existing-rules"}},[e._v("Settings")]),e._v(". But since there is no way to distinguish between components blocked by third-party apps and components blocked by the System, you should be very careful when choosing app.")],1),e._v(" "),o("h2",{attrs:{id:"what-happened-to-the-components-blocked-by-am-which-are-also-blocked-by-other-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-happened-to-the-components-blocked-by-am-which-are-also-blocked-by-other-tools"}},[e._v("#")]),e._v(" What happened to the components blocked by AM which are also blocked by other tools?")]),e._v(" "),o("p",[e._v("AM blocks the components again using "),o("a",{attrs:{href:"https://carteryagemann.com/pages/android-intent-firewall.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intent Firewall"),o("OutboundLink")],1),e._v(" (IFW). They are not unblocked (if blocked using "),o("em",[e._v("pm")]),e._v(" or "),o("a",{attrs:{href:"https://github.com/RikkaApps/Shizuku",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shizuku"),o("OutboundLink")],1),e._v(" method) and blocked again. But if you unblock a component in the "),o("RouterLink",{attrs:{to:"/guide/app-details-page.html"}},[e._v("App Details")]),e._v(" page, it will be reverted back to default state — blocked or unblocked as described in the corresponding app manifest — using both IFW and "),o("em",[e._v("pm")]),e._v(" method. However, components blocked by "),o("a",{attrs:{href:"https://www.myandroidtools.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("MyAndroidTools"),o("OutboundLink")],1),e._v(" (MAT) with IFW method will not be unblocked by AM. To solve this issue, you can first import the corresponding configuration to AM in "),o("RouterLink",{attrs:{to:"/guide/settings-page.html#import-existing-rules"}},[e._v("Settings")]),e._v(" in which case MAT's configurations will be removed. But this option is only available from v2.5.12.")],1),e._v(" "),o("h2",{attrs:{id:"what-is-global-component-blocking"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-global-component-blocking"}},[e._v("#")]),e._v(" What is global component blocking?")]),e._v(" "),o("p",[e._v("When you block a component in the "),o("RouterLink",{attrs:{to:"/guide/app-details-page.html"}},[e._v("App Details")]),e._v(" page, the blocking is not applied by default. It is only applied when you apply blocking using the "),o("em",[e._v("Apply rules")]),e._v(" option in the top-right menu. If you enable "),o("em",[e._v("global component blocking")]),e._v(", blocking will be applied as soon as you block a component. If you choose to block tracker components, however, blocking is applied automatically regardless of this setting. You can also remove blocking for an app by simply clicking on "),o("em",[e._v("Remove rules")]),e._v(" in the same menu in the "),o("strong",[e._v("App Details")]),e._v(" page. Since the default behaviour gives you more control over apps, it is better to keep "),o("em",[e._v("global component blocking")]),e._v(" option disabled.")],1),e._v(" "),o("p",[o("em",[e._v("See also: "),o("RouterLink",{attrs:{to:"/guide/settings-page.html#global-component-blocking"}},[e._v("Global Component Blocking")])],1)]),e._v(" "),o("h2",{attrs:{id:"tracker-classes-versus-tracker-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tracker-classes-versus-tracker-components"}},[e._v("#")]),e._v(" Tracker classes versus tracker components")]),e._v(" "),o("p",[e._v("All app components are classes but not all classes are components. In fact, only a few of the classes are components. That being said, "),o("RouterLink",{attrs:{to:"/guide/scanner-page.html"}},[e._v("scanner page")]),e._v(" displays a list of trackers along with the number of classes, not just the components. In all other pages, trackers and tracker components are used synonymously to denote tracker components, i.e. blocking tracker means blocking tracker components, not tracker classes.")],1),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Info")]),e._v(" "),o("p",[e._v("Tracker classes cannot be blocked. They can only be removed by editing the app itself.")])]),e._v(" "),o("h2",{attrs:{id:"how-to-unblock-the-tracker-components-blocked-using-1-click-ops-or-batch-ops"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-unblock-the-tracker-components-blocked-using-1-click-ops-or-batch-ops"}},[e._v("#")]),e._v(" How to unblock the tracker components blocked using 1-Click Ops or Batch Ops?")]),e._v(" "),o("p",[e._v("Some apps may misbehave due to their dependency to tracker components blocked by AM. From v2.5.12, there is an option to unblock tracker components in the "),o("RouterLink",{attrs:{to:"/guide/one-click-ops-page.html"}},[e._v("1-Click Ops")]),e._v(" page. However, in previous versions, there is no such options. To unblock these tracker components, first go to the "),o("RouterLink",{attrs:{to:"/guide/app-details-page.html"}},[e._v("App Details")]),e._v(" page of the misbehaving app. Then, switching to the "),o("em",[e._v("Activities")]),e._v(" tab, click on the "),o("em",[e._v("Remove rules")]),e._v(" options in the top-right menu. All the blocking rules related to the components of the app will be removed immediately. Alternatively, If you have found the component that is causing the issue, you can unblock the component by clicking on the "),o("em",[e._v("unblock")]),e._v(" button next to the component name. If you have enabled "),o("em",[e._v("global component blocking")]),e._v(" in Settings, disable it first as "),o("em",[e._v("Remove rules")]),e._v(" option will not be visible when it is enabled.")],1),e._v(" "),o("p",[e._v("If you have "),o("strong",[e._v("Google Play Services")]),e._v(" ("),o("code",[e._v("com.google.android.gms")]),e._v(") installed, unblocking the following "),o("RouterLink",{attrs:{to:"/guide/app-details-page.html#services"}},[e._v("services")]),e._v(" may fix the problem:")],1),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Ad Request Broker Service")]),o("br"),e._v(" "),o("code",[e._v(".ads.AdRequestBrokerService")])]),e._v(" "),o("li",[o("strong",[e._v("Cache Broker Service")]),o("br"),e._v(" "),o("code",[e._v(".ads.cache.CacheBrokerService")])]),e._v(" "),o("li",[o("strong",[e._v("Gservices Value Broker Service")]),o("br"),e._v(" "),o("code",[e._v(".ads.GservicesValueBrokerService")])]),e._v(" "),o("li",[o("strong",[e._v("Advertising Id Notification Service")]),o("br"),e._v(" "),o("code",[e._v(".ads.identifier.service.AdvertisingIdNotificationService")])]),e._v(" "),o("li",[o("strong",[e._v("Advertising Id Service")]),o("br"),e._v(" "),o("code",[e._v(".ads.identifier.service.AdvertisingIdService")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);