(this["webpackJsonplinkedin-face-rec"]=this["webpackJsonplinkedin-face-rec"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},28:function(e,t){},29:function(e,t){},30:function(e,t){},33:function(e,t,n){"use strict";n.r(t);var i=n(4),c=n.n(i),s=n(12),r=n.n(s),a=(n(19),n(20),n(14)),o=n(9),d=n.n(o),h=n(13),u=n(3),p=n(2),l=function(){var e=Object(h.a)(d.a.mark((function e(t){var n,i,c,s,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("Loading models"),e.next=3,u.e.ssdMobilenetv1.loadFromUri("/models");case 3:return e.next=5,u.e.faceRecognitionNet.loadFromUri("/models");case 5:return e.next=7,u.e.faceLandmark68Net.loadFromUri("/models");case 7:return t("Creating descriptors"),"bimesh_linkedin_pic",e.next=11,u.c("bimesh_linkedin_pic").withFaceLandmarks().withFaceDescriptors();case 11:return n=e.sent,i=[new u.b("Bimesh",[n[0].descriptor])],c=new u.a(i),"bimesh_test_pic",e.next=17,u.d("bimesh_test_pic").withFaceLandmarks().withFaceDescriptor();case 17:s=e.sent,t("Creating descriptors..."),s?(a=c.findBestMatch(s.descriptor),console.log(a),r="Detected person (distance): "+a.toString()):r="No match found",console.log(r),t(r);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var b=function(e){var t=Object(i.useState)(""),n=Object(a.a)(t,2),c=n[0],s=n[1];return Object(i.useEffect)((function(){l(s)}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"FaceRec!"}),Object(p.jsx)("p",{children:c})]})};var m=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("img",{id:"bimesh_linkedin_pic",src:"/linkedin_data/pics/bimesh.jpeg",alt:"bimesh_linkedin_pic",width:"400px",height:"auto"}),Object(p.jsx)("img",{id:"bimesh_test_pic",src:"test_pics/bimesh.jpg",alt:"bimesh_test_pic",width:"400px",height:"auto"}),Object(p.jsx)(b,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.30194448.chunk.js.map