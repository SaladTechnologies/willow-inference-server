/*! For license information please see sdk.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}(self,(()=>(()=>{"use strict";var e,t,i,n={d:(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},s={};n.r(s),n.d(s,{DictationSupport:()=>w}),function(e){e[e.SPEECHMIKE_HID=0]="SPEECHMIKE_HID",e[e.SPEECHMIKE_GAMEPAD=1]="SPEECHMIKE_GAMEPAD",e[e.FOOT_CONTROL=2]="FOOT_CONTROL",e[e.POWERMIC_3=3]="POWERMIC_3"}(e||(e={})),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.FOOT_CONTROL_ACC_2310_2320=6212]="FOOT_CONTROL_ACC_2310_2320",e[e.FOOT_CONTROL_ACC_2330=2330]="FOOT_CONTROL_ACC_2330",e[e.SPEECHMIKE_LFH_3200=3200]="SPEECHMIKE_LFH_3200",e[e.SPEECHMIKE_LFH_3210=3210]="SPEECHMIKE_LFH_3210",e[e.SPEECHMIKE_LFH_3220=3220]="SPEECHMIKE_LFH_3220",e[e.SPEECHMIKE_LFH_3300=3300]="SPEECHMIKE_LFH_3300",e[e.SPEECHMIKE_LFH_3310=3310]="SPEECHMIKE_LFH_3310",e[e.SPEECHMIKE_LFH_3500=3500]="SPEECHMIKE_LFH_3500",e[e.SPEECHMIKE_LFH_3510=3510]="SPEECHMIKE_LFH_3510",e[e.SPEECHMIKE_LFH_3520=3520]="SPEECHMIKE_LFH_3520",e[e.SPEECHMIKE_LFH_3600=3600]="SPEECHMIKE_LFH_3600",e[e.SPEECHMIKE_LFH_3610=3610]="SPEECHMIKE_LFH_3610",e[e.SPEECHMIKE_SMP_3700=3700]="SPEECHMIKE_SMP_3700",e[e.SPEECHMIKE_SMP_3710=3710]="SPEECHMIKE_SMP_3710",e[e.SPEECHMIKE_SMP_3720=3720]="SPEECHMIKE_SMP_3720",e[e.SPEECHMIKE_SMP_3800=3800]="SPEECHMIKE_SMP_3800",e[e.SPEECHMIKE_SMP_3810=3810]="SPEECHMIKE_SMP_3810",e[e.SPEECHMIKE_SMP_4000=4e3]="SPEECHMIKE_SMP_4000",e[e.SPEECHMIKE_SMP_4010=4010]="SPEECHMIKE_SMP_4010",e[e.SPEECHONE_PSM_6000=6001]="SPEECHONE_PSM_6000",e[e.POWERMIC_3=4097]="POWERMIC_3",e[e.POWERMIC_4=100]="POWERMIC_4"}(t||(t={})),function(e){e[e.NONE=0]="NONE",e[e.REWIND=1]="REWIND",e[e.PLAY=2]="PLAY",e[e.FORWARD=4]="FORWARD",e[e.INS_OVR=16]="INS_OVR",e[e.RECORD=32]="RECORD",e[e.COMMAND=64]="COMMAND",e[e.STOP=256]="STOP",e[e.INSTR=512]="INSTR",e[e.F1_A=1024]="F1_A",e[e.F2_B=2048]="F2_B",e[e.F3_C=4096]="F3_C",e[e.F4_D=8192]="F4_D",e[e.EOL_PRIO=16384]="EOL_PRIO",e[e.TRANSCRIBE=32768]="TRANSCRIBE",e[e.TAB_BACKWARD=65536]="TAB_BACKWARD",e[e.TAB_FORWARD=131072]="TAB_FORWARD",e[e.CUSTOM_LEFT=262144]="CUSTOM_LEFT",e[e.CUSTOM_RIGHT=524288]="CUSTOM_RIGHT",e[e.ENTER_SELECT=1048576]="ENTER_SELECT",e[e.SCAN_END=2097152]="SCAN_END",e[e.SCAN_SUCCESS=4194304]="SCAN_SUCCESS"}(i||(i={}));class E{constructor(e){this.hidDevice=e,this.id=E.next_id++,this.buttonEventListeners=new Set,this.lastBitMask=0,this.onInputReportHandler=e=>this.onInputReport(e)}async init(){this.hidDevice.addEventListener("inputreport",this.onInputReportHandler),!1===this.hidDevice.opened&&await this.hidDevice.open()}async shutdown(e=!0){this.hidDevice.removeEventListener("inputreport",this.onInputReportHandler),e&&await this.hidDevice.close(),this.buttonEventListeners.clear()}addButtonEventListener(e){this.buttonEventListeners.add(e)}async onInputReport(e){const t=e.data;await this.handleButtonPress(t)}async handleButtonPress(e){const t=this.getButtonMappings(),i=this.getInputBitmask(e);let n=0;for(const[e,s]of t)i&s&&(n|=e);n!==this.lastBitMask&&(this.lastBitMask=n,n=this.filterOutputBitMask(n),await Promise.all([...this.buttonEventListeners].map((e=>e(this.getThisAsDictationDevice(),n)))))}filterOutputBitMask(e){return e}}E.next_id=0;const o=new Map([[i.REWIND,1],[i.PLAY,2],[i.FORWARD,4],[i.EOL_PRIO,8]]);class r extends E{constructor(){super(...arguments),this.implType=e.FOOT_CONTROL}static create(e){return new r(e)}getDeviceType(){return 2321===this.hidDevice.vendorId?6212===this.hidDevice.productId?t.FOOT_CONTROL_ACC_2310_2320:2330===this.hidDevice.productId?t.FOOT_CONTROL_ACC_2330:t.UNKNOWN:t.UNKNOWN}getButtonMappings(){return o}getInputBitmask(e){return e.getUint8(0)}getThisAsDictationDevice(){return this}}var a;!function(e){e[e.OFF=0]="OFF",e[e.RED=1]="RED",e[e.GREEN=2]="GREEN"}(a||(a={}));const _=new Map([[i.TRANSCRIBE,1],[i.TAB_BACKWARD,2],[i.RECORD,4],[i.TAB_FORWARD,8],[i.REWIND,16],[i.FORWARD,32],[i.PLAY,64],[i.CUSTOM_LEFT,128],[i.ENTER_SELECT,256],[i.CUSTOM_RIGHT,512]]);class d extends E{constructor(){super(...arguments),this.implType=e.POWERMIC_3}static create(e){return new d(e)}getDeviceType(){return t.POWERMIC_3}async setLed(e){const t=new Uint8Array([e]);await this.hidDevice.sendReport(0,t)}getButtonMappings(){return _}getInputBitmask(e){return e.getUint16(1,!0)}getThisAsDictationDevice(){return this}}const c=new Map([[i.REWIND,1],[i.PLAY,2],[i.FORWARD,4],[i.INS_OVR,16],[i.RECORD,32],[i.COMMAND,64],[i.INSTR,512],[i.F1_A,1024],[i.F2_B,2048],[i.F3_C,4096],[i.F4_D,8192],[i.EOL_PRIO,16384]]),O=new Map([[i.TAB_BACKWARD,1],[i.PLAY,2],[i.TAB_FORWARD,4],[i.FORWARD,16],[i.RECORD,32],[i.COMMAND,64],[i.ENTER_SELECT,512],[i.F1_A,1024],[i.F2_B,2048],[i.F3_C,4096],[i.F4_D,8192],[i.REWIND,16384]]);class D extends E{constructor(){super(...arguments),this.implType=e.SPEECHMIKE_GAMEPAD}static create(e){return new D(e)}getDeviceType(){return t.UNKNOWN}getButtonMappings(){return 1364===this.hidDevice.vendorId&&100===this.hidDevice.productId?O:c}getInputBitmask(e){return e.getUint16(0,!0)}getThisAsDictationDevice(){return this}}var R,I,h,S,C,T;!function(e){e[e.HID=0]="HID",e[e.KEYBOARD=1]="KEYBOARD",e[e.BROWSER=2]="BROWSER",e[e.WINDOWS_SR=3]="WINDOWS_SR",e[e.DRAGON_FOR_MAC=4]="DRAGON_FOR_MAC",e[e.DRAGON_FOR_WINDOWS=5]="DRAGON_FOR_WINDOWS"}(R||(R={})),function(e){e[e.OFF=0]="OFF",e[e.RECORD_INSERT=1]="RECORD_INSERT",e[e.RECORD_OVERWRITE=2]="RECORD_OVERWRITE",e[e.RECORD_STANDBY_INSERT=3]="RECORD_STANDBY_INSERT",e[e.RECORD_STANDBY_OVERWRITE=4]="RECORD_STANDBY_OVERWRITE"}(I||(I={})),function(e){e[e.RECORD_LED_GREEN=0]="RECORD_LED_GREEN",e[e.RECORD_LED_RED=1]="RECORD_LED_RED",e[e.INSTRUCTION_LED_GREEN=2]="INSTRUCTION_LED_GREEN",e[e.INSTRUCTION_LED_RED=3]="INSTRUCTION_LED_RED",e[e.INS_OWR_BUTTON_LED_GREEN=4]="INS_OWR_BUTTON_LED_GREEN",e[e.INS_OWR_BUTTON_LED_RED=5]="INS_OWR_BUTTON_LED_RED",e[e.F1_BUTTON_LED=6]="F1_BUTTON_LED",e[e.F2_BUTTON_LED=7]="F2_BUTTON_LED",e[e.F3_BUTTON_LED=8]="F3_BUTTON_LED",e[e.F4_BUTTON_LED=9]="F4_BUTTON_LED"}(h||(h={})),function(e){e[e.OFF=0]="OFF",e[e.BLINK_SLOW=1]="BLINK_SLOW",e[e.BLINK_FAST=2]="BLINK_FAST",e[e.ON=3]="ON"}(S||(S={})),function(e){e[e.PICKED_UP=0]="PICKED_UP",e[e.LAYED_DOWN=1]="LAYED_DOWN"}(C||(C={})),function(e){e[e.SET_LED=2]="SET_LED",e[e.SET_EVENT_MODE=13]="SET_EVENT_MODE",e[e.BUTTON_PRESS_EVENT=128]="BUTTON_PRESS_EVENT",e[e.IS_SPEECHMIKE_PREMIUM=131]="IS_SPEECHMIKE_PREMIUM",e[e.GET_DEVICE_CODE_SM3=135]="GET_DEVICE_CODE_SM3",e[e.GET_DEVICE_CODE_SMP=139]="GET_DEVICE_CODE_SMP",e[e.GET_DEVICE_CODE_SO=150]="GET_DEVICE_CODE_SO",e[e.GET_EVENT_MODE=141]="GET_EVENT_MODE",e[e.WIRELESS_STATUS_EVENT=148]="WIRELESS_STATUS_EVENT",e[e.MOTION_EVENT=158]="MOTION_EVENT"}(T||(T={}));const u=new Map([[i.REWIND,4096],[i.PLAY,1024],[i.FORWARD,2048],[i.INS_OVR,16384],[i.RECORD,256],[i.COMMAND,32],[i.STOP,512],[i.INSTR,32768],[i.F1_A,2],[i.F2_B,4],[i.F3_C,8],[i.F4_D,16],[i.EOL_PRIO,8192],[i.SCAN_END,1],[i.SCAN_SUCCESS,128]]),v=new Map([[i.TAB_BACKWARD,4096],[i.PLAY,1024],[i.TAB_FORWARD,2048],[i.FORWARD,16384],[i.RECORD,256],[i.COMMAND,32],[i.ENTER_SELECT,32768],[i.F1_A,2],[i.F2_B,4],[i.F3_C,8],[i.F4_D,16],[i.REWIND,8192]]),N=Object.freeze({[h.RECORD_LED_GREEN]:S.OFF,[h.RECORD_LED_RED]:S.OFF,[h.INSTRUCTION_LED_GREEN]:S.OFF,[h.INSTRUCTION_LED_RED]:S.OFF,[h.INS_OWR_BUTTON_LED_GREEN]:S.OFF,[h.INS_OWR_BUTTON_LED_RED]:S.OFF,[h.F1_BUTTON_LED]:S.OFF,[h.F2_BUTTON_LED]:S.OFF,[h.F3_BUTTON_LED]:S.OFF,[h.F4_BUTTON_LED]:S.OFF}),l=Object.freeze(Object.assign(Object.assign({},N),{[h.RECORD_LED_GREEN]:S.ON,[h.INS_OWR_BUTTON_LED_GREEN]:S.ON})),P=Object.freeze(Object.assign(Object.assign({},N),{[h.RECORD_LED_RED]:S.ON})),M=Object.freeze(Object.assign(Object.assign({},N),{[h.RECORD_LED_GREEN]:S.BLINK_SLOW,[h.INS_OWR_BUTTON_LED_GREEN]:S.BLINK_SLOW})),L=Object.freeze(Object.assign(Object.assign({},N),{[h.RECORD_LED_RED]:S.BLINK_SLOW})),p=Object.freeze({[I.OFF]:N,[I.RECORD_INSERT]:l,[I.RECORD_OVERWRITE]:P,[I.RECORD_STANDBY_INSERT]:M,[I.RECORD_STANDBY_OVERWRITE]:L}),F=Object.freeze([t.SPEECHMIKE_LFH_3220,t.SPEECHMIKE_LFH_3520,t.SPEECHMIKE_SMP_3720]),A=Object.freeze([t.SPEECHMIKE_LFH_3210,t.SPEECHMIKE_LFH_3310,t.SPEECHMIKE_LFH_3510,t.SPEECHMIKE_LFH_3610,t.SPEECHMIKE_SMP_3710,t.SPEECHMIKE_SMP_3810,t.SPEECHMIKE_SMP_4010]);class g extends E{constructor(){super(...arguments),this.implType=e.SPEECHMIKE_HID,this.deviceCode=0,this.ledState=Object.assign({},N),this.sliderBitsFilter=0,this.lastSliderValue=0,this.lastButtonValue=0,this.commandResolvers=new Map,this.commandTimeouts=new Map,this.motionEventListeners=new Set,this.proxyDevice=void 0}static create(e){return new g(e)}async init(){await super.init(),await this.fetchDeviceCode(),this.determineSliderBitsFilter()}async shutdown(){await super.shutdown(),void 0!==this.proxyDevice&&await this.proxyDevice.shutdown()}addMotionEventListener(e){this.motionEventListeners.add(e)}getDeviceCode(){return this.deviceCode}getDeviceType(){return 1364===this.hidDevice.vendorId?100===this.hidDevice.productId?t.POWERMIC_4:t.UNKNOWN:2321===this.hidDevice.vendorId?this.deviceCode:t.UNKNOWN}async setSimpleLedState(e){this.ledState=Object.assign({},p[e]),await this.sendLedState()}async setLed(e,t){this.ledState[e]=t,await this.sendLedState()}async sendLedState(){const e=[0,0,0,0,0,0,0,0];e[5]|=this.ledState[h.RECORD_LED_GREEN]<<0,e[5]|=this.ledState[h.RECORD_LED_RED]<<2,e[5]|=this.ledState[h.INSTRUCTION_LED_GREEN]<<4,e[5]|=this.ledState[h.INSTRUCTION_LED_RED]<<6,e[6]|=this.ledState[h.INS_OWR_BUTTON_LED_GREEN]<<4,e[6]|=this.ledState[h.INS_OWR_BUTTON_LED_RED]<<6,e[7]|=this.ledState[h.F4_BUTTON_LED]<<0,e[7]|=this.ledState[h.F3_BUTTON_LED]<<2,e[7]|=this.ledState[h.F2_BUTTON_LED]<<4,e[7]|=this.ledState[h.F1_BUTTON_LED]<<6,await this.sendCommand(T.SET_LED,e)}assignProxyDevice(e){if(void 0!==this.proxyDevice)throw new Error("Proxy device already assigned. Adding multiple SpeechMikes in Browser/Gamepad mode at the same time is not supported.");this.proxyDevice=e,this.proxyDevice.addButtonEventListener(((e,t)=>this.onProxyButtonEvent(t)))}async onProxyButtonEvent(e){await Promise.all([...this.buttonEventListeners].map((t=>t(this.getThisAsDictationDevice(),e))))}async handleCommandResponse(e,t){const i=this.commandResolvers.get(e);if(void 0===i)throw new Error(`Unexpected response for command ${e}`);i(t)}async getEventMode(){return(await this.sendCommandAndWaitForResponse(T.GET_EVENT_MODE)).getInt8(8)}async setEventMode(e){const t=[0,0,0,0,0,0,0,e];await this.sendCommand(T.SET_EVENT_MODE,t)}async fetchDeviceCode(){let e=await this.sendCommandAndWaitForResponse(T.IS_SPEECHMIKE_PREMIUM);if(128&e.getUint8(8))if(e=await this.sendCommandAndWaitForResponse(T.GET_DEVICE_CODE_SMP),e.getUint8(1))e=await this.sendCommandAndWaitForResponse(T.GET_DEVICE_CODE_SO),this.deviceCode=e.getUint16(7);else{const t=e.getUint16(2),i=e.getUint16(4),n=e.getUint16(6);this.deviceCode=Math.max(n,i,t)}else e=await this.sendCommandAndWaitForResponse(T.GET_DEVICE_CODE_SM3),this.deviceCode=e.getUint16(7)}determineSliderBitsFilter(){F.includes(this.deviceCode)?this.sliderBitsFilter=i.FORWARD+i.STOP+i.PLAY+i.REWIND:A.includes(this.deviceCode)&&(this.sliderBitsFilter=i.RECORD+i.STOP+i.PLAY+i.REWIND)}async onInputReport(e){const t=e.data,i=t.getUint8(0);if(i===T.BUTTON_PRESS_EVENT)await this.handleButtonPress(t);else if(i===T.MOTION_EVENT)await this.handleMotionEvent(t);else if(i===T.WIRELESS_STATUS_EVENT);else{if(void 0===this.commandResolvers.get(i))throw new Error(`Unhandled input report from command ${i}`);await this.handleCommandResponse(i,t)}}getButtonMappings(){return 1364===this.hidDevice.vendorId&&100===this.hidDevice.productId?v:u}getInputBitmask(e){return e.getUint16(7,!0)}getThisAsDictationDevice(){return this}async handleMotionEvent(e){const t=1===e.getUint8(8)?C.LAYED_DOWN:C.PICKED_UP;await Promise.all([...this.motionEventListeners].map((e=>e(this.getThisAsDictationDevice(),t))))}async sendCommand(e,t){const i=void 0===t?new Uint8Array([e]):new Uint8Array([e,...t]);await this.hidDevice.sendReport(0,i)}async sendCommandAndWaitForResponse(e,t){if(this.commandResolvers.has(e)||this.commandTimeouts.has(e))throw new Error(`Command ${e} is already running`);const i=new Promise((i=>{this.commandResolvers.set(e,i),this.sendCommand(e,t)})),n=new Promise((t=>{const i=window.setTimeout((()=>{t(void 0)}),5e3);this.commandTimeouts.set(e,i)})),s=await Promise.race([i,n]);if(this.commandResolvers.delete(e),this.commandTimeouts.delete(e),void 0===s)throw new Error(`Command ${e} timed out after 5000ms`);return s}filterOutputBitMask(e){if(!this.sliderBitsFilter)return e;const t=~this.sliderBitsFilter,i=e&this.sliderBitsFilter,n=e&t,s=i!==this.lastSliderValue,E=n!==this.lastButtonValue;return this.lastSliderValue=i,this.lastButtonValue=n,s&&E?e&t:s?e&this.sliderBitsFilter:E?e&t:e}}const f=Object.freeze({[e.SPEECHMIKE_HID]:Object.freeze([Object.freeze({vendorId:2321,productId:3100,usagePage:65440,usage:1}),Object.freeze({vendorId:2321,productId:3101,usagePage:65440,usage:1}),Object.freeze({vendorId:2321,productId:3102,usagePage:65440,usage:1}),Object.freeze({vendorId:2321,productId:4e3,usagePage:65440,usage:1}),Object.freeze({vendorId:1364,productId:100,usagePage:65440,usage:1})]),[e.SPEECHMIKE_GAMEPAD]:Object.freeze([Object.freeze({vendorId:2321,productId:4e3,usagePage:1,usage:4}),Object.freeze({vendorId:2321,productId:3102,usagePage:1,usage:4}),Object.freeze({vendorId:1364,productId:100,usagePage:1,usage:4})]),[e.FOOT_CONTROL]:Object.freeze([Object.freeze({vendorId:2321,productId:6212,usagePage:1,usage:4}),Object.freeze({vendorId:2321,productId:2330,usagePage:1,usage:4})]),[e.POWERMIC_3]:Object.freeze([Object.freeze({vendorId:1364,productId:4097,usagePage:1,usage:0})])});class m{constructor(e=navigator.hid){if(this.hidApi=e,this.buttonEventListeners=new Set,this.deviceConnectEventListeners=new Set,this.deviceDisconnectEventListeners=new Set,this.motionEventListeners=new Set,this.devices=new Map,this.pendingProxyDevices=new Map,this.onConnectHandler=e=>this.onHidDeviceConnected(e),this.onDisconectHandler=e=>this.onHidDeviceDisconnected(e),this.isInitialized=!1,void 0===this.hidApi)throw new Error("WebHID is not available")}getDevices(){return this.failIfNotInitialized(),[...this.devices.values()]}async init(){if(this.isInitialized)throw new Error("DictationDeviceManager already initialized");this.hidApi.addEventListener("connect",this.onConnectHandler),this.hidApi.addEventListener("disconnect",this.onDisconectHandler);const e=await this.hidApi.getDevices();await this.createAndAddInitializedDevices(e),this.isInitialized=!0}async shutdown(){this.failIfNotInitialized(),this.hidApi.removeEventListener("connect",this.onConnectHandler),this.hidApi.removeEventListener("disconnect",this.onDisconectHandler),await Promise.all([[...this.devices.values()].map((e=>e.shutdown(!0)))]),this.devices.clear(),this.isInitialized=!1}async requestDevice(){this.failIfNotInitialized();const e=await this.hidApi.requestDevice({filters:H()});return await this.createAndAddInitializedDevices(e)}addButtonEventListener(e){this.buttonEventListeners.add(e)}addDeviceConnectedEventListener(e){this.deviceConnectEventListeners.add(e)}addDeviceDisconnectedEventListener(e){this.deviceDisconnectEventListeners.add(e)}addMotionEventListener(e){this.motionEventListeners.add(e)}failIfNotInitialized(){if(!this.isInitialized)throw new Error("DictationDeviceManager not yet initialized")}async createAndAddInitializedDevices(t){const i=await Promise.all(t.map((e=>this.createDevice(e)))),n=[];for(const t of i)if(void 0!==t){try{await t.init()}catch(e){await t.shutdown(),console.error("failed to initialize device",e);continue}t.implType!==e.SPEECHMIKE_GAMEPAD?(this.addListeners(t),this.devices.set(t.hidDevice,t),n.push(t)):this.pendingProxyDevices.set(t.hidDevice,t)}return this.assignPendingProxyDevices(),n}async createDevice(t){if(this.devices.has(t))return;const i=function(t){for(const i of Object.values(e)){if("string"==typeof i)continue;if(B(t,f[i]))return i}return}(t);if(void 0!==i)switch(i){case e.SPEECHMIKE_HID:return g.create(t);case e.POWERMIC_3:return d.create(t);case e.SPEECHMIKE_GAMEPAD:return D.create(t);case e.FOOT_CONTROL:return r.create(t);default:!function(e){throw new Error(`Unexpected input: ${e}`)}(i)}}assignPendingProxyDevices(){for(const[t,i]of this.pendingProxyDevices)for(const n of this.devices.values()){if(n.implType!==e.SPEECHMIKE_HID)continue;const s=n.hidDevice;if(t.vendorId===s.vendorId&&t.productId===s.productId){n.assignProxyDevice(i),this.pendingProxyDevices.delete(t);break}}}addListeners(t){for(const e of this.buttonEventListeners)t.addButtonEventListener(e);if(t.implType===e.SPEECHMIKE_HID)for(const e of this.motionEventListeners)t.addMotionEventListener(e)}async onHidDeviceConnected(e){const t=e.device,i=(await this.createAndAddInitializedDevices([t]))[0];void 0!==i&&await Promise.all([...this.deviceConnectEventListeners].map((e=>e(i))))}async onHidDeviceDisconnected(e){const t=e.device;this.pendingProxyDevices.delete(t);const i=this.devices.get(t);void 0!==i&&(await i.shutdown(!1),await Promise.all([...this.deviceDisconnectEventListeners].map((e=>e(i)))),this.devices.delete(t))}}function H(){const t=[];for(const i of Object.values(e)){if("string"==typeof i)continue;const e=f[i];t.push(...e)}return t}function B(e,t){return t.some((t=>function(e,t){if(void 0!==t.vendorId&&e.vendorId!==t.vendorId)return!1;if(void 0!==t.productId&&e.productId!==t.productId)return!1;if(void 0!==t.usagePage&&(void 0===e.collections||e.collections.every((e=>e.usagePage!==t.usagePage))))return!1;if(void 0!==t.usage&&(void 0===e.collections||e.collections.every((e=>e.usage!==t.usage))))return!1;return!0}(e,t)))}var w;return function(n){n.ImplementationType=e,n.DeviceType=t,n.ButtonEvent=i,n.DictationDeviceManager=m,n.FootControlDevice=r,n.LedStatePM3=a,n.PowerMic3Device=d,n.SpeechMikeGamepadDevice=D,n.EventMode=R,n.SimpleLedState=I,n.LedIndex=h,n.LedMode=S,n.MotionEvent=C}(w||(w={})),s})()));
//# sourceMappingURL=sdk.js.map