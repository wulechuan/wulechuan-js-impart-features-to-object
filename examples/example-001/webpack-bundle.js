!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){window.WulechuanImpartationOperator=n(1);var r=new window.WulechuanImpartationOperator,o={};r.impart.anInstanceOf(function(){this.lovelyName="this is my original name"}).whenConstructed().nameIt("newShiningProperty").withASetterForTheChiefProperty(function(e,t){console.log('Chief property setter invoked with "'+t+'"'),e.lovelyName=t}).addAttributesDirectlyUnderGrantee({lovelyName:"${ChiefName}DirectlyAccessibleLovelyName"}).to(o),console.log('\na.newShiningProperty.lovelyName: "'+o.newShiningProperty.lovelyName+'"'),console.log('a.newShiningPropertyDirectlyAccessibleLovelyName: "'+o.newShiningProperty.lovelyName+'"'),console.group('\nTry the customized setter, which simply changes the value of the "lovelyName" property.'),console.log(""),console.warn("a.newShiningProperty = 'wulechuan';\n"),o.newShiningProperty="wulechuan",console.log('\na.newShiningProperty.lovelyName: "'+o.newShiningProperty.lovelyName+'"\n'),console.log('a.newShiningPropertyDirectlyAccessibleLovelyName: "'+o.newShiningProperty.lovelyName+'"\n'),console.groupEnd(),console.log(""),console.warn("a.newShiningPropertyDirectlyAccessibleLovelyName = 'Softimage XSI';"),o.newShiningPropertyDirectlyAccessibleLovelyName="Softimage XSI",console.log('a.newShiningProperty.lovelyName: "'+o.newShiningProperty.lovelyName+'"\n'),window.a=o},function(e,t,n){e.exports=n(2)},function(e,t,n){function r(){function e(e){return t(e),r(),le}function t(e){P=e,Ae.setPreferredNaturalLanguageTo(e),Ne.setPreferredNaturalLanguageTo(e)}function r(e){for(var t in D)if(t!==e){var n=D[t];delete le[n]}}function o(e){return{isAFunction:function(){return"function"==typeof e},isNotAFunction:function(){return"function"!=typeof e},isNeitherAnObjectNorAnArray:function(){return!e||"object"!=typeof e},isAValidObject:function(){return!!e&&"object"==typeof e&&!Array.isArray(e)},isNotAValidObject:function(){return!o(e).isAValidObject()},isAnArray:function(){return Array.isArray(e)},isNotAnArray:function(){return!Array.isArray(e)},isAnEmptyString:function(){return!e&&"string"==typeof e},isANonEmptyString:function(){return!!e&&"string"==typeof e},isAValidKey:function(){return o(e).isANonEmptyString()},isNotAValidKey:function(){return!o(e).isAValidKey()}}}function a(e){var t,n,r="Unkown error occurred.";if(e)if("string"==typeof e)r=e;else if("object"==typeof e&&!Array.isArray(e)){var a=e[P];if(o(a).isANonEmptyString())r=a;else for(var i in e)if(a=e[i],o(a).isANonEmptyString()){t=!0,n=i,r=a;break}}if(t&&(r="["+n+"] "+r),C)throw TypeError("\n"+r);console.error(TypeError("\n"+r))}function i(e,t){if(o(e).isAValidObject()&&o(t).isAValidObject())for(var n in t)t[n]&&(e[n]=t[n]);return e}function s(e){o(e).isNeitherAnObjectNorAnArray()?(a({"zh-CN":"首个参数必须为一个非空对象，可以为数组对象。\n而实际提供的首个参数是一个"+typeof e+"。","en-US":"The provided source must be an object that is not a null. An array object is allowed. \nWhat's actually provided was of type: "+typeof e+"."}),Ne.abort()):F=e}function u(e){o(e).isNotAFunction()?(a({"zh-CN":"首个参数必须为一个函数。其将被视为一个构造函数以构造一个对象。该对象之属性和方法将被传授给受封者。\n而实际提供的首个参数是一个"+typeof e+"。","en-US":"The provided source must be a function, which will be used as a constructor to create the object to impart to a grantee.\nWhat's actually provided was of type: "+typeof e+"."}),Ae.abort()):O=e,o(z=O[re]).isNotAValidObject()&&(z={}),h(oe)&&(E=z[oe],x=oe,he=!1,de=!0)}function c(e){U=e}function l(){F=new O(U)}function f(e){h(e)?(E=z[e],x=e,he=!1,de=!1):("string"!=typeof e&&(e=typeof e),a({"zh-CN":"未找到指定的变体。输入参数为：“"+e+"”。","en-US":'The desired profile name was invalid. No profile was matched by that name. \nThe input was "'+e+'".'}),Ae.abort())}function h(e){return!o(e).isNotAValidKey()&&o(z[e]).isAValidObject()}function d(e){if(o(e).isANonEmptyString()){var t={};t[se]=e,e=t}o(e).isAValidObject()?i(ge,e):(Ae.abort(),Ne.abort())}function g(e){o(e).isAFunction()&&(V=e)}function p(e){o(e).isAValidObject()?i(pe,e):(Ae.abort(),Ne.abort())}function y(e){return o(e).isNeitherAnObjectNorAnArray()?(a({"zh-CN":"受封者必须是一个标准对象或数组，且不可为空对象（null）。","en-US":"The grantee to impart methods and properties to must be an object or an array, and not a null."}),Ae.abort(),void Ne.abort()):(L=e,v()?F:void 0)}function v(){return b(),N(),S(),T(),!0}function b(){if(E){if(m(E[se]),o(V).isAFunction()){var e=E[ue];o(e).isAFunction()&&(V=e)}A(x[ae],!0),A(x[ie],!1)}m(ge[se]),delete ge[se],A(ge,!0),A(pe,!1)}function m(e){o(e).isAValidKey()&&(I=e)}function A(e,t){var n,r;if(!o(e).isNotAValidObject()){t?(n=ye,r=ve):(n=be,r=me);var i,s,u,c,l,f,h;for(i in e)if(!o(i).isNotAValidKey())if(e[i],(s=F.hasOwnProperty(i))?(c=i,u=!1):(c=r[i])&&(u=!0),s||u){o(f=e[i]).isNotAnArray()&&(f=[f]),o(n[c]).isNotAValidObject()&&(n[c]={}),h=n[c];for(var d=0;d<f.length;d++)l=f[d],F.hasOwnProperty(l)?l!==c&&(a({"zh-CN":"所选别名“‘"+l+"”与另一属性重名。","en-US":'The alias "'+l+'" is actually another existing attribute.'}),Ae.abort(),Ne.abort()):l===i||(h[l]=!0,r[l]=c)}else a({"zh-CN":"给定对象或给定类之实例没有名为“"+i+"”的属性;同时也没有此别名。","en-US":"The provided object, or the instance of the provided class doesn't have an attribute named \""+i+'".Nor does an alias match this caption.'}),Ae.abort(),Ne.abort()}}function N(){if(!I)return w(),!1;var e={enumerable:!0,get:function(){return F}};o(V).isAFunction()&&(e.set=function(e){V(F,e)}),Object.defineProperty(L,I,e)}function w(){var e='\n\t"'+[H[0],J[0],J[1]].join('\n\t"')+'"\n',t="而每欲传授对象至它物，该对象本身作为受封物之属性，亦须定名。请采用以下任意方法函数为其定名："+e,n="Note that an object to impart, as it would be an attribute of the grantee, needs a name itself.\nPlease use any of these methods below to give it a name:"+e;a(he?{"zh-CN":"所给出的“类”没有名为“"+oe+"”的默认变体。程序亦未指定采用其它变体。现欲传授该类之实例对象至它物，其传授后之名称却未知。"+t,"en-US":"The class doesn't have the default profile, which should have been named \""+oe+'". You are allowed not to use the default profile. But... '+n}:de?{"zh-CN":"所给出的“类”的默认变体（即，“"+oe+"”）被采用，但该变体未指明奖被传授之实例对象所应采用之名称。"+t,"en-US":'For the given class, the "'+oe+'" profile is used, while the profile does not provide the attribute name for the instance object. '+n}:{"zh-CN":"行将传授所给出“对象”之属性至它物，其传授后之名称却未知。"+t,"en-US":"The given object is about to impart to the grantee, but the attribute name is not provided yet."+n})}function S(){for(var e in ve)j(ve[e],e,F)}function T(){for(var e in me)j(me[e],e,L)}function j(e,t,n){var r={enumerable:!0,get:function(){return F[e]}};o(F[e]).isNotAFunction()&&(r.set=function(t){F[e]=t});for(var a=0;a<ce.length;a++)t=t.replace(ce[a],I);Object.defineProperty(n,t,r)}var C,P,O,U,z,x,E,F,V,I,L,k=n(3),D={"zh-CN":"传授","en-US":"impart"},K=["此对象"],R=["theObject"],W=["此类"],B=["anInstanceOf","anInstanceOfClass"],G=["依据"],$=["withTheseOptions"],q=["之实例","之实例对象","构建之实例","构建之实例对象"],X=["whenConstructed"],M=["视作"],Y=["as","treatAs","usingThisProfile"],H=["且定名为","并添加以下别名"],J=["nameIt","nameItself","addAliasesForThese","addAliasesForAttributes"],Q=["并以此函数为主属性之setter","主属性之赋值器为"],Z=["withASetterForTheChiefProperty","useThisSetterForTheChiefProperty","theChiefPropertySetterBeing"],_=["且为受体设以下直接可用之属性"],ee=["addAttributesDirectlyUnderGrantee"],te=["予"],ne=["to"],re="wulechuanImpartationProfiles",oe="default",ae="attributesAliasesToAdd",ie="attributesToAddDirectlyUnderGrantee",se="chiefPropertyNameForTheObjectItself",ue="chiefPropertySetter",ce=[new RegExp("\\$\\{主名称\\}","g"),new RegExp("\\$\\{[cC]hief[nN]ame\\}","g")],le=this,fe={},he=!0,de=!1,ge={},pe={},ye={},ve={},be={},me={},Ae=function(){var e=new k(le,P);return e.addStage(u,{"zh-CN":W,"en-US":B}),e.addStage(c,!0,{"zh-CN":G,"en-US":$}),e.addStage(l,{"zh-CN":q,"en-US":X}),e.addStage(f,!0,{"zh-CN":M,"en-US":Y}),e.addStage(d,!0,{"zh-CN":H,"en-US":J}),e.addStage(g,!0,{"zh-CN":Q,"en-US":Z}),e.addStage(p,!0,{"zh-CN":_,"en-US":ee}),e.addStage(y,{"zh-CN":te,"en-US":ne}),e}(),Ne=function(){var e=new k(le,P);return e.addStage(s,{"zh-CN":K,"en-US":R}),e.addStage(d,!0,{"zh-CN":H,"en-US":J}),Ae.addStage(g,!0,{"zh-CN":Q,"en-US":Z}),e.addStage(p,!0,{"zh-CN":_,"en-US":ee}),e.addStage(y,{"zh-CN":te,"en-US":ne}),Ae}();!function(){for(var t in D)fe[t]||(fe[t]=function(t){return e.bind(le,t)}(t))}(),function(){for(var e in D){var t=D[e];Object.defineProperty(le,t,{configurable:!0,enumerable:!0,get:fe[e]})}}()}e.exports=r},function(e,t){function n(e,t){function n(e){return Array.isArray(e)&&e.length>0}function r(t,n,r){if("function"!=typeof t)throw TypeError('A so-called stage is basically a function, with some associated aliases just for conveniences, which not only does some demonded work but also exposes subsequence stages and hides past stages for a given stages operator. Among them, the demonded work is provided by you developer via the first argument, So, when defining a stage, the first argument must be a function, \nwhile the provided value was of type "'+typeof t+'".');2===arguments.length&&(r=n,n=!1);var a=o(r),i=m.length;a.stageIndex=i,a.usingLanguage="";var s={actionAliases:a,allowsToSkip:n,action:function(){if(d)return i===m.length-1?void 0:e;A=i;var n=t.apply(e,arguments);return u(),i===m.length-1?n:e}};return m.push(s),s}function o(e){var t={},r=!1;if("string"==typeof e){if(!e)throw RangeError("An alias for a method must not be an empty string");if(!g)throw TypeError("Before the preferred language is set, the language an alias of a method is in must be specified explicitly.");var o={};o[g]=[e],e=o}else if(!e||"object"!=typeof e)throw TypeError("The action aliases argument must be an object, containing at least one alias which is marked as in a specified language.");for(var a in e){var i=e[a];if(i&&"string"==typeof i&&(i=[i],e[a]=i),n(i)){for(var s=[],u=0;u<i.length;u++){var c=i[u];c&&"string"==typeof c&&s.push(c)}s.length<1?console.warn('Non of the entries in language "'+a+'" are valid.'):(r=!0,t[a]=s,!w[a]&&(N.push(a),w[a]=!0))}}if(!r)throw TypeError("At least one alias is required for a stage action to publish as a method.");return t}function a(e,t){var r=e[t];if(n(r))return e.usingLanguage=t,r;var o,a=!1;for(o in e)if(r=e[o],n(r)){a=!0,e.usingLanguage=o;break}if(!a)throw ReferenceError("No valid aliases in any language for stage "+e.stageIndex+"!");return console.warn("For stage",e.stageIndex,', none of the aliases is in the preferred language ("'+t+'").','\nInstead, aliases in "'+o+'" are exposed as methods.'),r}function i(e){if(!e)throw TypeError("Must specify the natural language to use.");g=e,l()}function s(){m[0].action.apply(e,arguments)}function u(){c(),f(A+1)}function c(){for(var t=0;t<=A;t++)for(var n=m[t].actionAliases,r=n[n.usingLanguage],o=0;o<r.length;o++){var a=r[o];delete e[a]}}function l(){m.length<1||g&&(b[v]=s,h(0,1))}function f(e){var t,n=m.length;for(t=e;t<m.length-1;t++)if(!m[t].allowsToSkip){n=t+1;break}h(e,n)}function h(t,n){for(var r=t;r<n;r++)for(var o=m[r],i=o.action,s=a(o.actionAliases,g),u=0;u<s.length;u++){var c=s[u];e[c]=i}}var d,g,p="addStage",y="setPreferredNaturalLanguageTo",v="startFromFirstStage",b=this,m=[],A=NaN,N=[],w={};t&&"string"==typeof t&&(g=t),b[p]=function(){d=!1,r.apply(b,arguments),b[p]=r,b[y]=i,l()},b[y]=i,b.abort=function(){A>=0?(d=!0,console.error("The process is stopped at stage",A)):console.info("The execution process has not started yet.")}}e.exports=n}]);