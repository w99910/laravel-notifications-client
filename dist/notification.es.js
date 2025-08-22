(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-300:oklch(80.8% .114 19.571);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-900:oklch(39.6% .141 25.723);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-300:oklch(90.5% .182 98.111);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-100:oklch(96.2% .044 156.743);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-900:oklch(39.3% .095 152.535);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--radius-md:.375rem;--radius-lg:.5rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.collapse{visibility:collapse}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.-top-1{top:calc(var(--spacing)*-1)}.top-0{top:calc(var(--spacing)*0)}.-right-1{right:calc(var(--spacing)*-1)}.right-0{right:calc(var(--spacing)*0)}.z-10{z-index:10}.z-50{z-index:50}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-1{margin-left:calc(var(--spacing)*-1)}.ml-2{margin-left:calc(var(--spacing)*2)}.flex{display:flex}.inline{display:inline}.table{display:table}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-full{height:100%}.max-h-96{max-height:calc(var(--spacing)*96)}.w-2{width:calc(var(--spacing)*2)}.w-2\\/5{width:40%}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-40{width:calc(var(--spacing)*40)}.w-96{width:calc(var(--spacing)*96)}.w-full{width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-4>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*4)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-x-reverse)))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-l-lg{border-top-left-radius:var(--radius-lg);border-bottom-left-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-blue-500{border-color:var(--color-blue-500)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-700{border-color:var(--color-gray-700)}.border-transparent{border-color:#0000}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-900{background-color:var(--color-blue-900)}.bg-blue-900\\/10{background-color:#1c398e1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-900\\/10{background-color:color-mix(in oklab,var(--color-blue-900)10%,transparent)}}.bg-blue-900\\/20{background-color:#1c398e33}@supports (color:color-mix(in lab,red,red)){.bg-blue-900\\/20{background-color:color-mix(in oklab,var(--color-blue-900)20%,transparent)}}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-100{background-color:var(--color-green-100)}.bg-green-500{background-color:var(--color-green-500)}.bg-green-900{background-color:var(--color-green-900)}.bg-red-100{background-color:var(--color-red-100)}.bg-red-500{background-color:var(--color-red-500)}.bg-red-900{background-color:var(--color-red-900)}.bg-white{background-color:var(--color-white)}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-900{background-color:var(--color-yellow-900)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.text-center{text-align:center}.text-left{text-align:left}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-blue-300{color:var(--color-blue-300)}.text-blue-400{color:var(--color-blue-400)}.text-blue-500{color:var(--color-blue-500)}.text-blue-600{color:var(--color-blue-600)}.text-gray-100{color:var(--color-gray-100)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-300{color:var(--color-green-300)}.text-green-600{color:var(--color-green-600)}.text-red-300{color:var(--color-red-300)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.text-yellow-300{color:var(--color-yellow-300)}.text-yellow-600{color:var(--color-yellow-600)}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-75{--tw-duration:75ms;transition-duration:75ms}.duration-200{--tw-duration:.2s;transition-duration:.2s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media (hover:hover){.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:text-blue-300:hover{color:var(--color-blue-300)}.hover\\:text-blue-600:hover{color:var(--color-blue-600)}.hover\\:text-blue-800:hover{color:var(--color-blue-800)}.hover\\:text-gray-100:hover{color:var(--color-gray-100)}.hover\\:text-gray-200:hover{color:var(--color-gray-200)}.hover\\:text-gray-400:hover{color:var(--color-gray-400)}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-gray-800:hover{color:var(--color-gray-800)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}.max-h-96[data-v-096117b0]::-webkit-scrollbar,.h-\\[calc\\(100\\%-142px\\)\\][data-v-096117b0]::-webkit-scrollbar{width:4px}.max-h-96[data-v-096117b0]::-webkit-scrollbar-track,.h-\\[calc\\(100\\%-142px\\)\\][data-v-096117b0]::-webkit-scrollbar-track{background:#f1f1f1}.max-h-96[data-v-096117b0]::-webkit-scrollbar-thumb,.h-\\[calc\\(100\\%-142px\\)\\][data-v-096117b0]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:2px}.max-h-96[data-v-096117b0]::-webkit-scrollbar-thumb:hover,.h-\\[calc\\(100\\%-142px\\)\\][data-v-096117b0]::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.fixed[data-v-096117b0]{transition:width .3s ease,right .3s ease}.progress-bar[data-v-096117b0]{transition:width .8s cubic-bezier(.4,0,.2,1);transform-origin:left}@keyframes pulse-progress-096117b0{0%,to{opacity:1}50%{opacity:.8;transform:scaleY(1.1)}}.progress-bar[data-v-096117b0]:not([style*="100%"]){animation:pulse-progress-096117b0 2s ease-in-out infinite}.confirmation-overlay[data-v-c367d6fe]{position:fixed;inset:0;background-color:#00000080;display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px}.confirmation-dialog[data-v-c367d6fe]{background:#fff;border-radius:12px;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;max-width:400px;width:100%;overflow:hidden;animation:slideIn-c367d6fe .2s ease-out}@keyframes slideIn-c367d6fe{0%{opacity:0;transform:scale(.95) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}.confirmation-content[data-v-c367d6fe]{padding:24px 24px 16px}.confirmation-title[data-v-c367d6fe]{font-size:18px;font-weight:600;color:#111827;margin:0 0 12px;line-height:1.4}.confirmation-message[data-v-c367d6fe]{font-size:14px;color:#6b7280;margin:0;line-height:1.5}.confirmation-actions[data-v-c367d6fe]{padding:16px 24px 24px;display:flex;gap:12px;justify-content:flex-end}.btn[data-v-c367d6fe]{padding:8px 16px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:all .2s ease;border:1px solid;display:flex;align-items:center;gap:6px;min-width:80px;justify-content:center}.btn[data-v-c367d6fe]:disabled{cursor:not-allowed;opacity:.6}.btn-cancel[data-v-c367d6fe]{background:#fff;color:#374151;border-color:#d1d5db}.btn-cancel[data-v-c367d6fe]:hover:not(:disabled){background:#f9fafb;border-color:#9ca3af}.btn-confirm[data-v-c367d6fe]{background:#ef4444;color:#fff;border-color:#ef4444}.btn-confirm[data-v-c367d6fe]:hover:not(:disabled){background:#dc2626;border-color:#dc2626}.confirmation-dialog[data-type=warning] .btn-confirm[data-v-c367d6fe]{background:#f59e0b;border-color:#f59e0b}.confirmation-dialog[data-type=warning] .btn-confirm[data-v-c367d6fe]:hover:not(:disabled){background:#d97706;border-color:#d97706}.confirmation-dialog[data-type=success] .btn-confirm[data-v-c367d6fe]{background:#10b981;border-color:#10b981}.confirmation-dialog[data-type=success] .btn-confirm[data-v-c367d6fe]:hover:not(:disabled){background:#059669;border-color:#059669}.confirmation-dialog[data-type=primary] .btn-confirm[data-v-c367d6fe]{background:#3b82f6;border-color:#3b82f6}.confirmation-dialog[data-type=primary] .btn-confirm[data-v-c367d6fe]:hover:not(:disabled){background:#2563eb;border-color:#2563eb}.loading-spinner[data-v-c367d6fe]{width:14px;height:14px;border:2px solid transparent;border-top:2px solid currentColor;border-radius:50%;animation:spin-c367d6fe 1s linear infinite}@keyframes spin-c367d6fe{to{transform:rotate(360deg)}}@media (max-width: 640px){.confirmation-overlay[data-v-c367d6fe]{padding:16px}.confirmation-actions[data-v-c367d6fe]{flex-direction:column-reverse}.btn[data-v-c367d6fe]{width:100%}}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { ref as k, computed as E, onMounted as G, onUnmounted as Q, createElementBlock as i, openBlock as c, createElementVNode as t, createVNode as Z, normalizeClass as u, createCommentVNode as b, toDisplayString as h, Transition as ee, withCtx as te, withModifiers as A, Fragment as B, renderList as L, createTextVNode as q, unref as M, normalizeStyle as V, createApp as re, h as ae } from "vue";
const oe = (g, r, o = {}) => {
  if (!g) return "";
  const s = r || Date.now(), v = new Date(g), d = s - v.getTime(), f = Math.floor(d / (1e3 * 60)), y = Math.floor(d / (1e3 * 60 * 60)), a = Math.floor(d / (1e3 * 60 * 60 * 24)), _ = Math.floor(a / 7), w = Math.floor(a / 30), p = Math.floor(a / 365);
  return f < 1 ? o["Just now"] ?? "Just now" : f < 60 ? `${f} ${o.minute ?? "minute"}${f > 1 ? "s" : ""} ${o.ago ?? "ago"}` : y < 24 ? `${y} ${o.hour ?? "hour"}${y > 1 ? "s" : ""} ${o.ago ?? "ago"}` : a < 7 ? `${a} ${o.day ?? "day"}${a > 1 ? "s" : ""} ${o.ago ?? "ago"}` : _ < 4 ? `${_} ${o.week ?? "week"}${_ > 1 ? "s" : ""} ${o.ago ?? "ago"}` : w < 12 ? `${w} ${o.month ?? "month"}${w > 1 ? "s" : ""} ${o.ago ?? "ago"}` : `${p} ${o.year ?? "year"}${p > 1 ? "s" : ""} ${o.ago ?? "ago"}`;
}, se = (g, r) => {
  switch (g) {
    case "success":
      return r ? "bg-green-900" : "bg-green-100";
    case "warning":
      return r ? "bg-yellow-900" : "bg-yellow-100";
    case "error":
      return r ? "bg-red-900" : "bg-red-100";
    case "info":
    default:
      return r ? "bg-blue-900" : "bg-blue-100";
  }
}, ne = (g, r) => {
  switch (g) {
    case "success":
      return r ? "text-green-300" : "text-green-600";
    case "warning":
      return r ? "text-yellow-300" : "text-yellow-600";
    case "error":
      return r ? "text-red-300" : "text-red-600";
    case "info":
    default:
      return r ? "text-blue-300" : "text-blue-600";
  }
}, le = (g) => {
  if (!g || g === "#f3f4f6") return "#1f2937";
  let r = g.replace("#", "");
  r.length === 3 && (r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]);
  const o = parseInt(r.substring(0, 2), 16), s = parseInt(r.substring(2, 4), 16), v = parseInt(r.substring(4, 6), 16);
  return (0.299 * o + 0.587 * s + 0.114 * v) / 255 > 0.5 ? "#1f2937" : "#ffffff";
}, ie = () => [
  {
    id: 1,
    title: "Tom",
    message: "added new video",
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    status: "info",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
    read: !1,
    category: "inbox"
  },
  {
    id: 2,
    title: "Tom",
    message: "left comments for you",
    created_at: new Date(Date.now() - 27 * 60 * 1e3).toISOString(),
    status: "success",
    read: !1,
    category: "inbox"
  },
  {
    id: 3,
    title: "Anna",
    message: "has applied to create an ad for your campaign",
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1e3).toISOString(),
    status: "info",
    read: !1,
    category: "inbox",
    actions: [
      { label: "Decline", backgroundColor: "#f3f4f6", url: "#" },
      { label: "Accept", backgroundColor: "#3b82f6", url: "#" }
    ]
  },
  {
    id: 4,
    title: "Jason",
    message: "attached the file",
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1e3).toISOString(),
    status: "info",
    progress: 100,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
    read: !0,
    category: "inbox",
    attachment: "Work examples.pdf"
  },
  {
    id: 5,
    title: "System",
    message: "Your file is being processed",
    created_at: new Date(Date.now() - 1 * 60 * 60 * 1e3).toISOString(),
    status: "info",
    progress: 45,
    read: !1,
    category: "inbox",
    actions: []
  },
  {
    id: 6,
    title: "Security",
    message: "Unusual login attempt detected",
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1e3).toISOString(),
    status: "warning",
    read: !1,
    category: "inbox",
    actions: [
      { label: "Ignore", backgroundColor: "#9ca3af", url: "#" },
      { label: "Review", backgroundColor: "#ef4444", url: "#" }
    ]
  }
], ce = {};
class ue {
  constructor(r = "", o = "notifications") {
    this.baseURL = r, this.prefix = o, this.apiBase = `${r}/${o}`;
  }
  /**
   * Make HTTP request with proper error handling
   * @param {string} url - Request URL
   * @param {Object} options - Fetch options
   * @returns {Promise} - Response data
   */
  async request(r, o = {}) {
    const s = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        ...o.headers
      },
      credentials: "include",
      // Include cookies for Laravel session
      ...o
    }, v = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
    v && (s.headers["X-CSRF-TOKEN"] = v);
    try {
      const d = await fetch(r, s);
      if (!d.ok)
        throw new Error(`HTTP error! status: ${d.status}`);
      return await d.json();
    } catch (d) {
      throw console.error("API request failed:", d), d;
    }
  }
  async getUserId() {
    return this.request(`${this.apiBase}/user`);
  }
  /**
   * Get all notifications
   * GET /notifications
   * @param {Object} params - Query parameters (page, per_page, etc.)
   * @returns {Promise} - Notifications data
   */
  async getNotifications(r = {}) {
    const o = new URLSearchParams(r).toString(), s = o ? `${this.apiBase}?${o}` : this.apiBase;
    return this.request(s);
  }
  /**
   * Get notification count
   * GET /notifications/count
   * @returns {Promise} - Count data
   */
  async getNotificationCount() {
    return this.request(`${this.apiBase}/count`);
  }
  /**
   * Get unread notifications
   * GET /notifications/unread
   * @param {Object} params - Query parameters
   * @returns {Promise} - Unread notifications data
   */
  async getUnreadNotifications(r = {}) {
    const o = new URLSearchParams(r).toString(), s = o ? `${this.apiBase}/unread?${o}` : `${this.apiBase}/unread`;
    return this.request(s);
  }
  /**
   * Get read notifications
   * GET /notifications/read
   * @param {Object} params - Query parameters
   * @returns {Promise} - Read notifications data
   */
  async getReadNotifications(r = {}) {
    const o = new URLSearchParams(r).toString(), s = o ? `${this.apiBase}/read?${o}` : `${this.apiBase}/read`;
    return this.request(s);
  }
  /**
   * Mark notification(s) as read
   * POST /notifications/read
   * @param {string|Array} notificationIds - Single ID or array of IDs
   * @returns {Promise} - Response data
   */
  async markAsRead(r) {
    const o = Array.isArray(r) ? r : [r];
    return this.request(`${this.apiBase}/read`, {
      method: "POST",
      body: JSON.stringify({ ids: o })
    });
  }
  /**
   * Mark all notifications as read
   * POST /notifications/read-all
   * @returns {Promise} - Response data
   */
  async markAllAsRead() {
    return this.request(`${this.apiBase}/read-all`, {
      method: "POST",
      body: JSON.stringify({})
    });
  }
  /**
   * Delete notification(s)
   * POST /notifications/delete
   * @param {string|Array} notificationIds - Single ID or array of IDs
   * @returns {Promise} - Response data
   */
  async deleteNotification(r) {
    const o = Array.isArray(r) ? r : [r];
    return this.request(`${this.apiBase}/delete`, {
      method: "POST",
      body: JSON.stringify({ ids: o })
    });
  }
  /**
   * Delete all notifications
   * POST /notifications/delete-all
   * @returns {Promise} - Response data
   */
  async deleteAllNotifications() {
    return this.request(`${this.apiBase}/delete-all`, {
      method: "POST",
      body: JSON.stringify({})
    });
  }
  /**
   * Batch operations helper
   * @param {string} operation - Operation type ('read', 'delete')
   * @param {Array} notificationIds - Array of notification IDs
   * @returns {Promise} - Response data
   */
  async batchOperation(r, o) {
    switch (r) {
      case "read":
        return this.markAsRead(o);
      case "delete":
        return this.deleteNotification(o);
      default:
        throw new Error(`Unknown operation: ${r}`);
    }
  }
}
const $ = new ue(
  window.location.origin,
  // Base URL
  typeof process < "u" ? process.env?.MIX_NOTIFICATION_API_PREFIX : ce?.VITE_NOTIFICATION_API_PREFIX || "notifications"
  // Prefix - can be configured
), U = (g, r) => {
  const o = g.__vccOpts || g;
  for (const [s, v] of r)
    o[s] = v;
  return o;
}, de = {
  key: 0,
  class: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
}, ge = { class: "flex items-center" }, fe = { class: "flex items-center space-x-4" }, ve = ["onClick"], he = {
  key: 0,
  class: "ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1"
}, ye = {
  key: 1,
  class: "p-6 text-center"
}, me = { class: "text-red-500 mb-2" }, pe = { class: "mb-2" }, be = {
  key: 1,
  class: "mt-4"
}, xe = { class: "text-sm" }, we = { key: 3 }, ke = ["onClick"], _e = { class: "w-10 h-10 mr-3 flex-shrink-0 flex items-center justify-center" }, Ce = ["src", "alt"], $e = {
  key: 0,
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, Ae = {
  key: 1,
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
}, Ne = {
  key: 2,
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, Se = {
  key: 3,
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
  "clip-rule": "evenodd"
}, Te = {
  key: 4,
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, Me = { class: "flex-1 min-w-0" }, Oe = { class: "flex items-center justify-between" }, Ie = { class: "flex items-center space-x-2" }, Ee = { class: "relative group" }, Be = ["onClick"], Le = ["onClick"], ze = ["onClick"], Pe = {
  key: 0,
  class: "w-2 h-2 bg-blue-500 rounded-full"
}, De = {
  key: 0,
  class: "mt-2"
}, je = { class: "flex items-center justify-between mb-1" }, Re = {
  key: 1,
  class: "flex flex-wrap gap-2 mt-3"
}, Ve = ["onClick"], qe = { class: "flex items-center" }, Ue = {
  __name: "notification",
  props: {
    notifications: {
      type: Array,
      default: () => []
    },
    user_id: {
      type: [String, Number],
      default: null
    },
    // show categories
    categories: {
      type: Array,
      default: () => [
        { id: "unread", name: "New", count: 0 },
        { id: "inbox", name: "All", count: 6 }
      ]
    },
    locales: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["notification-read", "action-clicked", "all-read", "all-deleted"],
  setup(g, { emit: r }) {
    const o = g, s = (n) => o.locales[n] || n, v = r, d = k(!1), f = k(!1), y = k("inbox"), a = k(!1), _ = k(null), w = k(Date.now()), p = k(!1), C = k(null), N = k(null), m = k([]), S = E(
      () => m.value.filter((n) => !n.read_at).length
    ), z = E(() => y.value === "unread" ? m.value.filter((n) => !n.read_at) : y.value === "read" ? m.value.filter((n) => n.read_at) : m.value), F = E(() => [
      {
        id: "inbox",
        name: "All",
        count: 0
      },
      {
        id: "unread",
        name: "New",
        count: S.value
      }
    ]), T = async () => {
      try {
        p.value = !0, C.value = null;
        const n = await $.getNotifications();
        m.value = n.data || n, console.log(m.value);
      } catch (n) {
        C.value = s("Failed to load notifications"), console.error("Error loading notifications:", n), m.value = ie();
      } finally {
        p.value = !1;
      }
    }, H = async () => {
      d.value && f.value && (f.value = !1), !d.value && m.value.length === 0 && await T(), d.value = !d.value;
    }, P = () => {
      f.value = !f.value, f.value && window.scrollTo({ top: 0, behavior: "smooth" });
    }, J = async () => {
      try {
        p.value = !0, await $.markAllAsRead(), T(), v("all-read");
      } catch (n) {
        C.value = s("Failed to mark all as read"), console.error("Error marking all as read:", n);
      } finally {
        p.value = !1;
      }
    }, X = async () => {
      if (confirm(s("Are you sure you want to delete all notifications? This action cannot be undone.")))
        try {
          p.value = !0, await $.deleteAllNotifications(), m.value = [], v("all-deleted");
        } catch (n) {
          C.value = s("Failed to delete all notifications"), console.error("Error deleting all notifications:", n);
        } finally {
          p.value = !1;
        }
    }, O = async (n) => {
      try {
        await $.markAsRead(n);
        const l = m.value.find((e) => e.id === n);
        l && (l.read_at = !0, v("notification-read", l));
      } catch (l) {
        C.value = s("Failed to mark notification as read"), console.error("Error marking notification as read:", l);
      }
    }, D = async (n) => {
      try {
        await $.deleteNotification(n);
        const l = m.value.findIndex((e) => e.id === n);
        l !== -1 && m.value.splice(l, 1);
      } catch (l) {
        C.value = s("Failed to delete notification"), console.error("Error deleting notification:", l);
      }
    }, W = async () => {
      await T();
    }, Y = async (n, l) => {
      if (v("action-clicked", { action: n, notification: l }), l.read_at || await O(l.id), (n.label.toLowerCase() === s("accept") || n.label.toLowerCase() === s("decline")) && await D(l.id), n.url && n.url !== "#") {
        const e = document.createElement("a");
        e.href = n.url, e.target = "_blank", e.rel = "noopener noreferrer", document.body.appendChild(e), e.click(), document.body.removeChild(e);
      }
    }, K = (n) => {
      N.value = N.value === n ? null : n;
    }, j = (n) => {
      _.value && !_.value.contains(n.target) && (f.value ? f.value = !1 : d.value = !1), N.value = null;
    };
    let I = null;
    return G(async () => {
      const n = await $.getUserId();
      if (!n) {
        console.error("User ID not found. Please ensure the user is authenticated.");
        return;
      }
      if (document.addEventListener("click", j), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        localStorage.getItem("notification-theme") || (a.value = e.matches);
      }), await T(), !window.Echo) {
        console.error("Laravel Echo is not defined. Please ensure it is properly imported and configured.");
        return;
      }
      console.log("Setting up Echo channel listener...", o.user_id || n || 1);
      const l = Echo.private("App.Models.User." + (o.user_id || n || 1));
      l.subscribed(() => {
        console.log("✅ Successfully subscribed to notifications channel");
      }), l.error((e) => {
        console.error("🚨 Channel subscription error:", e);
      }), l.notification((e) => {
        console.log("New notification received:", e);
        const x = m.value.find((R) => R.id === e.id);
        x ? Object.assign(x, e) : m.value.unshift(e);
      }), I = setInterval(() => {
        w.value = Date.now();
      }, 6e4);
    }), Q(() => {
      if (document.removeEventListener("click", j), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", () => {
      }), I && clearInterval(I), window.Echo) {
        const n = Echo.private("App.Models.User." + (o.user_id || userId));
        n.unlisten(".notification"), n.unsubscribe(), console.log("✅ Unsubscribed from notifications channel");
      }
    }), (n, l) => (c(), i("div", {
      class: "relative",
      ref_key: "notificationContainer",
      ref: _
    }, [
      t("button", {
        onClick: H,
        class: u(["relative p-2 cursor-pointer focus:outline-none rounded-full transition-colors", {
          "bg-blue-50 text-gray-600 hover:text-gray-800": d.value && !a.value,
          "bg-blue-900/20 text-gray-300 hover:text-gray-100": d.value && a.value,
          "text-gray-600 hover:text-gray-800": !d.value && !a.value,
          "text-gray-300 hover:text-gray-100": !d.value && a.value
        }])
      }, [
        l[3] || (l[3] = t("svg", {
          class: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          t("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          })
        ], -1)),
        S.value > 0 ? (c(), i("span", de, h(S.value > 99 ? "99+" : S.value), 1)) : b("", !0)
      ], 2),
      Z(ee, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        default: te(() => [
          d.value ? (c(), i("div", {
            key: 0,
            class: u([
              "z-50 shadow-xl border",
              a.value ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200",
              f.value ? "fixed top-0 right-0 h-full flex flex-col w-2/5 rounded-l-lg overflow-hidden" : "absolute right-0 mt-2 w-96 rounded-lg"
            ]),
            onClick: l[2] || (l[2] = A(() => {
            }, ["stop"]))
          }, [
            t("div", {
              class: u(["flex items-center justify-between p-4", a.value ? "border-b border-gray-700" : "border-b border-gray-200"])
            }, [
              t("div", ge, [
                t("h3", {
                  class: u(["text-lg font-semibold", a.value ? "text-white" : "text-gray-900"])
                }, h(s("Notifications")), 3),
                f.value ? (c(), i("span", {
                  key: 0,
                  class: u(["ml-2 text-sm", a.value ? "text-gray-400" : "text-gray-500"])
                }, "(" + h(m.value.length) + ")", 3)) : b("", !0)
              ]),
              t("div", fe, [
                (c(), i("svg", {
                  "aria-label": "Mark all as read",
                  onClick: J,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: u([a.value ? "text-gray-200 hover:text-gray-400" : "text-gray-500 hover:text-gray-700", "lucide w-6 h-6 cursor-pointer p-1 rounded-full lucide-check-check-icon lucide-check-check"])
                }, l[4] || (l[4] = [
                  t("path", { d: "M18 6 7 17l-5-5" }, null, -1),
                  t("path", { d: "m22 10-7.5 7.5L13 16" }, null, -1)
                ]), 2)),
                (c(), i("svg", {
                  "aria-label": "Delete all notifications",
                  onClick: X,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: u([a.value ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700", "lucide cursor-pointer p-1 rounded-full w-6 h-6 lucide-trash-icon lucide-trash"])
                }, l[5] || (l[5] = [
                  t("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }, null, -1),
                  t("path", { d: "M3 6h18" }, null, -1),
                  t("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, null, -1)
                ]), 2)),
                f.value ? (c(), i("button", {
                  key: 0,
                  onClick: P,
                  class: u(a.value ? "p-1 rounded-full hover:bg-gray-700" : "p-1 rounded-full hover:bg-gray-100"),
                  "aria-label": "Close expanded view"
                }, l[6] || (l[6] = [
                  t("svg", {
                    class: "w-5 h-5 text-gray-500",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    t("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]), 2)) : b("", !0)
              ])
            ], 2),
            t("div", {
              class: u(["flex", a.value ? "border-b border-gray-700" : "border-b border-gray-200"])
            }, [
              (c(!0), i(B, null, L(F.value, (e) => (c(), i("button", {
                key: e.id,
                onClick: (x) => y.value = e.id,
                class: u(["flex-1 px-4 py-3 text-sm font-medium text-center border-b-2 transition-colors", [
                  y.value === e.id ? a.value ? "border-blue-500 text-blue-400 bg-blue-900/20" : "border-blue-500 text-blue-600 bg-blue-50" : a.value ? "border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                ]])
              }, [
                q(h(s(e.name)) + " ", 1),
                e.count > 0 ? (c(), i("span", he, h(e.count), 1)) : b("", !0)
              ], 10, ve))), 128))
            ], 2),
            t("div", {
              class: u(["overflow-y-auto", f.value ? "h-full" : "max-h-96"])
            }, [
              p.value ? (c(), i("div", {
                key: 0,
                class: u(["p-6 text-center", a.value ? "text-gray-400" : "text-gray-500"])
              }, [
                l[7] || (l[7] = t("svg", {
                  class: "animate-spin -ml-1 mr-3 h-5 w-5 inline",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  t("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  t("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1)),
                t("span", null, h(s("Loading notifications")) + "...", 1)
              ], 2)) : C.value ? (c(), i("div", ye, [
                t("div", me, h(C.value), 1),
                t("button", {
                  onClick: W,
                  class: u(["text-sm px-4 py-2 rounded transition-colors", a.value ? "bg-gray-700 hover:bg-gray-600 text-gray-200" : "bg-gray-100 hover:bg-gray-200 text-gray-700"])
                }, h(s("Try Again")), 3)
              ])) : z.value.length === 0 ? (c(), i("div", {
                key: 2,
                class: u(["p-6 text-center", a.value ? "text-gray-400" : "text-gray-500"])
              }, [
                t("div", pe, h(y.value === "unread" ? s("No unread notifications") : y.value === "read" ? s("No read notifications") : m.value.length === 0 ? s("No notifications yet") : s("No notifications")), 1),
                y.value !== "inbox" && m.value.length > 0 ? (c(), i("button", {
                  key: 0,
                  onClick: l[0] || (l[0] = (e) => y.value = "inbox"),
                  class: "text-sm text-blue-500 hover:text-blue-600"
                }, h(s("View all notifications")), 1)) : m.value.length === 0 ? (c(), i("div", be, [
                  (c(), i("svg", {
                    class: u(["w-12 h-12 mx-auto mb-4 opacity-50", a.value ? "text-gray-600" : "text-gray-300"]),
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, l[8] || (l[8] = [
                    t("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    }, null, -1)
                  ]), 2)),
                  t("p", xe, h(s("You're all caught up!")), 1)
                ])) : b("", !0)
              ], 2)) : (c(), i("div", we, [
                (c(!0), i(B, null, L(z.value, (e) => (c(), i("div", {
                  key: e.id,
                  onClick: (x) => O(e.id),
                  class: u(["flex items-start cursor-pointer p-4 transition-colors", [
                    { "border-b last:border-b-0": !0 },
                    a.value ? { "hover:bg-gray-800 border-gray-700": !0, "bg-blue-900/10": !e.read_at } : { "hover:bg-gray-50 border-gray-100": !0, "bg-blue-50": !e.read_at }
                  ]])
                }, [
                  t("div", _e, [
                    e.avatar ? (c(), i("img", {
                      key: 0,
                      src: e.avatar,
                      alt: e.title,
                      class: "w-10 h-10 rounded-full"
                    }, null, 8, Ce)) : (c(), i("div", {
                      key: 1,
                      class: u(["w-10 h-10 rounded-full flex items-center justify-center", M(se)(e.status, a.value)])
                    }, [
                      (c(), i("svg", {
                        class: u(["w-5 h-5", M(ne)(e.status, a.value)]),
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        e.status === "info" ? (c(), i("path", $e)) : e.status === "success" ? (c(), i("path", Ae)) : e.status === "warning" ? (c(), i("path", Ne)) : e.status === "error" ? (c(), i("path", Se)) : (c(), i("path", Te))
                      ], 2))
                    ], 2))
                  ]),
                  t("div", Me, [
                    t("div", Oe, [
                      t("p", {
                        class: u(["text-sm font-medium", a.value ? "text-gray-100" : "text-gray-900"])
                      }, h(s(e.title)), 3),
                      t("div", Ie, [
                        t("span", {
                          class: u(["text-xs", a.value ? "text-gray-400" : "text-gray-500"])
                        }, h(M(oe)(e.created_at, w.value.value, g.locales)), 3),
                        t("div", Ee, [
                          t("button", {
                            class: u(["p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity", a.value ? "hover:bg-gray-700" : "hover:bg-gray-100"]),
                            onClick: A((x) => K(e.id), ["stop"])
                          }, [
                            (c(), i("svg", {
                              class: u(["w-4 h-4", a.value ? "text-gray-400" : "text-gray-500"]),
                              fill: "currentColor",
                              viewBox: "0 0 20 20"
                            }, l[9] || (l[9] = [
                              t("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }, null, -1)
                            ]), 2))
                          ], 10, Be),
                          N.value === e.id ? (c(), i("div", {
                            key: 0,
                            class: u(["absolute right-0 mt-1 w-40 rounded-md shadow-lg z-10", a.value ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"]),
                            onClick: l[1] || (l[1] = A(() => {
                            }, ["stop"]))
                          }, [
                            e.read_at ? b("", !0) : (c(), i("button", {
                              key: 0,
                              onClick: (x) => O(e.id),
                              class: u(["w-full text-left px-4 py-2 text-sm hover:bg-opacity-80 transition-colors", a.value ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"])
                            }, h(s("Mark as Read")), 11, Le)),
                            t("button", {
                              onClick: (x) => D(e.id),
                              class: u(["w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-opacity-80 transition-colors", a.value ? "hover:bg-gray-700" : "hover:bg-gray-100"])
                            }, h(s("Delete")), 11, ze)
                          ], 2)) : b("", !0)
                        ]),
                        e.read_at ? b("", !0) : (c(), i("div", Pe))
                      ])
                    ]),
                    t("p", {
                      class: u(["text-sm mt-1", a.value ? "text-gray-300" : "text-gray-600"])
                    }, h(e.message), 3),
                    e.progress !== void 0 && e.progress !== null ? (c(), i("div", De, [
                      t("div", je, [
                        t("span", {
                          class: u(["text-xs", a.value ? "text-gray-400" : "text-gray-500"])
                        }, h(s("Progress")), 3),
                        t("span", {
                          class: u(["text-xs font-medium", a.value ? "text-gray-300" : "text-gray-700"])
                        }, h(e.progress) + "% ", 3)
                      ]),
                      t("div", {
                        class: u(["w-full rounded-full h-2", a.value ? "bg-gray-700" : "bg-gray-200"])
                      }, [
                        t("div", {
                          class: u(["h-2 rounded-full progress-bar", [
                            {
                              "bg-blue-500": e.status === "info" || !e.status,
                              "bg-yellow-500": e.status === "warning",
                              "bg-red-500": e.status === "error",
                              "bg-green-500": e.status === "success"
                            }
                          ]]),
                          style: V({ width: `${e.progress}%` })
                        }, null, 6)
                      ], 2)
                    ])) : b("", !0),
                    e.actions ? (c(), i("div", Re, [
                      (c(!0), i(B, null, L(e.actions, (x) => (c(), i("button", {
                        key: x.label,
                        onClick: A((R) => Y(x, e), ["stop"]),
                        class: "px-3 py-1 text-xs font-medium rounded transition-colors",
                        style: V({
                          backgroundColor: x.backgroundColor || "#f3f4f6",
                          color: M(le)(x.backgroundColor)
                        })
                      }, h(s(x.label)), 13, Ve))), 128))
                    ])) : b("", !0),
                    e.attachment ? (c(), i("div", {
                      key: 2,
                      class: u(["mt-3 p-2 rounded border", a.value ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"])
                    }, [
                      t("div", qe, [
                        (c(), i("svg", {
                          class: u(["w-4 h-4 mr-2", a.value ? "text-gray-400" : "text-gray-500"]),
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, l[10] || (l[10] = [
                          t("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          }, null, -1)
                        ]), 2)),
                        t("span", {
                          class: u(["text-sm", a.value ? "text-gray-300" : "text-gray-700"])
                        }, h(e.attachment), 3)
                      ])
                    ], 2)) : b("", !0)
                  ])
                ], 10, ke))), 128))
              ]))
            ], 2),
            t("div", {
              class: u(["p-4", a.value ? "border-t border-gray-700" : "border-t border-gray-200"])
            }, [
              t("button", {
                onClick: P,
                class: u(["w-full text-center text-sm font-medium", a.value ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"])
              }, h(f.value ? s("Collapse View") : s("View all notifications")), 3)
            ], 2)
          ], 2)) : b("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
}, Ze = /* @__PURE__ */ U(Ue, [["__scopeId", "data-v-096117b0"]]), Fe = { class: "confirmation-content" }, He = { class: "confirmation-title" }, Je = { class: "confirmation-message" }, Xe = { class: "confirmation-actions" }, We = ["disabled"], Ye = {
  key: 0,
  class: "loading-spinner"
}, Ke = {
  __name: "confirmation",
  props: {
    title: {
      type: String,
      default: "Confirm Action"
    },
    message: {
      type: String,
      default: "Are you sure you want to proceed?"
    },
    confirmText: {
      type: String,
      default: "Delete"
    },
    cancelText: {
      type: String,
      default: "Cancel"
    },
    loadingText: {
      type: String,
      default: "Processing..."
    },
    confirmType: {
      type: String,
      default: "danger",
      // 'danger', 'warning', 'success', 'primary'
      validator: (g) => ["danger", "warning", "success", "primary"].includes(g)
    },
    closeOnOverlayClick: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["confirm", "cancel", "close"],
  setup(g, { expose: r, emit: o }) {
    const s = g, v = o, d = k(!0), f = k(!1), y = async () => {
      f.value = !0;
      try {
        await v("confirm");
      } finally {
        f.value = !1;
      }
    }, a = () => {
      v("cancel"), w();
    }, _ = () => {
      s.closeOnOverlayClick && a();
    }, w = () => {
      d.value = !1, v("close");
    };
    return r({
      close: w,
      show: () => {
        d.value = !0;
      }
    }), (p, C) => d.value ? (c(), i("div", {
      key: 0,
      class: "confirmation-overlay",
      onClick: _
    }, [
      t("div", {
        class: "confirmation-dialog",
        onClick: C[0] || (C[0] = A(() => {
        }, ["stop"]))
      }, [
        t("div", Fe, [
          t("h3", He, h(g.title), 1),
          t("p", Je, h(g.message), 1)
        ]),
        t("div", Xe, [
          t("button", {
            type: "button",
            class: "btn btn-cancel",
            onClick: a
          }, h(g.cancelText), 1),
          t("button", {
            type: "button",
            class: "btn btn-confirm",
            onClick: y,
            disabled: f.value
          }, [
            f.value ? (c(), i("span", Ye)) : b("", !0),
            q(" " + h(f.value ? g.loadingText : g.confirmText), 1)
          ], 8, We)
        ])
      ])
    ])) : b("", !0);
  }
}, Ge = /* @__PURE__ */ U(Ke, [["__scopeId", "data-v-c367d6fe"]]);
function et() {
  const g = (v = {}) => new Promise((d, f) => {
    const y = document.createElement("div");
    document.body.appendChild(y);
    const _ = { ...{
      title: "Confirm Action",
      message: "Are you sure you want to proceed?",
      confirmText: "Confirm",
      cancelText: "Cancel",
      confirmType: "danger",
      closeOnOverlayClick: !0
    }, ...v }, w = re({
      render() {
        return ae(Ge, {
          ..._,
          onConfirm: () => {
            p(), d(!0);
          },
          onCancel: () => {
            p(), d(!1);
          },
          onClose: () => {
            p(), d(!1);
          }
        });
      }
    }), p = () => {
      setTimeout(() => {
        w.unmount(), y.parentNode && y.parentNode.removeChild(y);
      }, 200);
    };
    w.mount(y);
  });
  return {
    showConfirmation: g,
    confirmDelete: (v = "All your photos will be permanently removed and you won't be able to see them again, including the ones you've shared with your friends.") => g({
      title: "You're about to delete your account",
      message: v,
      confirmText: "Delete",
      confirmType: "danger"
    }),
    confirmAction: (v, d, f = "Confirm") => g({
      title: v,
      message: d,
      confirmText: f,
      confirmType: "primary"
    }),
    confirmWarning: (v, d, f = "Proceed") => g({
      title: v,
      message: d,
      confirmText: f,
      confirmType: "warning"
    })
  };
}
export {
  Ze as default,
  et as useConfirmation
};
