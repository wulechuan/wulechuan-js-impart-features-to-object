!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){window.WulechuanImpartationOperator=n(1);var r=new window.WulechuanImpartationOperator,o={};r.impart.anInstanceOf(function(){this.lovelyName="this is my original name"}).whenConstructed().nameIt("newShiningProperty").withASetterForTheChiefProperty(function(e,t){console.log('Chief property setter invoked with "'+t+'"'),e.lovelyName=t}).addAttributesDirectlyUnderGrantee({lovelyName:"${ChiefName}DirectlyAccessibleLovelyName"}).to(o),console.log('\na.newShiningProperty.lovelyName: "'+o.newShiningProperty.lovelyName+'"'),console.log('a.newShiningPropertyDirectlyAccessibleLovelyName: "'+o.newShiningProperty.lovelyName+'"'),console.group('\nTry the customized setter, which simply changes the value of the "lovelyName" property.'),console.log(""),console.warn("a.newShiningProperty = 'wulechuan';\n"),o.newShiningProperty="wulechuan",console.log('\na.newShiningProperty.lovelyName: "'+o.newShiningProperty.lovelyName+'"\n'),console.log('a.newShiningPropertyDirectlyAccessibleLovelyName: "'+o.newShiningProperty.lovelyName+'"\n'),console.groupEnd(),console.log(""),console.warn("a.newShiningPropertyDirectlyAccessibleLovelyName = 'Softimage XSI';"),o.newShiningPropertyDirectlyAccessibleLovelyName="Softimage XSI",console.log('a.newShiningProperty.lovelyName: "'+o.newShiningProperty.lovelyName+'"\n'),window.a=o},function(e,t,n){e.exports=n(2)},function(e,t,n){function r(){function e(e){return t(e),r(),fe}function t(e){U=e,me.setPreferredNaturalLanguageTo(e),Ae.setPreferredNaturalLanguageTo(e)}function r(e){for(var t in K)if(t!==e){var n=K[t];delete fe[n]}}function o(e){return{isAFunction:function(){return"function"==typeof e},isNotAFunction:function(){return"function"!=typeof e},isNeitherAnObjectNorAnArray:function(){return!e||"object"!=typeof e},isAValidObject:function(){return!!e&&"object"==typeof e&&!Array.isArray(e)},isNotAValidObject:function(){return!o(e).isAValidObject()},isAnArray:function(){return Array.isArray(e)},isNotAnArray:function(){return!Array.isArray(e)},isAnEmptyString:function(){return!e&&"string"==typeof e},isANonEmptyString:function(){return!!e&&"string"==typeof e},isAValidKey:function(){return o(e).isANonEmptyString()},isNotAValidKey:function(){return!o(e).isAValidKey()}}}function i(e){var t,n,r="Unkown error occurred.";if(e)if("string"==typeof e)r=e;else if("object"==typeof e&&!Array.isArray(e)){var i=e[U];if(o(i).isANonEmptyString())r=i;else for(var a in e)if(i=e[a],o(i).isANonEmptyString()){t=!0,n=a,r=i;break}}if(t&&(r="["+n+"] "+r),P)throw TypeError("\n"+r);console.error(TypeError("\n"+r))}function a(e,t){if(o(e).isAValidObject()&&o(t).isAValidObject())for(var n in t)t[n]&&(e[n]=t[n]);return e}function s(e){o(e).isNeitherAnObjectNorAnArray()?(i({"zh-CN":"首个参数必须为一个非空对象，可以为数组对象。\n而实际提供的首个参数是一个"+typeof e+"。","en-US":"The provided source must be an object that is not a null. An array object is allowed. \nWhat's actually provided was of type: "+typeof e+"."}),Ae.abort()):V=e}function u(e){o(e).isNotAFunction()?(i({"zh-CN":"首个参数必须为一个函数。其将被视为一个构造函数以构造一个对象。该对象之属性和方法将被传授给受封者。\n而实际提供的首个参数是一个"+typeof e+"。","en-US":"The provided source must be a function, which will be used as a constructor to create the object to impart to a grantee.\nWhat's actually provided was of type: "+typeof e+"."}),me.abort()):(o(F=(O=e)[oe]).isNotAValidObject()&&(F={}),h(ie)&&(E=F[ie],x=ie,de=!1,pe=!0))}function c(e){z=e}function l(){V=new O(z)}function f(e){h(e)?(E=F[e],x=e,de=!1,pe=!1):("string"!=typeof e&&(e=typeof e),i({"zh-CN":"未找到指定的变体。输入参数为：“"+e+"”。","en-US":'The desired profile name was invalid. No profile was matched by that name. \nThe input was "'+e+'".'}),me.abort())}function h(e){return!o(e).isNotAValidKey()&&o(F[e]).isAValidObject()}function d(e){if(o(e).isANonEmptyString()){var t={};t[ue]=e,e=t}o(e).isAValidObject()?a(ge,e):(me.abort(),Ae.abort())}function p(e){o(e).isAFunction()&&(I=e)}function g(e){o(e).isAValidObject()?a(ye,e):(me.abort(),Ae.abort())}function y(e){return o(e).isNeitherAnObjectNorAnArray()?(i({"zh-CN":"受封者必须是一个标准对象或数组，且不可为空对象（null）。","en-US":"The grantee to impart methods and properties to must be an object or an array, and not a null."}),me.abort(),void Ae.abort()):(k=e,v()?V:void 0)}function v(){return b(),N(),S(),T(),!0}function b(){if(E){if(m(E[ue]),o(I).isAFunction()){var e=E[ce];o(e).isAFunction()&&(I=e)}A(x[ae],!0),A(x[se],!1)}m(ge[ue]),delete ge[ue],A(ge,!0),A(ye,!1)}function m(e){o(e).isAValidKey()&&(L=e)}function A(e,t){var n;if(!o(e).isNotAValidObject()){n=t?ve:be;var r,a,s,u,c,l,f,h,d,p;for(r in e)if(!o(r).isNotAValidKey()){if(l="",s=!1,(a=V.hasOwnProperty(r))?l=r:(f=n[r])&&(s=!0,(h=o(f).isAFunction())||(l=f)),u=e[r],c=o(u).isAFunction()){if(s){i({"zh-CN":"名称“"+r+"”"+(h?"已另有函数定义其内容，":"已定义为属性“"+f+"”之别名，")+"不应再以一函数重新定义之。","en-US":'The caption "'+r+'"'+(h?"is already defined via another function, ":'is already mapped to the attribute "'+f+'" as an alias of its, ')+"and should not be redefined."}),me.abort(),Ae.abort();continue}}else if(!a&&!s){i({"zh-CN":"给定对象或给定类之实例没有名为“"+r+"”的属性;同时也没有此别名。","en-US":"The provided object, or the instance of the provided class doesn't have an attribute named \""+r+'".Nor does an alias match this caption.'}),me.abort(),Ae.abort();continue}o(u).isNotAnArray()&&(p=[u]);for(var g=0;g<p.length;g++)d=p[g],V.hasOwnProperty(d)?d!==l&&(i({"zh-CN":"所选别名“‘"+d+"”与另一属性重名。","en-US":'The alias "'+d+'" is actually another existing attribute.'}),me.abort(),Ae.abort()):d===r||(n[d]=c?u:l)}}}function N(){if(!L)return w(),!1;var e={enumerable:!0,get:function(){return V}};o(I).isAFunction()&&(e.set=function(e){I(V,e)}),Object.defineProperty(k,L,e)}function w(){var e='\n\t"'+[J[0],Q[0],Q[1]].join('\n\t"')+'"\n',t="而每欲传授对象至它物，该对象本身作为受封物之属性，亦须定名。请采用以下任意方法函数为其定名："+e,n="Note that an object to impart, as it would be an attribute of the grantee, needs a name itself.\nPlease use any of these methods below to give it a name:"+e;i(de?{"zh-CN":"所给出的“类”没有名为“"+ie+"”的默认变体。程序亦未指定采用其它变体。现欲传授该类之实例对象至它物，其传授后之名称却未知。"+t,"en-US":"The class doesn't have the default profile, which should have been named \""+ie+'". You are allowed not to use the default profile. But... '+n}:pe?{"zh-CN":"所给出的“类”的默认变体（即，“"+ie+"”）被采用，但该变体未指明奖被传授之实例对象所应采用之名称。"+t,"en-US":'For the given class, the "'+ie+'" profile is used, while the profile does not provide the attribute name for the instance object. '+n}:{"zh-CN":"行将传授所给出“对象”之属性至它物，其传授后之名称却未知。"+t,"en-US":"The given object is about to impart to the grantee, but the attribute name is not provided yet."+n})}function S(){for(var e in ve){var t=ve[e];o(t).isAFunction()?C(V,e,t,null):j(t,e,V)}}function T(){for(var e in be){var t=be[e];o(t).isAFunction()?C(k,e,t,V):j(t,e,k)}}function j(e,t,n){var r={enumerable:!0,get:function(){return V[e]}};o(V[e]).isNotAFunction()&&(r.set=function(t){V[e]=t});for(var i=0;i<le.length;i++)t=t.replace(le[i],L);Object.defineProperty(n,t,r)}function C(e,t,n,r){o(r).isAValidObject()&&(n=n.bind(r)),e[t]=n}var P,U,O,z,F,x,E,V,I,L,k,D=n(3),K={"zh-CN":"传授","en-US":"impart"},R=["此对象"],W=["theObject"],B=["此类"],G=["anInstanceOf","anInstanceOfClass"],$=["依据"],q=["withTheseOptions"],X=["之实例","之实例对象","构建之实例","构建之实例对象"],M=["whenConstructed"],Y=["视作"],H=["as","treatAs","usingThisProfile"],J=["且定名为","并添加以下别名"],Q=["nameIt","nameItself","addAliasesForThese","addAliasesForAttributes"],Z=["并以此函数为主属性之setter","主属性之赋值器为"],_=["withASetterForTheChiefProperty","useThisSetterForTheChiefProperty","theChiefPropertySetterBeing"],ee=["且为受体设以下直接可用之属性"],te=["addAttributesDirectlyUnderGrantee"],ne=["予"],re=["to"],oe="wulechuanImpartationProfiles",ie="default",ae="attributesAliasesToAdd",se="attributesToAddDirectlyUnderGrantee",ue="chiefPropertyNameForTheObjectItself",ce="chiefPropertySetter",le=[new RegExp("\\$\\{主名称\\}","g"),new RegExp("\\$\\{[cC]hief[nN]ame\\}","g")],fe=this,he={},de=!0,pe=!1,ge={},ye={},ve={},be={},me=function(){var e=new D(fe,U);return e.addStage(u,{"zh-CN":B,"en-US":G}),e.addStage(c,!0,{"zh-CN":$,"en-US":q}),e.addStage(l,{"zh-CN":X,"en-US":M}),e.addStage(f,!0,{"zh-CN":Y,"en-US":H}),e.addStage(d,!0,{"zh-CN":J,"en-US":Q}),e.addStage(p,!0,{"zh-CN":Z,"en-US":_}),e.addStage(g,!0,{"zh-CN":ee,"en-US":te}),e.addStage(y,{"zh-CN":ne,"en-US":re}),e}(),Ae=function(){var e=new D(fe,U);return e.addStage(s,{"zh-CN":R,"en-US":W}),e.addStage(d,!0,{"zh-CN":J,"en-US":Q}),me.addStage(p,!0,{"zh-CN":Z,"en-US":_}),e.addStage(g,!0,{"zh-CN":ee,"en-US":te}),e.addStage(y,{"zh-CN":ne,"en-US":re}),me}();!function(){for(var t in K)he[t]||(he[t]=function(t){return e.bind(fe,t)}(t))}(),function(){for(var e in K){var t=K[e];Object.defineProperty(fe,t,{configurable:!0,enumerable:!0,get:he[e]})}}()}e.exports=r},function(e,t){function n(e,t){function n(e){return Array.isArray(e)&&e.length>0}function r(t,n,r){if("function"!=typeof t)throw TypeError('A so-called stage is basically a function, with some associated aliases just for conveniences, which not only does some demonded work but also exposes subsequence stages and hides past stages for a given stages operator. Among them, the demonded work is provided by you developer via the first argument, So, when defining a stage, the first argument must be a function, \nwhile the provided value was of type "'+typeof t+'".');2===arguments.length&&(r=n,n=!1);var i=o(r),a=m.length;i.stageIndex=a,i.usingLanguage="";var s={actionAliases:i,allowsToSkip:n,action:function(){if(d)return a===m.length-1?void 0:e;A=a;var n=t.apply(e,arguments);return u(),a===m.length-1?n:e}};return m.push(s),s}function o(e){var t={},r=!1;if("string"==typeof e){if(!e)throw RangeError("An alias for a method must not be an empty string");if(!p)throw TypeError("Before the preferred language is set, the language an alias of a method is in must be specified explicitly.");var o={};o[p]=[e],e=o}else if(!e||"object"!=typeof e)throw TypeError("The action aliases argument must be an object, containing at least one alias which is marked as in a specified language.");for(var i in e){var a=e[i];if(a&&"string"==typeof a&&(a=[a],e[i]=a),n(a)){for(var s=[],u=0;u<a.length;u++){var c=a[u];c&&"string"==typeof c&&s.push(c)}s.length<1?console.warn('Non of the entries in language "'+i+'" are valid.'):(r=!0,t[i]=s,!w[i]&&(N.push(i),w[i]=!0))}}if(!r)throw TypeError("At least one alias is required for a stage action to publish as a method.");return t}function i(e,t){var r=e[t];if(n(r))return e.usingLanguage=t,r;var o,i=!1;for(o in e)if(r=e[o],n(r)){i=!0,e.usingLanguage=o;break}if(!i)throw ReferenceError("No valid aliases in any language for stage "+e.stageIndex+"!");return console.warn("For stage",e.stageIndex,', none of the aliases is in the preferred language ("'+t+'").','\nInstead, aliases in "'+o+'" are exposed as methods.'),r}function a(e){if(!e)throw TypeError("Must specify the natural language to use.");p=e,l()}function s(){m[0].action.apply(e,arguments)}function u(){c(),f(A+1)}function c(){for(var t=0;t<=A;t++)for(var n=m[t].actionAliases,r=n[n.usingLanguage],o=0;o<r.length;o++){var i=r[o];delete e[i]}}function l(){m.length<1||p&&(b[v]=s,h(0,1))}function f(e){var t,n=m.length;for(t=e;t<m.length-1;t++)if(!m[t].allowsToSkip){n=t+1;break}h(e,n)}function h(t,n){for(var r=t;r<n;r++)for(var o=m[r],a=o.action,s=i(o.actionAliases,p),u=0;u<s.length;u++){var c=s[u];e[c]=a}}var d,p,g="addStage",y="setPreferredNaturalLanguageTo",v="startFromFirstStage",b=this,m=[],A=NaN,N=[],w={};t&&"string"==typeof t&&(p=t),b[g]=function(){d=!1,r.apply(b,arguments),b[g]=r,b[y]=a,l()},b[y]=a,b.abort=function(){A>=0?(d=!0,console.error("The process is stopped at stage",A)):console.info("The execution process has not started yet.")}}e.exports=n}]);