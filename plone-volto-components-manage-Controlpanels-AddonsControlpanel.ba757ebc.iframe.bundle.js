(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[7780],{"./src/components/manage/Controlpanels/AddonsControlpanel.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("../../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.2.0/node_modules/react-router-dom/esm/react-router-dom.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),_plone_volto_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Message/Message.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Header/Header.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Label/Label.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Accordion/Accordion.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),react_intl__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/useIntl.js"),react_intl__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/message.js"),_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/actions/index.js"),_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/helpers/index.js"),_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/index.js"),_plone_volto_icons_circle_bottom_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/icons/circle-bottom.svg"),_plone_volto_icons_circle_bottom_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_plone_volto_icons_circle_bottom_svg__WEBPACK_IMPORTED_MODULE_7__),_plone_volto_icons_circle_top_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/icons/circle-top.svg"),_plone_volto_icons_circle_top_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_plone_volto_icons_circle_top_svg__WEBPACK_IMPORTED_MODULE_8__),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/icons/back.svg"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_9__),react_toastify__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/.pnpm/react-toastify@5.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-toastify/esm/react-toastify.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({activateAndDeactivate:{id:"Activate and deactivate",defaultMessage:"Activate and deactivate add-ons in the lists below."},addAddons:{id:"Add Addons",defaultMessage:"To make new add-ons show up here, add them to your configuration, build, and restart the server process. For detailed instructions see"},addonsSettings:{id:"Add-ons Settings",defaultMessage:"Add-ons Settings"},available:{id:"Available",defaultMessage:"Available"},availableVersion:{id:"Latest version",defaultMessage:"Latest version"},back:{id:"Back",defaultMessage:"Back"},installed:{id:"Installed",defaultMessage:"Installed"},installedVersion:{id:"Installed version",defaultMessage:"Installed version"},noUninstallProfile:{id:"No uninstall profile",defaultMessage:"This addon does not provide an uninstall profile."},update:{id:"Update",defaultMessage:"Update"},updatesAvailable:{id:"Updates available",defaultMessage:"Updates available"},updateInstalledAddons:{id:"Update installed addons:",defaultMessage:"Update installed addons:"},uninstall:{id:"Uninstall",defaultMessage:"Uninstall"},addOns:{id:"Add-ons",defaultMessage:"Add-ons"},installingAnAddon:{id:"Installing a third party add-on",defaultMessage:"Installing a third party add-on"},success:{id:"Success",defaultMessage:"Success"},error:{id:"Error",defaultMessage:"Error"},addonUpgraded:{id:"Addon upgraded succesfuly",defaultMessage:"Addon upgraded succesfuly"},addonNotUpgraded:{id:"Addon could not be upgraded",defaultMessage:"Addon could not be upgraded"},addonInstalled:{id:"Addon installed succesfuly",defaultMessage:"Addon installed succesfuly"},addonNotInstalled:{id:"Addon could not be installed",defaultMessage:"Addon could not be installed"},addonUninstalled:{id:"Addon uninstalled succesfuly",defaultMessage:"Addon uninstalled succesfuly"},addonNotUninstalled:{id:"Addon could not be uninstalled",defaultMessage:"Addon could not be uninstalled"}}),AddonsControlpanel=props=>{const{title:title}=props,intl=(0,react_intl__WEBPACK_IMPORTED_MODULE_11__.c)(),dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(),pathname=props.location.pathname,{0:activeIndex,1:setactiveIndex}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),isClient=(0,_plone_volto_hooks__WEBPACK_IMPORTED_MODULE_3__.WC)(),installedAddons=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state=>state.addons.installedAddons),react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),availableAddons=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state=>state.addons.availableAddons),react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),upgradableAddons=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state=>state.addons.upgradableAddons),react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),loadingAddons=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state=>state.addons.loading));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.oL)())}),[dispatch]);const onInstall=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((event,{value:value})=>{event.preventDefault(),dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.aT)(value)).then((()=>{react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.qAm,{success:!0,title:intl.formatMessage(messages.success),content:intl.formatMessage(messages.addonInstalled,{title:title})}))})).catch((()=>{react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.qAm,{error:!0,title:intl.formatMessage(messages.error),content:intl.formatMessage(messages.addonNotInstalled)}))})).finally((()=>dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.oL)())))}),[dispatch,title,intl]),onUninstall=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((event,{value:value})=>{event.preventDefault(),dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.KQ)(value)).then((()=>{react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.qAm,{success:!0,title:intl.formatMessage(messages.success),content:intl.formatMessage(messages.addonUninstalled)}))})).catch((()=>{react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.qAm,{error:!0,title:intl.formatMessage(messages.error),content:intl.formatMessage(messages.addonNotUninstalled,{title:title})}))})).finally((()=>dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.oL)())))}),[dispatch,intl,title]),onUpgrade=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((event,{value:value})=>{event.preventDefault(),dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.ER)(value)).then((()=>{react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.qAm,{success:!0,title:intl.formatMessage(messages.success),content:intl.formatMessage(messages.addonUpgraded)}))})).catch((()=>{react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.qAm,{error:!0,title:intl.formatMessage(messages.error),content:intl.formatMessage(messages.addonNotUpgraded)}))})).finally((()=>dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_4__.oL)())))}),[dispatch,intl]),onAccordionClick=(event,item)=>{const newIndex=activeIndex===item.index?-1:item.index;setactiveIndex(newIndex)};return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.c,{id:"page-addons",className:"controlpanel-addons"},__jsx(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_5__.So,{title:intl.formatMessage(messages.addOns)}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Group,{raised:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,{className:"primary"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Add-ons Settings",defaultMessage:"Add-ons Settings"})),loadingAddons?__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,{active:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c,null)):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,upgradableAddons.length>0&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{attached:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c.Header,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Updates available",defaultMessage:"Updates available"})),__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Update installed addons",defaultMessage:"Update installed addons"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_19__.c,{as:"h3"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Activate and deactivate",defaultMessage:"Activate and deactivate add-ons in the lists below."})),__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Add Addons",defaultMessage:"To make new add-ons show up here, add them to your configuration, build, and restart the server process. For detailed instructions see"})," ",__jsx("a",{href:"https://6.docs.plone.org/install/",target:"_blank",rel:"noopener noreferrer"},intl.formatMessage(messages.installingAnAddon)),"."),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,{key:"header-available",secondary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Available",defaultMessage:"Available"}),":",__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,{circular:!0},availableAddons.length)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,{key:"body-available",attached:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,null),availableAddons.map((item=>__jsx("div",{key:item.id},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__.c.Title,{active:activeIndex===item.id,index:item.id,onClick:onAccordionClick},item.title,__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.GWx,{name:activeIndex===item.id?_plone_volto_icons_circle_top_svg__WEBPACK_IMPORTED_MODULE_8___default():_plone_volto_icons_circle_bottom_svg__WEBPACK_IMPORTED_MODULE_7___default(),size:"23px",className:`accordionToggle ${item.title}`})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__.c.Content,{active:activeIndex===item.id},__jsx("div",{className:"description"},item.description),""===item.uninstall_profile_id&&__jsx("div",null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{icon:"warning",warning:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"No uninstall profile",defaultMessage:"This addon does not provide an uninstall profile."}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.Group,{floated:"right"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c,{primary:!0,onClick:onInstall,value:item.id,className:"installAction"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Install",defaultMessage:"Install",className:"button-label"}))),__jsx("div",{className:"version"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Latest version",defaultMessage:"Latest version"}),":  ",item.version)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,null)))))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,{key:"header-installed",secondary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Installed",defaultMessage:"Installed"}),":",__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,{circular:!0},installedAddons.length)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,{key:"body-installed",attached:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,null),installedAddons.map((item=>__jsx("div",{key:item.id},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__.c.Title,{active:activeIndex===item.id,index:item.id,onClick:onAccordionClick,className:item.upgrade_info.available?"updateAvailable":""},item.title,item.upgrade_info.available&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Update",defaultMessage:"Update"})),__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.GWx,{name:activeIndex===item.id?_plone_volto_icons_circle_top_svg__WEBPACK_IMPORTED_MODULE_8___default():_plone_volto_icons_circle_bottom_svg__WEBPACK_IMPORTED_MODULE_7___default(),size:"24px",className:`accordionToggle ${item.title}`,color:"#878f93"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__.c.Content,{active:activeIndex===item.id},__jsx("div",{className:"description"},item.description),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c.Group,{floated:"right"},item.upgrade_info.available&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c,{primary:!0,onClick:onUpgrade,value:item.id},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"upgradeVersions",defaultMessage:"Update from version {origin} to {destination}",values:{origin:item.upgrade_info.installedVersion,destination:item.upgrade_info.newVersion}})),item.uninstall_profile_id&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c,{negative:!0,onClick:onUninstall,value:item.id,className:"uninstallAction"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Uninstall",defaultMessage:"Uninstall",className:"button-label"}))),__jsx("div",{className:"version"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Installed version",defaultMessage:"Installed version"}),":   ",item.version)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,null)))))))),isClient&&(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.YT3,{pathname:pathname,hideDefaultViewButtons:!0,inner:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.cH,{to:"/controlpanel",className:"item"},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.GWx,{name:_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_9___default(),"aria-label":intl.formatMessage(messages.back),className:"contents circled",size:"30px",title:intl.formatMessage(messages.back)})))}),document.getElementById("toolbar")))};__webpack_exports__.default=AddonsControlpanel,AddonsControlpanel.__docgenInfo={description:"",methods:[],displayName:"AddonsControlpanel"}},"../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js"),__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),_lib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");function Divider(props){var children=props.children,className=props.className,clearing=props.clearing,content=props.content,fitted=props.fitted,hidden=props.hidden,horizontal=props.horizontal,inverted=props.inverted,section=props.section,vertical=props.vertical,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)("ui",(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(clearing,"clearing"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(fitted,"fitted"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(hidden,"hidden"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(horizontal,"horizontal"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(inverted,"inverted"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(section,"section"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(vertical,"vertical"),"divider",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_4__.c)(Divider,props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_5__.c)(Divider,props);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.c)({},rest,{className:classes}),_lib__WEBPACK_IMPORTED_MODULE_7__.Ar(children)?content:children)}Divider.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],Divider.propTypes={},__webpack_exports__.c=Divider},"./src/icons/circle-bottom.svg":function(module){module.exports={attributes:{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36"},content:'<g fill-rule="evenodd"><path d="M31,18 C31,10.832 25.168,5 18,5 C10.832,5 5,10.832 5,18 C5,25.168 10.832,31 18,31 C25.168,31 31,25.168 31,18 M3,18 C3,9.729 9.729,3 18,3 C26.271,3 33,9.729 33,18 C33,26.271 26.271,33 18,33 C9.729,33 3,26.271 3,18"/><path d="M11.293 16.707 12.707 15.293 18 20.586 23.293 15.293 24.707 16.707 18 23.414z"/></g>'}}}]);