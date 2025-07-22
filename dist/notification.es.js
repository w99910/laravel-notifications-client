(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-300:oklch(80.8% .114 19.571);--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-300:oklch(90.5% .182 98.111);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-100:oklch(96.2% .044 156.743);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-900:oklch(39.3% .095 152.535);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--radius-md:.375rem;--radius-lg:.5rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.collapse{visibility:collapse}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.-top-1{top:calc(var(--spacing)*-1)}.top-0{top:calc(var(--spacing)*0)}.-right-1{right:calc(var(--spacing)*-1)}.right-0{right:calc(var(--spacing)*0)}.isolate{isolation:isolate}.z-10{z-index:10}.z-50{z-index:50}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-1{margin-left:calc(var(--spacing)*-1)}.ml-2{margin-left:calc(var(--spacing)*2)}.block{display:block}.contents{display:contents}.flex{display:flex}.inline{display:inline}.table{display:table}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-full{height:100%}.max-h-96{max-height:calc(var(--spacing)*96)}.w-2{width:calc(var(--spacing)*2)}.w-2\\/5{width:40%}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-40{width:calc(var(--spacing)*40)}.w-96{width:calc(var(--spacing)*96)}.w-full{width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-4>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*4)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-x-reverse)))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-l-lg{border-top-left-radius:var(--radius-lg);border-bottom-left-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-blue-500{border-color:var(--color-blue-500)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-700{border-color:var(--color-gray-700)}.border-transparent{border-color:#0000}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-900{background-color:var(--color-blue-900)}.bg-blue-900\\/10{background-color:#1c398e1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-900\\/10{background-color:color-mix(in oklab,var(--color-blue-900)10%,transparent)}}.bg-blue-900\\/20{background-color:#1c398e33}@supports (color:color-mix(in lab,red,red)){.bg-blue-900\\/20{background-color:color-mix(in oklab,var(--color-blue-900)20%,transparent)}}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-100{background-color:var(--color-green-100)}.bg-green-500{background-color:var(--color-green-500)}.bg-green-900{background-color:var(--color-green-900)}.bg-red-100{background-color:var(--color-red-100)}.bg-red-500{background-color:var(--color-red-500)}.bg-red-900{background-color:var(--color-red-900)}.bg-white{background-color:var(--color-white)}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-900{background-color:var(--color-yellow-900)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.text-center{text-align:center}.text-left{text-align:left}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-blue-300{color:var(--color-blue-300)}.text-blue-400{color:var(--color-blue-400)}.text-blue-500{color:var(--color-blue-500)}.text-blue-600{color:var(--color-blue-600)}.text-gray-100{color:var(--color-gray-100)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-300{color:var(--color-green-300)}.text-green-600{color:var(--color-green-600)}.text-red-300{color:var(--color-red-300)}.text-red-400{color:var(--color-red-400)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.text-yellow-300{color:var(--color-yellow-300)}.text-yellow-400{color:var(--color-yellow-400)}.text-yellow-600{color:var(--color-yellow-600)}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-75{--tw-duration:75ms;transition-duration:75ms}.duration-200{--tw-duration:.2s;transition-duration:.2s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media (hover:hover){.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:text-blue-300:hover{color:var(--color-blue-300)}.hover\\:text-blue-600:hover{color:var(--color-blue-600)}.hover\\:text-blue-800:hover{color:var(--color-blue-800)}.hover\\:text-gray-100:hover{color:var(--color-gray-100)}.hover\\:text-gray-200:hover{color:var(--color-gray-200)}.hover\\:text-gray-400:hover{color:var(--color-gray-400)}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-gray-800:hover{color:var(--color-gray-800)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}.max-h-96[data-v-c05afd7a]::-webkit-scrollbar,.h-\\[calc\\(100\\%-142px\\)\\][data-v-c05afd7a]::-webkit-scrollbar{width:4px}.max-h-96[data-v-c05afd7a]::-webkit-scrollbar-track,.h-\\[calc\\(100\\%-142px\\)\\][data-v-c05afd7a]::-webkit-scrollbar-track{background:#f1f1f1}.max-h-96[data-v-c05afd7a]::-webkit-scrollbar-thumb,.h-\\[calc\\(100\\%-142px\\)\\][data-v-c05afd7a]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:2px}.max-h-96[data-v-c05afd7a]::-webkit-scrollbar-thumb:hover,.h-\\[calc\\(100\\%-142px\\)\\][data-v-c05afd7a]::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.fixed[data-v-c05afd7a]{transition:width .3s ease,right .3s ease}.progress-bar[data-v-c05afd7a]{transition:width .8s cubic-bezier(.4,0,.2,1);transform-origin:left}@keyframes pulse-progress-c05afd7a{0%,to{opacity:1}50%{opacity:.8;transform:scaleY(1.1)}}.progress-bar[data-v-c05afd7a]:not([style*="100%"]){animation:pulse-progress-c05afd7a 2s ease-in-out infinite}')),document.head.appendChild(r)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { ref as x, computed as T, onMounted as Y, onUnmounted as K, createElementBlock as l, openBlock as n, createElementVNode as a, createVNode as G, normalizeClass as i, createCommentVNode as b, toDisplayString as p, Transition as Q, withCtx as Z, withModifiers as A, Fragment as z, renderList as E, createTextVNode as D, unref as B, normalizeStyle as P } from "vue";
const ee = (h, t) => {
  if (!h) return "";
  const u = t || Date.now(), v = new Date(h), d = u - v.getTime(), c = Math.floor(d / (1e3 * 60)), y = Math.floor(d / (1e3 * 60 * 60)), r = Math.floor(d / (1e3 * 60 * 60 * 24)), k = Math.floor(r / 7), _ = Math.floor(r / 30), m = Math.floor(r / 365);
  return c < 1 ? "Just now" : c < 60 ? `${c} minute${c > 1 ? "s" : ""} ago` : y < 24 ? `${y} hour${y > 1 ? "s" : ""} ago` : r < 7 ? `${r} day${r > 1 ? "s" : ""} ago` : k < 4 ? `${k} week${k > 1 ? "s" : ""} ago` : _ < 12 ? `${_} month${_ > 1 ? "s" : ""} ago` : `${m} year${m > 1 ? "s" : ""} ago`;
}, te = (h, t) => {
  switch (h) {
    case "success":
      return t ? "bg-green-900" : "bg-green-100";
    case "warning":
      return t ? "bg-yellow-900" : "bg-yellow-100";
    case "error":
      return t ? "bg-red-900" : "bg-red-100";
    case "info":
    default:
      return t ? "bg-blue-900" : "bg-blue-100";
  }
}, re = (h, t) => {
  switch (h) {
    case "success":
      return t ? "text-green-300" : "text-green-600";
    case "warning":
      return t ? "text-yellow-300" : "text-yellow-600";
    case "error":
      return t ? "text-red-300" : "text-red-600";
    case "info":
    default:
      return t ? "text-blue-300" : "text-blue-600";
  }
}, ae = (h) => {
  if (!h || h === "#f3f4f6") return "#1f2937";
  let t = h.replace("#", "");
  t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
  const u = parseInt(t.substring(0, 2), 16), v = parseInt(t.substring(2, 4), 16), d = parseInt(t.substring(4, 6), 16);
  return (0.299 * u + 0.587 * v + 0.114 * d) / 255 > 0.5 ? "#1f2937" : "#ffffff";
}, se = () => [
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
];
class oe {
  constructor(t = "", u = "notifications") {
    this.baseURL = t, this.prefix = u, this.apiBase = `${t}/${u}`;
  }
  /**
   * Make HTTP request with proper error handling
   * @param {string} url - Request URL
   * @param {Object} options - Fetch options
   * @returns {Promise} - Response data
   */
  async request(t, u = {}) {
    const v = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        ...u.headers
      },
      credentials: "include",
      // Include cookies for Laravel session
      ...u
    }, d = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
    d && (v.headers["X-CSRF-TOKEN"] = d);
    try {
      const c = await fetch(t, v);
      if (!c.ok)
        throw new Error(`HTTP error! status: ${c.status}`);
      return await c.json();
    } catch (c) {
      throw console.error("API request failed:", c), c;
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
  async getNotifications(t = {}) {
    const u = new URLSearchParams(t).toString(), v = u ? `${this.apiBase}?${u}` : this.apiBase;
    return this.request(v);
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
  async getUnreadNotifications(t = {}) {
    const u = new URLSearchParams(t).toString(), v = u ? `${this.apiBase}/unread?${u}` : `${this.apiBase}/unread`;
    return this.request(v);
  }
  /**
   * Get read notifications
   * GET /notifications/read
   * @param {Object} params - Query parameters
   * @returns {Promise} - Read notifications data
   */
  async getReadNotifications(t = {}) {
    const u = new URLSearchParams(t).toString(), v = u ? `${this.apiBase}/read?${u}` : `${this.apiBase}/read`;
    return this.request(v);
  }
  /**
   * Mark notification(s) as read
   * POST /notifications/read
   * @param {string|Array} notificationIds - Single ID or array of IDs
   * @returns {Promise} - Response data
   */
  async markAsRead(t) {
    const u = Array.isArray(t) ? t : [t];
    return this.request(`${this.apiBase}/read`, {
      method: "POST",
      body: JSON.stringify({ ids: u })
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
  async deleteNotification(t) {
    const u = Array.isArray(t) ? t : [t];
    return this.request(`${this.apiBase}/delete`, {
      method: "POST",
      body: JSON.stringify({ ids: u })
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
  async batchOperation(t, u) {
    switch (t) {
      case "read":
        return this.markAsRead(u);
      case "delete":
        return this.deleteNotification(u);
      default:
        throw new Error(`Unknown operation: ${t}`);
    }
  }
}
const C = new oe(
  window.location.origin,
  // Base URL
  "notifications"
  // Prefix - can be configured
), le = (h, t) => {
  const u = h.__vccOpts || h;
  for (const [v, d] of t)
    u[v] = d;
  return u;
}, ne = {
  key: 0,
  class: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
}, ie = { class: "flex items-center" }, ue = { class: "flex items-center space-x-4" }, ce = ["onClick"], de = {
  key: 0,
  class: "ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1"
}, ge = {
  key: 1,
  class: "p-6 text-center"
}, ve = { class: "text-red-500 mb-2" }, fe = { class: "mb-2" }, he = {
  key: 1,
  class: "mt-4"
}, ye = { key: 3 }, pe = { class: "w-10 h-10 mr-3 flex-shrink-0 flex items-center justify-center" }, be = ["src", "alt"], me = {
  key: 0,
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, xe = {
  key: 1,
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
}, we = {
  key: 2,
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, ke = {
  key: 3,
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
  "clip-rule": "evenodd"
}, _e = {
  key: 4,
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, Ce = { class: "flex-1 min-w-0" }, Ne = { class: "flex items-center justify-between" }, Se = { class: "flex items-center space-x-2" }, Me = { class: "relative group" }, $e = ["onClick"], Ae = ["onClick"], Be = ["onClick"], Le = {
  key: 0,
  class: "w-2 h-2 bg-blue-500 rounded-full"
}, Te = {
  key: 0,
  class: "mt-2"
}, ze = { class: "flex items-center justify-between mb-1" }, Ee = {
  key: 1,
  class: "flex flex-wrap gap-2 mt-3"
}, Ie = ["href", "onClick"], Oe = { class: "flex items-center" }, qe = {
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
        { id: "inbox", name: "All", count: 6 },
        { id: "unread", name: "New", count: 0 }
      ]
    }
  },
  emits: ["notification-read", "action-clicked", "all-read", "all-deleted"],
  setup(h, { emit: t }) {
    const u = h, v = t, d = x(!1), c = x(!1), y = x("inbox"), r = x(!1), k = x(null), _ = x(Date.now()), m = x(!1), w = x(null), N = x(null), f = x([]), S = T(
      () => f.value.filter((o) => !o.read_at).length
    ), I = T(() => y.value === "unread" ? f.value.filter((o) => !o.read_at) : y.value === "read" ? f.value.filter((o) => o.read_at) : f.value), R = T(() => [
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
    ]), M = async () => {
      try {
        m.value = !0, w.value = null;
        const o = await C.getNotifications();
        f.value = o.data || o, console.log(f.value);
      } catch (o) {
        w.value = "Failed to load notifications", console.error("Error loading notifications:", o), f.value = se();
      } finally {
        m.value = !1;
      }
    }, U = async () => {
      d.value && c.value && (c.value = !1), !d.value && f.value.length === 0 && await M(), d.value = !d.value;
    }, O = () => {
      c.value = !c.value, c.value && window.scrollTo({ top: 0, behavior: "smooth" });
    }, H = async () => {
      try {
        m.value = !0, await C.markAllAsRead(), M(), v("all-read");
      } catch (o) {
        w.value = "Failed to mark notifications as read", console.error("Error marking all as read:", o);
      } finally {
        m.value = !1;
      }
    }, F = async () => {
      if (confirm("Are you sure you want to delete all notifications? This action cannot be undone."))
        try {
          m.value = !0, await C.deleteAllNotifications(), f.value = [], v("all-deleted");
        } catch (o) {
          w.value = "Failed to delete all notifications", console.error("Error deleting all notifications:", o);
        } finally {
          m.value = !1;
        }
    }, q = async (o) => {
      try {
        await C.markAsRead(o);
        const s = f.value.find((e) => e.id === o);
        s && (s.read_at = !0, v("notification-read", s));
      } catch (s) {
        w.value = "Failed to mark notification as read", console.error("Error marking notification as read:", s);
      }
    }, j = async (o) => {
      try {
        await C.deleteNotification(o);
        const s = f.value.findIndex((e) => e.id === o);
        s !== -1 && f.value.splice(s, 1);
      } catch (s) {
        w.value = "Failed to delete notification", console.error("Error deleting notification:", s);
      }
    }, J = async () => {
      await M();
    }, X = async (o, s) => {
      v("action-clicked", { action: o, notification: s }), s.read_at || await q(s.id), (o.label.toLowerCase() === "accept" || o.label.toLowerCase() === "decline") && await j(s.id), o.url && o.url !== "#" && (window.location.href = o.url);
    }, W = (o) => {
      N.value = N.value === o ? null : o;
    }, V = (o) => {
      k.value && !k.value.contains(o.target) && (c.value ? c.value = !1 : d.value = !1), N.value = null;
    };
    let L = null;
    return Y(async () => {
      if (!await C.getUserId()) {
        console.error("User ID not found. Please ensure the user is authenticated.");
        return;
      }
      if (document.addEventListener("click", V), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        localStorage.getItem("notification-theme") || (r.value = e.matches);
      }), await M(), !window.Echo) {
        console.error("Laravel Echo is not defined. Please ensure it is properly imported and configured.");
        return;
      }
      console.log("Setting up Echo channel listener...");
      const s = Echo.private("App.Models.User." + (u.user_id || 1));
      s.subscribed(() => {
        console.log("✅ Successfully subscribed to notifications channel");
      }), s.error((e) => {
        console.error("🚨 Channel subscription error:", e);
      }), s.notification((e) => {
        console.log("New notification received:", e);
        const g = f.value.find(($) => $.id === e.id);
        g ? Object.assign(g, e) : f.value.unshift(e);
      }), L = setInterval(() => {
        _.value = Date.now();
      }, 6e4), setTimeout(() => {
        const e = f.value.find((g) => g.id === 5);
        if (e && e.progress < 100) {
          let g = e.progress;
          const $ = setInterval(() => {
            g += Math.random() * 15, g >= 100 ? (g = 100, e.progress = g, e.message = "File processing completed successfully!", e.status = "success", e.actions = [
              { label: "View", backgroundColor: "#3b82f6", url: "#" }
            ], clearInterval($)) : e.progress = Math.floor(g);
          }, 2e3);
        }
      }, 3e3);
    }), K(() => {
      if (document.removeEventListener("click", V), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", () => {
      }), L && clearInterval(L), window.Echo) {
        const o = Echo.private("App.Models.User." + (u.user_id || userId));
        o.unlisten(".notification"), o.unsubscribe(), console.log("✅ Unsubscribed from notifications channel");
      }
    }), (o, s) => (n(), l("div", {
      class: "relative",
      ref_key: "notificationContainer",
      ref: k
    }, [
      a("button", {
        onClick: U,
        class: i(["relative p-2 cursor-pointer focus:outline-none rounded-full transition-colors", {
          "bg-blue-50 text-gray-600 hover:text-gray-800": d.value && !r.value,
          "bg-blue-900/20 text-gray-300 hover:text-gray-100": d.value && r.value,
          "text-gray-600 hover:text-gray-800": !d.value && !r.value,
          "text-gray-300 hover:text-gray-100": !d.value && r.value
        }])
      }, [
        s[3] || (s[3] = a("svg", {
          class: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          a("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          })
        ], -1)),
        S.value > 0 ? (n(), l("span", ne, p(S.value > 99 ? "99+" : S.value), 1)) : b("", !0)
      ], 2),
      G(Q, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        default: Z(() => [
          d.value ? (n(), l("div", {
            key: 0,
            class: i([
              "z-50 shadow-xl border",
              r.value ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200",
              c.value ? "fixed top-0 right-0 h-full flex flex-col w-2/5 rounded-l-lg overflow-hidden" : "absolute right-0 mt-2 w-96 rounded-lg"
            ]),
            onClick: s[2] || (s[2] = A(() => {
            }, ["stop"]))
          }, [
            a("div", {
              class: i(["flex items-center justify-between p-4", r.value ? "border-b border-gray-700" : "border-b border-gray-200"])
            }, [
              a("div", ie, [
                a("h3", {
                  class: i(["text-lg font-semibold", r.value ? "text-white" : "text-gray-900"])
                }, " Notifications", 2),
                c.value ? (n(), l("span", {
                  key: 0,
                  class: i(["ml-2 text-sm", r.value ? "text-gray-400" : "text-gray-500"])
                }, "(" + p(f.value.length) + ")", 3)) : b("", !0)
              ]),
              a("div", ue, [
                (n(), l("svg", {
                  "aria-label": "Mark all as read",
                  onClick: H,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: i([r.value ? "text-gray-200 hover:text-gray-400" : "text-gray-500 hover:text-gray-700", "lucide w-6 h-6 cursor-pointer p-1 rounded-full lucide-check-check-icon lucide-check-check"])
                }, s[4] || (s[4] = [
                  a("path", { d: "M18 6 7 17l-5-5" }, null, -1),
                  a("path", { d: "m22 10-7.5 7.5L13 16" }, null, -1)
                ]), 2)),
                (n(), l("svg", {
                  "aria-label": "Delete all notifications",
                  onClick: F,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: i([r.value ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700", "lucide cursor-pointer p-1 rounded-full w-6 h-6 lucide-trash-icon lucide-trash"])
                }, s[5] || (s[5] = [
                  a("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }, null, -1),
                  a("path", { d: "M3 6h18" }, null, -1),
                  a("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, null, -1)
                ]), 2)),
                c.value ? (n(), l("button", {
                  key: 0,
                  onClick: O,
                  class: i(r.value ? "p-1 rounded-full hover:bg-gray-700" : "p-1 rounded-full hover:bg-gray-100"),
                  "aria-label": "Close expanded view"
                }, s[6] || (s[6] = [
                  a("svg", {
                    class: "w-5 h-5 text-gray-500",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    a("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]), 2)) : b("", !0)
              ])
            ], 2),
            a("div", {
              class: i(["flex", r.value ? "border-b border-gray-700" : "border-b border-gray-200"])
            }, [
              (n(!0), l(z, null, E(R.value, (e) => (n(), l("button", {
                key: e.id,
                onClick: (g) => y.value = e.id,
                class: i(["flex-1 px-4 py-3 text-sm font-medium text-center border-b-2 transition-colors", [
                  y.value === e.id ? r.value ? "border-blue-500 text-blue-400 bg-blue-900/20" : "border-blue-500 text-blue-600 bg-blue-50" : r.value ? "border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                ]])
              }, [
                D(p(e.name) + " ", 1),
                e.count > 0 ? (n(), l("span", de, p(e.count), 1)) : b("", !0)
              ], 10, ce))), 128))
            ], 2),
            a("div", {
              class: i(["overflow-y-auto", c.value ? "h-full" : "max-h-96"])
            }, [
              m.value ? (n(), l("div", {
                key: 0,
                class: i(["p-6 text-center", r.value ? "text-gray-400" : "text-gray-500"])
              }, s[7] || (s[7] = [
                a("svg", {
                  class: "animate-spin -ml-1 mr-3 h-5 w-5 inline",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  a("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  a("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1),
                D(" Loading notifications... ")
              ]), 2)) : w.value ? (n(), l("div", ge, [
                a("div", ve, p(w.value), 1),
                a("button", {
                  onClick: J,
                  class: i(["text-sm px-4 py-2 rounded transition-colors", r.value ? "bg-gray-700 hover:bg-gray-600 text-gray-200" : "bg-gray-100 hover:bg-gray-200 text-gray-700"])
                }, " Try Again ", 2)
              ])) : I.value.length === 0 ? (n(), l("div", {
                key: 2,
                class: i(["p-6 text-center", r.value ? "text-gray-400" : "text-gray-500"])
              }, [
                a("div", fe, p(y.value === "unread" ? "No unread notifications" : y.value === "read" ? "No read notifications" : f.value.length === 0 ? "No notifications yet" : "No notifications"), 1),
                y.value !== "inbox" && f.value.length > 0 ? (n(), l("button", {
                  key: 0,
                  onClick: s[0] || (s[0] = (e) => y.value = "inbox"),
                  class: "text-sm text-blue-500 hover:text-blue-600"
                }, " View all notifications ")) : f.value.length === 0 ? (n(), l("div", he, [
                  (n(), l("svg", {
                    class: i(["w-12 h-12 mx-auto mb-4 opacity-50", r.value ? "text-gray-600" : "text-gray-300"]),
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, s[8] || (s[8] = [
                    a("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    }, null, -1)
                  ]), 2)),
                  s[9] || (s[9] = a("p", { class: "text-sm" }, "You're all caught up!", -1))
                ])) : b("", !0)
              ], 2)) : (n(), l("div", ye, [
                (n(!0), l(z, null, E(I.value, (e) => (n(), l("div", {
                  key: e.id,
                  class: i(["flex items-start p-4 transition-colors", [
                    { "border-b last:border-b-0": !0 },
                    r.value ? { "hover:bg-gray-800 border-gray-700": !0, "bg-blue-900/10": !e.read_at } : { "hover:bg-gray-50 border-gray-100": !0, "bg-blue-50": !e.read_at }
                  ]])
                }, [
                  a("div", pe, [
                    e.avatar ? (n(), l("img", {
                      key: 0,
                      src: e.avatar,
                      alt: e.title,
                      class: "w-10 h-10 rounded-full"
                    }, null, 8, be)) : (n(), l("div", {
                      key: 1,
                      class: i(["w-10 h-10 rounded-full flex items-center justify-center", B(te)(e.status, r.value)])
                    }, [
                      (n(), l("svg", {
                        class: i(["w-5 h-5", B(re)(e.status, r.value)]),
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        e.status === "info" ? (n(), l("path", me)) : e.status === "success" ? (n(), l("path", xe)) : e.status === "warning" ? (n(), l("path", we)) : e.status === "error" ? (n(), l("path", ke)) : (n(), l("path", _e))
                      ], 2))
                    ], 2))
                  ]),
                  a("div", Ce, [
                    a("div", Ne, [
                      a("p", {
                        class: i(["text-sm font-medium", r.value ? "text-gray-100" : "text-gray-900"])
                      }, p(e.title), 3),
                      a("div", Se, [
                        a("span", {
                          class: i(["text-xs", r.value ? "text-gray-400" : "text-gray-500"])
                        }, p(B(ee)(e.created_at, _.value.value)), 3),
                        a("div", Me, [
                          a("button", {
                            class: i(["p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity", r.value ? "hover:bg-gray-700" : "hover:bg-gray-100"]),
                            onClick: A((g) => W(e.id), ["stop"])
                          }, [
                            (n(), l("svg", {
                              class: i(["w-4 h-4", r.value ? "text-gray-400" : "text-gray-500"]),
                              fill: "currentColor",
                              viewBox: "0 0 20 20"
                            }, s[10] || (s[10] = [
                              a("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }, null, -1)
                            ]), 2))
                          ], 10, $e),
                          N.value === e.id ? (n(), l("div", {
                            key: 0,
                            class: i(["absolute right-0 mt-1 w-40 rounded-md shadow-lg z-10", r.value ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"]),
                            onClick: s[1] || (s[1] = A(() => {
                            }, ["stop"]))
                          }, [
                            e.read_at ? b("", !0) : (n(), l("button", {
                              key: 0,
                              onClick: (g) => q(e.id),
                              class: i(["w-full text-left px-4 py-2 text-sm hover:bg-opacity-80 transition-colors", r.value ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"])
                            }, " Mark as read ", 10, Ae)),
                            a("button", {
                              onClick: (g) => j(e.id),
                              class: i(["w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-opacity-80 transition-colors", r.value ? "hover:bg-gray-700" : "hover:bg-gray-100"])
                            }, " Delete ", 10, Be)
                          ], 2)) : b("", !0)
                        ]),
                        e.read_at ? b("", !0) : (n(), l("div", Le))
                      ])
                    ]),
                    a("p", {
                      class: i(["text-sm mt-1", r.value ? "text-gray-300" : "text-gray-600"])
                    }, p(e.message), 3),
                    e.progress !== void 0 && e.progress !== null ? (n(), l("div", Te, [
                      a("div", ze, [
                        a("span", {
                          class: i(["text-xs", r.value ? "text-gray-400" : "text-gray-500"])
                        }, "Progress", 2),
                        a("span", {
                          class: i(["text-xs font-medium", r.value ? "text-gray-300" : "text-gray-700"])
                        }, p(e.progress) + "% ", 3)
                      ]),
                      a("div", {
                        class: i(["w-full rounded-full h-2", r.value ? "bg-gray-700" : "bg-gray-200"])
                      }, [
                        a("div", {
                          class: i(["h-2 rounded-full progress-bar", [
                            {
                              "bg-blue-500": e.status === "info" || !e.status,
                              "bg-yellow-500": e.status === "warning",
                              "bg-red-500": e.status === "error",
                              "bg-green-500": e.status === "success"
                            }
                          ]]),
                          style: P({ width: `${e.progress}%` })
                        }, null, 6)
                      ], 2)
                    ])) : b("", !0),
                    e.actions ? (n(), l("div", Ee, [
                      (n(!0), l(z, null, E(e.actions, (g) => (n(), l("a", {
                        key: g.label,
                        href: g.url,
                        onClick: A(($) => X(g, e), ["prevent"]),
                        class: "px-3 py-1 text-xs font-medium rounded transition-colors",
                        style: P({
                          backgroundColor: g.backgroundColor || "#f3f4f6",
                          color: B(ae)(g.backgroundColor)
                        })
                      }, p(g.label), 13, Ie))), 128))
                    ])) : b("", !0),
                    e.attachment ? (n(), l("div", {
                      key: 2,
                      class: i(["mt-3 p-2 rounded border", r.value ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"])
                    }, [
                      a("div", Oe, [
                        (n(), l("svg", {
                          class: i(["w-4 h-4 mr-2", r.value ? "text-gray-400" : "text-gray-500"]),
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, s[11] || (s[11] = [
                          a("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          }, null, -1)
                        ]), 2)),
                        a("span", {
                          class: i(["text-sm", r.value ? "text-gray-300" : "text-gray-700"])
                        }, p(e.attachment), 3)
                      ])
                    ], 2)) : b("", !0)
                  ])
                ], 2))), 128))
              ]))
            ], 2),
            a("div", {
              class: i(["p-4", r.value ? "border-t border-gray-700" : "border-t border-gray-200"])
            }, [
              a("button", {
                onClick: O,
                class: i(["w-full text-center text-sm font-medium", r.value ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"])
              }, p(c.value ? "Collapse view" : "View all notifications"), 3)
            ], 2)
          ], 2)) : b("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
}, Ve = /* @__PURE__ */ le(qe, [["__scopeId", "data-v-c05afd7a"]]);
export {
  Ve as default
};
