import{d as k,h as b,i as F,j as S,k as e,g as s,n as a,l as m,m as i,b as l,p as y,e as f,f as d,q as P,s as n,t as O,v as A,x as H,y as M,z as D}from"./index-DylCICe-.js";const B="/images/apps/magisk.webp",C="/images/apps/mi_home.png",w="/images/apps/mi_note.png",I="/images/apps/mi_soundrecorder.webp",E="/images/apps/qq_music.jpg",T="/images/apps/starNote.webp",V="/images/apps/mi_music.png",W="/images/apps/samsung_browser.png",N="/images/apps/bodian.webp",Q="/images/apps/honor_music.png",X="/images/apps/pianoperfect.webp",R="/images/apps/flipaclip.png",U="/images/apps/habicat.webp",Z="/images/apps/gamecores.webp",z="/images/apps/youshi.webp",Y="/images/apps/sspai.png",$={class:"setting"},q={class:"mt-5"},L={class:"px-4 sm:px-0"},j={class:"mt-6 border-gray-100"},G={class:"divide-gray-100 mb-5"},J={class:"px-4 flex sm:grid sm:px-0"},K={key:0,class:"px-4 flex sm:grid sm:px-0 mt-5"},_={class:"px-4 flex sm:grid sm:px-0 mt-5"},c={key:1,class:"px-4 flex sm:grid sm:px-0 mt-5"},h={key:2,class:"px-4 flex sm:grid sm:px-0 mt-5"},tt={key:3,class:"px-4 flex sm:grid sm:px-0 mt-5"},st={class:"px-4 flex sm:grid sm:px-0 mt-5"},lt={class:"px-4 flex sm:grid sm:px-0 mt-5"},it={key:4,class:"px-4 flex sm:grid sm:px-0 mt-5"},nt={class:"px-4 flex sm:grid sm:px-0 mt-5"},ot={key:5,class:"px-4 flex sm:grid sm:px-0 mt-5"},pt={class:"px-4 flex sm:grid sm:px-0 mt-5"},rt={key:6,class:"px-4 flex sm:grid sm:px-0 mt-5"},ut={key:7,class:"px-4 flex sm:grid sm:px-0 mt-5"},mt={key:8,class:"px-4 flex sm:grid sm:px-0 mt-5"},et={class:"px-4 flex sm:grid sm:px-0 mt-5"},dt={key:9,class:"px-4 flex sm:grid sm:px-0 mt-5"},yt={class:"px-4 flex sm:grid sm:px-0 mt-5"},gt={class:"px-4 flex sm:grid sm:px-0 mt-5"},at={class:"px-4 flex sm:grid sm:px-0 mt-5"},ft={class:"px-4 flex sm:grid sm:px-0 mt-5"},bt=k({__name:"AppStore",setup(Ct){const u=b(),x=F(()=>({theme:u.isDarkMode?M:D})),{message:xt,modal:v,notification:vt}=S(["message","modal","notification"],{configProviderProps:x}),p=async(g,t,o)=>{v.create({title:`获取${g}`,type:"info",preset:"dialog",content:()=>i("div",null,[i("p",null,[n("确定要下载"),g,n("么？请注意核对部分应用的兼容性。"),o==="system"&&i("span",null,[n("（Tips: 系统应用无法通过小米自带的应用包管理器安装，请通过MT管理器安装！）")]),o==="revision"&&i("span",null,[n("（Tips: 修改版需搭配核心破解并通过MT管理器安装）")]),o==="magisk"&&i("span",null,[n("（Tips: Magisk模块请通过ROOT管理器进行安装）")])]),i("p",null,[n("下载地址:")]),i("p",null,[t])]),positiveText:"复制下载链接到剪切板",negativeText:"取消",onPositiveClick:()=>{navigator.clipboard.writeText(`${t}`)},onNegativeClick:()=>{}})};return(g,t)=>{const o=f("n-button"),r=f("n-alert");return d(),e("div",$,[s("div",q,[s("div",L,[t[21]||(t[21]=s("h3",{class:a("text-base font-semibold leading-7")},[s("span",{class:"animated-bg bg-clip-text font-semibold text-transparent",style:{"background-image":`linear-gradient(\r
								101.22deg,\r
								rgb(255, 182, 133) -18.32%,\r
								rgb(255, 111, 29) 7.01%,\r
								rgb(252, 181, 232) 41.59%,\r
								rgb(135, 148, 255) 70.98%,\r
								rgb(60, 112, 255) 91.35%,\r
								rgb(60, 112, 255) 110.17%\r
							)`}},"精选应用")],-1)),s("p",{class:a(`mt-1 max-w-2xl text-sm leading-6  ${m(u).isDarkMode?"text-gray-300":"text-gray-500"}`)}," 这里罗列了一些适配大屏良好的应用作为精选推荐应用 ",2),s("p",{class:a(`mt-1 max-w-2xl text-sm leading-6  ${m(u).isDarkMode?"text-gray-300":"text-gray-500"}`)}," 部分增强小米大屏系统体验的大屏应用也罗列在此 ",2)]),s("div",j,[s("dl",G,[s("div",J,[i(r,{title:"超级小爱",type:"error"},{icon:l(()=>t[22]||(t[22]=[s("img",{src:P},null,-1)])),default:l(()=>[t[24]||(t[24]=s("p",null,"超级小爱，全生态 AI 智能助手！超级小爱已经在小米平板全面公测，安装后即可体验超级小爱！",-1)),t[25]||(t[25]=s("p",null,"兼容性: Hyper OS 1 / Hyper OS 2",-1)),t[26]||(t[26]=s("p",null,"注意事项: 需要同时安装 超级小爱 和 小米澎湃AI引擎",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"error",onClick:t[0]||(t[0]=()=>p("超级小爱","https://caiyun.139.com/m/i?135CmDfhvmaxV","system"))},{default:l(()=>t[23]||(t[23]=[n("获取超级小爱")])),_:1})]),_:1})]),m(u).deviceCharacteristics==="tablet"?(d(),e("div",K,[i(r,{title:"小米平板系统应用补全模块 - 传送门/悬浮球",type:"info"},{icon:l(()=>t[27]||(t[27]=[s("img",{src:O},null,-1)])),default:l(()=>[t[29]||(t[29]=s("p",null,"传送门是小米的一个系统应用，可以方便地识别屏幕上的文字和图片，触发系统的分词、识图、搜索、复制、翻译等能力。",-1)),t[30]||(t[30]=s("p",null,"悬浮球是小米的一个系统应用，可以通过单手手势提升日常的使用体验。",-1)),t[31]||(t[31]=s("p",null,"兼容性: MIUI14 / Hyper OS 1 / Hyper OS 2",-1)),t[32]||(t[32]=s("p",null,"注意事项: Magisk模块请通过对应的 ROOT管理器 进行安装！传送门管理入口位于[模块设置]，悬浮球管理入口位于[系统设置-更多设置-悬浮球]。",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"info",onClick:t[1]||(t[1]=()=>p("传送门/悬浮球补全模块","https://caiyun.139.com/m/i?135Ce8FLLcLm8","magisk"))},{default:l(()=>t[28]||(t[28]=[n("获取传送门/悬浮球补全模块")])),_:1})]),_:1})])):y("",!0),s("div",_,[i(r,{title:"小米平板系统功能补全模块",type:"success"},{icon:l(()=>t[33]||(t[33]=[s("img",{src:B},null,-1)])),default:l(()=>[t[35]||(t[35]=s("p",null,"支持对小米平板/小米折叠屏设备进行以下功能的补全:",-1)),t[36]||(t[36]=s("ul",null,[s("li",{class:"ml-3"},"ZRAM:RAM=1:1优化(Hyper OS 2+，仅部分机型支持)"),s("li",{class:"ml-3"},"启用dm设备映射器(Hyper OS 2+，仅部分机型支持)"),s("li",{class:"ml-3"},"启用多档高刷(仅部分机型支持)"),s("li",{class:"ml-3"},"补全120hz高刷(仅部分机型支持)"),s("li",{class:"ml-3"},"强开小米平板工作台模式(仅部分机型支持)"),s("li",{class:"ml-3"},"解除GMS区域限制"),s("li",{class:"ml-3"},"PC级WPS字体目录自动创建(仅小米/红米平板机型支持)"),s("li",{class:"ml-3"},"解锁熄屏挂机/熄屏听剧"),s("li",{class:"ml-3"},"解锁视频工具箱智能刷新率"),s("li",{class:"ml-3"},"解锁节律护眼(Hyper OS 1+，仅部分机型支持)"),s("li",{class:"ml-3"},"开启屏幕旋转建议提示按钮"),s("li",{class:"ml-3"},"开启极致模式"),s("li",{class:"ml-3"},"开启进游戏三倍速(部分腾讯系游戏)"),s("li",{class:"ml-3"},"解锁游戏工具箱狂暴引擎UI界面(仅UI效果)"),s("li",{class:"ml-3"},"解锁游戏音质优化开关"),s("li",{class:"ml-3"},"隐藏/优化手势提示线(部分机型效果可能不佳)"),s("li",{class:"ml-3"},"开启平滑圆角"),s("li",{class:"ml-3"},"开启高级材质(最高支持到高级材质3.0，部分被阉割了大文件夹模糊的机型，可以自行通过Hyper Ceiler强制启用桌面大文件夹的模糊)")],-1)),t[37]||(t[37]=s("p",null,"注意事项: Magisk模块请通过对应的 ROOT管理器 进行安装！高级材质在[显示与亮度-高级材质]，极致模式在[开发者选项-极致模式]。",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"success",onClick:t[2]||(t[2]=()=>p("小米平板系统功能补全模块","https://caiyun.139.com/m/i?135Ce7Jx2e5nZ","magisk"))},{default:l(()=>t[34]||(t[34]=[n("获取小米平板系统功能补全模块")])),_:1})]),_:1})]),m(u).MIOSVersion&&m(u).MIOSVersion===1&&m(u).deviceCharacteristics==="tablet"?(d(),e("div",c,[i(r,{title:"小米平板系统桌面 - Hyper OS 1",type:"error"},{icon:l(()=>t[38]||(t[38]=[s("img",{src:C},null,-1)])),default:l(()=>[t[40]||(t[40]=s("p",null,"小米 Hyper OS 系统桌面！该版本提取自小米平板6S Pro，包含新的打断动画和部分动画效果改变！",-1)),t[41]||(t[41]=s("p",null,"兼容性: Hyper OS 1",-1)),t[42]||(t[42]=s("p",null,"注意事项: 小米平板6 推荐安装去模糊阉割版，需搭配核心破解，会补全被阉割的 Dock 栏模糊！",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"error",onClick:t[3]||(t[3]=()=>p("小米平板系统桌面","https://caiyun.139.com/m/i?135ClZdWPAYZk","system"))},{default:l(()=>t[39]||(t[39]=[n("获取小米平板系统桌面")])),_:1})]),_:1})])):y("",!0),m(u).MIOSVersion&&m(u).MIOSVersion===2&&m(u).deviceCharacteristics==="tablet"?(d(),e("div",h,[i(r,{title:"小米平板系统桌面 - Hyper OS 2",type:"error"},{icon:l(()=>t[43]||(t[43]=[s("img",{src:C},null,-1)])),default:l(()=>[t[45]||(t[45]=s("p",null,"小米 Hyper OS 系统桌面！该版本提取自小米平板7 Pro，包含九宫格、优化后的动画效果和全新超级小爱Dock便捷入口！",-1)),t[46]||(t[46]=s("p",null,"兼容性: Hyper OS 2",-1)),t[47]||(t[47]=s("p",null,"注意事项: 如提示系统应用无法安装请从文件管理安装",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"error",onClick:t[4]||(t[4]=()=>p("小米平板系统桌面","https://caiyun.139.com/m/i?135CmXZPQXz3d","system"))},{default:l(()=>t[44]||(t[44]=[n("获取小米平板系统桌面")])),_:1})]),_:1})])):y("",!0),m(u).MIOSVersion&&m(u).MIOSVersion>=2&&m(u).deviceCharacteristics==="tablet"?(d(),e("div",tt,[i(r,{title:"WinPlay Mobile",type:"info"},{icon:l(()=>t[48]||(t[48]=[s("img",{src:A},null,-1)])),default:l(()=>[t[50]||(t[50]=s("p",null,"「WinPlay Mobile」是为小米平板量身定做的「游戏虚拟机」，可以运行市面上常见的 Windows 游戏。",-1)),t[51]||(t[51]=s("p",null,"兼容性: 小米平板6S Pro - Hyper OS 2",-1)),t[52]||(t[52]=s("p",null,"注意事项: 需要同时安装 AI百宝箱 和 WAE Display，当前仅兼容小米平板6S Pro，且需要运行在最新版的Hyper OS 2.0 Beta，[模块设置-WinPlay Mobile]可以快捷打开小米平板的「游戏虚拟机」界面~",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"info",onClick:t[5]||(t[5]=()=>p("WinPlay Mobile","https://caiyun.139.com/m/i?135CdoBoOMICY","system"))},{default:l(()=>t[49]||(t[49]=[n("获取WinPlay Mobile")])),_:1})]),_:1})])):y("",!0),s("div",st,[i(r,{title:"小米笔记 - Hyper AI",type:"warning"},{icon:l(()=>t[53]||(t[53]=[s("img",{src:w},null,-1)])),default:l(()=>[t[55]||(t[55]=s("p",null,"小米笔记，一个好用的文本创作工具",-1)),t[56]||(t[56]=s("p",null,"使用 AI 写作进行文本摘要、扩写、润色纠错等功能，还可以输入写作需求让AI帮您创作",-1)),t[57]||(t[57]=s("p",null,"兼容性: Hyper OS 1 / Hyper OS 2",-1)),t[58]||(t[58]=s("p",null,"注意事项: 解锁 Hyper AI，需要核心破解并搭配MT管理器安装。",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"warning",onClick:t[6]||(t[6]=()=>p("小米笔记","https://caiyun.139.com/m/i?135Ce9CtGXcVc","revision"))},{default:l(()=>t[54]||(t[54]=[n("获取小米笔记")])),_:1})]),_:1})]),s("div",lt,[i(r,{title:"小米录音机 - Hyper AI",type:"error"},{icon:l(()=>t[59]||(t[59]=[s("img",{src:I},null,-1)])),default:l(()=>[t[61]||(t[61]=s("p",null,"简单好用的录音应用",-1)),t[62]||(t[62]=s("p",null,"兼容性: Hyper OS 1 / Hyper OS 2",-1)),t[63]||(t[63]=s("p",null,"注意事项: 解锁 Hyper AI 全功能 AI 识音和转录，需要核心破解并搭配MT管理器安装。",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"error",onClick:t[7]||(t[7]=()=>p("小米录音机","https://caiyun.139.com/m/i?135Ce9CYAY0YN","revision"))},{default:l(()=>t[60]||(t[60]=[n("获取小米录音机")])),_:1})]),_:1})]),m(u).deviceCharacteristics==="tablet"?(d(),e("div",it,[i(r,{title:"QQ音乐 HD",type:"success"},{icon:l(()=>t[64]||(t[64]=[s("img",{src:E},null,-1)])),default:l(()=>[t[66]||(t[66]=s("p",null,"QQ 音乐 HD 6.0，全新版本已增加对平板的大屏适配！",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"success",onClick:t[8]||(t[8]=()=>p("QQ音乐 HD","https://caiyun.139.com/m/i?135CmomGWJWB1","original"))},{default:l(()=>t[65]||(t[65]=[n("获取QQ音乐 HD")])),_:1})]),_:1})])):y("",!0),s("div",nt,[i(r,{title:"StarNote",type:"info"},{icon:l(()=>t[67]||(t[67]=[s("img",{src:T},null,-1)])),default:l(()=>[t[69]||(t[69]=s("p",null,"笔尖所到，文星高照！文石出品的平板笔记软件，截止 2025-2-1 前登录账号即可领取永久的笔记Pro会员！",-1)),t[70]||(t[70]=s("p",null,"兼容性: Hyper OS 1 / Hyper OS 2 / MIUI 14",-1)),t[71]||(t[71]=s("p",null,"注意事项: 领取会员的位置比较隐蔽，位于首页左上角~",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"info",onClick:t[9]||(t[9]=()=>p("StarNote","https://yun.139.com/sharewap/#/m/i?135CmrnDyIHP2","original"))},{default:l(()=>t[68]||(t[68]=[n("获取StarNote")])),_:1})]),_:1})]),m(u).deviceCharacteristics==="tablet"?(d(),e("div",ot,[i(r,{title:"小米音乐(平板端)",type:"success"},{icon:l(()=>t[72]||(t[72]=[s("img",{src:V},null,-1)])),default:l(()=>[t[74]||(t[74]=s("p",null,"小米音乐 X QQ音乐！该版本小米已经去除反向适配的平行窗口，拥有更好的大屏体验！",-1)),t[75]||(t[75]=s("p",null,"注意事项: 如提示系统应用无法安装请从文件管理安装",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"success",onClick:t[10]||(t[10]=()=>p("小米音乐","https://caiyun.139.com/m/i?135CmXllwKaxM","system"))},{default:l(()=>t[73]||(t[73]=[n("获取小米音乐")])),_:1})]),_:1})])):y("",!0),s("div",pt,[i(r,{title:"三星浏览器",type:"info"},{icon:l(()=>t[76]||(t[76]=[s("img",{src:W},null,-1)])),default:l(()=>[t[78]||(t[78]=s("p",null,"三星出品的安全、私密且经优化的移动网络浏览器！",-1)),t[79]||(t[79]=s("p",null,'注意事项: 没有PC版，如果需要跨PC端书签同步可能需要搭配"三星浏览器"插件。',-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"info",onClick:t[11]||(t[11]=()=>p("三星浏览器","https://caiyun.139.com/m/i?135CmXZb9D6PP","original"))},{default:l(()=>t[77]||(t[77]=[n("获取三星浏览器")])),_:1})]),_:1})]),m(u).deviceCharacteristics==="tablet"?(d(),e("div",rt,[i(r,{title:"波点音乐",type:"success"},{icon:l(()=>t[80]||(t[80]=[s("img",{src:N},null,-1)])),default:l(()=>[t[82]||(t[82]=s("p",null,"酷我出品的音乐APP(腾讯音乐娱乐集团旗下)，全新版本已增加对平板的大屏适配！",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"success",onClick:t[12]||(t[12]=()=>p("波点音乐","https://caiyun.139.com/m/i?135CmXWNtw2yy","original"))},{default:l(()=>t[81]||(t[81]=[n("获取波点音乐")])),_:1})]),_:1})])):y("",!0),m(u).deviceCharacteristics==="tablet"?(d(),e("div",ut,[i(r,{title:"荣耀音乐",type:"error"},{icon:l(()=>t[83]||(t[83]=[s("img",{src:Q},null,-1)])),default:l(()=>[t[85]||(t[85]=s("p",null,"荣耀音乐 X 网易云音乐，跟普通网易云音乐不同的大屏适配体验！",-1)),t[86]||(t[86]=s("p",null,"注意事项: 请使用绑定了网易云音乐的手机账号登录，必须安装荣耀基础服务，荣耀应用市场方便追踪应用更新。",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"error",onClick:t[13]||(t[13]=()=>p("荣耀音乐","https://caiyun.139.com/m/i?135CmrVUbH2y3","original"))},{default:l(()=>t[84]||(t[84]=[n("获取荣耀音乐")])),_:1})]),_:1})])):y("",!0),m(u).deviceCharacteristics==="tablet"?(d(),e("div",mt,[i(r,{title:"随身乐队",type:"info"},{icon:l(()=>t[87]||(t[87]=[s("img",{src:X},null,-1)])),default:l(()=>[t[89]||(t[89]=s("p",null,"随身乐队是一款为手机/平板设计的支持多音轨录音，乐器弹奏的APP。",-1)),t[90]||(t[90]=s("p",null,"支持键盘、吉他、架子鼓、电子鼓、贝斯多种乐器，并且带有多音轨录音功能。",-1)),t[91]||(t[91]=s("p",null,"注意事项: 建议关闭该应用的联网权限，可以避免出现广告。",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"info",onClick:t[14]||(t[14]=()=>p("随身乐队","https://caiyun.139.com/m/i?135Cdn7Uss9KJ","original"))},{default:l(()=>t[88]||(t[88]=[n("获取随身乐队")])),_:1})]),_:1})])):y("",!0),s("div",et,[i(r,{title:"FlipaClip",type:"default"},{icon:l(()=>t[92]||(t[92]=[s("img",{src:R},null,-1)])),default:l(()=>[t[94]||(t[94]=s("p",null,"用动画把你的梦想带进现实！",-1)),t[95]||(t[95]=s("p",null,"FlipaClip 强大而有趣的工具可以让你一帧一帧地轻松制作动画，无论你是要打草稿、做脚本、做动画或者至少想要学习，FlipaClip足以实现您的创意。",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"default",onClick:t[15]||(t[15]=()=>p("FlipaClip","https://caiyun.139.com/m/i?135Ce7Ou7DwWV","original"))},{default:l(()=>t[93]||(t[93]=[n("获取FlipaClip")])),_:1})]),_:1})]),m(u).deviceCharacteristics==="tablet"?(d(),e("div",dt,[i(r,{title:"像素习惯",type:"info"},{icon:l(()=>t[96]||(t[96]=[s("img",{src:U},null,-1)])),default:l(()=>[t[98]||(t[98]=s("p",null,"像素习惯是一款像素风的游戏化习惯养成打卡软件，你可以在里面通过培养习惯来抽装备，集成就，强化数值装备自己，不断进步。",-1)),t[99]||(t[99]=s("p",null,"注意事项: 完美横屏应用计划已为像素习惯通过应用布局优化适配大屏，请确保你安装的模块版本和系统版本支持应用布局优化。",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"info",onClick:t[16]||(t[16]=()=>p("像素习惯","https://caiyun.139.com/m/i?135Ce9wkd3aKT","original"))},{default:l(()=>t[97]||(t[97]=[n("获取像素习惯")])),_:1})]),_:1})])):y("",!0),s("div",yt,[i(r,{title:"机核",type:"default"},{icon:l(()=>t[100]||(t[100]=[s("img",{src:Z},null,-1)])),default:l(()=>[t[102]||(t[102]=s("p",null,"次世代游戏文化社区，机核从2010年开始一直致力于分享游戏玩家的生活，以及深入探讨游戏相关的文化。",-1)),t[103]||(t[103]=s("p",null,"完美横屏应用计划已为机核通过应用横屏布局适配大屏，欢迎体验！",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"default",onClick:t[17]||(t[17]=()=>p("机核","https://caiyun.139.com/m/i?135CmUfDZ6yV8","original"))},{default:l(()=>t[101]||(t[101]=[n("获取机核")])),_:1})]),_:1})]),s("div",gt,[i(r,{title:"Redmi Pad Pro X 哈利·波特 联动主题",type:"warning"},{icon:l(()=>t[104]||(t[104]=[s("img",{src:H},null,-1)])),default:l(()=>[t[106]||(t[106]=s("p",null,"换上巫师袍，想象霍格沃茨在召唤你入学！",-1)),t[107]||(t[107]=s("p",null,"主题以霍格沃茨开学场景为背景，深度定制桌面背景和图标。",-1)),t[108]||(t[108]=s("p",null,"经典的魔法元素设计和场景呈现，带你重回哈利·波特的魔法世界！",-1)),t[109]||(t[109]=s("p",null,"注意事项: 需要搭配 LSPosed 模块主题破解进行食用，[模块设置-导入个性化]可以快捷打开小米平板的主题导入界面~",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"warning",onClick:t[18]||(t[18]=()=>p("Redmi Pad Pro X 哈利·波特 联动主题","https://caiyun.139.com/m/i?135CltA2z1VvD","original"))},{default:l(()=>t[105]||(t[105]=[n("获取Redmi Pad Pro X 哈利波特 联动主题")])),_:1})]),_:1})]),s("div",at,[i(r,{title:"有诗",type:"default"},{icon:l(()=>t[110]||(t[110]=[s("img",{src:z},null,-1)])),default:l(()=>[t[112]||(t[112]=s("p",null,"生活不止眼前的苟且，还有诗和远方的田野。",-1)),t[113]||(t[113]=s("p",null,"有诗，你的口袋诗库，这里收录了数十万首传统诗词与现代诗词，每日自动推荐最适合您的作品，让您在忙碌的生活中也能轻松欣赏诗词之美。我们希望，所有渴望被触碰心灵的、真实而纯粹的灵魂，在诗歌里获得片刻自由，远方未远，诗歌正好，让我们一起拥抱诗意生活。",-1)),t[114]||(t[114]=s("p",null,"完美横屏应用计划已为有诗通过应用横屏布局适配大屏，欢迎体验！",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"default",onClick:t[19]||(t[19]=()=>p("有诗","https://caiyun.139.com/m/i?135CmCz8VCpu0","original"))},{default:l(()=>t[111]||(t[111]=[n("获取有诗")])),_:1})]),_:1})]),s("div",ft,[i(r,{title:"少数派",type:"error"},{icon:l(()=>t[115]||(t[115]=[s("img",{src:Y},null,-1)])),default:l(()=>[t[117]||(t[117]=s("p",null,"高效工作，品质生活，少数派是一个帮你发现优质 App 和数字产品、学习有效方法论，从而大大提高效率和生活品质的内容平台。",-1)),t[118]||(t[118]=s("p",null,"完美横屏应用计划已为少数派通过应用横屏布局和第三方应用横屏优化适配大屏，欢迎体验！",-1)),i(o,{class:"mt-2",strong:"",secondary:"",type:"error",onClick:t[20]||(t[20]=()=>p("少数派","https://caiyun.139.com/m/i?135Clqi1SPjAp","original"))},{default:l(()=>t[116]||(t[116]=[n("获取少数派")])),_:1})]),_:1})])])])])])}}});export{bt as default};