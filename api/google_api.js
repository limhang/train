/* Copyright 2011 Google */
window.jstiming.load.tick('jbl');
(function() {
    var k = ""
      , aa = "\x00"
      , ba = "\n"
      , ca = "\x0B"
      , da = "\r\n"
      , l = " "
      , ea = " ("
      , fa = " - "
      , ga = " < "
      , ha = ' </span></a></li><li><a href="https://twitter.com/intent/tweet?text='
      , ia = " > "
      , ja = " ["
      , ka = ' aria-describedby="'
      , la = ' aria-disabled="true"'
      , ma = ' class="'
      , na = ' class="nolabel"'
      , pa = " goog-inline-block"
      , qa = ' id="'
      , ra = " jfk-button-checked"
      , sa = " jfk-button-disabled"
      , ta = " jfk-button-narrow"
      , ua = " jfk-checkbox-checked"
      , va = " jfk-checkbox-disabled"
      , wa = " jfk-checkbox-unchecked"
      , xa = " jfk-checkbox-undetermined"
      , ya = ' name="'
      , za = ' tabindex="'
      , Aa = ' type="'
      , Ba = ' value="'
      , Ca = '"'
      , Da = '" class="cp-promo" style="display:none"><div class="cp-promo-c"><div class="cp-dismiss"></div><a href="'
      , Ea = '" class="verified-translation"><div class="vt-description">'
      , Fa = '" role="button" tabindex=0></div>'
      , Ga = '" role="checkbox" aria-checked="'
      , Ia = '" target="_blank" class="gplus"><span class="share-link-icon"></span><span> Google+ </span></a></li></ul></div>'
      , Ja = '" target="_blank" class="twitter"><span class="share-link-icon"></span><span> Twitter </span></a></li><li><a href="https://plus.google.com/share?url='
      , Ka = '" target="_top" class="email"><span class="share-link-icon"></span><span> '
      , La = '""'
      , Ma = '",'
      , Na = '">'
      , Oa = '"></a>'
      , Pa = '"></q></div></div>'
      , Qa = '"></span><br><span class="gt-cd-mt-label">'
      , Ra = '"><div class="cp-promo-graphic"></div><div class="cp-promo-text-c"><div class="cp-promo-text"><div class="cp-promo-title">'
      , Sa = "#"
      , Ta = "#text"
      , Ua = "$1 "
      , Va = "$version"
      , Wa = "%"
      , Xa = "%$1"
      , Ya = "%1$s"
      , Za = "%2525"
      , ab = "%FONT%"
      , bb = "%d"
      , cb = "&"
      , db = "&#0;"
      , eb = "&#39;"
      , fb = "&action="
      , hb = "&amp;"
      , ib = "&apa=1"
      , jb = "&client=t"
      , kb = "&client=t&prev=input"
      , lb = "&client=t&prev=lc"
      , mb = "&client=t&prev=pbsrc"
      , nb = "&client=t&prev=pbtgt"
      , ob = "&continue="
      , pb = "&debug"
      , qb = "&expid="
      , sb = "&gt;"
      , tb = "&hl="
      , ub = "&idx="
      , vb = "&it="
      , wb = "&lt;"
      , xb = "&npn=1"
      , yb = "&npnv="
      , zb = "&p=s"
      , Ab = "&quot;"
      , Bb = "&rt="
      , Cb = "&s="
      , Db = "&srt="
      , Eb = "&tbsrt="
      , Fb = "&textlen="
      , Gb = "&tl="
      , Hb = "&total="
      , Ib = "&tran="
      , Jb = "&ttsspeed="
      , Kb = "&xt="
      , Lb = "'"
      , Mb = "("
      , Nb = "(\\d*)(\\D*)"
      , Ob = "(^"
      , Pb = ")"
      , Qb = ")([a-z])"
      , Rb = ");"
      , Sb = "*"
      , Tb = "+"
      , Ub = "+-3^+b+-f"
      , Vb = "+-a^+6"
      , Wb = ","
      , Xb = ", "
      , Yb = "-"
      , Zb = "-1"
      , $b = "-10000px"
      , ac = "-1000px"
      , bc = "-9999px"
      , cc = "-action"
      , dc = "-active"
      , ec = "-arrow"
      , fc = "-arrowdown"
      , gc = "-arrowimplafter"
      , hc = "-arrowimplbefore"
      , ic = "-arrowleft"
      , jc = "-arrowright"
      , kc = "-arrowup"
      , lc = "-bg"
      , mc = "-button"
      , nc = "-buttons"
      , oc = "-caption"
      , pc = "-checkbox"
      , qc = "-checked"
      , rc = "-collapse-left"
      , sc = "-collapse-right"
      , tc = "-content"
      , uc = "-contentId"
      , vc = "-contrast"
      , wc = "-default"
      , xc = "-disabled"
      , yc = "-dropdown"
      , zc = "-flat"
      , Ac = "-focused"
      , Bc = "-gms"
      , Cc = "-highlight"
      , Dc = "-horizontal"
      , Ec = "-hover"
      , Fc = "-i0-"
      , Gc = "-i0-handwrit"
      , Hc = "-inner-box"
      , Ic = "-k0-"
      , Jc = "-menu"
      , Kc = "-mini"
      , Lc = "-moz"
      , Mc = "-ms"
      , Nc = "-narrow"
      , Oc = "-o"
      , Pc = "-open"
      , Qc = "-outer-box"
      , Rc = "-primary"
      , Sc = "-rtl"
      , Tc = "-selected"
      , Uc = "-standard"
      , Vc = "-title"
      , Wc = "-title-close"
      , Xc = "-title-draggable"
      , Yc = "-title-text"
      , Zc = "-transition"
      , $c = "-unchecked"
      , ad = "-undetermined"
      , bd = "-vertical"
      , cd = "-webkit"
      , dd = "."
      , ed = "..."
      , fd = ".css"
      , gd = ".innerText"
      , hd = ".value"
      , id = "/"
      , jd = "//"
      , kd = "//accounts.google.com/Login?hl="
      , ld = "//fonts.googleapis.com"
      , md = "//translate.google.com/toolkit/upload?"
      , nd = "//www.google.com/tools/feedback"
      , od = "/css"
      , pd = "/earlyaccess/"
      , qd = "/gen204?"
      , rd = "/jsapi?key=internal-translate&callback=_loadinputtoolcb"
      , sd = "/load.js?"
      , td = "/translate/static/_/css/aurebesh.css"
      , ud = "/translate/uc?"
      , vd = "/translate/uc?ua=dcp&uav="
      , wd = "/translate/uc?ua=dismiss&uav="
      , xd = "/translate/uc?ua=dismiss&uav=survey"
      , yd = "/translate/uc?ua=eotf&uav="
      , zd = "/translate_a/sg?client=t&"
      , Ad = "/translate_a/single"
      , Bd = "/translate_a/t"
      , Cd = "/translate_f"
      , Dd = "/translate_suggestion?client=t"
      , Ed = "/translate_tts?ie=UTF-8&q="
      , Fd = "0"
      , Gd = "1"
      , Hd = "1.0"
      , Id = "10"
      , Jd = "10.0"
      , Kd = "100%"
      , Ld = "100px"
      , Md = "10px"
      , Nd = "1px"
      , Od = "1px solid #000"
      , Pd = "2"
      , Qd = "20px"
      , Rd = "275"
      , Sd = "3"
      , Td = "32px"
      , Ud = "4"
      , Vd = "4px"
      , Wd = "5"
      , Xd = "525"
      , Yd = "528"
      , Zd = "533.17.9"
      , $d = "7"
      , ae = "8"
      , be = "8px"
      , ce = "9"
      , de = "9+"
      , ee = ":"
      , fe = ": "
      , ge = ': </span><span class="gt-def-synonyms-group"></span><span class="gt-def-synonyms-group"></span>'
      , he = "::"
      , ie = ";"
      , je = "; "
      , ke = "<"
      , le = "</"
      , me = "</a>"
      , ne = '</a></div><div class="vt-dismiss">'
      , oe = "</a></span></div></div>"
      , pe = "</div>"
      , qe = "</div></div>"
      , re = "</div></div></div>"
      , se = "</div></div></div></a></div></div>"
      , te = '</div></div></div><div class="cp-promo-bottom"><div class="cp-promo-link"><div class="cp-promo-link-badge"></div><div class="cp-promo-link-arrow"></div><div class="cp-promo-link-text">'
      , ue = '</div></div><div class="gt-ex-mt" style="display:none"><span class="gt-cd-mt" dir="'
      , ve = '</div></div><div id="st-buttons"></div></div>'
      , we = '</div></td><td class="pb-tlis-td"></td><td class="pb-tgt-td">'
      , xe = "</div></td><tr>"
      , ye = '</div><a href="javascript:void(0);" class="gt-hats-link">'
      , ze = '</div><div class="cp-promo-link-subtext">'
      , Ae = '</div><div class="cp-promo-subtext">'
      , Be = '</div><div class="pt-desc">'
      , Ce = '</div><div class="vt-buttons"><div class="vt-link"><a class="vt-link-text" href="'
      , De = '</div><div id="gt-apb-pb-r"><input id="gt-pb-sb" type="text"><div id="pb-back-c" class="goog-inline-block"></div><button id="gt-pb-sbt" class="jfk-button jfk-button-action"><span class="jfk-button-img"></span></button><div id="gt-pb-sw2" class="goog-inline-block"></div></div></div>'
      , Ee = '</div><div id="pb-tool" class="goog-toolbar"><div id="pb-cb-a" class="goog-inline-block"></div><div id="pb-dd" class="goog-inline-block"><div id="pb-ls"></div><div class="goog-toolbar-separator goog-inline-block"></div><div id="pb-st"></div></div><div id="pb-sh" class="goog-inline-block" style="display:none"></div><div class="goog-toolbar-separator goog-inline-block" id="pb-sp-del" style="display:none"></div><div id="pb-del-c" class="goog-inline-block"></div><div id="pb-tool-r" class="goog-inline-block"></div></div><div id="pb-tb-c" class="jfk-scrollbar-borderless"><div id="gt-pb-spin" style="display:none"></div><div id="pb-empty"></div><table id="gt-pb-tb"><colgroup><col><col><col width="50%"><col><col width="50%"></colgroup><table></div></div></div>'
      , Fe = '</h3><ul><li><a href="mailto:?body='
      , Ge = '</q><div class="gt-mt-ex" style="display:none"><q class="gt-cd-mt" dir="'
      , He = "</span>"
      , Ie = '</span><span class="gt-ex-credit"><a class="gt-ex-link" target="_blank" href="'
      , Je = "</tbody></table>"
      , Ke = '<a href="'
      , Le = '<a href="javascript:ctr._submitUrl(true);" title="'
      , Me = "<br>"
      , Ne = '<div class="gt-def-example"><q>'
      , Oe = '<div class="gt-def-info"><div class="gt-def-row">'
      , Pe = '<div class="gt-def-synonym"><span class="gt-def-synonym-title">'
      , Qe = '<div class="gt-ex-info"><div class="gt-ex-top"><div class="gt-ex-text" dir="'
      , Re = '<div class="gt-hats-af">'
      , Se = '<div class="gt-mt-md" style="display:none"><span class="gt-cd-mt"></span></div></div>'
      , Te = '<div class="gt-pb-lbl">'
      , Ue = '<div class="gt-pb-stc">'
      , Ve = '<div class="gt-pb-ttc">'
      , We = '<div class="jfk-bubble" role="alertdialog"'
      , Xe = '<div class="jfk-bubble-arrow-id jfk-bubble-arrow"><div class="jfk-bubble-arrowimplbefore"></div><div class="jfk-bubble-arrowimplafter"></div></div></div>'
      , Ye = '<div class="jfk-bubble-closebtn-id jfk-bubble-closebtn" aria-label="'
      , Ze = '<div class="pt-icon goog-inline-block"></div><div class="pt-text goog-inline-block"><div class="pt-act">'
      , $e = '<div class="share-panel goog-menu-nocheckbox"><h3>'
      , af = '<div class="st-stp1"><div class="st-stp1-text"><div>'
      , bf = '<div id="'
      , cf = '<div id="gt-apb-pb" style="display:none"><div id="gt-pb-tt">'
      , df = '<div id="gt-pb-c" style="display:none"><div id="gt-pb"><div id="gt-pb-pt">'
      , ef = '<div role="button"'
      , ff = '<div><div class="speech-mic"><div class="gt-speech-l1"></div><div class="gt-speech-l2"></div><div class="gt-speech-l3"></div><div class="gt-speech-l4"></div></div><div class="speech-mic-label">'
      , gf = '<span class="gt-cd-cl">'
      , hf = '<span class="jfk-checkbox goog-inline-block'
      , jf = "<span>"
      , kf = "<table><tbody>"
      , lf = "<tr"
      , mf = "="
      , nf = '="'
      , of = ">"
      , pf = "></div>"
      , qf = '><div class="jfk-bubble-content-id"'
      , rf = '><td class="pb-cb"></td><td class="pb-slis-td"></td><td class="pb-src-td">'
      , tf = "?"
      , uf = "?deb=static"
      , vf = "?v=3"
      , wf = "@"
      , xf = "@import url("
      , yf = "A"
      , zf = "APPLET"
      , Af = "AREA"
      , Bf = "Ajax translation failed."
      , Cf = "Android"
      , Df = "Aurebesh"
      , Ef = "BASE"
      , Ff = "BODY"
      , Gf = "BR"
      , Hf = "BUTTON"
      , If = "Bottom"
      , Jf = "COL"
      , Kf = "COMMAND"
      , Lf = "CSS1Compat"
      , Mf = "CTRL_C"
      , Nf = "Chrome"
      , Of = "Close"
      , Pf = "Component already rendered"
      , Qf = "Const{"
      , Rf = "Content-Type"
      , Sf = "CriOS"
      , Tf = "Cyrl"
      , q = "DIV"
      , Uf = "DXImageTransform.Microsoft.DropShadow"
      , Vf = "ELEMENT[id:"
      , Wf = "EMBED"
      , Xf = "Edge"
      , Yf = "Element was not found on the page. ID="
      , Zf = "End"
      , $f = "EndToEnd"
      , ag = "EndToStart"
      , bg = "Error while loading script "
      , cg = "FORM"
      , dg = "FRAME"
      , eg = "FontName"
      , fg = "ForceExperiment"
      , gg = "GET"
      , hg = "HEAD"
      , ig = "HR"
      , jg = "HTML"
      , kg = "IEMobile"
      , lg = "IFRAME"
      , mg = "IMG"
      , ng = "INPUT"
      , og = "ISINDEX"
      , pg = "Jsloader error (code #"
      , qg = "KEYGEN"
      , rg = "LI"
      , sg = "LINK"
      , tg = "Left"
      , ug = "Less"
      , vg = "META"
      , wg = "MSIE"
      , xg = "MSXML2.XMLHTTP"
      , yg = "MSXML2.XMLHTTP.3.0"
      , zg = "MSXML2.XMLHTTP.6.0"
      , Ag = "Microsoft.XMLHTTP"
      , Bg = "Mobile"
      , Cg = "More"
      , Dg = "MouseEvent"
      , Eg = "MouseEvents"
      , Fg = "Moz"
      , Gg = "MozOpacity"
      , Hg = "NOFRAMES"
      , Ig = "NOSCRIPT"
      , Jg = "No CSI (window.external.resT) found."
      , Kg = "O"
      , Lg = "OBJECT"
      , Mg = "OPR"
      , Pg = "Opera"
      , Qg = "PARAM"
      , Rg = "POST"
      , Sg = "PRE"
      , Tg = "Presto"
      , Ug = "Promise cannot resolve to itself"
      , Vg = "Right"
      , Wg = "SCRIPT"
      , Xg = "SELECT"
      , Yg = "SOURCE"
      , Zg = "SPAN"
      , $g = "STYLE"
      , ah = "Shockwave Flash"
      , bh = "Shockwave Flash 2.0"
      , ch = "ShockwaveFlash.ShockwaveFlash"
      , dh = "ShockwaveFlash.ShockwaveFlash.6"
      , eh = "ShockwaveFlash.ShockwaveFlash.7"
      , fh = "Silk"
      , gh = "SoundStopCB_"
      , hh = "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."
      , ih = "Start"
      , jh = "StartToEnd"
      , kh = "StartToStart"
      , lh = "Style"
      , mh = "TABLE"
      , nh = "TBODY"
      , oh = "TD"
      , ph = "TEXTAREA"
      , qh = "TH"
      , rh = "TR"
      , sh = "TRACK"
      , th = "Timed out after "
      , uh = "Timeout reached for loading script "
      , vh = "To"
      , wh = "Top"
      , xh = "Trident"
      , yh = "UL"
      , zh = "UTF-8"
      , Ah = "Unable to set parent component"
      , Bh = "Uneven number of arguments"
      , Ch = "WBR"
      , Dh = "Webkit"
      , Eh = "Width"
      , Fh = "["
      , Gh = "[object Array]"
      , Hh = "[object Function]"
      , Ih = "[object Window]"
      , Jh = "\\$1"
      , Kh = "\\s"
      , Lh = "\\u"
      , Mh = "\\x08"
      , Nh = "]"
      , Oh = "]+"
      , Ph = "^"
      , Qh = "_"
      , Rh = "_blank"
      , Sh = "_callbacks_."
      , Th = "_h#"
      , Uh = "_inputtoolloadedcb"
      , Vh = "_start"
      , Wh = "_top"
      , t = "a"
      , Xh = "abort"
      , Yh = "about:invalid#zClosurez"
      , Zh = "absolute"
      , $h = "accumulate"
      , ai = "act"
      , v = "action"
      , bi = "activate"
      , ci = "activedescendant"
      , di = "additions text"
      , ei = "after_paste"
      , fi = "afterhide"
      , gi = "aftershow"
      , hi = "all"
      , ii = "all|all"
      , ji = "alpha(opacity="
      , ki = "alt"
      , li = "alt-edited"
      , mi = "alt-input"
      , ni = "alt-input-submit"
      , oi = "alt-input-text"
      , pi = "alt-low-conf"
      , qi = "alt-menu"
      , ri = "althighlight"
      , si = "altmenuhl"
      , ti = "altmenuhold"
      , ui = "altshow"
      , vi = "amp"
      , wi = "animate"
      , xi = "application/x-shockwave-flash"
      , yi = "application/x-www-form-urlencoded"
      , zi = "application/x-www-form-urlencoded;charset=utf-8"
      , Ai = "ar"
      , Bi = "aria-"
      , Ci = "aria-activedescendant"
      , Di = 'aria-disabled="true" tabindex="-1"'
      , Ei = "aria-hidden"
      , Fi = "aria-label"
      , Gi = 'aria-label="'
      , Hi = 'aria-labelledby="'
      , Ii = "array"
      , Ji = "assertive"
      , Ki = "at"
      , Li = "atn"
      , Mi = "atomic"
      , Ni = "audio"
      , Oi = "audio/mpeg"
      , Pi = "audio/ogg"
      , Qi = "audio/wav"
      , Ri = "aurabesh"
      , Si = "aurebesh"
      , Ti = "authuser"
      , Ui = "auto"
      , Vi = "b"
      , Wi = "backend-stats-community"
      , Xi = "backend-stats-decoder"
      , Yi = "backend-stats-dictionary"
      , Zi = "backend-stats-stt-total"
      , $i = "bbarlm"
      , aj = "bbarshow"
      , bj = "bd"
      , cj = "beforeaction"
      , dj = "beforedrag"
      , ej = "beforedragend"
      , fj = "beforedragmove"
      , gj = "beforedragstart"
      , hj = "beforehide"
      , ij = "beforeshow"
      , jj = "beforeunload"
      , kj = "begin"
      , lj = "bh"
      , mj = "big-clear-button"
      , nj = "blur"
      , oj = "body"
      , pj = "boolean"
      , qj = "border-bottom-style"
      , rj = "border-bottom-width"
      , sj = "border-box"
      , tj = "border-left-style"
      , uj = "border-left-width"
      , vj = "border-right-style"
      , wj = "border-right-width"
      , xj = "border-top-style"
      , yj = "border-top-width"
      , zj = "border:0;vertical-align:bottom;"
      , Aj = "borderBottom"
      , Bj = "borderBottomWidth"
      , Cj = "borderLeft"
      , Dj = "borderLeftWidth"
      , Ej = "borderRight"
      , Fj = "borderRightWidth"
      , Gj = "borderTop"
      , Hj = "borderTopWidth"
      , Ij = "bottom"
      , Jj = "btn"
      , Kj = "bubble-"
      , Lj = "button"
      , Mj = "buttonOff"
      , Nj = "buttonOn"
      , Oj = "c"
      , Pj = "cB"
      , Qj = "call"
      , Sj = "callImmediate"
      , Tj = "callback"
      , Uj = "cancel"
      , Vj = "cd-expand-button"
      , Wj = "cd-expand-label"
      , Xj = "change"
      , Yj = "character"
      , Zj = "check"
      , ak = "checked"
      , bk = "class"
      , ck = "clear-button"
      , dk = "clearbtn"
      , w = "click"
      , ek = "click-"
      , fk = "client"
      , gk = "clkcancel"
      , hk = "clks"
      , ik = "clkt"
      , jk = "clkundo"
      , kk = "close"
      , lk = "cm"
      , mk = "collapse"
      , nk = "colspan"
      , ok = "community-promo"
      , pk = "complete"
      , qk = "content-box"
      , rk = "content-type"
      , sk = "contentframe"
      , tk = "contextmenu"
      , uk = "contribute-target"
      , vk = "copy"
      , wk = "copy-button"
      , xk = "corr"
      , yk = "corrtype"
      , zk = "cp-dismiss"
      , Ak = "cp-promo-link"
      , Bk = "cptrans"
      , Ck = "cssFloat"
      , Dk = "ctrl"
      , Ek = "d"
      , Fk = "data-"
      , Gk = "data-tooltip"
      , Hk = "data-tooltip-align"
      , Ik = "data-tooltip-class"
      , Jk = "data-tooltip-contained"
      , Kk = "data-tooltip-delay"
      , Lk = "data-tooltip-offset"
      , Mk = "data-tooltip-only-on-overflow"
      , Nk = "data-tooltip-suspended"
      , Pk = "data-tooltip-trigger"
      , Qk = "data-tooltip-unhoverable"
      , Rk = "dblClickSelectall"
      , Sk = "dblclick"
      , Tk = "de"
      , Uk = "deactivate"
      , Vk = "default"
      , Wk = "destroy"
      , Xk = "detectSrcUpdated"
      , Yk = "dialog"
      , Zk = "dialogselect"
      , $k = "dimension1"
      , al = "dimension2"
      , bl = "dimension3"
      , cl = "dimension4"
      , dl = 'dir="ltr"><div class="jfk-checkbox-checkmark" role="presentation"></div></span>'
      , el = "direction"
      , fl = "direction: %s"
      , gl = "disable"
      , hl = "disabled"
      , il = "dismiss-"
      , jl = "dismissht"
      , kl = "display"
      , ll = "display:inline-block"
      , ml = "display:none"
      , nl = "div"
      , ol = "document"
      , pl = "document.location.href"
      , ql = "drag"
      , rl = "dragend"
      , sl = "dragmove"
      , tl = "dragstart"
      , ul = "drop"
      , vl = "dt"
      , wl = "e"
      , xl = "e="
      , yl = "e_lg"
      , zl = "e_md"
      , Al = "e_sm"
      , Bl = "earlycancel"
      , Cl = "ease-in"
      , Dl = "ease-out"
      , El = "edit"
      , Fl = "editclk"
      , Gl = "editpopupclk"
      , Hl = "ee"
      , Il = "elements"
      , x = "en"
      , Jl = "en-us-t-k0-intl"
      , Kl = "enable"
      , Ll = "end"
      , Ml = "ended"
      , Nl = "enter"
      , Ol = "err"
      , Pl = "error"
      , Ql = "event"
      , Rl = "ex"
      , Sl = "exists"
      , Tl = "expand"
      , Ul = "expanded"
      , Vl = "expid"
      , Wl = "fa"
      , Xl = "failure"
      , Yl = "false"
      , Zl = "family"
      , $l = "feedback"
      , am = "file"
      , bm = "file:"
      , cm = "file_div"
      , dm = "filter"
      , em = "finish"
      , fm = "fixed"
      , gm = "flash"
      , hm = "focus"
      , im = "focused"
      , jm = "focusin"
      , km = "focusout"
      , lm = "font-family"
      , mm = "font-size"
      , nm = "font-style"
      , om = "font-weight"
      , pm = "fontFamily"
      , qm = "for"
      , rm = "fq"
      , sm = "ftrans"
      , tm = "full-edit"
      , um = "function"
      , vm = "g"
      , wm = "gbar"
      , xm = "get"
      , ym = "goog-buttonset-default"
      , zm = "goog-flat-button"
      , Am = "goog-flat-menu-button"
      , Bm = "goog-groupmenu-separator"
      , Cm = "goog-inline-block"
      , Dm = "goog-inline-block "
      , Em = "goog-inline-block gt-hats-icon"
      , Fm = "goog-inline-block jfk-button "
      , Gm = "goog-menu"
      , Hm = "goog-menu-button"
      , Im = "goog-menuheader"
      , Jm = "goog-menuitem-accel"
      , Km = "goog-menuitem-emphasize-highlight"
      , Lm = "goog-menuitem-group"
      , Mm = "goog-menuitem-mnemonic-separator"
      , Nm = "goog-menuseparator"
      , Om = "goog-option"
      , Pm = "goog-option-selected"
      , Qm = "gt"
      , Sm = "gt-apb-c"
      , Tm = "gt-apb-main"
      , Um = "gt-apb-pb"
      , Vm = "gt-appbar"
      , Wm = "gt-baf-back"
      , Xm = "gt-baf-cell"
      , Ym = "gt-baf-cell gt-baf-marker-container"
      , Zm = "gt-baf-cell gt-baf-pos-head"
      , $m = "gt-baf-cell gt-baf-previous-word"
      , an = "gt-baf-cell gt-baf-sep"
      , bn = "gt-baf-cell gt-baf-translations"
      , cn = "gt-baf-cell gt-baf-word"
      , dn = "gt-baf-cell gt-baf-word-clickable"
      , en = "gt-baf-cts"
      , fn = "gt-baf-entry"
      , gn = "gt-baf-entry-clickable"
      , hn = "gt-baf-hl"
      , jn = "gt-baf-pos-section"
      , kn = "gt-baf-previous-word-mobile"
      , ln = "gt-baf-table"
      , mn = "gt-baf-translations-alt"
      , nn = "gt-baf-translations-mobile"
      , on = "gt-baf-word"
      , pn = "gt-baf-word-clickable"
      , qn = "gt-baf-word-selected"
      , rn = "gt-bbar"
      , sn = "gt-bbar-dm"
      , tn = "gt-bbar-lm"
      , un = "gt-card-expand-wrapper"
      , vn = "gt-card-fadein-wrapper"
      , wn = "gt-card-ttl-txt"
      , xn = "gt-card-widen-wrapper"
      , yn = "gt-cc-bc"
      , zn = "gt-cc-exp"
      , An = "gt-cc-l-i"
      , Bn = "gt-cc-r-i"
      , Cn = "gt-cc-t"
      , Dn = "gt-cc-tc"
      , En = "gt-cd"
      , Fn = "gt-cd-"
      , Gn = "gt-cd-baf"
      , Hn = "gt-cd-c"
      , In = "gt-cd-cl"
      , Jn = "gt-cd-pos"
      , Kn = "gt-cd-tl"
      , Ln = "gt-clear"
      , Mn = "gt-ct-text"
      , Nn = "gt-ct-translit"
      , On = "gt-ct-tts"
      , Pn = "gt-def-list"
      , Qn = "gt-def-row"
      , Rn = "gt-def-synonym"
      , Sn = "gt-def-synonym-title"
      , Tn = "gt-edit"
      , Un = "gt-edit-menuitem"
      , Vn = "gt-ex-mt"
      , Wn = "gt-feedback"
      , Xn = "gt-gms-icon"
      , Yn = "gt-hats"
      , Zn = "gt-hats-c"
      , $n = "gt-hats-icon"
      , ao = "gt-hats-link"
      , bo = "gt-hats-option"
      , co = "gt-hats-tt"
      , eo = "gt-hats-x"
      , fo = "gt-hl-layer"
      , go = "gt-hl-text"
      , ho = "gt-input-tool"
      , io = "gt-is"
      , jo = "gt-is-ctr"
      , ko = "gt-is-flag"
      , lo = "gt-is-si-"
      , mo = "gt-kp-desc"
      , no = "gt-kp-image"
      , oo = "gt-lc"
      , po = "gt-logo"
      , qo = "gt-main"
      , ro = "gt-mt-md"
      , so = "gt-otf-switch"
      , to = "gt-pb-c"
      , uo = "gt-pb-id"
      , vo = "gt-pb-save"
      , wo = "gt-pb-sb"
      , xo = "gt-pb-sbt"
      , yo = "gt-pb-spin"
      , zo = "gt-pb-star"
      , Ao = "gt-pb-sw1"
      , Bo = "gt-pb-sw2"
      , Co = "gt-pb-tb"
      , Do = "gt-pb-ttc"
      , Eo = "gt-promo-lr"
      , Fo = "gt-related-suggest-message"
      , Go = "gt-res-c"
      , Ho = "gt-res-content"
      , Io = "gt-res-copy"
      , Jo = "gt-res-data"
      , Ko = "gt-res-edit"
      , Lo = "gt-res-formal"
      , Mo = "gt-res-formality"
      , No = "gt-res-informal"
      , Oo = "gt-res-listen"
      , Po = "gt-res-roman"
      , Qo = "gt-res-select"
      , Ro = "gt-res-share"
      , So = "gt-res-tools"
      , To = "gt-res-tools-l"
      , Uo = "gt-res-tools-r"
      , Vo = "gt-res-undo"
      , Wo = "gt-res-wrap"
      , Xo = "gt-revert-correct-message"
      , Yo = "gt-rw-span"
      , Zo = "gt-sl"
      , $o = "gt-sl-gms"
      , ap = "gt-sl-sugg"
      , bp = "gt-speech"
      , cp = "gt-speech-l3"
      , dp = "gt-spell-correct-message"
      , ep = "gt-src-c"
      , fp = "gt-src-is"
      , gp = "gt-src-listen"
      , hp = "gt-src-roman"
      , ip = "gt-src-tools"
      , jp = "gt-src-tools-l"
      , kp = "gt-src-wrap"
      , lp = "gt-submit"
      , mp = "gt-swap"
      , np = "gt-syn-list"
      , op = "gt-syn-row"
      , pp = "gt-syn-span"
      , qp = "gt-syn-summary-row"
      , rp = "gt-tl"
      , sp = "gt-tl-gms"
      , tp = "gt-tl-sugg"
      , up = "handleSingleResult_"
      , vp = "handleTextResult_"
      , wp = "handleTransliterationResult_"
      , xp = "hashchange"
      , yp = "haspopup"
      , zp = "hdt"
      , Ap = "head"
      , Bp = "heading"
      , Cp = "height"
      , Dp = "help"
      , Ep = "hi-t-k0-qwerty"
      , Fp = "hidden"
      , Gp = "hide"
      , Hp = "highlight"
      , Ip = "history_iframe"
      , Jp = "history_state"
      , Kp = "hl"
      , Lp = "horizontal"
      , Mp = "hps"
      , Np = "hready"
      , Op = "href"
      , Pp = "html5"
      , Qp = "http://"
      , Rp = "http://csi.gstatic.com/csi"
      , Sp = "https"
      , Tp = "https:"
      , Up = "https:///"
      , Vp = "https://chekhov.withgoogle.com/?utm_source=other&utm_medium=gtranslate&utm_campaign="
      , Wp = "https://csi.gstatic.com/csi"
      , Xp = "https://docs.google.com/a/google.com/spreadsheets/"
      , Yp = "https://docs.google.com/spreadsheets/"
      , Zp = "https://translate.google.com/#"
      , $p = "hwt"
      , aq = "i"
      , bq = "iPad"
      , cq = "iPhone"
      , dq = "iPod"
      , eq = 'id="'
      , fq = "ie"
      , gq = "iframe"
      , hq = "ilog"
      , iq = "ilogorig"
      , jq = "ilogtrans"
      , kq = "import"
      , lq = "init"
      , mq = "inline"
      , nq = "innerText"
      , oq = "input"
      , pq = "inputm"
      , qq = "inputtools"
      , rq = "invalidResponse"
      , sq = "is"
      , tq = "ita-kd-dropdown"
      , uq = "ita-kd-inputtool-icon"
      , vq = "itui"
      , wq = 'javascript:""'
      , xq = "javascript:;"
      , yq = "javascript:void(0)"
      , zq = "je"
      , Aq = "jfk-bubble"
      , Bq = "jfk-bubble-arrow-id"
      , Cq = "jfk-bubble-closebtn-id"
      , Dq = "jfk-bubble-content-id"
      , Eq = "jfk-butterBar"
      , Fq = "jfk-butterBar-mini"
      , Gq = "jfk-butterBar-shown"
      , Hq = "jfk-button-action"
      , Iq = "jfk-button-clear-outline"
      , Jq = "jfk-button-contrast"
      , Kq = "jfk-button-default"
      , Lq = "jfk-button-flat"
      , Mq = "jfk-button-img"
      , Nq = "jfk-button-label"
      , Oq = "jfk-button-mini"
      , Pq = "jfk-button-narrow"
      , Qq = "jfk-button-primary"
      , Rq = "jfk-button-standard"
      , Sq = "jfk-checkbox"
      , Tq = "jfk-checkbox-checkmark"
      , Uq = "jfk-checkbox-clearOutline"
      , Vq = "jfk-tooltip-data"
      , Wq = "jfk-tooltip-hide"
      , Xq = "js"
      , Yq = "jsonParseErr"
      , Zq = "kc"
      , $q = "kd"
      , ar = "key"
      , br = "keydown"
      , cr = "keypress"
      , dr = "keyup"
      , er = "km"
      , fr = "kr"
      , gr = "l"
      , hr = "label"
      , ir = "labelledby"
      , jr = "langidshow"
      , kr = "languageSelected"
      , lr = "latn-002-t-k0-und"
      , mr = "ld"
      , nr = "leave"
      , or = "left"
      , pr = "left "
      , qr = "letter-spacing"
      , rr = "lexicon"
      , sr = "lg"
      , tr = "line-height"
      , ur = "listbox"
      , vr = "live"
      , wr = "lo"
      , xr = "load"
      , yr = "loaded"
      , zr = "losecapture"
      , Ar = "lt"
      , Br = "ltr"
      , Cr = "lxclear"
      , Dr = "lxnext"
      , Er = "lxprev"
      , Fr = "m"
      , Gr = "margin"
      , Hr = "margin-bottom"
      , Ir = "margin-left"
      , Kr = "margin-right"
      , Lr = "margin-top"
      , Mr = "max-height"
      , Nr = "max-width"
      , Or = "md"
      , Pr = "menu"
      , Qr = "menuitemcheckbox"
      , Rr = "menuitemradio"
      , Sr = "message"
      , Tr = "meta"
      , Ur = "missing"
      , Vr = "mixed"
      , Wr = "modal-dialog"
      , Xr = "mouse"
      , Yr = "mousedown"
      , Zr = "mousemove"
      , $r = "mouseout"
      , as = "mouseover"
      , bs = "mouseup"
      , cs = "move_offscreen"
      , ds = "ms"
      , es = "ms, aborting"
      , fs = "mt"
      , gs = "multipart/form-data"
      , hs = "native code"
      , is = "navigate"
      , js = "ne"
      , ks = "new"
      , ls = "new-a"
      , ms = "new-b"
      , ns = "new-c"
      , os = "next-button"
      , ps = "nj"
      , qs = "no"
      , rs = "noMatch"
      , ss = "nodeName"
      , ts = "nodeType"
      , us = "none"
      , vs = "not found"
      , ws = "null"
      , xs = "number"
      , ys = "o"
      , zs = "object"
      , As = "oe"
      , Bs = "off"
      , Cs = "ol"
      , Ds = "on"
      , Es = "onhashchange"
      , Fs = "onreadystatechange"
      , Gs = "opacity"
      , Hs = "opacity 1s linear"
      , Is = "open"
      , Js = "open-"
      , Ks = "option"
      , Ls = "orig"
      , Ms = "otf"
      , Ns = "overflow"
      , Os = "overflow-x"
      , Ps = "overflow-y"
      , Qs = "overflowX"
      , Rs = "overflowY"
      , Ss = "owns"
      , Ts = "padding"
      , Us = "padding-"
      , Vs = "padding-bottom"
      , Ws = "padding-left"
      , Xs = "padding-right"
      , Ys = "padding-top"
      , Zs = "paddingLeft"
      , $s = "paddingRight"
      , at = "pageshow"
      , bt = "parent"
      , ct = "paste"
      , dt = "pb"
      , et = "pb-back-c"
      , ft = "pb-cb"
      , gt = "pb-cb-a"
      , ht = "pb-dd"
      , it = "pb-del-c"
      , jt = "pb-drag-after"
      , kt = "pb-drag-before"
      , lt = "pb-drag-cur"
      , mt = "pb-drag-flt"
      , nt = "pb-empty"
      , ot = "pb-ls"
      , pt = "pb-sh"
      , qt = "pb-shadow"
      , rt = "pb-slis-td"
      , st = "pb-sp-del"
      , tt = "pb-src-td"
      , ut = "pb-st"
      , vt = "pb-sw"
      , wt = "pb-tb-c"
      , xt = "pb-tgt-td"
      , yt = "pb-tlis-td"
      , zt = "pb-tool"
      , At = "pb-tool-r"
      , Bt = "pbback-button"
      , Ct = "pbca"
      , Dt = "pbcl"
      , Et = "pbclick"
      , Ft = "pbco"
      , Gt = "pbdel-button"
      , Ht = "pbedit"
      , It = "pberr"
      , Jt = "pbexp"
      , Kt = "pbexp-button"
      , Lt = "pbfo"
      , Mt = "pbmUpdated"
      , Nt = "pbsavb"
      , Ot = "pbsavs"
      , Pt = "pbsi"
      , Qt = "pbsw"
      , Rt = "pbtl"
      , St = "pbv"
      , Tt = "pc"
      , Ut = "phrsclk"
      , Vt = "pixelHeight"
      , Wt = "pixelLeft"
      , Xt = "pixelWidth"
      , Yt = "placeholder"
      , Zt = "play"
      , $t = "play_start_playlist"
      , au = "polite"
      , bu = "posinset"
      , cu = "position"
      , du = "position:absolute;display:none;"
      , eu = "post"
      , fu = "prerender"
      , gu = "presentation"
      , hu = "pressed"
      , iu = "prev-button"
      , ju = "prt"
      , ku = "psl"
      , lu = "pt-wrap"
      , mu = "px"
      , nu = "q"
      , ou = "qab"
      , pu = "qc"
      , qu = "qca"
      , ru = "quot"
      , su = "r"
      , tu = "ready"
      , uu = "readystatechange"
      , vu = "refugee"
      , wu = "relative"
      , xu = "replace"
      , yu = "res-translit"
      , zu = "reset"
      , Au = "resize"
      , Bu = "result"
      , Cu = "result_box"
      , Du = "resume"
      , Eu = "return"
      , Fu = "rgb("
      , Gu = "right"
      , Hu = "rm"
      , Iu = "role"
      , Ju = "rom"
      , Ku = "round-trip-content"
      , Lu = "round-trip-popup"
      , Mu = "rtl"
      , y = "ru"
      , Nu = "rw"
      , Ou = "s"
      , Pu = "s "
      , Qu = "script"
      , Ru = "scroll"
      , Su = "sel"
      , Tu = "selalt"
      , Uu = "select"
      , Vu = "select-button"
      , Wu = "select_document"
      , Xu = "select_text"
      , Yu = "selectall"
      , Zu = "selected"
      , $u = "send"
      , av = "separator"
      , bv = "set"
      , cv = "setsize"
      , dv = "share"
      , ev = "share-button"
      , fv = "share-panel"
      , gv = "shift"
      , hv = "short_text"
      , iv = "shortcut"
      , jv = "shortcut_"
      , kv = "show"
      , lv = "show-"
      , mv = "sl"
      , nv = "slauto"
      , ov = "slc"
      , pv = "slo"
      , qv = "sm"
      , rv = "smtalt"
      , sv = "sound_error"
      , tv = "sound_finished"
      , uv = "sound_interrupted"
      , vv = "sound_play_start"
      , wv = "source"
      , xv = "source-is"
      , yv = "source="
      , zv = "source=baf"
      , Av = "sourceIndex"
      , Bv = "source_changed"
      , Cv = "span"
      , Dv = "speech"
      , Ev = "speech-button"
      , Fv = "speechEnd"
      , Gv = "speechStart"
      , Hv = "spell"
      , Iv = "spelling-correction"
      , Jv = "splice"
      , Kv = "src"
      , Lv = "src-translit"
      , Mv = "srcEmphasizeUpdated"
      , Nv = "srcLanguageUpdated"
      , Ov = "srcSuggestionUpdated"
      , Pv = "srcrom"
      , Qv = "ss"
      , Rv = "ssel"
      , Sv = "ssuggclick"
      , Tv = "st"
      , Uv = "st-buttons"
      , Vv = "st-stp1"
      , Wv = "st-wrap"
      , Xv = "start"
      , Yv = "static"
      , Zv = "staticSrcSuggestionUpdated"
      , $v = "staticTgtSuggestionUpdated"
      , aw = "stop"
      , bw = "stop_playlist"
      , cw = "string"
      , dw = "style"
      , ew = "styleFloat"
      , fw = "submit"
      , gw = "success"
      , hw = "survey"
      , iw = "sw"
      , jw = "swap"
      , kw = "swapclick"
      , lw = "switch_to_aurebesh"
      , mw = "t"
      , nw = "t-new-user"
      , ow = "t-new-user-a"
      , pw = "t-new-user-b"
      , qw = "t-new-user-c"
      , rw = "t-refugee-2"
      , sw = "t-return-user"
      , tw = "t-served-community"
      , uw = "t-user-edit"
      , vw = "tab"
      , ww = "tabIndex"
      , xw = "tabindex"
      , yw = 'tabindex="'
      , zw = "table"
      , Aw = "target"
      , Bw = "tbphrase"
      , Cw = "tco"
      , Dw = "text"
      , Ew = "text-align"
      , Fw = "text-decoration"
      , Gw = "text-transform"
      , Hw = "text/html"
      , Iw = "text/javascript"
      , Jw = "textContent"
      , Kw = "textarea"
      , Lw = "textarea-placeholder-input"
      , Mw = "tgtEmphasizeUpdated"
      , Nw = "tgtLanguageUpdated"
      , Ow = "tick"
      , Pw = "timeout"
      , Qw = "timer"
      , Rw = "title"
      , Sw = "tl"
      , Tw = "tl:"
      , Uw = "tlauto"
      , Vw = "tlc"
      , Ww = "tlo"
      , Xw = "toggle_display"
      , Yw = "tooltip"
      , Zw = "top"
      , $w = "touchcancel"
      , ax = "touchend"
      , bx = "touchmove"
      , cx = "touchstart"
      , dx = "trans"
      , ex = "trans-edit"
      , fx = "trans-edit-button"
      , gx = "trans-listen-button"
      , hx = "trans-pb-button"
      , ix = "trans-pb-button-saved"
      , jx = "trans-roman-button"
      , kx = "trans-swap-button"
      , lx = "trans-target"
      , mx = "trans-target-empty"
      , nx = "trans-target-highlight"
      , ox = "trans-undo-button"
      , px = "trans-verified-button"
      , qx = "trans.common.TranslationAPI"
      , rx = "transerr"
      , sx = "transition"
      , tx = "translate"
      , ux = "translate_separate_corpus"
      , vx = "translation_changed"
      , wx = "transparent"
      , xx = "trigger"
      , yx = "trs"
      , zx = "true"
      , Ax = "tsel"
      , Bx = "tsuggclick"
      , Cx = "ttl"
      , Dx = "tts"
      , Ex = "ttsaudio"
      , Fx = "ttserror"
      , Gx = "ttsfinish"
      , Hx = "ttsinterrupted"
      , Ix = "ttsplaystart"
      , Jx = "ttsstart"
      , Kx = "ttsstop"
      , Lx = "tws_confirm"
      , Mx = "tws_lsugg"
      , Nx = "tws_revert"
      , Ox = "tws_spell"
      , Px = "type_error:Const"
      , Qx = "type_error:SafeHtml"
      , Rx = "type_error:SafeStyle"
      , Sx = "type_error:SafeUrl"
      , Tx = "type_error:TrustedResourceUrl"
      , Ux = "typing"
      , Vx = "u"
      , Wx = "ue"
      , Xx = "uncheck"
      , Yx = "und"
      , Zx = "unhighlight"
      , $x = "unload"
      , ay = "unselect"
      , by = "unselectable"
      , cy = "url"
      , dy = "usealt"
      , ey = "v"
      , fy = "value"
      , gy = "var "
      , hy = "vertical"
      , iy = "vertical-align"
      , jy = "visibility"
      , ky = "visible"
      , ly = "vkb"
      , my = "vt-dismiss"
      , ny = "vt-link"
      , oy = "webapp"
      , py = "webkitSpeechRecognition"
      , qy = "webkitvisibilitychange"
      , ry = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;"
      , sy = "width"
      , ty = "width: %dpx"
      , uy = "width: 100%"
      , vy = "window.event"
      , wy = "withCredentials"
      , xy = "word-spacing"
      , yy = "wtgbr"
      , zy = "yue-hant-t-i0-und"
      , Ay = "zClosurez"
      , By = "zSoyz"
      , Cy = "zh"
      , Dy = "zh-CN"
      , Ey = "zh-TW"
      , Fy = "zh-hant-t-i0-cangjie-1982"
      , Gy = "zh-hant-t-i0-pinyin"
      , Hy = "zh-hant-t-i0-und"
      , Iy = "{"
      , Jy = "{font-family:%FONT%arial,sans-serif!important}"
      , Ky = "|"
      , Ly = "|["
      , My = "}"
      , Ny = "\u00a0"
      , Oy = "\u09a5\u09cd"
      , Py = "\u0ba4\u0bcd"
      , Qy = "\u0bb1"
      , Ry = "\u0bb1\u0bbe"
      , Sy = "\u0bb1\u0bc6"
      , Ty = "\u0bb1\u0bc6\u0bbe"
      , Uy = "\u0d15\u0d4d"
      , Vy = "\u0da5\u0dca"
      , Wy = "\u0e81\u0ec8"
      , Xy = "\u1001\u1039\u1010"
      , Yy = "\u1780\u17d1"
      , Zy = "\u200b";
    function $y() {
        return function(a) {
            return a
        }
    }
    function az() {
        return function() {}
    }
    function bz(a) {
        return function(b) {
            this[a] = b
        }
    }
    function z(a) {
        return function() {
            return this[a]
        }
    }
    function B(a) {
        return function() {
            return a
        }
    }
    var C, cz = cz || {}, E = this, dz = function(a) {
        return void 0 !== a
    }, ez = function(a, b) {
        var c = a.split(dd)
          , d = E;
        c[0]in d || !d.execScript || d.execScript(gy + c[0]);
        for (var e; c.length && (e = c.shift()); )
            !c.length && dz(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
    }, fz = function(a, b) {
        for (var c = a.split(dd), d = b || E, e; e = c.shift(); )
            if (null != d[e])
                d = d[e];
            else
                return null;
        return d
    }, gz = az(), hz = function(a) {
        a.O = function() {
            return a.Jg ? a.Jg : a.Jg = new a
        }
    }, iz = function(a) {
        var b = typeof a;
        if (b == zs)
            if (a) {
                if (a instanceof Array)
                    return Ii;
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if (c == Ih)
                    return zs;
                if (c == Gh || typeof a.length == xs && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(Jv))
                    return Ii;
                if (c == Hh || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(Qj))
                    return um
            } else
                return ws;
        else if (b == um && "undefined" == typeof a.call)
            return zs;
        return b
    }, jz = function(a) {
        return null != a
    }, kz = function(a) {
        return iz(a) == Ii
    }, lz = function(a) {
        var b = iz(a);
        return b == Ii || b == zs && typeof a.length == xs
    }, mz = function(a) {
        return typeof a == cw
    }, nz = function(a) {
        return typeof a == xs
    }, oz = function(a) {
        return iz(a) == um
    }, pz = function(a) {
        var b = typeof a;
        return b == zs && null != a || b == um
    }, sz = function(a) {
        return a[qz] || (a[qz] = ++rz)
    }, qz = "closure_uid_" + (1E9 * Math.random() >>> 0), rz = 0, tz = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, uz = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }, F = function(a, b, c) {
        F = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf(hs) ? tz : uz;
        return F.apply(null, arguments)
    }, vz = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, wz = Date.now || function() {
        return +new Date
    }
    , G = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.v = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Vj = function(a, c, f) {
            for (var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++)
                g[m - 2] = arguments[m];
            return b.prototype[c].apply(a, g)
        }
    };
    var xz = function(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, xz);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    G(xz, Error);
    xz.prototype.name = "CustomError";
    var yz;
    var zz = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
      , Az = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
      , Bz = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, ba)
    }
      , Cz = function(a) {
        return a.replace(/[\t\r\n ]+/g, l).replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, k)
    }
      , Dz = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, k)
    }
      , Ez = function(a) {
        return encodeURIComponent(String(a))
    }
      , Fz = function(a) {
        return decodeURIComponent(a.replace(/\+/g, l))
    }
      , Gz = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, Me)
    }
      , Oz = function(a) {
        if (!Hz.test(a))
            return a;
        -1 != a.indexOf(cb) && (a = a.replace(Iz, hb));
        -1 != a.indexOf(ke) && (a = a.replace(Jz, wb));
        -1 != a.indexOf(of) && (a = a.replace(Kz, sb));
        -1 != a.indexOf(Ca) && (a = a.replace(Lz, Ab));
        -1 != a.indexOf(Lb) && (a = a.replace(Mz, eb));
        -1 != a.indexOf(aa) && (a = a.replace(Nz, db));
        return a
    }
      , Iz = /&/g
      , Jz = /</g
      , Kz = />/g
      , Lz = /"/g
      , Mz = /'/g
      , Nz = /\x00/g
      , Hz = /[\x00&<>"']/
      , Qz = function(a) {
        var b = {
            "&amp;": cb,
            "&lt;": ke,
            "&gt;": of,
            "&quot;": Ca
        }, c;
        c = E.document.createElement(nl);
        return a.replace(Pz, function(a, e) {
            var f = b[a];
            if (f)
                return f;
            if (e.charAt(0) == Sa) {
                var g = Number(Fd + e.substr(1));
                isNaN(g) || (f = String.fromCharCode(g))
            }
            f || (c.innerHTML = a + l,
            f = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = f
        })
    }
      , Rz = function(a) {
        return a.replace(/&([^;]+);/g, function(a, c) {
            switch (c) {
            case vi:
                return cb;
            case Ar:
                return ke;
            case Qm:
                return of;
            case ru:
                return Ca;
            default:
                if (c.charAt(0) == Sa) {
                    var d = Number(Fd + c.substr(1));
                    if (!isNaN(d))
                        return String.fromCharCode(d)
                }
                return a
            }
        })
    }
      , Pz = /&([^;\s<&]+);?/g
      , Sz = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, Jh).replace(/\x08/g, Mh)
    }
      , Tz = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
      , Uz = function(a) {
        return null == a ? k : String(a)
    }
      , Vz = function(a) {
        return Array.prototype.join.call(arguments, k)
    }
      , Xz = function(a, b) {
        for (var c = 0, d = Dz(String(a)).split(dd), e = Dz(String(b)).split(dd), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
            var m = d[g] || k
              , n = e[g] || k
              , p = RegExp(Nb, vm)
              , r = RegExp(Nb, vm);
            do {
                var u = p.exec(m) || [k, k, k]
                  , A = r.exec(n) || [k, k, k];
                if (0 == u[0].length && 0 == A[0].length)
                    break;
                c = Wz(0 == u[1].length ? 0 : parseInt(u[1], 10), 0 == A[1].length ? 0 : parseInt(A[1], 10)) || Wz(0 == u[2].length, 0 == A[2].length) || Wz(u[2], A[2])
            } while (0 == c)
        }
        return c
    }
      , Wz = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
      , Yz = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }
      , Zz = function(a) {
        var b = mz(void 0) ? Sz(void 0) : Kh;
        return a.replace(new RegExp(Ob + (b ? Ly + b + Oh : k) + Qb,vm), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };
    var $z = $y();
    var aA = function(a) {
        return a[a.length - 1]
    }
      , bA = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    }
    : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (mz(a))
            return mz(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , cA = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = mz(a) ? a.split(k) : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
      , dA = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, g = mz(a) ? a.split(k) : a, m = 0; m < d; m++)
            if (m in g) {
                var n = g[m];
                b.call(c, n, m, a) && (e[f++] = n)
            }
        return e
    }
      , eA = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = mz(a) ? a.split(k) : a, g = 0; g < d; g++)
            g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }
      , fA = Array.prototype.some ? function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = mz(a) ? a.split(k) : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return !0;
        return !1
    }
      , gA = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = mz(a) ? a.split(k) : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a))
                return !1;
        return !0
    }
      , hA = function(a, b) {
        var c = 0;
        cA(a, function(a, e, f) {
            b.call(void 0, a, e, f) && ++c
        }, void 0);
        return c
    }
      , iA = function(a, b) {
        var c;
        a: {
            c = a.length;
            for (var d = mz(a) ? a.split(k) : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    c = e;
                    break a
                }
            c = -1
        }
        return 0 > c ? null : mz(a) ? a.charAt(c) : a[c]
    }
      , jA = function(a, b) {
        return 0 <= bA(a, b)
    }
      , kA = function(a, b) {
        jA(a, b) || a.push(b)
    }
      , lA = function(a, b) {
        var c = bA(a, b), d;
        (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
        return d
    }
      , mA = function(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }
      , nA = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
      , oA = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (lz(d)) {
                var e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++)
                    a[e + g] = d[g]
            } else
                a.push(d)
        }
    }
      , qA = function(a, b, c, d) {
        Array.prototype.splice.apply(a, pA(arguments, 1))
    }
      , pA = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var rA = function(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
      , sA = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
      , tA = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
      , uA = function(a) {
        return null !== a && wy in a
    }
      , wA = function() {
        var a = vA, b;
        for (b in a)
            return !1;
        return !0
    }
      , xA = function(a, b, c) {
        if (null !== a && b in a)
            throw Error('The object already contains the key "' + b + Ca);
        a[b] = c
    }
      , yA = function(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
      , zA = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
      , AA = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < zA.length; f++)
                c = zA[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
      , BA = function(a) {
        var b = arguments.length;
        if (1 == b && kz(arguments[0]))
            return BA.apply(null, arguments[0]);
        if (b % 2)
            throw Error(Bh);
        for (var c = {}, d = 0; d < b; d += 2)
            c[arguments[d]] = arguments[d + 1];
        return c
    }
      , CA = function(a) {
        var b = arguments.length;
        if (1 == b && kz(arguments[0]))
            return CA.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    };
    var DA = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var EA = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i
      , FA = function(a) {
        return EA.test(a)
    };
    var GA;
    a: {
        var HA = E.navigator;
        if (HA) {
            var IA = HA.userAgent;
            if (IA) {
                GA = IA;
                break a
            }
        }
        GA = k
    }
    var H = function(a) {
        return -1 != GA.indexOf(a)
    };
    var JA = function() {
        return H(Pg) || H(Mg)
    }
      , KA = function() {
        return (H(Nf) || H(Sf)) && !JA() && !H(Xf)
    };
    var MA = function() {
        this.a = k;
        this.b = LA
    };
    MA.prototype.wc = !0;
    MA.prototype.Mb = z(t);
    MA.prototype.toString = function() {
        return Qf + this.a + My
    }
    ;
    var NA = function(a) {
        return a instanceof MA && a.constructor === MA && a.b === LA ? a.a : Px
    }
      , LA = {}
      , OA = function(a) {
        var b = new MA;
        b.a = a;
        return b
    };
    var QA = function() {
        this.a = k;
        this.b = PA
    };
    QA.prototype.wc = !0;
    var PA = {};
    QA.prototype.Mb = z(t);
    var RA = function(a) {
        var b = new QA;
        b.a = a;
        return b
    }
      , SA = RA(k)
      , TA = /^[-,."'%_!# a-zA-Z0-9]+$/;
    var VA = function() {
        this.a = k;
        this.b = UA
    };
    VA.prototype.wc = !0;
    VA.prototype.Mb = z(t);
    VA.prototype.tf = !0;
    VA.prototype.oc = B(1);
    var WA = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i
      , UA = {};
    var YA = function() {
        this.a = k;
        this.b = XA
    };
    YA.prototype.wc = !0;
    YA.prototype.Mb = z(t);
    YA.prototype.tf = !0;
    YA.prototype.oc = B(1);
    var ZA = function(a) {
        return a instanceof YA && a.constructor === YA && a.b === XA ? a.a : Tx
    }
      , XA = {}
      , $A = function(a) {
        var b = new YA;
        b.a = a;
        return b
    };
    var bB = function() {
        this.a = k;
        this.c = aB;
        this.b = null
    };
    bB.prototype.tf = !0;
    bB.prototype.oc = z(Vi);
    bB.prototype.wc = !0;
    bB.prototype.Mb = z(t);
    var cB = function(a) {
        return a instanceof bB && a.constructor === bB && a.c === aB ? a.a : Qx
    }
      , eB = function(a) {
        if (a instanceof bB)
            return a;
        var b = null;
        a.tf && (b = a.oc());
        a = Oz(a.wc ? a.Mb() : String(a));
        return dB(a, b)
    }
      , fB = function(a) {
        if (a instanceof bB)
            return a;
        a = eB(a);
        var b = Gz(cB(a));
        return dB(b, a.oc())
    }
      , gB = /^[a-zA-Z0-9-]+$/
      , hB = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , iB = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    }
      , kB = function(a, b, c) {
        if (!gB.test(a))
            throw Error("Invalid tag name <" + a + ">.");
        if (a.toUpperCase()in iB)
            throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
        return jB(a, b, c)
    }
      , lB = function(a) {
        var b = 0
          , c = k
          , d = function(a) {
            kz(a) ? cA(a, d) : (a = eB(a),
            c += cB(a),
            a = a.oc(),
            0 == b ? b = a : 0 != a && b != a && (b = null))
        };
        cA(arguments, d);
        return dB(c, b)
    }
      , aB = {}
      , dB = function(a, b) {
        var c = new bB;
        c.a = a;
        c.b = b;
        return c
    }
      , jB = function(a, b, c) {
        var d = null
          , e = ke + a;
        if (b)
            for (var f in b) {
                if (!gB.test(f))
                    throw Error('Invalid attribute name "' + f + '".');
                var g = b[f];
                if (null != g) {
                    var m, n = a;
                    m = f;
                    if (g instanceof MA)
                        g = NA(g);
                    else if (m.toLowerCase() == dw) {
                        if (!pz(g))
                            throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof g + " given: " + g);
                        if (!(g instanceof QA)) {
                            var n = k
                              , p = void 0;
                            for (p in g) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(p))
                                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + p);
                                var r = g[p];
                                if (null != r) {
                                    if (r instanceof MA)
                                        r = NA(r);
                                    else if (TA.test(r)) {
                                        for (var u = !0, A = !0, D = 0; D < r.length; D++) {
                                            var V = r.charAt(D);
                                            V == Lb && A ? u = !u : V == Ca && u && (A = !A)
                                        }
                                        u && A || (r = Ay)
                                    } else
                                        r = Ay;
                                    n += p + ee + r + ie
                                }
                            }
                            g = n ? RA(n) : SA
                        }
                        g = g instanceof QA && g.constructor === QA && g.b === PA ? g.a : Rx
                    } else {
                        if (/^on/i.test(m))
                            throw Error('Attribute "' + m + '" requires goog.string.Const value, "' + g + '" given.');
                        if (m.toLowerCase()in hB)
                            if (g instanceof YA)
                                g = ZA(g);
                            else if (g instanceof VA)
                                g = g instanceof VA && g.constructor === VA && g.b === UA ? g.a : Sx;
                            else if (mz(g))
                                g instanceof VA || (g = g.wc ? g.Mb() : String(g),
                                WA.test(g) || (g = Yh),
                                n = new VA,
                                n.a = g,
                                g = n),
                                g = g.Mb();
                            else
                                throw Error('Attribute "' + m + '" on tag "' + n + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + g + '" given.');
                    }
                    g.wc && (g = g.Mb());
                    m = m + nf + Oz(String(g)) + Ca;
                    e = e + (l + m)
                }
            }
        null != c ? kz(c) || (c = [c]) : c = [];
        !0 === DA[a.toLowerCase()] ? e += of : (d = lB(c),
        e += of + cB(d) + le + a + of,
        d = d.oc());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
        return dB(e, d)
    };
    dB("<!DOCTYPE html>", 0);
    var mB = dB(k, 0);
    var nB = "StopIteration"in E ? E.StopIteration : {
        message: "StopIteration",
        stack: k
    }
      , oB = az();
    oB.prototype.next = function() {
        throw nB;
    }
    ;
    oB.prototype.jb = function() {
        return this
    }
    ;
    var pB = function(a) {
        if (a instanceof oB)
            return a;
        if (typeof a.jb == um)
            return a.jb(!1);
        if (lz(a)) {
            var b = 0
              , c = new oB;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw nB;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
      , qB = function(a, b, c) {
        a = pB(a);
        try {
            for (; b.call(c, a.next(), void 0, a); )
                ;
        } catch (d) {
            if (d !== nB)
                throw d;
        }
    };
    var rB = function(a, b) {
        this.c = {};
        this.b = [];
        this.j = this.g = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error(Bh);
            for (var d = 0; d < c; d += 2)
                this.a(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof rB ? (c = a.rb(),
            d = a.Ta()) : (c = tA(a),
            d = sA(a));
            for (var e = 0; e < c.length; e++)
                this.a(c[e], d[e])
        }
    };
    rB.prototype.Ta = function() {
        sB(this);
        for (var a = [], b = 0; b < this.b.length; b++)
            a.push(this.c[this.b[b]]);
        return a
    }
    ;
    rB.prototype.rb = function() {
        sB(this);
        return this.b.concat()
    }
    ;
    var uB = function(a, b) {
        return tB(a.c, b)
    };
    rB.prototype.clear = function() {
        this.c = {};
        this.j = this.g = this.b.length = 0
    }
    ;
    var vB = function(a, b) {
        tB(a.c, b) && (delete a.c[b],
        a.g--,
        a.j++,
        a.b.length > 2 * a.g && sB(a))
    }
      , sB = function(a) {
        if (a.g != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length; ) {
                var d = a.b[b];
                tB(a.c, d) && (a.b[c++] = d);
                b++
            }
            a.b.length = c
        }
        if (a.g != a.b.length) {
            for (var e = {}, c = b = 0; b < a.b.length; )
                d = a.b[b],
                tB(e, d) || (a.b[c++] = d,
                e[d] = 1),
                b++;
            a.b.length = c
        }
    }
      , wB = function(a, b) {
        return tB(a.c, b) ? a.c[b] : void 0
    };
    rB.prototype.a = function(a, b) {
        tB(this.c, a) || (this.g++,
        this.b.push(a),
        this.j++);
        this.c[a] = b
    }
    ;
    rB.prototype.forEach = function(a, b) {
        for (var c = this.rb(), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, wB(this, e), e, this)
        }
    }
    ;
    rB.prototype.clone = function() {
        return new rB(this)
    }
    ;
    rB.prototype.jb = function(a) {
        sB(this);
        var b = 0
          , c = this.j
          , d = this
          , e = new oB;
        e.next = function() {
            if (c != d.j)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.b.length)
                throw nB;
            var e = d.b[b++];
            return a ? e : d.c[e]
        }
        ;
        return e
    }
    ;
    var tB = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var xB = function(a) {
        if (a.Ta && typeof a.Ta == um)
            return a.Ta();
        if (mz(a))
            return a.split(k);
        if (lz(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return sA(a)
    }
      , yB = function(a, b, c) {
        if (a.forEach && typeof a.forEach == um)
            a.forEach(b, c);
        else if (lz(a) || mz(a))
            cA(a, b, c);
        else {
            var d;
            if (a.rb && typeof a.rb == um)
                d = a.rb();
            else if (a.Ta && typeof a.Ta == um)
                d = void 0;
            else if (lz(a) || mz(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)
                    d.push(f)
            } else
                d = tA(a);
            for (var e = xB(a), f = e.length, g = 0; g < f; g++)
                b.call(c, e[g], d && d[g], a)
        }
    };
    var AB = function(a) {
        this.a = new rB;
        if (a) {
            a = xB(a);
            for (var b = a.length, c = 0; c < b; c++) {
                var d = a[c];
                this.a.a(zB(d), d)
            }
        }
    }
      , zB = function(a) {
        var b = typeof a;
        return b == zs && a || b == um ? ys + sz(a) : b.substr(0, 1) + a
    };
    C = AB.prototype;
    C.clear = function() {
        this.a.clear()
    }
    ;
    C.contains = function(a) {
        return uB(this.a, zB(a))
    }
    ;
    C.Ta = function() {
        return this.a.Ta()
    }
    ;
    C.clone = function() {
        return new AB(this)
    }
    ;
    C.jb = function() {
        return this.a.jb(!1)
    }
    ;
    var BB = function() {
        return H(cq) && !H(dq) && !H(bq)
    };
    var CB = JA()
      , I = H(xh) || H(wg)
      , DB = H(Xf)
      , EB = DB || I
      , FB = H("Gecko") && !(-1 != GA.toLowerCase().indexOf("webkit") && !H(Xf)) && !(H(xh) || H(wg)) && !H(Xf)
      , GB = -1 != GA.toLowerCase().indexOf("webkit") && !H(Xf)
      , HB = GB && H(Bg)
      , IB = H("Macintosh")
      , JB = H("Windows")
      , KB = H(Cf)
      , LB = BB()
      , MB = H(bq)
      , NB = function() {
        var a = GA;
        if (FB)
            return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (DB)
            return /Edge\/([\d\.]+)/.exec(a);
        if (I)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (GB)
            return /WebKit\/(\S+)/.exec(a)
    }
      , OB = function() {
        var a = E.document;
        return a ? a.documentMode : void 0
    }
      , PB = function() {
        if (CB && E.opera) {
            var a;
            var b = E.opera.version;
            try {
                a = b()
            } catch (c) {
                a = b
            }
            return a
        }
        a = k;
        (b = NB()) && (a = b ? b[1] : k);
        return I && (b = OB(),
        b > parseFloat(a)) ? String(b) : a
    }()
      , QB = {}
      , J = function(a) {
        return QB[a] || (QB[a] = 0 <= Xz(PB, a))
    }
      , RB = E.document
      , SB = RB && I ? OB() || (RB.compatMode == Lf ? parseInt(PB, 10) : 5) : void 0;
    var TB = function(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return mz(a) && a.match(/\S+/g) || []
    }
      , UB = function(a, b) {
        return a.classList ? a.classList.contains(b) : jA(TB(a), b)
    }
      , K = function(a, b) {
        a.classList ? a.classList.add(b) : UB(a, b) || (a.className += 0 < a.className.length ? l + b : b)
    }
      , VB = function(a, b) {
        if (a.classList)
            cA(b, function(b) {
                K(a, b)
            });
        else {
            var c = {};
            cA(TB(a), function(a) {
                c[a] = !0
            });
            cA(b, function(a) {
                c[a] = !0
            });
            a.className = k;
            for (var d in c)
                a.className += 0 < a.className.length ? l + d : d
        }
    }
      , L = function(a, b) {
        a.classList ? a.classList.remove(b) : UB(a, b) && (a.className = dA(TB(a), function(a) {
            return a != b
        }).join(l))
    }
      , WB = function(a, b) {
        a.classList ? cA(b, function(b) {
            L(a, b)
        }) : a.className = dA(TB(a), function(a) {
            return !jA(b, a)
        }).join(l)
    }
      , XB = function(a, b, c) {
        c ? K(a, b) : L(a, b)
    };
    var M = function(a, b) {
        this.x = dz(a) ? a : 0;
        this.y = dz(b) ? b : 0
    };
    M.prototype.clone = function() {
        return new M(this.x,this.y)
    }
    ;
    var YB = function(a, b) {
        return new M(a.x - b.x,a.y - b.y)
    };
    M.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    M.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    M.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    var ZB = function(a, b) {
        this.width = a;
        this.height = b
    }
      , $B = function(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
    ZB.prototype.clone = function() {
        return new ZB(this.width,this.height)
    }
    ;
    ZB.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    ZB.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    ZB.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    var aC = !I || 9 <= SB
      , bC = !FB && !I || I && 9 <= SB || FB && J("1.9.1")
      , cC = I && !J(ce)
      , dC = I || CB || GB
      , eC = I && !(9 <= SB);
    var fC = function(a, b) {
        a.innerHTML = cB(b)
    };
    var iC = function(a) {
        return a ? new gC(hC(a)) : yz || (yz = new gC)
    }
      , N = function(a) {
        return mz(a) ? document.getElementById(a) : a
    }
      , kC = function(a, b, c) {
        return jC(document, a, b, c)
    }
      , lC = function(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll(dd + a) : jC(document, Sb, a, b)
    }
      , O = function(a, b) {
        var c = b || document
          , d = null;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector(dd + a) : d = jC(document, Sb, a, b)[0];
        return d || null
    }
      , jC = function(a, b, c, d) {
        a = d || a;
        b = b && b != Sb ? b.toUpperCase() : k;
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? dd + c : k));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++)
                    b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || Sb);
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++)
                b = g.className,
                typeof b.split == um && jA(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }
      , nC = function(a, b) {
        rA(b, function(b, d) {
            d == dw ? a.style.cssText = b : d == bk ? a.className = b : d == qm ? a.htmlFor = b : mC.hasOwnProperty(d) ? a.setAttribute(mC[d], b) : 0 == d.lastIndexOf(Bi, 0) || 0 == d.lastIndexOf(Fk, 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
      , mC = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: Cp,
        maxlength: "maxLength",
        role: Iu,
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: sy
    }
      , oC = function(a) {
        a = a.document;
        a = a.compatMode == Lf ? a.documentElement : a.body;
        return new ZB(a.clientWidth,a.clientHeight)
    }
      , qC = function(a) {
        var b = pC(a);
        a = a.parentWindow || a.defaultView;
        return I && J(Id) && a.pageYOffset != b.scrollTop ? new M(b.scrollLeft,b.scrollTop) : new M(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
      , pC = function(a) {
        return a.scrollingElement ? a.scrollingElement : GB || a.compatMode != Lf ? a.body || a.documentElement : a.documentElement
    }
      , rC = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
      , P = function(a, b, c) {
        return sC(document, arguments)
    }
      , sC = function(a, b) {
        var c = b[0]
          , d = b[1];
        if (!aC && d && (d.name || d.type)) {
            c = [ke, c];
            d.name && c.push(ya, Oz(d.name), Ca);
            if (d.type) {
                c.push(Aa, Oz(d.type), Ca);
                var e = {};
                AA(e, d);
                delete e.type;
                d = e
            }
            c.push(of);
            c = c.join(k)
        }
        c = a.createElement(c);
        d && (mz(d) ? c.className = d : kz(d) ? c.className = d.join(l) : nC(c, d));
        2 < b.length && tC(a, c, b, 2);
        return c
    }
      , tC = function(a, b, c, d) {
        function e(c) {
            c && b.appendChild(mz(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !lz(f) || pz(f) && 0 < f.nodeType ? e(f) : cA(uC(f) ? nA(f) : f, e)
        }
    }
      , vC = function(a) {
        return document.createTextNode(String(a))
    }
      , wC = function(a, b) {
        var c = a.createElement(q);
        I ? (c.innerHTML = Me + b,
        c.removeChild(c.firstChild)) : c.innerHTML = b;
        if (1 == c.childNodes.length)
            c = c.removeChild(c.firstChild);
        else {
            for (var d = a.createDocumentFragment(); c.firstChild; )
                d.appendChild(c.firstChild);
            c = d
        }
        return c
    }
      , xC = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case zf:
        case Af:
        case Ef:
        case Gf:
        case Jf:
        case Kf:
        case Wf:
        case dg:
        case ig:
        case mg:
        case ng:
        case lg:
        case og:
        case qg:
        case sg:
        case Hg:
        case Ig:
        case vg:
        case Lg:
        case Qg:
        case Wg:
        case Yg:
        case $g:
        case sh:
        case Ch:
            return !1
        }
        return !0
    }
      , yC = function(a, b) {
        tC(hC(a), a, arguments, 1)
    }
      , zC = function(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
      , AC = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
      , BC = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
      , CC = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
      , DC = function(a) {
        return bC && void 0 != a.children ? a.children : dA(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }
      , FC = function(a) {
        return dz(a.firstElementChild) ? a.firstElementChild : EC(a.firstChild, !0)
    }
      , GC = function(a) {
        return dz(a.nextElementSibling) ? a.nextElementSibling : EC(a.nextSibling, !0)
    }
      , EC = function(a, b) {
        for (; a && 1 != a.nodeType; )
            a = b ? a.nextSibling : a.previousSibling;
        return a
    }
      , HC = function(a) {
        return pz(a) && 1 == a.nodeType
    }
      , IC = function(a) {
        var b;
        if (dC && !(I && J(ce) && !J(Id) && E.SVGElement && a instanceof E.SVGElement) && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return HC(b) ? b : null
    }
      , JC = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
      , MC = function(a, b) {
        if (a == b)
            return 0;
        if (a.compareDocumentPosition)
            return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (I && !(9 <= SB)) {
            if (9 == a.nodeType)
                return -1;
            if (9 == b.nodeType)
                return 1
        }
        if (Av in a || a.parentNode && Av in a.parentNode) {
            var c = 1 == a.nodeType
              , d = 1 == b.nodeType;
            if (c && d)
                return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode
              , f = b.parentNode;
            return e == f ? KC(a, b) : !c && JC(e, b) ? -1 * LC(a, b) : !d && JC(f, a) ? LC(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = hC(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        d = d.createRange();
        d.selectNode(b);
        d.collapse(!0);
        return c.compareBoundaryPoints(E.Range.START_TO_END, d)
    }
      , LC = function(a, b) {
        var c = a.parentNode;
        if (c == b)
            return -1;
        for (var d = b; d.parentNode != c; )
            d = d.parentNode;
        return KC(d, a)
    }
      , KC = function(a, b) {
        for (var c = b; c = c.previousSibling; )
            if (c == a)
                return -1;
        return 1
    }
      , NC = function(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var d = []
          , e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g; )
                f.unshift(g),
                g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            for (var g = d[0][b], m = 1; m < c; m++)
                if (g != d[m][b])
                    return f;
            f = g
        }
        return f
    }
      , hC = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
      , OC = function(a) {
        return a.contentDocument || a.contentWindow.document
    }
      , PC = function(a, b) {
        if (Jw in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            zC(a);
            var c = hC(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }
      , RC = function(a, b) {
        var c = [];
        return QC(a, b, c, !0) ? c[0] : void 0
    }
      , QC = function(a, b, c, d) {
        if (null != a)
            for (a = a.firstChild; a; ) {
                if (b(a) && (c.push(a),
                d) || QC(a, b, c, d))
                    return !0;
                a = a.nextSibling
            }
        return !1
    }
      , SC = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , TC = {
        IMG: l,
        BR: ba
    }
      , UC = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1,
        a.removeAttribute(ww))
    }
      , VC = function(a) {
        a = a.getAttributeNode(xw);
        return null != a && a.specified
    }
      , WC = function(a) {
        a = a.tabIndex;
        return nz(a) && 0 <= a && 32768 > a
    }
      , YC = function(a) {
        if (cC && nq in a)
            a = Bz(a.innerText);
        else {
            var b = [];
            XC(a, b, !0);
            a = b.join(k)
        }
        a = a.replace(/ \xAD /g, l).replace(/\xAD/g, k);
        a = a.replace(/\u200B/g, k);
        cC || (a = a.replace(/ +/g, l));
        a != l && (a = a.replace(/^\s*/, k));
        return a
    }
      , ZC = function(a) {
        var b = [];
        XC(a, b, !1);
        return b.join(k)
    }
      , XC = function(a, b, c) {
        if (!(a.nodeName in SC))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, k)) : b.push(a.nodeValue);
            else if (a.nodeName in TC)
                b.push(TC[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    XC(a, b, c),
                    a = a.nextSibling
    }
      , uC = function(a) {
        if (a && typeof a.length == xs) {
            if (pz(a))
                return typeof a.item == um || typeof a.item == cw;
            if (oz(a))
                return typeof a.item == um
        }
        return !1
    }
      , aD = function(a) {
        return $C(a, function(a) {
            return mz(a.className) && jA(a.className.split(/\s+/), gn)
        }, void 0)
    }
      , $C = function(a, b, c) {
        for (var d = null == c, e = 0; a && (d || e <= c); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            e++
        }
        return null
    }
      , gC = function(a) {
        this.b = a || E.document || document
    };
    gC.prototype.l = function(a) {
        return mz(a) ? this.b.getElementById(a) : a
    }
    ;
    gC.prototype.a = function(a, b, c) {
        return sC(this.b, arguments)
    }
    ;
    var bD = function(a, b) {
        return a.b.createTextNode(String(b))
    }
      , cD = function(a) {
        return a.b.compatMode == Lf
    }
      , dD = function(a) {
        a = a.b;
        return a.parentWindow || a.defaultView
    }
      , eD = function(a) {
        return qC(a.b)
    };
    C = gC.prototype;
    C.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    C.ng = yC;
    C.Qd = zC;
    C.pg = CC;
    C.og = DC;
    C.kg = FC;
    C.Ni = HC;
    C.contains = JC;
    C.ve = PC;
    C.cf = YC;
    var fD = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    C = fD.prototype;
    C.clone = function() {
        return new fD(this.top,this.right,this.bottom,this.left)
    }
    ;
    C.contains = function(a) {
        return this && a ? a instanceof fD ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    C.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    C.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    C.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    var gD = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    C = gD.prototype;
    C.clone = function() {
        return new gD(this.left,this.top,this.width,this.height)
    }
    ;
    C.contains = function(a) {
        return a instanceof gD ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    }
    ;
    C.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    C.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    C.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    var hD = function(a) {
        hD[l](a);
        return a
    };
    hD[l] = gz;
    var iD = function(a, b) {
        try {
            return hD(a[b]),
            !0
        } catch (c) {}
        return !1
    };
    var Q = function(a, b, c) {
        if (mz(b))
            (b = jD(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = jD(c, d);
                f && (c.style[f] = e)
            }
    }
      , kD = {}
      , jD = function(a, b) {
        var c = kD[b];
        if (!c) {
            var d = Yz(b)
              , c = d;
            void 0 === a.style[d] && (d = (GB ? Dh : FB ? Fg : I ? ds : CB ? Kg : null) + Zz(d),
            void 0 !== a.style[d] && (c = d));
            kD[b] = c
        }
        return c
    }
      , lD = function(a, b) {
        var c = hC(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || k : k
    }
      , mD = function(a, b) {
        return lD(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
      , oD = function(a, b, c) {
        var d;
        b instanceof M ? (d = b.x,
        b = b.y) : (d = b,
        b = c);
        a.style.left = nD(d, !1);
        a.style.top = nD(b, !1)
    }
      , pD = function(a) {
        a = a ? hC(a) : document;
        return !I || 9 <= SB || cD(iC(a)) ? a.documentElement : a.body
    }
      , qD = function(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        I && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
      , rD = function(a) {
        if (I && !(8 <= SB))
            return a.offsetParent;
        var b = hC(a)
          , c = mD(a, cu)
          , d = c == fm || c == Zh;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
            c = mD(a, cu),
            d = d && c == Yv && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || c == fm || c == Zh || c == wu))
                return a;
        return null
    }
      , tD = function(a) {
        for (var b = new fD(0,Infinity,Infinity,0), c = iC(a), d = c.b.body, e = c.b.documentElement, f = pC(c.b); a = rD(a); )
            if (!(I && 0 == a.clientWidth || GB && 0 == a.clientHeight && a == d) && a != d && a != e && mD(a, Ns) != ky) {
                var g = sD(a)
                  , m = new M(a.clientLeft,a.clientTop);
                g.x += m.x;
                g.y += m.y;
                b.top = Math.max(b.top, g.y);
                b.right = Math.min(b.right, g.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                b.left = Math.max(b.left, g.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = oC(dD(c) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }
      , sD = function(a) {
        var b = hC(a)
          , c = new M(0,0)
          , d = pD(b);
        if (a == d)
            return c;
        a = qD(a);
        b = eD(iC(b));
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
      , vD = function(a, b) {
        var c = uD(a)
          , d = uD(b);
        return new M(c.x - d.x,c.y - d.y)
    }
      , wD = function(a) {
        a = qD(a);
        return new M(a.left,a.top)
    }
      , uD = function(a) {
        if (1 == a.nodeType)
            return wD(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new M(a.clientX,a.clientY)
    }
      , xD = function(a, b, c) {
        var d = sD(a);
        b instanceof M && (c = b.y,
        b = b.x);
        oD(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
    }
      , yD = function(a, b, c) {
        if (b instanceof ZB)
            c = b.height,
            b = b.width;
        else if (void 0 == c)
            throw Error("missing height argument");
        a.style.width = nD(b, !0);
        a.style.height = nD(c, !0)
    }
      , nD = function(a, b) {
        typeof a == xs && (a = (b ? Math.round(a) : a) + mu);
        return a
    }
      , AD = function(a) {
        var b = zD;
        if (mD(a, kl) != us)
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = Fp;
        c.position = Zh;
        c.display = mq;
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
      , zD = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = GB && !b && !c;
        return dz(b) && !d || !a.getBoundingClientRect ? new ZB(b,c) : (a = qD(a),
        new ZB(a.right - a.left,a.bottom - a.top))
    }
      , BD = function(a) {
        var b = sD(a);
        a = AD(a);
        return new gD(b.x,b.y,a.width,a.height)
    }
      , CD = function(a, b) {
        var c = a.style;
        Gs in c ? c.opacity = b : Gg in c ? c.MozOpacity = b : dm in c && (c.filter = b === k ? k : ji + 100 * b + Pb)
    }
      , R = function(a, b) {
        a.style.display = b ? k : us
    }
      , DD = function(a) {
        return a.style.display != us
    }
      , FD = function(a) {
        var b = iC(void 0)
          , c = null
          , d = b.b;
        I && d.createStyleSheet ? (c = d.createStyleSheet(),
        ED(c, a)) : (d = jC(b.b, hg, void 0, void 0)[0],
        d || (c = jC(b.b, Ff, void 0, void 0)[0],
        d = b.a(hg),
        c.parentNode.insertBefore(d, c)),
        c = b.a($g),
        ED(c, a),
        b.appendChild(d, c));
        return c
    }
      , ED = function(a, b) {
        I && dz(a.cssText) ? a.cssText = b : a.innerHTML = b
    }
      , GD = function(a) {
        return Mu == mD(a, el)
    }
      , HD = FB ? "MozUserSelect" : GB || DB ? "WebkitUserSelect" : null
      , ID = function(a, b, c) {
        c = c ? null : a.getElementsByTagName(Sb);
        if (HD) {
            if (b = b ? us : k,
            a.style && (a.style[HD] = b),
            c) {
                a = 0;
                for (var d; d = c[a]; a++)
                    d.style && (d.style[HD] = b)
            }
        } else if (I || CB)
            if (b = b ? Ds : k,
            a.setAttribute(by, b),
            c)
                for (a = 0; d = c[a]; a++)
                    d.setAttribute(by, b)
    }
      , JD = function(a, b, c) {
        a = a.style;
        FB ? a.MozBoxSizing = c : GB ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + mu;
        a.height = Math.max(b.height, 0) + mu
    }
      , KD = function(a, b, c, d) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var e = a.style[c]
          , f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return b
    }
      , LD = function(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        return c ? KD(a, c, or, Wt) : 0
    }
      , MD = function(a, b) {
        if (I) {
            var c = LD(a, b + tg)
              , d = LD(a, b + Vg)
              , e = LD(a, b + wh)
              , f = LD(a, b + If);
            return new fD(e,d,f,c)
        }
        c = lD(a, b + tg);
        d = lD(a, b + Vg);
        e = lD(a, b + wh);
        f = lD(a, b + If);
        return new fD(parseFloat(e),parseFloat(d),parseFloat(f),parseFloat(c))
    }
      , ND = function(a) {
        return MD(a, Ts)
    }
      , OD = {
        thin: 2,
        medium: 4,
        thick: 6
    }
      , PD = function(a, b) {
        if ((a.currentStyle ? a.currentStyle[b + lh] : null) == us)
            return 0;
        var c = a.currentStyle ? a.currentStyle[b + Eh] : null;
        return c in OD ? OD[c] : KD(a, c, or, Wt)
    }
      , QD = function(a) {
        if (I && !(9 <= SB)) {
            var b = PD(a, Cj)
              , c = PD(a, Ej)
              , d = PD(a, Gj);
            a = PD(a, Aj);
            return new fD(d,c,a,b)
        }
        b = lD(a, Dj);
        c = lD(a, Fj);
        d = lD(a, Hj);
        a = lD(a, Bj);
        return new fD(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
    };
    var RD = az();
    RD.prototype.a = function(a) {
        var b = document.body;
        switch (a.mo) {
        case qv:
            K(b, Al);
            L(b, zl);
            L(b, yl);
            break;
        case sr:
            K(b, yl);
            L(b, Al);
            L(b, zl);
            break;
        default:
            K(b, zl),
            L(b, Al),
            L(b, yl)
        }
        if (b = document.getElementById(sk)) {
            var c = 0
              , d = document.getElementById(yy)
              , e = MD(d, Gr).top;
            a = a.es.h;
            var f = N(po);
            null != f && (a += AD(f).height);
            0 == e ? c += a : a != -e && Q(d, Lr, -a + mu);
            (d = document.getElementById(Vm)) && (c += AD(d).height);
            oD(b, 0, c)
        }
    }
    ;
    var SD = function() {
        this.o = null;
        this.A = this.D = this.j = this.g = this.I = this.Z = this.J = this.W = this.X = this.M = k;
        this.c = this.K = this.a = this.F = this.sa = this.R = this.N = this.Ma = this.T = null;
        this.C = 0;
        this.B = !1;
        this.H = -1;
        this.b = !1
    };
    var TD = function() {
        this.Ma = this.Ma;
        this.ib = this.ib
    };
    TD.prototype.Ma = !1;
    TD.prototype.xa = function() {
        this.Ma || (this.Ma = !0,
        this.L())
    }
    ;
    var VD = function(a, b) {
        var c = vz(UD, b);
        a.Ma ? c.call(void 0) : (a.ib || (a.ib = []),
        a.ib.push(dz(void 0) ? F(c, void 0) : c))
    };
    TD.prototype.L = function() {
        if (this.ib)
            for (; this.ib.length; )
                this.ib.shift()()
    }
    ;
    var UD = function(a) {
        a && typeof a.xa == um && a.xa()
    };
    var S = function(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.g = !1;
        this.Zg = !0
    };
    S.prototype.stopPropagation = function() {
        this.g = !0
    }
    ;
    S.prototype.preventDefault = function() {
        this.Zg = !1
    }
    ;
    var WD = !I || 9 <= SB
      , XD = !I || 9 <= SB
      , YD = I && !J(ce);
    !GB || J(Yd);
    FB && J("1.9b") || I && J(ae) || CB && J("9.5") || GB && J(Yd);
    FB && !J(ae) || I && J(ce);
    var ZD = I ? jm : "DOMFocusIn"
      , $D = I ? km : "DOMFocusOut";
    var aE = function(a, b) {
        S.call(this, a ? a.type : k);
        this.c = this.a = this.target = null;
        this.keyCode = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.o = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.b = null;
        if (a) {
            var c = this.type = a.type
              , d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            var e = a.relatedTarget;
            e ? FB && (iD(e, ss) || (e = null)) : c == as ? e = a.fromElement : c == $r && (e = a.toElement);
            this.c = e;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
            this.screenX = a.screenX || 0,
            this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
            this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
            this.screenX = d.screenX || 0,
            this.screenY = d.screenY || 0);
            this.keyCode = a.keyCode || 0;
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.o = IB ? a.metaKey : a.ctrlKey;
            this.b = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    G(aE, S);
    var bE = [1, 4, 2]
      , cE = function(a) {
        return (WD ? 0 == a.b.button : a.type == w ? !0 : !!(a.b.button & bE[0])) && !(GB && IB && a.ctrlKey)
    };
    aE.prototype.stopPropagation = function() {
        aE.v.stopPropagation.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    }
    ;
    aE.prototype.preventDefault = function() {
        aE.v.preventDefault.call(this);
        var a = this.b;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        YD)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var dE = "closure_listenable_" + (1E6 * Math.random() | 0)
      , eE = function(a) {
        return !(!a || !a[dE])
    }
      , fE = 0;
    var gE = function(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.Fd = !!d;
        this.ie = e;
        this.key = ++fE;
        this.Pc = this.Ed = !1
    }
      , hE = function(a) {
        a.Pc = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.ie = null
    };
    var iE = function(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
      , kE = function(a, b, c, d, e, f) {
        var g = b.toString();
        b = a.a[g];
        b || (b = a.a[g] = [],
        a.b++);
        var m = jE(b, c, e, f);
        -1 < m ? (a = b[m],
        d || (a.Ed = !1)) : (a = new gE(c,a.src,g,!!e,f),
        a.Ed = d,
        b.push(a));
        return a
    }
      , lE = function(a, b) {
        var c = b.type;
        if (!(c in a.a))
            return !1;
        var d = lA(a.a[c], b);
        d && (hE(b),
        0 == a.a[c].length && (delete a.a[c],
        a.b--));
        return d
    }
      , mE = function(a, b) {
        var c = b && b.toString(), d = 0, e;
        for (e in a.a)
            if (!c || e == c) {
                for (var f = a.a[e], g = 0; g < f.length; g++)
                    ++d,
                    hE(f[g]);
                delete a.a[e];
                a.b--
            }
        return d
    }
      , nE = function(a, b, c, d, e) {
        a = a.a[b.toString()];
        b = -1;
        a && (b = jE(a, c, d, e));
        return -1 < b ? a[b] : null
    }
      , jE = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Pc && f.listener == b && f.Fd == !!c && f.ie == d)
                return e
        }
        return -1
    };
    var oE = "closure_lm_" + (1E6 * Math.random() | 0)
      , pE = {}
      , qE = 0
      , T = function(a, b, c, d, e) {
        if (kz(b)) {
            for (var f = 0; f < b.length; f++)
                T(a, b[f], c, d, e);
            return null
        }
        c = rE(c);
        return eE(a) ? kE(a.bb, String(b), c, !1, d, e) : sE(a, b, c, !1, d, e)
    }
      , sE = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = !!e
          , m = tE(a);
        m || (a[oE] = m = new iE(a));
        c = kE(m, b, c, d, e, f);
        if (c.a)
            return c;
        d = uE();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            a.addEventListener(b.toString(), d, g);
        else if (a.attachEvent)
            a.attachEvent(vE(b.toString()), d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        qE++;
        return c
    }
      , uE = function() {
        var a = wE
          , b = XD ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
      , xE = function(a, b, c, d, e) {
        if (kz(b))
            for (var f = 0; f < b.length; f++)
                xE(a, b[f], c, d, e);
        else
            c = rE(c),
            eE(a) ? kE(a.bb, String(b), c, !0, d, e) : sE(a, b, c, !0, d, e)
    }
      , yE = function(a, b, c, d, e) {
        if (kz(b))
            for (var f = 0; f < b.length; f++)
                yE(a, b[f], c, d, e);
        else
            c = rE(c),
            eE(a) ? (a = a.bb,
            b = String(b).toString(),
            b in a.a && (f = a.a[b],
            c = jE(f, c, d, e),
            -1 < c && (hE(f[c]),
            Array.prototype.splice.call(f, c, 1),
            0 == f.length && (delete a.a[b],
            a.b--)))) : a && (a = tE(a)) && (c = nE(a, b, c, !!d, e)) && zE(c)
    }
      , zE = function(a) {
        if (nz(a) || !a || a.Pc)
            return !1;
        var b = a.src;
        if (eE(b))
            return lE(b.bb, a);
        var c = a.type
          , d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.Fd) : b.detachEvent && b.detachEvent(vE(c), d);
        qE--;
        (c = tE(b)) ? (lE(c, a),
        0 == c.b && (c.src = null,
        b[oE] = null)) : hE(a);
        return !0
    }
      , AE = function(a, b) {
        if (!a)
            return 0;
        if (eE(a))
            return a.bb ? mE(a.bb, b) : 0;
        var c = tE(a);
        if (!c)
            return 0;
        var d = 0, e = b && b.toString(), f;
        for (f in c.a)
            if (!e || f == e)
                for (var g = c.a[f].concat(), m = 0; m < g.length; ++m)
                    zE(g[m]) && ++d;
        return d
    }
      , vE = function(a) {
        return a in pE ? pE[a] : pE[a] = Ds + a
    }
      , CE = function(a, b, c, d) {
        var e = !0;
        if (a = tE(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.Fd == c && !f.Pc && (f = BE(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
      , BE = function(a, b) {
        var c = a.listener
          , d = a.ie || a.src;
        a.Ed && zE(a);
        return c.call(d, b)
    }
      , wE = function(a, b) {
        if (a.Pc)
            return !0;
        if (!XD) {
            var c = b || fz(vy)
              , d = new aE(c,this)
              , e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == c.keyCode)
                        try {
                            c.keyCode = -1;
                            break a
                        } catch (n) {
                            f = !0
                        }
                    if (f || void 0 == c.returnValue)
                        c.returnValue = !0
                }
                c = [];
                for (f = d.a; f; f = f.parentNode)
                    c.push(f);
                for (var f = a.type, g = c.length - 1; !d.g && 0 <= g; g--) {
                    d.a = c[g];
                    var m = CE(c[g], f, !0, d)
                      , e = e && m
                }
                for (g = 0; !d.g && g < c.length; g++)
                    d.a = c[g],
                    m = CE(c[g], f, !1, d),
                    e = e && m
            }
            return e
        }
        return BE(a, new aE(b,this))
    }
      , tE = function(a) {
        a = a[oE];
        return a instanceof iE ? a : null
    }
      , DE = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
      , rE = function(a) {
        if (oz(a))
            return a;
        a[DE] || (a[DE] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[DE]
    };
    var EE = function(a) {
        TD.call(this);
        this.H = a;
        this.o = {}
    };
    G(EE, TD);
    var FE = [];
    EE.prototype.a = function(a, b, c, d) {
        kz(b) || (b && (FE[0] = b.toString()),
        b = FE);
        for (var e = 0; e < b.length; e++) {
            var f = T(a, b[e], c || this.handleEvent, d || !1, this.H || this);
            if (!f)
                break;
            this.o[f.key] = f
        }
        return this
    }
    ;
    EE.prototype.b = function(a, b, c, d, e) {
        if (kz(b))
            for (var f = 0; f < b.length; f++)
                this.b(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            e = e || this.H || this,
            c = rE(c),
            d = !!d,
            b = eE(a) ? nE(a.bb, String(b), c, d, e) : a ? (a = tE(a)) ? nE(a, b, c, d, e) : null : null,
            b && (zE(b),
            delete this.o[b.key]);
        return this
    }
    ;
    var GE = function(a) {
        rA(a.o, function(a, c) {
            this.o.hasOwnProperty(c) && zE(a)
        }, a);
        a.o = {}
    };
    EE.prototype.L = function() {
        EE.v.L.call(this);
        GE(this)
    }
    ;
    EE.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    var U = function() {
        TD.call(this);
        this.bb = new iE(this);
        this.Wi = this;
        this.De = null
    };
    G(U, TD);
    U.prototype[dE] = !0;
    C = U.prototype;
    C.Ld = z("De");
    C.Rc = bz("De");
    C.addEventListener = function(a, b, c, d) {
        T(this, a, b, c, d)
    }
    ;
    C.removeEventListener = function(a, b, c, d) {
        yE(this, a, b, c, d)
    }
    ;
    C.dispatchEvent = function(a) {
        var b, c = this.Ld();
        if (c) {
            b = [];
            for (var d = 1; c; c = c.Ld())
                b.push(c),
                ++d
        }
        c = this.Wi;
        d = a.type || a;
        if (mz(a))
            a = new S(a,c);
        else if (a instanceof S)
            a.target = a.target || c;
        else {
            var e = a;
            a = new S(d,c);
            AA(a, e)
        }
        var e = !0, f;
        if (b)
            for (var g = b.length - 1; !a.g && 0 <= g; g--)
                f = a.a = b[g],
                e = HE(f, d, !0, a) && e;
        a.g || (f = a.a = c,
        e = HE(f, d, !0, a) && e,
        a.g || (e = HE(f, d, !1, a) && e));
        if (b)
            for (g = 0; !a.g && g < b.length; g++)
                f = a.a = b[g],
                e = HE(f, d, !1, a) && e;
        return e
    }
    ;
    C.L = function() {
        U.v.L.call(this);
        this.bb && mE(this.bb, void 0);
        this.De = null
    }
    ;
    var HE = function(a, b, c, d) {
        b = a.bb.a[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Pc && g.Fd == c) {
                var m = g.listener
                  , n = g.ie || g.src;
                g.Ed && lE(a.bb, g);
                e = !1 !== m.call(n, d) && e
            }
        }
        return e && 0 != d.Zg
    };
    var IE = function() {
        return !(H(bq) || H(Cf) && !H(Bg) || H(fh)) && (H(dq) || H(cq) || H(Cf) || H(kg))
    };
    var JE = function(a, b) {
        for (var c = [a], d = b.length - 1; 0 <= d; --d)
            c.push(typeof b[d], b[d]);
        return c.join(ca)
    };
    var KE = function(a, b) {
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null
    }
      , LE = function(a) {
        var b;
        0 < a.b ? (a.b--,
        b = a.a,
        a.a = b.next,
        b.next = null) : b = a.c();
        return b
    }
      , ME = function(a, b) {
        a.g(b);
        100 > a.b && (a.b++,
        b.next = a.a,
        a.a = b)
    };
    var NE = function(a) {
        E.setTimeout(function() {
            throw a;
        }, 0)
    }, OE, PE = function() {
        var a = E.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !H(Tg) && (a = function() {
            var a = document.createElement(lg);
            a.style.display = us;
            a.src = k;
            document.documentElement.appendChild(a);
            var b = a.contentWindow
              , a = b.document;
            a.open();
            a.write(k);
            a.close();
            var c = Sj + Math.random()
              , d = b.location.protocol == bm ? Sb : b.location.protocol + jd + b.location.host
              , a = F(function(a) {
                if ((d == Sb || a.origin == d) && a.data == c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener(Sr, a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !H(xh) && !H(wg)) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (dz(c.next)) {
                    c = c.next;
                    var a = c.Yf;
                    c.Yf = null;
                    a()
                }
            }
            ;
            return function(a) {
                d.next = {
                    Yf: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && Fs in document.createElement(Wg) ? function(a) {
            var b = document.createElement(Wg);
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            }
            ;
            document.documentElement.appendChild(b)
        }
        : function(a) {
            E.setTimeout(a, 0)
        }
    };
    var RE = new KE(function() {
        return new QE
    }
    ,function(a) {
        a.reset()
    }
    )
      , TE = function() {
        var a = SE
          , b = null;
        a.a && (b = a.a,
        a.a = a.a.next,
        a.a || (a.b = null),
        b.next = null);
        return b
    }
      , QE = function() {
        this.next = this.b = this.a = null
    };
    QE.prototype.reset = function() {
        this.next = this.b = this.a = null
    }
    ;
    var XE = function(a, b) {
        UE || VE();
        WE || (UE(),
        WE = !0);
        var c = SE
          , d = LE(RE);
        d.a = a;
        d.b = b;
        d.next = null;
        c.b ? c.b.next = d : c.a = d;
        c.b = d
    }, UE, VE = function() {
        if (E.Promise && E.Promise.resolve) {
            var a = E.Promise.resolve(void 0);
            UE = function() {
                a.then(YE)
            }
        } else
            UE = function() {
                var a = YE;
                !oz(E.setImmediate) || E.Window && E.Window.prototype && !H(Xf) && E.Window.prototype.setImmediate == E.setImmediate ? (OE || (OE = PE()),
                OE(a)) : E.setImmediate(a)
            }
    }, WE = !1, SE = new function() {
        this.b = this.a = null
    }
    , YE = function() {
        for (var a = null; a = TE(); ) {
            try {
                a.a.call(a.b)
            } catch (b) {
                NE(b)
            }
            ME(RE, a)
        }
        WE = !1
    };
    var ZE = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }
      , $E = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var bF = function(a, b) {
        this.a = 0;
        this.B = void 0;
        this.g = this.b = this.c = null;
        this.j = this.o = !1;
        if (a != gz)
            try {
                var c = this;
                a.call(b, function(a) {
                    aF(c, 2, a)
                }, function(a) {
                    aF(c, 3, a)
                })
            } catch (d) {
                aF(this, 3, d)
            }
    }
      , cF = function() {
        this.next = this.c = this.b = this.g = this.a = null;
        this.j = !1
    };
    cF.prototype.reset = function() {
        this.c = this.b = this.g = this.a = null;
        this.j = !1
    }
    ;
    var dF = new KE(function() {
        return new cF
    }
    ,function(a) {
        a.reset()
    }
    )
      , eF = function(a, b, c) {
        var d = LE(dF);
        d.g = a;
        d.b = b;
        d.c = c;
        return d
    };
    bF.prototype.then = function(a, b, c) {
        return fF(this, oz(a) ? a : null, oz(b) ? b : null, c)
    }
    ;
    ZE(bF);
    bF.prototype.cancel = function(a) {
        0 == this.a && XE(function() {
            var b = new gF(a);
            hF(this, b)
        }, this)
    }
    ;
    var hF = function(a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, g = c.b; g && (g.j || (d++,
                    g.a == a && (e = g),
                    !(e && 1 < d))); g = g.next)
                        e || (f = g);
                    e && (0 == c.a && 1 == d ? hF(c, b) : (f ? (d = f,
                    d.next == c.g && (c.g = d),
                    d.next = d.next.next) : iF(c),
                    jF(c, e, 3, b)))
                }
                a.c = null
            } else
                aF(a, 3, b)
    }
      , lF = function(a, b) {
        a.b || 2 != a.a && 3 != a.a || kF(a);
        a.g ? a.g.next = b : a.b = b;
        a.g = b
    }
      , fF = function(a, b, c, d) {
        var e = eF(null, null, null);
        e.a = new bF(function(a, g) {
            e.g = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (p) {
                    g(p)
                }
            }
            : a;
            e.b = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !dz(e) && b instanceof gF ? g(b) : a(e)
                } catch (p) {
                    g(p)
                }
            }
            : g
        }
        );
        e.a.c = a;
        lF(a, e);
        return e.a
    };
    bF.prototype.D = function(a) {
        this.a = 0;
        aF(this, 2, a)
    }
    ;
    bF.prototype.A = function(a) {
        this.a = 0;
        aF(this, 3, a)
    }
    ;
    var aF = function(a, b, c) {
        if (0 == a.a) {
            a == c && (b = 3,
            c = new TypeError(Ug));
            a.a = 1;
            var d;
            a: {
                var e = c
                  , f = a.D
                  , g = a.A;
                if (e instanceof bF)
                    lF(e, eF(f || gz, g || null, a)),
                    d = !0;
                else if ($E(e))
                    e.then(f, g, a),
                    d = !0;
                else {
                    if (pz(e))
                        try {
                            var m = e.then;
                            if (oz(m)) {
                                mF(e, m, f, g, a);
                                d = !0;
                                break a
                            }
                        } catch (n) {
                            g.call(a, n);
                            d = !0;
                            break a
                        }
                    d = !1
                }
            }
            d || (a.B = c,
            a.a = b,
            a.c = null,
            kF(a),
            3 != b || c instanceof gF || nF(a, c))
        }
    }
      , mF = function(a, b, c, d, e) {
        var f = !1
          , g = function(a) {
            f || (f = !0,
            c.call(e, a))
        }
          , m = function(a) {
            f || (f = !0,
            d.call(e, a))
        };
        try {
            b.call(a, g, m)
        } catch (n) {
            m(n)
        }
    }
      , kF = function(a) {
        a.o || (a.o = !0,
        XE(a.w, a))
    }
      , iF = function(a) {
        var b = null;
        a.b && (b = a.b,
        a.b = b.next,
        b.next = null);
        a.b || (a.g = null);
        return b
    };
    bF.prototype.w = function() {
        for (var a = null; a = iF(this); )
            jF(this, a, this.a, this.B);
        this.o = !1
    }
    ;
    var jF = function(a, b, c, d) {
        if (3 == c && b.b && !b.j)
            for (; a && a.j; a = a.c)
                a.j = !1;
        if (b.a)
            b.a.c = null,
            oF(b, c, d);
        else
            try {
                b.j ? b.g.call(b.c) : oF(b, c, d)
            } catch (e) {
                pF.call(null, e)
            }
        ME(dF, b)
    }
      , oF = function(a, b, c) {
        2 == b ? a.g.call(a.c, c) : a.b && a.b.call(a.c, c)
    }
      , nF = function(a, b) {
        a.j = !0;
        XE(function() {
            a.j && pF.call(null, b)
        })
    }
      , pF = NE
      , gF = function(a) {
        xz.call(this, a)
    };
    G(gF, xz);
    gF.prototype.name = Uj;
    var qF = function(a, b) {
        U.call(this);
        this.g = a || 1;
        this.c = b || E;
        this.j = F(this.B, this);
        this.o = wz()
    };
    G(qF, U);
    qF.prototype.b = !1;
    qF.prototype.a = null;
    var tF = function(a, b) {
        a.g = b;
        a.a && a.b ? (rF(a),
        sF(a)) : a.a && rF(a)
    };
    qF.prototype.B = function() {
        if (this.b) {
            var a = wz() - this.o;
            0 < a && a < .8 * this.g ? this.a = this.c.setTimeout(this.j, this.g - a) : (this.a && (this.c.clearTimeout(this.a),
            this.a = null),
            this.dispatchEvent(Ow),
            this.b && (this.a = this.c.setTimeout(this.j, this.g),
            this.o = wz()))
        }
    }
    ;
    var sF = function(a) {
        a.b = !0;
        a.a || (a.a = a.c.setTimeout(a.j, a.g),
        a.o = wz())
    }
      , rF = function(a) {
        a.b = !1;
        a.a && (a.c.clearTimeout(a.a),
        a.a = null)
    };
    qF.prototype.L = function() {
        qF.v.L.call(this);
        rF(this);
        delete this.c
    }
    ;
    var uF = function(a, b, c) {
        if (oz(a))
            c && (a = F(a, c));
        else if (a && typeof a.handleEvent == um)
            a = F(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : E.setTimeout(a, b || 0)
    }
      , vF = function(a) {
        E.clearTimeout(a)
    };
    var wF = function(a, b) {
        S.call(this, is);
        this.H = a;
        this.D = b
    };
    G(wF, S);
    var CF = function(a, b, c, d) {
        U.call(this);
        if (a && !b)
            throw Error("Can't use invisible history without providing a blank page.");
        var e;
        if (c)
            e = c;
        else {
            e = Jp + xF;
            var f = kB(oq, {
                type: Dw,
                name: e,
                id: e,
                style: OA(ml)
            });
            document.write(cB(f));
            e = N(e)
        }
        this.B = e;
        this.b = c ? rC(hC(c)) : window;
        var g;
        mz(b) ? g = $A(b) : g = b;
        this.H = g;
        I && !b && (b = window.location.protocol == Sp ? OA(Up) : OA(wq),
        this.H = b = $A(NA(b)));
        this.c = new qF(150);
        VD(this, this.c);
        this.g = !a;
        this.a = new EE(this);
        if (a || yF) {
            var m;
            if (d)
                m = d;
            else {
                a = Ip + xF;
                d = {
                    id: a,
                    style: OA(ml),
                    sandbox: void 0
                };
                b = {};
                b.src = this.H || null;
                b.srcdoc = null;
                c = {
                    sandbox: k
                };
                g = {};
                for (m in b)
                    g[m] = b[m];
                for (m in c)
                    g[m] = c[m];
                for (m in d) {
                    e = m.toLowerCase();
                    if (e in b)
                        throw Error('Cannot override "' + e + '" attribute, got "' + m + '" with value "' + d[m] + Ca);
                    e in c && delete g[e];
                    g[m] = d[m]
                }
                m = jB(gq, g, void 0);
                document.write(cB(m));
                m = N(a)
            }
            this.D = m;
            this.M = !0
        }
        yF && (this.a.a(this.b, xr, this.Xi),
        this.K = this.A = !1);
        this.g ? zF(this, AF(this), !0) : BF(this, this.B.value);
        xF++
    };
    G(CF, U);
    CF.prototype.w = !1;
    CF.prototype.o = !1;
    CF.prototype.j = null;
    var DF = function(a, b) {
        var c = b || JE;
        return function() {
            var b = this || E
              , b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {})
              , e = c(sz(a), arguments);
            return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
        }
    }(function() {
        return I ? 8 <= SB : Es in E
    })
      , yF = I && !(8 <= SB);
    C = CF.prototype;
    C.Nc = null;
    C.L = function() {
        CF.v.L.call(this);
        this.a.xa();
        this.ba(!1)
    }
    ;
    C.ba = function(a) {
        if (a != this.w)
            if (yF && !this.A)
                this.K = a;
            else if (a)
                if (CB ? this.a.a(this.b.document, EF, this.F) : FB && this.a.a(this.b, at, this.aj),
                DF() && this.g)
                    this.a.a(this.b, xp, this.Zi),
                    this.w = !0,
                    this.dispatchEvent(new wF(AF(this),!1));
                else {
                    if (!I || IE() || this.A)
                        this.a.a(this.c, Ow, F(this.C, this, !0)),
                        this.w = !0,
                        yF || (this.j = AF(this),
                        this.dispatchEvent(new wF(AF(this),!1))),
                        sF(this.c)
                }
            else
                this.w = !1,
                GE(this.a),
                rF(this.c)
    }
    ;
    C.Xi = function() {
        this.A = !0;
        this.B.value && BF(this, this.B.value, !0);
        this.ba(this.K)
    }
    ;
    C.aj = function(a) {
        a.b.persisted && (this.ba(!1),
        this.ba(!0))
    }
    ;
    C.Zi = function() {
        var a = FF(this.b);
        a != this.j && GF(this, a, !0)
    }
    ;
    var AF = function(a) {
        return null != a.Nc ? a.Nc : a.g ? FF(a.b) : HF(a) || k
    }
      , FF = function(a) {
        a = a.location.href;
        var b = a.indexOf(Sa);
        return 0 > b ? k : a.substring(b + 1)
    }
      , IF = function(a, b, c) {
        AF(a) != b && (a.g ? (zF(a, b, c),
        DF() || I && !IE() && BF(a, b, c, void 0),
        a.w && a.C(!1)) : (BF(a, b, c),
        a.Nc = a.j = a.B.value = b,
        a.dispatchEvent(new wF(b,!1))))
    }
      , zF = function(a, b, c) {
        a = a.b.location;
        var d = a.href.split(Sa)[0]
          , e = -1 != a.href.indexOf(Sa);
        if (yF || e || b)
            d += Sa + b;
        d != a.href && (c ? a.replace(d) : a.href = d)
    }
      , BF = function(a, b, c, d) {
        if (a.M || b != HF(a))
            if (a.M = !1,
            b = Ez(b),
            I) {
                var e = OC(a.D);
                e.open(Hw, c ? xu : void 0);
                c = lB(kB(Rw, {}, d || a.b.document.title), kB(oj, {}, b));
                e.write(cB(c));
                e.close()
            } else if (e = ZA(a.H) + Sa + b,
            a = a.D.contentWindow)
                c ? a.location.replace(e) : a.location.href = e
    }
      , HF = function(a) {
        if (I)
            return a = OC(a.D),
            a.body ? Fz(a.body.innerHTML) : null;
        var b = a.D.contentWindow;
        if (b) {
            var c;
            try {
                c = Fz(FF(b))
            } catch (d) {
                return a.o || (1 != a.o && tF(a.c, 1E4),
                a.o = !0),
                null
            }
            a.o && (0 != a.o && tF(a.c, 150),
            a.o = !1);
            return c || null
        }
        return null
    };
    CF.prototype.C = function(a) {
        if (this.g) {
            var b = FF(this.b);
            b != this.j && GF(this, b, a)
        }
        if (!this.g || yF)
            if (b = HF(this) || k,
            null == this.Nc || b == this.Nc)
                this.Nc = null,
                b != this.j && GF(this, b, a)
    }
    ;
    var GF = function(a, b, c) {
        a.j = a.B.value = b;
        a.g ? (yF && BF(a, b),
        zF(a, b)) : BF(a, b);
        a.dispatchEvent(new wF(AF(a),c))
    };
    CF.prototype.F = function() {
        rF(this.c);
        sF(this.c)
    }
    ;
    var EF = [Yr, br, Zr]
      , xF = 0;
    var JF = function() {
        this.ke = new CF;
        this.Qf = null;
        this.a = 0;
        T(this.ke, is, this.b, !1, this)
    };
    JF.prototype.b = function(a) {
        a.D && KF(this, a.H)
    }
    ;
    var KF = function(a, b) {
        var c = Fz(b)
          , d = c.split(/[|\/]/, 2);
        if (2 == d.length && (d.push(c.substring(d[0].length + d[1].length + 2)),
        !Az(Uz(d[0])) && !Az(Uz(d[1])))) {
            LF(a.Qf, d[0], d[1], d[2], lj);
            return
        }
        LF(a.Qf, k, k, k, lj)
    };
    var MF = H("Firefox")
      , NF = BB() || H(dq)
      , OF = H(bq)
      , PF = H(Cf) && !(KA() || H("Firefox") || JA() || H(fh))
      , QF = KA()
      , RF = H("Safari") && !(KA() || H("Coast") || JA() || H(Xf) || H(fh) || H(Cf)) && !(BB() || H(bq) || H(dq));
    var TF = function(a, b) {
        var c = Array.prototype.slice.call(arguments)
          , d = c.shift();
        if ("undefined" == typeof d)
            throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, m, n, p, r, u) {
            if (p == Wa)
                return Wa;
            var A = c.shift();
            if ("undefined" == typeof A)
                throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = A;
            return SF[p].apply(null, arguments)
        })
    }
      , SF = {
        s: function(a, b, c) {
            return isNaN(c) || c == k || a.length >= c ? a : a = -1 < b.indexOf(Yb, 0) ? a + Tz(l, c - a.length) : Tz(l, c - a.length) + a
        },
        f: function(a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || e == k || (d = parseFloat(a).toFixed(e));
            var f;
            f = 0 > a ? Yb : 0 <= b.indexOf(Tb) ? Tb : 0 <= b.indexOf(l) ? l : k;
            0 <= a && (d = f + d);
            if (isNaN(c) || d.length >= c)
                return d;
            d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
            a = c - d.length - f.length;
            return d = 0 <= b.indexOf(Yb, 0) ? f + d + Tz(l, a) : f + Tz(0 <= b.indexOf(Fd, 0) ? Fd : l, a) + d
        },
        d: function(a, b, c, d, e, f, g, m) {
            return SF.f(parseInt(a, 10), b, c, d, 0, f, g, m)
        }
    };
    SF.i = SF.d;
    SF.u = SF.d;
    var UF = az();
    hz(UF);
    UF.prototype.a = 0;
    var VF = function(a) {
        return ee + (a.a++).toString(36)
    };
    var W = function(a) {
        U.call(this);
        this.a = a || iC();
        this.Ha = WF;
        this.Ea = null;
        this.oa = !1;
        this.G = null;
        this.M = void 0;
        this.H = this.o = this.B = this.sa = null;
        this.Hb = !1
    };
    G(W, U);
    W.prototype.lc = UF.O();
    var WF = null
      , XF = function(a, b) {
        switch (a) {
        case 1:
            return b ? gl : Kl;
        case 2:
            return b ? Hp : Zx;
        case 4:
            return b ? bi : Uk;
        case 8:
            return b ? Uu : ay;
        case 16:
            return b ? Zj : Xx;
        case 32:
            return b ? hm : nj;
        case 64:
            return b ? Is : kk
        }
        throw Error("Invalid component state");
    };
    W.prototype.D = function() {
        return this.Ea || (this.Ea = VF(this.lc))
    }
    ;
    var YF = function(a, b) {
        if (a.B && a.B.H) {
            var c = a.B.H
              , d = a.Ea;
            d in c && delete c[d];
            xA(a.B.H, b, a)
        }
        a.Ea = b
    };
    W.prototype.l = z("G");
    var ZF = function(a, b) {
        return a.G ? O(b, a.G || a.a.b) : null
    }
      , X = function(a) {
        a.M || (a.M = new EE(a));
        return a.M
    }
      , aG = function(a, b) {
        if (a == b)
            throw Error(Ah);
        if (b && a.B && a.Ea && $F(a.B, a.Ea) && a.B != b)
            throw Error(Ah);
        a.B = b;
        W.v.Rc.call(a, b)
    };
    W.prototype.K = z("B");
    W.prototype.Rc = function(a) {
        if (this.B && this.B != a)
            throw Error("Method not supported");
        W.v.Rc.call(this, a)
    }
    ;
    W.prototype.na = function() {
        this.G = this.a.b.createElement(q)
    }
    ;
    W.prototype.$ = function(a) {
        bG(this, a)
    }
    ;
    var bG = function(a, b, c) {
        if (a.oa)
            throw Error(Pf);
        a.G || a.na();
        b ? b.insertBefore(a.G, c || null) : a.a.b.body.appendChild(a.G);
        a.B && !a.B.oa || a.V()
    };
    C = W.prototype;
    C.P = function(a) {
        if (this.oa)
            throw Error(Pf);
        if (a && this.Ud(a)) {
            this.Hb = !0;
            var b = hC(a);
            this.a && this.a.b == b || (this.a = iC(a));
            this.Y(a);
            this.V()
        } else
            throw Error("Invalid element to decorate");
    }
    ;
    C.Ud = B(!0);
    C.Y = bz("G");
    C.V = function() {
        this.oa = !0;
        cG(this, function(a) {
            !a.oa && a.l() && a.V()
        })
    }
    ;
    C.Xa = function() {
        cG(this, function(a) {
            a.oa && a.Xa()
        });
        this.M && GE(this.M);
        this.oa = !1
    }
    ;
    C.L = function() {
        this.oa && this.Xa();
        this.M && (this.M.xa(),
        delete this.M);
        cG(this, function(a) {
            a.xa()
        });
        !this.Hb && this.G && CC(this.G);
        this.B = this.sa = this.G = this.H = this.o = null;
        W.v.L.call(this)
    }
    ;
    C.Fa = function(a, b) {
        this.Vc(a, dG(this), b)
    }
    ;
    C.Vc = function(a, b, c) {
        if (a.oa && (c || !this.oa))
            throw Error(Pf);
        if (0 > b || b > dG(this))
            throw Error("Child component index out of bounds");
        this.H && this.o || (this.H = {},
        this.o = []);
        if (a.K() == this) {
            var d = a.D();
            this.H[d] = a;
            lA(this.o, a)
        } else
            xA(this.H, a.D(), a);
        aG(a, this);
        qA(this.o, b, 0, a);
        a.oa && this.oa && a.K() == this ? (c = this.wb(),
        b = c.childNodes[b] || null,
        b != a.l() && c.insertBefore(a.l(), b)) : c ? (this.G || this.na(),
        b = eG(this, b + 1),
        bG(a, this.wb(), b ? b.G : null)) : this.oa && !a.oa && a.G && a.G.parentNode && 1 == a.G.parentNode.nodeType && a.V()
    }
    ;
    C.wb = z("G");
    var fG = function(a) {
        null == a.Ha && (a.Ha = GD(a.oa ? a.G : a.a.b.body));
        return a.Ha
    }
      , dG = function(a) {
        return a.o ? a.o.length : 0
    }
      , $F = function(a, b) {
        var c;
        a.H && b ? (c = a.H,
        c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
        return c
    }
      , eG = function(a, b) {
        return a.o ? a.o[b] || null : null
    }
      , cG = function(a, b, c) {
        a.o && cA(a.o, b, c)
    }
      , gG = function(a, b) {
        return a.o && b ? bA(a.o, b) : -1
    };
    W.prototype.removeChild = function(a, b) {
        if (a) {
            var c = mz(a) ? a : a.D();
            a = $F(this, c);
            if (c && a) {
                var d = this.H;
                c in d && delete d[c];
                lA(this.o, a);
                b && (a.Xa(),
                a.G && CC(a.G));
                aG(a, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    }
    ;
    var hG = function(a) {
        for (var b = []; a.o && 0 != a.o.length; )
            b.push(a.removeChild(eG(a, 0), !0))
    };
    var jG = function(a) {
        var b = a;
        if (a instanceof Array)
            b = Array(a.length),
            iG(b, a);
        else if (a instanceof Object) {
            var c = b = {}, d;
            for (d in a)
                a.hasOwnProperty(d) && (c[d] = jG(a[d]))
        }
        return b
    }
      , iG = function(a, b) {
        for (var c = 0; c < b.length; ++c)
            b.hasOwnProperty(c) && (a[c] = jG(b[c]))
    }
      , kG = function(a, b) {
        a[b] || (a[b] = []);
        return a[b]
    }
      , Z = function(a, b) {
        return a[b] ? a[b].length : 0
    }
      , mG = function(a, b) {
        if (null == a || null == b)
            return null == a == (null == b);
        if (a.constructor != Array && a.constructor != Object)
            throw Error("Invalid object type passed into JsProto.areObjectsEqual()");
        if (a === b)
            return !0;
        if (a.constructor != b.constructor)
            return !1;
        for (var c in a)
            if (!(c in b && lG(a[c], b[c])))
                return !1;
        for (var d in b)
            if (!(d in a))
                return !1;
        return !0
    }
      , lG = function(a, b) {
        if (a === b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b))
            return !0;
        if (a instanceof Object && b instanceof Object) {
            if (!mG(a, b))
                return !1
        } else
            return !1;
        return !0
    };
    var nG = function(a) {
        this.a = a || []
    }
      , oG = function(a) {
        this.a = a || []
    }
      , pG = function(a) {
        this.a = a || []
    };
    nG.prototype.b = z(t);
    var qG = function(a) {
        a = a.a[0];
        return null != a ? a : k
    }
      , rG = function(a) {
        a = a.a[1];
        return null != a ? a : !1
    };
    oG.prototype.b = z(t);
    var sG = function(a) {
        a = a.a[0];
        return null != a ? a : k
    }
      , tG = function(a) {
        a = a.a[1];
        return null != a ? a : !1
    }
      , uG = function(a) {
        a = a.a[2];
        return null != a ? a : k
    }
      , vG = function(a) {
        a = a.a[3];
        return null != a ? a : k
    };
    pG.prototype.b = z(t);
    var wG = function(a) {
        this.a = a || []
    }
      , xG = function(a) {
        this.a = a || []
    };
    wG.prototype.b = z(t);
    xG.prototype.b = z(t);
    var yG = function(a) {
        this.a = a || []
    }
      , zG = function(a) {
        this.a = a || []
    }
      , AG = function(a) {
        this.a = a || []
    }
      , BG = function(a) {
        this.pb = a || []
    }
      , CG = function(a) {
        this.a = a || []
    }
      , DG = function(a) {
        this.a = a || []
    }
      , EG = function(a) {
        this.a = a || []
    }
      , FG = function(a) {
        this.a = a || []
    }
      , GG = function(a) {
        this.a = a || []
    }
      , HG = function(a) {
        this.a = a || []
    }
      , IG = function(a) {
        this.a = a || []
    }
      , JG = function(a) {
        this.a = a || []
    }
      , KG = function(a) {
        this.Rf = a || []
    }
      , LG = function(a) {
        this.a = a || []
    }
      , MG = function(a) {
        this.a = a || []
    };
    yG.prototype.b = z(t);
    var NG = function(a) {
        a = a.a[0];
        return null != a ? a : k
    }
      , OG = function(a) {
        a = a.a[4];
        return null != a ? a : k
    }
      , PG = function(a) {
        return Z(a.a, 2)
    }
      , QG = function(a, b) {
        return new zG(kG(a.a, 2)[b])
    }
      , RG = function(a, b) {
        return new AG(kG(a.a, 3)[b])
    };
    zG.prototype.b = z(t);
    var SG = function(a) {
        a = a.a[0];
        return null != a ? a : k
    }
      , TG = function(a) {
        a = a.a[1];
        return null != a ? a : 0
    }
      , UG = function(a) {
        a = a.a[2];
        return null != a ? a : !1
    }
      , VG = function(a) {
        a = a.a[3];
        return null != a ? a : !1
    };
    AG.prototype.b = z(t);
    var WG = function(a) {
        a = a.a[0];
        return null != a ? a : 0
    }
      , XG = function(a) {
        a = a.a[1];
        return null != a ? a : 0
    };
    BG.prototype.b = z(dt);
    var YG = function(a) {
        a = a.pb[0];
        return null != a ? a : k
    }
      , ZG = function(a) {
        a = a.pb[1];
        return null != a ? a : k
    }
      , $G = function(a) {
        a = a.pb[3];
        return null != a ? a : k
    }
      , aH = function(a) {
        a = a.pb[4];
        return null != a ? a : 0
    };
    CG.prototype.b = z(t);
    var bH = function(a, b) {
        return kG(a.a, 1)[b]
    };
    DG.prototype.b = z(t);
    DG.prototype.Eb = function() {
        return Z(this.a, 2)
    }
    ;
    DG.prototype.Fb = function(a) {
        return new CG(kG(this.a, 2)[a])
    }
    ;
    EG.prototype.b = z(t);
    FG.prototype.b = z(t);
    FG.prototype.Eb = function() {
        return Z(this.a, 1)
    }
    ;
    FG.prototype.Fb = function(a) {
        return new EG(kG(this.a, 1)[a])
    }
    ;
    GG.prototype.b = z(t);
    var cH = function(a, b) {
        return kG(a.a, 0)[b]
    };
    HG.prototype.b = z(t);
    HG.prototype.Eb = function() {
        return Z(this.a, 1)
    }
    ;
    HG.prototype.Fb = function(a) {
        return new GG(kG(this.a, 1)[a])
    }
    ;
    IG.prototype.b = z(t);
    JG.prototype.b = z(t);
    KG.prototype.b = z("Rf");
    LG.prototype.b = z(t);
    MG.prototype.b = z(t);
    var dH = function(a) {
        a = a.a[2];
        return null != a ? a : k
    }
      , eH = new JG
      , fH = function(a) {
        return (a = a.a[7]) ? new JG(a) : eH
    }
      , gH = new KG
      , hH = new xG
      , iH = new IG
      , jH = function(a) {
        return (a = a.a[14]) ? new IG(a) : iH
    }
      , kH = function(a) {
        return Z(a.a, 0)
    }
      , lH = function(a, b) {
        return new BG(kG(a.a, 0)[b])
    }
      , mH = function(a, b) {
        return new DG(kG(a.a, 1)[b])
    }
      , nH = function(a) {
        return Z(a.a, 5)
    }
      , oH = function(a, b) {
        return new yG(kG(a.a, 5)[b])
    }
      , pH = function(a, b) {
        return new HG(kG(a.a, 11)[b])
    }
      , qH = function(a, b) {
        return new FG(kG(a.a, 12)[b])
    };
    var uH = function(a) {
        this.b = !1;
        this.a = [];
        this.c = {};
        for (var b = 0; b < Z(a.a, 1); b++) {
            var c = mH(a, b), d;
            d = c.a[0];
            d = null != d ? d : k;
            var e = k;
            null != c.a[3] && (c = c.a[3],
            e = null != c ? c : k);
            d in this.c ? d = this.c[d] : (c = new rH(d,e),
            this.c[d] = c,
            this.a.push(c),
            d = c);
            for (c = 0; c < mH(a, b).Eb(); c++) {
                var f = mH(a, b).Fb(c)
                  , e = f
                  , e = 0 == Z(e.a, 2) ? -sz(e) : kG(e.a, 2)[0];
                var g = d;
                if (e in g.b)
                    e = g.b[e];
                else {
                    var m = new sH;
                    g.b[e] = m;
                    g.a.push(m);
                    e = m
                }
                var g = f.a[0], g = null != g ? g : k, m = f.a[4], m = null != m ? m : k, n;
                null != f.a[3] ? (n = f.a[3],
                n = null != n ? n : 0) : n = -1;
                var p;
                p = [];
                for (var r = 0; r < Z(f.a, 1); r++)
                    p.push(bH(f, r));
                f = e;
                g in f.b || (m = new tH(g,m,n,p),
                f.b[g] = m,
                f.a.push(m));
                this.b |= 1 < e.a.length
            }
        }
    }
      , vH = function(a) {
        for (var b = 0, c = 0; c < a.a.length; c++) {
            for (var d = a.a[c], e = 0, f = 0; f < d.a.length; f++)
                e += d.a[f].a.length;
            b += e
        }
        for (d = c = 0; d < a.a.length; d++) {
            for (var e = a.a[d], g = f = 0; g < e.a.length; g++) {
                for (var m = e.a[g], n = 0, p = 0; p < m.a.length; p++)
                    n += m.a[p].visible ? 1 : 0;
                f += n
            }
            c += f
        }
        return b - c
    }
      , wH = function(a) {
        for (var b = [], c = 0; c < a.a.length; c++)
            for (var d = 0; d < a.a[c].a.length; d++)
                Array.prototype.push.apply(b, a.a[c].a[d].a);
        return b
    }
      , xH = function(a) {
        for (var b = 0; b < a.a.length; b++)
            for (var c = 0; c < a.a[b].a.length; c++)
                a.a[b].a[c].a.sort(function(a, b) {
                    return b.a - a.a
                })
    }
      , rH = function(a, b) {
        this.g = a;
        this.c = b;
        this.a = [];
        this.b = {}
    };
    rH.prototype.visible = function() {
        for (var a = 0; a < this.a.length; a++)
            if (this.a[a].visible())
                return !0;
        return !1
    }
    ;
    var sH = function() {
        this.a = [];
        this.b = {}
    };
    sH.prototype.visible = function() {
        for (var a = 0; a < this.a.length; a++)
            if (this.a[a].visible)
                return !0;
        return !1
    }
    ;
    var tH = function(a, b, c, d) {
        this.text = a;
        this.c = b;
        this.a = c;
        this.g = d;
        this.visible = !1;
        this.b = 0
    };
    var yH = function(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)
            return !1;
        switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
            return !1;
        case 0:
            return !FB;
        default:
            return 166 > a.keyCode || 183 < a.keyCode
        }
    }
      , BH = function(a, b, c, d, e) {
        if (!(I || DB || GB && J(Xd)))
            return !0;
        if (IB && e)
            return zH(a);
        if (e && !d)
            return !1;
        nz(b) && (b = AH(b));
        if (!c && (17 == b || 18 == b || IB && 91 == b))
            return !1;
        if ((GB || DB) && d && c)
            switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
            }
        if (I && d && b == a)
            return !1;
        switch (a) {
        case 13:
            return !0;
        case 27:
            return !(GB || DB)
        }
        return zH(a)
    }
      , zH = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (GB || DB) && 0 == a)
            return !0;
        switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
        }
    }
      , AH = function(a) {
        if (FB)
            a = CH(a);
        else if (IB && GB)
            a: switch (a) {
            case 93:
                a = 91;
                break a
            }
        return a
    }
      , CH = function(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    };
    var EH = function(a, b) {
        U.call(this);
        a && DH(this, a, b)
    };
    G(EH, U);
    C = EH.prototype;
    C.G = null;
    C.oe = null;
    C.uf = null;
    C.pe = null;
    C.nb = -1;
    C.gc = -1;
    C.Me = !1;
    var FH = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }
      , GH = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }
      , HH = I || DB || GB && J(Xd)
      , IH = IB && FB;
    EH.prototype.a = function(a) {
        if (GB || DB)
            if (17 == this.nb && !a.ctrlKey || 18 == this.nb && !a.altKey || IB && 91 == this.nb && !a.metaKey)
                this.gc = this.nb = -1;
        -1 == this.nb && (a.ctrlKey && 17 != a.keyCode ? this.nb = 17 : a.altKey && 18 != a.keyCode ? this.nb = 18 : a.metaKey && 91 != a.keyCode && (this.nb = 91));
        HH && !BH(a.keyCode, this.nb, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.gc = AH(a.keyCode),
        IH && (this.Me = a.altKey))
    }
    ;
    EH.prototype.b = function(a) {
        this.gc = this.nb = -1;
        this.Me = a.altKey
    }
    ;
    EH.prototype.handleEvent = function(a) {
        var b = a.b, c, d, e = b.altKey;
        I && a.type == cr ? c = this.gc : (GB || DB) && a.type == cr ? c = this.gc : CB && !GB ? c = this.gc : (c = b.keyCode || this.gc,
        d = b.charCode || 0,
        IH && (e = this.Me),
        IB && 63 == d && 224 == c && (c = 191));
        d = c = AH(c);
        var f = b.keyIdentifier;
        c ? 63232 <= c && c in FH ? d = FH[c] : 25 == c && a.shiftKey && (d = 9) : f && f in GH && (d = GH[f]);
        this.nb = d;
        a = new JH(d,0,0,b);
        a.altKey = e;
        this.dispatchEvent(a)
    }
    ;
    EH.prototype.l = z("G");
    var DH = function(a, b, c) {
        a.pe && KH(a);
        a.G = b;
        a.oe = T(a.G, cr, a, c);
        a.uf = T(a.G, br, a.a, c, a);
        a.pe = T(a.G, dr, a.b, c, a)
    }
      , KH = function(a) {
        a.oe && (zE(a.oe),
        zE(a.uf),
        zE(a.pe),
        a.oe = null,
        a.uf = null,
        a.pe = null);
        a.G = null;
        a.nb = -1;
        a.gc = -1
    };
    EH.prototype.L = function() {
        EH.v.L.call(this);
        KH(this)
    }
    ;
    var JH = function(a, b, c, d) {
        aE.call(this, d);
        this.type = ar;
        this.keyCode = a
    };
    G(JH, aE);
    var LH;
    var MH = ["combobox", "grid", "group", ur, Pr, "menubar", "radiogroup", "row", "rowgroup", "tablist", "textbox", "toolbar", "tree", "treegrid"]
      , NH = function(a, b) {
        b ? a.setAttribute(Iu, b) : a.removeAttribute(Iu)
    }
      , OH = function(a, b, c) {
        kz(c) && (c = c.join(l));
        var d = Bi + b;
        c === k || void 0 == c ? (LH || (LH = {
            atomic: !1,
            autocomplete: us,
            dropeffect: us,
            haspopup: !1,
            live: Bs,
            multiline: !1,
            multiselectable: !1,
            orientation: hy,
            readonly: !1,
            relevant: di,
            required: !1,
            sort: us,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: Yl
        }),
        c = LH,
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    }
      , PH = function(a, b) {
        var c = a.getAttribute(Bi + b);
        return null == c || void 0 == c ? k : String(c)
    }
      , QH = function(a) {
        var b = PH(a, ci);
        return hC(a).getElementById(b)
    }
      , RH = function(a, b) {
        var c = k;
        b && (c = b.id);
        OH(a, ci, c)
    };
    var SH = az(), TH;
    hz(SH);
    var VH = function() {
        var a = new UH;
        a.S = B(Sq);
        return a
    }
      , WH = {
        button: hu,
        checkbox: ak,
        menuitem: Zu,
        menuitemcheckbox: ak,
        menuitemradio: ak,
        radio: ak,
        tab: Zu,
        treeitem: Zu
    };
    SH.prototype.Sb = az();
    SH.prototype.Pa = function(a) {
        return a.a.a(q, XH(this, a).join(l), a.ya())
    }
    ;
    SH.prototype.fb = $y();
    var ZH = function(a, b, c) {
        if (a = a.l ? a.l() : a) {
            var d = [b];
            I && !J($d) && (d = YH(TB(a), b),
            d.push(b));
            (c ? VB : WB)(a, d)
        }
    };
    SH.prototype.Hc = B(!0);
    SH.prototype.P = function(a, b) {
        b.id && YF(a, b.id);
        var c = this.fb(b);
        c && c.firstChild ? $H(a, c.firstChild.nextSibling ? nA(c.childNodes) : c.firstChild) : a.sc = null;
        var d = 0
          , e = this.S()
          , f = this.S()
          , g = !1
          , m = !1
          , n = !1
          , p = nA(TB(b));
        cA(p, function(a) {
            g || a != e ? m || a != f ? d |= this.c(a) : m = !0 : (g = !0,
            f == e && (m = !0));
            1 == this.c(a) && VC(c) && WC(c) && UC(c, !1)
        }, this);
        a.ec = d;
        g || (p.push(e),
        f == e && (m = !0));
        m || p.push(f);
        var r = a.qb;
        r && p.push.apply(p, r);
        if (I && !J($d)) {
            var u = YH(p);
            0 < u.length && (p.push.apply(p, u),
            n = !0)
        }
        if (!g || !m || r || n)
            b.className = p.join(l);
        return b
    }
    ;
    SH.prototype.vg = function(a) {
        fG(a) && this.hf(a.l(), !0);
        a.isEnabled() && this.Ic(a, a.isVisible())
    }
    ;
    var aI = function(a, b, c) {
        if (a = c || a.Sb())
            c = b.getAttribute(Iu) || null,
            a != c && NH(b, a)
    }
      , dI = function(a, b, c) {
        b.isVisible() || OH(c, Fp, !b.isVisible());
        b.isEnabled() || a.Cb(c, 1, !b.isEnabled());
        bI(b, 8) && a.Cb(c, 8, cI(b, 8));
        bI(b, 16) && a.Cb(c, 16, b.Ca());
        bI(b, 64) && a.Cb(c, 64, cI(b, 64))
    };
    C = SH.prototype;
    C.Wd = function(a, b) {
        ID(a, !b, !I && !CB)
    }
    ;
    C.hf = function(a, b) {
        ZH(a, this.S() + Sc, b)
    }
    ;
    C.gf = function(a) {
        var b;
        return bI(a, 32) && (b = a.l()) ? VC(b) && WC(b) : !1
    }
    ;
    C.Ic = function(a, b) {
        var c;
        if (bI(a, 32) && (c = a.l())) {
            if (!b && cI(a, 32)) {
                try {
                    c.blur()
                } catch (d) {}
                cI(a, 32) && a.Xd(null)
            }
            (VC(c) && WC(c)) != b && UC(c, b)
        }
    }
    ;
    C.setVisible = function(a, b) {
        R(a, b);
        a && OH(a, Fp, !b)
    }
    ;
    C.rc = function(a, b, c) {
        var d = a.l();
        if (d) {
            var e = this.a(b);
            e && ZH(a, e, c);
            this.Cb(d, b, c)
        }
    }
    ;
    C.Cb = function(a, b, c) {
        TH || (TH = {
            1: hl,
            8: Zu,
            16: ak,
            64: Ul
        });
        b = TH[b];
        var d = a.getAttribute(Iu) || null;
        d && (d = WH[d] || b,
        b = b == ak || b == Zu ? d : b);
        b && OH(a, b, c)
    }
    ;
    C.xb = function(a, b) {
        var c = this.fb(a);
        if (c && (zC(c),
        b))
            if (mz(b))
                PC(c, b);
            else {
                var d = function(a) {
                    if (a) {
                        var b = hC(c);
                        c.appendChild(mz(a) ? b.createTextNode(a) : a)
                    }
                };
                kz(b) ? cA(b, d) : !lz(b) || ts in b ? d(b) : cA(nA(b), d)
            }
    }
    ;
    C.S = B("goog-control");
    var XH = function(a, b) {
        var c = a.S()
          , d = [c]
          , e = a.S();
        e != c && d.push(e);
        c = b.ec;
        for (e = []; c; ) {
            var f = c & -c;
            e.push(a.a(f));
            c &= ~f
        }
        d.push.apply(d, e);
        (c = b.qb) && d.push.apply(d, c);
        I && !J($d) && d.push.apply(d, YH(d));
        return d
    }
      , YH = function(a, b) {
        var c = [];
        b && (a = a.concat([b]));
        cA([], function(d) {
            !gA(d, vz(jA, a)) || b && !jA(d, b) || c.push(d.join(Qh))
        });
        return c
    };
    SH.prototype.a = function(a) {
        this.b || eI(this);
        return this.b[a]
    }
    ;
    SH.prototype.c = function(a) {
        if (!this.K) {
            this.b || eI(this);
            var b = this.b, c = {}, d;
            for (d in b)
                c[b[d]] = d;
            this.K = c
        }
        a = parseInt(this.K[a], 10);
        return isNaN(a) ? 0 : a
    }
    ;
    var eI = function(a) {
        var b = a.S();
        b.replace(/\xa0|\s/g, l);
        a.b = {
            1: b + xc,
            2: b + Ec,
            4: b + dc,
            8: b + Tc,
            16: b + qc,
            32: b + Ac,
            64: b + Pc
        }
    };
    var fI = az();
    G(fI, SH);
    hz(fI);
    C = fI.prototype;
    C.Sb = B(Lj);
    C.Cb = function(a, b, c) {
        switch (b) {
        case 8:
        case 16:
            OH(a, hu, c);
            break;
        default:
        case 64:
        case 1:
            fI.v.Cb.call(this, a, b, c)
        }
    }
    ;
    C.Pa = function(a) {
        var b = fI.v.Pa.call(this, a);
        gI(b, a.C);
        var c = a.U();
        c && this.Sd(b, c);
        bI(a, 16) && this.Cb(b, 16, a.Ca());
        return b
    }
    ;
    C.P = function(a, b) {
        b = fI.v.P.call(this, a, b);
        var c = this.U(b);
        a.La = c;
        a.C = b.title;
        bI(a, 16) && this.Cb(b, 16, a.Ca());
        return b
    }
    ;
    C.U = gz;
    C.Sd = gz;
    var gI = function(a, b) {
        a && (b ? a.title = b : a.removeAttribute(Rw))
    }
      , iI = function(a, b, c) {
        var d = fG(b)
          , e = a.S() + rc;
        a = a.S() + sc;
        hI(b, d ? a : e, !!(c & 1));
        hI(b, d ? e : a, !!(c & 2))
    };
    fI.prototype.S = B("goog-button");
    var kI = function(a, b) {
        if (!a)
            throw Error("Invalid class name " + a);
        if (!oz(b))
            throw Error("Invalid decorator function " + b);
        jI[a] = b
    }
      , lI = {}
      , jI = {};
    var mI = function(a, b, c) {
        W.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b; ) {
                d = sz(b);
                if (d = lI[d])
                    break;
                b = b.v ? b.v.constructor : null
            }
            b = d ? oz(d.O) ? d.O() : new d : null
        }
        this.c = b;
        this.sc = dz(a) ? a : null
    };
    G(mI, W);
    C = mI.prototype;
    C.sc = null;
    C.ec = 0;
    C.nd = 39;
    C.Jb = 255;
    C.md = 0;
    C.Yd = !0;
    C.qb = null;
    C.ge = !0;
    C.Ad = !1;
    C.kf = null;
    var oI = function(a, b) {
        a.oa && b != a.ge && nI(a, b);
        a.ge = b
    }
      , pI = function(a, b) {
        b && (a.qb ? jA(a.qb, b) || a.qb.push(b) : a.qb = [b],
        ZH(a, b, !0))
    }
      , hI = function(a, b, c) {
        c ? pI(a, b) : b && a.qb && lA(a.qb, b) && (0 == a.qb.length && (a.qb = null),
        ZH(a, b, !1))
    };
    C = mI.prototype;
    C.na = function() {
        var a = this.c.Pa(this);
        this.G = a;
        aI(this.c, a, this.ed());
        this.Ad || this.c.Wd(a, !1);
        this.isVisible() || this.c.setVisible(a, !1)
    }
    ;
    C.ed = z("kf");
    C.wb = function() {
        return this.c.fb(this.l())
    }
    ;
    C.Ud = function(a) {
        return this.c.Hc(a)
    }
    ;
    C.Y = function(a) {
        this.G = a = this.c.P(this, a);
        aI(this.c, a, this.ed());
        this.Ad || this.c.Wd(a, !1);
        this.Yd = a.style.display != us
    }
    ;
    C.V = function() {
        mI.v.V.call(this);
        dI(this.c, this, this.G);
        this.c.vg(this);
        if (this.nd & -2 && (this.ge && nI(this, !0),
        bI(this, 32))) {
            var a = this.l();
            if (a) {
                var b = this.I || (this.I = new EH);
                DH(b, a);
                X(this).a(b, ar, this.Ja).a(a, hm, this.ai).a(a, nj, this.Xd)
            }
        }
    }
    ;
    var nI = function(a, b) {
        var c = X(a)
          , d = a.l();
        b ? (c.a(d, as, a.jf).a(d, Yr, a.Ya).a(d, bs, a.gb).a(d, $r, a.rf),
        a.gd != gz && c.a(d, tk, a.gd),
        I && (c.a(d, Sk, a.Bg),
        a.N || (a.N = new qI(a),
        VD(a, a.N)))) : (c.b(d, as, a.jf).b(d, Yr, a.Ya).b(d, bs, a.gb).b(d, $r, a.rf),
        a.gd != gz && c.b(d, tk, a.gd),
        I && (c.b(d, Sk, a.Bg),
        UD(a.N),
        a.N = null))
    };
    mI.prototype.Xa = function() {
        mI.v.Xa.call(this);
        this.I && KH(this.I);
        this.isVisible() && this.isEnabled() && this.c.Ic(this, !1)
    }
    ;
    mI.prototype.L = function() {
        mI.v.L.call(this);
        this.I && (this.I.xa(),
        delete this.I);
        delete this.c;
        this.N = this.qb = this.sc = null
    }
    ;
    mI.prototype.ya = z("sc");
    mI.prototype.g = function(a) {
        this.c.xb(this.l(), a);
        this.sc = a
    }
    ;
    var $H = function(a, b) {
        a.sc = b
    };
    C = mI.prototype;
    C.Na = function() {
        var a = this.ya();
        if (!a)
            return k;
        a = mz(a) ? a : kz(a) ? eA(a, ZC).join(k) : YC(a);
        return Cz(a)
    }
    ;
    C.isVisible = z("Yd");
    C.setVisible = function(a, b) {
        if (b || this.Yd != a && this.dispatchEvent(a ? kv : Gp)) {
            var c = this.l();
            c && this.c.setVisible(c, a);
            this.isEnabled() && this.c.Ic(this, a);
            this.Yd = a;
            return !0
        }
        return !1
    }
    ;
    C.isEnabled = function() {
        return !cI(this, 1)
    }
    ;
    C.ba = function(a) {
        var b = this.K();
        b && typeof b.isEnabled == um && !b.isEnabled() || !rI(this, 1, !a) || (a || (sI(this, !1),
        tI(this, !1)),
        this.isVisible() && this.c.Ic(this, a),
        uI(this, 1, !a, !0))
    }
    ;
    var tI = function(a, b) {
        rI(a, 2, b) && uI(a, 2, b)
    }
      , sI = function(a, b) {
        rI(a, 4, b) && uI(a, 4, b)
    };
    C = mI.prototype;
    C.Jf = function(a) {
        rI(this, 8, a) && uI(this, 8, a)
    }
    ;
    C.Ca = function() {
        return cI(this, 16)
    }
    ;
    C.ra = function(a) {
        rI(this, 16, a) && uI(this, 16, a)
    }
    ;
    C.hc = function(a) {
        rI(this, 32, a) && uI(this, 32, a)
    }
    ;
    C.Ga = function(a) {
        rI(this, 64, a) && uI(this, 64, a)
    }
    ;
    var cI = function(a, b) {
        return !!(a.ec & b)
    }
      , uI = function(a, b, c, d) {
        d || 1 != b ? bI(a, b) && c != cI(a, b) && (a.c.rc(a, b, c),
        a.ec = c ? a.ec | b : a.ec & ~b) : a.ba(!c)
    }
      , bI = function(a, b) {
        return !!(a.nd & b)
    };
    mI.prototype.Aa = function(a, b) {
        if (this.oa && cI(this, a) && !b)
            throw Error(Pf);
        !b && cI(this, a) && uI(this, a, !1);
        this.nd = b ? this.nd | a : this.nd & ~a
    }
    ;
    var vI = function(a, b) {
        return !!(a.Jb & b) && bI(a, b)
    }
      , rI = function(a, b, c) {
        return bI(a, b) && cI(a, b) != c && (!(a.md & b) || a.dispatchEvent(XF(b, c))) && !a.Ma
    };
    C = mI.prototype;
    C.jf = function(a) {
        (!a.c || !JC(this.l(), a.c)) && this.dispatchEvent(Nl) && this.isEnabled() && vI(this, 2) && tI(this, !0)
    }
    ;
    C.rf = function(a) {
        a.c && JC(this.l(), a.c) || !this.dispatchEvent(nr) || (vI(this, 4) && sI(this, !1),
        vI(this, 2) && tI(this, !1))
    }
    ;
    C.gd = gz;
    C.Ya = function(a) {
        this.isEnabled() && (vI(this, 2) && tI(this, !0),
        cE(a) && (vI(this, 4) && sI(this, !0),
        this.c && this.c.gf(this) && this.l().focus()));
        !this.Ad && cE(a) && a.preventDefault()
    }
    ;
    C.gb = function(a) {
        this.isEnabled() && (vI(this, 2) && tI(this, !0),
        cI(this, 4) && this.Xb(a) && vI(this, 4) && sI(this, !1))
    }
    ;
    C.Bg = function(a) {
        this.isEnabled() && this.Xb(a)
    }
    ;
    C.Xb = function(a) {
        vI(this, 16) && this.ra(!this.Ca());
        vI(this, 8) && this.Jf(!0);
        vI(this, 64) && this.Ga(!cI(this, 64));
        var b = new S(v,this);
        a && (b.altKey = a.altKey,
        b.ctrlKey = a.ctrlKey,
        b.metaKey = a.metaKey,
        b.shiftKey = a.shiftKey,
        b.o = a.o);
        return this.dispatchEvent(b)
    }
    ;
    C.ai = function() {
        vI(this, 32) && this.hc(!0)
    }
    ;
    C.Xd = function() {
        vI(this, 4) && sI(this, !1);
        vI(this, 32) && this.hc(!1)
    }
    ;
    C.Ja = function(a) {
        return this.isVisible() && this.isEnabled() && this.tc(a) ? (a.preventDefault(),
        a.stopPropagation(),
        !0) : !1
    }
    ;
    C.tc = function(a) {
        return 13 == a.keyCode && this.Xb(a)
    }
    ;
    if (!oz(mI))
        throw Error("Invalid component class " + mI);
    if (!oz(SH))
        throw Error("Invalid renderer class " + SH);
    var wI = sz(mI);
    lI[wI] = SH;
    kI("goog-control", function() {
        return new mI(null)
    });
    var qI = function(a) {
        TD.call(this);
        this.b = a;
        this.a = !1;
        this.c = new EE(this);
        VD(this, this.c);
        a = this.b.G;
        this.c.a(a, Yr, this.j).a(a, bs, this.o).a(a, w, this.g)
    };
    G(qI, TD);
    var xI = !I || 9 <= SB;
    qI.prototype.j = function() {
        this.a = !1
    }
    ;
    qI.prototype.o = function() {
        this.a = !0
    }
    ;
    var yI = function(a, b) {
        if (!xI)
            return a.button = 0,
            a.type = b,
            a;
        var c = document.createEvent(Eg);
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    };
    qI.prototype.g = function(a) {
        if (this.a)
            this.a = !1;
        else {
            var b = a.b
              , c = b.button
              , d = b.type
              , e = yI(b, Yr);
            this.b.Ya(new aE(e,a.a));
            e = yI(b, bs);
            this.b.gb(new aE(e,a.a));
            xI || (b.button = c,
            b.type = d)
        }
    }
    ;
    qI.prototype.L = function() {
        this.b = null;
        qI.v.L.call(this)
    }
    ;
    var zI = az();
    G(zI, fI);
    hz(zI);
    C = zI.prototype;
    C.Sb = az();
    C.Pa = function(a) {
        oI(a, !1);
        a.Jb &= -256;
        a.Aa(32, !1);
        return a.a.a(Hf, {
            "class": XH(this, a).join(l),
            disabled: !a.isEnabled(),
            title: a.C || k,
            value: a.U() || k
        }, a.Na() || k)
    }
    ;
    C.Hc = function(a) {
        return a.tagName == Hf || a.tagName == ng && (a.type == Lj || a.type == fw || a.type == zu)
    }
    ;
    C.P = function(a, b) {
        oI(a, !1);
        a.Jb &= -256;
        a.Aa(32, !1);
        if (b.disabled) {
            var c = $z(this.a(1));
            K(b, c)
        }
        return zI.v.P.call(this, a, b)
    }
    ;
    C.vg = function(a) {
        X(a).a(a.l(), w, a.Xb)
    }
    ;
    C.Wd = gz;
    C.hf = gz;
    C.gf = function(a) {
        return a.isEnabled()
    }
    ;
    C.Ic = gz;
    C.rc = function(a, b, c) {
        zI.v.rc.call(this, a, b, c);
        (a = a.l()) && 1 == b && (a.disabled = c)
    }
    ;
    C.U = function(a) {
        return a.value
    }
    ;
    C.Sd = function(a, b) {
        a && (a.value = b)
    }
    ;
    C.Cb = gz;
    var AI = function(a, b, c) {
        mI.call(this, a, b || zI.O(), c)
    };
    G(AI, mI);
    C = AI.prototype;
    C.U = z("La");
    C.Td = function(a) {
        this.La = a;
        this.c.Sd(this.l(), a)
    }
    ;
    C.L = function() {
        AI.v.L.call(this);
        delete this.La;
        delete this.C
    }
    ;
    C.V = function() {
        AI.v.V.call(this);
        if (bI(this, 32)) {
            var a = this.l();
            a && X(this).a(a, dr, this.tc)
        }
    }
    ;
    C.tc = function(a) {
        return 13 == a.keyCode && a.type == ar || 32 == a.keyCode && a.type == dr ? this.Xb(a) : 32 == a.keyCode
    }
    ;
    kI("goog-button", function() {
        return new AI(null)
    });
    var BI = az();
    G(BI, fI);
    hz(BI);
    C = BI.prototype;
    C.Pa = function(a) {
        var b = XH(this, a)
          , b = a.a.a(q, {
            "class": Dm + b.join(l)
        }, this.Hd(a.ya(), a.a));
        gI(b, a.C);
        return b
    }
    ;
    C.Sb = B(Lj);
    C.fb = function(a) {
        return a && a.firstChild && a.firstChild.firstChild
    }
    ;
    C.Hd = function(a, b) {
        return b.a(q, Dm + (this.S() + Qc), b.a(q, Dm + (this.S() + Hc), a))
    }
    ;
    C.Hc = function(a) {
        return a.tagName == q
    }
    ;
    C.P = function(a, b) {
        CI(b, !0);
        CI(b, !1);
        var c;
        a: {
            c = a.a.kg(b);
            var d = this.S() + Qc;
            if (c && UB(c, d) && (c = a.a.kg(c),
            d = this.S() + Hc,
            c && UB(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(this.Hd(b.childNodes, a.a));
        VB(b, [Cm, this.S()]);
        return BI.v.P.call(this, a, b)
    }
    ;
    C.S = B("goog-custom-button");
    var CI = function(a, b) {
        if (a)
            for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a; ) {
                d = b ? c.nextSibling : c.previousSibling;
                if (3 == c.nodeType) {
                    var e = c.nodeValue;
                    if (Dz(e) == k)
                        a.removeChild(c);
                    else {
                        c.nodeValue = b ? e.replace(/^[\s\xa0]+/, k) : e.replace(/[\s\xa0]+$/, k);
                        break
                    }
                } else
                    break;
                c = d
            }
    };
    var DI = function(a, b, c) {
        AI.call(this, a, b || BI.O(), c);
        this.Aa(16, !0)
    };
    G(DI, AI);
    kI("goog-toggle-button", function() {
        return new DI(null)
    });
    var EI = function(a, b, c) {
        TD.call(this);
        this.a = a;
        this.j = b || 0;
        this.c = c;
        this.g = F(this.b, this)
    };
    G(EI, TD);
    EI.prototype.Ea = 0;
    EI.prototype.L = function() {
        EI.v.L.call(this);
        FI(this);
        delete this.a;
        delete this.c
    }
    ;
    var GI = function(a, b) {
        FI(a);
        a.Ea = uF(a.g, dz(b) ? b : a.j)
    }
      , FI = function(a) {
        0 != a.Ea && vF(a.Ea);
        a.Ea = 0
    };
    EI.prototype.b = function() {
        this.Ea = 0;
        this.a && this.a.call(this.c)
    }
    ;
    var KI = function(a, b, c, d, e, f, g, m, n) {
        var p = HI(c)
          , r = BD(a)
          , u = tD(a);
        if (u) {
            var A = new gD(u.left,u.top,u.right - u.left,u.bottom - u.top)
              , u = Math.max(r.left, A.left)
              , D = Math.min(r.left + r.width, A.left + A.width);
            if (u <= D) {
                var V = Math.max(r.top, A.top)
                  , A = Math.min(r.top + r.height, A.top + A.height);
                V <= A && (r.left = u,
                r.top = V,
                r.width = D - u,
                r.height = A - V)
            }
        }
        u = iC(a);
        V = iC(c);
        if (u.b != V.b) {
            D = u.b.body;
            var V = dD(V)
              , A = new M(0,0)
              , Y = rC(hC(D));
            if (iD(Y, bt)) {
                var rb = D;
                do {
                    var $a = Y == V ? sD(rb) : wD(rb);
                    A.x += $a.x;
                    A.y += $a.y
                } while (Y && Y != V && Y != Y.parent && (rb = Y.frameElement) && (Y = Y.parent))
            }
            D = YB(A, sD(D));
            !I || 9 <= SB || cD(u) || (D = YB(D, eD(u)));
            r.left += D.x;
            r.top += D.y
        }
        a = II(a, b);
        r = new M(a & 2 ? r.left + r.width : r.left,a & 1 ? r.top + r.height : r.top);
        r = YB(r, p);
        e && (r.x += (a & 2 ? -1 : 1) * e.x,
        r.y += (a & 1 ? -1 : 1) * e.y);
        var oa;
        if (g)
            if (n)
                oa = n;
            else if (oa = tD(c))
                oa.top -= p.y,
                oa.right -= p.x,
                oa.bottom -= p.y,
                oa.left -= p.x;
        return JI(r, c, d, f, oa, g, m)
    }
      , HI = function(a) {
        var b;
        if (a = a.offsetParent) {
            var c = a.tagName == jg || a.tagName == Ff;
            c && mD(a, cu) == Yv || (b = sD(a),
            c || (c = (c = GD(a)) && FB ? -a.scrollLeft : !c || EB && J(ae) || mD(a, Qs) == ky ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft,
            b = YB(b, new M(c,a.scrollTop))))
        }
        return b || new M
    }
      , JI = function(a, b, c, d, e, f, g) {
        a = a.clone();
        var m = II(b, c);
        c = AD(b);
        g = g ? g.clone() : c.clone();
        a = a.clone();
        g = g.clone();
        var n = 0;
        if (d || 0 != m)
            m & 2 ? a.x -= g.width + (d ? d.right : 0) : d && (a.x += d.left),
            m & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                m = g;
                n = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left,
                n |= 1);
                if (f & 16) {
                    var p = d.x;
                    d.x < e.left && (d.x = e.left,
                    n |= 4);
                    d.x + m.width > e.right && (m.width = Math.min(e.right - d.x, p + m.width - e.left),
                    m.width = Math.max(m.width, 0),
                    n |= 4)
                }
                d.x + m.width > e.right && f & 1 && (d.x = Math.max(e.right - m.width, e.left),
                n |= 1);
                f & 2 && (n = n | (d.x < e.left ? 16 : 0) | (d.x + m.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top,
                n |= 2);
                f & 32 && (p = d.y,
                d.y < e.top && (d.y = e.top,
                n |= 8),
                d.y + m.height > e.bottom && (m.height = Math.min(e.bottom - d.y, p + m.height - e.top),
                m.height = Math.max(m.height, 0),
                n |= 8));
                d.y + m.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - m.height, e.top),
                n |= 2);
                f & 8 && (n = n | (d.y < e.top ? 64 : 0) | (d.y + m.height > e.bottom ? 128 : 0));
                e = n
            } else
                e = 256;
            n = e
        }
        f = new gD(0,0,0,0);
        f.left = a.x;
        f.top = a.y;
        f.width = g.width;
        f.height = g.height;
        e = n;
        if (e & 496)
            return e;
        oD(b, new M(f.left,f.top));
        g = new ZB(f.width,f.height);
        $B(c, g) || (c = g,
        g = hC(b),
        a = cD(iC(g)),
        !I || J(Id) || a && J(ae) ? JD(b, c, sj) : (g = b.style,
        a ? (a = ND(b),
        b = QD(b),
        g.pixelWidth = c.width - b.left - a.left - a.right - b.right,
        g.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (g.pixelWidth = c.width,
        g.pixelHeight = c.height)));
        return e
    }
      , II = function(a, b) {
        return (b & 4 && GD(a) ? b ^ 2 : b) & -5
    };
    var LI = az();
    LI.prototype.a = az();
    var MI = function(a, b) {
        this.g = a;
        this.B = !!b;
        this.o = {
            0: this.g + jc,
            1: this.g + kc,
            2: this.g + fc,
            3: this.g + ic
        }
    };
    G(MI, LI);
    C = MI.prototype;
    C.le = !1;
    C.Oe = 2;
    C.Tf = 20;
    C.Re = 3;
    C.zf = -5;
    var NI = function(a, b, c, d) {
        null != b && (a.Re = b);
        null != c && (a.Oe = c);
        nz(void 0) && (a.Tf = Math.max(void 0, 15));
        nz(d) && (a.zf = d)
    };
    MI.prototype.a = function(a, b, c) {
        a = this.Oe;
        2 == a && (a = 0);
        OI(this, this.Re, a, 2 == this.Oe ? PI(this.Re) ? this.c.offsetHeight / 2 : this.c.offsetWidth / 2 : this.Tf, c)
    }
    ;
    var OI = function(a, b, c, d, e, f) {
        if (a.b) {
            var g = QI(b, c), m, n = a.b;
            m = AD(n);
            m = (PI(b) ? m.height / 2 : m.width / 2) - d;
            var p = II(n, g), r;
            if (r = tD(n))
                n = BD(n),
                n = new fD(n.top,n.left + n.width,n.top + n.height,n.left),
                PI(b) ? n.top < r.top && !(p & 1) ? m -= r.top - n.top : n.bottom > r.bottom && p & 1 && (m -= n.bottom - r.bottom) : n.left < r.left && !(p & 2) ? m -= r.left - n.left : n.right > r.right && p & 2 && (m -= n.right - r.right);
            m = PI(b) ? new M(a.zf,m) : new M(m,a.zf);
            p = PI(b) ? 6 : 9;
            r = b ^ 3;
            PI(b) && a.b.dir == Mu && (r = b);
            g = KI(a.b, QI(r, c), a.c, g, m, e, a.le ? p : 0, void 0, null);
            if (!f && g & 496) {
                OI(a, b ^ 3, c, d, e, !0);
                return
            }
            !a.B || g & 496 || (e = parseFloat(a.c.style.left),
            f = parseFloat(a.c.style.top),
            isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || oD(a.c, Math.round(e), Math.round(f)))
        }
        RI(a, b, c, d)
    }
      , RI = function(a, b, c, d) {
        var e = a.j;
        rA(a.o, function(a) {
            XB(e, a, !1)
        }, a);
        K(e, a.o[b]);
        e.style.top = e.style.left = e.style.right = e.style.bottom = k;
        a.b ? (c = vD(a.b, a.c),
        d = SI(a.b, b),
        PI(b) ? e.style.top = TI(c.y + d.y, a.c.offsetHeight - 15) + mu : e.style.left = TI(c.x + d.x, a.c.offsetWidth - 15) + mu) : e.style[0 == c ? PI(b) ? Zw : or : PI(b) ? Ij : Gu] = d + mu
    }
      , TI = function(a, b) {
        return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
    }
      , QI = function(a, b) {
        switch (a) {
        case 2:
            return 0 == b ? 1 : 3;
        case 1:
            return 0 == b ? 0 : 2;
        case 0:
            return 0 == b ? 6 : 7;
        default:
            return 0 == b ? 4 : 5
        }
    }
      , SI = function(a, b) {
        var c = 0
          , d = 0
          , e = AD(a);
        switch (b) {
        case 2:
            c = e.width / 2;
            break;
        case 1:
            c = e.width / 2;
            d = e.height;
            break;
        case 0:
            d = e.height / 2;
            break;
        case 3:
            c = e.width,
            d = e.height / 2
        }
        return new M(c,d)
    }
      , PI = function(a) {
        return 0 == a || 3 == a
    };
    var UI = function(a) {
        TD.call(this);
        this.b = a || iC()
    };
    G(UI, TD);
    UI.prototype.j = function() {
        NH(this.l(), Yw);
        OH(this.l(), vr, au)
    }
    ;
    var WI = function(a) {
        UI.call(this, a);
        this.a = this.b.a(nl, VI() + uc);
        this.c = this.b.a(nl, VI() + ec, this.b.a(nl, VI() + hc), this.b.a(nl, VI() + gc));
        this.g = this.b.a(nl, {
            "class": VI(),
            role: Yw
        }, this.a, this.c);
        this.j()
    };
    G(WI, UI);
    var VI = B("jfk-tooltip");
    WI.prototype.l = z(vm);
    WI.prototype.L = function() {
        this.g && CC(this.g)
    }
    ;
    var XI = function(a) {
        WI.call(this, a)
    };
    G(XI, WI);
    XI.prototype.j = function() {
        NH(this.l(), Yw)
    }
    ;
    var ZI = function(a, b) {
        YI(a, b, void 0)
    }
      , $I = function(a) {
        var b = a.getAttribute(Rw);
        b && YI(a, b)
    }
      , YI = function(a, b, c) {
        c || (c = b instanceof bB ? cB(b) : b);
        a.removeAttribute(Rw);
        a.removeAttribute(Jk);
        a.removeAttribute(Gk);
        b ? (b instanceof bB ? a.b = b : (a.setAttribute(Gk, b),
        a.b = null),
        a.setAttribute(Fi, c)) : (a.b = null,
        a.removeAttribute(Fi));
        a = iC(a) || iC();
        b = sz(a.b);
        aJ[b] || (aJ[b] = new bJ(a))
    }
      , cJ = function(a) {
        var b = k;
        switch (2) {
        case 0:
            b += gr;
            break;
        case 2:
            b += mw;
            break;
        case 3:
            b += su;
            break;
        default:
            b += Vi
        }
        b += Wb;
        switch (2) {
        case 0:
            b += gr;
            break;
        case 1:
            b += su;
            break;
        default:
            b += Oj
        }
        a.setAttribute(Hk, b)
    }
      , dJ = function(a) {
        var b = N(Io);
        a ? b.setAttribute(Nk, zx) : b.removeAttribute(Nk)
    }
      , aJ = {}
      , bJ = function(a) {
        EE.call(this);
        this.C = a;
        this.M = new EI(this.R,0,this);
        VD(this, this.M);
        var b = rC();
        this.w = oz(b.MutationObserver) ? new b.MutationObserver(F(this.J, this)) : null;
        a = a.b;
        this.a(a, [$r, Yr, w, nj, $D, br], this.I, !0);
        this.a(a, [as, hm, ZD], this.T, !0)
    };
    G(bJ, EE);
    bJ.prototype.L = function() {
        eJ(this);
        bJ.v.L.call(this)
    }
    ;
    var fJ = function(a, b) {
        switch (b.type) {
        case Yr:
        case as:
        case $r:
        case w:
            a.K = !1;
            break;
        case br:
            a.K = !0
        }
    };
    bJ.prototype.T = function(a) {
        this.w && this.w.disconnect();
        fJ(this, a);
        var b = a.target;
        a = a.type == hm || a.type == ZD;
        var c = this.c && JC(this.c.a, b);
        if (this.K || !a || c) {
            this.N = a;
            if (a = b && b.getAttribute && this.w)
                a = b.getAttribute(Iu) || null,
                a = jA(MH, a);
            a && (this.w.observe(b, {
                attributes: !0
            }),
            (a = QH(b)) && (b = a));
            this.j = b
        } else
            this.j = null;
        gJ(this)
    }
    ;
    bJ.prototype.I = function(a) {
        fJ(this, a);
        var b = a.target;
        a = a.type == Yr || a.type == w;
        b = this.c && JC(this.c.a, b);
        a && b || (this.j = null,
        gJ(this))
    }
    ;
    bJ.prototype.J = function(a) {
        cA(a, F(function(a) {
            var c = QH(a.target);
            c && a.attributeName == Ci && (this.j = c,
            gJ(this))
        }, this))
    }
    ;
    var gJ = function(a) {
        eJ(a);
        GI(a.M, a.g ? 50 : 300)
    }
      , eJ = function(a) {
        a.D && (vF(a.D),
        a.D = 0,
        a.g = null)
    };
    bJ.prototype.R = function() {
        if (!this.j)
            hJ(this),
            this.g = null;
        else if (!(this.g && this.c && JC(this.c.l(), this.j)) || this.g.getAttribute(Qk)) {
            var a = $C(this.j, function(a) {
                return a.getAttribute && (a.getAttribute(Jk) || a.getAttribute(Gk) || a.b) && !a.getAttribute(Nk)
            })
              , b = !1;
            this.g && this.g != a && (hJ(this),
            this.g = null,
            b = !0);
            if (!this.g && a && (this.g = a,
            iJ(this, a))) {
                var c = mB;
                if (a.getAttribute(Jk))
                    for (var d = lC(Vq, a), e = 0; e < d.length; e++) {
                        if (d[e].parentNode == a) {
                            c = d[e].cloneNode(!0);
                            break
                        }
                    }
                else
                    c = a.b ? a.b : fB(a.getAttribute(Gk));
                var d = a.getAttribute(Hk)
                  , e = a.getAttribute(Ik)
                  , f = a.getAttribute(Lk)
                  , f = Az(Uz(f)) ? -1 : Number(f);
                if (!b && (a = a.getAttribute(Kk),
                a = Math.max(0, a - 300))) {
                    this.D = uF(vz(this.F, this.g, c, d, f, e), a, this);
                    return
                }
                this.F(this.g, c, d, f, e)
            }
        }
    }
    ;
    var iJ = function(a, b) {
        return b.getAttribute(Mk) && b.offsetWidth >= b.scrollWidth && b.offsetHeight >= b.scrollHeight || a.N && Xr == b.getAttribute(Pk) ? !1 : !0
    }
      , jJ = function(a) {
        if (a)
            switch (a.toLowerCase().split(Wb)[0]) {
            case gr:
                return 0;
            case mw:
                return 2;
            case su:
                return 3
            }
        return 1
    };
    bJ.prototype.F = function(a, b, c, d, e) {
        this.D = 0;
        if (!this.c) {
            this.c = new XI(this.C);
            hJ(this);
            this.C.b.body.appendChild(this.c.l());
            VD(this, this.c);
            this.B = new MI(VI(),!0);
            this.B.le = !0;
            var f = this.B
              , g = this.c.c;
            f.c = this.c.l();
            f.j = g
        }
        a: {
            if (c)
                switch (c.toLowerCase().split(Wb)[1]) {
                case gr:
                    f = 0;
                    break a;
                case su:
                    f = 1;
                    break a
                }
            f = 2
        }
        NI(this.B, jJ(c), f, d);
        L(this.c.l(), Wq);
        this.A != e && (this.A && !Az(Uz(this.A)) && L(this.c.l(), this.A),
        Az(Uz(e)) || K(this.c.l(), e),
        this.A = e);
        oD(this.c.l(), 0, 0);
        if (b instanceof bB)
            fC(this.c.a, b);
        else
            for (zC(this.c.a); c = b.firstChild; )
                this.c.a.appendChild(c);
        this.B.b = a;
        this.B.a(null, 0)
    }
    ;
    var hJ = function(a) {
        a.c && K(a.c.l(), Wq)
    };
    var kJ = function(a, b, c, d) {
        DI.call(this, a, c || fI.O(), d);
        this.F = a;
        this.b = b || null
    };
    G(kJ, DI);
    kJ.prototype.ra = function(a) {
        kJ.v.ra.call(this, a);
        null != this.b && this.g(this.Ca() ? this.b : this.F)
    }
    ;
    var lJ = function(a, b, c, d, e) {
        kJ.call(this, a, c, d, e);
        this.J = b
    };
    G(lJ, kJ);
    lJ.prototype.ra = function(a) {
        lJ.v.ra.call(this, a);
        R(this.J, this.Ca())
    }
    ;
    var mJ = bz(vm);
    G(mJ, fI);
    mJ.prototype.Pa = function(a) {
        var b = a.a.a(nl, XH(this, a).join(l))
          , c = a.a.a(Cv)
          , d = a.a.a(Cv);
        this.g && K(b, this.g);
        K(b, Rq);
        d.className = Nq;
        c.className = Mq;
        b.appendChild(c);
        a.ya() ? (b.appendChild(d),
        this.xb(b, a.ya())) : K(b, Pq);
        return b
    }
    ;
    mJ.prototype.xb = function(a, b) {
        if (a) {
            var c = dz(a.lastElementChild) ? a.lastElementChild : EC(a.lastChild, !1);
            c && PC(c, b)
        }
    }
    ;
    mJ.prototype.S = B("jfk-button");
    mJ.prototype.P = function(a, b) {
        var c = a.a.a(Cv)
          , d = a.a.a(Cv);
        this.g && K(b, this.g);
        K(b, Rq);
        d.className = Nq;
        c.className = Mq;
        zC(b);
        b.appendChild(c);
        a.ya() ? (b.appendChild(d),
        this.xb(b, a.ya())) : K(b, Pq);
        return b = mJ.v.P.call(this, a, b)
    }
    ;
    var nJ = function(a, b) {
        this.g = a;
        this.j = b || !1
    };
    G(nJ, fI);
    nJ.prototype.Pa = function(a) {
        var b = a.a.a(nl, XH(this, a).join(l) + pa)
          , c = a.a.a(Cv);
        this.g && K(b, this.g);
        c.className = Mq;
        b.appendChild(c);
        a.ya() && this.xb(b, a.ya());
        return b
    }
    ;
    nJ.prototype.xb = function(a, b) {
        a && !this.j && (ZI(a, b),
        cJ(a))
    }
    ;
    nJ.prototype.S = B("goog-toolbar-button");
    nJ.prototype.P = function(a, b) {
        var c = a.a.a(Cv);
        this.g && K(b, this.g);
        c.className = Mq;
        zC(b);
        b.appendChild(c);
        a.ya() && this.xb(b, a.ya());
        return b = nJ.v.P.call(this, a, b)
    }
    ;
    var oJ = function(a) {
        return 32 >= a || 4096 <= a && (8192 <= a && 8198 >= a || 8200 <= a && 8203 >= a || 5760 == a || 6158 == a || 8232 == a || 8233 == a || 8287 == a || 12288 == a)
    }
      , rJ = function(a) {
        var b = pJ;
        if (15 > a.length)
            return a;
        for (var c = [], d = 0, e = 0, f = 0, g = 0, m = 0; m < a.length; m++) {
            var n = g
              , g = a.charCodeAt(m)
              , n = 768 <= g && !b(n, g, !0);
            15 <= d && !oJ(g) && !n && (c.push(a.substring(f, m), qJ),
            f = m,
            d = 0);
            e ? 62 == g && 60 == e ? e = 0 : 59 == g && 38 == e && (e = 0,
            d++) : 60 == g || 38 == g ? e = g : oJ(g) ? d = 0 : 8204 <= g && 8207 >= g || 8234 <= g && 8238 >= g || d++
        }
        c.push(a.substr(f));
        return c.join(k)
    }
      , pJ = function(a, b) {
        return 1024 <= b && 1315 > b
    }
      , sJ = I && J(8)
      , qJ = GB ? "<wbr></wbr>" : CB ? "&shy;" : sJ ? "&#8203;" : "<wbr>";
    var tJ = {}
      , uJ = {}
      , vJ = {}
      , wJ = function() {
        throw Error("Do not instantiate directly");
    };
    wJ.prototype.Xc = null;
    wJ.prototype.ya = z("content");
    wJ.prototype.toString = z("content");
    var xJ = function() {
        wJ.call(this)
    };
    G(xJ, wJ);
    var AJ = function(a, b) {
        var c = iC()
          , d = yJ(a(b || zJ, void 0, void 0));
        return wC(c.b, d)
    }
      , BJ = function(a, b, c, d) {
        a: if (a = a(b || zJ, void 0, c),
        d = (d || iC()).b.createElement(q),
        a = yJ(a),
        d.innerHTML = a,
        1 == d.childNodes.length && (a = d.firstChild,
        1 == a.nodeType)) {
            d = a;
            break a
        }
        return d
    }
      , yJ = function(a) {
        if (!pz(a))
            return String(a);
        if (a instanceof wJ) {
            if (a.Lb === tJ)
                return $z(a.ya());
            if (a.Lb === vJ)
                return Oz(a.ya())
        }
        return By
    }
      , zJ = {};
    var CJ = function(a) {
        if (null != a)
            switch (a.Xc) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
        return null
    }
      , DJ = function() {
        wJ.call(this)
    };
    G(DJ, wJ);
    DJ.prototype.Lb = tJ;
    var FJ = function(a) {
        return null != a && a.Lb === tJ ? a : a instanceof bB ? EJ(cB(a), a.oc()) : EJ(Oz(String(String(a))), CJ(a))
    }
      , GJ = function(a, b) {
        this.content = String(a);
        this.Xc = null != b ? b : null
    };
    G(GJ, xJ);
    GJ.prototype.Lb = vJ;
    var EJ = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.Xc = d);
            return e
        }
    }(DJ)
      , HJ = function(a, b) {
        return BJ(a, b, void 0, new gC(void 0))
    };
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = String(a);
            if (!e)
                return k;
            e = new b(e);
            void 0 !== d && (e.Xc = d);
            return e
        }
    })(DJ);
    var MJ = function(a) {
        null != a && a.Lb === tJ ? (a = a.ya(),
        a = String(a).replace(IJ, k).replace(JJ, wb),
        a = String(a).replace(KJ, LJ)) : a = Oz(String(a));
        return a
    }
      , OJ = function(a) {
        if (null != a && a.Lb === uJ)
            return a.ya().replace(/([^"'\s])$/, Ua);
        a = String(a);
        a = NJ.test(a) ? a : By;
        return a
    }
      , PJ = function(a) {
        return null != a && a.Lb === vJ ? (a.ya(),
        By) : a
    }
      , QJ = {
        "\x00": db,
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': Ab,
        "&": hb,
        "'": eb,
        "-": "&#45;",
        "/": "&#47;",
        "<": wb,
        "=": "&#61;",
        ">": sb,
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    }
      , LJ = function(a) {
        return QJ[a]
    }
      , KJ = /[\x00\x22\x27\x3c\x3e]/g
      , NJ = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i
      , IJ = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
      , JJ = /</g;
    var RJ = function(a) {
        return cf + FJ(a.Cf) + De
    }
      , SJ = function(a) {
        return df + FJ(a.Cf) + Ee
    }
      , TJ = function(a) {
        return af + FJ(a.Ui) + ve
    }
      , UJ = function(a) {
        return Ze + FJ(a.Hh) + Be + FJ(a.Ye) + qe
    }
      , VJ = B('<div class="gt-hats-t"><div class="gt-hats-x clear-button"><div class="jfk-button-img"></div></div><div class="gt-hats-tt"></div></div><div class="gt-hats-c"></div>')
      , WJ = function(a) {
        return Re + FJ(a.Ih) + ye + FJ(a.kd) + me
    }
      , XJ = B('<div class="gt-cc-t"><span class="gt-cc-tc"></span><span class="gt-cc-bc"></span></div><div class="gt-cc"><div class="gt-cc-l"><div class="gt-cc-l-i"></div><div class="gt-cc-exp" style="display:none"><div class="cd-exp-ar"></div></div></div><div class="gt-cc-r"><div class="gt-cc-r-i"></div></div></div>')
      , YJ = B('<div class="gt-cd-t"><div class="gt-cd-tl"></div><div class="gt-cd-tr"></div></div><div class="gt-cd-c"></div><div class="cd-expand-button"><span class="jfk-button-img"></span><span class="cd-expand-label"></span></div>')
      , ZJ = B('<span class="gt-ct-text"></span><span class="gt-ct-translit" style="display:none"></span><div class="gt-ct-tts goog-inline-block"></div>')
      , $J = function(a) {
        return Qe + FJ(a.uj) + Na + PJ(a.eh) + ue + FJ(a.Sf) + Qa + FJ(a.Lj) + Ie + FJ(a.xf) + Na + FJ(a.Oi) + oe
    }
      , aK = function(a) {
        var b = Oe + FJ(a.Sh) + Se + (a.fg ? Ne + FJ(a.fg) + Ge + FJ(a.Sf) + Pa : k);
        if (0 < a.hh.length) {
            for (var b = b + (Pe + FJ(a.xj) + ge), c = a.hh, d = c.length, e = 0; e < d; e++)
                for (var f = c[e], g = f.length, m = 0; m < g; m++)
                    var n = f[m]
                      , b = b + ((a.Qh ? gf + FJ(n) + He : jf + FJ(n) + He) + (m != g - 1 ? Xb : e != d - 1 ? je : k));
            b += pe
        }
        return b + pe
    }
      , bK = function(a) {
        return ff + FJ(a.label) + qe
    }
      , cK = B('<div class="gt-ee-container"></div>')
      , dK = function(a) {
        return Ke + FJ(a.xf) + Oa
    }
      , eK = function(a) {
        return $e + FJ(a.sj) + Fe + FJ(a.oh) + Ka + FJ(a.rj) + ha + FJ(a.oh) + Ja + FJ(a.url) + Ia
    };
    var fK = function(a) {
        var b;
        a = a || {};
        var c = EJ, d = ef + (a.id ? qa + MJ(a.id) + Ca : k) + ma, e, f;
        e = a || {};
        var g = Fm;
        switch (pz(f = e.style) ? f.toString() : f) {
        case 0:
            g += Rq;
            break;
        case 2:
            g += Hq;
            break;
        case 3:
            g += Qq;
            break;
        case 1:
            g += Kq;
            break;
        case 4:
            g += Lq;
            break;
        case 5:
            g += Oq;
            break;
        case 6:
            g += Jq;
            break;
        default:
            g += Rq
        }
        g += (1 == e.width ? ta : k) + (e.checked ? ra : k) + (e.Se ? l + e.Se : k) + (e.disabled ? sa : k);
        d = d + MJ(new GJ(g,void 0)) + Ca + (a.disabled ? la : za + (a.Nf ? MJ(a.Nf) : Fd) + Ca) + (a.title ? l + (a.Nj ? Gk : Rw) + nf + MJ(a.title) + Ca : k) + (a.value ? Ba + MJ(a.value) + Ca : k) + (a.attributes ? l + OJ(a.attributes) : k) + of;
        a = null == (b = a.content) ? k : b;
        b = FJ(a);
        return c(d + b + pe)
    };
    var hK = function(a, b, c, d) {
        AI.call(this, a, gK.O(), b);
        this.b = c || 0;
        this.F = d || 0;
        this.lb = !1
    };
    G(hK, AI);
    var jK = function(a, b) {
        a.b != b && (a.b = b,
        iK(a))
    };
    hK.prototype.ba = function(a) {
        this.isEnabled() != a && (hK.v.ba.call(this, a),
        iK(this))
    }
    ;
    hK.prototype.hc = function(a) {
        hK.v.hc.call(this, a);
        kK(this, !1)
    }
    ;
    hK.prototype.Ya = function(a) {
        hK.v.Ya.call(this, a);
        this.isEnabled() && kK(this, !0)
    }
    ;
    hK.prototype.gb = function(a) {
        hK.v.gb.call(this, a);
        this.isEnabled() && kK(this, !0)
    }
    ;
    var kK = function(a, b) {
        a.l() && XB(a.l(), Iq, b)
    }
      , iK = function(a) {
        a.l() && lK(a.c, a)
    }
      , gK = function() {
        this.C = this.S() + Uc;
        this.g = this.S() + cc;
        this.H = this.S() + Rc;
        this.B = this.S() + wc;
        this.w = this.S() + zc;
        this.A = this.S() + Nc;
        this.D = this.S() + Kc;
        this.o = this.S() + vc
    };
    G(gK, fI);
    hz(gK);
    C = gK.prototype;
    C.jc = function(a, b, c) {
        a && jK(c, a);
        b && c.F != b && (c.F = b,
        iK(c))
    }
    ;
    C.S = B("jfk-button");
    C.Pa = function(a) {
        var b = a.a
          , c = BJ(fK, {
            disabled: !a.isEnabled(),
            checked: a.Ca(),
            style: a.b,
            title: a.C,
            Nj: a.lb,
            value: a.U(),
            width: a.F
        }, void 0, b);
        b.ng(c, a.ya());
        this.P(a, c);
        return c
    }
    ;
    C.P = function(a, b) {
        gK.v.P.call(this, a, b);
        this.j || (this.j = BA(this.C, vz(this.jc, 0, null), this.g, vz(this.jc, 2, null), this.H, vz(this.jc, 3, null), this.B, vz(this.jc, 1, null), this.w, vz(this.jc, 4, null), this.D, vz(this.jc, 5, null), this.o, vz(this.jc, 6, null), this.A, vz(this.jc, null, 1)));
        for (var c = TB(b), d = 0; d < c.length; ++d) {
            var e = this.j[c[d]];
            e && e(a)
        }
        if (c = b.getAttribute(Gk))
            a.C = c,
            a.lb = !0;
        return b
    }
    ;
    C.U = function(a) {
        return a.getAttribute(fy) || k
    }
    ;
    C.Sd = function(a, b) {
        a && a.setAttribute(fy, b)
    }
    ;
    var lK = function(a, b) {
        function c(a, b) {
            (a ? d : e).push(b)
        }
        var d = []
          , e = []
          , f = b.b;
        c(0 == f, a.C);
        c(2 == f, a.g);
        c(3 == f, a.H);
        c(4 == f, a.w);
        c(5 == f, a.D);
        c(1 == f, a.B);
        c(6 == f, a.o);
        c(1 == b.F, a.A);
        c(!b.isEnabled(), a.S() + xc);
        WB(b.l(), e);
        VB(b.l(), d)
    };
    var mK = function() {
        this.g = [];
        this.b = {};
        this.a = {};
        this.j = !1;
        this.Df = 1;
        this.Wc = {};
        T(window, jj, this.w, !1, this)
    };
    hz(mK);
    var nK = function(a, b, c) {
        if (null == b)
            return Gd;
        switch (iz(b)) {
        case cw:
            return a = b,
            !(64 < a.length) || null != c && c || (a = a.substr(0, 64)),
            Ez(a);
        case xs:
            return k + b;
        case pj:
            return b ? Gd : Fd;
        case Ii:
            var d = [], e;
            for (e in b)
                d.push(nK(a, b[e], c));
            return d.join(Wb);
        case zs:
            d = [];
            for (e in b)
                d.push(oK(a, e, b[e], c));
            return d.join(Wb);
        default:
            return k
        }
    }
      , oK = function(a, b, c, d) {
        return [Ez(b), nK(a, c, d || b == rv)].join(mf)
    };
    mK.prototype.log = function(a, b, c) {
        this.g.push([a, b, c]);
        this.j || (this.j = !0,
        uF(this.o, 0, this))
    }
    ;
    var rK = function(a, b, c, d, e) {
        b = qd + oK(a, c, d) + cb + oK(a, fk, b, !0);
        e && (b += pK(a, e));
        qK(a, b)
    }
      , pK = function(a, b) {
        var c = k;
        dz(b) && rA(b, function(a, b) {
            if (a instanceof Array)
                for (var f = 0; f < a.length; f++)
                    c += cb + oK(this, b, a[f]);
            else
                c += cb + oK(this, b, a)
        }, a);
        return c
    };
    mK.prototype.o = function() {
        for (var a = 0; a < this.g.length; a++) {
            var b = this.g[a]
              , c = b[2]
              , c = c || k;
            qK(this, c + qd + oK(this, b[0], b[1]))
        }
        this.g = [];
        this.j = !1
    }
    ;
    var qK = function(a, b) {
        var c = new Image
          , d = a.Df++;
        a.Wc[d] = c;
        c.onload = c.onerror = function() {
            delete mK.O().Wc[d]
        }
        ;
        c.src = b;
        c = null
    }
      , tK = function(a, b, c, d) {
        var e = null;
        b in a.b && (e = a.b[b]);
        a.b[b] = sK(e, c, d)
    };
    mK.prototype.c = function(a, b, c, d, e) {
        uK(this, a, d, e);
        vF(this.a[a][0]);
        b = uF(F(this.B, this, a, c), b);
        this.a[a][0] = b
    }
    ;
    mK.prototype.B = function(a, b) {
        var c;
        c = b || k;
        qK(this, c + qd + oK(this, a, this.a[a][1]));
        vK(this, a)
    }
    ;
    var uK = function(a, b, c, d) {
        var e = 0
          , f = null;
        b in a.a && (f = a.a[b],
        e = f[0],
        f = f[1]);
        f = sK(f, c, d);
        a.a[b] = [e, f]
    }
      , wK = function(a, b, c) {
        null != b || (b = 1);
        c == $h ? (isNaN(a) && (a = parseInt(a, 10)),
        isNaN(b) && (b = parseInt(b, 10)),
        a += b) : a = b;
        return a
    }
      , sK = function(a, b, c) {
        if (iz(b) == zs) {
            iz(a) != zs && (a = {});
            for (var d in b)
                a[d] = wK(d in a ? a[d] : null, b[d], c)
        } else
            a = wK(a, b, c);
        return a
    }
      , vK = function(a, b) {
        b in a.a && (vF(a.a[b][0]),
        delete a.a[b])
    }
      , xK = function(a) {
        var b = [], c;
        for (c in a.b)
            b.push(oK(a, c, a.b[c]));
        a.b = {};
        return b.join(cb)
    };
    mK.prototype.w = function() {
        this.o();
        for (var a in this.a)
            0 != this.a[a] && this.B(a)
    }
    ;
    var yK = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, wf).replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, Nh).replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, k)))
            try {
                return eval(Mb + a + Pb)
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
      , zK = function(a) {
        return eval(Mb + a + Pb)
    }
      , CK = function(a) {
        var b = [];
        AK(new BK, a, b);
        return b.join(k)
    }
      , BK = az()
      , AK = function(a, b, c) {
        if (null == b)
            c.push(ws);
        else {
            if (typeof b == zs) {
                if (kz(b)) {
                    var d = b;
                    b = d.length;
                    c.push(Fh);
                    for (var e = k, f = 0; f < b; f++)
                        c.push(e),
                        AK(a, d[f], c),
                        e = Wb;
                    c.push(Nh);
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push(Iy);
                    e = k;
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (f = b[d],
                        typeof f != um && (c.push(e),
                        DK(d, c),
                        c.push(ee),
                        AK(a, f, c),
                        e = Wb));
                    c.push(My);
                    return
                }
            }
            switch (typeof b) {
            case cw:
                DK(b, c);
                break;
            case xs:
                c.push(isFinite(b) && !isNaN(b) ? String(b) : ws);
                break;
            case pj:
                c.push(String(b));
                break;
            case um:
                c.push(ws);
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
      , EK = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , FK = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g
      , DK = function(a, b) {
        b.push(Ca, a.replace(FK, function(a) {
            var b = EK[a];
            b || (b = Lh + (a.charCodeAt(0) | 65536).toString(16).substr(1),
            EK[a] = b);
            return b
        }), Ca)
    };
    var GK = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/
      , HK = function(a, b) {
        if (a)
            for (var c = a.split(cb), d = 0; d < c.length; d++) {
                var e = c[d].indexOf(mf)
                  , f = null
                  , g = null;
                0 <= e ? (f = c[d].substring(0, e),
                g = c[d].substring(e + 1)) : f = c[d];
                b(f, g ? Fz(g) : k)
            }
    }
      , IK = function(a, b, c) {
        if (kz(b))
            for (var d = 0; d < b.length; d++)
                IK(a, String(b[d]), c);
        else
            null != b && c.push(cb, a, b === k ? k : mf, Ez(b))
    }
      , JK = function(a) {
        var b = [], c;
        for (c in a)
            IK(c, a[c], b);
        b[0] = k;
        return b.join(k)
    }
      , KK = function(a, b) {
        zz(a, id) && (a = a.substr(0, a.length - 1));
        0 == b.lastIndexOf(id, 0) && (b = b.substr(1));
        return Vz(a, id, b)
    };
    var LK = az();
    LK.prototype.a = null;
    var NK = function(a) {
        var b;
        (b = a.a) || (b = {},
        MK(a) && (b[0] = !0,
        b[1] = !0),
        b = a.a = b);
        return b
    };
    var OK, PK = az();
    G(PK, LK);
    var QK = function(a) {
        return (a = MK(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
      , MK = function(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = [zg, yg, xg, Ag], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    };
    OK = new PK;
    var RK = function(a) {
        U.call(this);
        this.J = new rB;
        this.A = a || null;
        this.b = !1;
        this.D = this.a = null;
        this.w = this.N = this.g = k;
        this.c = this.C = this.B = this.H = !1;
        this.j = 0;
        this.o = null;
        this.F = k;
        this.K = this.R = !1
    };
    G(RK, U);
    var SK = /^https?$/i
      , TK = [Rg, "PUT"]
      , UK = []
      , WK = function(a, b, c, d, e, f) {
        var g = new RK;
        UK.push(g);
        b && kE(g.bb, pk, b, !1, void 0, void 0);
        kE(g.bb, tu, g.I, !0, void 0, void 0);
        f && (g.j = Math.max(0, f));
        VK(g, a, c, d, e)
    };
    RK.prototype.I = function() {
        this.xa();
        lA(UK, this)
    }
    ;
    var VK = function(a, b, c, d, e) {
        if (a.a)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + a.g + "; newUri=" + b);
        c = c ? c.toUpperCase() : gg;
        a.g = b;
        a.w = k;
        a.N = c;
        a.H = !1;
        a.b = !0;
        a.a = a.A ? QK(a.A) : QK(OK);
        a.D = a.A ? NK(a.A) : NK(OK);
        a.a.onreadystatechange = F(a.M, a);
        try {
            a.C = !0,
            a.a.open(c, String(b), !0),
            a.C = !1
        } catch (g) {
            XK(a, g);
            return
        }
        b = d || k;
        var f = a.J.clone();
        e && yB(e, function(a, b) {
            f.a(b, a)
        });
        e = iA(f.rb(), YK);
        d = E.FormData && b instanceof E.FormData;
        !jA(TK, c) || e || d || f.a(Rf, zi);
        f.forEach(function(a, b) {
            this.a.setRequestHeader(b, a)
        }, a);
        a.F && (a.a.responseType = a.F);
        uA(a.a) && (a.a.withCredentials = a.R);
        try {
            ZK(a),
            0 < a.j && (a.K = $K(a.a),
            a.K ? (a.a.timeout = a.j,
            a.a.ontimeout = F(a.ic, a)) : a.o = uF(a.ic, a.j, a)),
            a.B = !0,
            a.a.send(b),
            a.B = !1
        } catch (g) {
            XK(a, g)
        }
    }
      , $K = function(a) {
        return I && J(9) && nz(a.timeout) && dz(a.ontimeout)
    }
      , YK = function(a) {
        return rk == a.toLowerCase()
    };
    RK.prototype.ic = function() {
        "undefined" != typeof cz && this.a && (this.w = th + this.j + es,
        this.dispatchEvent(Pw),
        this.a && this.b && (this.b = !1,
        this.c = !0,
        this.a.abort(),
        this.c = !1,
        this.dispatchEvent(pk),
        this.dispatchEvent(Xh),
        aL(this)))
    }
    ;
    var XK = function(a, b) {
        a.b = !1;
        a.a && (a.c = !0,
        a.a.abort(),
        a.c = !1);
        a.w = b;
        bL(a);
        aL(a)
    }
      , bL = function(a) {
        a.H || (a.H = !0,
        a.dispatchEvent(pk),
        a.dispatchEvent(Pl))
    };
    RK.prototype.L = function() {
        this.a && (this.b && (this.b = !1,
        this.c = !0,
        this.a.abort(),
        this.c = !1),
        aL(this, !0));
        RK.v.L.call(this)
    }
    ;
    RK.prototype.M = function() {
        this.Ma || (this.C || this.B || this.c ? cL(this) : this.T())
    }
    ;
    RK.prototype.T = function() {
        cL(this)
    }
    ;
    var cL = function(a) {
        if (a.b && "undefined" != typeof cz && (!a.D[1] || 4 != dL(a) || 2 != eL(a)))
            if (a.B && 4 == dL(a))
                uF(a.M, 0, a);
            else if (a.dispatchEvent(uu),
            4 == dL(a)) {
                a.b = !1;
                try {
                    if (fL(a))
                        a.dispatchEvent(pk),
                        a.dispatchEvent(gw);
                    else {
                        var b;
                        try {
                            b = 2 < dL(a) ? a.a.statusText : k
                        } catch (c) {
                            b = k
                        }
                        a.w = b + ja + eL(a) + Nh;
                        bL(a)
                    }
                } finally {
                    aL(a)
                }
            }
    }
      , aL = function(a, b) {
        if (a.a) {
            ZK(a);
            var c = a.a
              , d = a.D[0] ? gz : null;
            a.a = null;
            a.D = null;
            b || a.dispatchEvent(tu);
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
      , ZK = function(a) {
        a.a && a.K && (a.a.ontimeout = null);
        nz(a.o) && (vF(a.o),
        a.o = null)
    }
      , fL = function(a) {
        var b = eL(a), c;
        a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            c = !0;
            break a;
        default:
            c = !1
        }
        if (!c) {
            if (b = 0 === b)
                a = String(a.g).match(GK)[1] || null,
                !a && E.self && E.self.location && (a = E.self.location.protocol,
                a = a.substr(0, a.length - 1)),
                b = !SK.test(a ? a.toLowerCase() : k);
            c = b
        }
        return c
    }
      , dL = function(a) {
        return a.a ? a.a.readyState : 0
    }
      , eL = function(a) {
        try {
            return 2 < dL(a) ? a.a.status : -1
        } catch (b) {
            return -1
        }
    }
      , gL = function(a) {
        try {
            return a.a ? a.a.responseText : k
        } catch (b) {
            return k
        }
    }
      , hL = function(a) {
        if (a.a)
            return yK(a.a.responseText)
    };
    var iL = function(a, b) {
        this.c = this.w = this.b = k;
        this.B = null;
        this.o = this.j = k;
        this.g = !1;
        var c;
        a instanceof iL ? (this.g = dz(b) ? b : a.g,
        jL(this, a.b),
        this.w = a.w,
        this.c = a.c,
        kL(this, a.B),
        this.j = a.j,
        lL(this, a.a.clone()),
        this.o = a.o) : a && (c = String(a).match(GK)) ? (this.g = !!b,
        jL(this, c[1] || k, !0),
        this.w = mL(c[2] || k),
        this.c = mL(c[3] || k, !0),
        kL(this, c[4]),
        this.j = mL(c[5] || k, !0),
        lL(this, c[6] || k, !0),
        this.o = mL(c[7] || k)) : (this.g = !!b,
        this.a = new nL(null,0,this.g))
    };
    iL.prototype.toString = function() {
        var a = []
          , b = this.b;
        b && a.push(oL(b, pL, !0), ee);
        var c = this.c;
        if (c || b == am)
            a.push(jd),
            (b = this.w) && a.push(oL(b, pL, !0), wf),
            a.push(Ez(c).replace(/%25([0-9a-fA-F]{2})/g, Xa)),
            c = this.B,
            null != c && a.push(ee, String(c));
        if (c = this.j)
            this.c && c.charAt(0) != id && a.push(id),
            a.push(oL(c, c.charAt(0) == id ? qL : rL, !0));
        (c = this.a.toString()) && a.push(tf, c);
        (c = this.o) && a.push(Sa, oL(c, sL));
        return a.join(k)
    }
    ;
    iL.prototype.clone = function() {
        return new iL(this)
    }
    ;
    var jL = function(a, b, c) {
        a.b = c ? mL(b, !0) : b;
        a.b && (a.b = a.b.replace(/:$/, k))
    }
      , kL = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.B = b
        } else
            a.B = null
    }
      , lL = function(a, b, c) {
        b instanceof nL ? (a.a = b,
        tL(a.a, a.g)) : (c || (b = oL(b, uL)),
        a.a = new nL(b,0,a.g))
    }
      , wL = function(a) {
        return vL(a.a, Ti)
    }
      , mL = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, Za)) : decodeURIComponent(a) : k
    }
      , oL = function(a, b, c) {
        return mz(a) ? (a = encodeURI(a).replace(b, xL),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, Xa)),
        a) : null
    }
      , xL = function(a) {
        a = a.charCodeAt(0);
        return Wa + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , pL = /[#\/\?@]/g
      , rL = /[\#\?:]/g
      , qL = /[\#\?]/g
      , uL = /[\#\?@]/g
      , sL = /#/g
      , nL = function(a, b, c) {
        this.c = this.a = null;
        this.b = a || null;
        this.j = !!c
    }
      , zL = function(a) {
        a.a || (a.a = new rB,
        a.c = 0,
        a.b && HK(a.b, function(b, c) {
            yL(a, Fz(b), c)
        }))
    }
      , yL = function(a, b, c) {
        zL(a);
        a.b = null;
        b = AL(a, b);
        var d = wB(a.a, b);
        d || a.a.a(b, d = []);
        d.push(c);
        a.c++
    }
      , BL = function(a, b) {
        zL(a);
        b = AL(a, b);
        uB(a.a, b) && (a.b = null,
        a.c -= wB(a.a, b).length,
        vB(a.a, b))
    };
    nL.prototype.clear = function() {
        this.a = this.b = null;
        this.c = 0
    }
    ;
    var CL = function(a, b) {
        zL(a);
        b = AL(a, b);
        return uB(a.a, b)
    };
    nL.prototype.rb = function() {
        zL(this);
        for (var a = this.a.Ta(), b = this.a.rb(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    nL.prototype.Ta = function(a) {
        zL(this);
        var b = [];
        if (mz(a))
            CL(this, a) && (b = mA(b, wB(this.a, AL(this, a))));
        else {
            a = this.a.Ta();
            for (var c = 0; c < a.length; c++)
                b = mA(b, a[c])
        }
        return b
    }
    ;
    var DL = function(a, b, c) {
        zL(a);
        a.b = null;
        b = AL(a, b);
        CL(a, b) && (a.c -= wB(a.a, b).length);
        a.a.a(b, [c]);
        a.c++
    }
      , vL = function(a, b) {
        var c = b ? a.Ta(b) : [];
        return 0 < c.length ? String(c[0]) : void 0
    }
      , EL = function(a, b, c) {
        BL(a, b);
        0 < c.length && (a.b = null,
        a.a.a(AL(a, b), nA(c)),
        a.c += c.length)
    };
    nL.prototype.toString = function() {
        if (this.b)
            return this.b;
        if (!this.a)
            return k;
        for (var a = [], b = this.a.rb(), c = 0; c < b.length; c++)
            for (var d = b[c], e = Ez(d), d = this.Ta(d), f = 0; f < d.length; f++) {
                var g = e;
                d[f] !== k && (g += mf + Ez(d[f]));
                a.push(g)
            }
        return this.b = a.join(cb)
    }
    ;
    nL.prototype.clone = function() {
        var a = new nL;
        a.b = this.b;
        this.a && (a.a = this.a.clone(),
        a.c = this.c);
        return a
    }
    ;
    var AL = function(a, b) {
        var c = String(b);
        a.j && (c = c.toLowerCase());
        return c
    }
      , tL = function(a, b) {
        b && !a.j && (zL(a),
        a.b = null,
        a.a.forEach(function(a, b) {
            var e = b.toLowerCase();
            b != e && (BL(this, b),
            EL(this, e, a))
        }, a));
        a.j = b
    };
    nL.prototype.g = function(a) {
        for (var b = 0; b < arguments.length; b++)
            yB(arguments[b], function(a, b) {
                yL(this, b, a)
            }, this)
    }
    ;
    var FL = null != window.MSG_HUMAN_TRANSLATION_ACTION
      , GL = null != window.INPUT_SUGGESTION_DESKTOP
      , HL = null != window.MSG_CHANGE_ITA
      , IL = null != window.KNOWLEDGE_PANEL
      , JL = null != window.MSG_HATS_TITLE
      , KL = null != window.MSG_SHOW_PB
      , LL = null != window.PHRASEBOOK_REORDERING
      , ML = null != window.MSG_SPEECH_INPUT_TURN_ON
      , NL = null != window.SK_WP
      , OL = null != window.TTS_PACE_CONTROL
      , PL = null != window.WEBFONT;
    var QL = function(a) {
        return function() {
            return a
        }
    }
      , RL = function(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2)
              , d = d >= t ? d.charCodeAt(0) - 87 : Number(d)
              , d = b.charAt(c + 1) == Tb ? a >>> d : a << d;
            a = b.charAt(c) == Tb ? a + d & 4294967295 : a ^ d
        }
        return a
    }
      , SL = null
      , TL = function(a) {
        var b;
        if (null === SL) {
            var c = QL(String.fromCharCode(84));
            b = QL(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            SL = Number(window[c.join(b())]) || 0
        }
        b = SL;
        var d = QL(String.fromCharCode(116))
          , c = QL(String.fromCharCode(107))
          , d = [d(), d()];
        d[1] = c();
        for (var c = cb + d.join(k) + mf, d = [], e = 0, f = 0; f < a.length; f++) {
            var g = a.charCodeAt(f);
            128 > g ? d[e++] = g : (2048 > g ? d[e++] = g >> 6 | 192 : (55296 == (g & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ? (g = 65536 + ((g & 1023) << 10) + (a.charCodeAt(++f) & 1023),
            d[e++] = g >> 18 | 240,
            d[e++] = g >> 12 & 63 | 128) : d[e++] = g >> 12 | 224,
            d[e++] = g >> 6 & 63 | 128),
            d[e++] = g & 63 | 128)
        }
        a = b || 0;
        for (e = 0; e < d.length; e++)
            a += d[e],
            a = RL(a, Vb);
        a = RL(a, Ub);
        0 > a && (a = (a & 2147483647) + 2147483648);
        a %= 1E6;
        return c + (a.toString() + dd + (a ^ b))
    };
    var UL = function(a, b) {
        this.b = a;
        this.a = k;
        b && (this.a = b);
        this.c = 0
    }
      , VL = function(a) {
        a = a.Ta(nu).join(k);
        return TL(a)
    }
      , WL = function(a, b, c, d, e) {
        c = c.toString();
        c += VL(d);
        d = d.toString();
        var f = Rg;
        b += tf + c;
        2E3 > b.length + d.length && (f = gg,
        b += cb + d,
        d = k);
        ++a.c;
        WK(b, function(b) {
            --a.c;
            e(b)
        }, f, d, void 0, 1E4)
    }
      , XL = function(a, b, c, d, e, f, g, m, n) {
        var p = a.a + Ad
          , r = new nL
          , u = new nL;
        window.EGGS_JANGO && (b == ou && (DL(r, pv, ou),
        b = x),
        c == ou && (DL(r, Ww, ou),
        c = x));
        DL(r, fk, a.b);
        DL(r, mv, b);
        DL(r, Sw, c);
        DL(r, Kp, d);
        EL(r, vl, f);
        null != m && (DL(r, fq, m),
        DL(r, As, m));
        n && r.g(n);
        DL(u, nu, e);
        WL(a, p, r, u, F(a.g, a, g))
    }
      , YL = function(a, b, c, d, e, f, g, m, n) {
        var p = [bj, Rl, mr, Or, pu, Nu, Hu, Qv, mw];
        g && (p = [bj, Rl, mr, Or, qu, Nu, Hu, Qv, mw]);
        a.b == mw && p.push(Ki);
        IL && p.push(fr);
        XL(a, b, c, d, e, p, f, m, n)
    };
    UL.prototype.o = function(a, b) {
        var c = b.target;
        ZL(c) && (gL(c),
        c = $L(c, wp),
        c = new MG(c),
        0 < kH(c) && a($G(lH(c, 0))))
    }
    ;
    UL.prototype.g = function(a, b) {
        var c = b.target;
        ZL(c) ? (c = $L(c, up),
        kz(c) && (c = new MG(c)),
        a(c)) : (aM(c),
        a(null))
    }
    ;
    UL.prototype.j = function(a, b, c) {
        c = c.target;
        if (fL(c)) {
            c = $L(c, vp);
            var d = [];
            if (a)
                d.push(kz(c) ? c[0] : c);
            else if (kz(c))
                for (a = 0; a < c.length; ++a)
                    d.push(kz(c[a]) ? c[a][0] : c[a]);
            b(d)
        } else
            aM(c),
            b(null)
    }
    ;
    var $L = function(a, b) {
        var c;
        var d = gL(a)
          , e = {
            "class": qx,
            func: b,
            url: String(a.g)
        };
        try {
            c = zK(d)
        } catch (f) {
            throw c = mK.O(),
            e.js = d,
            e.error = f.message,
            c.log(Yq, e),
            f;
        }
        return c
    }
      , ZL = function(a) {
        return fL(a) && (gL(a)[0] == Fh || gL(a)[0] == Iy)
    }
      , aM = function(a) {
        var b = mK.O()
          , c = String(a.g);
        a = gL(a);
        b.log(rq, {
            q: c.substring(0, 500),
            ql: c.length,
            r: a.substring(0, 500),
            rl: a.length
        })
    };
    UL.prototype.B = z(Oj);
    var bM = function(a, b) {
        W.call(this);
        this.W = b;
        this.w = a;
        this.Dd = this.text = this.j = this.g = k;
        this.data = null;
        this.Ua = mK.O()
    };
    G(bM, W);
    C = bM.prototype;
    C.update = function(a, b, c, d) {
        this.text = a;
        this.g = b;
        this.j = c;
        this.data = d;
        this.setVisible(!1);
        return !1
    }
    ;
    C.setVisible = function(a) {
        var b = this.l();
        b && R(b, a)
    }
    ;
    C.isVisible = function() {
        var a = this.l();
        return a ? DD(a) : !1
    }
    ;
    C.lg = function() {
        return {}
    }
    ;
    C.Sa = z("W");
    C.log = function(a, b) {
        var c = {};
        c.dt = this.W;
        c.sl = this.g;
        c.tl = this.j;
        c.hl = this.w;
        c.q = this.text;
        c.e = a;
        null != b && AA(c, b);
        AA(c, this.lg());
        this.Ua.log(rr, c);
        var c = this.g
          , d = this.j;
        window.__gaTracker && (__gaTracker(bv, $k, this.w),
        __gaTracker(bv, al, c + Ky + d),
        __gaTracker(bv, bl, c),
        __gaTracker(bv, cl, d));
        window.__gaTracker && __gaTracker($u, Ql, rr, this.W + ee + a, k, 1)
    }
    ;
    var cM = function(a, b, c, d) {
        bM.call(this, a, b);
        this.C = this.b = null;
        this.R = c;
        this.Va = d;
        this.T = this.A = null;
        this.J = !1;
        this.X = Cg;
        this.Yc = !1;
        this.aa = ug;
        this.qa = [];
        this.Ne = !1
    };
    G(cM, bM);
    C = cM.prototype;
    C.na = function() {
        cM.v.na.call(this);
        this.Y(document.createElement(q))
    }
    ;
    C.Y = function(a) {
        cM.v.Y.call(this, a);
        K(this.l(), En);
        K(this.l(), Fn + this.W);
        this.l().appendChild(AJ(YJ));
        this.C = O(Kn, this.l());
        this.b = O(Hn, this.l());
        this.A = O(Vj, this.l());
        this.T = O(Wj, this.l());
        R(this.A, !1)
    }
    ;
    C.update = function(a, b, c, d) {
        cM.v.update.call(this, a, b, c, d);
        this.J = this.Yc = !1;
        CC(null);
        R(this.A, !1);
        L(this.A, mk);
        dM(this, a);
        return !1
    }
    ;
    C.V = function() {
        cM.v.V.call(this);
        X(this).a(this.A, w, this.Aj, !1);
        X(this).a(this, t, F(this.Pg, this, hk), !1);
        X(this).a(this, Vi, F(this.Pg, this, ik), !1)
    }
    ;
    C.Aj = function() {
        this.J = !this.J;
        this.I(this.J);
        this.J ? (K(this.A, mk),
        PC(this.T, this.aa),
        this.log(Tl)) : (L(this.A, mk),
        PC(this.T, this.X),
        this.log(mk))
    }
    ;
    C.Pg = function(a, b) {
        var c = YC(b.target);
        this.log(a, {
            clk: c
        })
    }
    ;
    C.Kf = function() {
        this.C && PC(this.C, this.Va)
    }
    ;
    var dM = function(a, b) {
        var c = P(q)
          , d = a.R.indexOf(Ya);
        if (-1 != d) {
            var e = a.R.slice(0, d)
              , d = a.R.slice(d + 4, a.R.length);
            e && yC(c, e);
            e = P(Zg, {
                "class": wn
            });
            Q(e, el, FA(a.g) ? Mu : Br);
            PC(e, b);
            c.appendChild(e);
            d && yC(c, d);
            a.C && (zC(a.C),
            a.C.appendChild(c))
        } else
            a.Kf()
    }
      , eM = function(a, b, c) {
        a.Yc = !0;
        R(a.A, !0);
        null != b && (a.X = b);
        null != c && (a.aa = c);
        PC(a.T, a.X)
    };
    cM.prototype.I = function(a) {
        for (var b, c, d = lC(un, this.l()), e = 0; e < d.length; e++) {
            b = d[e];
            c = b.firstChild;
            var f = MD(c, Gr);
            c = AD(c).height + f.top + f.bottom;
            Q(b, Mr, a ? c + mu : 0)
        }
    }
    ;
    var fM = function(a, b) {
        return b ? a : P(q, {
            "class": un
        }, a)
    };
    var gM = function(a, b, c, d, e) {
        var f = bj;
        null != d && d && (f = Fr + f);
        cM.call(this, a, f, MSG_TRANSLATIONS_OF, k);
        this.Ab = c && !d ? dn : cn;
        this.wa = c && !d ? Wm : null;
        this.F = null;
        this.Z = !1;
        this.lb = c;
        this.c = null != d ? d : !1;
        this.Da = null != e ? e : !0;
        this.N = {};
        this.N[1] = b[2];
        this.N[2] = b[1];
        this.N[3] = b[0];
        this.Ba = b[3].replace(Ya, bb)
    };
    G(gM, cM);
    gM.prototype.update = function(a, b, c, d) {
        gM.v.update.call(this, a, b, c, d);
        if (!d || 0 == Z(d.a, 1))
            return !1;
        zC(this.b);
        this.F = new uH(d);
        hM(this, this.F);
        if (this.c)
            a = P(q);
        else {
            a = P(nh);
            var e = P(mh, {
                "class": ln
            }, a)
        }
        b = this.F.a;
        for (c = 0; c < b.length; c++) {
            var f = b[c], g;
            var m = f;
            g = m.visible();
            var n = m.c
              , p = m.g
              , m = P(q, {
                "class": Zm
            });
            n && (this.Dd = n,
            dM(this, n));
            p !== k && (n = P(Zg, {
                "class": Jn
            }, p),
            m.appendChild(n));
            g = fM(m, g);
            this.c ? g = P(q, null, g) : (g = P(oh, {
                colspan: 4
            }, g),
            g = P(rh, null, g));
            a.appendChild(g);
            if (this.c) {
                var r = P(q, jn);
                c != b.length - 1 && null != b[c + 1] && b[c + 1].visible() && Q(r, Hr, Td);
                a.appendChild(r)
            }
            f = f.a;
            for (n = g = 0; n < f.length; n++) {
                m = f[n];
                if (!this.c && this.F.b && 0 < n) {
                    var p = a, u;
                    u = m.visible();
                    var A = P(q, {
                        "class": an
                    });
                    u = fM(A, u);
                    this.c || (u = P(oh, {
                        colspan: 4
                    }, u),
                    u = P(rh, null, u));
                    p.appendChild(u)
                }
                m = m.a;
                for (p = 0; p < m.length; p++) {
                    A = m[p];
                    u = YG(lH(d, 0));
                    for (var D = A, V = g, A = D.text, Y = D.c, rb = void 0, $a = D.g, rb = [], oa = 0; oa < $a.length; oa++) {
                        var gb = P(Zg, null, $a[oa]);
                        null != this.wa && K(gb, this.wa);
                        rb.push(gb);
                        oa < $a.length - 1 && rb.push(vC(Xb))
                    }
                    $a = D.visible;
                    oa = void 0;
                    oa = D.b;
                    if (this.Z && this.Da) {
                        var Ha = oa
                          , oa = $a
                          , gb = P(q, {
                            "class": Ym,
                            title: this.N[Ha]
                        })
                          , Ha = TF(ty, 8 * Ha)
                          , Ha = P(q, {
                            "class": en,
                            style: Ha
                        });
                        gb.appendChild(Ha);
                        oa = fM(gb, oa)
                    } else
                        oa = P(q, {
                            "class": Xm
                        }),
                        oa = fM(oa, $a);
                    oa = P(oh, null, oa);
                    gb = null;
                    Y && (gb = this.c ? !0 : $a,
                    Ha = void 0,
                    Ha = P(this.c ? Zg : q, {
                        "class": $m
                    }),
                    this.c && K(Ha, kn),
                    PC(Ha, Y),
                    gb = fM(Ha, gb),
                    gb = this.c ? gb : P(oh, null, gb));
                    Ha = void 0;
                    Ha = this.c ? !0 : $a;
                    if (FA(this.j) != FA(this.w))
                        var Rj = TF(fl, FA(this.j) ? Mu : Br);
                    var sf = P(this.c ? Zg : q, this.Ab, A)
                      , sf = fM(sf, Ha);
                    Ha || K(sf, xn);
                    Ha = this.c ? sf : P(oh, Y ? null : {
                        colspan: 2,
                        style: Rj
                    }, sf);
                    Y = void 0;
                    if (FA(this.g) != FA(this.w))
                        var Jr = TF(fl, FA(this.g) ? Mu : Br);
                    Y = P(q, {
                        "class": bn,
                        style: Jr
                    }, rb);
                    this.c && K(Y, nn);
                    Y = fM(Y, $a);
                    Y = this.c ? Y : P(oh, {
                        style: uy
                    }, Y);
                    if (this.c) {
                        V = P(Zg, k, gb, Ha);
                        if (FA(this.j) != FA(this.w))
                            var Rm = TF(fl, FA(this.j) ? Mu : Br);
                        $a = P(q, {
                            "class": Xm,
                            style: Rm
                        }, V);
                        D = fM($a, D.visible);
                        $a = this.lb && this.c ? P(q, gn) : P(q, fn);
                        $a.appendChild(D);
                        $a.appendChild(Y);
                        Q(V, Xs, Vd);
                        A == u && K(V, qn);
                        u = $a
                    } else
                        u = P(rh, null, oa, gb, Ha, Y),
                        FA(this.g) != FA(this.w) && 1 == V % 2 && K(u, mn);
                    this.c ? r.appendChild(u) : a.appendChild(u);
                    g++
                }
            }
            this.c ? this.b.appendChild(a) : this.b.appendChild(e);
            0 < vH(this.F) && (f = TF(this.Ba, vH(this.F)),
            eM(this, f, MSG_FEWER_TRANSLATIONS_LABEL))
        }
        this.setVisible(!0);
        return !0
    }
    ;
    gM.prototype.V = function() {
        gM.v.V.call(this);
        K(this.l(), Gn);
        X(this).a(this.l(), w, this.mb);
        X(this).a(this.l(), as, this.La);
        X(this).a(this.l(), $r, this.Ia)
    }
    ;
    var hM = function(a, b) {
        var c = wH(b)
          , c = c.sort(function(a, b) {
            return b.a - a.a
        })
          , d = 0;
        a.Z = !1;
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            -1 < f.a && (a.Z = !0);
            f.b = .05 <= f.a ? 3 : .0025 <= f.a ? 2 : 1;
            f.visible = 12 > e || 3 == f.b;
            d += f.visible ? 0 : 1
        }
        if (4 >= d)
            for (e = 0; e < c.length; e++)
                c[e].visible = !0;
        b.b && xH(b)
    };
    gM.prototype.I = function(a) {
        gM.v.I.call(this, a);
        for (var b = lC(xn, this.l()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = O(Xm, d)
              , f = MD(e, Gr)
              , e = e.scrollWidth + f.left + f.right + 1;
            Q(d, Nr, a ? e + mu : 0)
        }
    }
    ;
    gM.prototype.mb = function(a) {
        var b;
        b = aD(a.target);
        null != b ? (a = O(on, b),
        null != a && this.dispatchEvent(new S(Vi,a))) : UB(a.target, pn) ? this.dispatchEvent(new S(Vi,a.target)) : UB(a.target, Wm) && this.dispatchEvent(new S(t,a.target))
    }
    ;
    gM.prototype.La = function(a) {
        if (UB(a.target, Wm)) {
            var b = kC(null, Wm, this.l());
            a = YC(a.target);
            for (var c = 0; c < b.length; c++)
                YC(b[c]) == a && K(b[c], hn)
        }
    }
    ;
    gM.prototype.Ia = function() {
        for (var a = kC(null, hn, this.l()), b = 0; b < a.length; b++)
            L(a[b], hn)
    }
    ;
    var iM = function(a, b, c, d) {
        this.text = a;
        this.a = b;
        this.b = c;
        this.data = d
    }
      , jM = function(a, b, c, d) {
        this.g = a;
        this.c = b;
        this.o = c;
        this.j = d;
        this.a = [];
        this.b = -1;
        T(this.g, v, this.fj, !1, this);
        T(this.c, v, this.Ti, !1, this);
        T(this.o, v, this.Ph, !1, this)
    };
    C = jM.prototype;
    C.push = function(a, b, c, d) {
        this.a.splice(++this.b);
        this.a.push(new iM(a,b,c,d));
        kM(this)
    }
    ;
    C.reset = function() {
        this.a = [];
        this.b = -1
    }
    ;
    C.fj = function() {
        0 < this.b && (--this.b,
        kM(this));
        mK.O().log(Er)
    }
    ;
    C.Ti = function() {
        this.b < this.a.length - 1 && (++this.b,
        kM(this));
        mK.O().log(Dr)
    }
    ;
    C.Ph = function() {
        1 < this.a.length && (this.a.splice(1),
        this.b = 0,
        kM(this));
        mK.O().log(Cr)
    }
    ;
    var kM = function(a) {
        var b = a.a[a.b];
        a.j.update(b.text, b.a, b.b, b.data);
        a.g.ba(1 < a.b);
        a.c.ba(a.b < a.a.length - 1)
    };
    var lM = !1
      , mM = function(a) {
        if (a = a.match(/[\d]+/g))
            a.length = 3
    };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins[ah];
            if (a && (lM = !0,
            a.description)) {
                mM(a.description);
                return
            }
            if (navigator.plugins[bh]) {
                lM = !0;
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (lM = (a = navigator.mimeTypes[xi]) && a.enabledPlugin)) {
            mM(a.enabledPlugin.description);
            return
        }
        try {
            var b = new ActiveXObject(eh);
            lM = !0;
            mM(b.GetVariable(Va));
            return
        } catch (c) {}
        try {
            b = new ActiveXObject(dh);
            lM = !0;
            return
        } catch (c) {}
        try {
            b = new ActiveXObject(ch),
            lM = !0,
            mM(b.GetVariable(Va))
        } catch (c) {}
    })();
    var nM = lM;
    var oM = function() {
        this.b = 0;
        this.a = []
    };
    hz(oM);
    oM.prototype.c = function(a) {
        var b = new Image
          , c = this.b++;
        this.a[c] = b;
        b.onload = b.onerror = function() {
            delete oM.O().a[c]
        }
        ;
        b.src = a;
        b = null
    }
    ;
    var pM = function() {
        U.call(this);
        this.url = k
    };
    G(pM, U);
    pM.prototype.Sc = function() {
        this.dispatchEvent(new qM(this.url))
    }
    ;
    pM.prototype.play = bz(cy);
    pM.prototype.c = function() {
        this.dispatchEvent(new rM(this.url))
    }
    ;
    var sM = function(a) {
        S.call(this, vv);
        this.url = a
    };
    G(sM, S);
    var tM = function(a) {
        S.call(this, tv);
        this.url = a
    };
    G(tM, S);
    var qM = function(a) {
        S.call(this, uv);
        this.url = a
    };
    G(qM, S);
    var rM = function(a) {
        S.call(this, sv);
        this.url = a
    };
    G(rM, S);
    var uM = function() {
        pM.call(this);
        this.o = Audio;
        this.a = new this.o;
        this.b = {}
    };
    G(uM, pM);
    uM.prototype.Pf = function() {
        return !this.a.paused
    }
    ;
    uM.prototype.Sc = function() {
        uM.v.Sc.call(this);
        this.a.pause()
    }
    ;
    uM.prototype.play = function(a) {
        uM.v.play.call(this, a);
        vM(this, this.a);
        this.a = null;
        null != this.b[a] ? (this.a = this.b[a],
        this.b[a] = null,
        this.a.play()) : (this.a = wM(this, a),
        this.a.autoplay = !0)
    }
    ;
    uM.prototype.rh = function(a) {
        E.setTimeout(F(this.B, this, a), 1E3)
    }
    ;
    var wM = function(a, b) {
        var c = new a.o;
        c.setAttribute(Kv, b);
        T(c, Zt, a.j, !1, a);
        T(c, Ml, a.g, !1, a);
        T(c, Pl, a.c, !1, a);
        c.load();
        return c
    }
      , vM = function(a, b) {
        yE(b, Zt, a.j);
        yE(b, Ml, a.g)
    };
    uM.prototype.B = function(a) {
        null != this.b[a] && (vM(this, this.b[a]),
        this.b[a] = null);
        this.b[a] = wM(this, a)
    }
    ;
    uM.prototype.j = function() {
        yE(this.a, Zt, this.j);
        this.dispatchEvent(new sM(this.url))
    }
    ;
    uM.prototype.g = function() {
        yE(this.a, Ml, this.g);
        this.dispatchEvent(new tM(this.url))
    }
    ;
    var xM = function(a) {
        pM.call(this);
        this.a = a;
        this.b = !1
    };
    G(xM, pM);
    C = xM.prototype;
    C.Pf = z(Vi);
    C.Sc = function() {
        this.b = !1;
        null != this.a.stopPlayingSound && this.a.stopPlayingSound();
        yM();
        xM.v.Sc.call(this)
    }
    ;
    C.play = function(a) {
        xM.v.play.call(this, a);
        E.setTimeout(F(this.jj, this), 0)
    }
    ;
    C.jj = function() {
        this.b = !0;
        var a = F(this.Bj, this);
        E.SoundStopCB_ = a;
        null != this.a.setSoundStopCB && this.a.setSoundStopCB(gh);
        try {
            if (null != this.a.setSound)
                this.a.setSound(this.ph());
            else {
                this.b = !1;
                yM();
                this.c();
                return
            }
            var b = F(this.ph, this);
            E._TTSSoundFile = b
        } catch (c) {
            this.b = !1;
            yM();
            this.c();
            return
        }
        null != this.a.startPlayingSound ? this.a.startPlayingSound() : (this.b = !1,
        yM(),
        this.c())
    }
    ;
    C.rh = function(a) {
        var b = oM.O();
        E.setTimeout(F(b.c, b, a), 1E3)
    }
    ;
    C.ph = function() {
        return this.url.substring(1)
    }
    ;
    C.Bj = function() {
        this.b = !1;
        yM();
        this.dispatchEvent(new tM(this.url))
    }
    ;
    var yM = function() {
        E.SoundStopCB_ = null
    }
      , zM = function() {
        this.a = k;
        this.b = null;
        this.g = !1;
        this.c = null
    };
    hz(zM);
    var AM = function(a) {
        try {
            var b = P(Ni);
            return null != b && null != b.canPlayType && null != b.load && null != b.play && null != b.paused && null != b.pause && qs != b.canPlayType(a) && k != b.canPlayType(a)
        } catch (c) {
            return !1
        }
    };
    var BM = function(a, b) {
        U.call(this);
        this.D = b;
        this.B = zM.O();
        this.B.a = a;
        this.B.c = b;
        var c = this.B;
        if (null != c.a && 0 != c.a.length) {
            var d = N(c.a)
              , e = k;
            if (!c.g && (AM(Oi) ? (c.b = new uM,
            e = Pp) : null != d && d.tagName == Lg && nM ? (c.b = new xM(d),
            e = gm) : (c.b = null,
            e = us),
            c.g = !0,
            d = e,
            !c.j && c.c)) {
                c.j = !0;
                var e = AM(Oi) ? 1 : 0, f = AM(Pi) ? 1 : 0, g = AM(Qi) ? 1 : 0, m;
                a: {
                    try {
                        var n = P(Ni);
                        if (null != n && null != n.volume) {
                            m = n.volume;
                            break a
                        }
                    } catch (p) {}
                    m = -1
                }
                c.c.log(Ex, {
                    mp3: e,
                    ogg: f,
                    wav: g,
                    vol: m,
                    type: d
                })
            }
        }
        this.a = c.b;
        this.j = null;
        this.b = 0;
        this.c = {};
        this.g = 0;
        this.o = !1
    };
    G(BM, U);
    var FM = function(a) {
        if (a.j && a.a.Pf()) {
            var b = yA(a.c);
            b.idx = a.b;
            b.time = (new Date).getTime() - a.g;
            CM(a, Kx, b);
            DM(a);
            a.a.Sc();
            a.dispatchEvent(new EM)
        }
    }
      , DM = function(a) {
        a.b = 0;
        a.o = !1;
        yE(a.a, vv, a.C, !1, a);
        yE(a.a, tv, a.H, !1, a);
        yE(a.a, uv, a.w, !1, a);
        yE(a.a, sv, a.A, !1, a)
    }
      , CM = function(a, b, c) {
        a.D && a.D.log(b, c)
    };
    BM.prototype.C = function() {
        if (!this.o) {
            this.dispatchEvent(new GM);
            var a = yA(this.c);
            a.idx = this.b;
            a.time = (new Date).getTime() - this.g;
            CM(this, Ix, a);
            this.o = !0
        }
    }
    ;
    BM.prototype.H = function() {
        this.b += 1;
        if (this.b < this.j.length)
            this.a.play(this.j[this.b]),
            HM(this);
        else {
            this.dispatchEvent(new EM);
            DM(this);
            var a = yA(this.c);
            a.idx = this.b;
            a.time = (new Date).getTime() - this.g;
            CM(this, Gx, a)
        }
    }
    ;
    BM.prototype.w = function() {
        var a = yA(this.c);
        a.idx = this.b;
        a.time = (new Date).getTime() - this.g;
        CM(this, Hx, a);
        this.dispatchEvent(new EM);
        DM(this)
    }
    ;
    BM.prototype.A = function() {
        var a = yA(this.c);
        a.idx = this.b;
        a.time = (new Date).getTime() - this.g;
        CM(this, Fx, a);
        this.dispatchEvent(new EM);
        DM(this)
    }
    ;
    var HM = function(a) {
        var b = a.j[a.b + 1];
        null != b && a.a.rh(b)
    }
      , GM = function() {
        S.call(this, $t)
    };
    G(GM, S);
    var EM = function() {
        S.call(this, bw)
    };
    G(EM, S);
    var IM = bz(t);
    IM.prototype.j = function(a, b, c) {
        JM(a, b, c, F(this.c, this), F(this.g, this))
    }
    ;
    var JM = function(a, b, c, d, e) {
        var f = [];
        d(f, b);
        b = k;
        for (d = 0; d < f.length; d++) {
            var g = Dz(b + f[d]);
            g.length <= c ? b += f[d] : (Az(b) || (a.push(Dz(b)),
            b = k),
            g = Dz(f[d]),
            g.length <= c ? b = f[d] : e(a, g, c))
        }
        Az(b) || a.push(Dz(b))
    };
    IM.prototype.g = function(a, b, c) {
        for (var d = 0; d < b.length; d += c)
            a.push(b.substr(d, c))
    }
    ;
    var KM = RegExp(l, vm)
      , LM = RegExp("([?.,;:!][ ]+)|([\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f][ ]?)", vm);
    IM.prototype.c = function(a, b) {
        MM(a, b, KM)
    }
    ;
    IM.prototype.b = function(a, b) {
        MM(a, b, LM);
        for (var c = 0; c < a.length; c++) {
            var d = {
                length: a[c].length
            };
            this.a && this.a.log(Bw, d)
        }
    }
    ;
    var MM = function(a, b, c) {
        for (var d = 0; c.test(b); ) {
            var e = c.lastIndex;
            e > d && a.push(b.substr(d, e - d));
            d = e
        }
        b.length > d && a.push(b.substr(d))
    };
    var NM = [0, 200, 80, 50]
      , OM = {
        ar: 1,
        zh: 1,
        "zh-cn": 1,
        "zh-tw": 1,
        en: 1,
        fr: 1,
        de: 1,
        it: 1,
        ja: 1,
        ko: 1,
        la: 1,
        pt: 1,
        es: 1,
        af: 1,
        sq: 1,
        hy: 1,
        bs: 1,
        ca: 1,
        hr: 1,
        cs: 1,
        da: 1,
        nl: 1,
        eo: 1,
        fi: 1,
        el: 1,
        ht: 1,
        hi: 1,
        hu: 1,
        is: 1,
        id: 1,
        ku: 1,
        lv: 1,
        mk: 1,
        no: 1,
        pl: 1,
        ro: 1,
        ru: 1,
        sr: 1,
        sk: 1,
        sw: 1,
        sv: 1,
        ta: 1,
        th: 1,
        tr: 1,
        vi: 1,
        cy: 1
    };
    var PM = function(a, b, c) {
        TD.call(this);
        this.j = a;
        this.I = new IM(mK.O());
        this.J = b;
        this.D = this.K = this.c = this.g = k;
        this.C = 0;
        this.A = !1;
        this.a = new BM(Dx,mK.O());
        this.M = null != this.a.a;
        this.o = OF || NF;
        T(this.a, bw, this.w, !1, this);
        T(this.j, v, this.F, !1, this);
        this.H = (a = /(sa=[^#&]+)/.exec(window.location.href)) ? a[0] : null;
        this.B = (a = /ttsspeed=([^&]+)/.exec(window.location.href)) ? a[0] : null;
        this.b = 0;
        this.N = !!c
    };
    G(PM, TD);
    PM.prototype.L = function() {
        PM.v.L.call(this);
        yE(this.a, bw, this.w, !1, this);
        yE(this.j, v, this.F, !1, this)
    }
    ;
    PM.prototype.w = function() {
        this.j.ra(!1)
    }
    ;
    var QM = function(a, b, c, d, e, f) {
        return Vz(Ed, Ez(b), Gb, c, Hb, d, ub, e, Fb, b.length, TL(b), a.J, f)
    };
    PM.prototype.update = function(a, b) {
        this.b = 0;
        if (this.M) {
            var c;
            a != this.g || b != this.c ? (this.g = a,
            this.c = b,
            c = !1) : c = !0;
            c || (FM(this.a),
            this.A = !this.M || !b || Az(a) || this.o && a.length > NM[OM[b.toLowerCase()]] ? !1 : b.toLowerCase()in OM);
            RM(this, this.A)
        } else
            RM(this, !1)
    }
    ;
    PM.prototype.play = function() {
        if (this.g != this.K || this.c != this.D || this.b != this.C) {
            var a;
            if (this.o)
                a = [this.g];
            else {
                var b = NM[OM[this.c.toLowerCase()]];
                a = [];
                var c = this.I
                  , d = this.g.replace(/[ \u3000\n\r\t\s]+/g, l);
                JM(a, d, b, F(c.b, c), F(c.j, c))
            }
            b = [];
            c = k;
            null != this.H && (c += cb + this.H);
            null != this.B ? c += Jb + this.B : 0 != this.b && (c += Jb + this.b);
            for (d = 0; d < a.length; d++)
                b.push(QM(this, a[d], this.c, a.length, d, c));
            a = this.a;
            c = {
                textlen: this.g.length,
                tl: this.c
            };
            a.j = b;
            null != c && (a.c = yA(c));
            a.c.total = b.length;
            DM(a);
            this.K = this.g;
            this.D = this.c;
            this.C = this.b
        }
        b = this.a;
        b.a.Pf() && b.a.Sc();
        T(b.a, vv, b.C, !1, b);
        T(b.a, tv, b.H, !1, b);
        T(b.a, uv, b.w, !1, b);
        T(b.a, sv, b.A, !1, b);
        b.g = (new Date).getTime();
        CM(b, Jx, b.c);
        b.a.play(b.j[b.b]);
        HM(b);
        this.N && (this.b = 0 == this.b ? .24 : 0)
    }
    ;
    PM.prototype.F = function() {
        this.j.Ca() ? this.play() : FM(this.a)
    }
    ;
    var RM = function(a, b) {
        a.j.setVisible(b);
        b || FM(a.a)
    };
    var SM = function(a) {
        bM.call(this, a, Cx);
        this.b = this.c = null;
        this.A = new kJ(MSG_LISTEN,void 0,new nJ(gx));
        this.C = new PM(this.A,lb)
    };
    G(SM, bM);
    SM.prototype.na = function() {
        SM.v.na.call(this);
        this.Y(document.createElement(q))
    }
    ;
    SM.prototype.Y = function(a) {
        SM.v.Y.call(this, a);
        this.l().appendChild(AJ(ZJ));
        this.c = O(Mn, this.l());
        a = O(On, this.l());
        this.b = O(Nn, this.l());
        this.A.P(a)
    }
    ;
    SM.prototype.update = function(a, b, c, d) {
        SM.v.update.call(this, a, b, c, d);
        PC(this.c, a);
        this.C.update(a, b);
        if (this.data) {
            a = [];
            if (0 < kH(this.data))
                for (b = 0; b < kH(this.data); b++)
                    c = lH(this.data, b),
                    null != c.pb[3] && $G(c) != k && a.push($G(c));
            0 < a.length ? (PC(this.b, a.join(l)),
            R(this.b, !0)) : R(this.b, !1)
        }
        this.setVisible(!0);
        return !0
    }
    ;
    var TM = function(a, b, c) {
        bM.call(this, a, lk);
        this.Z = b;
        this.J = new SM(a);
        this.I = null;
        this.aa = c;
        this.b = new W;
        this.Fa(this.b);
        this.C = new W;
        this.Fa(this.C);
        this.c = this.F = this.N = this.T = this.R = null;
        this.A = []
    };
    G(TM, bM);
    C = TM.prototype;
    C.na = function() {
        TM.v.na.call(this);
        this.Y(document.createElement(q))
    }
    ;
    C.Y = function(a) {
        TM.v.Y.call(this, a);
        this.l().appendChild(AJ(XJ));
        this.J.P(O(Dn, this.l()));
        this.I = O(Cn, this.l());
        R(this.I, !1);
        this.b.P(O(An, this.l()));
        this.C.P(O(Bn, this.l()));
        a = O(yn, this.l());
        this.R = new AI(k,new nJ(iu));
        this.R.$(a);
        this.T = new AI(k,new nJ(os));
        this.T.$(a);
        this.N = new AI(k,new nJ(mj));
        this.N.$(a);
        this.F = O(zn, this.l());
        this.c = new jM(this.R,this.T,this.N,this)
    }
    ;
    C.V = function() {
        TM.v.V.call(this);
        X(this).a(this, t, this.Ji);
        X(this).a(this, Vi, this.Ki);
        X(this).a(this.F, w, this.wi)
    }
    ;
    C.wi = function() {
        R(this.F, !1);
        cA(this.A, function(a) {
            a.setVisible(!0)
        });
        var a = {};
        cG(this.b, function(b) {
            b.isVisible() && (a[b.Sa()] = b.Yc ? wl : js)
        });
        this.log(Tl, a)
    }
    ;
    C.Ji = function(a) {
        a = YC(a.target);
        UM(this, this.g, this.j, a, !1, hk)
    }
    ;
    C.Ki = function(a) {
        a = YC(a.target);
        UM(this, this.j, this.g, a, !1, ik)
    }
    ;
    C.zg = function(a) {
        var b = this.c.a[0];
        UM(this, b.b, b.a, a.text, !0, Tu)
    }
    ;
    C.Gi = function(a) {
        var b = a.text;
        if (!(50 < b.length)) {
            var c = this.c.a[0];
            a.A ? UM(this, c.b, c.a, b, !0, Su) : UM(this, c.a, c.b, b, !0, Su)
        }
    }
    ;
    var UM = function(a, b, c, d, e, f) {
        if (d != a.text || b != a.g)
            b == Ey && (b = Dy),
            e ? (PC(a.J.c, ed),
            YL(a.Z, b, c, a.w, d, F(a.X, a, d, b, c), !1, zh, new nL(yv + f))) : LF(a.aa, b, c, d, f)
    };
    TM.prototype.update = function(a, b, c, d) {
        TM.v.update.call(this, a, b, c, d);
        if (window.EGGS_JANGO && (b == ou || c == ou))
            return !1;
        R(this.I, 1 != this.c.a.length);
        var e = 0
          , f = 0
          , g = !0;
        this.A = [];
        cG(this.b, function(f) {
            var m = f.update(a, b, c, d);
            e |= m;
            m && (g ? g = !1 : f.Ne || (f.setVisible(!1),
            this.A.push(f)))
        }, this);
        VM(this, this.b);
        var m = 0 < this.A.length;
        R(this.F, m);
        cG(this.C, function(e) {
            f |= e.update(a, b, c, d)
        }, this);
        var n = e || f;
        this.setVisible(n);
        this.J.update(a, b, c, d);
        if (n) {
            var p = {};
            cG(this.b, function(a) {
                a.isVisible() && (p[a.Sa()] = a.Yc ? wl : js)
            });
            cG(this.C, function(a) {
                a.isVisible() && (p[a.Sa()] = a.Yc ? wl : js)
            });
            p[this.Sa()] = m ? wl : js;
            this.log(kv, p)
        }
        return n
    }
    ;
    TM.prototype.X = function(a, b, c, d) {
        this.c.push(a, b, c, d);
        this.isVisible() || (a = this.c,
        1 < a.a.length && (a.a.splice(a.a.length - 1),
        a.b = a.a.length - 1,
        kM(a)))
    }
    ;
    var VM = function(a, b) {
        var c = [];
        cG(b, function(a) {
            if (a.isVisible() || jA(this.A, a)) {
                var b = a.Dd || a.text;
                jA(c, b) ? a.Kf() : c.push(b)
            }
        }, a)
    };
    var WM = function(a) {
        return bf + FJ(a.id) + Da + FJ(a.url) + Ra + FJ(a.zj) + Ae + FJ(a.wj) + te + FJ(a.kd) + ze + FJ(a.Pi) + se
    }
      , XM = function(a) {
        return bf + FJ(a.id) + Ea + FJ(a.Ye) + Ce + FJ(a.url) + Na + FJ(a.kd) + ne + FJ(a.Uh) + re
    };
    var YM = function(a, b, c, d, e, f) {
        W.call(this);
        this.c = mK.O();
        this.F = a;
        this.w = b;
        this.C = c;
        this.A = d;
        this.I = e;
        this.b = f;
        this.j = !1
    };
    G(YM, W);
    YM.prototype.setVisible = function(a) {
        a && !this.j ? (this.c.log(ok, lv + this.b),
        R(this.g, !0)) : R(this.g, !1)
    }
    ;
    YM.prototype.Y = function(a) {
        YM.v.Y.call(this, a);
        this.g = AJ(WM, {
            kd: this.F,
            Pi: this.w,
            zj: this.C,
            wj: this.A,
            url: this.I,
            id: this.b
        });
        a.appendChild(this.g);
        var b = O(zk, a);
        X(this).a(b, w, this.J);
        a = O(Ak, a);
        X(this).a(a, w, this.N)
    }
    ;
    YM.prototype.J = function() {
        this.c.log(ok, il + this.b);
        qK(this.c, vd + this.b);
        this.setVisible(!1);
        this.j = !0
    }
    ;
    YM.prototype.N = function() {
        this.c.log(ok, ek + this.b)
    }
    ;
    var ZM = function(a, b, c) {
        var d = Or;
        null != c && c && (d = Fr + d);
        cM.call(this, a, d, MSG_DEFINITIONS_OF, k);
        this.c = null != b ? b : !0
    };
    G(ZM, cM);
    ZM.prototype.update = function(a, b, c, d) {
        ZM.v.update.call(this, a, b, c, d);
        if (!d || 0 == Z(d.a, 12) && 0 == Z(d.a, 15))
            return !1;
        zC(this.b);
        a = 0;
        b = Z(d.a, 12);
        c = 3 > b;
        for (var e, f = e = 0; f < Z(d.a, 12); f++)
            e += qH(d, f).Eb();
        e = 5 > e ? e : 3;
        for (var g = Math.ceil(e / b), m = f = 0; m < b; ++m) {
            var n = qH(d, m), p;
            p = qH(d, m).a[2];
            p = null != p ? p : k;
            var r = P(q, {
                "class": Jn
            });
            this.b.appendChild(r);
            var u = n.a[0];
            PC(r, null != u ? u : k);
            r = P(q, {
                "class": Pn
            });
            u = FA(this.g) ? Mu : Br;
            Q(r, {
                direction: u
            });
            this.b.appendChild(r);
            for (u = 0; u < n.Eb(); ++u) {
                var A, D = n.Fb(u).a[0];
                A = null != D ? D : k;
                var V, D = n.Fb(u).a[2];
                V = null != D ? D : k;
                for (var Y = [], rb = 0; rb < Z(d.a, 11); ++rb)
                    for (var $a = pH(d, rb), D = 0; D < $a.Eb(); ++D) {
                        var oa = $a.Fb(D)
                          , gb = n.Fb(u).a[1]
                          , Ha = oa.a[1];
                        if ((null != gb ? gb : k) == (null != Ha ? Ha : k)) {
                            gb = [];
                            for (Ha = 0; Ha < Z(oa.a, 0); ++Ha)
                                kA(gb, cH(oa, Ha));
                            kA(Y, gb)
                        }
                    }
                (rb = 1 > u || c && u < g && f < e) && (f += 1);
                D = A;
                A = V;
                V = Y;
                Y = rb;
                rb = FA(this.j) ? Mu : Br;
                V = BJ(aK, {
                    Sh: D,
                    fg: A,
                    xj: MSG_SYNONYMS_LOWERCASE,
                    hh: V,
                    Sf: rb,
                    Qh: this.c
                });
                rb = O(ro, V);
                this.qa.push([rb, D]);
                (D = O(Vn, V)) && this.qa.push([D, A]);
                (D = O(Sn, V)) && FA(this.w) != FA(this.g) && (A = FA(this.w),
                Q(D, el, A ? Mu : Br),
                Q(D, Us + (A ? or : Gu), be),
                D.style[I ? ew : Ck] = A ? Gu : or);
                D = fM(V, Y);
                r.appendChild(D);
                a += 1
            }
        }
        for (D = 0; D < Z(d.a, 15); D++)
            m = D,
            m = new LG(kG(d.a, 15)[m]),
            r = void 0,
            g = m.a[1],
            r = null != g ? g : k,
            g = void 0,
            g = m.a[2],
            g = null != g ? g : k,
            n = P(q, {
                "class": Qn
            }),
            r = P(q, {
                "class": mo
            }, r),
            u = P(yf),
            m = m.a[3],
            u.setAttribute(Op, null != m ? m : k),
            u.setAttribute(Aw, Rh),
            m = P(mg, {
                "class": no
            }),
            m.setAttribute(Kv, g),
            u.appendChild(m),
            n.appendChild(u),
            n.appendChild(r),
            this.b.appendChild(n);
        p && (this.Dd = p,
        dM(this, p));
        if (!c && a > 1 * b || c && a > e)
            d = MSG_N_MORE_DEFINITIONS_LABEL.replace(Ya, a - f),
            eM(this, d, MSG_FEWER_DEFINITIONS_LABEL);
        else
            for (d = lC(un, this.l()),
            m = 0; m < d.length; m++)
                p = d[m],
                O(Rn, p) && L(p, un);
        this.setVisible(!0);
        return !0
    }
    ;
    ZM.prototype.V = function() {
        ZM.v.V.call(this);
        X(this).a(this.l(), w, this.F)
    }
    ;
    ZM.prototype.Y = function(a) {
        ZM.v.Y.call(this, a)
    }
    ;
    ZM.prototype.F = function(a) {
        UB(a.target, In) && this.dispatchEvent(new S(t,a.target))
    }
    ;
    var $M = az();
    $M.prototype.o = B(k);
    var aN = function(a, b, c, d, e) {
        this.g = a;
        this.j = b;
        this.c = c;
        this.a = [];
        for (a = 0; a < d.length; ++a)
            this.a.push(d[a].toLowerCase());
        this.b = [];
        for (a = 0; a < e.length; ++a)
            this.b.push(e[a].toLowerCase())
    };
    G(aN, $M);
    aN.prototype.o = function(a, b, c, d) {
        if (this.c != k && this.c != c)
            return k;
        c = bN(a, b, d, this.g, this.j, this.a, this.b);
        return c != k ? c : bN(a, b, d, this.j, this.g, this.b, this.a)
    }
    ;
    var bN = function(a, b, c, d, e, f, g) {
        if (a == d && b == e)
            for (a = 0; a < kH(c); a++) {
                b = lH(c, a);
                d = ZG(b).toLowerCase();
                if (0 <= bA(f, d))
                    return d;
                b = YG(b).toLowerCase();
                if (0 <= bA(g, b))
                    return b
            }
        return k
    };
    var cN = [{
        ma: new aN(y,x,y,["\u0434\u0430\u043c\u0430", "\u0441\u043e\u0431\u0430\u043a\u0430", "\u0441\u043e\u0431\u0430\u0447\u043a\u0430", "\u0434\u0430\u043c\u0430 \u0441 \u0441\u043e\u0431\u0430\u0447\u043a\u043e\u0439"],["lady", "dog", "dog", "lady with a dog"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/annasergeevna.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u043c\u0438\u043b\u044b\u0439", "\u0433\u0440\u0435\u0448\u043d\u0438\u043a", "\u0433\u0440\u0435\u0445", "\u0433\u0440\u0435\u0448\u043d\u0438\u0446\u0430"],["sweet", "sinner", "sin", "sinner"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/annasergeevna_type.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0447\u0435\u043b\u043e\u0432\u0435\u043a", "\u0444\u0443\u0442\u043b\u044f\u0440", "\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0430", "\u0441\u043a\u043e\u0440\u043b\u0443\u043f\u0430"],["man", "case", "shell", "shell"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/belikov.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u043d\u0435\u0442"],[qs]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/belikov_callout.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0441\u0435\u0441\u0442\u0440\u0430", "\u0442\u0440\u0438 \u0441\u0435\u0441\u0442\u0440\u044b"],["sister", "three sisters"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/chekhov_1.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0434\u043e\u043c", "\u043c\u0435\u0437\u043e\u043d\u0438\u043d", "\u0434\u043e\u043c \u0441 \u043c\u0435\u0437\u043e\u043d\u0438\u043d\u043e\u043c"],["house", "mezzanine", "house with mezzanine"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/chekhov_2.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0437\u043b\u043e\u0439", "\u043c\u0430\u043b\u044c\u0447\u0438\u043a", "\u0437\u043b\u043e\u0439 \u043c\u0430\u043b\u044c\u0447\u0438\u043a"],["evil", "boy", "evil boy"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/chekhov_3.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u043d\u0435\u0432\u0435\u0441\u0442\u0430"],["bride"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/chekhov_4.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0441\u043a\u0443\u0447\u043d\u044b\u0439", "\u0441\u043a\u0443\u043a\u0430", "\u0441\u043a\u0443\u0447\u043d\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f"],["boring", "boredom", "boring story"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/chekhov_5.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0446\u0432\u0435\u0442\u044b", "\u0437\u0430\u043f\u043e\u0437\u0434\u0430\u043b\u044b\u0439", "\u0446\u0432\u0435\u0442\u044b \u0437\u0430\u043f\u043e\u0437\u0434\u0430\u043b\u044b\u0435", "\u043f\u043e\u0437\u0434\u043d\u043e", "\u043f\u043e\u0437\u0434\u043d\u0438\u0439"],["flowers", "belated", "belated flowers", "late"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/chekhov_6.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u043e\u0432\u0440\u0430\u0433", "\u0432 \u043e\u0432\u0440\u0430\u0433\u0435"],["ravine", "in a ravine"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/grigoiriytsibukin.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u044f \u043d\u0435 \u0437\u043d\u0430\u044e"],["i do not know"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/grigoiriytsibukin_callout.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0446\u0438\u043d\u0438\u043a", "\u0446\u0438\u043d\u0438\u0437\u043c"],["cynic", "cynism"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/grigoiriytsibukin_type.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,"\u0432\u043a\u0443\u0441\u043d\u043e \u043a\u043b\u0443\u0431\u043d\u0438\u043a\u0430 \u044f\u0433\u043e\u0434\u0430 \u0444\u0440\u0443\u043a\u0442 \u0430\u0440\u0431\u0443\u0437 \u0435\u0434\u0430".split(" "),"tasty strawberry berry fruit watermelon food".split(" ")),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/gurov.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u043f\u0440\u0438\u044f\u0442\u043d\u043e\u0433\u043e \u0430\u043f\u043f\u0435\u0442\u0438\u0442\u0430"],["bon appetit"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/gurov_callout.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u043f\u0440\u043e\u0441\u0432\u0435\u0442\u0432\u043b\u0435\u043d\u043d\u044b\u0439"],["enlightened"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/gurov_type.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0442\u043e\u0441\u043a\u0430", "\u0433\u0440\u0443\u0441\u0442\u044c", "\u043f\u0435\u0447\u0430\u043b\u044c", "\u043f\u0435\u0447\u0430\u043b\u044c", "\u043f\u0435\u0447\u0430\u043b\u044c\u043d\u044b\u0439"],["yearning", "sorrow", "sadness", "sadness", "sad"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/iona.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0436\u0435\u0440\u0442\u0432\u0430", "\u0441\u0442\u0440\u0430\u0434\u0430\u0442\u044c", "\u0441\u0442\u0440\u0430\u0434\u0430\u043b\u0438\u0446\u0430", "\u0441\u0442\u0440\u0430\u0434\u0430\u043b\u0435\u0446", "\u0432\u0435\u0447\u043d\u044b\u0439"],["victim", "suffer", "sufferer", "eternal"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/iona_type.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0447\u0430\u0439\u043a\u0430", "\u043f\u0442\u0438\u0446\u0430"],["seagull", "bird"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/konstantintreplev.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0441\u0442\u0440\u0430\u043d\u043d\u0438\u043a", "\u0431\u0440\u043e\u0434\u044f\u0433\u0430"],["wanderer", "tramp"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/konstantintreplev_type.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0440\u043e\u0437\u0430", "\u0433\u043e\u0434", "\u0442\u0440\u0438 \u0433\u043e\u0434\u0430"],["rose", "year", "three years"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/laptev.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,"\u043b\u044e\u0431\u043b\u044e;\u043b\u044e\u0431\u0438\u0442\u044c;\u044f \u0442\u0435\u0431\u044f \u043b\u044e\u0431\u043b\u044e;\u043b\u044e\u0431\u043e\u0432\u044c;\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f;\u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f".split(";"),"love;love;i love you;love;artist;please".split(";")),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/laptev_callout.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0440\u043e\u043c\u0430\u043d\u0442\u0438\u043a", "\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439"],["romantic", "latest"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/laptev_type.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0431\u0438\u0437\u043d\u0435\u0441", "\u0434\u0435\u043b\u043e", "\u0432\u0438\u0448\u043d\u044f", "\u0441\u0430\u0434", "\u0432\u0438\u0448\u043d\u0435\u0432\u044b\u0439 \u0441\u0430\u0434"],["business", "business", "cherry", "garden", "the cherry orchard"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/lopakhin.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0434\u0430"],["yes"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/lopakhin_callout.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0440\u0430\u0431\u043e\u0442\u0430"],["work"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/lopakhin_type.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0436\u0438\u0437\u043d\u044c", "\u043c\u043e\u044f \u0436\u0438\u0437\u043d\u044c"],["life", "my life"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/masha.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,"\u043f\u0440\u0438\u0432\u0435\u0442;\u0434\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c;\u0434\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440;\u0434\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e;\u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439;\u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435;\u043a\u0430\u043a \u0434\u0435\u043b\u0430;\u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0448\u044c;\u0447\u0442\u043e \u043d\u043e\u0432\u043e\u0433\u043e;\u043a\u0430\u043a \u0436\u0438\u0437\u043d\u044c;\u043a\u0430\u043a \u0442\u044b".split(";"),"hello;good afternoon;good evening;good morning;how are you;what are you doing;what's new;what's up".split(";")),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/masha_callout.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0445\u0438\u0449\u043d\u0438\u043a", "\u0432\u0430\u043c\u043f\u0438\u0440", "\u043e\u0445\u043e\u0442\u0430"],["predator", "vampire", "hunting"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/masha_type.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,"\u043a\u043d\u0438\u0433\u0430 \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u0430\u0441\u0441\u043a\u0430\u0437 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0430 \u0430\u0432\u0442\u043e\u0440 \u043f\u0438\u0441\u0430\u0442\u0435\u043b\u044c \u043f\u044c\u0435\u0441\u0430".split(" "),["book", "literature", "composition", "history", "story", "art", "classic", "author", "writer", Zt]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/petyatrofimov_callout.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0441\u0442\u0443\u0434\u0435\u043d\u0442", "\u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043a\u0430"],["student", "student"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/petyatrofimov_type.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,"\u043f\u0430\u043b\u0430\u0442\u0430;\u043f\u0430\u043b\u0430\u0442\u0430 \u21166;\u043f\u0441\u0438\u0445\u0438\u0430\u0442\u0440\u0438\u044f;\u043f\u0441\u0438\u0445\u0438\u0430\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0430;\u043f\u0441\u0438\u0445\u0443\u0448\u043a\u0430;\u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0430;\u0434\u0443\u0440\u0434\u043e\u043c".split(";"),"ward;ward No6;psychiatry;mental hospital;nuthouse;hospital;loony bin".split(";")),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/ragin.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u043f\u043e\u0431\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0439", "\u043f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u0435", "\u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0448"],["defeated", "defeat", "loss"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/ragin_type.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0434\u044f\u0434\u044f"],["uncle"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/sonya.gif"
        },
        ea: !0
    }, {
        ma: new aN(y,x,y,["\u0430\u043b\u044c\u0442\u0440\u0443\u0438\u0441\u0442", "\u0434\u043e\u0431\u0440\u043e", "\u0445\u043e\u0440\u043e\u0448\u0438\u0439"],["altruist", "good", "good"]),
        target: Vp,
        ia: mg,
        attributes: {
            src: "//ssl.gstatic.com/translate/ee/sonya_type.gif"
        },
        ea: !0
    }];
    var dN = function(a) {
        cM.call(this, a, Hl, k, k);
        this.Ne = !0
    };
    G(dN, cM);
    var eN = [];
    dN.prototype.update = function(a, b, c, d) {
        dN.v.update.call(this, a, b, c, d);
        zC(this.b);
        var e = eN;
        EGGS_RU_CHEKHOV && (e = e.concat(cN));
        for (var f = 0; f < e.length; f++) {
            a = e[f];
            var g = a.ma.o(b, c, this.w, d);
            if (g != k)
                return c = b = BJ(cK),
                a.target && (d = a.target,
                a.ea && (d += g),
                g = BJ(dK, {
                    xf: d
                }),
                c.appendChild(g),
                c = g),
                c.appendChild(P.apply(null, [a.ia, a.attributes])),
                this.b.appendChild(b),
                this.setVisible(!0),
                !0
        }
        return !1
    }
    ;
    dN.prototype.Kf = function() {
        this.C && PC(this.C, k)
    }
    ;
    var fN = function(a, b, c, d, e) {
        W.call(this);
        this.F = new UL(d ? oy : mw);
        this.I = a;
        this.W = b;
        this.X = c;
        this.N = e;
        this.c = this.b = null
    };
    G(fN, W);
    var gN = function(a) {
        var b = P(q, {
            id: Lo
        });
        a.l().appendChild(b);
        var c = new hK(k);
        c.Aa(16, !0);
        c.$(b);
        c.g(a.W);
        iI(c.c, c, 2);
        T(c, v, a.T, !1, a);
        a.j = c;
        b = P(q, {
            id: No
        });
        a.l().appendChild(b);
        c = new hK(k);
        c.Aa(16, !0);
        c.$(b);
        c.g(a.X);
        iI(c.c, c, 1);
        T(c, v, a.R, !1, a);
        a.A = c;
        a.setVisible(!1)
    };
    fN.prototype.T = function() {
        this.g && (this.j.Ca() ? (this.A.ra(!1),
        this.b = 0) : this.b = 2,
        this.c = !0,
        LF(this.I, k, k, this.g, k))
    }
    ;
    fN.prototype.R = function() {
        this.g && (this.A.Ca() ? (this.j.ra(!1),
        this.b = 1) : this.b = 2,
        this.c = !0,
        LF(this.I, k, k, this.g, k))
    }
    ;
    fN.prototype.update = function(a, b, c) {
        this.g = c;
        this.C = this.w = null;
        if (this.c)
            this.c = !1;
        else if (this.N && a == x && b == Tk) {
            var d = 0
              , e = new nL;
            yL(e, Cw, d);
            XL(this.F, a, b, x, c, [mw], F(this.J, this, d), void 0, e);
            d = 1;
            DL(e, Cw, d);
            XL(this.F, a, b, x, c, [mw], F(this.J, this, d), void 0, e)
        } else
            this.setVisible(!1)
    }
    ;
    fN.prototype.J = function(a, b) {
        if (null != b) {
            var c = [];
            if (0 < kH(b))
                for (var d = 0; d < kH(b); d++) {
                    var e = lH(b, d);
                    null != e.pb[0] && c.push(YG(e))
                }
            0 == a ? this.w = c.join(k) : 1 == a && (this.C = c.join(k));
            c = !1;
            null != this.w && null != this.C && ((c = this.w != this.C) || hN(this),
            this.setVisible(c))
        }
    }
    ;
    var hN = function(a) {
        a.j.ra(!1);
        a.A.ra(!1);
        a.b = null
    };
    fN.prototype.setVisible = function(a) {
        R(this.l(), a)
    }
    ;
    var iN = function() {
        S.call(this, vx)
    };
    G(iN, S);
    var jN = function() {
        S.call(this, lw)
    };
    G(jN, S);
    var kN = function(a) {
        S.call(this, Bv);
        this.eh = a
    };
    G(kN, S);
    var lN = function(a, b) {
        TD.call(this);
        this.g = this.c = 0;
        this.a = a;
        this.j = b;
        this.b = new EI(F(this.o, this),0,this)
    };
    G(lN, TD);
    lN.prototype.L = function() {
        this.b.xa();
        delete this.a;
        delete this.j;
        lN.v.L.call(this)
    }
    ;
    lN.prototype.o = function() {
        if (!this.a.call(this.j))
            if (0 > this.g)
                GI(this.b, this.c);
            else {
                var a = this.g - wz();
                0 >= a || GI(this.b, Math.min(this.c, a))
            }
    }
    ;
    var nN = function(a) {
        U.call(this);
        this.G = a;
        this.b = this.G.value;
        this.a = new EE(this);
        this.g = wz();
        mN ? this.a.a(a, ct, this.Ec) : this.a.a(a, [br, nj, hm, as, oq], this.ti);
        this.c = new lN(F(this.Zf, this))
    };
    G(nN, U);
    var mN = GB || I || DB || FB && J("1.9");
    C = nN.prototype;
    C.dc = lq;
    C.L = function() {
        nN.v.L.call(this);
        this.a.xa();
        this.a = null;
        this.c.xa();
        this.c = null
    }
    ;
    C.Zf = function() {
        if (this.b == this.G.value)
            return !1;
        this.dispatchEvent(ei);
        return !0
    }
    ;
    C.Ec = function(a) {
        a = new aE(a.b);
        a.type = ct;
        this.dispatchEvent(a);
        uF(function() {
            if (!this.Zf()) {
                var a = this.c;
                FI(a.b);
                a.c = Math.max(50, 0);
                a.g = wz() + 200;
                GI(a.b, Math.min(a.c, 200))
            }
        }, 0, this)
    }
    ;
    C.ti = function(a) {
        switch (this.dc) {
        case lq:
            switch (a.type) {
            case nj:
                this.dc = lq;
                break;
            case hm:
                this.dc = im;
                break;
            case as:
                this.dc = lq,
                this.G.value != this.b && this.Ec(a)
            }
            break;
        case im:
            switch (a.type) {
            case oq:
                var b = this.g + 400;
                (wz() > b || this.j == hm) && this.Ec(a);
                break;
            case nj:
                this.dc = lq;
                break;
            case br:
                if (IB && CB && 0 == a.keyCode || IB && CB && 17 == a.keyCode)
                    break;
                this.dc = Ux;
                break;
            case as:
                this.G.value != this.b && this.Ec(a)
            }
            break;
        case Ux:
            switch (a.type) {
            case oq:
                this.dc = im;
                break;
            case nj:
                this.dc = lq;
                break;
            case br:
                (a.ctrlKey && 86 == a.keyCode || a.shiftKey && 45 == a.keyCode || a.metaKey && 86 == a.keyCode) && this.Ec(a);
                break;
            case as:
                this.G.value != this.b && this.Ec(a)
            }
        }
        this.g = wz();
        this.b = this.G.value;
        this.j = a.type
    }
    ;
    var oN = az();
    G(oN, SH);
    hz(oN);
    C = oN.prototype;
    C.Sb = az();
    C.P = function(a, b) {
        oI(a, !1);
        a.Jb &= -256;
        a.Aa(32, !1);
        oN.v.P.call(this, a, b);
        a.g(b.value);
        return b
    }
    ;
    C.Pa = function(a) {
        oI(a, !1);
        a.Jb &= -256;
        a.Aa(32, !1);
        return a.a.a(ph, {
            "class": XH(this, a).join(l),
            disabled: !a.isEnabled()
        }, a.ya() || k)
    }
    ;
    C.Hc = function(a) {
        return a.tagName == ph
    }
    ;
    C.hf = gz;
    C.gf = function(a) {
        return a.isEnabled()
    }
    ;
    C.Ic = gz;
    C.rc = function(a, b, c) {
        oN.v.rc.call(this, a, b, c);
        (a = a.l()) && 1 == b && (a.disabled = c)
    }
    ;
    C.Cb = gz;
    C.xb = function(a, b) {
        a && (a.value = b)
    }
    ;
    C.S = B("goog-textarea");
    var pN = function(a, b, c) {
        mI.call(this, a, b || oN.O(), c);
        oI(this, !1);
        this.Ad = !0;
        (b = this.l()) && this.c.Wd(b, !0);
        this.Kc = a != k;
        a || (this.sc = k)
    };
    G(pN, mI);
    var qN = !(I && !(11 <= SB));
    C = pN.prototype;
    C.Lc = !1;
    C.je = !1;
    C.Kc = !1;
    C.Ub = 0;
    C.yf = 0;
    C.Fg = !1;
    C.re = !1;
    C.Hf = !1;
    C.Gf = !1;
    C.Oc = k;
    var rN = function(a) {
        return a.F.top + a.F.bottom + a.X.top + a.X.bottom
    }
      , sN = function(a) {
        var b = a.yf
          , c = a.l();
        b && c && a.re && (b -= rN(a));
        return b
    }
      , uN = function(a) {
        a.yf = 105;
        tN(a)
    };
    pN.prototype.b = function(a) {
        this.g(String(a))
    }
    ;
    pN.prototype.U = function() {
        return this.l().value != this.Oc || vN(this) || this.Kc ? this.l().value : k
    }
    ;
    pN.prototype.g = function(a) {
        pN.v.g.call(this, a);
        this.Kc = a != k;
        tN(this)
    }
    ;
    pN.prototype.ba = function(a) {
        pN.v.ba.call(this, a);
        this.l().disabled = !a
    }
    ;
    var tN = function(a) {
        a.l() && a.J()
    }
      , vN = function(a) {
        return Yt in a.l()
    }
      , wN = function(a) {
        a.Oc && (vN(a) ? a.l().placeholder = a.Oc : !a.l() || a.Kc || a.je || (K(a.l(), Lw),
        a.l().value = a.Oc))
    };
    pN.prototype.V = function() {
        pN.v.V.call(this);
        var a = this.l();
        Q(a, {
            overflowY: Fp,
            overflowX: Ui,
            boxSizing: sj,
            MsBoxSizing: sj,
            WebkitBoxSizing: sj,
            MozBoxSizing: sj
        });
        this.F = ND(a);
        this.X = QD(a);
        X(this).a(a, Ru, this.J).a(a, hm, this.J).a(a, dr, this.J).a(a, bs, this.Ba).a(a, nj, this.wa);
        wN(this);
        tN(this)
    }
    ;
    var xN = function(a) {
        if (!a.Fg) {
            var b = a.l().cloneNode(!1);
            Q(b, {
                position: Zh,
                height: Ui,
                top: bc,
                margin: Fd,
                padding: Nd,
                border: Od,
                overflow: Fp
            });
            a.a.b.body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = Md;
            var d = b.scrollHeight;
            a.Hf = d > c;
            b.style.borderWidth = Md;
            a.Gf = b.scrollHeight > d;
            b.style.height = Ld;
            100 != b.offsetHeight && (a.re = !0);
            CC(b);
            a.Fg = !0
        }
        b = a.l();
        isNaN(a.F.top) && (a.F = ND(b),
        a.X = QD(b));
        var c = a.l().scrollHeight
          , e = a.l()
          , d = e.offsetHeight - e.clientHeight;
        if (!a.Hf)
            var f = a.F
              , d = d - (f.top + f.bottom);
        a.Gf || (e = QD(e),
        d -= e.top + e.bottom);
        c = c + (0 < d ? d : 0);
        a.re ? c -= rN(a) : (a.Hf || (d = a.F,
        c += d.top + d.bottom),
        a.Gf || (a = QD(b),
        c += a.top + a.bottom));
        return c
    }
      , yN = function(a, b) {
        a.Ub != b && (a.Ub = b,
        a.l().style.height = b + mu)
    }
      , zN = function(a) {
        var b = a.l();
        b.style.height = Ui;
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.Ub = 0
    };
    pN.prototype.wa = function() {
        vN(this) || (this.je = !1,
        this.l().value == k && (this.Kc = !1,
        wN(this)))
    }
    ;
    pN.prototype.J = function(a) {
        if (!this.Lc) {
            var b = this.l();
            !vN(this) && a && a.type == hm && (b.value == this.Oc && this.Oc && !this.je && (L(b, Lw),
            b.value = k),
            this.je = !0,
            this.Kc = b.value != k);
            var c = !1;
            this.Lc = !0;
            a = this.Ub;
            if (b.scrollHeight) {
                var d = !1, e = !1, f = xN(this), g = b.offsetHeight, m = sN(this), n;
                n = 0;
                var p = this.l();
                n && p && this.re && (n -= rN(this));
                m && f < m ? (yN(this, m),
                d = !0) : n && f > n ? (yN(this, n),
                b.style.overflowY = k,
                e = !0) : g != f ? yN(this, f) : this.Ub || (this.Ub = f);
                d || e || !qN || (c = !0)
            } else
                zN(this);
            this.Lc = !1;
            c && (b = this.l(),
            this.Lc || (this.Lc = !0,
            (e = b.scrollHeight) ? (f = xN(this),
            c = sN(this),
            c && f <= c || (d = this.F,
            b.style.paddingBottom = d.bottom + 1 + mu,
            xN(this) == f && (b.style.paddingBottom = d.bottom + e + mu,
            b.scrollTop = 0,
            e = xN(this) - e,
            e >= c ? yN(this, e) : yN(this, c)),
            b.style.paddingBottom = d.bottom + mu)) : zN(this),
            this.Lc = !1));
            a != this.Ub && this.dispatchEvent(Au)
        }
    }
    ;
    pN.prototype.Ba = function() {
        var a = this.l()
          , b = a.offsetHeight;
        a.filters && a.filters.length && (a = a.filters.item(Uf)) && (b -= a.offX);
        b != this.Ub && (this.Ub = this.yf = b)
    }
    ;
    var AN = function(a) {
        pN.call(this, a);
        this.qa = k;
        this.aa = null;
        this.R = 0;
        this.Z = !1
    };
    G(AN, pN);
    AN.prototype.b = function(a) {
        AN.v.b.call(this, a);
        this.W(bv)
    }
    ;
    AN.prototype.V = function() {
        AN.v.V.call(this);
        T(new EH(this.l()), ar, function(a) {
            BN(this, ar, {
                keyCode: a.keyCode
            })
        }, !1, this);
        T(this.l(), oq, function() {
            BN(this, oq)
        }, !1, this);
        T(new nN(this.l()), ct, function(a) {
            EGGS_JANGO && CN(this, a);
            this.Z = !0;
            BN(this, ct)
        }, !1, this);
        T(this.l(), ul, function() {
            BN(this, ul)
        }, !1, this);
        this.aa = new qF(1E3);
        T(this.aa, Ow, function() {
            this.W(Qw)
        }, !1, this);
        sF(this.aa)
    }
    ;
    var CN = function(a, b) {
        var c = b.b;
        c.clipboardData && (c = c.clipboardData,
        -1 != c.types.indexOf(Hw) && (c = c.getData(Hw),
        c = DN(c),
        jz(RC(c, function(a) {
            if (HC(a)) {
                var b = hC(a)
                  , c = k;
                if (b.body.createTextRange && JC(b, a)) {
                    b = b.body.createTextRange();
                    b.moveToElementText(a);
                    try {
                        c = b.queryCommandValue(eg)
                    } catch (g) {
                        c = k
                    }
                }
                c || (c = mD(a, pm));
                a = c.split(Wb);
                1 < a.length && (c = a[0]);
                a: for (a = 0; 2 > a; a++)
                    if (b = "\"'".charAt(a),
                    c.charAt(0) == b && c.charAt(c.length - 1) == b) {
                        c = c.substring(1, c.length - 1);
                        break a
                    }
                c = c.toLowerCase();
                return -1 != c.indexOf(Si) || -1 != c.indexOf(Ri)
            }
            return !1
        })) && a.dispatchEvent(new jN)))
    }
      , DN = function(a) {
        try {
            var b = document.implementation.createHTMLDocument(k);
            b.documentElement.innerHTML = a;
            return b
        } catch (c) {
            return P(q)
        }
    }
      , BN = function(a, b, c) {
        uF(F(a.W, a, b, c), 0, a)
    };
    AN.prototype.W = function(a, b) {
        var c = Dz(this.U());
        c != this.qa && (this.R += 1,
        this.qa = c,
        c = new S(Xj),
        this.Z && (this.Z = !1,
        a = ct),
        c.j = a,
        null != b && AA(c, b),
        this.dispatchEvent(c))
    }
    ;
    var FN = function(a) {
        U.call(this);
        this.G = a;
        T(a, EN, this.b, !1, this);
        T(a, w, this.a, !1, this)
    };
    G(FN, U);
    var EN = FB ? cr : br;
    FN.prototype.b = function(a) {
        (13 == a.keyCode || GB && 3 == a.keyCode) && GN(this, a)
    }
    ;
    FN.prototype.a = function(a) {
        GN(this, a)
    }
    ;
    var GN = function(a, b) {
        var c = new HN(b);
        if (a.dispatchEvent(c)) {
            c = new IN(b);
            try {
                a.dispatchEvent(c)
            } finally {
                b.stopPropagation()
            }
        }
    };
    FN.prototype.L = function() {
        FN.v.L.call(this);
        yE(this.G, EN, this.b, !1, this);
        yE(this.G, w, this.a, !1, this);
        delete this.G
    }
    ;
    var IN = function(a) {
        aE.call(this, a.b);
        this.type = v
    };
    G(IN, aE);
    var HN = function(a) {
        aE.call(this, a.b);
        this.type = cj
    };
    G(HN, aE);
    var JN = function(a, b) {
        U.call(this);
        this.mc = a;
        this.a = [];
        null != b && this.Rc(b)
    };
    G(JN, U);
    JN.prototype.update = function(a, b) {
        for (var c = this.a.length = 0; c < a.length; ++c)
            this.a.push(a[c]);
        this.dispatchEvent({
            type: this.mc,
            data: this.a,
            selected: null != b ? b : null
        })
    }
    ;
    var KN = function() {
        U.call(this);
        this.j = this.b = this.a = k;
        this.D = new JN(Ov,this);
        this.A = new JN(Zv,this);
        this.H = new JN($v,this);
        this.F = [];
        this.T = new JN(Mv,this);
        this.J = new JN(Mw,this);
        this.N = this.I = 0;
        this.c = [];
        this.g = [];
        this.K = [];
        this.M = [];
        this.C = !1;
        this.w = k
    };
    G(KN, U);
    var LN = function(a, b) {
        var c = [], d;
        if (b) {
            d = a.a == Ui ? a.j : a.a;
            for (var e = -1, f = 0; f < b.length; ++f)
                b[f] == d ? a.a != Ui && (e = f) : c.push(b[f]);
            d = -1 != e && 3 > e
        } else
            d = !1;
        d || a.C || a.D.update(c ? c.slice(0, 3) : [])
    }
      , MN = function(a, b, c, d) {
        for (var e = {}, f = [], g = 0; g < b.length && 3 > f.length; g++)
            f.push(b[g]),
            e[b[g]] = !0;
        for (g = 0; g < a.length && 3 > f.length; g++)
            null == e[a[g]] && (e[a[g]] = !0,
            f.push(a[g]));
        c.update(f, d)
    };
    KN.prototype.o = function(a, b) {
        var c = null != b ? b : 0;
        if (3 == c || 4 == c || 5 == c)
            this.C = !0;
        6 == c && (this.w = a);
        a == Ey && (a = Dy);
        a != Ui && NN(this, k);
        ON(this.A, a, this.c);
        if (this.a != a) {
            var d = this.a;
            this.a = a;
            d = d == Ui ? void 0 : F(this.B, this, d, 6);
            this.I = c;
            PN(this, this.a, Nv, c, d)
        }
    }
    ;
    KN.prototype.B = function(a, b) {
        var c = null != b ? b : 0;
        6 != c && 5 != c || a != Dy || this.w != Ey || (a = Ey);
        5 == c && (this.w = this.b);
        ON(this.H, a, this.g);
        if (this.b != a) {
            var d = this.b;
            this.b = a;
            this.N = c;
            PN(this, this.b, Nw, c, F(this.o, this, d, 6))
        }
    }
    ;
    var ON = function(a, b, c) {
        for (var d = nA(a.a), e = b != Ui, f = 0; f < d.length; f++)
            if (b == d[f]) {
                e = !1;
                break
            }
        if (e)
            for (e = {},
            0 < c.length && (e[c[0]] = !0),
            1 < c.length && (e[c[1]] = !0),
            f = d.length - 1; 0 <= f; f--)
                if (!e[d[f]]) {
                    d[f] = b;
                    break
                }
        a.update(d, b)
    }
      , NN = function(a, b) {
        b == Ui && (b = k);
        a.j != b && (a.j = b,
        a.dispatchEvent({
            type: Xk,
            data: a.j
        }))
    }
      , RN = function(a) {
        QN(a.a, a.c);
        QN(a.b, a.g)
    }
      , SN = function(a) {
        a.K = [];
        a.M = [];
        if (null != DEFAULT_SOURCES && null != DEFAULT_TARGETS) {
            for (var b = 0; b < DEFAULT_SOURCES.length; b++)
                kA(a.K, DEFAULT_SOURCES[b]);
            for (b = 0; b < DEFAULT_TARGETS.length; b++)
                kA(a.M, DEFAULT_TARGETS[b])
        }
    }
      , TN = function(a) {
        if (!a || 0 == a.length)
            return k;
        for (var b = [], c = 0; c < a.length; ++c)
            b.push(a[c]);
        return b.join(Ky)
    }
      , PN = function(a, b, c, d, e) {
        a.dispatchEvent({
            type: c,
            data: b,
            Wf: 6 == d
        });
        e && (3 == d || 4 == d) && a.a == a.b && a.a != Dy && e();
        4 != d && 3 != d || a.dispatchEvent(kr)
    }
      , UN = function(a, b) {
        for (var c = [], d = 0; d < a.length && !(a[d] != b && c.push(a[d]),
        3 <= c.length); ++d)
            ;
        return c
    }
      , QN = function(a, b) {
        if (a != Ui) {
            for (var c = 0; c < b.length && b[c] != a; ++c)
                ;
            c == b.length ? (b.unshift(a),
            10 < b.length && b.pop()) : (b.splice(c, 1),
            b.unshift(a))
        }
    };
    var VN = az();
    G(VN, fI);
    hz(VN);
    C = VN.prototype;
    C.Pa = function(a) {
        var b = XH(this, a)
          , b = a.a.a(q, {
            "class": Dm + b.join(l)
        }, a.ya());
        gI(b, a.C);
        return b
    }
    ;
    C.Sb = B(Lj);
    C.Hc = function(a) {
        return a.tagName == q
    }
    ;
    C.P = function(a, b) {
        K(b, Cm);
        return VN.v.P.call(this, a, b)
    }
    ;
    C.U = B(k);
    C.S = B(zm);
    kI(zm, function() {
        return new AI(null,VN.O())
    });
    var WN = bz(Vi);
    hz(WN);
    var XN = function(a, b) {
        a && (a.tabIndex = b ? 0 : -1)
    };
    WN.prototype.o = function(a) {
        return a.a.a(q, YN(this, a).join(l))
    }
    ;
    WN.prototype.g = $y();
    WN.prototype.a = function(a) {
        return a.tagName == q
    }
    ;
    WN.prototype.P = function(a, b) {
        b.id && YF(a, b.id);
        var c = this.S()
          , d = !1
          , e = TB(b);
        e && cA(e, function(b) {
            b == c ? d = !0 : b && (b == c + xc ? a.ba(!1) : b == c + Dc ? ZN(a, Lp) : b == c + bd && ZN(a, hy))
        }, this);
        d || K(b, c);
        $N(this, a, this.g(b));
        return b
    }
    ;
    var $N = function(a, b, c) {
        if (c)
            for (var d = c.firstChild, e; d && d.parentNode == c; ) {
                e = d.nextSibling;
                if (1 == d.nodeType) {
                    var f = a.c(d);
                    f && (f.G = d,
                    b.isEnabled() || f.ba(!1),
                    b.Fa(f),
                    f.P(d))
                } else
                    d.nodeValue && Dz(d.nodeValue) != k || c.removeChild(d);
                d = e
            }
    };
    WN.prototype.c = function(a) {
        a: {
            var b;
            a = TB(a);
            for (var c = 0, d = a.length; c < d; c++)
                if (b = a[c],
                b = b in jI ? jI[b]() : null) {
                    a = b;
                    break a
                }
            a = null
        }
        return a
    }
    ;
    WN.prototype.j = function(a) {
        a = a.l();
        ID(a, !0, FB);
        I && (a.hideFocus = !0);
        var b = this.b;
        b && NH(a, b)
    }
    ;
    WN.prototype.S = B("goog-container");
    var YN = function(a, b) {
        var c = a.S()
          , d = [c, b.yc == Lp ? c + Dc : c + bd];
        b.isEnabled() || d.push(c + xc);
        return d
    }
      , aO = B(hy);
    var bO = function(a, b, c) {
        W.call(this, c);
        this.Qb = b || WN.O();
        this.yc = a || aO()
    };
    G(bO, W);
    C = bO.prototype;
    C.Mc = null;
    C.dd = null;
    C.Qb = null;
    C.yc = null;
    C.Rb = !0;
    C.qc = !0;
    C.nc = !0;
    C.za = -1;
    C.Ka = null;
    C.Vb = !1;
    C.Kb = null;
    var cO = function(a) {
        return a.Mc || a.l()
    }
      , fO = function(a, b) {
        if (a.nc) {
            var c = cO(a)
              , d = a.oa;
            a.Mc = b;
            var e = cO(a);
            d && (a.Mc = c,
            dO(a, !1),
            a.Mc = b,
            DH(eO(a), e),
            dO(a, !0))
        } else
            throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    }
      , eO = function(a) {
        return a.dd || (a.dd = new EH(cO(a)))
    };
    C = bO.prototype;
    C.na = function() {
        this.G = this.Qb.o(this)
    }
    ;
    C.wb = function() {
        return this.Qb.g(this.l())
    }
    ;
    C.Ud = function(a) {
        return this.Qb.a(a)
    }
    ;
    C.Y = function(a) {
        this.G = this.Qb.P(this, a);
        a.style.display == us && (this.Rb = !1)
    }
    ;
    C.V = function() {
        bO.v.V.call(this);
        cG(this, function(a) {
            a.oa && gO(this, a)
        }, this);
        var a = this.l();
        this.Qb.j(this);
        this.setVisible(this.Rb, !0);
        X(this).a(this, Nl, this.pf).a(this, Hp, this.bd).a(this, Zx, this.ff).a(this, Is, this.Di).a(this, kk, this.Zh).a(a, Yr, this.$h).a(hC(a), bs, this.li).a(a, [Yr, bs, as, $r, tk], this.ci);
        this.nc && dO(this, !0)
    }
    ;
    var dO = function(a, b) {
        var c = X(a)
          , d = cO(a);
        b ? c.a(d, hm, a.sg).a(d, nj, a.Vd).a(eO(a), ar, a.Ja) : c.b(d, hm, a.sg).b(d, nj, a.Vd).b(eO(a), ar, a.Ja)
    };
    C = bO.prototype;
    C.Xa = function() {
        this.Ib(-1);
        this.Ka && this.Ka.Ga(!1);
        this.Vb = !1;
        bO.v.Xa.call(this)
    }
    ;
    C.L = function() {
        bO.v.L.call(this);
        this.dd && (this.dd.xa(),
        this.dd = null);
        this.Qb = this.Ka = this.Kb = this.Mc = null
    }
    ;
    C.pf = B(!0);
    C.bd = function(a) {
        var b = gG(this, a.target);
        if (-1 < b && b != this.za) {
            var c = hO(this);
            c && tI(c, !1);
            this.za = b;
            c = hO(this);
            this.Vb && sI(c, !0);
            this.Ka && c != this.Ka && (bI(c, 64) ? c.Ga(!0) : this.Ka.Ga(!1))
        }
        b = this.l();
        null != a.target.l() && OH(b, ci, a.target.l().id)
    }
    ;
    C.ff = function(a) {
        a.target == hO(this) && (this.za = -1);
        this.l().removeAttribute(Ci)
    }
    ;
    C.Di = function(a) {
        (a = a.target) && a != this.Ka && a.K() == this && (this.Ka && this.Ka.Ga(!1),
        this.Ka = a)
    }
    ;
    C.Zh = function(a) {
        a.target == this.Ka && (this.Ka = null);
        var b = this.l()
          , c = a.target.l();
        b && cI(a.target, 2) && c && RH(b, c)
    }
    ;
    C.$h = function(a) {
        this.qc && (this.Vb = !0);
        var b = cO(this);
        b && VC(b) && WC(b) ? b.focus() : a.preventDefault()
    }
    ;
    C.li = function() {
        this.Vb = !1
    }
    ;
    C.ci = function(a) {
        var b;
        a: {
            b = a.target;
            if (this.Kb)
                for (var c = this.l(); b && b !== c; ) {
                    var d = b.id;
                    if (d in this.Kb) {
                        b = this.Kb[d];
                        break a
                    }
                    b = b.parentNode
                }
            b = null
        }
        if (b)
            switch (a.type) {
            case Yr:
                b.Ya(a);
                break;
            case bs:
                b.gb(a);
                break;
            case as:
                b.jf(a);
                break;
            case $r:
                b.rf(a);
                break;
            case tk:
                b.gd(a)
            }
    }
    ;
    C.sg = az();
    C.Vd = function() {
        this.Ib(-1);
        this.Vb = !1;
        this.Ka && this.Ka.Ga(!1)
    }
    ;
    C.Ja = function(a) {
        return this.isEnabled() && this.isVisible() && (0 != dG(this) || this.Mc) && this.cd(a) ? (a.preventDefault(),
        a.stopPropagation(),
        !0) : !1
    }
    ;
    C.cd = function(a) {
        var b = hO(this);
        if (b && typeof b.Ja == um && b.Ja(a) || this.Ka && this.Ka != b && typeof this.Ka.Ja == um && this.Ka.Ja(a))
            return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
            return !1;
        switch (a.keyCode) {
        case 27:
            if (this.nc)
                cO(this).blur();
            else
                return !1;
            break;
        case 36:
            iO(this);
            break;
        case 35:
            jO(this);
            break;
        case 38:
            if (this.yc == hy)
                kO(this);
            else
                return !1;
            break;
        case 37:
            if (this.yc == Lp)
                fG(this) ? lO(this) : kO(this);
            else
                return !1;
            break;
        case 40:
            if (this.yc == hy)
                lO(this);
            else
                return !1;
            break;
        case 39:
            if (this.yc == Lp)
                fG(this) ? kO(this) : lO(this);
            else
                return !1;
            break;
        default:
            return !1
        }
        return !0
    }
    ;
    var gO = function(a, b) {
        var c = b.l()
          , c = c.id || (c.id = b.D());
        a.Kb || (a.Kb = {});
        a.Kb[c] = b
    };
    bO.prototype.Fa = function(a, b) {
        bO.v.Fa.call(this, a, b)
    }
    ;
    bO.prototype.Vc = function(a, b, c) {
        a.md |= 2;
        a.md |= 64;
        a.Aa(32, !1);
        oI(a, !1);
        var d = a.K() == this ? gG(this, a) : -1;
        bO.v.Vc.call(this, a, b, c);
        a.oa && this.oa && gO(this, a);
        a = d;
        -1 == a && (a = dG(this));
        a == this.za ? this.za = Math.min(dG(this) - 1, b) : a > this.za && b <= this.za ? this.za++ : a < this.za && b > this.za && this.za--
    }
    ;
    bO.prototype.removeChild = function(a, b) {
        if (a = mz(a) ? $F(this, a) : a) {
            var c = gG(this, a);
            -1 != c && (c == this.za ? (tI(a, !1),
            this.za = -1) : c < this.za && this.za--);
            var d = a.l();
            d && d.id && this.Kb && (c = this.Kb,
            d = d.id,
            d in c && delete c[d])
        }
        a = bO.v.removeChild.call(this, a, b);
        oI(a, !0);
        return a
    }
    ;
    var ZN = function(a, b) {
        if (a.l())
            throw Error(Pf);
        a.yc = b
    };
    bO.prototype.isVisible = z("Rb");
    bO.prototype.setVisible = function(a, b) {
        if (b || this.Rb != a && this.dispatchEvent(a ? kv : Gp)) {
            this.Rb = a;
            var c = this.l();
            c && (R(c, a),
            this.nc && XN(cO(this), this.qc && this.Rb),
            b || this.dispatchEvent(this.Rb ? gi : fi));
            return !0
        }
        return !1
    }
    ;
    bO.prototype.isEnabled = z(pu);
    bO.prototype.ba = function(a) {
        this.qc != a && this.dispatchEvent(a ? Kl : gl) && (a ? (this.qc = !0,
        cG(this, function(a) {
            a.uh ? delete a.uh : a.ba(!0)
        })) : (cG(this, function(a) {
            a.isEnabled() ? a.ba(!1) : a.uh = !0
        }),
        this.Vb = this.qc = !1),
        this.nc && XN(cO(this), a && this.Rb))
    }
    ;
    var mO = function(a, b) {
        b != a.nc && a.oa && dO(a, b);
        a.nc = b;
        a.qc && a.Rb && XN(cO(a), b)
    };
    bO.prototype.Ib = function(a) {
        (a = eG(this, a)) ? tI(a, !0) : -1 < this.za && tI(hO(this), !1)
    }
    ;
    var hO = function(a) {
        return eG(a, a.za)
    }
      , iO = function(a) {
        nO(a, function(a, c) {
            return (a + 1) % c
        }, dG(a) - 1)
    }
      , jO = function(a) {
        nO(a, function(a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, 0)
    }
      , lO = function(a) {
        nO(a, function(a, c) {
            return (a + 1) % c
        }, a.za)
    }
      , kO = function(a) {
        nO(a, function(a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, a.za)
    }
      , nO = function(a, b, c) {
        c = 0 > c ? gG(a, a.Ka) : c;
        var d = dG(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d; ) {
            var f = eG(a, c);
            if (f && a.Xf(f))
                return a.Ib(c),
                !0;
            e++;
            c = b.call(a, c, d)
        }
        return !1
    };
    bO.prototype.Xf = function(a) {
        return a.isVisible() && a.isEnabled() && bI(a, 2)
    }
    ;
    var oO = az();
    G(oO, SH);
    hz(oO);
    oO.prototype.S = B(Im);
    var pO = function(a, b, c) {
        mI.call(this, a, c || oO.O(), b);
        this.Aa(1, !1);
        this.Aa(2, !1);
        this.Aa(4, !1);
        this.Aa(32, !1);
        this.ec = 1
    };
    G(pO, mI);
    kI(Im, function() {
        return new pO(null)
    });
    var qO = function() {
        this.g = []
    };
    G(qO, SH);
    hz(qO);
    var rO = function(a, b) {
        var c = a.g[b];
        if (!c) {
            switch (b) {
            case 0:
                c = a.S() + Cc;
                break;
            case 1:
                c = a.S() + pc;
                break;
            case 2:
                c = a.S() + tc
            }
            a.g[b] = c
        }
        return c
    };
    C = qO.prototype;
    C.Sb = B("menuitem");
    C.Pa = function(a) {
        var b = a.a.a(q, XH(this, a).join(l), sO(this, a.ya(), a.a));
        tO(this, a, b, bI(a, 8) || bI(a, 16));
        return b
    }
    ;
    C.fb = function(a) {
        return a && a.firstChild
    }
    ;
    C.P = function(a, b) {
        var c = FC(b)
          , d = rO(this, 2);
        c && UB(c, d) || b.appendChild(sO(this, b.childNodes, a.a));
        UB(b, Om) && (a.Aa(16, !0),
        a && b && tO(this, a, b, !0));
        return qO.v.P.call(this, a, b)
    }
    ;
    C.xb = function(a, b) {
        var c = this.fb(a)
          , d = uO(this, a) ? c.firstChild : null;
        qO.v.xb.call(this, a, b);
        d && !uO(this, a) && c.insertBefore(d, c.firstChild || null)
    }
    ;
    var sO = function(a, b, c) {
        a = rO(a, 2);
        return c.a(q, a, b)
    }
      , uO = function(a, b) {
        var c = a.fb(b);
        if (c) {
            var c = c.firstChild
              , d = rO(a, 1);
            return !!c && HC(c) && UB(c, d)
        }
        return !1
    }
      , tO = function(a, b, c, d) {
        aI(a, c, b.ed());
        dI(a, b, c);
        d != uO(a, c) && (XB(c, Om, d),
        c = a.fb(c),
        d ? (a = rO(a, 1),
        c.insertBefore(b.a.a(q, a), c.firstChild || null)) : c.removeChild(c.firstChild))
    };
    qO.prototype.a = function(a) {
        switch (a) {
        case 2:
            return rO(this, 0);
        case 16:
        case 8:
            return Pm;
        default:
            return qO.v.a.call(this, a)
        }
    }
    ;
    qO.prototype.c = function(a) {
        var b = rO(this, 0);
        switch (a) {
        case Pm:
            return 16;
        case b:
            return 2;
        default:
            return qO.v.c.call(this, a)
        }
    }
    ;
    qO.prototype.S = B("goog-menuitem");
    var vO = function(a, b, c, d) {
        mI.call(this, a, d || qO.O(), c);
        this.sa = b
    };
    G(vO, mI);
    C = vO.prototype;
    C.U = function() {
        var a = this.sa;
        return null != a ? a : this.Na()
    }
    ;
    C.Aa = function(a, b) {
        vO.v.Aa.call(this, a, b);
        switch (a) {
        case 8:
            this.Ca() && !b && this.ra(!1);
            var c = this.l();
            c && this && c && tO(this.c, this, c, b);
            break;
        case 16:
            (c = this.l()) && this && c && tO(this.c, this, c, b)
        }
    }
    ;
    C.Na = function() {
        var a = this.ya();
        return kz(a) ? (a = eA(a, function(a) {
            return HC(a) && (UB(a, Jm) || UB(a, Mm)) ? k : ZC(a)
        }).join(k),
        Cz(a)) : vO.v.Na.call(this)
    }
    ;
    C.gb = function(a) {
        var b = this.K();
        if (b) {
            var c = b.X;
            b.X = null;
            if (b = c && nz(a.clientX))
                b = new M(a.clientX,a.clientY),
                b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b)
                return
        }
        vO.v.gb.call(this, a)
    }
    ;
    C.tc = function(a) {
        return a.keyCode == this.Sg && this.Xb(a) ? !0 : vO.v.tc.call(this, a)
    }
    ;
    C.Yh = z("Sg");
    kI("goog-menuitem", function() {
        return new vO(null)
    });
    vO.prototype.ed = function() {
        return bI(this, 16) ? Qr : bI(this, 8) ? Rr : vO.v.ed.call(this)
    }
    ;
    vO.prototype.K = function() {
        return mI.prototype.K.call(this)
    }
    ;
    vO.prototype.Ld = function() {
        return mI.prototype.Ld.call(this)
    }
    ;
    var wO = az();
    G(wO, SH);
    hz(wO);
    wO.prototype.Pa = function(a) {
        return a.a.a(q, this.S())
    }
    ;
    wO.prototype.P = function(a, b) {
        b.id && YF(a, b.id);
        if (b.tagName == ig) {
            var c = b;
            b = this.Pa(a);
            AC(b, c);
            CC(c)
        } else
            K(b, this.S());
        return b
    }
    ;
    wO.prototype.xb = az();
    wO.prototype.S = B(Nm);
    var xO = function(a, b) {
        mI.call(this, null, a || wO.O(), b);
        this.Aa(1, !1);
        this.Aa(2, !1);
        this.Aa(4, !1);
        this.Aa(32, !1);
        this.ec = 1
    };
    G(xO, mI);
    xO.prototype.V = function() {
        xO.v.V.call(this);
        NH(this.l(), av)
    }
    ;
    kI(Nm, function() {
        return new xO
    });
    var yO = function(a) {
        this.b = a || Pr
    };
    G(yO, WN);
    hz(yO);
    yO.prototype.a = function(a) {
        return a.tagName == yh || yO.v.a.call(this, a)
    }
    ;
    yO.prototype.c = function(a) {
        return a.tagName == ig ? new xO : yO.v.c.call(this, a)
    }
    ;
    yO.prototype.S = B(Gm);
    yO.prototype.j = function(a) {
        yO.v.j.call(this, a);
        OH(a.l(), yp, zx)
    }
    ;
    var zO = function(a) {
        xO.call(this, wO.O(), a)
    };
    G(zO, xO);
    kI(Nm, function() {
        return new xO
    });
    var AO = function(a, b) {
        bO.call(this, hy, b || yO.O(), a);
        mO(this, !1)
    };
    G(AO, bO);
    AO.prototype.N = !0;
    AO.prototype.S = function() {
        return this.Qb.S()
    }
    ;
    var BO = function(a, b) {
        if (JC(a.l(), b))
            return !0;
        for (var c = 0, d = dG(a); c < d; c++) {
            var e = eG(a, c);
            if (typeof e.lf == um && e.lf(b))
                return !0
        }
        return !1
    };
    C = AO.prototype;
    C.setVisible = function(a, b, c) {
        (b = AO.v.setVisible.call(this, a, b)) && a && this.oa && this.N && cO(this).focus();
        a && c && nz(c.clientX) ? this.X = new M(c.clientX,c.clientY) : this.X = null;
        return b
    }
    ;
    C.pf = function(a) {
        this.N && cO(this).focus();
        return AO.v.pf.call(this, a)
    }
    ;
    C.Hg = function(a) {
        var b = new RegExp(Ph + Sz(a),aq);
        return nO(this, function(a, d) {
            var e = 0 > a ? 0 : a
              , f = !1;
            do {
                ++a;
                a == d && (a = 0,
                f = !0);
                var g = eG(this, a).Na();
                if (g && g.match(b))
                    return a
            } while (!f || a != e);return this.za
        }, this.za)
    }
    ;
    C.Xf = function(a) {
        return a.isEnabled() && a.isVisible() && bI(a, 2)
    }
    ;
    C.Y = function(a) {
        for (var b = this.Qb, c = jC(this.a.b, q, b.S() + tc, a), d = c.length, e = 0; e < d; e++)
            $N(b, this, c[e]);
        AO.v.Y.call(this, a)
    }
    ;
    C.cd = function(a) {
        var b = AO.v.cd.call(this, a);
        b || cG(this, function(c) {
            !b && c.Yh && c.Sg == a.keyCode && (this.isEnabled() && this.Ib(gG(this, c)),
            b = c.Ja(a))
        }, this);
        return b
    }
    ;
    C.Ib = function(a) {
        AO.v.Ib.call(this, a);
        var b = eG(this, a);
        if (b) {
            a = this.l() || pC(document);
            var b = b.l()
              , c = a || pC(document)
              , d = sD(b)
              , e = sD(c)
              , f = QD(c);
            if (c == pC(document)) {
                var g = d.x - c.scrollLeft
                  , d = d.y - c.scrollTop;
                !I || 10 <= SB || (g += f.left,
                d += f.top)
            } else
                g = d.x - e.x - f.left,
                d = d.y - e.y - f.top;
            var f = c.clientHeight - b.offsetHeight
              , e = c.scrollLeft
              , m = c.scrollTop
              , e = e + Math.min(g, Math.max(g - (c.clientWidth - b.offsetWidth), 0))
              , m = m + Math.min(d, Math.max(d - f, 0))
              , b = new M(e,m);
            a.scrollLeft = b.x;
            a.scrollTop = b.y
        }
    }
    ;
    var CO = function(a, b, c) {
        this.b = a;
        this.g = b;
        this.w = c
    };
    G(CO, LI);
    CO.prototype.a = function(a, b, c) {
        KI(this.b, this.g, a, b, void 0, c, this.w)
    }
    ;
    var DO = function(a, b, c, d) {
        CO.call(this, a, b);
        this.j = c ? 5 : 0;
        this.o = d || void 0
    };
    G(DO, CO);
    DO.prototype.B = z("j");
    DO.prototype.c = bz("j");
    DO.prototype.a = function(a, b, c, d) {
        var e = KI(this.b, this.g, a, b, null, c, 10, d, this.o);
        if (e & 496) {
            var f = EO(e, this.g);
            b = EO(e, b);
            e = KI(this.b, f, a, b, null, c, 10, d, this.o);
            e & 496 && (f = EO(e, f),
            b = EO(e, b),
            KI(this.b, f, a, b, null, c, this.j, d, this.o))
        }
    }
    ;
    var EO = function(a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    };
    var FO = function(a, b, c, d) {
        DO.call(this, a, b, c || d);
        (c || d) && this.c(65 | (d ? 32 : 132))
    };
    G(FO, DO);
    var GO = az();
    G(GO, BI);
    hz(GO);
    GO.prototype.fb = function(a) {
        return GO.v.fb.call(this, a && a.firstChild)
    }
    ;
    GO.prototype.P = function(a, b) {
        var c = kC(Sb, Gm, b)[0];
        if (c) {
            R(c, !1);
            hC(c).body.appendChild(c);
            var d = new AO;
            d.P(c);
            a.Qc(d)
        }
        return GO.v.P.call(this, a, b)
    }
    ;
    GO.prototype.Hd = function(a, b) {
        return GO.v.Hd.call(this, [b.a(q, Dm + (this.S() + oc), a), b.a(q, Dm + (this.S() + yc), Ny)], b)
    }
    ;
    GO.prototype.S = B(Hm);
    var HO = function(a, b, c, d, e) {
        AI.call(this, a, c || GO.O(), d);
        this.Aa(64, !0);
        this.J = new FO(null,5);
        b && this.Qc(b);
        this.W = new qF(500);
        !NF && !OF || J(Zd) || (this.me = !0);
        this.Ac = e || yO.O()
    };
    G(HO, AI);
    C = HO.prototype;
    C.me = !1;
    C.V = function() {
        HO.v.V.call(this);
        IO(this, !0);
        this.b && JO(this, this.b, !0);
        OH(this.G, yp, !!this.b)
    }
    ;
    C.Xa = function() {
        HO.v.Xa.call(this);
        IO(this, !1);
        if (this.b) {
            this.Ga(!1);
            this.b.Xa();
            JO(this, this.b, !1);
            var a = this.b.l();
            a && CC(a)
        }
    }
    ;
    C.L = function() {
        HO.v.L.call(this);
        this.b && (this.b.xa(),
        delete this.b);
        delete this.Bc;
        this.W.xa()
    }
    ;
    C.Ya = function(a) {
        HO.v.Ya.call(this, a);
        cI(this, 4) && (this.Ga(!cI(this, 64), a),
        this.b && (this.b.Vb = cI(this, 64)))
    }
    ;
    C.gb = function(a) {
        HO.v.gb.call(this, a);
        this.b && !cI(this, 4) && (this.b.Vb = !1)
    }
    ;
    C.Xb = function() {
        sI(this, !1);
        return !0
    }
    ;
    C.ki = function(a) {
        this.b && this.b.isVisible() && !this.lf(a.target) && this.Ga(!1)
    }
    ;
    C.lf = function(a) {
        return a && JC(this.l(), a) || this.b && BO(this.b, a) || !1
    }
    ;
    C.tc = function(a) {
        if (32 == a.keyCode) {
            if (a.preventDefault(),
            a.type != dr)
                return !0
        } else if (a.type != ar)
            return !1;
        if (this.b && this.b.isVisible()) {
            var b = 13 == a.keyCode || 32 == a.keyCode
              , c = this.b.Ja(a);
            return 27 == a.keyCode || b ? (this.Ga(!1),
            !0) : c
        }
        return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Ga(!0, a),
        !0) : !1
    }
    ;
    C.qf = function() {
        this.Ga(!1)
    }
    ;
    C.Bi = function() {
        cI(this, 4) || this.Ga(!1)
    }
    ;
    C.Xd = function(a) {
        this.me || this.Ga(!1);
        HO.v.Xd.call(this, a)
    }
    ;
    var KO = function(a) {
        a.b || a.Qc(new AO(a.a,a.Ac));
        return a.b || null
    };
    HO.prototype.Qc = function(a) {
        var b = this.b;
        if (a != b && (b && (this.Ga(!1),
        this.oa && JO(this, b, !1),
        delete this.b),
        this.oa && OH(this.G, yp, !!a),
        a)) {
            this.b = a;
            aG(a, this);
            a.setVisible(!1);
            var c = this.me;
            (a.N = c) && mO(a, !0);
            this.oa && JO(this, a, !0)
        }
        return b
    }
    ;
    HO.prototype.Zd = function(a) {
        KO(this).Fa(a, !0)
    }
    ;
    HO.prototype.vc = function(a) {
        var b = KO(this);
        (a = b.removeChild(eG(b, a), !0)) && a.xa()
    }
    ;
    var LO = function(a, b) {
        return a.b ? eG(a.b, b) : null
    }
      , MO = function(a) {
        return a.b ? dG(a.b) : 0
    };
    HO.prototype.setVisible = function(a, b) {
        var c = HO.v.setVisible.call(this, a, b);
        c && !this.isVisible() && this.Ga(!1);
        return c
    }
    ;
    HO.prototype.ba = function(a) {
        HO.v.ba.call(this, a);
        this.isEnabled() || this.Ga(!1)
    }
    ;
    HO.prototype.Ga = function(a, b) {
        HO.v.Ga.call(this, a);
        if (this.b && cI(this, 64) == a) {
            if (a)
                this.b.oa || this.b.$(),
                this.mb = tD(this.l()),
                this.Ua = BD(this.l()),
                NO(this),
                !b || 40 != b.keyCode && 38 != b.keyCode ? this.b.Ib(-1) : iO(this.b);
            else {
                sI(this, !1);
                this.b.Vb = !1;
                var c = this.l();
                c && (OH(c, ci, k),
                OH(c, Ss, k));
                null != this.X && (this.X = void 0,
                (c = this.b.l()) && yD(c, k, k))
            }
            this.b.setVisible(a, !1, b);
            if (!this.Ma) {
                var c = X(this)
                  , d = a ? c.a : c.b;
                d.call(c, this.a.b, Yr, this.ki, !0);
                this.me && d.call(c, this.b, nj, this.Bi);
                d.call(c, this.W, Ow, this.ac);
                a ? sF(this.W) : rF(this.W)
            }
        }
        this.b && this.b.l() && this.b.G.removeAttribute(Ei)
    }
    ;
    var NO = function(a) {
        if (a.b.oa) {
            var b = a.J;
            a.J.b = a.Bc || a.l();
            var c = a.b.l();
            a.b.isVisible() || (c.style.visibility = Fp,
            R(c, !0));
            !a.X && a.J.B && a.J.j & 32 && (a.X = AD(c));
            b.a(c, b.g ^ 1, null, a.X);
            a.b.isVisible() || (R(c, !1),
            c.style.visibility = ky)
        }
    };
    HO.prototype.ac = function() {
        var a = BD(this.l()), b = tD(this.l()), c;
        c = this.Ua;
        (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.mb,
        c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
        c && (this.Ua = a,
        this.mb = b,
        NO(this))
    }
    ;
    var JO = function(a, b, c) {
        var d = X(a);
        c = c ? d.a : d.b;
        c.call(d, b, v, a.qf);
        c.call(d, b, kk, a.Yb);
        c.call(d, b, Hp, a.Zb);
        c.call(d, b, Zx, a.$b)
    }
      , IO = function(a, b) {
        var c = X(a);
        (b ? c.a : c.b).call(c, a.l(), br, a.kc)
    };
    HO.prototype.Zb = function(a) {
        (a = a.target.l()) && OO(this, a)
    }
    ;
    HO.prototype.kc = function(a) {
        bI(this, 32) && this.l() && this.b && this.b.isVisible() && a.stopPropagation()
    }
    ;
    HO.prototype.$b = function() {
        if (!hO(this.b)) {
            var a = this.l();
            OH(a, ci, k);
            OH(a, Ss, k)
        }
    }
    ;
    HO.prototype.Yb = function(a) {
        if (cI(this, 64) && a.target instanceof vO) {
            a = a.target;
            var b = a.l();
            a.isVisible() && cI(a, 2) && null != b && OO(this, b)
        }
    }
    ;
    var OO = function(a, b) {
        var c = a.l()
          , d = QH(b) || b;
        if (!d.id) {
            var e = UF.O();
            d.id = VF(e)
        }
        RH(c, d);
        OH(c, Ss, d.id)
    };
    kI(Hm, function() {
        return new HO(null)
    });
    var PO = az();
    G(PO, VN);
    hz(PO);
    PO.prototype.Pa = function(a) {
        var b = XH(this, a)
          , b = a.a.a(q, {
            "class": Dm + b.join(l)
        }, [QO(this, a.ya(), a.a), RO(this, a.a)]);
        gI(b, a.C);
        return b
    }
    ;
    PO.prototype.fb = function(a) {
        return a && a.firstChild
    }
    ;
    PO.prototype.P = function(a, b) {
        var c = kC(Sb, Gm, b)[0];
        if (c) {
            R(c, !1);
            a.a.b.body.appendChild(c);
            var d = new AO;
            d.P(c);
            a.Qc(d)
        }
        kC(Sb, this.S() + oc, b)[0] || b.appendChild(QO(this, b.childNodes, a.a));
        kC(Sb, this.S() + yc, b)[0] || b.appendChild(RO(this, a.a));
        return PO.v.P.call(this, a, b)
    }
    ;
    var QO = function(a, b, c) {
        return c.a(q, Dm + (a.S() + oc), b)
    }
      , RO = function(a, b) {
        return b.a(q, {
            "class": Dm + (a.S() + yc),
            "aria-hidden": !0
        }, Ny)
    };
    PO.prototype.S = B(Am);
    kI(Am, function() {
        return new HO(null,null,PO.O())
    });
    var SO = az();
    hz(SO);
    var TO = function(a) {
        var b;
        a: {
            b = a.changedTouches[0];
            var c = k;
            switch (a.type) {
            case cx:
                c = Yr;
                break;
            case bx:
                c = Zr;
                break;
            case ax:
                c = bs;
                break;
            default:
                b = null;
                break a
            }
            var d = document.createEvent(Dg);
            d.initMouseEvent(c, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            b = d
        }
        null != b && (a.changedTouches[0].target.dispatchEvent(b),
        a.preventDefault())
    }
      , UO = NF || OF || PF
      , VO = function(a, b) {
        UO && (b.addEventListener(cx, TO, !0),
        b.addEventListener(bx, TO, !0),
        b.addEventListener(ax, TO, !0),
        b.addEventListener($w, TO, !0))
    };
    var WO = function(a, b, c) {
        vO.call(this, a, b, c);
        this.Aa(8, !0)
    };
    G(WO, vO);
    WO.prototype.Xb = function() {
        return this.dispatchEvent(v)
    }
    ;
    kI(Om, function() {
        return new WO(null)
    });
    var YO = function(a) {
        U.call(this);
        this.a = [];
        XO(this, a)
    };
    G(YO, U);
    YO.prototype.b = null;
    var XO = function(a, b) {
        b && (cA(b, function(a) {
            ZO(a, !1)
        }, a),
        oA(a.a, b))
    }
      , $O = function(a, b, c) {
        b && (ZO(b, !1),
        qA(a.a, c, 0, b))
    }
      , aP = function(a) {
        var b = a.b;
        return b ? bA(a.a, b) : -1
    };
    YO.prototype.clear = function() {
        var a = this.a;
        if (!kz(a))
            for (var b = a.length - 1; 0 <= b; b--)
                delete a[b];
        a.length = 0;
        this.b = null
    }
    ;
    YO.prototype.L = function() {
        YO.v.L.call(this);
        delete this.a;
        this.b = null
    }
    ;
    var ZO = function(a, b) {
        a && typeof a.Jf == um && a.Jf(b)
    };
    var bP = function(a, b, c, d, e) {
        HO.call(this, a, b, c, d, e || new yO(ur));
        this.aa = this.ya();
        this.qa = null;
        this.kf = ur
    };
    G(bP, HO);
    C = bP.prototype;
    C.va = null;
    C.V = function() {
        bP.v.V.call(this);
        cP(this);
        dP(this)
    }
    ;
    C.Y = function(a) {
        bP.v.Y.call(this, a);
        (a = this.Na()) ? (this.aa = a,
        cP(this)) : eP(this) || fP(this, 0)
    }
    ;
    C.L = function() {
        bP.v.L.call(this);
        this.va && (this.va.xa(),
        this.va = null);
        this.aa = null
    }
    ;
    C.qf = function(a) {
        gP(this, a.target);
        bP.v.qf.call(this, a);
        a.stopPropagation();
        this.dispatchEvent(v)
    }
    ;
    C.Hi = function() {
        var a = eP(this);
        bP.v.Td.call(this, a && a.U());
        cP(this)
    }
    ;
    C.Qc = function(a) {
        var b = bP.v.Qc.call(this, a);
        a != b && (this.va && this.va.clear(),
        a && (this.va ? cG(a, function(a) {
            hP(a);
            var b = this.va;
            $O(b, a, b.a.length)
        }, this) : iP(this, a)));
        return b
    }
    ;
    C.Zd = function(a) {
        hP(a);
        bP.v.Zd.call(this, a);
        if (this.va) {
            var b = this.va;
            $O(b, a, b.a.length)
        } else
            iP(this, KO(this));
        jP(this)
    }
    ;
    C.vc = function(a) {
        bP.v.vc.call(this, a);
        if (this.va) {
            var b = this.va;
            (a = b.a[a] || null) && lA(b.a, a) && a == b.b && (b.b = null,
            b.dispatchEvent(Uu))
        }
    }
    ;
    var gP = function(a, b) {
        if (a.va) {
            var c = eP(a)
              , d = a.va;
            b != d.b && (ZO(d.b, !1),
            d.b = b,
            ZO(b, !0));
            d.dispatchEvent(Uu);
            b != c && a.dispatchEvent(Xj)
        }
    }
      , fP = function(a, b) {
        a.va && gP(a, a.va.a[b] || null)
    };
    bP.prototype.Td = function(a) {
        if (null != a && this.va)
            for (var b = 0, c; c = this.va.a[b] || null; b++)
                if (c && typeof c.U == um && c.U() == a) {
                    gP(this, c);
                    return
                }
        gP(this, null)
    }
    ;
    bP.prototype.U = function() {
        var a = eP(this);
        return a ? a.U() : null
    }
    ;
    var eP = function(a) {
        return a.va ? a.va.b : null
    }
      , kP = function(a) {
        return a.va ? aP(a.va) : -1
    }
      , iP = function(a, b) {
        a.va = new YO;
        b && cG(b, function(a) {
            hP(a);
            var b = this.va;
            $O(b, a, b.a.length)
        }, a);
        dP(a)
    }
      , dP = function(a) {
        a.va && X(a).a(a.va, Uu, a.Hi)
    }
      , cP = function(a) {
        var b = eP(a);
        a.g(b ? b.Na() : a.aa);
        var c = a.c.fb(a.l());
        c && a.a.Ni(c) && (null == a.qa && (a.qa = PH(c, hr)),
        b = (b = b ? b.l() : null) ? PH(b, hr) : a.qa,
        OH(c, hr, b),
        jP(a))
    }
      , jP = function(a) {
        var b = a.c;
        if (b && (b = b.fb(a.l()))) {
            var c = a.G;
            b.id || (b.id = VF(UF.O()));
            NH(b, Ks);
            OH(c, ci, b.id);
            a.va && (c = nA(a.va.a),
            OH(b, cv, lP(c)),
            a = aP(a.va),
            OH(b, bu, 0 <= a ? lP(pA(c, 0, a + 1)) : 0))
        }
    }
      , lP = function(a) {
        return hA(a, function(a) {
            return a instanceof vO
        })
    }
      , hP = function(a) {
        a.kf = a instanceof vO ? Ks : av
    };
    bP.prototype.Ga = function(a, b) {
        bP.v.Ga.call(this, a, b);
        cI(this, 64) ? KO(this).Ib(kP(this)) : jP(this)
    }
    ;
    kI("goog-select", function() {
        return new bP(null)
    });
    var pP = function(a, b, c, d, e, f, g, m, n) {
        c = new mP(c);
        bP.call(this, k, c, g, m);
        this.J.c && this.J.c(33);
        this.Ia = a;
        this.Wb = a.id;
        YF(c, this.Wb + Jc);
        this.Z = [];
        this.wa = null != f ? f : k;
        this.Tc = !!n;
        for (a = 0; a < b.length; a++) {
            var p;
            f = null != d && a < d.length && null != d[a] ? d[a] : b[a];
            f != av ? p = new WO(b[a],f) : p = new zO;
            this.Zd(p)
        }
        this.P(this.Ia);
        nP(this, null != e ? e : oP(this, 0))
    };
    G(pP, bP);
    pP.prototype.g = function(a) {
        this.Tc ? a = this.wa : this.wa && (a = this.wa + l + a);
        pP.v.g.call(this, a)
    }
    ;
    var qP = function(a) {
        a.zb && (vF(a.zb),
        a.zb = null);
        a.zb = uF(function() {
            a.Z = []
        }, 1E3)
    };
    pP.prototype.L = function() {
        CC(this.Ia);
        this.Ia = null;
        pP.v.L.call(this)
    }
    ;
    pP.prototype.Ja = function(a) {
        if (!cI(this, 64) && 48 <= a.keyCode && 90 >= a.keyCode) {
            qP(this);
            this.Z.push(String.fromCharCode(a.keyCode));
            a = this.Z.join(k);
            var b = new RegExp(Ph + Sz(a),aq)
              , c = kP(this)
              , d = c;
            -1 < d && 1 < a.length && d--;
            var e = MO(this)
              , f = 0 > d ? 0 : d
              , g = !1
              , m = !1;
            do {
                ++d;
                d == e && (d = 0,
                g = !0);
                var n = LO(this, d);
                if (n instanceof vO && (n = n.Na()) && n.match(b)) {
                    m = !0;
                    break
                }
                g && d == f && 3 == a.length && (n = a.split(k),
                n[1] == n[2] && (b = new RegExp(Ph + n[1],aq),
                this.Z = [n[1]],
                g = !1))
            } while (!g || d != f);m && d != c && fP(this, d);
            return !0
        }
        return pP.v.Ja.call(this, a)
    }
    ;
    pP.prototype.vc = function(a) {
        var b = kP(this);
        pP.v.vc.call(this, a);
        (a == b || -1 === b) && LO(this, 0)instanceof vO && fP(this, 0)
    }
    ;
    var rP = function(a, b) {
        if (b) {
            for (var c, d = 0; c = LO(a, d); d++)
                if (c instanceof vO && c.U() == b)
                    return LO(a, d).Na();
            return k
        }
        c = kP(a);
        return LO(a, c).Na()
    }
      , sP = function(a, b) {
        var c = a.U() == Ui;
        if (b != k)
            for (var d, e = 0; d = LO(a, e); e++)
                if (d instanceof vO && d.U() == Ui) {
                    d.Na() != b && (d.g(b),
                    c && a.g(b));
                    break
                }
    }
      , nP = function(a, b) {
        var c;
        a: {
            for (var d = 0; c = LO(a, d); d++)
                if (c instanceof vO && c.U() == b) {
                    c = d;
                    break a
                }
            c = -1
        }
        0 <= c && fP(a, c)
    }
      , oP = function(a, b) {
        var c = k
          , d = LO(a, b);
        d instanceof vO && (c = d.U());
        return c
    };
    pP.prototype.U = function() {
        var a = kP(this);
        return -1 != a ? oP(this, a) : k
    }
    ;
    var mP = function(a, b, c) {
        this.b = a;
        this.w = [];
        this.F = [];
        AO.call(this, b, c)
    };
    G(mP, AO);
    C = mP.prototype;
    C.yg = P(nl, {
        id: "goog-menuitem-group-",
        "class": Lm
    });
    C.sf = !1;
    C.zb = 0;
    C.na = function() {
        mP.v.na.call(this);
        this.l().id = this.D()
    }
    ;
    C.Vc = function(a, b, c) {
        this.sf && (this.c = b == dG(this) ? this.g[b - 1] : this.g[b]);
        mP.v.Vc.call(this, a, b, c);
        this.c && (this.c = null,
        tP(this))
    }
    ;
    C.removeChild = function(a, b) {
        mz(a) && (a = $F(this, a));
        var c = gG(this, a);
        this.sf && (this.c = 0 == c ? this.g[c + 1] : this.g[c]);
        c = mP.v.removeChild.call(this, a, b);
        this.c && (this.c = null,
        tP(this));
        return c
    }
    ;
    C.wb = function() {
        var a;
        this.c ? a = this.c : a = mP.v.wb.call(this);
        return a
    }
    ;
    C.$ = function(a) {
        mP.v.$.call(this, a);
        tP(this);
        VO(SO.O(), this.l())
    }
    ;
    C.P = function(a) {
        mP.v.P.call(this, a);
        tP(this);
        VO(SO.O(), this.l())
    }
    ;
    var tP = function(a) {
        a.sf = !0;
        uP(a);
        var b = a.l();
        b.innerHTML = k;
        for (var c = null, d = null, e = [], f = 0, c = document.createElement(zw), d = c.insertRow(-1), g = 0, m; m = a.j[g]; g++) {
            var n = d.insertCell(d.cells.length);
            n.appendChild(m);
            m.style.width = Kd;
            UB(m, Bm) ? (e.push(n),
            d = c.insertRow(c.rows.length)) : f++
        }
        for (g = 0; n = e[g]; g++)
            n.setAttribute(nk, f),
            n.colSpan = f;
        b.appendChild(c)
    }
      , vP = function(a, b, c) {
        jA(a.j, b.kb) || a.j.push(b.kb);
        eG(a, c + 1) && (b.kb = a.yg.cloneNode(!0),
        b.kb.id += b.Ug,
        b.Ug++,
        b.fe = 1);
        return b
    }
      , uP = function(a) {
        a.j = [];
        a.g = {};
        var b = a.yg.cloneNode(!0);
        b.id += 1;
        var c = {
            kb: b,
            Ug: 2,
            fe: 1
        };
        cG(a, function(a, b) {
            c.kb.appendChild(a.l());
            this.g[b] = c.kb;
            c.fe == this.b ? c = vP(this, c, b) : a instanceof vO && c.fe++;
            jA(this.F, b) && (L(c.kb, Lm),
            K(c.kb, Bm),
            this.g[b] = c.kb,
            c = vP(this, c, b))
        }, a);
        1 == c.fe || jA(a.j, c.kb) || a.j.push(c.kb)
    };
    mP.prototype.setVisible = function(a, b) {
        var c = mP.v.setVisible.call(this, a, b);
        c && this.zb && (vF(this.zb),
        this.zb = 0);
        return c
    }
    ;
    mP.prototype.cd = function(a) {
        var b = mP.v.cd.call(this, a);
        if (b)
            return b;
        switch (a.keyCode) {
        case 37:
            return nO(this, F(this.A, this), this.za),
            !0;
        case 39:
            return nO(this, F(this.C, this), this.za),
            !0;
        default:
            return 48 <= a.keyCode && 90 >= a.keyCode ? (wP(this),
            this.w.push(String.fromCharCode(a.keyCode)),
            this.Hg(this.w.join(k)),
            !0) : !1
        }
    }
    ;
    var wP = function(a) {
        a.zb && (vF(a.zb),
        a.zb = 0);
        a.zb = uF(function() {
            this.w = []
        }, 1E3, a)
    };
    mP.prototype.Hg = function(a) {
        var b = new RegExp(Ph + Sz(a),aq)
          , c = this.za;
        -1 < c && 1 < a.length && c--;
        return nO(this, function(a, c) {
            var f = 0 > a ? 0 : a
              , g = !1;
            do {
                ++a;
                a == c && (a = 0,
                g = !0);
                var m = eG(this, a).Na();
                if (m && m.match(b))
                    return a
            } while (!g || a != f);return this.za
        }, c)
    }
    ;
    mP.prototype.A = function(a, b) {
        var c = a - this.b, d;
        0 > c && (d = c + b + (Math.ceil(b / this.b) * this.b - b) + this.b);
        return d || c
    }
    ;
    mP.prototype.C = function(a, b) {
        var c = a + this.b, d;
        c > b && (d = c - b - (Math.ceil(b / this.b) * this.b - b) - this.b);
        return d || c
    }
    ;
    var xP = function(a) {
        this.F = N(a);
        var b = this.F.id + Bc, c, d = kC(Ks, null, this.F);
        a = [];
        var e = [], f, g = 0;
        if (EGGS_JANGO) {
            for (var m = 0, g = 0; f = d[g]; g++)
                f.value == av && m++;
            g = m
        }
        for (var n = !1, p = 0, m = 0; f = d[m]; m++) {
            var r = YC(f);
            if (EGGS_JANGO) {
                var u;
                if (u = !n && p >= g)
                    u = String(r).toLowerCase(),
                    u = 0 < (u < Si ? -1 : u == Si ? 0 : 1);
                u && (a.push(Df),
                e.push(ou),
                n = !0);
                f.value == av && p++
            }
            a.push(r);
            e.push(f.value);
            f.selected && (c = f.value)
        }
        this.R = P(oq, {
            type: Fp,
            id: this.F.id,
            name: this.F.name,
            value: c
        });
        AC(this.R, this.F);
        d = document.getElementById(b);
        null == d && (d = P(nl, {
            id: b
        }),
        AC(d, this.F));
        b = k;
        f = kC(hr);
        for (m = 0; g = f[m]; m++)
            g.htmlFor && g.htmlFor == this.F.id && (b = YC(g),
            CC(g));
        m = PO.O();
        pP.call(this, d, a, 16, e, c, b, m, void 0, b == k);
        b == k && (iI(this.c, this, 1),
        K(this.l(), Xn));
        T(this, Xj, this.Ab, !1, this);
        CC(this.F);
        this.Da = 3;
        this.Ba = 0;
        T(this, [kv, v], this.Uc, !1, this)
    };
    G(xP, pP);
    xP.prototype.L = function() {
        CC(this.R);
        this.R = null;
        xP.v.L.call(this)
    }
    ;
    xP.prototype.Uc = function(a) {
        var b;
        a.type == kv ? this.zc = wz() : b = a.target.U();
        b && (this.Ba = wz() - this.zc)
    }
    ;
    xP.prototype.Ab = function() {
        var a = this.U();
        this.R.value != a && (this.R.value = a)
    }
    ;
    var yP = function(a) {
        var b = [], c;
        c = MO(a);
        for (var d = 0; d < a.Da + 1 && d < c; d++) {
            if (LO(a, d)instanceof zO) {
                for (c = 0; c < d; c++)
                    b.push(oP(a, c));
                break
            }
            if (oP(a, d) == Ui)
                break
        }
        if (b.length) {
            d = a.U();
            c = 0;
            for (b = b.length + 1; c < b; c++)
                a.vc(0);
            nP(a, d)
        } else
            LO(a, 0)instanceof zO && a.vc(0)
    };
    xP.prototype.Va = function(a) {
        var b = a.data;
        a = [];
        for (var c = 0; c < b.length; ++c)
            b[c] != this.U() && a.push(b[c]);
        for (b = 0; c = LO(this, b); b++)
            c.U && c.U() && (-1 != bA(a, c.U()) ? K(c.l(), Km) : L(c.l(), Km))
    }
    ;
    var zP = function(a, b, c, d) {
        U.call(this);
        this.G = a;
        this.g = b;
        a = DC(this.G);
        this.b = c ? c : a.length;
        zC(this.G);
        this.a = [];
        for (c = 0; c < this.b; ++c)
            a = new hK(k),
            a.Aa(16, !0),
            T(a, v, this.o, !1, this),
            a.$(this.G),
            iI(a.c, a, 0 == c ? 2 : 3),
            this.a.push(a);
        if (this.c = d ? d : !1)
            a = new hK(k),
            a.Aa(16, !0),
            T(a, v, this.o, !1, this),
            a.$(this.G),
            iI(a.c, a, 3),
            this.a.push(a)
    };
    G(zP, U);
    zP.prototype.j = function(a) {
        var b = a.selected;
        a = a.data.slice(0, this.b);
        for (var c = 0; c < a.length; ++c) {
            this.a[c].Td(a[c]);
            var d = this.g(a[c]);
            this.a[c].g(d);
            this.a[c].setVisible(!0);
            this.a[c].ra(a[c] == b)
        }
        for (; c < this.b; ++c)
            this.a[c].setVisible(!1);
        this.c && (a = this.a[this.b],
        a.Td(Ui),
        a.g(detect_language),
        a.setVisible(!0),
        a.ra(Ui == b));
        R(this.G, !0)
    }
    ;
    zP.prototype.o = function(a) {
        a.a.ra(!0);
        this.dispatchEvent({
            type: w,
            data: a.a.U()
        })
    }
    ;
    zP.prototype.B = function(a) {
        if (this.c) {
            var b = this.a[this.a.length - 1];
            a.data == k ? b.g(detect_language) : (a = source_language_detected.replace(/%\d\$s/g, this.g(a.data)),
            b.g(a))
        }
    }
    ;
    var AP = bz(t)
      , BP = function(a, b, c, d) {
        T(b, Mv, c.Va, !1, c);
        T(b, Mw, d.Va, !1, d);
        c = a.a;
        T(b, Nv, c.Ia, !1, c);
        a = a.a;
        T(b, Nw, a.Ia, !1, a)
    };
    AP.prototype.b = function(a) {
        for (var b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            if (null != c && null != c.l()) {
                var d = this.a;
                T(c.l(), w, d.Ia, !1, d)
            }
        }
    }
    ;
    var CP = function(a) {
        return (a = a.exec(GA)) ? a[1] : k
    }
      , DP = function() {
        if (MF)
            return CP(/Firefox\/([0-9.]+)/);
        if (I || DB || CB)
            return PB;
        if (QF)
            return CP(/Chrome\/([0-9.]+)/);
        if (RF && !(BB() || H(bq) || H(dq)))
            return CP(/Version\/([0-9.]+)/);
        if (NF || OF) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(GA))
                return a[1] + dd + a[2]
        } else if (PF)
            return (a = CP(/Android\s+([0-9.]+)/)) ? a : CP(/Version\/([0-9.]+)/);
        return k
    }()
      , EP = function(a) {
        return 0 <= Xz(DP, a)
    };
    var FP = function() {
        this.a = I ? EP(9) : QF && EP(25) || I && EP(8) || DB || MF && EP(19) || CB && EP(12.1) || RF && EP(5.1) || OF && EP(3.2) || PF && EP(2.1)
    };
    hz(FP);
    var IP = function(a, b) {
        var c = GP[b]
          , d = HP[b]
          , c = null != c ? nA(c) : [];
        if (a.a && null != d)
            for (var e = 0; e < d.length; e++)
                c.push(d[e]);
        return c
    }
      , KP = function(a) {
        return 0 <= a.indexOf(Fc) && !JP(a)
    }
      , JP = function(a) {
        return 0 <= a.indexOf(Gc)
    }
      , GP = {
        af: [lr],
        am: ["am-t-i0-und", "und-ethi-t-k0-und"],
        ar: ["ar-t-i0-und", "ar-t-k0-und"],
        be: ["be-t-i0-und", "be-t-k0-und"],
        bg: ["bg-t-i0-und", "bg-t-k0-und", "bg-t-k0-qwerty"],
        bn: ["bn-t-i0-und", "bn-t-k0-und", "bn-t-und-latn-k0-und"],
        bs: ["bs-t-k0-und"],
        ca: ["ca-t-k0-und"],
        chr: ["chr-t-k0-und", "chr-t-und-latn-k0-und"],
        cs: ["cs-t-k0-und", "cs-t-k0-qwertz"],
        cy: [lr],
        da: ["da-t-k0-und"],
        de: ["de-t-k0-und", "de-ch-t-k0-und", Jl],
        el: ["el-t-i0-und", "el-t-k0-und"],
        en: ["en-t-k0-und", "en-t-k0-dvorak"],
        es: ["es-t-k0-und", Jl],
        et: ["et-t-k0-und"],
        eu: ["eu-t-k0-und"],
        fa: ["fa-t-i0-und", "fa-t-k0-und"],
        fi: ["fi-t-k0-und"],
        fr: ["fr-t-k0-und", Jl],
        fy: [lr],
        ga: [lr],
        gl: ["gl-t-k0-und"],
        gu: ["gu-t-i0-und", "gu-t-k0-und", "gu-t-und-latn-k0-qwerty"],
        ha: [lr],
        hi: ["hi-t-i0-und", "hi-t-k0-und", Ep],
        hr: ["hr-t-k0-und"],
        ht: ["fr-t-k0-und"],
        hu: ["hu-t-k0-101key"],
        hy: ["hy-hyr-t-k0-und", "hy-hyt-t-k0-und"],
        id: [lr],
        ig: [lr],
        is: ["is-t-k0-und"],
        it: ["it-t-k0-und", Jl],
        iw: ["he-t-i0-und", "he-t-k0-und"],
        jw: [lr],
        ja: ["ja-t-ja-hira-i0-und"],
        ka: ["ka-t-k0-und", "ka-t-k0-legacy"],
        kk: ["kk-t-k0-und"],
        km: ["km-t-k0-und"],
        kn: ["kn-t-i0-und", "kn-t-k0-und", "kn-t-und-latn-k0-und"],
        ko: ["ko-t-k0-und"],
        ky: ["ky-cyrl-t-k0-und"],
        lo: ["lo-t-k0-und"],
        lt: ["lt-t-k0-und"],
        lv: ["lv-t-k0-und"],
        mg: [lr],
        mi: ["mi-t-k0-und"],
        mk: ["mk-t-k0-und"],
        ml: ["ml-t-i0-und", "ml-t-und-latn-k0-und", "ml-t-k0-und"],
        mn: ["mn-cyrl-t-k0-und"],
        mr: ["mr-t-i0-und", Ep],
        ms: [lr],
        mt: ["mt-t-k0-und"],
        my: ["my-t-k0-und", "my-t-k0-myansan"],
        ne: ["ne-t-i0-und", "ne-t-k0-und", "ne-t-und-latn-k0-und"],
        nl: ["nl-t-k0-und", Jl],
        no: ["no-t-k0-und"],
        ny: [lr],
        or: ["or-t-i0-und"],
        pa: ["pa-t-i0-und", "pa-guru-t-und-latn-k0-und", "pa-guru-t-k0-und"],
        pl: ["pl-t-k0-und"],
        ps: ["ps-t-k0-und"],
        pt: ["pt-br-t-k0-und", "pt-pt-t-k0-und", Jl],
        ro: ["ro-t-k0-und", "ro-t-k0-legacy", "ro-t-k0-extended"],
        ru: ["ru-t-i0-und", "ru-t-k0-und"],
        rw: [lr],
        si: ["si-t-i0-und", "si-t-k0-und"],
        sk: ["sk-t-k0-und", "sk-t-k0-qwerty"],
        sl: ["sl-t-k0-und"],
        so: [lr],
        sq: ["sq-t-k0-und"],
        sr: ["sr-t-i0-und", "sr-cyrl-t-k0-und", "sr-latn-t-k0-und"],
        st: [lr],
        su: [lr],
        sv: ["sv-t-k0-und"],
        sw: [lr],
        ta: "ta-t-i0-und ta-t-k0-ta99 ta-t-und-latn-k0-und ta-t-k0-und ta-t-k0-typewriter ta-t-k0-itrans".split(" "),
        te: ["te-t-i0-und", "te-t-k0-und", "te-t-und-latn-k0-und"],
        tg: ["tg-t-k0-und"],
        th: ["th-t-k0-und", "th-t-k0-pattajoti", "th-t-k0-tis"],
        tk: [lr],
        tl: [lr],
        tr: ["tr-t-k0-und", "tr-t-k0-legacy"],
        tt: ["tt-t-k0-und"],
        ug: ["ug-t-k0-und"],
        uk: ["uk-t-i0-und", "uk-t-k0-101key"],
        ur: ["ur-t-i0-und", "ur-t-k0-und"],
        uz: ["uz-latn-t-k0-und", "uz-cyrl-t-k0-und", "uz-cyrl-t-k0-legacy"],
        vi: ["vi-t-i0-und", "vi-t-k0-legacy", "vi-t-k0-viqr", "vi-t-k0-und", "vi-t-k0-vni"],
        wo: [lr],
        xh: [lr],
        yi: ["yi-t-k0-und"],
        yo: [lr],
        yue: [zy],
        zu: [lr],
        "zh-CN": ["zh-t-i0-pinyin", "zh-t-i0-wubi-1986", Hy, Fy, Gy, zy],
        "zh-TW": [Hy, Fy, Gy, zy]
    }
      , HP = {
        af: ["af-t-i0-handwrit"],
        ar: ["ar-t-i0-handwrit"],
        az: ["az-t-i0-handwrit"],
        be: ["be-t-i0-handwrit"],
        bg: ["bg-t-i0-handwrit"],
        bn: ["bn-t-i0-handwrit"],
        bs: ["bs-t-i0-handwrit"],
        ca: ["ca-t-i0-handwrit"],
        ceb: ["ceb-t-i0-handwrit"],
        cs: ["cs-t-i0-handwrit"],
        cy: ["cy-t-i0-handwrit"],
        da: ["da-t-i0-handwrit"],
        de: ["de-t-i0-handwrit"],
        el: ["el-t-i0-handwrit"],
        en: ["en-t-i0-handwrit"],
        eo: ["eo-t-i0-handwrit"],
        es: ["es-t-i0-handwrit"],
        et: ["et-t-i0-handwrit"],
        eu: ["eu-t-i0-handwrit"],
        fa: ["fa-t-i0-handwrit"],
        fi: ["fi-t-i0-handwrit"],
        fr: ["fr-t-i0-handwrit"],
        ga: ["ga-t-i0-handwrit"],
        gl: ["gl-t-i0-handwrit"],
        gu: ["gu-t-i0-handwrit"],
        hi: ["hi-t-i0-handwrit"],
        hmn: ["hmn-t-i0-handwrit"],
        hr: ["hr-t-i0-handwrit"],
        ht: ["ht-t-i0-handwrit"],
        hu: ["hu-t-i0-handwrit"],
        id: ["id-t-i0-handwrit"],
        is: ["is-t-i0-handwrit"],
        it: ["it-t-i0-handwrit"],
        iw: ["he-t-i0-handwrit"],
        ja: ["ja-t-i0-handwrit"],
        jv: ["jv-t-i0-handwrit"],
        km: ["km-t-i0-handwrit"],
        kn: ["kn-t-i0-handwrit"],
        ko: ["ko-t-i0-handwrit"],
        ku: ["ku-t-i0-handwrit"],
        ky: ["ky-t-i0-handwrit"],
        la: ["la-t-i0-handwrit"],
        lo: ["lo-t-i0-handwrit"],
        lt: ["lt-t-i0-handwrit"],
        lv: ["lv-t-i0-handwrit"],
        mg: ["mg-t-i0-handwrit"],
        mi: ["mi-t-i0-handwrit"],
        mk: ["mk-t-i0-handwrit"],
        ml: ["ml-t-i0-handwrit"],
        mn: ["mn-t-i0-handwrit"],
        mr: ["mr-t-i0-handwrit"],
        ms: ["ms-t-i0-handwrit"],
        mt: ["mt-t-i0-handwrit"],
        auto: ["mul-t-i0-handwrit"],
        my: ["my-t-i0-handwrit"],
        ne: ["ne-t-i0-handwrit"],
        nl: ["nl-t-i0-handwrit"],
        no: ["no-t-i0-handwrit"],
        ny: ["ny-t-i0-handwrit"],
        or: ["or-t-i0-handwrit"],
        pa: ["pa-t-i0-handwrit"],
        pl: ["pl-t-i0-handwrit"],
        pt: ["pt-t-i0-handwrit"],
        ro: ["ro-t-i0-handwrit"],
        ru: ["ru-t-i0-handwrit"],
        si: ["si-t-i0-handwrit"],
        sk: ["sk-t-i0-handwrit"],
        sl: ["sl-t-i0-handwrit"],
        so: ["so-t-i0-handwrit"],
        sq: ["sq-t-i0-handwrit"],
        sr: ["sr-t-i0-handwrit"],
        su: ["su-t-i0-handwrit"],
        sv: ["sv-t-i0-handwrit"],
        sw: ["sw-t-i0-handwrit"],
        ta: ["ta-t-i0-handwrit"],
        te: ["te-t-i0-handwrit"],
        th: ["th-t-i0-handwrit"],
        tl: ["fil-t-i0-handwrit"],
        tr: ["tr-t-i0-handwrit"],
        uk: ["uk-t-i0-handwrit"],
        ur: ["ur-t-i0-handwrit"],
        vi: ["vi-t-i0-handwrit"],
        xh: ["xh-t-i0-handwrit"],
        "zh-CN": ["zh-t-i0-handwrit"],
        zu: ["zu-t-i0-handwrit"]
    };
    var LP = function() {
        this.c = this.b = !1;
        this.a = []
    };
    hz(LP);
    LP.prototype.j = function() {
        this.c = !0;
        for (var a = 0; a < this.a.length; ++a)
            this.a[a]()
    }
    ;
    LP.prototype.load = function(a) {
        if (this.b)
            this.b && !this.c ? this.a.push(a) : a();
        else {
            this.b = !0;
            this.a.push(a);
            a = F(this.g, this, F(this.j, this));
            window._loadinputtoolcb = a;
            a = kC(Ap)[0];
            var b = P(Qu, {
                src: INPUT_TOOL_PATH + rd + (0 > window.location.href.indexOf(uf) ? k : pb),
                type: Iw
            });
            a.appendChild(b)
        }
    }
    ;
    LP.prototype.g = function(a) {
        window._inputtoolloadedcb = a;
        google.load(Il, Gd, {
            packages: qq,
            callback: Uh
        })
    }
    ;
    var NP = function() {
        this.g = FP.O();
        this.c = {};
        this.b = {};
        this.a = {};
        this.a[ho] = new MP
    };
    hz(NP);
    var OP = {
        ar: "Arab",
        fa: "Arab",
        ur: "Arab",
        be: Tf,
        bg: Tf,
        mk: Tf,
        ru: Tf,
        sr: Tf,
        uk: Tf,
        hi: "Deva",
        mr: "Deva",
        iw: "Hebr",
        yi: "Hebr"
    }
      , PP = function(a) {
        var b;
        b = a.split(/[-_]/g);
        b = 1 < b.length && b[1].match(/^[a-zA-Z]{4}$/) ? b[1] : k;
        if (b != k)
            return b;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, k) : k;
        return dz(OP[a]) ? OP[a] : a
    }
      , QP = function(a, b) {
        return a == b || PP(a) == PP(b) ? !1 : !0
    }
      , SP = function(a, b, c) {
        b = RP(a, b, c);
        if (dz(b))
            a = b.Ng;
        else {
            a: {
                a = IP(a.g, c);
                if (null != a)
                    for (c = 0; c < a.length; c++)
                        if (KP(a[c])) {
                            a = a[c];
                            break a
                        }
                a = k
            }
            a = a || k
        }
        return a
    }
      , RP = function(a, b, c) {
        if (a = TP(a, b))
            return a.a[c]
    }
      , TP = function(a, b, c) {
        var d = a.a[b];
        c && !dz(d) && (d = new MP,
        a.a[b] = d);
        return d
    }
      , UP = function(a, b, c, d, e) {
        var f = {};
        f.ua = a;
        f.uav = mz(b) ? b : b ? 1 : 0;
        f.sl = c;
        f.tl = d;
        f.hl = e;
        var g = new Image;
        g.src = ud + JK(f);
        g.onload = function() {
            g.onload = null
        }
    }
      , MP = function() {
        this.a = {};
        for (var a in VP)
            this.a[a] = new WP(VP[a],k)
    }
      , VP = {
        iw: !1,
        ja: !1,
        vi: !1,
        "zh-CN": !1
    };
    MP.prototype.update = function(a, b, c) {
        var d = this.a[a];
        dz(d) ? (d.isEnabled = b,
        d.Ng = c) : this.a[a] = new WP(b,c)
    }
    ;
    var WP = function(a, b) {
        this.isEnabled = a;
        this.Ng = b
    };
    var XP = function(a, b, c, d, e) {
        U.call(this);
        this.H = FP.O();
        this.c = a;
        this.I = c;
        this.T = b;
        this.o = this.a = null;
        this.B = this.C = k;
        this.A = this.c.id;
        this.b = k;
        this.w = this.g = !1;
        this.j = mK.O();
        this.M = d;
        this.N = FA(d) ? [3, 2] : [1, 0];
        this.J = [30, 0, 0, 0];
        this.D = NP.O();
        this.K = !0;
        null != e && T(this, Xj, e.Ia, !1, e)
    };
    G(XP, U);
    var $P = function(a, b) {
        if (null == a.a)
            a.B = b,
            (null != GP[b] || a.H.a && null != HP[b]) && a.K && (a.K = !1,
            LP.O().load(F(a.R, a)));
        else if (a.C != b)
            if (a.C = b,
            null != GP[b] || a.H.a && null != HP[b]) {
                var c = IP(a.H, b), d = SP(a.D, a.A, b), e;
                e = a.D;
                var f = a.A
                  , g = RP(e, f, b);
                e = dz(g) ? g.isEnabled : KP(SP(e, f, b));
                a.w = !0;
                a.b = jA(c, d) ? d : c[0];
                a.a.disableCurrentInputTool();
                a.g = e;
                a.a.setInputTools(c);
                a.a.activateInputTool(a.b);
                a.g ? a.a.enableCurrentInputTool() : a.a.disableCurrentInputTool();
                null == a.o && (a.o = a.a.showControl({
                    ui: $q,
                    container: a.c
                }));
                null != a.a.localize && a.a.localize(a.M);
                a.o.show();
                YP(a);
                ZP(a);
                a.w = !1
            } else
                a.a.disableCurrentInputTool(),
                null != a.o && a.o.hide()
    }
      , YP = function(a) {
        null != a.a && a.a.repositionKeyboard(a.I, a.N, a.J)
    };
    XP.prototype.isEnabled = function() {
        return null != this.a && this.g
    }
    ;
    var aQ = function(a) {
        return a.isEnabled() && KP(a.b)
    };
    XP.prototype.F = function(a) {
        YP(this);
        if (!this.w && (this.b != a.currInputToolName || this.g != a.currInputToolActive)) {
            this.b = a.currInputToolName;
            this.g = a.currInputToolActive;
            ZP(this);
            a = this.g;
            var b = this.C
              , c = this.M
              , d = this.A
              , e = this.b;
            TP(this.D, d, !0).update(b, a, e);
            UP(vq, (a ? Gd : Fd) + dd + d + dd + e, b, Yx, c)
        }
        this.dispatchEvent(Xj)
    }
    ;
    XP.prototype.R = function() {
        var a = new google.elements.inputtools.InputToolsController;
        a.setAutoDirection(!1);
        a.setApplicationName(tx);
        a.addPageElements([this.T]);
        a.addEventListener(google.elements.inputtools.EventType.INPUT_TOOL_ENABLED, this.F, this);
        this.a = a;
        this.B != k && ($P(this, this.B),
        this.B = k)
    }
    ;
    var ZP = function(a) {
        var b = O(uq, a.c);
        if (null != b) {
            var c;
            c = KP(a.b) ? a.isEnabled() ? MSG_IME_OFF : MSG_IME_ON : 0 <= a.b.indexOf(Ic) ? a.isEnabled() ? MSG_VK_OFF : MSG_VK_ON : JP(a.b) ? a.isEnabled() ? MSG_HW_OFF : MSG_HW_ON : k;
            ZI(b, c);
            cJ(b)
        }
        a = O(tq, a.c);
        null != a && (ZI(a, MSG_CHANGE_ITA),
        cJ(a))
    };
    iC(window.document);
    new U;
    var bQ = function() {
        TD.call(this)
    };
    G(bQ, TD);
    var dQ = function(a, b, c, d, e) {
        this.a = !!b;
        this.node = null;
        this.j = 0;
        this.K = !1;
        this.H = !c;
        a && cQ(this, a, d);
        this.g = void 0 != e ? e : this.j || 0;
        this.a && (this.g *= -1)
    };
    G(dQ, oB);
    var cQ = function(a, b, c, d) {
        if (a.node = b)
            a.j = nz(c) ? c : 1 != a.node.nodeType ? 0 : a.a ? -1 : 1;
        nz(d) && (a.g = d)
    };
    dQ.prototype.Nb = function(a) {
        this.node = a.node;
        this.j = a.j;
        this.g = a.g;
        this.a = a.a;
        this.H = a.H
    }
    ;
    dQ.prototype.clone = function() {
        return new dQ(this.node,this.a,!this.H,this.j,this.g)
    }
    ;
    dQ.prototype.next = function() {
        var a;
        if (this.K) {
            if (!this.node || this.H && 0 == this.g)
                throw nB;
            a = this.node;
            var b = this.a ? -1 : 1;
            if (this.j == b) {
                var c = this.a ? a.lastChild : a.firstChild;
                c ? cQ(this, c) : cQ(this, a, -1 * b)
            } else
                (c = this.a ? a.previousSibling : a.nextSibling) ? cQ(this, c) : cQ(this, a.parentNode, -1 * b);
            this.g += this.j * (this.a ? -1 : 1)
        } else
            this.K = !0;
        a = this.node;
        if (!this.node)
            throw nB;
        return a
    }
    ;
    dQ.prototype.splice = function(a) {
        var b = this.node
          , c = this.a ? 1 : -1;
        this.j == c && (this.j = -1 * c,
        this.g += this.j * (this.a ? -1 : 1));
        this.a = !this.a;
        dQ.prototype.next.call(this);
        this.a = !this.a;
        for (var c = lz(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--)
            BC(c[d], b);
        CC(b)
    }
    ;
    var eQ = az()
      , fQ = function(a) {
        if (a.getSelection)
            return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a)
                        return null
                } else if (!c.length || c.item(0).document != a)
                    return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    }
      , gQ = function(a) {
        for (var b = [], c = 0, d = a.ad(); c < d; c++)
            b.push(a.Gc(c));
        return b
    }
      , hQ = function(a) {
        return a.jd() ? a.cb() : a.sb()
    }
      , iQ = function(a) {
        return a.jd() ? a.eb() : a.tb()
    };
    eQ.prototype.jd = B(!1);
    var jQ = function(a, b) {
        dQ.call(this, a, b, !0)
    };
    G(jQ, dQ);
    var kQ = az();
    G(kQ, eQ);
    var lQ = function(a, b, c, d, e) {
        this.c = this.b = null;
        this.D = this.A = 0;
        var f;
        a && (this.b = a,
        this.A = b,
        this.c = c,
        this.D = d,
        1 == a.nodeType && a.tagName != Gf && (a = a.childNodes,
        (b = a[b]) ? (this.b = b,
        this.A = 0) : (a.length && (this.b = aA(a)),
        f = !0)),
        1 == c.nodeType && ((this.c = c.childNodes[d]) ? this.D = 0 : this.c = c));
        dQ.call(this, e ? this.c : this.b, e, !0);
        if (f)
            try {
                this.next()
            } catch (g) {
                if (g != nB)
                    throw g;
            }
    };
    G(lQ, jQ);
    C = lQ.prototype;
    C.Rd = z(Vi);
    C.hd = function() {
        return this.K && this.node == this.c && (!this.D || 1 != this.j)
    }
    ;
    C.next = function() {
        if (this.hd())
            throw nB;
        return lQ.v.next.call(this)
    }
    ;
    C.Nb = function(a) {
        this.b = a.b;
        this.c = a.c;
        this.A = a.A;
        this.D = a.D;
        this.o = a.o;
        lQ.v.Nb.call(this, a)
    }
    ;
    C.clone = function() {
        var a = new lQ(this.b,this.A,this.c,this.D,this.o);
        a.Nb(this);
        return a
    }
    ;
    var mQ = az()
      , nQ = function(a, b) {
        var c = b.$c();
        try {
            return 0 <= a.Db(c, 0, 0) && 0 >= a.Db(c, 1, 1)
        } catch (d) {
            if (!I)
                throw d;
            return !1
        }
    };
    mQ.prototype.jb = function() {
        return new lQ(this.ub(),this.Pb(),this.Ob(),this.cc())
    }
    ;
    var oQ = bz(t);
    G(oQ, mQ);
    var qQ = function(a) {
        var b = hC(a).createRange();
        if (3 == a.nodeType)
            b.setStart(a, 0),
            b.setEnd(a, a.length);
        else if (pQ(a)) {
            for (var c, d = a; (c = d.firstChild) && pQ(c); )
                d = c;
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && pQ(c); )
                d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else
            c = a.parentNode,
            a = bA(c.childNodes, a),
            b.setStart(c, a),
            b.setEnd(c, a + 1);
        return b
    }
      , rQ = function(a, b, c, d) {
        var e = hC(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    };
    C = oQ.prototype;
    C.clone = function() {
        return new this.constructor(this.a.cloneRange())
    }
    ;
    C.$c = z(t);
    C.df = function() {
        return this.a.commonAncestorContainer
    }
    ;
    C.ub = function() {
        return this.a.startContainer
    }
    ;
    C.Pb = function() {
        return this.a.startOffset
    }
    ;
    C.Ob = function() {
        return this.a.endContainer
    }
    ;
    C.cc = function() {
        return this.a.endOffset
    }
    ;
    C.Db = function(a, b, c) {
        return this.a.compareBoundaryPoints(1 == c ? 1 == b ? E.Range.START_TO_START : E.Range.START_TO_END : 1 == b ? E.Range.END_TO_START : E.Range.END_TO_END, a)
    }
    ;
    C.vb = function() {
        return this.a.collapsed
    }
    ;
    C.qg = function() {
        return this.a.toString()
    }
    ;
    C.select = function(a) {
        var b = rC(hC(this.ub()));
        this.ld(b.getSelection(), a)
    }
    ;
    C.ld = function(a) {
        a.removeAllRanges();
        a.addRange(this.a)
    }
    ;
    var sQ = bz(t);
    G(sQ, oQ);
    sQ.prototype.ld = function(a, b) {
        !b || this.vb() ? sQ.v.ld.call(this, a, b) : (a.collapse(this.Ob(), this.cc()),
        a.extend(this.ub(), this.Pb()))
    }
    ;
    var tQ = function(a, b) {
        this.c = this.b = this.o = null;
        this.j = this.g = -1;
        this.a = a;
        this.B = b
    };
    G(tQ, mQ);
    var uQ = function(a) {
        var b = hC(a).body.createTextRange();
        if (1 == a.nodeType)
            b.moveToElementText(a),
            pQ(a) && !a.childNodes.length && b.collapse(!1);
        else {
            for (var c = 0, d = a; d = d.previousSibling; ) {
                var e = d.nodeType;
                if (3 == e)
                    c += d.length;
                else if (1 == e) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move(Yj, c);
            b.moveEnd(Yj, a.length)
        }
        return b
    };
    tQ.prototype.clone = function() {
        var a = new tQ(this.a.duplicate(),this.B);
        a.o = this.o;
        a.b = this.b;
        a.c = this.c;
        return a
    }
    ;
    tQ.prototype.$c = z(t);
    tQ.prototype.df = function() {
        if (!this.o) {
            var a = this.a.text
              , b = this.a.duplicate()
              , c = a.replace(/ +$/, k);
            (c = a.length - c.length) && b.moveEnd(Yj, -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, l).length;
            if (this.vb() && 0 < b)
                return this.o = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, l).length; )
                c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == vQ(c.firstChild) && pQ(c.firstChild); )
                c = c.firstChild;
            0 == a.length && (c = wQ(this, c));
            this.o = c
        }
        return this.o
    }
    ;
    var wQ = function(a, b) {
        for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            if (pQ(f)) {
                var g = uQ(f)
                  , m = g.htmlText != f.outerHTML;
                if (a.vb() && m ? 0 <= a.Db(g, 1, 1) && 0 >= a.Db(g, 1, 0) : a.a.inRange(g))
                    return wQ(a, f)
            }
        }
        return b
    };
    C = tQ.prototype;
    C.ub = function() {
        this.b || (this.b = xQ(this, 1),
        this.vb() && (this.c = this.b));
        return this.b
    }
    ;
    C.Pb = function() {
        0 > this.g && (this.g = yQ(this, 1),
        this.vb() && (this.j = this.g));
        return this.g
    }
    ;
    C.Ob = function() {
        if (this.vb())
            return this.ub();
        this.c || (this.c = xQ(this, 0));
        return this.c
    }
    ;
    C.cc = function() {
        if (this.vb())
            return this.Pb();
        0 > this.j && (this.j = yQ(this, 0),
        this.vb() && (this.g = this.j));
        return this.j
    }
    ;
    C.Db = function(a, b, c) {
        return this.a.compareEndPoints((1 == b ? ih : Zf) + vh + (1 == c ? ih : Zf), a)
    }
    ;
    var xQ = function(a, b, c) {
        c = c || a.df();
        if (!c || !c.firstChild)
            return c;
        for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
            var g = d ? e : f - e - 1, m = c.childNodes[g], n;
            try {
                n = zQ(m)
            } catch (r) {
                continue
            }
            var p = n.$c();
            if (a.vb())
                if (!pQ(m)) {
                    if (0 == a.Db(p, 1, 1)) {
                        a.g = a.j = g;
                        break
                    }
                } else {
                    if (nQ(n, a))
                        return xQ(a, b, m)
                }
            else {
                if (nQ(a, n)) {
                    if (!pQ(m)) {
                        d ? a.g = g : a.j = g + 1;
                        break
                    }
                    return xQ(a, b, m)
                }
                if (0 > a.Db(p, 1, 0) && 0 < a.Db(p, 0, 1))
                    return xQ(a, b, m)
            }
        }
        return c
    }
      , yQ = function(a, b) {
        var c = 1 == b
          , d = c ? a.ub() : a.Ob();
        if (1 == d.nodeType) {
            for (var d = d.childNodes, e = d.length, f = c ? 1 : -1, g = c ? 0 : e - 1; 0 <= g && g < e; g += f) {
                var m = d[g];
                if (!pQ(m) && 0 == a.a.compareEndPoints((1 == b ? ih : Zf) + vh + (1 == b ? ih : Zf), zQ(m).$c()))
                    return c ? g : g + 1
            }
            return -1 == g ? 0 : g
        }
        e = a.a.duplicate();
        f = uQ(d);
        e.setEndPoint(c ? $f : kh, f);
        e = e.text.length;
        return c ? d.length - e : e
    }
      , vQ = function(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    };
    tQ.prototype.vb = function() {
        return 0 == this.a.compareEndPoints(jh, this.a)
    }
    ;
    tQ.prototype.qg = function() {
        return this.a.text
    }
    ;
    tQ.prototype.select = function() {
        this.a.select()
    }
    ;
    var AQ = bz(t);
    G(AQ, oQ);
    AQ.prototype.ld = function(a) {
        a.collapse(this.ub(), this.Pb());
        this.Ob() == this.ub() && this.cc() == this.Pb() || a.extend(this.Ob(), this.cc());
        0 == a.rangeCount && a.addRange(this.a)
    }
    ;
    var BQ = bz(t);
    G(BQ, oQ);
    BQ.prototype.Db = function(a, b, c) {
        return J(Yd) ? BQ.v.Db.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? E.Range.START_TO_START : E.Range.END_TO_START : 1 == b ? E.Range.START_TO_END : E.Range.END_TO_END, a)
    }
    ;
    BQ.prototype.ld = function(a, b) {
        b ? a.setBaseAndExtent(this.Ob(), this.cc(), this.ub(), this.Pb()) : a.setBaseAndExtent(this.ub(), this.Pb(), this.Ob(), this.cc())
    }
    ;
    var CQ = function(a) {
        return eC ? new tQ(a,hC(a.parentElement())) : GB ? new BQ(a) : FB ? new sQ(a) : CB ? new AQ(a) : new oQ(a)
    }
      , zQ = function(a) {
        if (!I || 9 <= SB)
            a = GB ? new BQ(qQ(a)) : FB ? new sQ(qQ(a)) : CB ? new AQ(qQ(a)) : new oQ(qQ(a));
        else {
            var b = new tQ(uQ(a),hC(a));
            if (pQ(a)) {
                for (var c, d = a; (c = d.firstChild) && pQ(c); )
                    d = c;
                b.b = d;
                b.g = 0;
                for (d = a; (c = d.lastChild) && pQ(c); )
                    d = c;
                b.c = d;
                b.j = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.o = a
            } else
                b.b = b.c = b.o = a.parentNode,
                b.g = bA(b.o.childNodes, a),
                b.j = b.g + 1;
            a = b
        }
        return a
    }
      , pQ = function(a) {
        return xC(a) || 3 == a.nodeType
    };
    var DQ = function() {
        this.a = this.c = this.g = this.b = this.j = null;
        this.o = !1
    };
    G(DQ, eQ);
    var EQ = function(a, b) {
        var c = new DQ;
        c.j = a;
        c.o = !!b;
        return c
    };
    C = DQ.prototype;
    C.clone = function() {
        var a = new DQ;
        a.j = this.j && this.j.clone();
        a.b = this.b;
        a.g = this.g;
        a.c = this.c;
        a.a = this.a;
        a.o = this.o;
        return a
    }
    ;
    C.Sa = B(Dw);
    C.bf = function() {
        return FQ(this).$c()
    }
    ;
    C.ad = B(1);
    C.Gc = function() {
        return this
    }
    ;
    var FQ = function(a) {
        var b;
        if (!(b = a.j)) {
            b = a.cb();
            var c = a.eb()
              , d = a.sb()
              , e = a.tb();
            if (!I || 9 <= SB)
                b = GB ? new BQ(rQ(b, c, d, e)) : FB ? new sQ(rQ(b, c, d, e)) : CB ? new AQ(rQ(b, c, d, e)) : new oQ(rQ(b, c, d, e));
            else {
                var f = b
                  , g = c
                  , m = d
                  , n = e
                  , p = !1;
                1 == f.nodeType && (g = f.childNodes[g],
                p = !g,
                f = g || f.lastChild || f,
                g = 0);
                var r = uQ(f);
                g && r.move(Yj, g);
                f == m && g == n ? r.collapse(!0) : (p && r.collapse(!1),
                p = !1,
                1 == m.nodeType && (m = (g = m.childNodes[n]) || m.lastChild || m,
                n = 0,
                p = !g),
                f = uQ(m),
                f.collapse(!p),
                n && f.moveEnd(Yj, n),
                r.setEndPoint($f, f));
                n = new tQ(r,hC(b));
                n.b = b;
                n.g = c;
                n.c = d;
                n.j = e;
                b = n
            }
            b = a.j = b
        }
        return b
    };
    C = DQ.prototype;
    C.Nd = function() {
        return FQ(this).df()
    }
    ;
    C.cb = function() {
        return this.b || (this.b = FQ(this).ub())
    }
    ;
    C.eb = function() {
        return null != this.g ? this.g : this.g = FQ(this).Pb()
    }
    ;
    C.sb = function() {
        return this.c || (this.c = FQ(this).Ob())
    }
    ;
    C.tb = function() {
        return null != this.a ? this.a : this.a = FQ(this).cc()
    }
    ;
    C.jd = z(ys);
    C.Pd = function() {
        return FQ(this).vb()
    }
    ;
    C.Od = function() {
        return FQ(this).qg()
    }
    ;
    C.jb = function() {
        return new lQ(this.cb(),this.eb(),this.sb(),this.tb())
    }
    ;
    C.select = function() {
        FQ(this).select(this.o)
    }
    ;
    C.Ff = function() {
        return new GQ(this)
    }
    ;
    var GQ = function(a) {
        TD.call(this);
        a.jd() ? a.sb() : a.cb();
        a.jd() ? a.tb() : a.eb();
        hQ(a);
        iQ(a)
    };
    G(GQ, bQ);
    GQ.prototype.L = function() {
        GQ.v.L.call(this)
    }
    ;
    var HQ = function() {
        this.c = this.b = this.a = null
    };
    G(HQ, kQ);
    var IQ = function(a) {
        var b = new HQ;
        b.a = a;
        return b
    }
      , JQ = function(a) {
        for (var b = hC(arguments[0]).body.createControlRange(), c = 0, d = arguments.length; c < d; c++)
            b.addElement(arguments[c]);
        return IQ(b)
    };
    C = HQ.prototype;
    C.clone = function() {
        return JQ.apply(this, KQ(this))
    }
    ;
    C.Sa = B("control");
    C.bf = function() {
        return this.a || document.body.createControlRange()
    }
    ;
    C.ad = function() {
        return this.a ? this.a.length : 0
    }
    ;
    C.Gc = function(a) {
        a = this.a.item(a);
        return EQ(zQ(a), void 0)
    }
    ;
    C.Nd = function() {
        return NC.apply(null, KQ(this))
    }
    ;
    C.cb = function() {
        return LQ(this)[0]
    }
    ;
    C.eb = B(0);
    C.sb = function() {
        var a = LQ(this)
          , b = aA(a);
        return iA(a, function(a) {
            return JC(a, b)
        })
    }
    ;
    C.tb = function() {
        return this.sb().childNodes.length
    }
    ;
    var KQ = function(a) {
        if (!a.b && (a.b = [],
        a.a))
            for (var b = 0; b < a.a.length; b++)
                a.b.push(a.a.item(b));
        return a.b
    }
      , LQ = function(a) {
        a.c || (a.c = KQ(a).concat(),
        a.c.sort(function(a, c) {
            return a.sourceIndex - c.sourceIndex
        }));
        return a.c
    };
    C = HQ.prototype;
    C.Pd = function() {
        return !this.a || !this.a.length
    }
    ;
    C.Od = B(k);
    C.jb = function() {
        return new MQ(this)
    }
    ;
    C.select = function() {
        this.a && this.a.select()
    }
    ;
    C.Ff = function() {
        return new NQ(this)
    }
    ;
    var NQ = function(a) {
        this.a = KQ(a)
    };
    G(NQ, bQ);
    NQ.prototype.L = function() {
        NQ.v.L.call(this);
        delete this.a
    }
    ;
    var MQ = function(a) {
        this.B = this.c = this.b = null;
        a && (this.B = LQ(a),
        this.b = this.B.shift(),
        this.c = aA(this.B) || this.b);
        dQ.call(this, this.b, !1, !0)
    };
    G(MQ, jQ);
    C = MQ.prototype;
    C.Rd = z(Vi);
    C.hd = function() {
        return !this.g && !this.B.length
    }
    ;
    C.next = function() {
        if (this.hd())
            throw nB;
        if (!this.g) {
            var a = this.B.shift();
            cQ(this, a, 1, 1);
            return a
        }
        return MQ.v.next.call(this)
    }
    ;
    C.Nb = function(a) {
        this.B = a.B;
        this.b = a.b;
        this.c = a.c;
        MQ.v.Nb.call(this, a)
    }
    ;
    C.clone = function() {
        var a = new MQ(null);
        a.Nb(this);
        return a
    }
    ;
    var OQ = function() {
        this.a = [];
        this.g = [];
        this.c = this.b = null
    };
    G(OQ, kQ);
    C = OQ.prototype;
    C.clone = function() {
        var a = this.a
          , b = new OQ;
        b.a = nA(a);
        return b
    }
    ;
    C.Sa = B("mutli");
    C.bf = function() {
        return this.a[0]
    }
    ;
    C.ad = function() {
        return this.a.length
    }
    ;
    C.Gc = function(a) {
        this.g[a] || (this.g[a] = EQ(CQ(this.a[a]), void 0));
        return this.g[a]
    }
    ;
    C.Nd = function() {
        if (!this.c) {
            for (var a = [], b = 0, c = this.ad(); b < c; b++)
                a.push(this.Gc(b).Nd());
            this.c = NC.apply(null, a)
        }
        return this.c
    }
    ;
    var QQ = function(a) {
        a.b || (a.b = gQ(a),
        a.b.sort(function(a, c) {
            var d = a.cb()
              , e = a.eb()
              , f = c.cb()
              , g = c.eb();
            return d == f && e == g ? 0 : PQ(d, e, f, g) ? 1 : -1
        }));
        return a.b
    };
    C = OQ.prototype;
    C.cb = function() {
        return QQ(this)[0].cb()
    }
    ;
    C.eb = function() {
        return QQ(this)[0].eb()
    }
    ;
    C.sb = function() {
        return aA(QQ(this)).sb()
    }
    ;
    C.tb = function() {
        return aA(QQ(this)).tb()
    }
    ;
    C.Pd = function() {
        return 0 == this.a.length || 1 == this.a.length && this.Gc(0).Pd()
    }
    ;
    C.Od = function() {
        return eA(gQ(this), function(a) {
            return a.Od()
        }).join(k)
    }
    ;
    C.jb = function() {
        return new RQ(this)
    }
    ;
    C.select = function() {
        var a = fQ(rC(hC(I ? this.Nd() : this.cb())));
        a.removeAllRanges();
        for (var b = 0, c = this.ad(); b < c; b++)
            a.addRange(this.Gc(b).bf())
    }
    ;
    C.Ff = function() {
        return new SQ(this)
    }
    ;
    var SQ = function(a) {
        this.a = eA(gQ(a), function(a) {
            return a.Ff()
        })
    };
    G(SQ, bQ);
    SQ.prototype.L = function() {
        SQ.v.L.call(this);
        cA(this.a, function(a) {
            a.xa()
        });
        delete this.a
    }
    ;
    var RQ = function(a) {
        this.w = null;
        this.C = 0;
        a && (this.w = eA(QQ(a), function(a) {
            return pB(a)
        }));
        dQ.call(this, a ? this.Rd() : null, !1, !0)
    };
    G(RQ, jQ);
    C = RQ.prototype;
    C.Rd = function() {
        return this.w[0].Rd()
    }
    ;
    C.hd = function() {
        return this.w[this.C].hd()
    }
    ;
    C.next = function() {
        try {
            var a = this.w[this.C]
              , b = a.next();
            cQ(this, a.node, a.j, a.g);
            return b
        } catch (c) {
            if (c !== nB || this.w.length - 1 == this.C)
                throw c;
            this.C++;
            return this.next()
        }
    }
    ;
    C.Nb = function(a) {
        this.w = nA(a.w);
        RQ.v.Nb.call(this, a)
    }
    ;
    C.clone = function() {
        var a = new RQ(null);
        a.Nb(this);
        return a
    }
    ;
    var UQ = function() {
        var a = fQ(window);
        return a && TQ(a)
    }
      , TQ = function(a) {
        var b, c = !1;
        if (a.createRange)
            try {
                b = a.createRange()
            } catch (e) {
                return null
            }
        else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                c = new OQ;
                b = 0;
                for (var d = a.rangeCount; b < d; b++)
                    c.a.push(a.getRangeAt(b));
                return c
            }
            b = a.getRangeAt(0);
            c = PQ(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else
            return null;
        return (a = b) && a.addElement ? IQ(a) : EQ(CQ(a), c)
    }
      , VQ = function(a) {
        return EQ(zQ(a), void 0)
    }
      , PQ = function(a, b, c, d) {
        if (a == c)
            return d < b;
        var e;
        if (1 == a.nodeType && b)
            if (e = a.childNodes[b])
                a = e,
                b = 0;
            else if (JC(a, c))
                return !0;
        if (1 == c.nodeType && d)
            if (e = c.childNodes[d])
                c = e,
                d = 0;
            else if (JC(c, a))
                return !1;
        return 0 < (MC(a, c) || b - d)
    };
    var WQ = function(a) {
        var b = a.getBoundingClientRect();
        if (I) {
            var c = uD(a);
            a = AD(a);
            b.left = c.x;
            b.right = c.x + a.width;
            b.top = c.y;
            b.bottom = c.y + a.height
        }
        return b
    }
      , XQ = function(a, b) {
        var c = iC(a)
          , d = 0;
        if (nz(b))
            d = b;
        else if (I && !J(9)) {
            var e = c.b.selection.createRange();
            if (e)
                try {
                    var f = a.createTextRange()
                      , g = f.duplicate();
                    f.moveToBookmark(e.getBookmark());
                    g.setEndPoint(ag, f);
                    d = g.text.length
                } catch (r) {}
        } else
            d = a.selectionStart;
        var e = Th + sz(a)
          , m = c.l(e);
        m ? c.Qd(m) : m = c.a(Sg, {
            id: e
        });
        m.parentNode || c.b.body.appendChild(m);
        var n = [];
        cA(a.value, function(a, b, c) {
            n.push(a == l && b + 1 != c.length && c[b + 1] == l ? Ny : a)
        });
        n = n.join(k);
        c.appendChild(m, bD(c, n.substring(0, d)));
        e = c.b.createElement(Zg);
        e.appendChild(bD(c, Zy));
        c.appendChild(m, e);
        c.appendChild(m, bD(c, n.substring(d) + l));
        c = TB(a);
        cA(c, function(a) {
            K(m, a)
        });
        var p = ry;
        cA([lm, mm, om, nm, Gw, Fw, qr, xy, tr, Ew, iy, el, sy, Cp, Lr, Kr, Hr, Ir, Ys, Xs, Vs, Ws, yj, wj, rj, uj, xj, vj, qj, tj, Os, Ps], function(b) {
            try {
                var c;
                (c = lD(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style[b]) && (p += b + ee + c + ie)
            } catch (d) {}
        });
        m.style.cssText = p;
        c = mD(a, Qs);
        m.style.overflowX = c && c != ky ? c : Ui;
        c = mD(a, Rs);
        m.style.overflowY = c && c != ky ? c : Ui;
        m.scrollTop = a.scrollTop;
        m.scrollLeft = a.scrollLeft;
        oD(m, sD(a));
        c = WQ(e);
        return a.tagName.toUpperCase() == ng ? new M(c.left,Math.ceil(uD(a).y + AD(a).height)) : new M(c.left,Math.ceil(c.bottom))
    };
    var YQ = function(a, b) {
        W.call(this, b);
        this.g = a
    };
    G(YQ, W);
    YQ.prototype.b = "info";
    YQ.prototype.w = !1;
    var ZQ = {
        info: "jfk-butterBar-info",
        error: "jfk-butterBar-error",
        warning: "jfk-butterBar-warning",
        promo: "jfk-butterBar-promo"
    };
    YQ.prototype.Sa = z(Vi);
    var $Q = function(a, b) {
        a.g = b;
        var c = a.l();
        if (c) {
            var d = a.a;
            d.Qd(c);
            d.ng(c, a.g)
        }
    };
    YQ.prototype.isVisible = function() {
        var a = this.l();
        return null != a && UB(a, Gq)
    }
    ;
    YQ.prototype.setVisible = function(a) {
        XB(this.l(), Gq, a)
    }
    ;
    YQ.prototype.na = function() {
        this.G = this.a.a(nl, Eq);
        var a = this.l();
        a && (OH(a, vr, Ji),
        OH(a, Mi, zx));
        $Q(this, this.g);
        this.w = this.w;
        (a = this.l()) && XB(a, Fq, this.w);
        a = this.b;
        if (this.wb()) {
            var b = this.l()
              , c = ZQ[a];
            L(b, ZQ[this.b]);
            K(b, c)
        }
        this.b = a
    }
    ;
    var aR = bz(t);
    aR.prototype.w = z(t);
    var bR = az();
    G(bR, SH);
    hz(bR);
    C = bR.prototype;
    C.Sb = B("menuitem");
    C.Pa = function(a) {
        var b = P(Zg, null, a.w())
          , c = P(Zg);
        if (a.T) {
            var d = new AI(null,new nJ);
            d.$(c);
            K(d.l(), ko);
            ZI(d.l(), a.Cc);
            d.setVisible(!1);
            a.j = d;
            c.id = d.D()
        }
        b = P(rg, XH(this, a), b, c);
        b.id = a.D();
        return a.G = b
    }
    ;
    C.Hc = function(a) {
        return a.tagName == rg
    }
    ;
    C.S = B("gt-is-itm");
    C.rc = function(a, b, c) {
        bR.v.rc.call(this, a, b, c);
        2 == b && a.T && a.j && !a.b && a.j.setVisible(c)
    }
    ;
    var cR = function(a, b, c, d, e) {
        mI.call(this, a, d || bR.O(), e);
        this.F = a;
        this.T = b;
        this.Cc = c;
        this.b = !1;
        this.Aa(1, !1)
    };
    G(cR, mI);
    cR.prototype.w = z("F");
    cR.prototype.Ya = function(a) {
        this.T && JC(this.j.l(), a.target) ? (this.b = !0,
        this.j.Ya(a)) : cR.v.Ya.call(this, a)
    }
    ;
    cR.prototype.gb = function(a) {
        this.T && JC(this.j.l(), a.target) && this.b ? (this.j.gb(a),
        this.b = !1,
        cI(this, 2) || this.j.setVisible(!1)) : (this.T && cA(dR(this.K()), function(a) {
            a.b && (a.b = !1,
            sI(a.j, !1));
            a != this && a.j.setVisible(!1)
        }),
        cR.v.gb.call(this, a))
    }
    ;
    var gR = function(a, b, c, d, e, f, g, m, n, p, r, u, A) {
        this.H = a;
        this.A = b;
        this.b = c;
        this.o = d;
        this.D = e;
        this.w = f;
        this.B = g;
        this.W = m;
        this.I = n;
        this.F = 0;
        this.J = p;
        this.X = r;
        this.M = u;
        this.R = A;
        a = new YQ(k);
        a.$(N(rn));
        a.setVisible(!1);
        this.K = a;
        this.j = this.c = this.g = k;
        this.C = mK.O();
        this.a = new EE(this);
        this.T = new EH(this.o.l());
        this.M && eR(this);
        fR(this)
    }
      , eR = function(a) {
        a.a.a(a.T, ar, a.xi).a(a.o, Xj, a.zi).a(a.b, v, a.Ii).a(a.B, Nv, a.Eg).a(a.B, Nw, a.Eg);
        null != a.w && a.a.a(a.w, Xj, a.Ai)
    };
    C = gR.prototype;
    C.update = function() {
        0 == this.g.length ? this.clear() : (this.F = wz(),
        hR(this.W, this.g, this.c, this.j, F(this.sa, this, this.g, this.c, this.j)))
    }
    ;
    C.Ai = function() {
        aQ(this.w) && this.clear()
    }
    ;
    C.xi = function(a) {
        var b;
        this.b.isVisible() ? (27 == a.keyCode && (iR(this),
        this.clear()),
        b = this.b.Ja(a)) : b = !1;
        b || uF(F(this.qh, this, a), 0)
    }
    ;
    C.zi = function(a) {
        this.w && aQ(this.w) ? this.clear() : uF(F(this.qh, this, a), 0)
    }
    ;
    C.qh = function() {
        var a;
        a = this.o.U().replace(/[ \n\t\r\f,\.\?!]+/g, l).replace(/^ /, k);
        var b = this.B.a
          , c = this.B.b;
        if (a != this.g || b != this.c || c != this.j) {
            var d = b != this.c;
            this.g = a;
            this.c = b;
            this.j = c;
            this.update();
            d && fR(this)
        }
    }
    ;
    C.Ii = function(a) {
        a = a.target.w();
        jR(this, a);
        this.g = a;
        this.o.b(a);
        this.clear()
    }
    ;
    C.Eg = function() {
        this.clear()
    }
    ;
    var fR = function(a) {
        var b = FA(a.B.a) ? Mu : Br;
        a.b.l().style.direction = b
    };
    gR.prototype.sa = function(a, b, c, d) {
        0 == d.length || 0 == this.g.length ? this.clear() : this.c != b || this.j != c ? this.clear() : kR(this, a, d)
    }
    ;
    gR.prototype.clear = function() {
        this.b.setVisible(!1);
        hG(this.b);
        this.A.clear();
        null != this.D && this.D.b(k)
    }
    ;
    var kR = function(a, b, c) {
        if (0 != c.length) {
            var d = c;
            c.length > a.I && (d = pA(c, 0, a.I));
            a.A.clear();
            oA(a.A.a, d);
            lR(a, wz() - a.F, b, d);
            hG(a.b);
            cA(d, function(a, b) {
                var c = new cR(a.w(),this.J,this.X);
                this.b.Fa(c, !0);
                c.l().firstChild.id = lo + b
            }, a);
            mR(a, d[0]);
            a.R || (b = eD(iC(document)),
            c = XQ(a.o.l(), a.o.U().length),
            d = sD(IC(a.b.l())),
            c.x = 0,
            c.y += b.y,
            c.y -= d.y,
            oD(a.b.l(), c));
            a.J && nR(a);
            a.b.setVisible(!0)
        }
    }
      , mR = function(a, b) {
        if (a.D) {
            var c = a.o.U();
            0 == b.w().lastIndexOf(c, 0) ? a.D.b(b.w()) : a.D.b(c)
        }
    }
      , nR = function(a) {
        var b = dR(a.b);
        cA(b, function(a) {
            a.j && T(a.j, v, this.N, !1, this)
        }, a)
    };
    gR.prototype.N = function(a) {
        var b = dR(this.b);
        cA(b, function(c, d) {
            if (c.j == a.target) {
                var e = P(Zg, null, MSG_SUGGESTION_FLAGGED.replace(Ya, c.w()))
                  , f = P(Zg, null, l)
                  , g = P(yf, {
                    href: xq
                }, MSG_DISMISS)
                  , e = P(q, null, e, f, g);
                $Q(this.K, e);
                this.K.setVisible(!0);
                T(g, w, this.Ma, !1, this);
                oR(this, d + 1, b)
            }
        }, this)
    }
    ;
    gR.prototype.Ma = function() {
        this.K.setVisible(!1)
    }
    ;
    var oR = function(a, b, c) {
        c = eA(c, function(a) {
            return a.w()
        });
        rK(a.C, a.H, sq, Sd, {
            q: a.g,
            sl: a.c,
            tl: a.j,
            sn: c.length,
            s: c,
            si: b
        })
    }
      , lR = function(a, b, c, d) {
        d = eA(d, function(a) {
            return a.w()
        });
        rK(a.C, a.H, sq, Gd, {
            q: c,
            sl: a.c,
            tl: a.j,
            sd: b,
            sn: d.length,
            s: d
        })
    }
      , jR = function(a, b) {
        for (var c = eA(a.A.a, function(a) {
            return a.w()
        }), d = 0, e = 0; e < c.length; e++)
            if (c[e] == b) {
                d = e + 1;
                break
            }
        rK(a.C, a.H, sq, Pd, {
            q: a.g,
            sl: a.c,
            tl: a.j,
            sn: c.length,
            s: c,
            si: d
        })
    }
      , iR = function(a) {
        var b = eA(a.A.a, function(a) {
            return a.w()
        });
        rK(a.C, a.H, sq, Fd, {
            q: a.g,
            sl: a.c,
            tl: a.j,
            sn: b.length,
            s: b
        })
    };
    var pR = function(a, b, c, d, e, f) {
        this.o = a;
        this.a = b;
        this.g = c;
        this.H = d;
        this.F = e;
        this.D = f;
        this.b = k;
        this.c = new EI(this.M,300,this);
        this.B = 0;
        this.A = null;
        this.w = !1;
        this.j = mK.O();
        this.g && (this.A = new FN(this.g),
        T(this.A, v, this.K, !1, this));
        T(this.o, Xj, this.C, !1, this);
        GI(this.c, void 0)
    };
    pR.prototype.C = function(a) {
        var b = k;
        a.j && (b = a.j);
        b == ct && (this.B++,
        tK(this.j, Tt, 1, $h));
        GI(this.c, void 0)
    }
    ;
    pR.prototype.M = function() {
        if (this.a) {
            FI(this.c);
            var a = Dz(this.o.U());
            if (a != this.b)
                if (this.D && this.D())
                    GI(this.c, 300);
                else if (!(2E3 < Ez(a).length && 0 == this.B)) {
                    this.B = 0;
                    var b = a.substring(0, this.b.length) == this.b;
                    (a = this.b.substring(0, a.length) == a) || 0 != this.b.length && b && !this.w ? tK(this.j, Ms, Pd) : tK(this.j, Ms, Gd);
                    this.w = a;
                    this.F()
                }
        }
    }
    ;
    pR.prototype.reset = function(a) {
        FI(this.c);
        this.b = Dz(this.o.U());
        a || (this.w = !1)
    }
    ;
    pR.prototype.K = function(a) {
        a.preventDefault();
        this.a = !this.a;
        this.g && (this.g.innerHTML = this.a ? msg_disable_otf : msg_enable_otf);
        if (this.H) {
            a = this.H;
            var b = this.a;
            b != a.M && ((a.M = b) ? eR(a) : GE(a.a))
        }
        qK(this.j, yd + (this.a ? 1 : 0))
    }
    ;
    var qR = function(a, b) {
        this.b = a instanceof M ? a : new M(a,b)
    };
    G(qR, LI);
    qR.prototype.a = function(a, b, c, d) {
        var e;
        e = hC(a);
        var f = e.body;
        e = e.documentElement;
        e = new M(f.scrollLeft || e.scrollLeft,f.scrollTop || e.scrollTop);
        f = this.b.x + e.x;
        e = this.b.y + e.y;
        var g = HI(a)
          , f = f - g.x;
        e -= g.y;
        JI(new M(f,e), a, b, c, null, null, d)
    }
    ;
    var rR = function(a, b) {
        qR.call(this, a, b)
    };
    G(rR, qR);
    rR.prototype.g = 0;
    rR.prototype.c = bz(vm);
    rR.prototype.a = function(a, b, c, d) {
        var e = pD(a), e = tD(e), f;
        f = iC(a);
        f = pC(f.b);
        f = new M(this.b.x + f.scrollLeft,this.b.y + f.scrollTop);
        var g = b
          , m = JI(f, a, g, c, e, 10, d);
        if (0 != (m & 496)) {
            if (m & 16 || m & 32)
                g ^= 2;
            if (m & 64 || m & 128)
                g ^= 1;
            m = JI(f, a, g, c, e, 10, d);
            0 != (m & 496) && JI(f, a, b, c, e, this.g, d)
        }
    }
    ;
    var sR = function(a, b) {
        U.call(this);
        this.g = new EE(this);
        this.fd(a || null);
        b && (this.Jc = b)
    };
    G(sR, U);
    C = sR.prototype;
    C.G = null;
    C.Vf = !0;
    C.Uf = null;
    C.xc = !1;
    C.wf = -1;
    C.vf = -1;
    C.Jc = Xw;
    C.Sa = z("Jc");
    C.l = z("G");
    C.fd = function(a) {
        tR(this);
        this.G = a
    }
    ;
    C.setAutoHide = function(a) {
        tR(this);
        this.Vf = a
    }
    ;
    var tR = function(a) {
        if (a.xc)
            throw Error("Can not change this state of the popup while showing.");
    };
    sR.prototype.isVisible = z("xc");
    var uR = function(a) {
        return a.xc || 150 > wz() - a.vf
    };
    sR.prototype.setVisible = function(a) {
        this.w && this.w.Gb();
        this.B && this.B.Gb();
        if (a) {
            if (!this.xc && this.Bf()) {
                if (!this.G)
                    throw Error("Caller must call setElement before trying to show the popup");
                this.A();
                a = hC(this.G);
                if (this.Vf)
                    if (this.g.a(a, Yr, this.Wg, !0),
                    I) {
                        var b;
                        try {
                            b = a.activeElement
                        } catch (d) {}
                        for (; b && b.nodeName == lg; ) {
                            try {
                                var c = OC(b)
                            } catch (d) {
                                break
                            }
                            a = c;
                            b = a.activeElement
                        }
                        this.g.a(a, Yr, this.Wg, !0);
                        this.g.a(a, Uk, this.Vg)
                    } else
                        this.g.a(a, nj, this.Vg);
                this.Jc == Xw ? (this.G.style.visibility = ky,
                R(this.G, !0)) : this.Jc == cs && this.A();
                this.xc = !0;
                this.wf = wz();
                this.vf = -1;
                this.w ? (xE(this.w, Ll, this.xg, !1, this),
                this.w.play()) : this.xg()
            }
        } else
            vR(this)
    }
    ;
    sR.prototype.A = gz;
    var vR = function(a, b) {
        a.xc && a.dispatchEvent({
            type: hj,
            target: b
        }) && (a.g && GE(a.g),
        a.xc = !1,
        a.vf = wz(),
        a.B ? (xE(a.B, Ll, vz(a.ag, b), !1, a),
        a.B.play()) : a.ag(b))
    };
    C = sR.prototype;
    C.ag = function(a) {
        this.Jc == Xw ? this.Mi() : this.Jc == cs && (this.G.style.top = $b);
        this.mf(a)
    }
    ;
    C.Mi = function() {
        this.G.style.visibility = Fp;
        R(this.G, !1)
    }
    ;
    C.Bf = function() {
        return this.dispatchEvent(ij)
    }
    ;
    C.xg = function() {
        this.dispatchEvent(kv)
    }
    ;
    C.mf = function(a) {
        this.dispatchEvent({
            type: Gp,
            target: a
        })
    }
    ;
    C.Wg = function(a) {
        a = a.target;
        JC(this.G, a) || wR(this, a) || 150 > wz() - this.wf || vR(this, a)
    }
    ;
    C.Vg = function(a) {
        var b = hC(this.G);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement,
            !a || JC(this.G, a) || a.tagName == Ff)
                return
        } else if (a.target != b)
            return;
        150 > wz() - this.wf || vR(this)
    }
    ;
    var wR = function(a, b) {
        return fA(a.Uf || [], function(a) {
            return b === a || JC(a, b)
        })
    };
    sR.prototype.L = function() {
        sR.v.L.call(this);
        this.g.xa();
        UD(this.w);
        UD(this.B);
        delete this.G;
        delete this.g;
        delete this.Uf
    }
    ;
    var xR = function(a, b) {
        AO.call(this, a, b);
        this.N = !0;
        mO(this, !0);
        this.setVisible(!1, !0);
        this.b = new rB
    };
    G(xR, AO);
    C = xR.prototype;
    C.nh = !1;
    C.Mg = 0;
    C.Wa = null;
    C.Y = function(a) {
        xR.v.Y.call(this, a);
        (a = a.getAttribute(qm) || a.htmlFor) && yR(this, this.a.l(a), 1)
    }
    ;
    C.V = function() {
        xR.v.V.call(this);
        this.b.forEach(this.Bd, this);
        var a = X(this);
        a.a(this, v, this.Af);
        a.a(this.a.b, Yr, this.Da, !0);
        GB && a.a(this.a.b, tk, this.Da, !0)
    }
    ;
    var yR = function(a, b, c, d, e, f) {
        b && uB(a.b, sz(b)) || (c = a.We(b, c, d, e, f),
        a.oa && a.Bd(c),
        b = vz(a.$i, b),
        a.l() && X(a).a(a.l(), br, b))
    };
    C = xR.prototype;
    C.$i = function(a, b) {
        if (27 == b.keyCode)
            a.focus();
        else {
            var c = eG(this, this.za);
            if (c) {
                var c = c.l()
                  , d = new aE(b.b,c);
                d.target = c;
                if (32 == b.keyCode || 13 == b.keyCode)
                    eE(c) ? HE(c, br, !1, d) : CE(c, br, !1, d);
                32 == b.keyCode && this.Tb()
            }
        }
    }
    ;
    C.We = function(a, b, c, d, e) {
        if (!a)
            return null;
        b = {
            G: a,
            ih: b,
            Qi: c,
            mc: d ? tk : Yr,
            qe: e
        };
        this.b.a(sz(a), b);
        return b
    }
    ;
    C.Bd = function(a) {
        X(this).a(a.G, a.mc, this.ue);
        a.mc != tk && X(this).a(a.G, br, this.bj)
    }
    ;
    C.Id = function() {
        if (this.oa)
            for (var a = this.b.rb(), b = 0; b < a.length; b++)
                this.Ze(wB(this.b, a[b]));
        this.b.clear()
    }
    ;
    C.Ze = function(a) {
        X(this).b(a.G, a.mc, this.ue)
    }
    ;
    C.ee = function(a, b, c) {
        b = dz(a.ih) ? new DO(a.G,a.ih,!0) : new rR(b,c);
        b.c && b.c(5);
        var d = a.Qi;
        c = a.qe;
        var e = a.G;
        a = this.isVisible();
        var f;
        (f = this.isVisible()) || (f = 150 > wz() - this.Mg);
        f && this.nh ? this.Tb() : (this.Wa = e || null,
        this.dispatchEvent(ij) && (d = "undefined" != typeof d ? d : 4,
        a || (this.l().style.visibility = Fp),
        R(this.l(), !0),
        b.a(this.l(), d, c),
        a || (this.l().style.visibility = ky),
        this.Ib(-1),
        this.setVisible(!0)))
    }
    ;
    C.Tb = function() {
        this.isVisible() && (this.setVisible(!1),
        this.isVisible() || (this.Mg = wz(),
        this.Wa = null))
    }
    ;
    C.Af = function() {
        this.Tb()
    }
    ;
    C.ue = function(a) {
        zR(this, a)
    }
    ;
    C.bj = function(a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || zR(this, a);
        40 == a.keyCode && iO(this)
    }
    ;
    var zR = function(a, b) {
        for (var c = a.b.rb(), d = 0; d < c.length; d++) {
            var e = wB(a.b, c[d]);
            if (e.G == b.a) {
                a.ee(e, b.clientX, b.clientY);
                b.preventDefault();
                b.stopPropagation();
                break
            }
        }
    };
    xR.prototype.Da = function(a) {
        this.isVisible() && !BO(this, a.target) && this.Tb()
    }
    ;
    xR.prototype.Vd = function(a) {
        xR.v.Vd.call(this, a);
        this.Tb()
    }
    ;
    xR.prototype.L = function() {
        xR.v.L.call(this);
        this.b && (this.b.clear(),
        delete this.b)
    }
    ;
    var AR = function() {
        U.call(this);
        this.a = 0;
        this.C = this.B = null
    };
    G(AR, U);
    AR.prototype.g = function() {
        this.b(kj)
    }
    ;
    AR.prototype.j = function() {
        this.b(Ll)
    }
    ;
    AR.prototype.b = function(a) {
        this.dispatchEvent(a)
    }
    ;
    var BR = function(a, b) {
        kz(b) || (b = [b]);
        var c = eA(b, function(a) {
            return mz(a) ? a : a.gj + l + a.duration + Pu + a.timing + l + a.Dc + Ou
        });
        Q(a, sx, c.join(Wb))
    }
      , CR = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }(function() {
        if (I)
            return J(Jd);
        var a = document.createElement(q)
          , b = GB ? cd : FB ? Lc : I ? Mc : CB ? Oc : null
          , c = {
            transition: Hs
        };
        b && (c[b + Zc] = Hs);
        fC(a, kB(nl, {
            style: c
        }));
        a = a.firstChild;
        b = a.style[Yz(sx)];
        return ("undefined" !== typeof b ? b : a.style[jD(a, sx)] || k) != k
    });
    var DR = function(a, b, c, d, e) {
        AR.call(this);
        this.G = a;
        this.w = b;
        this.D = c;
        this.c = d;
        this.A = kz(e) ? e : [e]
    };
    G(DR, AR);
    C = DR.prototype;
    C.play = function() {
        if (1 == this.a)
            return !1;
        this.g();
        this.b(Zt);
        this.B = wz();
        this.a = 1;
        if (CR())
            return Q(this.G, this.D),
            this.o = uF(this.ej, void 0, this),
            !0;
        this.ef(!1);
        return !1
    }
    ;
    C.ej = function() {
        AD(this.G);
        BR(this.G, this.A);
        Q(this.G, this.c);
        this.o = uF(F(this.ef, this, !1), 1E3 * this.w)
    }
    ;
    C.Gb = function() {
        1 == this.a && this.ef(!0)
    }
    ;
    C.ef = function(a) {
        Q(this.G, sx, k);
        vF(this.o);
        Q(this.G, this.c);
        this.C = wz();
        this.a = 0;
        a ? this.b(aw) : this.b(em);
        this.j()
    }
    ;
    C.L = function() {
        this.Gb();
        DR.v.L.call(this)
    }
    ;
    var ER = function(a, b, c, d, e) {
        return new DR(a,b,{
            opacity: d
        },{
            opacity: e
        },{
            gj: Gs,
            duration: b,
            timing: c,
            Dc: 0
        })
    };
    var FR = function(a) {
        U.call(this);
        this.G = a;
        a = I ? km : nj;
        this.a = T(this.G, I ? jm : hm, this, !I);
        this.b = T(this.G, a, this, !I)
    };
    G(FR, U);
    FR.prototype.handleEvent = function(a) {
        var b = new aE(a.b);
        b.type = a.type == jm || a.type == hm ? jm : km;
        this.dispatchEvent(b)
    }
    ;
    FR.prototype.L = function() {
        FR.v.L.call(this);
        zE(this.a);
        zE(this.b);
        delete this.G
    }
    ;
    var GR = function(a, b) {
        this.b = a instanceof M ? a : new M(a,b)
    };
    G(GR, LI);
    GR.prototype.a = function(a, b, c, d) {
        KI(pD(a), 0, a, b, this.b, c, null, d)
    }
    ;
    var HR = function(a, b) {
        this.I = b || void 0;
        sR.call(this, a)
    };
    G(HR, sR);
    HR.prototype.A = function() {
        if (this.I) {
            var a = !this.isVisible() && this.Sa() != cs
              , b = this.l();
            a && (b.style.visibility = Fp,
            R(b, !0));
            this.I.a(b, 4, this.qe);
            a && R(b, !1)
        }
    }
    ;
    var JR = function(a, b, c) {
        this.K = c || (a ? iC(N(a)) : iC());
        HR.call(this, this.K.a(q, {
            style: du
        }));
        this.R = new M(1,1);
        this.o = new AB;
        this.D = null;
        a && IR(this, a);
        null != b && this.aa(b)
    };
    G(JR, HR);
    var KR = [];
    JR.prototype.b = null;
    JR.prototype.className = "goog-tooltip";
    JR.prototype.N = 500;
    var IR = function(a, b) {
        var c = b = N(b);
        a.o.a.a(zB(c), c);
        T(b, as, a.Z, !1, a);
        T(b, $r, a.F, !1, a);
        T(b, Zr, a.Ha, !1, a);
        T(b, hm, a.X, !1, a);
        T(b, nj, a.F, !1, a)
    }
      , MR = function(a, b) {
        if (b) {
            var c = N(b);
            LR(a, c);
            vB(a.o.a, zB(c))
        } else {
            for (var d = a.o.Ta(), e = 0; c = d[e]; e++)
                LR(a, c);
            a.o.clear()
        }
    }
      , LR = function(a, b) {
        yE(b, as, a.Z, !1, a);
        yE(b, $r, a.F, !1, a);
        yE(b, Zr, a.Ha, !1, a);
        yE(b, hm, a.X, !1, a);
        yE(b, nj, a.F, !1, a)
    };
    JR.prototype.aa = function(a) {
        PC(this.l(), a)
    }
    ;
    JR.prototype.fd = function(a) {
        var b = this.l();
        b && CC(b);
        JR.v.fd.call(this, a);
        a ? (b = this.K.b.body,
        b.insertBefore(a, b.lastChild),
        UD(this.D),
        this.D = new FR(this.l()),
        VD(this, this.D),
        T(this.D, jm, this.C, void 0, this),
        T(this.D, km, this.T, void 0, this)) : (UD(this.D),
        this.D = null)
    }
    ;
    var NR = function(a) {
        return a.j ? a.isVisible() ? 4 : 1 : a.M ? 3 : a.isVisible() ? 2 : 0
    };
    JR.prototype.Bf = function() {
        if (!sR.prototype.Bf.call(this))
            return !1;
        if (this.a)
            for (var a, b = 0; a = KR[b]; b++)
                JC(a.l(), this.a) || a.setVisible(!1);
        kA(KR, this);
        a = this.l();
        a.className = this.className;
        this.C();
        T(a, as, this.wa, !1, this);
        T(a, $r, this.qa, !1, this);
        OR(this);
        return !0
    }
    ;
    JR.prototype.mf = function() {
        lA(KR, this);
        for (var a = this.l(), b, c = 0; b = KR[c]; c++)
            b.a && JC(a, b.a) && b.setVisible(!1);
        this.Da && this.Da.T();
        yE(a, as, this.wa, !1, this);
        yE(a, $r, this.qa, !1, this);
        this.a = void 0;
        0 == NR(this) && (this.J = !1);
        sR.prototype.mf.call(this)
    }
    ;
    JR.prototype.Ba = function(a, b) {
        this.a == a && this.o.contains(this.a) && (this.J || !this.La ? (this.setVisible(!1),
        this.isVisible() || PR(this, a, b)) : this.a = void 0);
        this.j = void 0
    }
    ;
    var PR = function(a, b, c) {
        a.a = b;
        b = c || a.sa(0);
        a.I = b || void 0;
        a.isVisible() && a.A();
        a.setVisible(!0)
    };
    JR.prototype.Ia = function(a) {
        this.M = void 0;
        if (a == this.a) {
            a = this.K;
            var b;
            a: {
                var c = a.b;
                try {
                    b = c && c.activeElement;
                    break a
                } catch (d) {}
                b = null
            }
            b = b && this.l() && a.contains(this.l(), b);
            null != this.b && (this.b == this.l() || this.o.contains(this.b)) || b || this.W && this.W.b || this.setVisible(!1)
        }
    }
    ;
    var QR = function(a, b) {
        var c = eD(a.K);
        a.R.x = b.clientX + c.x;
        a.R.y = b.clientY + c.y
    };
    JR.prototype.Z = function(a) {
        var b = RR(this, a.target);
        this.b = b;
        this.C();
        b != this.a && (this.a = b,
        this.j || (this.j = uF(F(this.Ba, this, b, void 0), this.N)),
        SR(this),
        QR(this, a))
    }
    ;
    var RR = function(a, b) {
        try {
            for (; b && !a.o.contains(b); )
                b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    };
    JR.prototype.Ha = function(a) {
        QR(this, a);
        this.J = !0
    }
    ;
    JR.prototype.X = function(a) {
        this.b = a = RR(this, a.target);
        this.J = !0;
        if (this.a != a) {
            this.a = a;
            var b = this.sa(1);
            this.C();
            this.j || (this.j = uF(F(this.Ba, this, a, b), this.N));
            SR(this)
        }
    }
    ;
    JR.prototype.sa = function(a) {
        return 0 == a ? (a = this.R.clone(),
        new TR(a)) : new UR(this.b)
    }
    ;
    var SR = function(a) {
        if (a.a)
            for (var b, c = 0; b = KR[c]; c++)
                JC(b.l(), a.a) && (b.W = a,
                a.Da = b)
    };
    JR.prototype.F = function(a) {
        var b = RR(this, a.target)
          , c = RR(this, a.c);
        b != c && (b == this.b && (this.b = null),
        OR(this),
        this.J = !1,
        !this.isVisible() || a.c && JC(this.l(), a.c) ? this.a = void 0 : this.T())
    }
    ;
    JR.prototype.wa = function() {
        var a = this.l();
        this.b != a && (this.C(),
        this.b = a)
    }
    ;
    JR.prototype.qa = function(a) {
        var b = this.l();
        this.b != b || a.c && JC(b, a.c) || (this.b = null,
        this.T())
    }
    ;
    var OR = function(a) {
        a.j && (vF(a.j),
        a.j = void 0)
    };
    JR.prototype.T = function() {
        2 == NR(this) && (this.M = uF(F(this.Ia, this, this.a), 0))
    }
    ;
    JR.prototype.C = function() {
        this.M && (vF(this.M),
        this.M = void 0)
    }
    ;
    JR.prototype.L = function() {
        this.setVisible(!1);
        OR(this);
        MR(this);
        this.l() && CC(this.l());
        this.b = null;
        delete this.K;
        JR.v.L.call(this)
    }
    ;
    var TR = function(a, b) {
        GR.call(this, a, b)
    };
    G(TR, GR);
    TR.prototype.a = function(a, b, c) {
        b = pD(a);
        b = tD(b);
        c = c ? new fD(c.top + 10,c.right,c.bottom,c.left + 10) : new fD(10,0,0,10);
        JI(this.b, a, 4, c, b, 9) & 496 && JI(this.b, a, 4, c, b, 5)
    }
    ;
    var UR = function(a) {
        CO.call(this, a, 3)
    };
    G(UR, CO);
    UR.prototype.a = function(a, b, c) {
        var d = new M(10,0);
        KI(this.b, this.g, a, b, d, c, 9) & 496 && KI(this.b, 2, a, 1, d, c, 5)
    }
    ;
    var VR = function(a, b, c, d, e) {
        d = d || (b ? iC(N(b)) : iC());
        this.c = a;
        d.b.body.appendChild(this.c.l());
        R(this.c.l(), !1);
        this.className = VI();
        JR.call(this, b, c, d);
        VD(this, this.c);
        this.fd(this.c.l());
        a = ER(this.c.l(), .13, Dl, 0, 1);
        b = ER(this.c.l(), .13, Cl, 1, 0);
        this.w = a;
        this.B = b;
        this.H = new MI(VI(),!0);
        NI(this.H, null != e ? e : 1, void 0, -1);
        e = this.H;
        a = this.c.c;
        e.c = this.c.l();
        e.j = a;
        this.H.le = !0;
        this.N = 300
    };
    G(VR, JR);
    VR.prototype.sa = function() {
        this.H.b = this.b;
        return this.H
    }
    ;
    VR.prototype.aa = function(a) {
        PC(this.c.a, a)
    }
    ;
    var WR = function(a, b, c, d) {
        c = c || (a ? iC(N(a)) : iC());
        var e = new WI(c);
        VR.call(this, e, a, b, c, d)
    };
    G(WR, VR);
    var XR = function(a, b) {
        HR.call(this, a);
        this.c = b;
        this.a = 0;
        this.b = null;
        this.j = 0;
        this.setVisible(!0);
        this.setVisible(!1);
        K(this.l(), Lu);
        K(this.c, Ku)
    };
    G(XR, HR);
    XR.prototype.H = function() {
        vF(this.j);
        1 == this.a ? xE(this.b, em, F(this.H, this)) : 0 == this.a && (this.j = uF(F(this.D, this, -1), 200))
    }
    ;
    XR.prototype.D = function(a) {
        if (this.a != a && (0 != this.a || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
            var b = this.isVisible();
            this.setVisible(!0);
            var c = -Math.ceil(AD(this.c).width);
            GD(this.l()) && (c = -c);
            var d = 1 == a ? c : 0
              , c = 1 == a ? 0 : c;
            this.setVisible(b);
            if (CR()) {
                b = .2;
                if (0 != this.a) {
                    var e = parseInt(lD(this.c, or), 10);
                    this.o();
                    b *= (c - e) / (c - d);
                    d = e
                }
                this.a = a;
                this.b = new DR(this.c,b,{
                    left: d + mu
                },{
                    left: c + mu
                },pr + b + Ou);
                this.b.play();
                xE(this.b, em, F(this.o, this));
                -1 == a ? xE(this.b, em, F(this.setVisible, this, !1)) : this.setVisible(!0)
            } else
                Q(this.c, or, c + mu),
                this.setVisible(1 == a ? !0 : !1)
        }
    }
    ;
    XR.prototype.o = function() {
        0 != this.a && (this.b.Gb(),
        uF(F(AE, this, this.b)),
        this.a = 0,
        this.b = null)
    }
    ;
    var $R = function(a, b) {
        var c = 0
          , d = 0;
        if (YR(a))
            c = a.selectionStart,
            d = b ? -1 : a.selectionEnd;
        else if (I) {
            var e = ZR(a)
              , f = e[0]
              , e = e[1];
            if (f.inRange(e)) {
                f.setEndPoint(ag, e);
                if (a.type == Kw) {
                    for (var c = e.duplicate(), g = f.text, d = g, m = e = c.text, n = !1; !n; )
                        0 == f.compareEndPoints(jh, f) ? n = !0 : (f.moveEnd(Yj, -1),
                        f.text == g ? d += da : n = !0);
                    if (b)
                        f = [d.length, -1];
                    else {
                        for (f = !1; !f; )
                            0 == c.compareEndPoints(jh, c) ? f = !0 : (c.moveEnd(Yj, -1),
                            c.text == e ? m += da : f = !0);
                        f = [d.length, d.length + m.length]
                    }
                    return f
                }
                c = f.text.length;
                b ? d = -1 : d = f.text.length + e.text.length
            }
        }
        return [c, d]
    }
      , aS = function(a) {
        if (YR(a))
            return a.value.substring(a.selectionStart, a.selectionEnd);
        if (I) {
            var b = ZR(a)
              , c = b[1];
            if (b[0].inRange(c))
                if (a.type == Kw) {
                    a = c.duplicate();
                    for (var c = b = a.text, d = !1; !d; )
                        0 == a.compareEndPoints(jh, a) ? d = !0 : (a.moveEnd(Yj, -1),
                        a.text == b ? c += da : d = !0);
                    a = c
                } else
                    a = c.text;
            else
                a = k;
            return a
        }
        throw Error("Cannot get the selection text");
    }
      , ZR = function(a) {
        var b = a.ownerDocument || a.document
          , c = b.selection.createRange();
        a.type == Kw ? (b = b.body.createTextRange(),
        b.moveToElementText(a)) : b = a.createTextRange();
        return [b, c]
    }
      , bS = function(a, b) {
        a.type == Kw && (b = Bz(a.value.substring(0, b)).length);
        return b
    }
      , YR = function(a) {
        try {
            return typeof a.selectionStart == xs
        } catch (b) {
            return !1
        }
    };
    var cS = function() {
        var a = UQ();
        return null != a && !a.Pd() && 0 < a.Od().length
    }
      , dS = function(a) {
        UQ();
        VQ(a).select();
        a.setAttribute(ww, Zb);
        return !0
    }
      , eS = function(a) {
        var b = P(ph, {
            id: zp
        })
          , c = qC(document).y;
        Q(b, {
            position: Zh,
            top: c + mu,
            left: ac
        });
        document.body.appendChild(b);
        b.focus();
        PC(b, a);
        a = 0;
        if (YR(b))
            b.selectionStart = a;
        else if (I) {
            var c = ZR(b)
              , d = c[0];
            d.inRange(c[1]) && (a = bS(b, a),
            d.collapse(!0),
            d.move(Yj, a),
            d.select())
        }
        a = b.value.length;
        YR(b) ? b.selectionEnd = a : I && (d = ZR(b),
        c = d[1],
        d[0].inRange(c) && (a = bS(b, a),
        d = bS(b, $R(b, !0)[0]),
        c.collapse(!0),
        c.moveEnd(Yj, a - d),
        c.select()));
        return b
    };
    var fS = function(a, b, c) {
        xR.call(this, b, c);
        this.aa = new rB;
        this.F = new rB;
        this.g = a || 5;
        this.A = null;
        this.I = !1;
        this.w = Array(this.g);
        this.R = Array(this.g);
        this.J = mK.O();
        this.W = this.C = this.j = null;
        this.nh = !0
    };
    G(fS, xR);
    var gS = k
      , hS = k;
    fS.prototype.na = function() {
        fS.v.na.call(this);
        for (var a = 0; a < this.g; ++a)
            this.Fa(new vO(k), !0);
        hS != k && (this.C = new vO(hS),
        pI(this.C, Un),
        this.Fa(this.C, !0))
    }
    ;
    fS.prototype.$ = function(a) {
        fS.v.$.call(this, a);
        K(this.l(), qi)
    }
    ;
    fS.prototype.If = function(a) {
        a = wB(this.F, sz(a));
        for (var b = 0; b < PG(a) && b < this.g; ++b) {
            var c = eG(this, b);
            c.g(SG(QG(a, b)));
            c.sa = b;
            c.setVisible(!0, !0)
        }
        for (; b < this.g; ++b)
            eG(this, b).setVisible(!1);
        this.C && this.C.setVisible(!0, !0)
    }
    ;
    var iS = function(a, b, c, d) {
        a.aa.a(sz(b), c);
        a.F.a(sz(b), d);
        yR(a, b, 5, 4, !1, new fD(-2,1,-2,1))
    };
    C = fS.prototype;
    C.Id = function() {
        fS.v.Id.call(this);
        null != this.j && MR(this.j);
        this.F.clear();
        this.aa.clear()
    }
    ;
    C.setVisible = function(a, b) {
        var c = this.Wa;
        this.W = c;
        a && null != c ? (jS(this, c),
        this.J.c(ui, 2E3, null, 1, $h)) : null != this.A && kS(this.A, 0, 0);
        null != c && (a ? this.Xe(c) : this.Ue(c));
        c = fS.v.setVisible.call(this, a, b);
        a && null != this.l() && ID(this.l(), !1);
        return c
    }
    ;
    C.Na = function() {
        if (null != this.W) {
            var a = YC(this.W);
            if (null != a)
                return a
        }
        return k
    }
    ;
    C.Tb = function() {
        fS.v.Tb.call(this);
        if (this.I)
            for (var a = 0; a < this.w.length; a++) {
                var b = this.w[a];
                vF(b.j);
                b.o();
                b.D(-1);
                b.o();
                b.setVisible(!1)
            }
    }
    ;
    C.Xe = function(a) {
        K(a, lx);
        null === this.j ? a.title = k : MR(this.j, a)
    }
    ;
    C.Ue = function(a) {
        L(a, lx);
        null === this.j ? a.title = gS : IR(this.j, a)
    }
    ;
    C.Ja = function(a) {
        if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode)
            return !1;
        var b = fS.v.Ja.call(this, a);
        if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
            var c = GD(this.Wa.parentNode.parentNode)
              , d = null;
            if (!c && 37 == a.keyCode || c && 39 == a.keyCode)
                d = !1;
            if (!c && 39 == a.keyCode || c && 37 == a.keyCode)
                d = !0;
            if (this.Le(d) && (c = this.Wa,
            (c = d ? GC(c) : dz(c.previousElementSibling) ? c.previousElementSibling : EC(c.previousSibling, !1)) && c != this.Wa))
                return this.Tb(),
                this.ah(d),
                this.ee(c ? wB(this.b, sz(c)) : null, 0, 0),
                lS(this),
                a.preventDefault(),
                a.stopPropagation(),
                !0
        }
        return b
    }
    ;
    C.ee = function(a, b, c) {
        GD((a.G || this.Wa).parentNode.parentNode) ? Q(this.l(), el, Mu) : Q(this.l(), el, k);
        if (this.I)
            for (var d = 0; d < this.w.length; d++)
                mS(this, d),
                PC(this.w[d].c, ed);
        this.If(a.G);
        fS.v.ee.call(this, a, b, c)
    }
    ;
    var nS = function(a, b, c) {
        !a.I || b >= a.g || c == k || (PC(a.w[b].c, c),
        mS(a, b))
    }
      , mS = function(a, b) {
        KI(eG(a, b).l(), 6, a.w[b].l(), 4, new M(1,0))
    };
    C = fS.prototype;
    C.bd = function(a) {
        fS.v.bd.call(this, a);
        var b = this.Wa;
        null != b && (this.J.c(si, 2E3, null, 1, $h),
        jS(this, b),
        a = this.Md(a.target),
        -1 != a && a != this.g && (vF(this.R[a]),
        this.R[a] = uF(F(this.J.c, this.J, ti, 2E3, null, 1, $h), 300),
        this.I && (b = this.w[a],
        GD(this.Wa.parentNode.parentNode) ? (K(b.l(), Mu),
        Q(b.l(), el, Mu)) : (L(b.l(), Mu),
        Q(b.l(), el, k)),
        mS(this, a),
        vF(b.j),
        0 == b.a ? b.j = uF(F(b.D, b, 1), 300) : b.D(1))))
    }
    ;
    C.ff = function(a) {
        fS.v.ff.call(this, a);
        a = this.Md(a.target);
        -1 != a && a != this.g && (vF(this.R[a]),
        this.I && this.w[a].H())
    }
    ;
    C.Md = function(a) {
        return gG(this, a)
    }
    ;
    C.Le = B(!0);
    C.ah = az();
    C.We = function(a, b, c, d, e) {
        (a = fS.v.We.call(this, a, b, c, d, e)) && a.mc == Yr && (a.mc = w);
        return a
    }
    ;
    C.Bd = function(a) {
        fS.v.Bd.call(this, a);
        X(this).a(a.G, as, this.Ba);
        X(this).a(a.G, $r, this.T);
        X(this).a(a.G, tk, this.qa);
        X(this).a(a.G, Zr, this.wa)
    }
    ;
    C.Ze = function(a) {
        fS.v.Ze.call(this, a);
        X(this).b(a.G, as, this.Ba);
        X(this).b(a.G, $r, this.T);
        X(this).b(a.G, tk, this.qa);
        X(this).b(a.G, Zr, this.wa)
    }
    ;
    var jS = function(a, b) {
        if (null != a.A) {
            var c = wB(a.F, sz(b))
              , d = oS(a.A);
            if (0 < OG(c).length && 0 < Z(c.a, 3)) {
                var e = d.indexOf(OG(c));
                if (0 <= e) {
                    for (var d = [], f = 0; f < Z(c.a, 3); ++f)
                        d.push({
                            Zc: e + WG(RG(c, f)),
                            Of: e + XG(RG(c, f))
                        });
                    kS(a.A, 0, 0, void 0, d)
                } else
                    e = d.indexOf(NG(c)),
                    0 <= e && kS(a.A, e, e + NG(c).length)
            }
        }
    }
      , pS = function(a, b) {
        b ? qB(a.b.jb(!1), function(a) {
            this.a.cf(a.G) == k && (K(a.G, mx),
            this.a.ve(a.G, Qh));
            return !0
        }, a) : qB(a.b.jb(!1), function(a) {
            UB(a.G, mx) && (L(a.G, mx),
            this.a.ve(a.G, k));
            return !0
        }, a)
    };
    fS.prototype.Ba = function(a) {
        cS() || (K(a.target, nx),
        jS(this, a.target),
        pS(this, !0),
        this.J.c(ri, 2E3, null, 1, $h))
    }
    ;
    fS.prototype.T = function(a) {
        L(a.target, nx);
        null != this.A && !this.isVisible() && kS(this.A, 0, 0);
        pS(this, !1)
    }
    ;
    fS.prototype.wa = function(a) {
        cS() && this.T(a)
    }
    ;
    fS.prototype.qa = function(a) {
        cS() || (this.T(a),
        VQ(a.target).select())
    }
    ;
    var lS = function(a) {
        qB(a.b.jb(!1), function(a) {
            L(a.G, nx);
            return !0
        }, a)
    };
    fS.prototype.Af = function(a) {
        a && a.a && a.a.Wa && (a.B = a.a.Wa);
        fS.v.Af.call(this, a)
    }
    ;
    fS.prototype.ue = function(a) {
        cS() ? lS(this) : fS.v.ue.call(this, a)
    }
    ;
    var qS = function(a, b, c) {
        fS.call(this, a, b, c);
        this.c = null
    };
    G(qS, fS);
    C = qS.prototype;
    C.$ = function(a) {
        qS.v.$.call(this, a);
        this.c = new rS(k);
        this.Fa(this.c, !0)
    }
    ;
    C.If = function(a) {
        qS.v.If.call(this, a);
        this.c.l().firstChild.value = this.a.cf(a)
    }
    ;
    C.setVisible = function(a, b) {
        var c = qS.v.setVisible.call(this, a, b);
        a && null != this.l() && (cO(this) != this.c.l().firstChild && cO(this) != this.c.l().firstChild.nextSibling || tI(this.c, !0));
        return c
    }
    ;
    C.bd = function(a) {
        qS.v.bd.call(this, a);
        a.target == this.c ? fO(this, this.c.l().firstChild) : fO(this, this.l());
        cO(this).focus();
        cO(this).tabIndex = 0
    }
    ;
    C.Md = function(a) {
        return a == this.c ? -1 : qS.v.Md.call(this, a)
    }
    ;
    C.Ja = function(a) {
        return 9 == a.keyCode ? (cI(this.c, 2) ? (cO(this) == this.c.l().firstChild ? fO(this, this.c.l().firstChild.nextSibling) : fO(this, this.c.l().firstChild),
        cO(this).focus(),
        cO(this).tabIndex = 0) : tI(this.c, !0),
        a.preventDefault(),
        a.stopPropagation(),
        !0) : qS.v.Ja.call(this, a)
    }
    ;
    C.Le = function() {
        return null === hO(this) || !(hO(this)instanceof rS)
    }
    ;
    var rS = function(a, b, c) {
        mI.call(this, a, c || sS.O(), b);
        this.Aa(4, !1)
    };
    G(rS, mI);
    rS.prototype.Ya = function(a) {
        a.target == this.l().firstChild.nextSibling && this.dispatchEvent(v)
    }
    ;
    rS.prototype.V = function() {
        rS.v.V.call(this);
        X(this).a(this.l().firstChild, br, function(a) {
            32 == a.keyCode && a.stopPropagation()
        })
    }
    ;
    rS.prototype.Na = function() {
        return this.l().firstChild.value
    }
    ;
    var sS = az();
    G(sS, SH);
    hz(sS);
    var tS = k
      , uS = k;
    sS.prototype.Pa = function(a) {
        var b = a.a.a(oq, {
            value: a.ya(),
            id: oi,
            type: Dw
        })
          , c = a.a.a(oq, {
            value: tS,
            id: ni,
            "class": uS,
            type: Lj
        });
        return a.a.a(nl, {
            id: mi
        }, b, c)
    }
    ;
    var vA = {}
      , vS = null
      , wS = function(a) {
        a = sz(a);
        delete vA[a];
        wA() && vS && FI(vS)
    }
      , yS = function() {
        vS || (vS = new EI(function() {
            xS()
        }
        ,20));
        var a = vS;
        0 != a.Ea || GI(a)
    }
      , xS = function() {
        var a = wz();
        rA(vA, function(b) {
            zS(b, a)
        });
        wA() || yS()
    };
    var AS = function(a, b, c, d) {
        AR.call(this);
        if (!kz(a) || !kz(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.D = a;
        this.F = b;
        this.duration = c;
        this.M = d;
        this.o = [];
        this.c = 0
    };
    G(AS, AR);
    AS.prototype.play = function(a) {
        if (a || 0 == this.a)
            this.c = 0,
            this.o = this.D;
        else if (1 == this.a)
            return !1;
        wS(this);
        this.B = a = wz();
        -1 == this.a && (this.B -= this.duration * this.c);
        this.C = this.B + this.duration;
        this.c || this.g();
        this.b(Zt);
        -1 == this.a && this.b(Du);
        this.a = 1;
        var b = sz(this);
        b in vA || (vA[b] = this);
        yS();
        zS(this, a);
        return !0
    }
    ;
    AS.prototype.Gb = function(a) {
        wS(this);
        this.a = 0;
        a && (this.c = 1);
        BS(this, this.c);
        this.b(aw);
        this.j()
    }
    ;
    AS.prototype.L = function() {
        0 == this.a || this.Gb(!1);
        this.b(Wk);
        AS.v.L.call(this)
    }
    ;
    var zS = function(a, b) {
        a.c = (b - a.B) / (a.C - a.B);
        1 <= a.c && (a.c = 1);
        BS(a, a.c);
        1 == a.c ? (a.a = 0,
        wS(a),
        a.b(em),
        a.j()) : 1 == a.a && a.K()
    }
      , BS = function(a, b) {
        oz(a.M) && (b = a.M(b));
        a.o = Array(a.D.length);
        for (var c = 0; c < a.D.length; c++)
            a.o[c] = (a.F[c] - a.D[c]) * b + a.D[c]
    };
    AS.prototype.K = function() {
        this.b(wi)
    }
    ;
    AS.prototype.b = function(a) {
        this.dispatchEvent(new CS(a,this))
    }
    ;
    var CS = function(a, b) {
        S.call(this, a);
        this.x = b.o[0];
        this.y = b.o[1];
        this.duration = b.duration
    };
    G(CS, S);
    var DS = function(a, b, c, d, e) {
        AS.call(this, b, c, d, e);
        this.w = a
    };
    G(DS, AS);
    DS.prototype.A = gz;
    DS.prototype.K = function() {
        this.A();
        DS.v.K.call(this)
    }
    ;
    DS.prototype.j = function() {
        this.A();
        DS.v.j.call(this)
    }
    ;
    DS.prototype.g = function() {
        this.A();
        DS.v.g.call(this)
    }
    ;
    var ES = function(a, b, c, d, e) {
        nz(b) && (b = [b]);
        nz(c) && (c = [c]);
        DS.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length)
            throw Error("Start and end points must be 1D");
        this.H = -1
    };
    G(ES, DS);
    var FS = 1 / 1024;
    ES.prototype.A = function() {
        var a = this.o[0];
        Math.abs(a - this.H) >= FS && (CD(this.w, a),
        this.H = a)
    }
    ;
    ES.prototype.g = function() {
        this.H = -1;
        ES.v.g.call(this)
    }
    ;
    ES.prototype.j = function() {
        this.H = -1;
        ES.v.j.call(this)
    }
    ;
    var GS = function(a, b, c) {
        ES.call(this, a, 1, 0, b, c)
    };
    G(GS, ES);
    GS.prototype.g = function() {
        this.w.style.display = k;
        GS.v.g.call(this)
    }
    ;
    GS.prototype.j = function() {
        this.w.style.display = us;
        GS.v.j.call(this)
    }
    ;
    var HS = function(a, b, c) {
        ES.call(this, a, 0, 1, b, c)
    };
    G(HS, ES);
    HS.prototype.g = function() {
        this.w.style.display = k;
        HS.v.g.call(this)
    }
    ;
    var IS = function(a, b, c, d, e) {
        if (3 != b.length || 3 != c.length)
            throw Error("Start and end points must be 3D");
        DS.apply(this, arguments)
    };
    G(IS, DS);
    IS.prototype.A = function() {
        for (var a = [], b = 0; b < this.o.length; b++)
            a[b] = Math.round(this.o[b]);
        this.w.style.backgroundColor = Fu + a.join(Wb) + Pb
    }
    ;
    var JS = function(a, b, c, d) {
        W.call(this);
        this.b = d;
        mK.O();
        this.c = new hK(a);
        jK(this.c, 2);
        this.w = null;
        this.A = new hK(b);
        this.j = null;
        this.F = c;
        this.C = this.g = null
    };
    G(JS, W);
    C = JS.prototype;
    C.ba = function(a) {
        this.c.ba(a)
    }
    ;
    C.na = function() {
        JS.v.na.call(this);
        this.Y(document.createElement(q))
    }
    ;
    C.Y = function(a) {
        JS.v.Y.call(this, a);
        null != this.b && this.b.P(a);
        K(a, Wv);
        a.appendChild(AJ(TJ, {
            Ui: this.F
        }));
        this.g = O(Vv, a);
        a = N(Uv);
        this.c.$(a);
        this.c.Rc(this);
        X(this).a(this.c, v, this.ii);
        this.A.$(a);
        this.A.Rc(this);
        X(this).a(this.A, v, this.bi)
    }
    ;
    C.ii = function(a) {
        R(this.g, !1);
        null != this.b && this.b.setVisible(!0);
        null != this.w && this.w(a)
    }
    ;
    C.bi = function(a) {
        R(this.g, !1);
        null != this.j && this.j(a)
    }
    ;
    C.reset = function() {
        this.C && vF(this.C);
        this.C = null;
        jK(this.c, 2);
        CD(this.l(), 1);
        R(this.l(), !0);
        R(this.g, !0);
        null != this.b && this.b.setVisible(!1)
    }
    ;
    var KS = I || GB || CB || DB || !1;
    GB && J("534.16");
    I && J("7.0");
    FB && J("1.8");
    GB || I && J(ce);
    I || DB || CB || FB && J("1.9");
    FB || GB && J("527");
    I || DB || GB && J(Xd);
    GB && J("531");
    GB && J(Yd);
    FB && J("1.9") || I || DB || CB || GB && J("531");
    FB || GB && J("526");
    QF && EP(Ud) || RF && J("533") || FB && J("2.0") || I && J(Id);
    CB && J("11.10");
    QF && EP("12");
    var LS = function(a, b, c) {
        this.Z = this.c = null;
        fS.call(this, a, b, c)
    };
    G(LS, fS);
    C = LS.prototype;
    C.ah = bz(Oj);
    C.setVisible = function(a, b) {
        var c = LS.v.setVisible.call(this, a, b);
        this.c = null;
        a ? this.Z = this.Na() : null != this.Z && this.Z != this.Na() && this.dispatchEvent(new S(v,this));
        return c
    }
    ;
    C.Xe = function(a) {
        LS.v.Xe.call(this, a);
        K(a, ex);
        a.contentEditable = !0;
        fO(this, a);
        cO(this).focus();
        UC(cO(this), !0);
        X(this).a(a, br, this.Cg);
        X(this).a(a, $r, this.he);
        X(this).a(a, as, this.he);
        if (null != this.c) {
            a = VQ(a);
            var b = this.c ? a.eb() : a.tb()
              , c = hQ(a);
            a = c;
            var d = b
              , e = new DQ;
            e.o = PQ(a, d, c, b);
            if (HC(a) && !xC(a)) {
                var f = a.parentNode
                  , d = bA(f.childNodes, a);
                a = f
            }
            HC(c) && !xC(c) && (f = c.parentNode,
            b = bA(f.childNodes, c),
            c = f);
            e.o ? (e.b = c,
            e.g = b,
            e.c = a,
            e.a = d) : (e.b = a,
            e.g = d,
            e.c = c,
            e.a = b);
            e.select()
        }
    }
    ;
    C.Ue = function(a) {
        LS.v.Ue.call(this, a);
        L(a, ex);
        a.contentEditable = !1;
        cO(this) && UC(cO(this), !1);
        X(this).b(a, br, this.Cg);
        X(this).b(a, $r, this.he);
        X(this).b(a, as, this.he)
    }
    ;
    C.he = function() {
        var a = UQ();
        null == a || a.cb() == a.sb() && a.eb() == a.tb() || this.setVisible(a.cb() == a.sb())
    }
    ;
    C.Cg = function(a) {
        for (var b = 0; b < this.g; ++b)
            eG(this, b).setVisible(!1);
        this.C && this.C.setVisible(!1);
        if (13 == a.keyCode || 3 == a.keyCode)
            return null === hO(this) ? (this.Tb(),
            a.stopPropagation(),
            a.preventDefault(),
            !0) : !1;
        null === hO(this) || !yH(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Wa.focus(),
        this.Ib(gG(this, null)));
        return !1
    }
    ;
    C.Le = function(a) {
        var b = UQ();
        if (b.cb() == b.sb() && b.eb() == b.tb()) {
            var c = iQ(b)
              , b = VQ(hQ(b));
            if (!a && c == b.eb() || a && c == b.tb())
                return !0
        }
        return !1
    }
    ;
    var MS = function(a, b, c, d, e, f) {
        this.b = a;
        this.w = b;
        this.A = c;
        this.D = d;
        T(this.b.l(), hm, function() {
            K(d, hm)
        });
        T(this.b.l(), nj, function() {
            L(d, hm)
        });
        this.g = f;
        null != this.g && T(this.g, v, this.C, !1, this);
        this.j = !1;
        this.a = null;
        this.c = !1;
        this.B = null;
        this.o = e;
        this.H = !1
    };
    MS.prototype.C = function() {
        this.c = !1;
        this.b.b(k);
        this.b.l().focus();
        this.g.setVisible(!1)
    }
    ;
    var NS = function(a) {
        a.j = !1;
        L(a.D, tm);
        R(a.A, !0);
        R(a.w, !1);
        R(a.o, a.H);
        a.b.setVisible(!1);
        a.b.hc(!1)
    };
    MS.prototype.K = function(a) {
        this.c = !1;
        this.b.U() != k && (this.g.setVisible(!0),
        this.b.U() != this.B && (this.c = !0));
        a()
    }
    ;
    var PS = function(a) {
        var b = N(Vo);
        this.g = N(So);
        this.b = b;
        null != this.b && ((new AI(OS,new nJ(ox))).P(this.b),
        yC(this.b, OS));
        this.a = a;
        this.c = !1
    }
      , OS = k
      , QS = function(a, b) {
        b ? (K(a.g, El),
        a.c = a.a.isVisible(),
        a.a.setVisible(!1)) : (L(a.g, El),
        a.a.setVisible(a.c))
    };
    var RS = function(a, b, c, d, e, f, g, m) {
        W.call(this, a);
        this.c = g || null;
        if (null != this.c) {
            a = this.c;
            g = F(this.ri, this);
            a.a = F(a.K, a, g);
            g = a.b.l();
            var n = new EH(g);
            T(n, ar, a.a, !1, a);
            n = new nN(g);
            T(n, ct, a.a, !1, a);
            T(g, dr, a.a, !1, a)
        }
        this.g = null;
        this.A = Ui;
        this.R = this.Ra = k;
        this.X = new UL(fs);
        this.Z = !!b && KS && !I;
        this.N = null != e ? e : 0;
        this.b = null;
        this.Z ? this.b = new LS : this.b = new qS;
        if (0 < this.N)
            for (b = this.b,
            b.I = !0,
            e = 0; e < b.g; e++)
                g = P(nl, Gm, k),
                a = P(nl, null, g),
                g = new XR(a,g),
                b.w[e] = g,
                document.body.appendChild(a);
        this.b.$(c);
        this.j = m || null;
        this.W = null != d ? d : -1;
        this.F = mK.O();
        this.C = new rB;
        this.I = this.J = null;
        this.w = f || null;
        this.T = !1;
        null != this.w && (c = F(this.qa, this),
        this.w.w = c,
        c = F(this.ei, this),
        this.w.j = c)
    };
    G(RS, W);
    var ZS = function(a, b, c, d, e) {
        if (null != a.w) {
            var f = a.w;
            R(f.l(), !1);
            R(f.g, !1);
            null != f.b && f.b.setVisible(!1)
        }
        b && (a.g = new MG(b),
        a.I = null);
        c && (a.A = c);
        d && (a.Ra = d);
        e && (a.R = e);
        SS(a) && (NS(a.c),
        null != a.j && QS(a.j, !1));
        if ((!window.EGGS_JANGO || c != ou && d != ou) && a.g) {
            b = 0 != lC(li).length;
            a.a.Qd(a.l());
            a.b.Id();
            var g = k
              , m = 0
              , n = 0;
            c = Array(21);
            for (d = 0; d < c.length; d++)
                c[d] = 0;
            e = k;
            for (d = f = 0; d < nH(a.g); d++)
                TS(a.g, d) && (e += l),
                e += US(a.g, d),
                f += PG(oH(a.g, d));
            if (0 == f)
                return !1;
            e = [];
            f = !1;
            for (d = 0; d < nH(a.g); d++) {
                var p = oH(a.g, d)
                  , r = QG(p, 0);
                TS(a.g, d) ? a.a.appendChild(a.l(), bD(a.a, l)) : a.Ra != er && a.Ra != wr || a.a.appendChild(a.l(), wC(a.a.b, qJ));
                null != p.a[4] && 0 < OG(p).length ? (g = OG(p),
                e.push(g)) : (new yG(p.a)).a[4] = g;
                var u;
                0 == PG(oH(a.g, d)) ? (u = Gz(Oz(NG(oH(a.g, d)))),
                u = wC(a.a.b, u)) : Az(US(a.g, d)) || (u = a.a.a(Cv, null, bD(a.a, US(a.g, d))),
                UG(r) && K(u, Mp),
                VG(r) && K(u, Li),
                r = TG(r),
                0 <= a.W && r < a.W && (n++,
                K(u, pi)),
                m += r,
                1E3 == r ? c[c.length - 1]++ : c[Math.floor((r - 0) / 50)]++,
                uB(a.C, a.A + dd + a.Ra + dd + NG(p)) && (r = wB(a.C, a.A + dd + a.Ra + dd + NG(p)),
                r != VS(p, 0) && (a.a.ve(u, r),
                K(u, li),
                f = !0,
                WS(a, !0))),
                null != a.b.j ? IR(a.b.j, u) : u.title = gS,
                iS(a.b, u, d, p));
                u && a.a.appendChild(a.l(), u)
            }
            u = {
                confSum: m,
                numLowConf: n,
                numPhrases: nH(a.g)
            };
            for (d = 0; d < c.length; d++)
                0 != c[d] && (u[Pj + d] = c[d]);
            uK(a.F, dx, u);
            if (null != a.c) {
                u = a.A + dd + a.Ra;
                for (d = 0; d < e.length; ++d)
                    u += dd + e[d];
                uB(a.C, u) && (XS(a, !1),
                f = !0,
                YS(a, wB(a.C, u)),
                null != a.j && QS(a.j, !1),
                WS(a, !0))
            }
            f || (WS(a, !1),
            XS(a, !1));
            (f || b) && a.dispatchEvent(v);
            return 0 < nH(a.g)
        }
        WS(a, !1);
        XS(a, !1);
        return !1
    }
      , $S = function(a, b) {
        if (SS(a))
            return a.c.b.U();
        var c = [];
        if (a.l() && a.l().childNodes)
            for (var d = 0; d < a.l().childNodes.length; ++d)
                c[d] = null != b && b && a.l().childNodes[d].tagName == Gf ? ba : a.a.cf(a.l().childNodes[d]);
        return c.join(k)
    }
      , cT = function(a, b, c) {
        for (var d = 0; d < nH(a); d++) {
            var e = oH(a, d);
            if (mG(b.a, e ? e.a : null)) {
                e = c;
                b = -1;
                c = nH(a);
                for (var f = d; 0 <= f; f--)
                    if (aT(a, f)) {
                        b = f;
                        break
                    }
                for (f = d + 1; f <= nH(a); f++)
                    if (aT(a, f)) {
                        c = f;
                        break
                    }
                if (null != e && e)
                    d = bT(a, b, c);
                else if (a) {
                    e = d + 1;
                    f = d;
                    for (d = US(a, d).length; 64 > d && (e != c || f != b); )
                        e < c && (d += US(a, e++).length + 1),
                        64 > d && f > b && (d += US(a, --f).length + 1);
                    d = bT(a, f, e)
                } else
                    d = k;
                return d
            }
        }
        return k
    }
      , bT = function(a, b, c) {
        var d = [];
        d.push(US(a, b));
        for (b += 1; b < c; b++)
            TS(a, b) && d.push(l),
            d.push(US(a, b));
        return d.join(k)
    }
      , aT = function(a, b) {
        var c = oH(a, b).a[5];
        return 0 == (null != c ? c : 0)
    }
      , TS = function(a, b) {
        if (0 == b)
            return !1;
        var c = oH(a, b)
          , d = oH(a, b - 1);
        return UG(QG(c, 0)) && !VG(QG(d, 0)) && !zz(VS(d, 0), ba)
    };
    C = RS.prototype;
    C.na = function() {
        this.Y(this.a.b.createElement(Cv))
    }
    ;
    C.Y = function(a) {
        RS.v.Y.call(this, a);
        ZS(this)
    }
    ;
    C.V = function() {
        RS.v.V.call(this);
        X(this).a(this.b, v, this.aa);
        null != this.j && null != this.j.b && X(this).a(this.j.b, w, this.Li);
        X(this).a(this.b, kv, this.Ei);
        this.l() && X(this).a(this.l(), br, function(a) {
            32 == a.keyCode && a.stopPropagation()
        }, !0)
    }
    ;
    C.L = function() {
        RS.v.L.call(this);
        this.b.xa()
    }
    ;
    C.ri = function() {
        this.w.ba(this.c.c);
        WS(this, this.c.c)
    }
    ;
    var dT = function(a) {
        null != a.j && QS(a.j, !0);
        var b = a.c
          , c = $S(a);
        K(b.D, tm);
        b.g.setVisible(!0);
        b.B = c;
        b.b.g(c);
        b.b.setVisible(!0);
        b.b.hc(!0);
        R(b.w, !0);
        R(b.A, !1);
        b.H = DD(b.o);
        R(b.o, !1);
        uN(b.b);
        tN(b.b);
        b.b.l().focus();
        b.j = !0;
        a.T = DD(a.w.l());
        a.w.reset();
        a.w.ba(DD(a.j.b));
        WS(a, !1)
    };
    RS.prototype.aa = function(a) {
        if (a.type != Gp || a.target == this.b)
            if (a.target == this.b.C && null != this.c)
                this.F.log(Gl),
                dT(this);
            else {
                var b = a.B;
                null == b && null != a.a && (b = a.a.Wa);
                var c = a.target.Na();
                if (null != b && null != a.target) {
                    var d = b, e;
                    e = wB(this.b.F, sz(d));
                    this.a.ve(d, c);
                    c == VS(e, 0) ? (L(d, li),
                    0 == lC(li).length && (WS(this, !1),
                    XS(this, !1))) : (K(d, li),
                    WS(this, !0),
                    XS(this, !0));
                    null != this.C && this.C.a(this.A + dd + this.Ra + dd + NG(e), c);
                    d = wB(this.b.F, sz(b));
                    if (a.target instanceof vO && nz(a.target.U())) {
                        UG(QG(d, a.target.U())) ? K(b, Mp) : L(b, Mp);
                        VG(QG(d, a.target.U())) ? K(b, Li) : L(b, Li);
                        e = b.parentNode;
                        for (var f = e.childNodes, g = {}, m = null, n = -1, p = [], r = 0; r < f.length; r++) {
                            var u = f[r];
                            if (1 == u.nodeType) {
                                g[r] = !0;
                                var A;
                                if (A = m)
                                    A = u,
                                    A = !UB(m, Li) && UB(A, Mp);
                                A && (0 <= n ? g[n] = !0 : p.push(u));
                                m = u;
                                n = -1
                            } else
                                YC(u) == l && (n = r)
                        }
                        for (r = f.length - 1; 0 <= r; r--)
                            g[r] || e.removeChild(f[r]);
                        for (r = 0; r < p.length; r++)
                            e.insertBefore(vC(l), p[r])
                    }
                    null != this.C && this.C.a(this.A + dd + this.Ra + dd + NG(d), c);
                    f = VS(d, 0);
                    e = gG(this.b, a.target);
                    d = {
                        sl: this.A,
                        tl: this.Ra,
                        utrans: c,
                        gtrans: f,
                        index: e,
                        ophrase: NG(d),
                        osentence: OG(d),
                        tsentence: cT(this.g, d)
                    };
                    b = wB(this.b.aa, sz(b));
                    b = null != b ? b : null;
                    null != b && (d.confidence = TG(QG(oH(this.g, b), 0)));
                    if (a.target instanceof rS || -1 == e)
                        d.manual = 1;
                    for (var D in d)
                        mz(d[D]) && 64 < d[D].length && (d.tr = 1,
                        d[D] = d[D].substr(0, 64));
                    this.F.log(dy, d, null);
                    a = new S(dy);
                    a.text = c;
                    this.dispatchEvent(a);
                    this.dispatchEvent(v)
                }
            }
    }
    ;
    var YS = function(a, b) {
        if (a.l()) {
            null == a.J && (a.I = nA(a.a.og(a.l())));
            a.J = b;
            var c;
            if (c = a.l().childNodes && 0 < a.l().childNodes.length)
                c = (c = a.l().childNodes[0]) ? uB(a.b.b, sz(c)) : !1;
            c ? (a.a.Qd(a.l()),
            a.b.Id(),
            c = a.a.a(Cv, li, a.J),
            a.a.appendChild(a.l(), c),
            iS(a.b, c, 0, new yG)) : a.l().innerHTML = Gz(Oz(b))
        }
    };
    C = RS.prototype;
    C.Cj = function() {
        this.J = null;
        this.c.c = !1
    }
    ;
    C.Li = function() {
        if (null != this.c && SS(this)) {
            var a = this.c;
            a.g.setVisible(!0);
            a.b.g(a.B);
            a.b.l().focus();
            a.a(null)
        } else
            SS(this) && (null != this.j && QS(this.j, !1),
            NS(this.c)),
            this.C.clear(),
            this.J = null,
            ZS(this),
            this.dispatchEvent(v);
        this.F.log(jk, void 0, null)
    }
    ;
    C.ei = function() {
        SS(this) && (this.c.c && (YS(this, this.c.b.U()),
        this.T = !0),
        NS(this.c),
        null != this.j && QS(this.j, !1),
        this.c.c && WS(this, !0),
        this.w.ba(!0),
        R(this.w.l(), this.T),
        this.dispatchEvent(v));
        this.F.log(gk, void 0, null)
    }
    ;
    C.Ei = function() {
        var a = wB(this.b.F, sz(this.b.Wa));
        if (a) {
            if (0 < this.N) {
                var b = new nL(zv);
                if (1 == this.N) {
                    for (var c = [], d = 0, e = PG(a); d < e; d++)
                        c.push(VS(a, d));
                    var d = this.X
                      , f = this.Ra
                      , g = this.A
                      , m = N(Kp).value
                      , n = F(this.pj, this)
                      , e = d.a + Bd
                      , p = new nL
                      , r = new nL;
                    window.EGGS_JANGO && (f == ou && (DL(p, pv, ou),
                    f = x),
                    g == ou && (DL(p, Ww, ou),
                    g = x));
                    DL(p, fk, d.b);
                    DL(p, mv, f);
                    DL(p, Sw, g);
                    DL(p, Kp, m);
                    DL(p, ey, Hd);
                    b && p.g(b);
                    (b = !kz(c) || kz(c) && 1 == c.length) ? DL(r, nu, c) : EL(r, nu, c);
                    b = F(d.j, d, b, n);
                    WL(d, e, p, r, b)
                } else
                    for (d = 0,
                    e = PG(a); d < e; d++)
                        c = VS(a, d),
                        XL(this.X, this.Ra, this.A, N(Kp).value, c, [Ki, mw], F(this.qj, this, d), void 0, b)
            }
            b = new S(w);
            b.text = this.b.Na();
            b.Vi = nH(this.g);
            this.dispatchEvent(b);
            b = {};
            b.confidence = TG(QG(a, 0));
            this.A && this.Ra && this.R && (b.segments = nH(this.g),
            b.sl = this.A,
            b.tl = this.Ra,
            b.hl = this.R);
            this.F.log(Ut, b, null)
        }
    }
    ;
    C.qj = function(a, b) {
        var c;
        if (1 == this.N || 1 < nH(b)) {
            var d = YG(lH(b, 0));
            c = 1;
            for (var e = kH(b); c < e; c++)
                d += l + YG(lH(b, c));
            c = d
        } else if (1 == nH(b)) {
            var d = []
              , f = oH(b, 0);
            c = 0;
            for (e = Math.min(this.N, PG(f)); c < e; c++)
                d.push(VS(f, c));
            c = d.join(Xb)
        } else
            c = ed;
        nS(this.b, a, c)
    }
    ;
    C.pj = function(a) {
        for (var b = 0; b < a.length; b++)
            nS(this.b, b, a[b])
    }
    ;
    var WS = function(a, b) {
        null != a.j && null != a.j.b && R(a.j.b, b)
    }
      , XS = function(a, b) {
        null != a.w && (b && a.w.reset(),
        R(a.w.l(), b))
    };
    RS.prototype.qa = function() {
        var a = [], b;
        null != this.I ? b = this.I : b = DC(this.l());
        for (var c = {
            segment: []
        }, d = null, e = 0, f = 0; f < b.length; f++) {
            var g = oH(this.g, f);
            if (null != g) {
                var m = YC(b[f]), n;
                a: {
                    n = m;
                    var p = g;
                    if (0 == PG(p))
                        n = 0;
                    else {
                        for (var r = 0; r < PG(p); ++r)
                            if (n == VS(p, r)) {
                                n = r;
                                break a
                            }
                        n = -1
                    }
                }
                p = OG(g);
                r = cT(this.g, g, !0);
                if (0 == a.length || p != a[a.length - 1])
                    a.push(p),
                    e = 0,
                    d = {
                        source: p,
                        original_target: r,
                        phrase_correction: []
                    },
                    c.segment.push(d);
                if (0 != n)
                    for (p = VS(g, 0).length,
                    n = {
                        alternative_index: n,
                        edited_phrase: m,
                        source_span: [],
                        target_span: [{
                            start: e,
                            end: e + p
                        }]
                    },
                    d.phrase_correction.push(n),
                    p = 0; p < Z(g.a, 3); ++p)
                        r = RG(g, p),
                        n.source_span.push({
                            start: WG(r),
                            end: XG(r)
                        });
                e += m.length;
                UG(QG(g, 0)) && e++
            }
        }
        if (SS(this)) {
            this.dispatchEvent(v);
            NS(this.c);
            null != this.j && QS(this.j, !1);
            WS(this, !0);
            this.c.b.U() != $S(this) && YS(this, this.c.b.U());
            b = this.A + dd + this.Ra;
            for (f = 0; f < a.length; ++f)
                b += dd + a[f];
            a = this.c.b.U();
            this.C.a(b, a);
            c.contains_full_edit = !0
        }
        c.edited_target = $S(this, !0);
        a = new nL;
        DL(a, Wx, JSON.stringify(c));
        DL(a, mv, this.A);
        DL(a, Sw, this.Ra);
        WK(Dd, void 0, Rg, a.toString(), void 0, 1E4)
    }
    ;
    var SS = function(a) {
        return null != a.c && a.c.j
    }
      , US = function(a, b) {
        return VS(oH(a, b), 0)
    }
      , VS = function(a, b) {
        return SG(QG(a, b))
    };
    var eT = function(a) {
        this.a = a || []
    }
      , fT = function(a) {
        this.a = a || []
    };
    eT.prototype.b = z(t);
    eT.prototype.bc = function() {
        var a = this.a[0];
        return null != a ? a : k
    }
    ;
    var gT = function(a) {
        a = a.a[1];
        return null != a ? a : k
    }
      , hT = function(a) {
        a = a.a[2];
        return null != a ? a : k
    }
      , iT = function(a) {
        a = a.a[3];
        return null != a ? a : k
    }
      , jT = function(a) {
        a = a.a[4];
        return null != a ? a : k
    };
    fT.prototype.b = z(t);
    var kT = function(a) {
        a = a.a[3];
        return null != a ? a : k
    };
    fT.prototype.D = function() {
        var a = this.a[5];
        return null != a ? a : k
    }
    ;
    var lT = function(a) {
        a = a.a[6];
        return null != a ? a : k
    }
      , mT = function(a, b) {
        return new eT(kG(a.a, 2)[b])
    };
    var nT = function(a) {
        this.c = a;
        this.a = k
    };
    nT.prototype.b = function(a, b) {
        var c;
        c = b.target;
        var d;
        if (d = fL(c) && gL(c) != k)
            d = null != hL(c);
        d ? (c = hL(c),
        c = new fT(c),
        d = c.a[1],
        d = null != d ? d : k,
        null != d && d != k && (this.a = d)) : (c = new fT,
        c.a[3] = MSG_PB_ERROR);
        a(c)
    }
    ;
    var oT = function(a, b, c, d, e) {
        var f = window.location.href;
        b = new iL(b);
        (f = wL(new iL(f,!0))) && DL(b.a, Ti, f);
        b = b.toString();
        b += tb + a.c;
        USAGE != k && (b += Kb + USAGE);
        null != e ? WK(b, F(a.b, a, c), d, e) : WK(b, F(a.b, a, c), d)
    };
    var pT = function(a) {
        cM.call(this, a, Nu, MSG_SEE_ALSO, MSG_SEE_ALSO);
        this.Ne = !0
    };
    G(pT, cM);
    pT.prototype.update = function(a, b, c, d) {
        pT.v.update.call(this, a, b, c, d);
        if (!d || 0 == Z(jH(d).a, 0))
            return !1;
        zC(this.b);
        c = a = P(Zg, {
            "class": Yo
        });
        b = 15 < Z(jH(d).a, 0);
        for (var e = 0; e < Z(jH(d).a, 0); ++e) {
            var f, g = e;
            f = kG(jH(d).a, 0)[g];
            g = P(Zg, {
                "class": In
            });
            PC(g, f);
            if (10 == e && b) {
                var m = P(Zg, {
                    "class": Yo
                });
                c = m;
                m = b ? P(Zg, {
                    "class": vn
                }, m) : m;
                Q(m, {
                    display: us
                })
            }
            0 != e && e != Z(jH(d).a, 0) && c.appendChild(vC(Xb));
            c.appendChild(g)
        }
        c = FA(this.g) ? Mu : Br;
        Q(this.b, {
            direction: c
        });
        this.b.appendChild(a);
        m && this.b.appendChild(m);
        b && (d = MSG_N_MORE_RELATED_LABEL.replace(Ya, Z(jH(d).a, 0) - 7),
        eM(this, d, MSG_FEWER_RELATED_LABEL));
        this.setVisible(!0);
        return !0
    }
    ;
    pT.prototype.V = function() {
        pT.v.V.call(this);
        X(this).a(this.l(), w, this.c)
    }
    ;
    pT.prototype.c = function(a) {
        UB(a.target, In) && this.dispatchEvent(new S(t,a.target))
    }
    ;
    pT.prototype.I = function(a) {
        for (var b = [], c, d = lC(vn, this.l()), e = 0; e < d.length; e++)
            c = d[e],
            a ? b.push(new HS(c,218)) : b.push(new GS(c,218));
        for (e = 0; e < b.length; e++)
            b[e].play()
    }
    ;
    var qT = function(a, b) {
        U.call(this);
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            T(d, bs, this.a, !1, this);
            T(d, dr, function(a) {
                16 == a.keyCode && this.a(a)
            }, !1, this)
        }
        for (c = 0; c < b.length; ++c)
            d = b[c],
            T(d, bs, this.b, !1, this),
            T(d, dr, function(a) {
                16 == a.keyCode && this.b(a)
            }, !1, this)
    };
    G(qT, U);
    qT.prototype.a = function(a) {
        a = rT(a.target);
        if (a != k) {
            var b = new S(Uu);
            b.text = a;
            this.dispatchEvent(b)
        }
    }
    ;
    qT.prototype.b = function(a) {
        a = rT(a.target);
        if (a != k) {
            var b = new S(Uu);
            b.text = a;
            b.A = !0;
            this.dispatchEvent(b)
        }
    }
    ;
    var rT = function(a) {
        var b = k;
        try {
            if (b = aS(a).trim(),
            b != k)
                return b
        } catch (c) {}
        a = fQ(window);
        return a.toString ? a.toString().trim() : a.createRange ? a.createRange().text : k
    };
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var sT = function(a, b) {
        this.j = [];
        this.C = a;
        this.H = b || null;
        this.g = this.a = !1;
        this.c = void 0;
        this.D = this.K = this.B = !1;
        this.o = 0;
        this.b = null;
        this.w = 0
    };
    sT.prototype.cancel = function(a) {
        if (this.a)
            this.c instanceof sT && this.c.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.w--,
                0 >= b.w && b.cancel())
            }
            this.C ? this.C.call(this.H, this) : this.D = !0;
            this.a || (a = new tT,
            uT(this),
            vT(this, !1, a))
        }
    }
    ;
    sT.prototype.A = function(a, b) {
        this.B = !1;
        vT(this, a, b)
    }
    ;
    var vT = function(a, b, c) {
        a.a = !0;
        a.c = c;
        a.g = !b;
        wT(a)
    }
      , uT = function(a) {
        if (a.a) {
            if (!a.D)
                throw new xT;
            a.D = !1
        }
    };
    sT.prototype.M = function(a) {
        uT(this);
        vT(this, !0, a)
    }
    ;
    var yT = function(a, b, c, d) {
        a.j.push([b, c, d]);
        a.a && wT(a)
    };
    sT.prototype.then = function(a, b, c) {
        var d, e, f = new bF(function(a, b) {
            d = a;
            e = b
        }
        );
        yT(this, d, function(a) {
            a instanceof tT ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    }
    ;
    ZE(sT);
    var zT = function(a) {
        return fA(a.j, function(a) {
            return oz(a[1])
        })
    }
      , wT = function(a) {
        if (a.o && a.a && zT(a)) {
            var b = a.o
              , c = AT[b];
            c && (E.clearTimeout(c.Ea),
            delete AT[b]);
            a.o = 0
        }
        a.b && (a.b.w--,
        delete a.b);
        for (var b = a.c, d = c = !1; a.j.length && !a.B; ) {
            var e = a.j.shift()
              , f = e[0]
              , g = e[1]
              , e = e[2];
            if (f = a.g ? g : f)
                try {
                    var m = f.call(e || a.H, b);
                    dz(m) && (a.g = a.g && (m == b || m instanceof Error),
                    a.c = b = m);
                    if ($E(b) || typeof E.Promise === um && b instanceof E.Promise)
                        d = !0,
                        a.B = !0
                } catch (n) {
                    b = n,
                    a.g = !0,
                    zT(a) || (c = !0)
                }
        }
        a.c = b;
        d && (m = F(a.A, a, !0),
        d = F(a.A, a, !1),
        b instanceof sT ? (yT(b, m, d),
        b.K = !0) : b.then(m, d));
        c && (b = new BT(b),
        AT[b.Ea] = b,
        a.o = b.Ea)
    }
      , xT = function() {
        xz.call(this)
    };
    G(xT, xz);
    xT.prototype.message = "Deferred has already fired";
    xT.prototype.name = "AlreadyCalledError";
    var tT = function() {
        xz.call(this)
    };
    G(tT, xz);
    tT.prototype.message = "Deferred was canceled";
    tT.prototype.name = "CanceledError";
    var BT = function(a) {
        this.Ea = E.setTimeout(F(this.b, this), 0);
        this.a = a
    };
    BT.prototype.b = function() {
        delete AT[this.Ea];
        throw this.a;
    }
    ;
    var AT = {};
    var GT = function(a, b) {
        var c = b || {}
          , d = c.document || document
          , e = document.createElement(Wg)
          , f = {
            $g: e,
            ic: void 0
        }
          , g = new sT(CT,f)
          , m = null
          , n = null != c.timeout ? c.timeout : 5E3;
        0 < n && (m = window.setTimeout(function() {
            DT(e, !0);
            var b = new ET(1,uh + a);
            uT(g);
            vT(g, !1, b)
        }, n),
        f.ic = m);
        e.onload = e.onreadystatechange = function() {
            e.readyState && e.readyState != yr && e.readyState != pk || (DT(e, c.Nh || !1, m),
            g.M(null))
        }
        ;
        e.onerror = function() {
            DT(e, !0, m);
            var b = new ET(0,bg + a);
            uT(g);
            vT(g, !1, b)
        }
        ;
        f = c.attributes || {};
        AA(f, {
            type: Iw,
            charset: zh,
            src: a
        });
        nC(e, f);
        FT(d).appendChild(e);
        return g
    }
      , FT = function(a) {
        var b = a.getElementsByTagName(hg);
        return b && 0 != b.length ? b[0] : a.documentElement
    }
      , CT = function() {
        if (this && this.$g) {
            var a = this.$g;
            a && a.tagName == Wg && DT(a, !0, this.ic)
        }
    }
      , DT = function(a, b, c) {
        null != c && E.clearTimeout(c);
        a.onload = gz;
        a.onerror = gz;
        a.onreadystatechange = gz;
        b && window.setTimeout(function() {
            CC(a)
        }, 0)
    }
      , ET = function(a, b) {
        var c = pg + a + Pb;
        b && (c += fe + b);
        xz.call(this, c)
    };
    G(ET, xz);
    var HT = function(a, b) {
        this.b = new iL(a);
        this.a = b ? b : Tj;
        this.ic = 5E3
    }
      , IT = 0;
    HT.prototype.cancel = function(a) {
        a && (a.cg && a.cg.cancel(),
        a.Ea && JT(a.Ea, !1))
    }
    ;
    var KT = function(a, b, c) {
        return function() {
            JT(a, !1);
            c && c(b)
        }
    }
      , LT = function(a, b) {
        return function(c) {
            JT(a, !0);
            b.apply(void 0, arguments)
        }
    }
      , JT = function(a, b) {
        E._callbacks_[a] && (b ? delete E._callbacks_[a] : E._callbacks_[a] = gz)
    };
    var MT = function(a) {
        this.g = new HT(INPUT_SUGGESTION_SERVER_URL);
        this.g.ic = 500;
        this.a = null;
        this.j = 0;
        this.c = !1;
        this.D = mK.O();
        this.w = a
    }
      , hR = function(a, b, c, d, e) {
        NT(a);
        if (0 == b.length || 64 < b.length || c == Ui)
            e([]);
        else {
            c = c == Dy || c == Ey ? Cy : c;
            var f = 167 - (wz() - a.j);
            0 > f && (f = 0);
            a.b = uF(function() {
                if (this.b) {
                    this.b = void 0;
                    var a = c;
                    this.j = wz();
                    var f = {};
                    f.q = b;
                    f.client = ux;
                    f.ds = tx;
                    f.hl = a;
                    f.requiredfields = Tw + d;
                    var n = this.g
                      , p = F(this.B, this, b, a, d, e)
                      , a = F(this.o, this, Ud, b, a, d)
                      , f = f || null
                      , r = Qh + (IT++).toString(36) + wz().toString(36);
                    E._callbacks_ || (E._callbacks_ = {});
                    var u = n.b.clone();
                    if (f)
                        for (var A in f)
                            if (!f.hasOwnProperty || f.hasOwnProperty(A)) {
                                var D = u
                                  , V = A
                                  , Y = f[A];
                                kz(Y) || (Y = [String(Y)]);
                                EL(D.a, V, Y)
                            }
                    p && (E._callbacks_[r] = LT(r, p),
                    p = n.a,
                    A = Sh + r,
                    kz(A) || (A = [String(A)]),
                    EL(u.a, p, A));
                    n = GT(u.toString(), {
                        timeout: n.ic,
                        Nh: !0
                    });
                    yT(n, null, KT(r, f, a), void 0);
                    this.a = {
                        Ea: r,
                        cg: n
                    }
                }
            }, f, a)
        }
    }
      , NT = function(a) {
        a.a && (a.c = !0,
        a.g.cancel(a.a),
        a.a = null);
        a.b && (vF(a.b),
        a.b = void 0)
    };
    MT.prototype.o = function(a, b, c, d, e, f) {
        this.c || (b = {
            q: b,
            sl: c,
            tl: d
        },
        e && (b.se = e.substring(0, 64)),
        f && (b.msg = f.substring(0, 64)),
        rK(this.D, this.w, sq, a, b));
        this.c = !1
    }
    ;
    MT.prototype.B = function(a, b, c, d, e) {
        try {
            var f = eA(e[1], function(a) {
                a = a[0];
                a = -1 != a.indexOf(cb) ? ol in E ? Qz(a) : Rz(a) : a;
                return new aR(a)
            }, this);
            d(f)
        } catch (g) {
            this.o(Wd, a, b, c, CK(e), g.message)
        }
        this.a = null
    }
    ;
    var OT = function() {
        this.a = []
    };
    OT.prototype.clear = function() {
        this.a = []
    }
    ;
    var PT = function(a) {
        this.b = a || Pr
    };
    G(PT, WN);
    hz(PT);
    PT.prototype.S = B(io);
    PT.prototype.g = function(a) {
        return FC(a)
    }
    ;
    PT.prototype.a = function(a) {
        return a.tagName == q && a.firstChild && a.firstChild.tagName == yh ? !0 : !1
    }
    ;
    PT.prototype.o = function() {
        var a = P(q, io)
          , b = P(yh, jo);
        a.appendChild(b);
        return a
    }
    ;
    var QT = function(a, b, c) {
        bO.call(this, a || aO(PT.O()), b || PT.O(), c);
        mO(this, !1)
    };
    G(QT, bO);
    QT.prototype.Ja = function(a) {
        return 27 == a.keyCode ? (this.setVisible(!1),
        a.stopPropagation(),
        a.preventDefault(),
        !0) : QT.v.Ja.call(this, a)
    }
    ;
    var dR = function(a) {
        var b = [];
        cG(a, function(a) {
            b.push(a)
        });
        return b
    };
    var RT = function(a) {
        cM.call(this, a, Qv, MSG_SYNONYMS_OF, MSG_SYNONYMS)
    };
    G(RT, cM);
    RT.prototype.update = function(a, b, c, d) {
        RT.v.update.call(this, a, b, c, d);
        if (!d || 0 == Z(d.a, 11))
            return !1;
        zC(this.b);
        var e = a = 0;
        for (b = 0; b < Z(d.a, 11); ++b) {
            c = pH(d, b);
            var f;
            f = c.a[2];
            f = null != f ? f : k;
            a += c.Eb();
            for (var g = 0; g < c.Eb(); ++g)
                var m = c.Fb(g)
                  , e = e + Z(m.a, 0)
        }
        f && (this.Dd = f,
        dM(this, f));
        f = 2 < a / Z(d.a, 11) && 1 < e - a;
        m = 1 == a / Z(d.a, 11);
        for (b = 0; b < Z(d.a, 11); ++b) {
            c = pH(d, b);
            var n = P(q, {
                "class": Jn
            });
            this.b.appendChild(n);
            g = c.a[0];
            PC(n, null != g ? g : k);
            n = P(yh, {
                "class": np
            });
            g = FA(this.g) ? Mu : Br;
            Q(n, {
                direction: g
            });
            this.b.appendChild(n);
            if (f) {
                for (var g = c, p = P(Zg, {
                    "class": pp
                }), r = P(q, {
                    "class": op
                }, p), u = [], A = 0; A < g.Eb(); ++A) {
                    var D = cH(g.Fb(A), 0);
                    if (!jA(u, D)) {
                        u.push(D);
                        0 < A && p.appendChild(vC(Xb));
                        var V = P(Zg, {
                            "class": In
                        });
                        p.appendChild(V);
                        PC(V, D)
                    }
                }
                g = P(q, {
                    "class": qp
                }, r);
                n.appendChild(g)
            }
            for (g = 0; g < c.Eb(); ++g)
                for (p = c.Fb(g),
                u = m ? q : rg,
                r = P(Zg, {
                    "class": pp
                }),
                u = P(u, {
                    "class": op
                }, r),
                u = fM(u, !f),
                n.appendChild(u),
                u = 0; u < Z(p.a, 0); ++u)
                    A = P(Zg, {
                        "class": In
                    }),
                    r.appendChild(A),
                    PC(A, cH(p, u)),
                    u < Z(p.a, 0) - 1 && r.appendChild(vC(Xb))
        }
        f && (d = MSG_N_MORE_SYNONYMS_LABEL.replace(Ya, e - a),
        eM(this, d, MSG_FEWER_SYNONYMS_LABEL));
        this.setVisible(!0);
        return !0
    }
    ;
    RT.prototype.V = function() {
        RT.v.V.call(this);
        X(this).a(this.l(), w, this.c)
    }
    ;
    RT.prototype.c = function(a) {
        UB(a.target, In) && this.dispatchEvent(new S(t,a.target))
    }
    ;
    RT.prototype.I = function(a) {
        RT.v.I.call(this, a);
        for (var b = lC(qp, this.l()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = O(op, d)
              , f = MD(e, Gr)
              , e = AD(e).height + f.top + f.bottom;
            Q(d, Mr, a ? 0 : e + mu)
        }
    }
    ;
    var ST = function(a, b) {
        this.D = mK.O();
        this.b = a;
        I || DB || FB || T(a, vk, this.B, !1, this);
        this.a = b;
        for (var c = 0; c < b.length; c++)
            T(b[c], Yr, this.w, !1, this);
        this.g = this.c = null;
        this.o = this.j = !1
    };
    G(ST, TD);
    ST.prototype.L = function() {
        ST.v.L.call(this);
        yE(this.b, vk, this.B, !1, this);
        this.b = null;
        for (var a = 0; a < this.a.length; a++)
            yE(this.a[a], Yr, this.w, !1, this);
        this.a = null
    }
    ;
    ST.prototype.B = function() {
        var a = UQ();
        a && this.b && (this.g = a,
        uF(this.A, 0, this),
        N(Ko) && (this.j = DD(N(Ko)),
        this.o = DD(N(Vo)),
        R(N(Ko), !1),
        R(N(Vo), !1)),
        a = fQ(window).toString(),
        this.c = eS(a))
    }
    ;
    ST.prototype.w = function(a) {
        var b = a.b.detail;
        1 < b && cE(a) && jA(this.a, a.target) && (a.preventDefault(),
        dS(this.b),
        a = {},
        a.clickCount = b,
        this.D.log(Rk, a))
    }
    ;
    ST.prototype.A = function() {
        this.g && (this.g.select(),
        this.g = null);
        this.c && (CC(this.c),
        this.c = null);
        this.j && R(N(Ko), !0);
        this.o && R(N(Vo), !0)
    }
    ;
    var TT = [w, FB ? cr : br, dr]
      , UT = function(a, b, c, d) {
        var e = function(a) {
            var d = rE(b)
              , e = HC(a.target) ? a.target.getAttribute(Iu) || null : null;
            a.type == w && cE(a) ? d.call(c, a) : 13 != a.keyCode && 3 != a.keyCode || a.type == dr ? 32 != a.keyCode || a.type != dr || e != Lj && e != vw || (d.call(c, a),
            a.preventDefault()) : (a.type = cr,
            d.call(c, a))
        };
        e.a = b;
        e.b = c;
        d ? d.a(a, TT, e, void 0) : T(a, TT, e, void 0)
    };
    var VT = function(a) {
        var b = We + (a.uid ? ka + MJ(a.uid) + Ca : k) + qf + (a.uid ? qa + MJ(a.uid) + Ca : k) + pf;
        a.tj && (a = b,
        b = "Close".replace(KJ, LJ),
        b = a + (Ye + b + Fa));
        return EJ(b + Xe)
    };
    var WT = function(a) {
        W.call(this, a);
        this.c = new MI(Aq,!0);
        this.b = new HR;
        this.C = []
    };
    G(WT, W);
    WT.prototype.g = !0;
    var YT = function(a, b) {
        a.J = b;
        XT(a, b)
    }
      , XT = function(a, b) {
        var c = a.wb();
        if (b && c)
            if (mz(b))
                fC(c, dB(b, null));
            else if (b instanceof DJ) {
                var d;
                if (b.Lb === vJ)
                    d = eB(b.toString());
                else {
                    if (b.Lb !== tJ)
                        throw Error("Sanitized content was not of kind TEXT or HTML.");
                    d = OA(hh);
                    var e = b.toString()
                      , f = b.Xc;
                    $z(NA(d));
                    NA(d);
                    d = dB(e, f || null)
                }
                fC(c, d)
            } else
                b instanceof bB ? fC(c, b) : (fC(c, mB),
                c.appendChild(b))
    };
    C = WT.prototype;
    C.setAutoHide = function(a) {
        this.b.setAutoHide(a)
    }
    ;
    C.wb = function() {
        return ZF(this, Dq)
    }
    ;
    C.na = function() {
        this.G = BJ(VT, {
            tj: this.g,
            uid: Kj + sz(this)
        }, void 0, this.a);
        XT(this, this.J);
        R(this.l(), !1);
        this.b.fd(this.l());
        if (!HB) {
            var a = this.b
              , b = ER(this.l(), .218, Dl, 0, 1)
              , c = ER(this.l(), .218, Cl, 1, 0);
            a.w = b;
            a.B = c
        }
        VB(this.l(), this.C)
    }
    ;
    C.V = function() {
        WT.v.V.call(this);
        X(this).a(this.b, [ij, kv, hj, Gp], this.I);
        if (this.g) {
            var a = X(this)
              , b = ZF(this, Cq);
            UT(b, vz(this.setVisible, !1), a.H || a, a)
        }
        var a = this.l()
          , b = ZF(this, Bq)
          , c = this.c;
        c.c = a;
        c.j = b;
        a = this.b;
        a.I = this.c || void 0;
        a.isVisible() && a.A()
    }
    ;
    C.setVisible = function(a) {
        this.b.setVisible(a)
    }
    ;
    C.isVisible = function() {
        return this.b.isVisible()
    }
    ;
    var ZT = function(a) {
        a.isVisible() && a.b.A()
    };
    WT.prototype.L = function() {
        this.b.xa();
        delete this.b;
        WT.v.L.call(this)
    }
    ;
    WT.prototype.j = function() {
        uD(this.l());
        return !1
    }
    ;
    WT.prototype.I = function(a) {
        if (a.type == kv || a.type == Gp) {
            var b = X(this)
              , c = this.a
              , c = I ? dD(c) : c.b;
            a.type == kv ? b.a(c, Ru, this.j) : b.b(c, Ru, this.j)
        }
        return this.dispatchEvent(a.type)
    }
    ;
    var $T = function(a, b, c, d, e, f) {
        W.call(this);
        this.g = mK.O();
        this.A = b;
        this.F = c;
        this.C = d;
        this.I = e;
        this.c = a;
        this.b = this.j = null;
        this.w = f
    };
    G($T, W);
    C = $T.prototype;
    C.setVisible = function(a) {
        a ? (this.g.log(ok, lv + this.c),
        this.j.setVisible(!0),
        this.w || (this.g.log(ok, Js + this.c),
        this.b.setVisible(!0),
        this.w = !0,
        qK(this.g, vd + this.c))) : (this.j.setVisible(!1),
        this.b.setVisible(!1))
    }
    ;
    C.Y = function(a) {
        $T.v.Y.call(this, a);
        var b = P(q, {
            id: this.c + mc,
            style: ml
        });
        a.insertBefore(b, a.firstChild);
        this.j = new AI(k,new nJ(px,!0));
        this.j.P(b);
        a = this.b = new WT;
        a.c.b = this.j.l();
        ZT(a);
        NI(this.b.c, 1, 1, void 0);
        this.b.g = !1;
        this.b.$();
        a = HJ(XM, {
            id: this.c,
            Ye: this.A,
            kd: this.F,
            Uh: this.C,
            url: this.I
        });
        YT(this.b, a);
        this.b.setVisible(!1);
        T(this.j, v, this.Ej, !1, this);
        a = O(ny, this.b.l());
        X(this).a(a, w, this.Dj);
        a = O(my, this.b.l());
        X(this).a(a, w, this.ji)
    }
    ;
    C.Ej = function() {
        uR(this.b.b) ? this.b.setVisible(!1) : (this.g.log(ok, Js + this.c),
        this.b.setVisible(!0))
    }
    ;
    C.Dj = function() {
        this.g.log(ok, ek + this.c)
    }
    ;
    C.ji = function() {
        this.g.log(ok, il + this.c);
        this.b.setVisible(!1)
    }
    ;
    var aU = function() {
        var a;
        return JB ? (a = /Windows NT ([0-9.]+)/,
        (a = a.exec(GA)) ? a[1] : Fd) : IB ? (a = /10[_.][0-9_.]+/,
        (a = a.exec(GA)) ? a[0].replace(/_/g, dd) : Id) : KB ? (a = /Android\s+([^\);]+)(\)|;)/,
        (a = a.exec(GA)) ? a[1] : k) : LB || MB ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/,
        (a = a.exec(GA)) ? a[1].replace(/_/g, dd) : k) : k
    }();
    var bU = az()
      , cU = function(a) {
        var b = P(Cv);
        b.style.color = wx;
        b.style.background = wx;
        b.style.top = ac;
        b.style.left = ac;
        b.style.position = Zh;
        document.body.appendChild(b);
        PC(b, a);
        a = b.offsetWidth;
        CC(b);
        return a
    };
    hz(bU);
    var dU = function() {
        bU.O()
    };
    hz(dU);
    var eU = function(a) {
        var b = cU(a);
        a = cU(a.substr(0, 1));
        return b != a
    };
    var fU = function(a) {
        this.b = FD(k);
        this.a = (kz(a) ? a.join(Wb) : a) + Jy
    }
      , gU = function() {
        dU.O();
        this.a = {
            bn: eU(Oy),
            km: eU(Yy),
            lo: eU(Wy),
            ml: eU(Uy),
            my: eU(Xy),
            si: eU(Vy),
            ta: eU(Py) || cU(Ty) + cU(Qy) != cU(Sy) + cU(Ry),
            qab: EGGS_JANGO
        }
    };
    hz(gU);
    var hU = {
        "Noto Sans Malayalam": "notosansmalayalam",
        "Noto Sans Myanmar": "notosansmyanmar",
        "Noto Sans Sinhala": "notosanssinhala"
    }, iU = {
        Dhyana: RF || CB || PF || OF || NF
    }, jU;
    if (jU = JB)
        jU = 0 <= Xz(aU, "6.0");
    var kU = {
        lo: jU
    }
      , lU = {
        bn: "Lohit Bengali",
        lo: "Dhyana",
        km: "Nokora",
        ml: "Noto Sans Malayalam",
        my: "Noto Sans Myanmar",
        si: "Noto Sans Sinhala",
        ta: "Lohit Tamil",
        qab: Df
    }
      , mU = function() {
        this.a = {};
        gU.O()
    };
    hz(mU);
    var qU = function() {
        this.j = gU.O();
        this.b = mU.O();
        this.a = new fU(nU);
        this.c = new fU(oU);
        this.g = new fU(pU)
    }
      , nU = [oj, "#gb", "#gt-submit.jfk-button"]
      , oU = "#source .gt-hl-layer .gt-baf-translations .round-trip-content .vk-cap .vk-t .orig".split(" ")
      , pU = "#result_box .gt-baf-word .gt-baf-word-clickable .alt-menu .gt-ex-translate #alt-input-text .text-wrap".split(" ")
      , rU = function(a, b, c) {
        a: {
            var d = kU[c]
              , e = a.j.a[c];
            if ((null == d || !d) && null != e && e && (c = lU[c],
            null != c && (d = iU[c],
            null == d || !d)))
                break a;
            c = k
        }
        a = a.b;
        if (c != k && null == a.a[c]) {
            a = a.a;
            var e = d = c
              , f = xf + (EGGS_JANGO && e == Df ? k : ld)
              , g = new iL;
            EGGS_JANGO && e == Df ? g.j = td : null != hU[e] ? g.j = pd + hU[e] + fd : (g.j = od,
            DL(g.a, Zl, e));
            a[d] = FD(f + g.toString() + Rb)
        }
        a = b.b;
        b = c == k ? b.a.replace(ab, k) : b.a.replace(ab, Ca + c + Ma);
        ED(a, b)
    }
      , sU = function(a, b) {
        rU(a, a.a, b)
    }
      , tU = function(a, b) {
        rU(a, a.c, b)
    }
      , uU = function(a, b) {
        rU(a, a.g, b)
    };
    var vU = function(a) {
        this.ob = a || []
    }
      , wU = function(a) {
        this.a = a || []
    };
    vU.prototype.b = z("ob");
    var xU = function(a, b) {
        return kG(a.ob, 0)[b]
    }
      , yU = function(a, b) {
        return kG(a.ob, 1)[b]
    };
    wU.prototype.b = z(t);
    var zU = new vU
      , AU = function(a) {
        return (a = a.a[0]) ? new vU(a) : zU
    }
      , BU = new pG;
    var GU = function(a) {
        var b = N(To)
          , c = N(jp);
        N(Uo).style.display = k;
        if (QF && EP(43) || I && J(11) || CB && J(29)) {
            var d = new AI(MSG_COPY,new nJ(wk));
            d.P(CU(Io, b));
            d.setVisible(!1);
            a.c = d
        } else
            MSG_SELECT_ALL && MSG_SELECT_ALL != k && (d = new AI(MSG_SELECT_ALL,new nJ(Vu)),
            d.P(CU(Qo, b)),
            d.setVisible(!1),
            a.c = d);
        a.N = DU(Po, b, yu);
        a.Ma = EU(Oo, b);
        a.sa = DU(hp, c, Lv);
        a.R = EU(gp, c);
        HL && (a.a = P(q, {
            id: ho,
            style: ll
        }),
        c.appendChild(a.a),
        MSG_SHARE && (c = new AI(MSG_SHARE,new nJ(ev)),
        c.P(CU(Ro, b)),
        c.setVisible(!1),
        a.T = c));
        a.F = FU();
        a.ib = FU();
        a.b = PL;
        return a
    }
      , CU = function(a, b) {
        var c = P(q, {
            id: a,
            style: ml
        });
        b.appendChild(c);
        return c
    }
      , EU = function(a, b) {
        var c = new kJ(MSG_LISTEN,void 0,new nJ(gx));
        c.P(CU(a, b));
        c.setVisible(!1);
        return c
    }
      , DU = function(a, b, c) {
        c = new lJ(MSG_READ_PHONETICALLY,N(c),void 0,new nJ(jx));
        c.P(CU(a, b));
        c.setVisible(!1);
        return c
    }
      , FU = function() {
        var a = new AI(MSG_CLEAR_TEXT,new nJ(ck));
        a.P(P(q, {
            id: Ln,
            style: ml,
            tabindex: Fd
        }));
        a.setVisible(!1);
        return a
    };
    var HU = function(a, b) {
        this.j = k;
        this.J = a;
        this.C = P(t, {
            href: xq,
            id: sn
        }, MSG_DISMISS);
        this.c = P(t, {
            id: tn
        });
        this.A = P(Cv);
        var c = P(Cv);
        c.appendChild(this.A);
        c.appendChild(this.c);
        c.appendChild(this.C);
        T(this.C, w, this.F, !1, this);
        T(this.c, w, this.I, !1, this);
        YQ.call(this, c, b)
    };
    G(HU, YQ);
    HU.prototype.log = function(a) {
        var b = {
            hl: this.J,
            type: this.j
        };
        mK.O().log(a, b)
    }
    ;
    var IU = function(a) {
        Az(MSG_BUTTER_BAR_DESC) && Az(MSG_BUTTER_BAR_BUTTON) || (a.j = BUTTER_BAR_LOGTYPE,
        PC(a.A, MSG_BUTTER_BAR_DESC),
        PC(a.c, MSG_BUTTER_BAR_BUTTON),
        a.c.href = BUTTER_BAR_URL,
        a.setVisible(!0))
    };
    HU.prototype.setVisible = function(a) {
        a && this.log(aj);
        HU.v.setVisible.call(this, a)
    }
    ;
    HU.prototype.I = function() {
        this.setVisible(!1);
        this.log($i)
    }
    ;
    HU.prototype.F = function() {
        this.setVisible(!1);
        qK(mK.O(), wd + this.j)
    }
    ;
    var JU = bz(t)
      , KU = function(a, b, c) {
        var d = N(a);
        d ? R(d, b) : c && null.Pj(Yf + a)
    }
      , LU = function(a, b) {
        KU(am, b, !1);
        KU(cm, b, !1);
        if (b) {
            var c = a.a;
            null != c.Be && c.Be.Xh()
        }
    }
      , OU = function(a, b) {
        KU(kp, b, !0);
        MU(b);
        NU(a.a)
    }
      , MU = function(a) {
        if (a) {
            a = N(ip);
            for (var b = 0, c = a.childNodes.length; b < c; b++)
                if (a.childNodes[b].style.display != us) {
                    KU(ip, !0, !0);
                    return
                }
        }
        KU(ip, !1, !0)
    };
    var PU = function(a, b) {
        var c = Rl;
        null != b && b && (c = Fr + c);
        cM.call(this, a, c, MSG_EXAMPLES_OF, MSG_EXAMPLES);
        this.c = new xG;
        this.N = this.F = Br
    };
    G(PU, cM);
    PU.prototype.update = function(a, b, c, d) {
        PU.v.update.call(this, a, b, c, d);
        zC(this.b);
        this.c = (a = d.a[13]) ? new xG(a) : hH;
        if (0 == Z(this.c.a, 0))
            return !1;
        this.setVisible(!0);
        3 <= Z(this.c.a, 0) && (a = MSG_N_MORE_EXAMPLES_LABEL.replace(Ya, Z(this.c.a, 0) - 1),
        eM(this, a, MSG_FEWER_EXAMPLES_LABEL));
        this.F = FA(this.g) ? Mu : Br;
        this.N = FA(this.j) ? Mu : Br;
        for (a = 0; a < Z(this.c.a, 0); ++a) {
            b = 0 == a || 1 == a && 2 == Z(this.c.a, 0);
            var e;
            c = a;
            e = new wG(kG(this.c.a, 0)[c]);
            c = e.a[0];
            d = e.a[1];
            e = e.a[2];
            c = BJ($J, {
                uj: this.F,
                eh: null != c ? c : k,
                xf: null != e ? e : k,
                Oi: null != d ? d : k,
                Sf: this.N,
                Lj: MSG_MT_FROM_GOOGLE
            });
            b = fM(c, b);
            this.b.appendChild(b)
        }
        return !0
    }
    ;
    PU.prototype.lg = function() {
        var a = {};
        a.total = Z(this.c.a, 0);
        return a
    }
    ;
    var QU = function(a, b, c) {
        this.a = a;
        this.c = b;
        this.g = c
    }
      , RU = [am, so, rp, Oo, Cu, Po, Iv, wv, Zo, gp, hp, yu, Lv]
      , SU = function(a) {
        null != a.a && T(a.a, w, a.b, !1, a)
    };
    QU.prototype.b = function() {
        var a = {
            productId: Rd,
            locale: this.g
        }
          , b = this.c
          , c = {
            NO_CACHE_RESULT: b.Ce ? CK(b.Ce) : vs
        };
        c.DISPLAY_LANGUAGE = b.c;
        c.SOURCE_LANGUAGE = TU(b);
        c.TARGET_LANGUAGE = UU(b);
        c.ACTUAL_SOURCE = VU(b);
        c.SOURCE_TEXT = WU(b);
        c.TARGET_TEXT = $S(b.b, void 0);
        c.SOURCE_STATIC = TN(b.a.A.a);
        c.TARGET_STATIC = TN(b.a.H.a);
        c.BOTTOM_SUGG = TN(b.a.D.a);
        VU(b) == UU(b) || Az(WU(b)) || Az($S(b.b, void 0)) || WU(b) != $S(b.b, void 0) || (c.IDENTICAL_TRANSLATION = Gd);
        window.JS_ERR_COUNT && (c.JS_ERR_COUNT = JS_ERR_COUNT,
        c.JS_ERR_ARR = JS_ERR_ARR);
        null != b.T && (c.TTL = b.Gg - b.T);
        null != b.Ke && (c.TTNC = b.Ke);
        0 < EXPERIMENT_IDS.length && (c.EXP = EXPERIMENT_IDS.join(Wb));
        b.vd && (b = b.vd,
        b = 10 * (b.b - 1) + b.j,
        0 <= b && (c.HATS = b));
        for (var d in RU) {
            var e = RU[d]
              , b = document.getElementById(e)
              , e = Vf + e + Nh;
            c[e] = b ? Sl : Ur;
            b && (fy in b && (c[e + hd] = k + b.value),
            YC(b) != k && (c[e + gd] = k + YC(b)))
        }
        try {
            a.timeOfStartCall = (new Date).getTime();
            if (a.flow == Dp) {
                var f = fz(pl, E);
                !a.helpCenterContext && f && (a.helpCenterContext = f.substring(0, 1200));
                f = !0;
                if (c && JSON && JSON.stringify) {
                    var g = JSON.stringify(c);
                    (f = 1200 >= g.length) && (a.psdJson = g)
                }
                f || (c = {
                    invalidPsd: !0
                })
            }
            g = [a, c, void 0];
            E.GOOGLE_FEEDBACK_START_ARGUMENTS = g;
            var m = a.serverUri || nd
              , n = E.GOOGLE_FEEDBACK_START;
            if (n)
                n.apply(E, g);
            else {
                var m = m + sd, p;
                for (p in a) {
                    var r = a[p];
                    null != r && !pz(r) && (m += encodeURIComponent(p) + mf + encodeURIComponent(r) + cb)
                }
                var u = E.document
                  , A = u.createElement(Qu);
                A.src = m;
                u.body.appendChild(A)
            }
        } catch (D) {}
    }
    ;
    var XU = function(a) {
        W.call(this, a)
    };
    G(XU, W);
    XU.prototype.na = function() {
        this.G = this.a.a(cg, {
            method: Rg,
            style: ml
        })
    }
    ;
    var ZU = function(a, b, c, d) {
        var e = a.l();
        e || (a.$(),
        e = a.l());
        e.action = c || k;
        e.target = d || k;
        YU(a, e, b);
        e.submit()
    }
      , YU = function(a, b, c) {
        var d, e, f = [];
        for (d in c)
            e = c[d],
            lz(e) ? cA(e, F(function(a) {
                f.push($U(d, String(a)))
            }, a)) : f.push($U(d, String(e)));
        fC(b, lB(f))
    }
      , $U = function(a, b) {
        return kB(oq, {
            type: Fp,
            name: a,
            value: b
        })
    };
    var aV = function(a, b, c) {
        W.call(this);
        this.c = a;
        this.w = b;
        this.j = c;
        this.b = !1
    };
    G(aV, W);
    C = aV.prototype;
    C.na = function() {
        aV.v.na.call(this);
        this.Y(document.createElement(q))
    }
    ;
    C.Y = function(a) {
        aV.v.Y.call(this, a);
        K(a, lu);
        a.appendChild(AJ(UJ, {
            Hh: MSG_HUMAN_TRANSLATION_ACTION,
            Ye: MSG_HUMAN_TRANSLATION_DESCRIPTION
        }));
        X(this).a(this.l(), w, this.Fj);
        a = new AI(MSG_DISMISS,new nJ(ck));
        a.$(this.l());
        this.g = a.l();
        X(this).a(a, v, this.Gj)
    }
    ;
    C.Fj = function(a) {
        if (!a.target || !JC(this.g, a.target)) {
            a = new XU;
            var b = {};
            b.hl = this.j;
            var c = VU(this.c);
            c != Ui && (b.sl = c);
            b.tl = UU(this.c);
            b.r = tx;
            c = WU(this.w, !0);
            if (1500 > Ez(c).length)
                b.src = c,
                window.open(md + JK(b) + Ta, Wh);
            else {
                var d = {};
                d.src = c;
                ZU(a, d, md + JK(b) + Ta)
            }
        }
    }
    ;
    C.Gj = function() {
        this.b = !0;
        (new GS(this.l(),300)).play();
        mK.O().log(jl)
    }
    ;
    C.setVisible = function(a) {
        this.b || R(this.l(), a)
    }
    ;
    var bV = function(a, b) {
        this.j = mK.O();
        this.g = b;
        this.b = this.c = this.a = 0;
        this.Dc = new EI(this.Qg,3E3,this);
        T(a, vk, this.Ij, !1, this);
        T(a, bs, this.Jj, !1, this);
        T(a, tk, this.gi, !1, this);
        T(a, w, this.Hj, !1, this)
    };
    C = bV.prototype;
    C.Ij = function() {
        FI(this.Dc);
        this.Qg(1)
    }
    ;
    C.Qg = function(a) {
        var b = 0;
        a && (b = a);
        this.j.log(this.g, {
            cpy: b,
            clk: this.a,
            sel: this.c,
            ctx: this.b
        });
        this.b = this.c = this.a = 0
    }
    ;
    C.Jj = function() {
        cS() && (this.c++,
        GI(this.Dc))
    }
    ;
    C.Hj = function(a) {
        cE(a) && (this.a++,
        GI(this.Dc))
    }
    ;
    C.gi = function() {
        this.b++;
        GI(this.Dc)
    }
    ;
    var cV = {
        8: "backspace",
        9: vw,
        13: Nl,
        16: gv,
        17: Dk,
        18: ki,
        19: "pause",
        20: "caps-lock",
        27: "esc",
        32: "space",
        33: "pg-up",
        34: "pg-down",
        35: Ll,
        36: "home",
        37: or,
        38: "up",
        39: Gu,
        40: "down",
        45: "insert",
        46: "delete",
        48: Fd,
        49: Gd,
        50: Pd,
        51: Sd,
        52: Ud,
        53: Wd,
        54: "6",
        55: $d,
        56: ae,
        57: ce,
        59: "semicolon",
        61: "equals",
        65: t,
        66: Vi,
        67: Oj,
        68: Ek,
        69: wl,
        70: "f",
        71: vm,
        72: "h",
        73: aq,
        74: "j",
        75: "k",
        76: gr,
        77: Fr,
        78: "n",
        79: ys,
        80: "p",
        81: nu,
        82: su,
        83: Ou,
        84: mw,
        85: Vx,
        86: ey,
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        93: "context",
        96: "num-0",
        97: "num-1",
        98: "num-2",
        99: "num-3",
        100: "num-4",
        101: "num-5",
        102: "num-6",
        103: "num-7",
        104: "num-8",
        105: "num-9",
        106: "num-multiply",
        107: "num-plus",
        109: "num-minus",
        110: "num-period",
        111: "num-division",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        186: "semicolon",
        187: "equals",
        189: "dash",
        188: Wb,
        190: dd,
        191: id,
        192: "`",
        219: "open-square-bracket",
        220: "\\",
        221: "close-square-bracket",
        222: "single-quote",
        224: "win"
    };
    var fV = function(a) {
        U.call(this);
        this.b = this.c = {};
        this.j = 0;
        this.K = CA(dV);
        this.F = CA(eV);
        this.B = !0;
        this.o = null;
        this.a = a;
        T(this.a, br, this.g, !1, this);
        FB && T(this.a, dr, this.w, !1, this);
        JB && !FB && (T(this.a, cr, this.D, !1, this),
        T(this.a, dr, this.A, !1, this))
    }, gV;
    G(fV, U);
    var hV = function(a) {
        this.a = a || null;
        this.next = a ? null : {}
    }
      , dV = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19]
      , eV = ["color", "date", "datetime", "datetime-local", "email", "month", xs, "password", "search", "tel", Dw, "time", cy, "week"];
    fV.prototype.M = function(a, b) {
        iV(this.c, jV(arguments), a)
    }
    ;
    var jV = function(a) {
        if (mz(a[1]))
            a = eA(kV(a[1]), function(a) {
                return a.keyCode & 255 | a.Ri << 8
            });
        else {
            var b = a
              , c = 1;
            kz(a[1]) && (b = a[1],
            c = 0);
            for (a = []; c < b.length; c += 2)
                a.push(b[c] & 255 | b[c + 1] << 8)
        }
        return a
    };
    fV.prototype.L = function() {
        fV.v.L.call(this);
        this.c = {};
        yE(this.a, br, this.g, !1, this);
        FB && yE(this.a, dr, this.w, !1, this);
        JB && !FB && (yE(this.a, cr, this.D, !1, this),
        yE(this.a, dr, this.A, !1, this));
        this.a = null
    }
    ;
    var kV = function(a) {
        a = a.replace(/[ +]*\+[ +]*/g, Tb).replace(/[ ]+/g, l).toLowerCase();
        a = a.split(l);
        for (var b = [], c, d = 0; c = a[d]; d++) {
            var e = c.split(Tb)
              , f = null;
            c = 0;
            for (var g, m = 0; g = e[m]; m++) {
                switch (g) {
                case gv:
                    c |= 1;
                    continue;
                case Dk:
                    c |= 2;
                    continue;
                case ki:
                    c |= 4;
                    continue;
                case Tr:
                    c |= 8;
                    continue
                }
                e = g;
                if (!gV) {
                    f = {};
                    g = void 0;
                    for (g in cV)
                        f[cV[g]] = AH(parseInt(g, 10));
                    gV = f
                }
                f = gV[e];
                break
            }
            b.push({
                keyCode: f,
                Ri: c
            })
        }
        return b
    };
    fV.prototype.w = function(a) {
        if (IB) {
            if (224 == a.keyCode) {
                this.C = !0;
                uF(function() {
                    this.C = !1
                }, 400, this);
                return
            }
            var b = a.metaKey || this.C;
            67 != a.keyCode && 88 != a.keyCode && 86 != a.keyCode || !b || (a.metaKey = b,
            this.g(a))
        }
        32 == this.o && 32 == a.keyCode && a.preventDefault();
        this.o = null
    }
    ;
    var lV = function(a) {
        return JB && !FB && a.ctrlKey && a.altKey && !a.shiftKey
    };
    fV.prototype.D = function(a) {
        32 < a.keyCode && lV(a) && (this.H = !0)
    }
    ;
    fV.prototype.A = function(a) {
        !this.H && lV(a) && this.g(a)
    }
    ;
    var iV = function(a, b, c) {
        var d = b.shift()
          , e = a[d];
        if (e && (0 == b.length || e.a))
            throw Error("Keyboard shortcut conflicts with existing shortcut");
        b.length ? (d = d.toString(),
        e = new hV,
        e = d in a ? a[d] : a[d] = e,
        iV(e.next, b, c)) : a[d] = new hV(c)
    };
    fV.prototype.g = function(a) {
        var b;
        b = a.keyCode;
        if (16 == b || 17 == b || 18 == b)
            b = !1;
        else {
            var c = a.target
              , d = c.tagName == ph || c.tagName == ng || c.tagName == Hf || c.tagName == Xg
              , e = !d && (c.isContentEditable || c.ownerDocument && c.ownerDocument.designMode == Ds);
            b = !d && !e || this.K[b] ? !0 : e ? !1 : a.altKey || a.ctrlKey || a.metaKey ? !0 : c.tagName == ng && this.F[c.type] ? 13 == b : c.tagName == ng || c.tagName == Hf ? 32 != b : !1
        }
        if (b)
            if (a.type == br && lV(a))
                this.H = !1;
            else {
                b = AH(a.keyCode);
                c = b & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
                if (!this.b[c] || 1500 <= wz() - this.j)
                    this.b = this.c,
                    this.j = wz();
                if (c = this.b[c])
                    c.next ? (this.b = c.next,
                    this.j = wz(),
                    a.preventDefault()) : (this.b = this.c,
                    this.j = wz(),
                    this.B && a.preventDefault(),
                    c = c.a,
                    d = a.target,
                    e = this.dispatchEvent(new mV(iv,c,d)),
                    (e &= this.dispatchEvent(new mV(jv + c,c,d))) || a.preventDefault(),
                    FB && (this.o = b))
            }
    }
    ;
    var mV = function(a, b, c) {
        S.call(this, a, c);
        this.w = b
    };
    G(mV, S);
    var nV = function(a, b) {
        this.a = a;
        this.B = b;
        this.c = null;
        this.o = mK.O();
        this.b = new fV(document);
        this.b.B = !1;
        this.b.M(Mf, 67, IB ? 8 : 2);
        T(this.b, iv, this.j, !1, this)
    };
    G(nV, TD);
    nV.prototype.L = function() {
        nV.v.L.call(this);
        yE(this.b, iv, this.j, !1, this)
    }
    ;
    nV.prototype.j = function(a) {
        a.w != Mf || cS() || aS(this.a) != k || this.a.value == k || (a = $S(this.B.b, !0),
        this.g = $R(this.a, !1)[1],
        this.c = eS(a),
        uF(this.w, 0, this))
    }
    ;
    nV.prototype.w = function() {
        if (this.c) {
            this.a.focus();
            if (I && null != this.g) {
                var a = this.a
                  , b = this.g;
                YR(a) ? (a.selectionStart = b,
                a.selectionEnd = b) : I && (b = bS(a, b),
                a = a.createTextRange(),
                a.collapse(!0),
                a.move(Yj, b),
                a.select())
            }
            CC(this.c);
            this.c = null;
            this.o.log(Bk)
        }
    }
    ;
    var oV = function(a) {
        this.a = a;
        this.c = this.o = this.w = this.B = this.j = this.g = null;
        this.b = mK.O()
    }
      , rV = function(a, b) {
        b.bh && (a.g = b.bh,
        pV(a, a.g, a.C),
        qV(a, a.a, Nv, a.H),
        qV(a, a.a, Xk, a.A));
        b.jh && (a.j = b.jh,
        pV(a, a.j, a.I),
        qV(a, a.a, Nw, a.F));
        if (b.dh) {
            a.B = b.dh;
            qV(a, a.B, w, a.K);
            var c = a.B;
            T(a.a, Zv, c.j, !1, c);
            c = a.B;
            T(a.a, Xk, c.B, !1, c)
        }
        b.kh && (a.w = b.kh,
        qV(a, a.w, w, a.J),
        c = a.w,
        T(a.a, $v, c.j, !1, c));
        b.gh && (a.o = b.gh,
        qV(a, a.o, v, a.M));
        b.lh && (a.c = b.lh,
        qV(a, new EH(a.c.l()), ar, a.D),
        qV(a, new nN(a.c.l()), ct, a.D))
    }
      , qV = function(a, b, c, d) {
        b && T(b, c, d, !1, a)
    };
    oV.prototype.C = function() {
        sV(this, this.g, this.a.o, TN(this.a.F), ov)
    }
    ;
    oV.prototype.I = function() {
        sV(this, this.j, this.a.B, TN(this.a.J.a), Vw, !0)
    }
    ;
    var sV = function(a, b, c, d, e, f) {
        var g = tV(b)
          , m = uV(a, g)
          , n = vV(a, f);
        c.call(a.a, g, 4);
        b.Ba && (m.ct = b.Ba);
        d != k && (m.emphlang = d);
        b = TN(a.a.D.a);
        f || b == k || (m.bslang = b);
        n != k && (m.sugglang = n);
        a.b.log(e, m)
    };
    oV.prototype.H = function(a) {
        if (tV(this.g) != a.data) {
            var b = this.g
              , c = a.data;
            b.tagName == Xg ? b.value = c : nP(b, c)
        }
        wV(this);
        a.Wf && (a = uV(this),
        this.b.log(nv, a))
    }
    ;
    oV.prototype.A = function() {
        wV(this)
    }
    ;
    oV.prototype.F = function(a) {
        if (tV(this.j) != a.data) {
            var b = this.j
              , c = a.data;
            b.tagName == Xg ? b.value = c : nP(b, c)
        }
        wV(this);
        a.Wf && (a = uV(this),
        this.b.log(Uw, a))
    }
    ;
    var tV = function(a) {
        return a.tagName == Xg ? a.value : a.U()
    }
      , pV = function(a, b, c) {
        b.tagName == Xg ? qV(a, b, Xj, c) : qV(a, b, v, c)
    };
    oV.prototype.K = function(a) {
        if (a.data != this.a.a) {
            var b = this.a.o
              , c = vV(this)
              , d = uV(this, a.data);
            b.call(this.a, a.data, 3);
            d.sugglang = c;
            this.b.log(Sv, d)
        }
    }
    ;
    oV.prototype.J = function(a) {
        if (a.data != this.a.b) {
            var b = this.a.B
              , c = vV(this, !0)
              , d = uV(this, a.data);
            b.call(this.a, a.data, 3);
            d.sugglang = c;
            this.b.log(Bx, d)
        }
    }
    ;
    oV.prototype.M = function() {
        var a = uV(this)
          , b = this.a.a
          , c = this.a.b
          , d = b;
        if (b == Ui && (d = this.a.j,
        !d))
            return;
        this.b.log(kw, a);
        a = this.a;
        a.o(c, 5);
        a.B(d, 5);
        a.dispatchEvent(kr);
        tK(this.b, jw, 1, $h)
    }
    ;
    oV.prototype.D = function(a) {
        if (a.type == ct || 2 > Dz(this.c.U()).length)
            this.a.C = !1
    }
    ;
    var uV = function(a, b) {
        var c = {};
        c.sl = a.a.a;
        c.tl = a.a.b;
        b && (c.val = b);
        var d = a.a.j;
        d && (c.dsl = d);
        a.c && (c.ql = Dz(a.c.U()).length);
        return c
    }
      , vV = function(a, b) {
        return b ? TN(a.a.H.a) : TN(a.a.A.a)
    }
      , wV = function(a) {
        if (a.o) {
            var b = a.a.a;
            b == Ui && (b = a.a.j);
            b == Dy && a.a.w == Ey && (b = Ey);
            b == k || b == a.a.b ? a.o.ba(!1) : a.o.ba(!0)
        }
    };
    var UH = az();
    G(UH, SH);
    hz(UH);
    UH.prototype.Pa = function(a) {
        var b = a.a.a(Zg, XH(this, a).join(l));
        xV(this, b, a.A);
        return b
    }
    ;
    UH.prototype.P = function(a, b) {
        b = UH.v.P.call(this, a, b);
        var c = TB(b)
          , d = !1;
        jA(c, yV(this, null)) ? d = null : jA(c, yV(this, !0)) ? d = !0 : jA(c, yV(this, !1)) && (d = !1);
        a.A = d;
        OH(b, ak, null == d ? Vr : 1 == d ? zx : Yl);
        return b
    }
    ;
    UH.prototype.Sb = B("checkbox");
    var xV = function(a, b, c) {
        if (b) {
            var d = yV(a, c);
            UB(b, d) || (rA(zV, function(a) {
                a = yV(this, a);
                XB(b, a, a == d)
            }, a),
            OH(b, ak, null == c ? Vr : 1 == c ? zx : Yl))
        }
    };
    UH.prototype.S = B("goog-checkbox");
    var yV = function(a, b) {
        var c = a.S();
        if (1 == b)
            return c + qc;
        if (0 == b)
            return c + $c;
        if (null == b)
            return c + ad;
        throw Error("Invalid checkbox state: " + b);
    };
    var AV = function(a, b, c) {
        c = c || UH.O();
        mI.call(this, null, c, b);
        this.A = dz(a) ? a : !1
    };
    G(AV, mI);
    var zV = {
        a: !0,
        b: !1,
        c: null
    };
    C = AV.prototype;
    C.Ca = function() {
        return 1 == this.A
    }
    ;
    C.ra = function(a) {
        a != this.A && (this.A = a,
        xV(this.c, this.l(), this.A))
    }
    ;
    C.rg = function() {
        this.ra(this.A ? !1 : !0)
    }
    ;
    C.V = function() {
        AV.v.V.call(this);
        this.ge && X(this).a(this.l(), w, this.Ag)
    }
    ;
    C.ba = function(a) {
        AV.v.ba.call(this, a);
        if (a = this.l())
            a.tabIndex = this.isEnabled() ? 0 : -1
    }
    ;
    C.Ag = function(a) {
        a.stopPropagation();
        var b = this.A ? Xx : Zj;
        this.isEnabled() && !a.target.href && this.dispatchEvent(b) && (a.preventDefault(),
        this.rg(),
        this.dispatchEvent(Xj))
    }
    ;
    C.tc = function(a) {
        32 == a.keyCode && (this.Xb(a),
        this.Ag(a));
        return !1
    }
    ;
    kI("goog-checkbox", function() {
        return new AV
    });
    var BV = function(a) {
        a = a || {};
        return EJ(hf + (a.sh ? xa : a.checked ? ua : wa) + (a.disabled ? va : k) + (a.Se ? l + MJ(a.Se) : k) + Ga + (a.sh ? Vr : a.checked ? zx : Yl) + Ca + (a.Kh ? Hi + MJ(a.Kh) + Ca : a.Jh ? Gi + MJ(a.Jh) + Ca : k) + (a.id ? eq + MJ(a.id) + Ca : k) + (a.disabled ? Di : yw + (a.Nf ? MJ(a.Nf) : Fd) + Ca) + (a.attributes ? l + OJ(a.attributes) : k) + dl)
    };
    var CV = function(a, b) {
        var c = VH();
        AV.call(this, a, b, c);
        this.Aa(4, !0)
    };
    G(CV, AV);
    CV.prototype.na = function() {
        this.G = BJ(BV, {
            checked: this.Ca(),
            disabled: !this.isEnabled(),
            sh: null == this.A
        }, void 0, this.a)
    }
    ;
    CV.prototype.Y = function(a) {
        CV.v.Y.call(this, a);
        K(a, Cm);
        this.l().dir = Br;
        ZF(this, Tq) || (a = this.a.a(nl, Tq),
        this.l().appendChild(a));
        a = ZF(this, Tq);
        NH(a, gu)
    }
    ;
    CV.prototype.hc = function(a) {
        CV.v.hc.call(this, a);
        DV(this, !1)
    }
    ;
    CV.prototype.Ya = function(a) {
        CV.v.Ya.call(this, a);
        this.isEnabled() && DV(this, !0)
    }
    ;
    var DV = function(a, b) {
        a.l() && XB(a.l(), Uq, b)
    };
    var EV = function(a, b) {
        CV.call(this, a, b)
    };
    G(EV, CV);
    EV.prototype.rg = function() {
        this.ra(0 == this.A ? !0 : !1)
    }
    ;
    var FV = function(a, b, c) {
        U.call(this);
        this.o = a;
        this.B = b;
        this.c = c;
        this.C = 1E4;
        this.a = null;
        this.j = this.g = hi;
        this.D = Fd;
        this.b = k;
        this.H = [];
        this.A = !1;
        this.K = k
    };
    G(FV, U);
    var GV = function(a) {
        a.A = !1;
        if (a.b != k) {
            var b = a.o
              , c = F(a.M, a)
              , d = {
                cm: Ou
            };
            d.q = a.b;
            b.a != k && (d.tk = b.a,
            b.a = k);
            oT(b, zd + JK(d), c, gg)
        } else {
            var b = a.o
              , c = F(a.M, a)
              , d = a.g
              , e = a.j;
            a = a.D;
            var f = {
                cm: vm
            };
            null != d && d != hi && (f.sl = d);
            null != e && e != hi && (f.tl = e);
            null != a && a != Fd && (f.od = a);
            b.a != k && (f.tk = b.a,
            b.a = k);
            oT(b, zd + JK(f), c, gg)
        }
    };
    FV.prototype.F = function(a, b) {
        var c = kT(b);
        if (null != c && c != k)
            this.dispatchEvent(Mt);
        else if (kA(this.H, b.D()),
        null != b.a[6] && (c = Number(lT(b)),
        null == c || isNaN(c) || (this.C = c)),
        null == this.a || this.A || this.D != Fd)
            GV(this);
        else {
            var c = new eT
              , d = c.a
              , e = a ? a.b() : null;
            d !== e && (d.length = 0,
            e && (d.length = e.length,
            iG(d, e)));
            d = b.D();
            c.a[0] = d;
            this.a.push(c);
            this.dispatchEvent(Mt)
        }
    }
    ;
    var HV = function(a) {
        var b = nA(a.H);
        a.H = [];
        return b
    }
      , IV = function(a, b) {
        if (0 != b.length) {
            var c = a.o
              , d = {
                cm: Ek
            };
            d.count = b.length + k;
            var e = {};
            e.id = b;
            oT(c, zd + JK(d), gz, Rg, JK(e));
            for (c = a.a.length - 1; 0 <= c; --c)
                jA(b, a.a[c].bc()) && Array.prototype.splice.call(a.a, c, 1)
        }
    };
    FV.prototype.M = function(a) {
        this.a = [];
        for (var b = 0; b < Z(a.a, 2); ++b)
            this.a.push(mT(a, b));
        this.K = Uz(kT(a));
        this.dispatchEvent(Mt);
        null != a.a[6] && (a = Number(lT(a)),
        null == a || isNaN(a) || (this.C = a))
    }
    ;
    var JV = function(a) {
        a.match(/[",\t\n]/) && (a = Ca + a.replace(/"/g, La) + Ca);
        return a
    };
    FV.prototype.w = function(a, b, c) {
        if (null == this.a)
            return [];
        for (var d = [], e = 0; e < this.a.length; e++) {
            var f = this.a[e]
              , g = iT(f);
            gT(f) == b && hT(f) == c && 0 == g.lastIndexOf(a, 0) && g.length >= a.length && d.push(f)
        }
        a = {};
        for (c = b = 0; c < d.length; )
            f = e = d[c++],
            f = pz(f) ? ys + sz(f) : (typeof f).charAt(0) + f,
            Object.prototype.hasOwnProperty.call(a, f) || (a[f] = !0,
            d[b++] = e);
        d.length = b;
        return d
    }
    ;
    var KV = function(a) {
        U.call(this);
        this.a = a || window;
        this.b = T(this.a, Au, this.g, !1, this);
        this.c = oC(this.a || window)
    };
    G(KV, U);
    KV.prototype.L = function() {
        KV.v.L.call(this);
        this.b && (zE(this.b),
        this.b = null);
        this.c = this.a = null
    }
    ;
    KV.prototype.g = function() {
        var a = oC(this.a || window);
        $B(a, this.c) || (this.c = a,
        this.dispatchEvent(Au))
    }
    ;
    var LV = function(a, b, c) {
        U.call(this);
        this.target = a;
        this.w = b || a;
        this.o = c || new gD(NaN,NaN,NaN,NaN);
        this.j = hC(a);
        this.a = new EE(this);
        VD(this, this.a);
        this.g = this.c = this.C = this.H = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.B = !0;
        this.b = !1;
        this.D = 0;
        T(this.w, [cx, Yr], this.Lf, !1, this)
    };
    G(LV, U);
    var MV = E.document && E.document.documentElement && !!E.document.documentElement.setCapture;
    C = LV.prototype;
    C.ba = bz("B");
    C.L = function() {
        LV.v.L.call(this);
        yE(this.w, [cx, Yr], this.Lf, !1, this);
        GE(this.a);
        MV && this.j.releaseCapture();
        this.w = this.target = null
    }
    ;
    C.Lf = function(a) {
        var b = a.type == Yr;
        if (!this.B || this.b || b && !cE(a))
            this.dispatchEvent(Bl);
        else {
            if (0 == this.D)
                if (this.dispatchEvent(new NV(Xv,this,a.clientX,a.clientY,a)))
                    this.b = !0,
                    a.preventDefault();
                else
                    return;
            else
                a.preventDefault();
            var b = this.j
              , c = b.documentElement
              , d = !MV;
            this.a.a(b, [bx, Zr], this.Ci, d);
            this.a.a(b, [ax, bs], this.Jd, d);
            MV ? (c.setCapture(!1),
            this.a.a(c, zr, this.Jd)) : this.a.a(rC(b), nj, this.Jd);
            this.M && this.a.a(this.M, Ru, this.K, d);
            this.clientX = this.H = a.clientX;
            this.clientY = this.C = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.c = this.target.offsetLeft;
            this.g = this.target.offsetTop;
            this.A = eD(iC(this.j))
        }
    }
    ;
    C.Jd = function(a) {
        GE(this.a);
        MV && this.j.releaseCapture();
        this.b ? (this.b = !1,
        this.dispatchEvent(new NV(Ll,this,a.clientX,a.clientY,a,OV(this, this.c),PV(this, this.g)))) : this.dispatchEvent(Bl)
    }
    ;
    C.Ci = function(a) {
        if (this.B) {
            var b = 1 * (a.clientX - this.clientX)
              , c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.b) {
                var d = this.H - this.clientX
                  , e = this.C - this.clientY;
                if (d * d + e * e > this.D)
                    if (this.dispatchEvent(new NV(Xv,this,a.clientX,a.clientY,a)))
                        this.b = !0;
                    else {
                        this.Ma || this.Jd(a);
                        return
                    }
            }
            c = QV(this, b, c);
            b = c.x;
            c = c.y;
            this.b && this.dispatchEvent(new NV(dj,this,a.clientX,a.clientY,a,b,c)) && (RV(this, a, b, c),
            a.preventDefault())
        }
    }
    ;
    var QV = function(a, b, c) {
        var d = eD(iC(a.j));
        b += d.x - a.A.x;
        c += d.y - a.A.y;
        a.A = d;
        a.c += b;
        a.g += c;
        return new M(OV(a, a.c),PV(a, a.g))
    };
    LV.prototype.K = function(a) {
        var b = QV(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        RV(this, a, b.x, b.y)
    }
    ;
    var RV = function(a, b, c, d) {
        a.target.style.left = c + mu;
        a.target.style.top = d + mu;
        a.dispatchEvent(new NV(ql,a,b.clientX,b.clientY,b,c,d))
    }
      , OV = function(a, b) {
        var c = a.o
          , d = isNaN(c.left) ? null : c.left
          , c = isNaN(c.width) ? 0 : c.width;
        return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
    }
      , PV = function(a, b) {
        var c = a.o
          , d = isNaN(c.top) ? null : c.top
          , c = isNaN(c.height) ? 0 : c.height;
        return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
    }
      , NV = function(a, b, c, d, e, f, g) {
        S.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.c = e;
        this.left = dz(f) ? f : b.c;
        this.top = dz(g) ? g : b.g
    };
    G(NV, S);
    var SV = I ? wq : "about:blank";
    var TV = function(a, b) {
        this.G = a;
        this.b = b
    };
    var UV = function(a, b) {
        W.call(this, b);
        this.N = !!a;
        this.g = null
    };
    G(UV, W);
    C = UV.prototype;
    C.$e = null;
    C.ce = !1;
    C.ab = null;
    C.Qa = null;
    C.Bb = null;
    C.Pe = !1;
    C.S = B("goog-modalpopup");
    C.Kd = z("ab");
    C.na = function() {
        UV.v.na.call(this);
        var a = this.l()
          , b = Dz(this.S()).split(l);
        VB(a, b);
        UC(a, !0);
        R(a, !1);
        VV(this);
        WV(this)
    }
    ;
    var VV = function(a) {
        if (a.N && !a.Qa) {
            var b;
            b = a.a;
            var c;
            c = mz(void 0) ? RA(void 0).Mb() : k;
            b = b.a(gq, {
                frameborder: 0,
                style: zj + c,
                src: SV
            });
            a.Qa = b;
            a.Qa.className = a.S() + lc;
            R(a.Qa, !1);
            CD(a.Qa, 0)
        }
        a.ab || (a.ab = a.a.a(q, a.S() + lc),
        R(a.ab, !1))
    }
      , WV = function(a) {
        a.Bb || (a.Bb = a.a.b.createElement(Zg),
        R(a.Bb, !1),
        UC(a.Bb, !0),
        a.Bb.style.position = Zh)
    };
    C = UV.prototype;
    C.Yg = function() {
        this.Pe = !1
    }
    ;
    C.Ud = function(a) {
        return !!a && a.tagName == q
    }
    ;
    C.Y = function(a) {
        UV.v.Y.call(this, a);
        a = Dz(this.S()).split(l);
        VB(this.l(), a);
        VV(this);
        WV(this);
        UC(this.l(), !0);
        R(this.l(), !1)
    }
    ;
    C.V = function() {
        this.Qa && AC(this.Qa, this.l());
        AC(this.ab, this.l());
        UV.v.V.call(this);
        BC(this.Bb, this.l());
        this.$e = new FR(this.a.b);
        X(this).a(this.$e, jm, this.Yi);
        XV(this, !1)
    }
    ;
    C.Xa = function() {
        this.isVisible() && this.setVisible(!1);
        UD(this.$e);
        UV.v.Xa.call(this);
        CC(this.Qa);
        CC(this.ab);
        CC(this.Bb)
    }
    ;
    C.setVisible = function(a) {
        if (a != this.ce)
            if (this.w && this.w.Gb(),
            this.C && this.C.Gb(),
            this.j && this.j.Gb(),
            this.A && this.A.Gb(),
            this.oa && XV(this, a),
            a) {
                if (this.dispatchEvent(ij)) {
                    try {
                        this.g = this.a.b.activeElement
                    } catch (e) {}
                    this.Ef();
                    var b = rC(this.a.b) || window;
                    if (mD(this.l(), cu) == fm)
                        var c = a = 0;
                    else
                        c = eD(this.a),
                        a = c.x,
                        c = c.y;
                    var d = AD(this.l())
                      , b = oC(b || window);
                    a = Math.max(a + b.width / 2 - d.width / 2, 0);
                    c = Math.max(c + b.height / 2 - d.height / 2, 0);
                    oD(this.l(), a, c);
                    oD(this.Bb, a, c);
                    X(this).a(dD(this.a), Au, this.Ef);
                    YV(this, !0);
                    this.hg();
                    this.ce = !0;
                    this.w && this.C ? (xE(this.w, Ll, this.ae, !1, this),
                    this.C.play(),
                    this.w.play()) : this.ae()
                }
            } else if (this.dispatchEvent(hj)) {
                X(this).b(dD(this.a), Au, this.Ef);
                this.ce = !1;
                this.j && this.A ? (xE(this.j, Ll, this.$d, !1, this),
                this.A.play(),
                this.j.play()) : this.$d();
                a: {
                    try {
                        c = this.a;
                        d = c.b.body;
                        b = c.b.activeElement || d;
                        if (!this.g || this.g == d) {
                            this.g = null;
                            break a
                        }
                        (b == d || c.contains(this.l(), b)) && this.g.focus()
                    } catch (e) {}
                    this.g = null
                }
            }
    }
    ;
    var XV = function(a, b) {
        a.F || (a.F = new TV(a.G,a.a));
        var c = a.F;
        if (b) {
            c.a || (c.a = []);
            for (var d = c.b.og(c.b.b.body), e = 0; e < d.length; e++) {
                var f = d[e];
                f == c.G || PH(f, Fp) || (OH(f, Fp, !0),
                c.a.push(f))
            }
        } else if (c.a) {
            for (e = 0; e < c.a.length; e++)
                c.a[e].removeAttribute(Ei);
            c.a = null
        }
    }
      , YV = function(a, b) {
        a.Qa && R(a.Qa, b);
        a.ab && R(a.ab, b);
        R(a.l(), b);
        R(a.Bb, b)
    };
    C = UV.prototype;
    C.ae = function() {
        this.dispatchEvent(kv)
    }
    ;
    C.$d = function() {
        YV(this, !1);
        this.dispatchEvent(Gp)
    }
    ;
    C.isVisible = z("ce");
    C.Ef = function() {
        this.Qa && R(this.Qa, !1);
        this.ab && R(this.ab, !1);
        var a = this.a.b
          , b = oC(rC(a) || window || window)
          , c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth))
          , a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
        this.Qa && (R(this.Qa, !0),
        yD(this.Qa, c, a));
        this.ab && (R(this.ab, !0),
        yD(this.ab, c, a))
    }
    ;
    C.Yi = function(a) {
        this.Pe ? this.Yg() : a.target == this.Bb && uF(this.hg, 0, this)
    }
    ;
    C.hg = function() {
        try {
            I && this.a.b.body.focus(),
            this.l().focus()
        } catch (a) {}
    }
    ;
    C.L = function() {
        UD(this.w);
        this.w = null;
        UD(this.j);
        this.j = null;
        UD(this.C);
        this.C = null;
        UD(this.A);
        this.A = null;
        UV.v.L.call(this)
    }
    ;
    var cW = function(a, b, c) {
        UV.call(this, b, c);
        this.c = a || Wr;
        this.b = ZV(ZV(new $V, aW, !0), bW, !1, !0)
    };
    G(cW, UV);
    C = cW.prototype;
    C.Tg = !0;
    C.Cd = .5;
    C.mh = k;
    C.uc = null;
    C.fc = null;
    C.wg = !1;
    C.Za = null;
    C.hb = null;
    C.we = null;
    C.$a = null;
    C.yb = null;
    C.Oa = null;
    C.S = z(Oj);
    C.ya = function() {
        return null != this.uc ? cB(this.uc) : k
    }
    ;
    C.wb = function() {
        this.l() || this.$();
        return this.yb
    }
    ;
    C.Kd = function() {
        this.l() || this.$();
        return cW.v.Kd.call(this)
    }
    ;
    var dW = function(a, b) {
        a.Cd = b;
        if (a.l()) {
            var c = a.Kd();
            c && CD(c, a.Cd)
        }
    }
      , eW = function(a, b) {
        var c = Dz(a.c + Xc).split(l);
        a.l() && (b ? VB(a.Za, c) : WB(a.Za, c));
        b && !a.fc ? (a.fc = new LV(a.l(),a.Za),
        VB(a.Za, c),
        T(a.fc, Xv, a.oj, !1, a)) : !b && a.fc && (a.fc.xa(),
        a.fc = null)
    };
    C = cW.prototype;
    C.na = function() {
        cW.v.na.call(this);
        var a = this.l()
          , b = this.a;
        this.Za = b.a(q, this.c + Vc, this.hb = b.a(Zg, {
            className: this.c + Yc,
            id: this.D()
        }, this.mh), this.$a = b.a(Zg, this.c + Wc));
        yC(a, this.Za, this.yb = b.a(q, this.c + tc), this.Oa = b.a(q, this.c + nc));
        NH(this.hb, Bp);
        NH(this.$a, Lj);
        UC(this.$a, !0);
        OH(this.$a, hr, Of);
        this.we = this.hb.id;
        NH(a, Yk);
        OH(a, ir, this.we || k);
        this.uc && fC(this.yb, this.uc);
        R(this.$a, !0);
        this.b && (a = this.b,
        a.G = this.Oa,
        fW(a));
        R(this.Oa, !!this.b);
        dW(this, this.Cd)
    }
    ;
    C.Y = function(a) {
        cW.v.Y.call(this, a);
        a = this.l();
        var b = this.c + tc;
        this.yb = kC(null, b, a)[0];
        this.yb || (this.yb = this.a.a(q, b),
        this.uc && fC(this.yb, this.uc),
        a.appendChild(this.yb));
        var b = this.c + Vc
          , c = this.c + Yc
          , d = this.c + Wc;
        (this.Za = kC(null, b, a)[0]) ? (this.hb = kC(null, c, this.Za)[0],
        this.$a = kC(null, d, this.Za)[0]) : (this.Za = this.a.a(q, b),
        a.insertBefore(this.Za, this.yb));
        this.hb ? (this.mh = YC(this.hb),
        this.hb.id || (this.hb.id = this.D())) : (this.hb = P(Zg, {
            className: c,
            id: this.D()
        }),
        this.Za.appendChild(this.hb));
        this.we = this.hb.id;
        OH(a, ir, this.we || k);
        this.$a || (this.$a = this.a.a(Zg, d),
        this.Za.appendChild(this.$a));
        R(this.$a, !0);
        b = this.c + nc;
        (this.Oa = kC(null, b, a)[0]) ? (this.b = new $V(this.a),
        this.b.P(this.Oa)) : (this.Oa = this.a.a(q, b),
        a.appendChild(this.Oa),
        this.b && (a = this.b,
        a.G = this.Oa,
        fW(a)),
        R(this.Oa, !!this.b));
        dW(this, this.Cd)
    }
    ;
    C.V = function() {
        cW.v.V.call(this);
        X(this).a(this.l(), br, this.I).a(this.l(), cr, this.I);
        X(this).a(this.Oa, w, this.J);
        eW(this, !0);
        X(this).a(this.$a, w, this.cj);
        var a = this.l();
        NH(a, Yk);
        this.hb.id !== k && OH(a, ir, this.hb.id);
        if (!this.Tg) {
            this.Tg = !1;
            if (this.oa) {
                var a = this.a
                  , b = this.Kd();
                a.pg(this.Qa);
                a.pg(b)
            }
            this.isVisible() && XV(this, !1)
        }
    }
    ;
    C.Xa = function() {
        this.isVisible() && this.setVisible(!1);
        eW(this, !1);
        cW.v.Xa.call(this)
    }
    ;
    C.setVisible = function(a) {
        a != this.isVisible() && (this.oa || this.$(),
        cW.v.setVisible.call(this, a))
    }
    ;
    C.ae = function() {
        cW.v.ae.call(this);
        this.dispatchEvent(gi)
    }
    ;
    C.$d = function() {
        cW.v.$d.call(this);
        this.dispatchEvent(fi);
        this.wg && this.xa()
    }
    ;
    C.oj = function() {
        var a = this.a.b
          , b = oC(rC(a) || window || window)
          , c = Math.max(a.body.scrollWidth, b.width)
          , a = Math.max(a.body.scrollHeight, b.height)
          , d = AD(this.l());
        mD(this.l(), cu) == fm ? this.fc.o = new gD(0,0,Math.max(0, b.width - d.width),Math.max(0, b.height - d.height)) || new gD(NaN,NaN,NaN,NaN) : this.fc.o = new gD(0,0,c - d.width,a - d.height) || new gD(NaN,NaN,NaN,NaN)
    }
    ;
    C.cj = function() {
        gW(this)
    }
    ;
    var gW = function(a) {
        var b = a.b
          , c = b && b.B;
        c ? a.dispatchEvent(new hW(c,wB(b, c))) && a.setVisible(!1) : a.setVisible(!1)
    };
    cW.prototype.L = function() {
        this.Oa = this.$a = null;
        cW.v.L.call(this)
    }
    ;
    cW.prototype.J = function(a) {
        a: {
            for (a = a.target; null != a && a != this.Oa; ) {
                if (a.tagName == Hf)
                    break a;
                a = a.parentNode
            }
            a = null
        }
        a && !a.disabled && (a = a.name,
        this.dispatchEvent(new hW(a,wB(this.b, a))) && this.setVisible(!1))
    }
    ;
    cW.prototype.I = function(a) {
        var b = !1
          , c = !1
          , d = this.b
          , e = a.target;
        if (a.type == br)
            if (27 == a.keyCode) {
                var f = d && d.B
                  , e = e.tagName == Xg && !e.disabled;
                f && !e ? (c = !0,
                b = this.dispatchEvent(new hW(f,wB(d, f)))) : e || (b = !0)
            } else {
                if (9 == a.keyCode && a.shiftKey && e == this.l()) {
                    this.Pe = !0;
                    try {
                        this.Bb.focus()
                    } catch (r) {}
                    uF(this.Yg, 0, this)
                }
            }
        else if (13 == a.keyCode) {
            if (e.tagName == Hf && !e.disabled)
                f = e.name;
            else if (e == this.$a)
                gW(this);
            else if (d) {
                var g = d.o, m;
                if (m = g)
                    a: {
                        m = d.G.getElementsByTagName(Hf);
                        for (var n = 0, p; p = m[n]; n++)
                            if (p.name == g || p.id == g) {
                                m = p;
                                break a
                            }
                        m = null
                    }
                e = (e.tagName == ph || e.tagName == Xg || e.tagName == yf) && !e.disabled;
                !m || m.disabled || e || (f = g)
            }
            f && d && (c = !0,
            b = this.dispatchEvent(new hW(f,String(wB(d, f)))))
        } else
            e == this.$a && 32 == a.keyCode && gW(this);
        if (b || c)
            a.stopPropagation(),
            a.preventDefault();
        b && this.setVisible(!1)
    }
    ;
    var hW = function(a, b) {
        this.type = Zk;
        this.key = a;
        this.caption = b
    };
    G(hW, S);
    var $V = function(a) {
        a || iC();
        rB.call(this)
    };
    G($V, rB);
    $V.prototype.o = null;
    $V.prototype.G = null;
    $V.prototype.B = null;
    $V.prototype.a = function(a, b, c, d) {
        rB.prototype.a.call(this, a, b);
        c && (this.o = a);
        d && (this.B = a);
        return this
    }
    ;
    var ZV = function(a, b, c, d) {
        return a.a(b.key, b.caption, c, d)
    }
      , fW = function(a) {
        if (a.G) {
            fC(a.G, mB);
            var b = iC(a.G);
            a.forEach(function(a, d) {
                var e = b.a(Hf, {
                    name: d
                }, a);
                d == this.o && (e.className = ym);
                this.G.appendChild(e)
            }, a)
        }
    };
    $V.prototype.P = function(a) {
        if (a && 1 == a.nodeType) {
            this.G = a;
            a = this.G.getElementsByTagName(Hf);
            for (var b = 0, c, d, e; c = a[b]; b++)
                if (d = c.name || c.id,
                e = YC(c) || c.value,
                d) {
                    var f = 0 == b;
                    this.a(d, e, f, c.name == Uj);
                    f && K(c, ym)
                }
        }
    }
    ;
    $V.prototype.l = z("G");
    var aW = {
        key: "ok",
        caption: "OK"
    }
      , bW = {
        key: Uj,
        caption: "Cancel"
    }
      , iW = {
        key: "yes",
        caption: "Yes"
    }
      , jW = {
        key: qs,
        caption: "No"
    }
      , kW = {
        key: "save",
        caption: "Save"
    }
      , lW = {
        key: "continue",
        caption: "Continue"
    };
    "undefined" != typeof document && (ZV(new $V, aW, !0, !0),
    ZV(ZV(new $V, aW, !0), bW, !1, !0),
    ZV(ZV(new $V, iW, !0), jW, !1, !0),
    ZV(ZV(ZV(new $V, iW), jW, !0), bW, !1, !0),
    ZV(ZV(ZV(new $V, lW), kW), bW, !0, !0));
    var mW = az();
    G(mW, GO);
    hz(mW);
    mW.prototype.S = B("goog-toolbar-menu-button");
    var nW = function(a, b, c) {
        W.call(this);
        this.b = b;
        this.C = a;
        this.j = !!c;
        mK.O()
    };
    G(nW, W);
    nW.prototype.na = function() {
        nW.v.na.call(this);
        var a = document.createElement(q), b;
        b = this.j ? k : this.C.X(gT(this.b));
        var c = this.j ? k : this.C.mb(hT(this.b)), d;
        d = Oz(iT(this.b));
        d = rJ(d);
        var e;
        e = Oz(jT(this.b));
        e = rJ(e);
        b = lf + (b == k ? na : k) + rf + (b != k ? Te + FJ(b) + pe : k) + Ue + PJ(d) + we + (b != k ? Te + FJ(c) + pe : k) + Ve + PJ(e) + xe;
        a.innerHTML = kf + b + Je;
        this.Y(a.firstChild.rows[0])
    }
    ;
    nW.prototype.Y = function(a) {
        nW.v.Y.call(this, a);
        a = this.l();
        this.c = O(tt, a);
        FA(gT(this.b)) ? this.c.dir = Mu : this.c.dir = Br;
        this.g = O(xt, a);
        FA(hT(this.b)) ? this.g.dir = Mu : this.g.dir = Br;
        O(Do, a);
        var b = O(ft, a)
          , c = new CV;
        this.Fa(c);
        c.$(b);
        X(this).a(c, Zj, F(this.nf, this, !0));
        X(this).a(c, Xx, F(this.nf, this, !1));
        this.A = c;
        this.F = oW(this, O(rt, a));
        a = O(yt, a);
        this.w = oW(this, a);
        a = gT(this.b);
        b = iT(this.b);
        c = new PM(this.F,mb);
        VD(this, c);
        c.update(b, a);
        a = hT(this.b);
        b = jT(this.b);
        c = new PM(this.w,nb);
        VD(this, c);
        c.update(b, a);
        this.w.isVisible();
        X(this).a(this.c, w, this.Dg);
        X(this).a(this.g, w, this.Dg)
    }
    ;
    var oW = function(a, b) {
        var c = new kJ(MSG_LISTEN,void 0,new nJ(gx));
        a.Fa(c);
        c.$(b);
        c.setVisible(!1);
        return c
    };
    C = nW.prototype;
    C.L = function() {
        nW.v.L.call(this)
    }
    ;
    C.Ca = function() {
        return this.A.Ca()
    }
    ;
    C.ra = function(a) {
        this.A.ra(a);
        this.nf(a)
    }
    ;
    C.bc = function() {
        return this.b.bc()
    }
    ;
    C.Dg = function() {
        this.dispatchEvent(Et)
    }
    ;
    C.nf = function(a) {
        a ? K(this.l(), ak) : L(this.l(), ak)
    }
    ;
    var pW = function() {
        U.call(this);
        this.Z = 0;
        this.g = [];
        this.B = [];
        this.M = {};
        this.a = new EE(this);
        this.Ha = this.sa = !1;
        this.H = !0
    };
    G(pW, U);
    pW.prototype.C = function(a, b, c, d) {
        a.c = b;
        a.a = d;
        this.g.push(a)
    }
    ;
    pW.prototype.La = function(a) {
        this.A = pA(arguments, 0)
    }
    ;
    pW.prototype.L = function() {
        this.a.xa();
        for (var a = 0, b = this.g.length; a < b; a++) {
            var c = this.g[a];
            c.c = void 0;
            c.a = void 0
        }
        this.g.length = 0;
        this.B.length = 0;
        this.M = null;
        qW(this);
        pW.v.L.call(this)
    }
    ;
    var rW = function(a, b) {
        for (var c = 0, d = a.g.length; c < d; c++) {
            var e = a.g[c];
            e.Fc = BD(e)
        }
        c = 0;
        for (d = a.B.length; c < d; c++)
            e = a.B[c],
            e != b && (e.Fc = BD(e))
    };
    C = pW.prototype;
    C.Fi = function(a) {
        var b = sz(a.a);
        this.b = this.M[b];
        a: {
            for (var b = this.b, c = b.cloneNode(!0), d = b.getElementsByTagName(ph), e = c.getElementsByTagName(ph), f = 0; f < d.length; f++)
                e[f].value = d[f].value;
            switch (b.tagName) {
            case rh:
                b = P(mh, null, P(nh, null, c));
                break a;
            case oh:
            case qh:
                b = P(mh, null, P(nh, null, P(rh, null, c)));
                break a;
            case ph:
                c.value = b.value;
            default:
                b = c
            }
        }
        this.c = b;
        this.R && VB(this.c, this.R || []);
        this.c.style.margin = Fd;
        this.c.style.position = Zh;
        this.c.style.visibility = Fp;
        hC(this.b).body.appendChild(this.c);
        b = sD(this.b);
        xD(this.c, b);
        this.o = new LV(this.c);
        this.o.D = Math.pow(this.Z, 2);
        T(this.o, Xv, this.pi, !1, this);
        T(this.o, Ll, this.ni, !1, this);
        T(this.o, Bl, this.Te, !1, this);
        this.o.Lf(a)
    }
    ;
    C.pi = function(a) {
        if (this.dispatchEvent(new sW(gj,0,a.c))) {
            this.D = this.b.parentNode;
            this.j = this.F = GC(this.b);
            this.K = this.D;
            this.A ? VB(this.b, this.A || []) : this.b.style.visibility = Fp;
            var b = AD(this.c);
            this.c.j = b.width / 2;
            this.c.g = b.height / 2;
            this.c.style.visibility = k;
            this.H && (this.b.style.display = us);
            rW(this, this.b);
            this.b.style.display = k;
            T(this.o, ql, this.oi, !1, this);
            this.dispatchEvent(new sW(tl,0,a.c))
        } else
            a.preventDefault(),
            this.Te()
    }
    ;
    C.oi = function(a) {
        var b = sD(this.c), b = new M(b.x + this.c.j,b.y + this.c.g), c;
        a: {
            c = null;
            if (this.b.style.display != us) {
                c = this.b.parentNode;
                var d = BD(c);
                if (tW(b, d))
                    break a
            }
            for (var d = 0, e = this.g.length; d < e; d++) {
                var f = this.g[d];
                if (f != c && tW(b, f.Fc)) {
                    c = f;
                    break a
                }
            }
            c = null
        }
        var g;
        if (c) {
            if (null == c)
                throw Error("getHoverNextItem_ called with null hoverList.");
            var m, n, d = !1, e = void 0;
            switch (c.c) {
            case 0:
                g = b.y;
                m = uW;
                n = vW;
                break;
            case 4:
                d = !0;
            case 2:
                g = b.x;
                m = wW;
                n = vW;
                break;
            case 5:
                d = !0;
            case 3:
                g = b.x,
                m = xW,
                n = yW
            }
            for (var f = null, p, r = DC(c), u = 0, A = r.length; u < A; u++) {
                var D = r[u];
                if (D != this.b) {
                    var V = m(D.Fc);
                    if (d) {
                        var Y = zW(D, b);
                        dz(e) || (e = Y);
                        n(g, V) && (void 0 == p || Y < e || Y == e && (n(V, p) || V == p)) && (f = D,
                        p = V);
                        Y < e && (e = Y)
                    } else
                        n(g, V) && (void 0 == p || n(V, p)) && (f = D,
                        p = V)
                }
            }
            g = null !== f && zW(f, b) > e ? null : f
        } else
            g = null;
        if (!this.dispatchEvent(new sW(fj,0,a)))
            return !1;
        if (c)
            this.H ? this.b.parentNode == c && GC(this.b) == g || c.insertBefore(this.b, g) : this.I(g, b),
            this.b.style.display = k,
            c.a && K(c, c.a);
        else
            for (this.Ha || (this.b.style.display = us),
            b = 0,
            g = this.g.length; b < g; b++)
                m = this.g[b],
                m.a && L(m, m.a);
        c != this.K && (this.K = c,
        rW(this, this.b));
        this.dispatchEvent(new sW(sl,0,a));
        return !1
    }
    ;
    C.Te = function() {
        qW(this);
        this.o = this.c = this.F = this.D = this.K = this.b = null;
        for (var a = 0, b = this.g.length; a < b; a++)
            this.g[a].Fc = null;
        a = 0;
        for (b = this.B.length; a < b; a++)
            this.B[a].Fc = null
    }
    ;
    C.ni = function(a) {
        if (!this.dispatchEvent(new sW(ej,0,a)))
            return !1;
        this.H || this.aa();
        qW(this);
        this.dispatchEvent(new sW(rl,0,a));
        this.Te();
        return !0
    }
    ;
    var qW = function(a) {
        UD(a.o);
        a.c && CC(a.c);
        a.b && a.b.style.display == us && (a.D.insertBefore(a.b, a.F),
        a.b.style.display = k);
        a.A && a.b ? WB(a.b, a.A || []) : a.b && (a.b.style.visibility = k);
        for (var b = 0, c = a.g.length; b < c; b++) {
            var d = a.g[b];
            d.a && L(d, d.a)
        }
    };
    pW.prototype.Ia = function(a) {
        VB(a.a, this.T || [])
    }
    ;
    pW.prototype.Da = function(a) {
        WB(a.a, this.T || [])
    }
    ;
    pW.prototype.Ba = function(a) {
        VB(a.a, this.N || [])
    }
    ;
    pW.prototype.wa = function(a) {
        WB(a.a, this.N || [])
    }
    ;
    var tW = function(a, b) {
        return a.x > b.left && a.x < b.left + b.width && a.y > b.top && a.y < b.top + b.height
    };
    pW.prototype.I = function(a) {
        a && (this.j = a)
    }
    ;
    pW.prototype.aa = function() {
        this.D.insertBefore(this.b, this.j)
    }
    ;
    var zW = function(a, b) {
        var c = a.Fc;
        return Math.abs(b.y - (c.top + (c.height - 1) / 2))
    }
      , uW = function(a) {
        return a.top + a.height - 1
    }
      , wW = function(a) {
        return a.left + a.width - 1
    }
      , xW = function(a) {
        return a.left || 0
    }
      , vW = function(a, b) {
        return a < b
    }
      , yW = function(a, b) {
        return a > b
    }
      , sW = function(a, b, c) {
        S.call(this, a);
        this.c = c
    };
    G(sW, S);
    var AW = function(a, b) {
        pW.call(this);
        this.X = null != a ? a : k;
        this.W = null != b ? b : k;
        this.H = !1;
        this.w = null;
        this.J = new EE(this)
    };
    G(AW, pW);
    AW.prototype.C = function(a, b, c, d) {
        AW.v.C.call(this, a, b, c, d);
        this.J.a(this, gj, this.qa)
    }
    ;
    AW.prototype.qa = function(a) {
        var b = qC(document);
        this.o.c = a.c.clientX + b.x;
        this.o.g = a.c.clientY + b.y
    }
    ;
    AW.prototype.aa = function() {
        this.w && (1 == this.w ? BC(this.b, this.j) : AC(this.b, this.j));
        BW(this, !1)
    }
    ;
    AW.prototype.I = function(a, b) {
        BW(this, !1);
        AW.v.I.call(this, a, b);
        BW(this, !0, b)
    }
    ;
    var BW = function(a, b, c) {
        null != a.j && (b && c ? (b = BD(a.j),
        c = YB(new M(b.left + b.width / 2,b.top + b.height / 2), c),
        b = 0 == a.D.c,
        a.w = 0 > c.y && b || 0 > c.x && !b ? 1 : 2,
        1 == a.w ? K(a.j, a.W) : K(a.j, a.X)) : (L(a.j, a.W),
        L(a.j, a.X),
        a.w = null))
    };
    AW.prototype.L = function() {
        this.J.xa();
        AW.v.L.call(this)
    }
    ;
    var CW = function(a, b, c) {
        TD.call(this);
        this.b = a;
        this.c = new qF(50);
        this.a = new EE(this);
        this.j = new M;
        this.o = BD(a);
        this.qe = b || 0;
        if (b) {
            if (a = this.o.clone(),
            b = this.qe) {
                var d = Math.min(b, .25 * a.height);
                a.top += d;
                a.height -= 2 * d;
                b = Math.min(b, .25 * a.width);
                a.left += b;
                a.width -= 2 * b
            }
        } else
            a = this.o;
        this.g = a;
        c || this.a.a(hC(this.b), Zr, this.w);
        this.a.a(this.c, Ow, this.B)
    };
    G(CW, TD);
    CW.prototype.B = function() {
        this.b.scrollTop += this.j.y;
        this.b.scrollLeft += this.j.x
    }
    ;
    CW.prototype.w = function(a) {
        var b = DW(a.clientX, this.g.left, this.g.width);
        a = DW(a.clientY, this.g.top, this.g.height);
        this.j.x = b;
        this.j.y = a;
        (b = !b && !a) || (b = !1);
        b ? rF(this.c) : this.c.b || sF(this.c)
    }
    ;
    var DW = function(a, b, c) {
        var d = 0;
        a < b ? d = -8 : a > b + c && (d = 8);
        return d
    };
    CW.prototype.L = function() {
        CW.v.L.call(this);
        this.a.xa();
        this.c.xa()
    }
    ;
    var EW = function() {
        W.call(this);
        this.c = this.b = null
    };
    G(EW, W);
    var FW = [255, 255, 204]
      , GW = [255, 255, 255];
    EW.prototype.na = function() {
        EW.v.na.call(this);
        var a = P(nh);
        this.Y(a)
    }
    ;
    EW.prototype.update = function(a, b, c) {
        hG(this);
        for (var d = a.length - 1; 0 <= d; d--) {
            var e = new nW(b,a[d],c);
            this.Fa(e, !0)
        }
        this.b && (yE(this.b, tl, this.j, !1, this),
        yE(this.b, rl, this.g, !1, this),
        UD(this.b));
        if (LL && (this.b = new AW(kt,jt),
        this.b.R = Dz(mt).split(l),
        this.b.La(lt),
        this.b.Ha = !0,
        this.b.C(this.l(), 0),
        this.b.Z = 5,
        T(this.b, tl, this.j, !1, this),
        T(this.b, rl, this.g, !1, this),
        a = this.b,
        !a.sa)) {
            b = 0;
            for (c = a.g.length; b < c; b++)
                for (var d = DC(a.g[b]), e = 0, f = d.length; e < f; ++e) {
                    var g = a
                      , m = d[e]
                      , n = sz(m);
                    g.M[n] = m;
                    g.T && (g.a.a(m, as, g.Ia),
                    g.a.a(m, $r, g.Da));
                    g.N && (g.a.a(m, as, g.Ba),
                    g.a.a(m, $r, g.wa));
                    g.B.push(m);
                    g.a.a(m, [Yr, cx], g.Fi)
                }
            a.sa = !0
        }
    }
    ;
    EW.prototype.j = function() {
        this.c = new CW(N(wt))
    }
    ;
    EW.prototype.g = function() {
        UD(this.c)
    }
    ;
    var HW = function(a, b) {
        var c = [];
        cG(a, function(a) {
            jA(b, a.bc()) && c.push(a)
        }, a);
        for (var d = 0; d < c.length; ++d)
            a.removeChild(c[d], !0)
    }
      , IW = function(a) {
        var b = []
          , c = [];
        cG(a, function(a) {
            a.Ca() && (b.push(a.bc()),
            c.push(a))
        }, a);
        for (var d = 0; d < c.length; ++d)
            a.removeChild(c[d], !0);
        return b
    }
      , JW = function(a) {
        for (var b = dG(a), c = 0, d = 0; d < b; d++)
            eG(a, d).Ca() && c++;
        return 0 == c ? !1 : c == b ? !0 : null
    };
    EW.prototype.ra = function(a) {
        for (var b = dG(this), c = 0; c < b; c++)
            eG(this, c).ra(a)
    }
    ;
    var KW = function(a, b) {
        var c = [];
        cG(a, function(a) {
            jA(b, a.bc()) && c.push(a)
        }, a);
        for (var d = 0; d < c.length; ++d)
            (new IS(c[d].l(),FW,GW,1E3)).play()
    };
    var OW = function(a, b, c, d, e, f, g, m) {
        this.H = c;
        this.J = b;
        this.ac = d;
        this.$b = e;
        this.I = f;
        this.lb = g;
        this.A = this.W = !1;
        this.a = new FV(a,b,c);
        this.Ba = MSG_PB_SIGNIN;
        this.wa = MSG_SAVE;
        this.T = MSG_MY_PB;
        a = N(zo);
        null != a ? (b = new AI(MSG_SAVE_PB,new nJ(hx)),
        b.setVisible(!1),
        b.$(a),
        this.I ? T(b, v, this.Hb, !1, this) : T(b, v, F(this.La, this, Tv), !1, this),
        LW(this, b),
        a = b) : a = null;
        this.j = a;
        this.D = MW(this);
        a = N(Tm);
        b = P(q, {
            id: Ao
        });
        a.appendChild(b);
        this.N = NW(this, b, MSG_SHOW_PB);
        a = this.N.l();
        b = P(q, {
            id: uo
        });
        a.appendChild(b);
        R(b, !1);
        this.R = b;
        this.w = 0;
        this.c = mK.O();
        this.qa = !0;
        this.B = k;
        this.Zb = m
    };
    OW.prototype.Hb = function() {
        if (this.B == k)
            PW(this),
            this.c.log(Ot, 1);
        else {
            var a = [this.B];
            HW(this.g, a);
            0 != a.length && IV(this.a, a);
            QW(this);
            this.M();
            this.A || RW(this, -1);
            this.c.log(Ot, 0)
        }
    }
    ;
    var LW = function(a, b) {
        if (a.I) {
            var c = a.a;
            null != c.a && c.a.length >= c.C ? (b.ba(a.B != k),
            b.g(a.B != k ? MSG_SAVED : MSG_PB_FULL)) : (b.ba(!0),
            b.g(a.B != k ? MSG_SAVED : MSG_SAVE_PB))
        } else
            b.ba(!0),
            b.g(MSG_SAVE_PB)
    };
    OW.prototype.La = function(a) {
        this.c.log(Pt, a);
        window.open(kd + this.Zb + ob + (window.location.protocol + jd + window.location.hostname + (window.location.port ? ee + window.location.port : k) + id), Wh)
    }
    ;
    var MW = function(a) {
        var b = N(vo);
        if (null == b)
            return null;
        var c = new hK(a.wa);
        c.$(b);
        c.setVisible(!1);
        a.I || (c.ba(!1),
        ZI(c.l(), a.Ba));
        T(c, v, function() {
            PW(this);
            this.c.log(Nt)
        }, !1, a);
        return c
    }
      , NW = function(a, b, c) {
        var d = new AI(null,new mJ);
        d.$(b);
        K(d.l(), vt);
        a.I ? (ZI(d.l(), c),
        T(d, v, a.Wb, !1, a)) : (ZI(d.l(), a.Ba),
        T(d, v, F(a.La, a, iw), !1, a));
        return d
    }
      , TW = function(a) {
        var b = N(et)
          , c = new AI(MSG_BACK_TO_ALL,new nJ(Bt));
        c.$(b);
        Q(c.l(), jy, Fp);
        T(c, v, function() {
            SW(this);
            GV(this.a)
        }, !1, a);
        return c
    };
    OW.prototype.mb = function() {
        this.o.ra(JW(this.g));
        QW(this);
        this.c.log(Ft)
    }
    ;
    var SW = function(a, b) {
        var c = a.a;
        c.b != k && (c.A = !0,
        c.b = k);
        a.F.value = k;
        a.X = k;
        if (!b) {
            c = a.a;
            if (c.g != hi || c.j != hi)
                c.A = !0,
                c.g = hi,
                c.j = hi;
            nP(a.b, ii)
        }
        R(a.sa, !1);
        R(a.Ha, !0);
        QW(a);
        R(a.C, !0)
    }
      , RW = function(a, b) {
        a.w += b;
        0 > a.w && (a.w = 0);
        PC(a.R, 9 >= a.w ? a.w + k : de);
        R(a.R, 0 < a.w)
    }
      , PW = function(a) {
        if (300 < WU(a.J, !0).length || 300 < $S(a.J.b, void 0).length) {
            var b = VU(a.H)
              , c = UU(a.H)
              , d = WU(a.J, !0).length
              , e = $S(a.J.b, void 0).length
              , f = new cW
              , g = dB(MSG_PB_TL, null);
            f.uc = g;
            f.yb && fC(f.yb, g);
            g = ZV(new $V, aW, !0, !0);
            f.b = g;
            f.Oa && (f.b ? (g = f.b,
            g.G = f.Oa,
            fW(g)) : fC(f.Oa, mB),
            R(f.Oa, !!f.b));
            f.wg = !0;
            f.$();
            f.setVisible(!0);
            a.c.log(Rt, {
                sl: b,
                tl: c,
                slen: d,
                tlen: e
            })
        } else {
            null != a.j && (a.j.ba(!1),
            a.j.g(MSG_SAVING),
            K(a.j.l(), ix));
            null != a.D && (a.D.ba(!1),
            a.D.g(MSG_SAVING));
            a.W || UW(a);
            b = a.b.U() != ii && a.b.U() != VU(a.H) + Ky + UU(a.H);
            SW(a, !b);
            e = a.a;
            b = new eT;
            c = VU(e.c);
            b.a[1] = c;
            c = UU(e.c);
            b.a[2] = c;
            c = WU(e.B, !0);
            b.a[3] = c;
            c = $S(e.B.b, !0);
            b.a[4] = c;
            var c = e.o
              , d = F(e.F, e, b)
              , m = e.B.b
              , g = hT(b)
              , e = iT(b)
              , f = jT(b)
              , n = null != m.j && DD(m.j.b)
              , m = {
                cm: t
            };
            m.sl = gT(b);
            m.tl = g;
            m.ql = e.length + k;
            n && (m.edit = Gd);
            b = {};
            b.q = e;
            b.utrans = f;
            oT(c, zd + JK(m), d, Rg, JK(b));
            R(a.C, !0);
            a.A || RW(a, 1)
        }
    }
      , QW = function(a) {
        var b = 0 != a.o.A;
        a.ib.setVisible(b);
        R(a.aa, b);
        a.a.b == k ? Q(a.Va.l(), jy, Fp) : Q(a.Va.l(), jy, k)
    }
      , VW = function(a, b) {
        null != a.j && a.j.setVisible(b);
        null != a.D && a.D.setVisible(b)
    };
    C = OW.prototype;
    C.Wh = function() {
        QW(this);
        var a = this.a
          , b = this.b.U()
          , c = b.split(Ky)[0]
          , b = b.split(Ky)[1];
        if (c != a.g || b != a.j)
            a.g = c,
            a.j = b,
            GV(a);
        R(this.C, !0)
    }
    ;
    C.Lh = function() {
        var a = this.a
          , b = this.Yb.U();
        b != a.D && (a.D = b,
        GV(a));
        R(this.C, !0)
    }
    ;
    C.dg = function(a) {
        a.stopPropagation();
        a.preventDefault();
        a = this.F.value;
        if (a != this.X)
            if (this.X = a,
            a == k)
                SW(this),
                GV(this.a);
            else {
                a = this.a;
                var b = this.F.value;
                b != a.b && (a.b = b,
                GV(a));
                QW(this);
                R(this.C, !0)
            }
    }
    ;
    C.Th = function() {
        var a = IW(this.g);
        this.o.ra(!1);
        0 != a.length && IV(this.a, a);
        QW(this);
        this.M()
    }
    ;
    C.Mh = function() {
        0 == this.a.a.length ? this.o.ra(!1) : (this.g.ra(this.o.Ca()),
        QW(this),
        this.c.log(Ct, this.o.Ca()))
    }
    ;
    C.Kj = function(a) {
        var b = a.target.b;
        a = this.a.o;
        var c = gT(b)
          , d = hT(b)
          , e = iT(b)
          , f = jT(b)
          , g = {
            cm: wl
        };
        g.id = b.bc();
        g.sl = c;
        g.tl = d;
        b = {};
        b.q = e;
        b.utrans = f;
        oT(a, zd + JK(g), gz, Rg, JK(b))
    }
    ;
    C.di = function(a) {
        a = a.target;
        var b = a.b;
        LF(this.ac, gT(b), hT(b), iT(b), dt);
        YS(this.$b, jT(b));
        for (var b = this.g, c = dG(b), d = 0; d < c; d++)
            eG(b, d).ra(eG(b, d) == a);
        this.o.ra(JW(this.g));
        QW(this);
        this.M();
        this.c.log(Dt)
    }
    ;
    C.Vh = function() {
        var a = {}
          , b = wL(new iL(window.location.href,!0));
        a.authuser = b ? b : Fd;
        var b = this.a
          , c = []
          , d = !1;
        b.g != hi && b.j != hi && (d = !0);
        for (var e = b.a.length - 1; 0 <= e; --e) {
            var f = []
              , g = b.a[e];
            f.push(b.c.X(gT(g)));
            f.push(b.c.mb(hT(g)));
            f.push(JV(iT(g)));
            f.push(JV(jT(g)));
            c.push(f.join(Wb))
        }
        e = k;
        d ? e = fa + b.c.X(b.g) + fa + b.c.mb(b.j) : b.b != k && (e = fa + b.b);
        b = [c.join(ba), e];
        this.c.log(Jt, b[1] == k ? 1 : 2);
        c = b[0];
        d = this.T + b[1];
        a = a || {};
        b = a.target;
        e = a.trixPath || (a.useCorp ? Xp : void 0);
        delete a.target;
        delete a.useCorp;
        delete a.trixPath;
        AA(a, {
            content: c,
            title: d
        });
        d = a.authuser;
        c = KK(e || Yp, kq);
        c = KK(c, mq);
        d && (c = [c, cb, Ti],
        null != d && c.push(mf, Ez(d)),
        c[1] && (d = c[0],
        e = d.indexOf(Sa),
        0 <= e && (c.push(d.substr(e)),
        c[0] = d = d.substr(0, e)),
        e = d.indexOf(tf),
        0 > e ? c[1] = tf : e == d.length - 1 && (c[1] = void 0)),
        c = c.join(k));
        ZU(new XU, a, c, b)
    }
    ;
    var UW = function(a) {
        a.W = !0;
        N(Sm).appendChild(BJ(RJ, {
            Cf: a.T
        }));
        NW(a, N(Bo), MSG_HIDE_PB);
        N(qo).appendChild(BJ(SJ, {
            Cf: a.T
        }));
        a.Ha = N(ht);
        a.sa = N(pt);
        a.o = new EV;
        a.o.$(N(gt));
        a.aa = N(st);
        var b = N(it)
          , c = new AI(MSG_DELETE,new nJ(Gt));
        c.$(b);
        c.setVisible(!1);
        T(c, v, a.Th, !1, a);
        a.ib = c;
        a.Va = TW(a);
        b = new pP(N(ot),[MSG_ALL, Yb],11,[ii, av],void 0,k,mW.O());
        T(b, Xj, a.Wh, !1, a);
        a.b = b;
        b = new pP(N(ut),[MSG_NEWEST, MSG_SOURCE],10,[Fd, Pd],void 0,MSG_SORT_BY + l,mW.O(),void 0,!0);
        T(b, Xj, a.Lh, !1, a);
        a.Yb = b;
        a.Ma = N(nt);
        b = N(Co);
        c = new EW;
        c.$(b);
        T(c, Xj, a.mb, !1, a);
        T(c, Ht, a.Kj, !1, a);
        T(c, Et, a.di, !1, a);
        a.g = c;
        a.F = N(wo);
        a.X = k;
        a.Ab = N(xo);
        a.C = N(yo);
        a.Da = N(Um);
        a.Ia = N(to);
        a.K = N(wt);
        a.Ua = N(zt);
        b = N(At);
        c = new AI(MSG_PB_EXP,new nJ(Kt));
        c.$(b);
        T(c, v, a.Vh, !1, a);
        b = new KV;
        T(b, Au, a.Z, !1, a);
        WW(a)
    }
      , XW = function(a, b) {
        var c = k;
        if (null != b)
            c = b;
        else
            var c = MSG_NP
              , d = MSG_NPM
              , c = a.b.U() == ii ? c : d;
        PC(a.Ma, c);
        R(a.Ma, !0);
        R(a.g.l(), !1)
    }
      , YW = function(a, b) {
        a.g.update(b, a.H, !0);
        R(a.Ma, !1);
        R(a.g.l(), !0)
    };
    OW.prototype.lc = function() {
        this.o.ra(!1);
        this.ib.setVisible(!1);
        R(this.aa, !1);
        R(this.C, !1);
        var a = this.a.a;
        if (this.b.U() == ii) {
            var b = {};
            this.b.U();
            for (var c = 0; c < a.length; c++) {
                var d = a[c]
                  , e = this.H.X(gT(d)) + (document.body.dir == Mu ? ga : ia) + this.H.mb(hT(d));
                b[gT(d) + Ky + hT(d)] = e
            }
            for (var f in b) {
                d = !1;
                for (c = 2; c < MO(this.b); c++)
                    if (oP(this.b, c) == f) {
                        d = !0;
                        break
                    }
                d || (c = new WO(b[f],f),
                this.b.Zd(c))
            }
            for (c = MO(this.b) - 1; 1 < c; c--)
                null != b[oP(this.b, c)] || this.b.vc(c);
            LO(this.b, 1).setVisible(2 < MO(this.b))
        }
        this.a.b != k && (b = MSG_PB_SR.replace(Ya, a.length),
        PC(this.sa, b),
        R(this.sa, !0),
        R(this.Ha, !1));
        0 == a.length ? (b = this.a.K,
        b != k ? (XW(this, b),
        this.c.log(It)) : this.a.b == k ? XW(this) : YW(this, a)) : (YW(this, a),
        this.A && KW(this.g, HV(this.a)));
        this.M();
        if (this.qa) {
            b = [];
            for (f = 0; f < a.length; f++)
                kA(b, gT(a[f]) + id + hT(a[f]));
            f = {};
            f.count = a.length;
            f.pairs = b.length;
            this.c.log(Lt, f);
            this.qa = !1
        }
    }
    ;
    OW.prototype.Wb = function() {
        R(this.R, !1);
        this.w = 0;
        if (this.A) {
            ZI(this.N.l(), MSG_SHOW_PB);
            L(document.body, St);
            var a = new GS(this.Da,400)
              , b = new GS(this.Ia,400);
            a.play();
            b.play();
            this.A = !1
        } else
            ZI(this.N.l(), MSG_HIDE_PB),
            this.A = !0,
            this.W || (UW(this),
            GV(this.a),
            R(this.C, !0)),
            K(document.body, St),
            a = new HS(this.Da,400),
            b = new HS(this.Ia,400),
            a.play(),
            b.play(),
            this.Z(),
            KW(this.g, HV(this.a));
        this.c.log(Qt, this.A)
    }
    ;
    var WW = function(a) {
        T(a.o, Xj, a.Mh, !1, a);
        T(a.Ab, w, a.dg, !1, a);
        T(new EH(a.F), ar, function(a) {
            13 == a.keyCode && this.dg(a)
        }, !1, a);
        T(a.a, Mt, a.lc, !1, a);
        T(a.lb, vx, a.M, !1, a);
        T(window, Ru, a.Z, !1, a);
        T(a.K, Ru, a.kc, !1, a)
    };
    OW.prototype.Z = function() {
        var a = document.documentElement.clientHeight;
        R(this.K, !1);
        document.body.scrollHeight > a && (a = document.body.scrollHeight);
        R(this.K, !0);
        var b = sD(this.K).y;
        this.K.style.height = nD(a - b - 29, !0)
    }
    ;
    OW.prototype.M = function() {
        var a;
        a: {
            a = this.a;
            for (var b = 0; b < a.a.length; ++b) {
                var c = a.a[b];
                if (VU(a.c) == gT(c) && UU(a.c) == hT(c) && WU(a.B) == iT(c) && $S(a.B.b, !0) == jT(c)) {
                    a = c.bc();
                    break a
                }
            }
            a = k
        }
        this.B = a;
        null != this.j && (this.B != k ? K(this.j.l(), ix) : L(this.j.l(), ix),
        LW(this, this.j));
        null != this.D && (this.D.ba(this.B == k),
        this.D.g(this.B != k ? MSG_SAVED : this.wa))
    }
    ;
    OW.prototype.kc = function() {
        0 < this.K.scrollTop ? K(this.Ua, qt) : L(this.Ua, qt)
    }
    ;
    var ZW = function(a, b) {
        this.a = a;
        this.b = b
    }
      , $W = {
        af: "af-ZA",
        bg: "bg-BG",
        ca: "ca-ES",
        cs: "cs-CZ",
        da: "da-DK",
        de: "de-DE",
        el: "el-GR",
        eu: "eu-ES",
        fa: "fa-IR",
        fi: "fi-FI",
        tl: "fil-PH",
        fr: "fr-FR",
        gl: "gl-ES",
        hi: "hi-IN",
        hr: "hr-HR",
        hu: "hu-HU",
        iw: "he-IL",
        id: "id-ID",
        is: "is-IS",
        it: "it-IT",
        ja: "ja-JP",
        ko: "ko-KR",
        lt: "lt-LT",
        ms: "ms-MY",
        no: "nb-NO",
        nl: "nl-NL",
        pl: "pl-PL",
        ro: "ro-RO",
        ru: "ru-RU",
        sk: "sk-SK",
        sl: "sl-SI",
        sr: "sr-RS",
        sv: "sv-SE",
        th: "th-TH",
        tr: "tr-TR",
        uk: "uk-UA",
        vi: "vi-VN",
        zu: "zu-ZA",
        "ar::ae": "ar-AE",
        "ar::bh": "ar-BH",
        "ar::dz": "ar-DZ",
        "ar::eg": "ar-EG",
        "ar::il": "ar-IL",
        "ar::jo": "ar-JO",
        "ar::kw": "ar-KW",
        "ar::lb": "ar-LB",
        "ar::ma": "ar-MA",
        "ar::om": "ar-OM",
        "ar::ps": "ar-PS",
        "ar::qa": "ar-QA",
        "ar::sa": "ar-SA",
        "ar::tn": "ar-TN",
        ar: "ar-EG",
        "en::au": "en-AU",
        "en::ca": "en-CA",
        "en::uk": "en-GB",
        "en::ie": "en-IE",
        "en::in": "en-IN",
        "en::nz": "en-NZ",
        "en::com": "en-US",
        "en::za": "en-ZA",
        en: "en-001",
        "es::ar": "es-AR",
        "es::bo": "es-BO",
        "es::cl": "es-CL",
        "es::co": "es-CO",
        "es::cr": "es-CR",
        "es::do": "es-DO",
        "es::ec": "es-EC",
        "es::es": "es-ES",
        "es::gt": "es-GT",
        "es::hn": "es-HN",
        "es::mx": "es-MX",
        "es::ni": "es-NI",
        "es::pa": "es-PA",
        "es::pe": "es-PE",
        "es::pr": "es-PR",
        "es::py": "es-PY",
        "es::sv": "es-SV",
        "es::com": "es-US",
        "es::uy": "es-UY",
        "es::ve": "es-VE",
        es: "es-ES",
        "pt::pt": "pt-PT",
        pt: "pt-BR",
        "zh-CN:zh-TW:hk": "yue-Hant-HK",
        "zh-CN:zh-CN:hk": "cmn-Hans-HK",
        "zh-CN:zh-TW": "cmn-Hant-TW",
        "zh-CN": "cmn-Hans-CN"
    }
      , aX = function(a, b) {
        WT.call(this, b);
        this.A = 0;
        this.c.le = !0;
        this.setAutoHide(!1);
        this.c.b = a;
        ZT(this);
        NI(this.c, 1, 2, void 0);
        this.g = !1;
        YT(this, BJ(bK, {
            label: MSG_SPEAK_NOW
        }))
    };
    G(aX, WT);
    aX.prototype.V = function() {
        aX.v.V.call(this);
        this.w = O(cp, this.l())
    }
    ;
    var bX = function(a) {
        0 == a.A++ && K(a.w, xx);
        uF(a.F, 600, a)
    };
    aX.prototype.F = function() {
        0 == --this.A && L(this.w, xx)
    }
    ;
    var cX = function(a, b, c) {
        this.w = a;
        this.a = null;
        ML && py in window && (a = new webkitSpeechRecognition,
        a.continuous = !0,
        a.interimResults = !0,
        this.a = a);
        this.I = new ZW(b,c);
        this.g = k;
        this.j = !1;
        this.b = null;
        this.o = lq;
        this.B = mK.O()
    }
      , dX = function(a) {
        if (null != a.a) {
            a.b = new kJ(MSG_SPEECH_INPUT_TURN_ON,MSG_SPEECH_INPUT_TURN_OFF,new nJ(Ev));
            a.b.P(P(q, {
                id: bp,
                tabindex: Fd
            }));
            var b = N(jp);
            b.insertBefore(a.b.l(), b.childNodes[1] || null);
            a.c = new aX(a.b.l());
            a.c.$(a.b.l());
            a.a.onresult = F(a.C, a);
            a.a.onstart = F(a.F, a);
            a.a.onspeechstart = F(a.M, a);
            a.a.onend = F(a.A, a);
            a.a.onspeechend = F(a.K, a);
            a.a.onerror = F(a.J, a);
            a.a.onnomatch = F(a.H, a);
            T(a.b, v, a.D, !1, a)
        }
    }
      , eX = "init:buttonOn end:buttonOn buttonOn:start start:speechStart speechStart:result result:result result:buttonOff buttonOff:speechEnd speechEnd:end".split(" ")
      , fX = function(a, b) {
        if (!(0 <= eX.indexOf(a.o + ee + b))) {
            var c = {};
            c.from = a.o;
            c.to = b;
            a.B.log(Dv, c)
        }
        a.o = b
    };
    cX.prototype.D = function() {
        this.b.Ca() ? (this.g = k,
        this.a.start(),
        fX(this, Nj)) : (this.a.stop(),
        this.c.setVisible(!1),
        fX(this, Mj));
        this.w.l().focus()
    }
    ;
    cX.prototype.clear = function() {
        this.g = k
    }
    ;
    var gX = function(a, b) {
        if (null != a.a) {
            a.j && a.a.stop();
            var c;
            c = a.I;
            c = $W[b + ee + c.b + ee + c.a] || $W[b + he + c.a] || $W[b + ee + c.b] || $W[b] || null;
            a.a.lang = null != c ? c : k;
            a.b.setVisible(null != c)
        }
    };
    cX.prototype.F = function() {
        this.j = !0;
        this.c.setVisible(!0);
        fX(this, Xv)
    }
    ;
    cX.prototype.M = function() {
        bX(this.c);
        fX(this, Gv)
    }
    ;
    cX.prototype.A = function() {
        hX(this);
        fX(this, Ll)
    }
    ;
    cX.prototype.K = function() {
        bX(this.c);
        fX(this, Fv)
    }
    ;
    var hX = function(a) {
        a.j = !1;
        a.c.setVisible(!1);
        a.b.ra(!1)
    };
    cX.prototype.C = function(a) {
        bX(this.c);
        for (var b = k, c = a.resultIndex; c < a.results.length; ++c)
            a.results[c].isFinal ? this.g += a.results[c][0].transcript : b += a.results[c][0].transcript;
        a = this.g + b;
        tK(this.B, pq, 3);
        this.w.b(a);
        fX(this, Bu)
    }
    ;
    cX.prototype.J = function() {
        hX(this);
        fX(this, Pl)
    }
    ;
    cX.prototype.H = function() {
        hX(this);
        fX(this, rs)
    }
    ;
    var iX = function(a, b, c, d, e) {
        W.call(this);
        this.J = a;
        this.R = b;
        this.X = c;
        this.W = d || k;
        this.Z = e || k;
        this.c = this.I = this.j = k;
        this.b = !1;
        this.w = !0;
        this.C = [];
        this.A = k;
        this.N = !1;
        this.F = new EI(this.T,1E3,this);
        this.g = mK.O()
    };
    G(iX, W);
    iX.prototype.setVisible = function(a) {
        a || (this.N = this.b = !1,
        FI(this.F));
        R(this.l(), a)
    }
    ;
    iX.prototype.isVisible = function() {
        return DD(this.l())
    }
    ;
    var jX = function(a, b) {
        if (b.Gd == k)
            a.setVisible(!1);
        else {
            if (b.Mf) {
                if (a.N)
                    return
            } else
                a.N = !0;
            a.A = b.Mf || k;
            a.j = b.Xg;
            a.I = b.fh;
            a.c = b.Gd;
            var c = b.Rh || Oz(b.Gd), d;
            d = b.Mf ? a.R : b.$f && a.w ? a.W : a.X;
            a.b = b.$f && a.w;
            if (a.b && jA(b.Ve, 6)) {
                if (a.setVisible(!1),
                PC(N(Lv), a.c),
                b.result)
                    for (var e = 0; e < kH(b.result); e++)
                        lH(b.result, e).pb[3] = 0 == e ? a.c : k
            } else
                a.b ? (e = a.l(),
                L(e, dp),
                K(e, Fo)) : (e = a.l(),
                L(e, Fo),
                K(e, dp)),
                a.setVisible(!0);
            PC(a.l(), d + l);
            a.C = b.Ve;
            d = P(t, {
                tabindex: 0,
                href: yq
            });
            Q(d, {
                direction: FA(a.I) ? Mu : Br
            });
            Q(d, {
                "text-decoration": us
            });
            d.innerHTML = c;
            T(d, w, a.aa, !1, a);
            a.l().appendChild(d);
            a.b && !jA(b.Ve, 6) && (c = P(nl),
            PC(c, a.Z + l),
            d = P(t, {
                tabindex: 1,
                href: yq
            }),
            T(d, w, a.qa, !1, a),
            PC(d, a.j),
            c.appendChild(d),
            a.l().appendChild(c),
            K(c, Xo));
            GI(a.F)
        }
    };
    iX.prototype.T = function() {
        var a = {};
        a.orig = this.j;
        a.sl = this.I;
        this.b && (a.autocorrect = this.b);
        this.A ? (a.corrlang = this.A,
        this.g.log(jr, a)) : (a.corr = this.c,
        a.corrtype = this.C,
        this.g.log(Hv, a))
    }
    ;
    iX.prototype.aa = function() {
        var a = this.j;
        64 < a.length && (a = a.substr(0, 64));
        tK(this.g, Ls, a);
        this.A ? (tK(this.g, ku, this.I),
        LF(this.J, this.A, k, this.j, Mx)) : (tK(this.g, yk, this.C),
        this.b ? LF(this.J, k, k, this.c, Lx) : LF(this.J, k, k, this.c, Ox));
        a = this.F;
        0 != a.Ea && (FI(a),
        a.b());
        this.setVisible(!1)
    }
    ;
    iX.prototype.qa = function() {
        var a = this.c;
        64 < a.length && (a = a.substr(0, 64));
        tK(this.g, xk, a);
        tK(this.g, yk, this.C);
        this.w = !1;
        LF(this.J, k, k, this.j, Nx);
        a = this.F;
        0 != a.Ea && (FI(a),
        a.b());
        this.setVisible(!1)
    }
    ;
    var kX = function(a, b, c) {
        W.call(this);
        this.N = a;
        this.F = b;
        this.T = c;
        this.b = HATS_TP;
        this.c = this.A = this.g = this.w = null;
        this.j = -1;
        this.I = mK.O()
    };
    G(kX, W);
    kX.prototype.na = function() {
        kX.v.na.call(this);
        this.Y(document.createElement(q))
    }
    ;
    kX.prototype.Y = function(a) {
        kX.v.Y.call(this, a);
        K(a, Yn);
        a.appendChild(AJ(VJ));
        this.w = O(co, a);
        this.g = O(Zn, a);
        this.A = O(eo, a);
        PC(this.w, MSG_HATS_TITLE);
        this.c = new AO;
        this.Fa(this.c, !0);
        a = [[MSG_HATS_O1, 0], [MSG_HATS_O2, 1], [MSG_HATS_O3, 2], [MSG_HATS_O4, 3], [MSG_HATS_O5, 4]];
        if (2 == this.b || 4 == this.b || 6 == this.b)
            for (var b = Math.random, c = a.length - 1; 0 < c; c--) {
                var d = Math.floor(b() * (c + 1))
                  , e = a[c];
                a[c] = a[d];
                a[d] = e
            }
        for (b = 0; b < a.length; ++b)
            if (a[b][0]) {
                c = a[b][0];
                d = a[b][1];
                e = P(Zg);
                if (1 == this.b) {
                    var f = P(Zg, {
                        "class": Em
                    });
                    K(f, $n + dG(this.c));
                    e.appendChild(f)
                }
                f = P(Zg, {
                    "class": bo
                });
                PC(f, c);
                e.appendChild(f);
                c = new WO(e,d);
                this.c.Fa(c, !0)
            }
    }
    ;
    kX.prototype.wb = z(vm);
    kX.prototype.V = function() {
        kX.v.V.call(this);
        X(this).a(this.c, v, this.J);
        X(this).a(this.A, w, F(this.C, this, 0));
        lX(this, kv)
    }
    ;
    var lX = function(a, b) {
        var c = {};
        c.sl = VU(a.F);
        c.tl = UU(a.F);
        c.hl = a.N;
        c.e = b;
        a.I.log(1 == a.b ? hw : hw + a.b, c)
    };
    kX.prototype.J = function(a) {
        this.j = a.target.U();
        lX(this, Uu + this.j);
        yD(this.l(), AD(this.l()));
        this.c.xa();
        PC(this.w, MSG_HATS_THANKS);
        this.g.appendChild(AJ(WJ, {
            Ih: MSG_HATS_AF,
            kd: MSG_HATS_MF
        }));
        a = O(ao, this.g);
        X(this).a(a, w, function() {
            this.T.b();
            lX(this, $l)
        });
        this.C(1E4)
    }
    ;
    kX.prototype.C = function(a) {
        qK(this.I, xd);
        uF(this.R, a, this)
    }
    ;
    kX.prototype.R = function() {
        (new GS(this.l(),300)).play();
        uF(F(this.xa, this), 300)
    }
    ;
    var nX = function(a) {
        this.G = a || null;
        this.a = P(q, fo, vC(k));
        this.G && (AC(this.a, this.G),
        mX(this))
    }
      , kS = function(a, b, c, d, e) {
        var f = d || go;
        d = oS(a);
        mX(a);
        zC(a.a);
        if (b != c || e) {
            if (0 < b) {
                var g = d.substring(0, b);
                oX(a.a, g, 0, e)
            }
            b < c && (g = d.substring(b, c),
            f = P(Zg, f),
            oX(f, g, b, e),
            a.a.appendChild(f));
            c < d.length && (g = d.substring(c),
            oX(a.a, g, c, e))
        }
    }
      , mX = function(a) {
        var b;
        var c = a.G
          , d = hC(c);
        (b = I && c.currentStyle) && cD(iC(d)) && b.width != Ui && b.height != Ui && !b.boxSizing ? (d = KD(c, b.width, sy, Xt),
        c = KD(c, b.height, Cp, Vt),
        b = new ZB(d,c)) : (b = new ZB(c.offsetWidth,c.offsetHeight),
        d = ND(c),
        c = QD(c),
        b = new ZB(b.width - c.left - d.left - d.right - c.right,b.height - c.top - d.top - d.bottom - c.bottom));
        var c = a.a
          , d = hC(c)
          , e = cD(iC(d));
        !I || J(Id) || e && J(ae) ? JD(c, b, qk) : (d = c.style,
        e ? (d.pixelWidth = b.width,
        d.pixelHeight = b.height) : (e = ND(c),
        c = QD(c),
        d.pixelWidth = b.width + c.left + e.left + e.right + c.right,
        d.pixelHeight = b.height + c.top + e.top + e.bottom + c.bottom));
        c = sD(a.G);
        xD(a.a, c.x, c.y);
        c = ND(a.G);
        Q(a.a, Zs, c.left + mu);
        Q(a.a, $s, c.right + mu);
        a.a.dir = a.G.dir
    }
      , oX = function(a, b, c, d) {
        d = d || [];
        for (var e = 0, f; f = d[e]; e++)
            if (!(0 > f.Zc - c)) {
                if (f.Zc - c >= b.length)
                    break;
                if (0 < f.Zc - c) {
                    var g = b.substring(0, f.Zc - c);
                    pX(a, g)
                }
                var m = f.className || go
                  , g = b.substring(f.Zc - c, f.Of - c)
                  , m = P(Zg, m);
                pX(m, g);
                a.appendChild(m);
                b = b.substring(f.Of - c);
                c = f.Of
            }
        b && pX(a, b)
    }
      , pX = function(a, b) {
        for (var c = Bz(b).split(ba), d = 0, e = c.length; d < e; d++) {
            if (0 < d) {
                var f = P(Gf);
                a.appendChild(f)
            }
            a.appendChild(vC(c[d]))
        }
    }
      , oS = function(a) {
        return a.G && (a.G.value || YC(a.G))
    };
    var qX = {
        ascii_tlds: ["AC", "AD", "AE", "AERO", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "ARPA", "AS", "ASIA", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BIZ", "BJ", "BM", "BN", "BO", Gf, "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CAT", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "COM", "COOP", "CR", "CU", "CV", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EDU", "EE", "EG", "ER", "ES", "ET", "EU", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GOV", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", ig, "HT", "HU", "ID", "IE", "IL", "IM", "IN", "INFO", "INT", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JOBS", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", rg, "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MIL", "MK", "ML", "MM", "MN", "MO", "MOBI", "MP", "MQ", "MR", "MS", "MT", "MU", "MUSEUM", "MV", "MW", "MX", "MY", "MZ", "NA", "NAME", "NC", "NE", "NET", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "ORG", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PRO", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SU", "SV", "SY", "SZ", "TC", oh, "TEL", "TF", "TG", qh, "TJ", "TK", "TL", "TM", "TN", "TO", "TP", rh, "TRAVEL", "TT", "TV", "TW", "TZ", "UA", "UG", "UK", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XN--0ZWM56D", "XN--11B5BS3A9AJ6G", "XN--80AKHBYKNJ4F", "XN--9T4B11YI5A", "XN--DEBA0AD", "XN--FIQS8S", "XN--FIQZ9S", "XN--FZC2C9E2C", "XN--G6W251D", "XN--HGBK6AJ7F53BBA", "XN--HLCJ6AYA9ESC7A", "XN--J6W193G", "XN--JXALPDLP", "XN--KGBECHTV", "XN--KPRW13D", "XN--KPRY57D", "XN--MGBAAM7A8H", "XN--MGBAYH7GPA", "XN--MGBERP4A5D4AR", "XN--O3CW4H", "XN--P1AI", "XN--PGBS0DH", "XN--WGBH1C", "XN--XKC2AL3HYE2A", "XN--YGBI2AMMX", "XN--ZCKZAH", "YE", "YT", "ZA", "ZM", "ZW"],
        unicode_tlds: "\u6d4b\u8bd5 \u092a\u0930\u0940\u0915\u094d\u0937\u093e \u0438\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0435 \ud14c\uc2a4\ud2b8 \u05d8\u05e2\u05e1\u05d8 \u4e2d\u56fd \u4e2d\u570b \u0dbd\u0d82\u0d9a\u0dcf \u6e2c\u8a66 \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc \u0baa\u0bb0\u0bbf\u0b9f\u0bcd\u0b9a\u0bc8 \u9999\u6e2f \u03b4\u03bf\u03ba\u03b9\u03bc\u03ae \u0625\u062e\u062a\u0628\u0627\u0631 \u53f0\u6e7e \u53f0\u7063 \u0627\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0627\u0631\u062f\u0646 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0e44\u0e17\u0e22 \u0440\u0444 \u062a\u0648\u0646\u0633 \u0645\u0635\u0631 \u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8 \u0641\u0644\u0633\u0637\u064a\u0646 \u30c6\u30b9\u30c8".split(" ")
    };
    var rX, sX = {
        http: 1,
        https: 1,
        ftp: 1
    }, tX = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/, uX = function(a, b) {
        var c;
        try {
            c = a instanceof iL ? a.clone() : new iL(a,void 0)
        } catch (p) {
            return !1
        }
        var d;
        if (!(d = c.b && !sX[c.b.toLowerCase()] || !c.c)) {
            c = c.c;
            var e;
            a: {
                d = c.split(dd);
                for (var f = 0; f < d.length; f++)
                    if (!d[f]) {
                        e = !1;
                        break a
                    }
                if (1 < d.length) {
                    d = d[d.length - 1].toLowerCase();
                    if (!rX) {
                        try {
                            e = qX
                        } catch (p) {
                            throw Error("Variable CFG_twsfe_likelyurl_module_file has not been loaded. This is probaly due the configuration data not being properly included.");
                        }
                        for (var f = {}, g = e.ascii_tlds, m = 0; m < g.length; m++) {
                            var n = g[m];
                            f[n.toLowerCase()] = 1
                        }
                        e = e.unicode_tlds;
                        for (m = 0; m < e.length; m++)
                            n = e[m],
                            f[n.toLowerCase()] = 1;
                        rX = f
                    }
                    e = !!rX[d]
                } else
                    e = !b
            }
            if (!e)
                a: if (c = c.match(tX)) {
                    for (e = 1; 4 >= e; e++)
                        if (255 < parseInt(c[e], 10)) {
                            e = !1;
                            break a
                        }
                    e = !0
                } else
                    e = !1;
            d = !e
        }
        return d ? !1 : !0
    }, vX = function(a) {
        a = Dz(a);
        return 0 <= a.search(/[\s\xa0@]/) ? !1 : uX(a, !1) ? !0 : uX(Qp + a, !0)
    }, wX = function() {
        var a;
        a = (new iL(window.location.href)).a;
        var b = vL(a, wl);
        a = vL(a, Vl);
        var c = k;
        b && (c += xl + b);
        b == fg && a && (c += qb + a);
        return c
    };
    function xX(a, b, c) {
        b = P(oq, {
            type: Fp,
            name: b,
            value: c
        });
        a.appendChild(b)
    }
    var JX = function(a) {
        U.call(this);
        this.B = mK.O();
        var b = new AP(this);
        a.B && (a = GU(a));
        this.submit = N(lp);
        this.form = this.submit.form;
        this.c = N(Kp).value;
        this.La = new UL(mw);
        this.Bc = !0;
        this.T = a.K;
        this.Gg = (new Date).getTime();
        this.K = new xP(Zo);
        this.R = new xP(rp);
        yP(this.K);
        this.K.Da = 0;
        yP(this.R);
        this.R.Da = 0;
        this.Ce = null;
        this.Yb = NP.O();
        this.Og = N(mp);
        this.Je = new AI(null,new mJ(kx));
        this.Og && this.Je.P(this.Og);
        var c = N(wv);
        this.g = new AN(c.value);
        uN(this.g);
        this.g.P(c);
        tN(this.g);
        K(yX(this), hv);
        T(this.g.l(), nj, this.Mj, !1, this);
        this.Fe = this.Qe = 0;
        this.a = new KN;
        BP(b, this.a, this.K, this.R);
        var c = a.g == k ? null : new zP(zX(a.g),F(this.X, this),void 0,!0)
          , d = a.j == k ? null : new zP(zX(a.j),F(this.mb, this));
        SN(this.a);
        this.Lg = !0;
        this.qd = new oV(this.a);
        rV(this.qd, {
            bh: this.K,
            jh: this.R,
            dh: c,
            kh: d,
            gh: this.Je,
            lh: this.g
        });
        null != FEATURE_STICKINESS && AX(this);
        BX(this);
        CX(this.g, VU(this));
        this.zd = VU(this) == ou;
        this.Ig = this.ye = k;
        T(this.a, Ov, this.Tj, !1, this);
        T(this.a, Nv, this.wh, !1, this);
        T(this.a, Xk, this.dj, !1, this);
        T(this.a, Nw, this.Ch, !1, this);
        this.j = zX(a.M);
        this.H = new pN(k);
        this.H.P(N(uk));
        uN(this.H);
        tN(this.H);
        CX(this.H, UU(this));
        T(this.submit, w, this.Si, !1, this);
        T(this.a, kr, F(this.yd, this, !1), !1, this);
        T(this.g, Xj, this.Oj, !1, this);
        T(this.g, lw, this.Bh, !1, this);
        T(this, vx, this.Qj, !1, this);
        this.A = new TM(this.c,this.La,this);
        this.A.P(N(oo));
        c = new dN(this.c);
        this.A.b.Fa(c, !0);
        this.Ae = new gM(this.c,[common_translation_tooltip, uncommon_translation_tooltip, rare_translation_tooltip, MSG_N_MORE_TRANSLATIONS_LABEL],!0);
        this.A.C.Fa(this.Ae, !0);
        this.td = this.Cc = this.wd = this.zc = null;
        this.zc = new ZM(this.c);
        this.A.b.Fa(this.zc, !0);
        this.wd = new RT(this.c);
        this.A.b.Fa(this.wd, !0);
        this.Cc = new PU(this.c);
        this.A.b.Fa(this.Cc, !0);
        this.td = new pT(this.c);
        this.A.b.Fa(this.td, !0);
        if (c = zX(a.I))
            this.D = new iX(this,MSG_LANGUAGE_CORRECTION,MSG_SPELLING_CORRECTION,MSG_SPELLING_AUTO_CORRECTION,MSG_SPELLING_REVERT_CORRECTION),
            this.D.P(c);
        this.xe = a.X;
        this.Fh = a.W;
        this.M = N(yu);
        this.I = N(Lv);
        this.Uc = N(Zi);
        this.kc = N(Wi);
        this.Tc = N(Yi);
        this.lc = N(Xi);
        this.Dh = a.J;
        this.jg = zX(a.D);
        this.$b = zX(a.A);
        this.sa = null;
        null != a.a && (this.sa = new XP(a.a,yX(this),N(ep),this.c,this));
        this.lb = null;
        null != this.H && null != a.w && (this.lb = new XP(a.w,this.H.l(),N(Go),this.c,void 0),
        R(a.w, !1));
        this.Ac = N(Wu);
        this.gg = new JU(this);
        DX(this);
        this.Ge = a.Ma;
        this.He = a.R;
        this.o = a.N;
        this.w = a.sa;
        if (this.J = a.F)
            EX(this.J, VU(this)),
            BC(this.J.l(), yX(this)),
            T(this.J, v, this.Oh, !1, this);
        this.Hb = a.ib;
        null != this.H && null != this.Hb && (EX(this.Hb, UU(this)),
        BC(this.Hb.l(), this.H.l()));
        this.o && T(this.o, v, this.kj, !1, this);
        this.w && T(this.w, v, this.vj, !1, this);
        this.qa = a.T;
        this.Wb = null;
        this.qa && (this.Wb = FX(this.qa.l()),
        T(this.qa, v, this.mj, !1, this));
        this.Va = null;
        ENABLE_COMMUNITY_SERVED_PROMO && (this.Va = new $T(tw,MSG_COMMUNITY_PROMO_SERVED_DESCRIPTION,MSG_COMMUNITY_PROMO_SERVED_LINK,MSG_COMMUNITY_PROMO_SERVED_DISMISS,MSG_COMMUNITY_PROMO_SERVED_URL,COMMUNITY_PROMO_SERVED_DISMISSED),
        this.Va.P(N(Uo)));
        this.F = {};
        this.F.edit = ENABLE_COMMUNITY_USER_EDIT_PROMO ? new YM(MSG_COMMUNITY_PROMO_EDIT_LINK,MSG_COMMUNITY_PROMO_EDIT_SUBTEXT,MSG_COMMUNITY_PROMO_EDIT_TITLE,k,MSG_COMMUNITY_PROMO_EDIT_URL,uw) : null;
        COMMUNITY_PROMO_TYPE === vu ? this.F[Vk] = new YM(MSG_COMMUNITY_PROMO_REFUGEE_TITLE,MSG_COMMUNITY_PROMO_REFUGEE_SUBTEXT,k,k,MSG_COMMUNITY_PROMO_REFUGEE_URL,rw) : COMMUNITY_PROMO_TYPE === ks ? this.F[Vk] = new YM(MSG_COMMUNITY_PROMO_NEW_USER_LINK,k,MSG_COMMUNITY_PROMO_NEW_USER_TITLE,MSG_COMMUNITY_PROMO_NEW_USER_SUBTEXT,MSG_COMMUNITY_PROMO_NEW_USER_URL,nw) : COMMUNITY_PROMO_TYPE === ls ? this.F[Vk] = new YM(MSG_COMMUNITY_PROMO_NEW_USER_LINK,k,MSG_COMMUNITY_PROMO_NEW_USER_TITLE,MSG_COMMUNITY_PROMO_NEW_USER_SUBTEXT,MSG_COMMUNITY_PROMO_NEW_USER_URL,ow) : COMMUNITY_PROMO_TYPE === ms ? this.F[Vk] = new YM(MSG_COMMUNITY_PROMO_NEW_USER_LINK,k,MSG_COMMUNITY_PROMO_NEW_USER_TITLE,MSG_COMMUNITY_PROMO_NEW_USER_SUBTEXT,MSG_COMMUNITY_PROMO_NEW_USER_URL,pw) : COMMUNITY_PROMO_TYPE === ns ? this.F[Vk] = new YM(MSG_COMMUNITY_PROMO_NEW_USER_LINK,k,MSG_COMMUNITY_PROMO_NEW_USER_TITLE,MSG_COMMUNITY_PROMO_NEW_USER_SUBTEXT,MSG_COMMUNITY_PROMO_NEW_USER_URL,qw) : COMMUNITY_PROMO_TYPE === Eu && (this.F[Vk] = new YM(MSG_COMMUNITY_PROMO_RETURN_USER_LINK,k,MSG_COMMUNITY_PROMO_RETURN_USER_TITLE,MSG_COMMUNITY_PROMO_RETURN_USER_SUBTEXT,MSG_COMMUNITY_PROMO_RETURN_USER_URL,sw));
        c = N(Eo);
        d = this.F[Vk];
        null != d && d.P(c);
        OS = MSG_UNDO_EDITS;
        this.aa = new PS(a.c);
        this.aa.a && (null != N(Io) && (this.ze = new WR(N(Io),MSG_COPIED,null,2)),
        T(this.aa.a, v, this.lj, !1, this));
        b.b(this.Je, this.o, this.w, this.Ge, this.He);
        (b = wX()) && (b = cb + b);
        this.Ab = null;
        null != this.Ge && (this.Ab = new PM(this.Ge,jb + b,OL));
        this.Ha = null;
        null != this.He && (this.Ha = new PM(this.He,kb + b,OL));
        MU(!0);
        this.pd = !1;
        gS = MSG_ALT_PHRASE_TITLE;
        hS = MSG_EDIT_TRANSLATION;
        tS = MSG_USE_ALTERNATIVE;
        uS = Hq;
        c = document.createElement(q);
        R(c, !1);
        AC(c, this.M);
        b = new JS(MSG_SUBMIT_TRANSLATION,MSG_CANCEL_EDITS,MSG_SUGGEST_A_TRANSLATION,this.F.edit);
        b.P(c);
        c = new MS(this.H,N(Tn),N(Ho),N(Wo),this.M,this.Hb);
        this.b = new RS(void 0,!0,void 0,a.H,a.C,b,c,this.aa);
        this.b.P(this.j);
        this.xd = new nX(yX(this));
        this.b.b.A = this.xd;
        K(this.xd.a, hv);
        this.b.b.j = new WR(void 0,MSG_ALT_PHRASE_TITLE,void 0,2);
        this.b.b.j.N = 700;
        NL && (b = new qT([this.g.l()],[this.j]),
        T(b, Uu, this.A.Gi, !1, this.A),
        T(this.b, w, function(a) {
            (!EGGS_JANGO || TU(this) != ou && UU(this) != ou) && 1 < a.Vi && this.A.zg(a)
        }, !1, this),
        T(this.b, dy, this.A.zg, !1, this.A));
        this.M && (R(this.M, !1),
        EGGS_JANGO && UU(this) == ou || this.M.firstChild && this.o && this.o.setVisible(!0));
        this.I && (R(this.I, !1),
        EGGS_JANGO && TU(this) == ou || this.I.firstChild && this.w && this.w.setVisible(!0));
        NU(this);
        null != this.lb && $P(this.lb, UU(this));
        this.D && T(this.D, v, this.yh, !1, this);
        this.ud = new cX(this.g,tld.substr(tld.lastIndexOf(dd) + 1),this.c);
        dX(this.ud);
        gX(this.ud, TU(this));
        T(this.b, v, this.nj, !1, this);
        b = [this.j];
        (c = N(So)) && b.push(c);
        new ST(this.j,b);
        (b = N(mp)) && b.title && $I(b);
        var e = N(kp);
        K(e, hm);
        T(yX(this), hm, function() {
            K(e, hm)
        });
        T(yX(this), nj, function() {
            L(e, hm)
        });
        L(document.body, ps);
        b = N($o);
        c = N(sp);
        null != b && (b.onclick = null);
        null != c && (c.onclick = null);
        this.Rg = new QU(N(Wn),this,this.c);
        SU(this.Rg);
        this.Ba = new HU(this.c);
        this.Ba.$(N(rn));
        IU(this.Ba);
        ENABLE_REFUGEES_BUTTER_BAR && this.Ba.setVisible(!1);
        this.W = null;
        a.b && (this.W = new qU,
        sU(this.W, this.c),
        tU(this.W, TU(this)),
        uU(this.W, UU(this)));
        new nV(yX(this),this);
        this.Zb = GX(this);
        this.N = new fN(this,MSG_FORMAL,MSG_INFORMAL,!1,ENABLE_FORMALITY);
        this.N.P(N(Mo));
        gN(this.N);
        KL && (this.rd = new OW(new nT(this.c),this,this,this,this.b,SIGNED_IN,this,this.c));
        this.Ie = null;
        GL && (this.Eh = new OT,
        this.ac = new QT,
        this.ac.P(N(fp)),
        this.ac.setVisible(!1),
        this.wa = new pN(k),
        b = N(xv),
        this.wa.P(b),
        K(b, hv),
        CX(this.wa, VU(this)),
        this.Ie = new gR(mw,this.Eh,this.ac,this.g,this.wa,this.sa,this.a,new MT(mw),4,!0,MSG_FLAG_SUGGESTION,this.Bc,!1));
        this.Rj = new pR(this.g,this.Bc,N(so),this.Ie,F(this.yd, this, !0, void 0),F(this.La.B, this.La));
        T(this, Bv, this.b.Cj, !1, this.b);
        this.Da = null;
        FL && (c = document.createElement(q),
        R(c, !1),
        BC(c, N(yu)),
        this.Da = new aV(this,this,this.c),
        this.Da.P(c));
        this.vd = null;
        uF(this.vh, 6E4, this);
        this.C = k;
        this.Ua = null;
        a.o && (this.Ua = a.o,
        this.Ua.Qf = this,
        window.location.hash.substr(1) && KF(this.Ua, window.location.hash.substr(1)),
        this.Ua.ke.ba(!0));
        this.Z = [];
        this.Z.push(new bV(yX(this),iq));
        this.Z.push(new bV(this.j,jq));
        this.Z.push(new bV(this.Ae.l(),hq + this.Ae.Sa()));
        this.Z.push(new bV(this.zc.l(),hq + this.zc.Sa()));
        this.Z.push(new bV(this.wd.l(),hq + this.wd.Sa()));
        this.Z.push(new bV(this.Cc.l(),hq + this.Cc.Sa()));
        this.Z.push(new bV(this.td.l(),hq + this.td.Sa()));
        T(window, jj, F(this.Ee, this, jj));
        T(window, $x, F(this.Ee, this, $x));
        JS_LOADED = !0;
        window.jstiming && window.jstiming.load && (window.jstiming.load.tick(zq),
        _csi(mw, TU(this), UU(this), this.g.l()));
        HX(this);
        IX(this)
    };
    G(JX, U);
    JX.prototype.Bh = function() {
        TU(this) != ou && (this.ye = k,
        this.a.o(ou, 4))
    }
    ;
    JX.prototype.Mj = function() {
        this.ac && this.ac.setVisible(!1);
        this.wa && this.wa.b(k)
    }
    ;
    JX.prototype.Tj = function(a) {
        if (!(this.pd || EGGS_JANGO && TU(this) == ou) && a && a.data && 0 < a.data.length) {
            a = a.data[0];
            var b = this.X(a);
            b && jX(this.D, {
                Gd: b,
                Mf: a,
                Xg: WU(this),
                fh: TU(this)
            })
        }
    }
    ;
    var zX = function(a) {
        return dz(a) ? N(a) : null
    };
    C = JX.prototype;
    C.Oh = function() {
        this.g.b(k);
        var a = this.b;
        a.g = null;
        a.I = null;
        ZS(this.b);
        KX(this);
        this.ud.clear();
        tK(this.B, dk, 1, $h);
        this.Ia()
    }
    ;
    C.kj = function() {
        var a = this.o.Ca()
          , b = TU(this)
          , c = UU(this)
          , d = this.c;
        this.Yb.b[c] = a;
        UP(Ju, a, b, c, d)
    }
    ;
    C.vj = function() {
        var a = this.w.Ca()
          , b = TU(this)
          , c = UU(this)
          , d = this.c;
        this.Yb.c[b] = a;
        UP(Pv, a, b, c, d)
    }
    ;
    C.lj = function() {
        var a = dS(N(Cu))
          , b = uV(this.qd);
        b.hl = this.c;
        b.ql = WU(this).length;
        var c = k;
        if (null != N(Io))
            try {
                if (document.execCommand(vk)) {
                    c = gw;
                    dJ(!0);
                    var d = this.ze
                      , e = N(Io);
                    IR(d, e);
                    d.b = e;
                    PR(d, e, void 0)
                } else
                    c = Xl
            } catch (f) {
                c = Pl
            } finally {
                rK(this.B, mw, vk, c, b)
            }
        else
            b.selected = a,
            this.B.log(Yu, b)
    }
    ;
    C.mj = function() {
        if (uR(this.Wb.b))
            this.Wb.setVisible(!1);
        else {
            var a = Zp + TU(this) + id + UU(this) + id + Ez(WU(this))
              , a = HJ(eK, {
                oh: $S(this.b, void 0),
                sj: MSG_SHARE_MODULE_TITLE,
                rj: MSG_SHARE_MODULE_EMAIL,
                url: Ez(a)
            });
            YT(this.Wb, a);
            this.Wb.setVisible(!0);
            var b = this.B;
            rK(b, mw, dv, dv, {
                sl: TU(this),
                tl: UU(this),
                hl: this.c,
                ql: WU(this).length
            });
            a = O(fv);
            a = kC(t, k, a);
            cA(a, function(a) {
                T(a, w, function() {
                    rK(b, mw, dv, a.className.split(l)[0], {
                        sl: TU(this),
                        tl: UU(this),
                        hl: this.c,
                        ql: WU(this).length
                    })
                }, !1, this)
            }, this)
        }
    }
    ;
    var FX = function(a) {
        var b = new WT;
        b.c.b = a;
        ZT(b);
        NI(b.c, 1, 0, void 0);
        b.g = !0;
        b.$();
        return b
    };
    JX.prototype.Ia = function() {
        HB || NF || OF || PF || yX(this).focus()
    }
    ;
    JX.prototype.yh = function() {
        this.Ia()
    }
    ;
    var CX = function(a, b) {
        if (a) {
            var c = a.l();
            FA(b) ? (c.dir = Mu,
            Q(c, Zs, Qd),
            Q(c, $s, k)) : (c.dir = Br,
            Q(c, $s, Qd),
            Q(c, Zs, k))
        }
    }
      , EX = function(a, b) {
        if (a) {
            var c = a.l();
            FA(b) ? (Q(c, Gu, k),
            Q(c, or, Fd)) : (Q(c, or, k),
            Q(c, Gu, Fd))
        }
    }
      , BX = function(a) {
        var b = VU(a);
        TU(a) == Ui && b != Ui ? (b = source_language_detected.replace(/%\d\$s/g, a.X(b)),
        sP(a.K, b)) : sP(a.K, detect_language)
    };
    JX.prototype.wh = function() {
        EGGS_JANGO && (this.zd && VU(this) != ou ? (this.ye = WU(this),
        this.g.b(this.Ig),
        this.zd = !1) : this.zd || VU(this) != ou || (this.Ig = WU(this),
        this.g.b(this.ye),
        this.zd = !0));
        gX(this.ud, TU(this));
        NU(this);
        IX(this);
        null != this.W && tU(this.W, TU(this));
        CX(this.g, VU(this));
        CX(this.wa, VU(this));
        EX(this.J, VU(this));
        var a = WU(this, !0)
          , b = TU(this);
        this.Ha && this.Ha.update(a, b);
        LX(this)
    }
    ;
    JX.prototype.dj = function() {
        BX(this);
        IX(this);
        CX(this.g, VU(this));
        CX(this.wa, VU(this));
        EX(this.J, VU(this))
    }
    ;
    JX.prototype.Ch = function() {
        null != this.lb && $P(this.lb, UU(this));
        IX(this);
        null != this.W && uU(this.W, UU(this));
        CX(this.H, UU(this));
        EX(this.Hb, UU(this));
        LX(this)
    }
    ;
    var LX = function(a) {
        var b = !0;
        MX(a) && (b = !1);
        0 == $S(a.b, void 0).length && (b = !1);
        a.Zb.setVisible(b)
    }
      , MX = function(a) {
        return EGGS_JANGO && (TU(a) == ou || UU(a) == ou)
    };
    JX.prototype.Oj = function(a) {
        this.J && this.J.setVisible(WU(this) ? !0 : !1);
        a.j == ct && (NX(this, WU(this)) ? this.Qe++ : this.Fe++);
        this.dispatchEvent(new kN(a.text))
    }
    ;
    var IX = function(a) {
        var b = a.F[Vk];
        null != b && (a = !WU(a),
        b.setVisible(a))
    };
    JX.prototype.Qj = function() {
        this.ze && (MR(this.ze, N(Io)),
        dJ(!1));
        if (VU(this) != Ui) {
            var a = WU(this, !0)
              , b = VU(this);
            this.Ha && this.Ha.update(a, b)
        }
        a = $S(this.b, void 0);
        b = UU(this);
        this.Ab && this.Ab.update(a, b);
        ENABLE_REFUGEES_BUTTER_BAR && (TU(this) == Ai && UU(this) == Tk || TU(this) == Tk && UU(this) == Ai || TU(this) == Wl && UU(this) == Tk || TU(this) == Tk && UU(this) == Wl || TU(this) == x && UU(this) == Ai || TU(this) == Ai && UU(this) == x || TU(this) == Wl && UU(this) == x || TU(this) == x && UU(this) == Wl) ? WU(this) ? this.Ba.setVisible(!0) : this.Ba.setVisible(!1) : ENABLE_REFUGEES_BUTTER_BAR && this.Ba.setVisible(!1)
    }
    ;
    var OX = function(a) {
        yX(a).name == Vx ? (a.form.action = a.xe,
        a.form.enctype = a.form.encoding = yi,
        a.form.method = xm) : null != a.jg && DD(a.jg) ? (a.form.action = a.Dh,
        a.form.enctype = a.form.encoding = gs,
        a.form.method = eu) : (a.form.action = a.Fh,
        a.form.enctype = a.form.encoding = yi,
        2E3 < WU(a).length ? a.form.method = eu : a.form.method = xm)
    };
    JX.prototype.eg = function(a) {
        var b = WU(this);
        this.g.b(b);
        null != this.$b && (CC(this.$b),
        this.$b = null);
        yX(this).name = Vx;
        OX(this);
        a && xX(this.form, ai, cy);
        (a = wL(new iL(window.location,!0))) && xX(this.form, Ti, a);
        this.form.submit()
    }
    ;
    JX.prototype.Si = function(a) {
        a.preventDefault();
        -1 != this.form.action.indexOf(Cd) ? this.$b && Az(Uz(this.$b.value)) || this.form.submit() : this.xe != k && vX(WU(this)) ? this.eg() : (tK(this.B, wv, Jj),
        this.yd(!1),
        this.Uj && this.Ie.clear())
    }
    ;
    var PX = function(a) {
        0 != a.j.innerHTML.length ? a.j.innerHTML += ed : uF(function() {
            this.La.c && 0 == this.j.innerHTML.length && (this.j.innerHTML = tr_in)
        }, 1500, a)
    }
      , KX = function(a) {
        zC(a.j);
        a.j.lang = k;
        a.A.setVisible(!1);
        a.a && LN(a.a, null);
        a.M && zC(a.M);
        a.I && zC(a.I);
        a.Uc && PC(a.Uc, Fd);
        a.kc && PC(a.kc, Fd);
        a.Tc && PC(a.Tc, Fd);
        a.lc && PC(a.lc, Fd);
        a.o && a.o.setVisible(!1);
        a.w && a.w.setVisible(!1);
        a.aa.a && a.aa.a.setVisible(!1);
        a.qa && a.qa.setVisible(!1);
        null != a.Va && a.Va.setVisible(!1);
        a.Ab && RM(a.Ab, !1);
        a.Ha && RM(a.Ha, !1);
        BX(a);
        a.J && a.J.setVisible(!1);
        a.Da && a.Da.setVisible(!1);
        null != a.rd && VW(a.rd, !1);
        a.Zb && a.Zb.setVisible(!1);
        a.N && (a.N.setVisible(!1),
        hN(a.N));
        a.D && a.D.setVisible(!1);
        a.Ac && R(a.Ac, !0);
        IX(a);
        a.dispatchEvent(new iN)
    };
    JX.prototype.yd = function(a) {
        this.Rj.reset(a);
        var b = TU(this)
          , c = UU(this);
        if (null != this.sa) {
            var d = this.sa;
            aQ(d) && (tK(d.j, yx),
            tK(d.j, pq, 1));
            d.isEnabled() && 0 <= d.b.indexOf(Ic) && (tK(d.j, ly),
            tK(d.j, pq, 2));
            d.isEnabled() && JP(d.b) && (tK(d.j, $p),
            tK(d.j, pq, 5))
        }
        this.o && this.o.Ca() && tK(this.B, Ju, this.o.isVisible());
        this.w && this.w.Ca() && tK(this.B, Pv, this.w.isVisible());
        d = this.qd;
        tK(d.b, Rv, d.a.I);
        tK(d.b, Ax, d.a.N);
        if (0 == WU(this).length)
            KX(this);
        else {
            if (this.Ua) {
                var d = this.Ua
                  , e = TU(this)
                  , f = UU(this)
                  , g = WU(this)
                  , g = (null != e ? e : Ui) + id + (null != f ? f : x) + id + Ez(g)
                  , f = (new Date).getTime();
                2E3 < f - d.a ? IF(d.ke, g, !1) : IF(d.ke, g, !0);
                d.a = a ? f : 0
            }
            a = new window.jstiming.Timer;
            a.name = Ki;
            PX(this);
            d = new nL;
            d.g(new nL(xK(this.B)));
            d.g(new nL(wX()));
            g = this.g;
            f = g.R;
            g.R = 0;
            yL(d, Zq, f);
            null != this.N.b && yL(d, Cw, this.N.b);
            g = WU(this);
            f = null != this.D && this.D.w;
            YL(this.La, b, c, this.c, g, F(this.Gh, this, g, a), f, ENCODING, d);
            a = !1;
            NX(this, g) ? (this.Ee(),
            a = !0) : g.length >= this.C.length && (a = !0);
            a && (this.C = g,
            this.hj = b,
            this.ij = c)
        }
    }
    ;
    var NX = function(a, b) {
        return a.C != k && b[0] != a.C[0] && b[b.length - 1] != a.C[a.C.length - 1]
    };
    JX.prototype.Ee = function(a) {
        if (this.C != k) {
            var b = {
                sl: this.hj,
                tl: this.ij,
                ql: this.C.length
            };
            64 < this.C.length && (this.C = this.C.substr(0, 64));
            b.q = this.C;
            a && (b[a] = 1);
            b.pc = this.Fe;
            this.Fe = this.Qe;
            this.Qe = 0;
            this.B.log(rm, b);
            this.C = k
        }
    }
    ;
    JX.prototype.Gh = function(a, b, c) {
        this.D && this.D.setVisible(!1);
        if (null != c)
            try {
                this.pd = vX(a);
                TU(this) == Ui && null != c.a[2] && (this.pd || null != c.a[3] ? NN(this.a, k) : NN(this.a, dH(c)));
                var d;
                if (null != c.a[8]) {
                    var e = c.a[8];
                    d = e ? new KG(e) : gH
                } else
                    d = null;
                QX(this, d);
                var f = UU(this);
                if (null != c.a[9]) {
                    b.tick(Vh, void 0, 1);
                    var g = c.a[9];
                    b.tick(Tv, Vh, (null != g ? g : 0) + 1)
                }
                this.j.parentNode.parentNode.style.display = k;
                vK(this.B, dx);
                RN(this.a);
                var g = []
                  , m = [];
                d = [];
                this.j.lang = f;
                zC(this.j);
                var n = dH(c)
                  , e = !1;
                if (0 < kH(c))
                    for (var e = !0, p = 0; p < kH(c); p++) {
                        var r = lH(c, p)
                          , e = e & 1 == aH(r);
                        if (null != r.pb[2]) {
                            var u = r.pb[2];
                            g.push(null != u ? u : k)
                        }
                        null != r.pb[3] && m.push($G(r));
                        null != r.pb[0] && YG(r) && d.push(aH(r))
                    }
                u = k;
                if (ZS(this.b, c.b(), TU(this) == ou ? ou : n, f, this.c))
                    u = $S(this.b);
                else
                    for (zC(this.j),
                    p = 0; p < kH(c); p++) {
                        var r = lH(c, p)
                          , A = P(Cv, {
                            title: MX(this) ? k : ZG(r)
                        });
                        A.innerHTML = Gz(Oz(YG(r)));
                        this.j.appendChild(A);
                        u += YC(A)
                    }
                null != this.Zb && !MX(this) && this.Zb.setVisible(!0);
                null != this.N && this.N.update(n, f, WU(this));
                this.Kg(f, g.join(l));
                var D = m.join(l);
                if (this.I && this.w)
                    if (EGGS_JANGO && TU(this) == ou)
                        zC(this.I),
                        this.w.setVisible(!1);
                    else {
                        var V = Gz(Oz(Uz(D)));
                        if (Az(V))
                            zC(this.I),
                            this.w.setVisible(!1);
                        else {
                            var Y = FA(n) ? Gu : or;
                            this.I.innerHTML = V;
                            this.I.style.textAlign = Y;
                            if (n != this.Ah) {
                                var rb, $a = this.Yb;
                                rb = dz($a.c[n]) ? !!$a.c[n] : QP(n, this.c);
                                this.w.ra(rb);
                                this.Ah = n
                            }
                            this.w.setVisible(!0)
                        }
                    }
                if (null != c.a[7] && !MX(this)) {
                    var oa = fH(c).a[0]
                      , gb = fH(c).a[1]
                      , Ha = fH(c).a[5];
                    jX(this.D, {
                        Rh: null != oa ? oa : k,
                        Gd: null != gb ? gb : k,
                        $f: null != Ha ? Ha : !1,
                        Xg: WU(this),
                        Ve: kG(fH(c).a, 2),
                        fh: TU(this)
                    });
                    this.D.w = !0
                }
                this.dispatchEvent(new iN);
                if (this.Uc && this.kc && this.Tc && this.lc) {
                    for (D = A = r = p = 0; D < d.length; D++)
                        0 == d[D] ? p++ : 1 == d[D] ? r++ : 10 == d[D] && A++;
                    this.Uc.innerHTML = (r + A).toString();
                    this.kc.innerHTML = r.toString();
                    this.Tc.innerHTML = A.toString();
                    this.lc.innerHTML = p.toString()
                }
                if (!MX(this)) {
                    var Rj = Dz(u);
                    if (this.xe != k && this.pd && (null != this.Be && this.Be.Xh(),
                    this.j.innerHTML = Le + url_hyperlink_tooltip + Na + Oz(a) + me,
                    0 != Rj.length && Rj != a)) {
                        var sf = P(Cv, {
                            title: a
                        });
                        sf.innerHTML = Gz(Oz(ea + Rj + Pb));
                        this.j.appendChild(sf)
                    }
                }
                var Jr = u.length;
                this.Ac && R(this.Ac, !1);
                this.j.parentNode.dir = FA(f) ? Mu : Br;
                50 >= Jr ? (K(this.j, hv),
                K(yX(this), hv),
                K(this.xd.a, hv),
                null != this.H && K(this.H.l(), hv)) : (L(this.j, hv),
                L(yX(this), hv),
                L(this.xd.a, hv),
                null != this.H && L(this.H.l(), hv));
                IX(this);
                b.tick(ju);
                null != this.T && (this.B.log(sm, {
                    ttl: this.Gg - this.T,
                    ttt: (new Date).getTime() - this.T
                }),
                this.T = null);
                var Rm = this.A
                  , UX = TU(this) == ou ? ou : n;
                Rm.c.reset();
                Rm.c.push(a, UX, f, c);
                null != this.rd && VW(this.rd, !MX(this) && null == c.a[3]);
                this.aa.a && this.aa.a.setVisible(!MX(this) && null == c.a[3]);
                this.qa && this.qa.setVisible(!MX(this) && null == c.a[3]);
                this.Da && this.Da.setVisible(!MX(this));
                null != this.Va && this.Va.setVisible(e);
                var Ng = {
                    sl: n,
                    tl: f,
                    otext: a,
                    ttext: u,
                    ql: a.length
                }, Ok;
                for (Ok in Ng)
                    mz(Ng[Ok]) && 64 < Ng[Ok].length && (Ng.tr = 1,
                    Ng[Ok] = Ng[Ok].substr(0, 64));
                this.B.c(dx, 5E3, void 0, Ng);
                var VX = Ez(a).length;
                a = {};
                a.sl = n;
                a.tl = f;
                a.size = VX;
                a.e = EXPERIMENT_IDS.join(Wb);
                b.tick(Cs);
                window.jstiming.sn = tx;
                window.jstiming.report(b, a)
            } catch (Og) {
                null.Pj(Bf, Og),
                b = {},
                Og.name && (b.name = Og.name),
                Og.message && (b.message = Og.message),
                Og.stack && (b.stack = Og.stack.substr(0, 2E3)),
                this.B.log(rx, b),
                OX(this),
                N(Xq).value = Ol,
                this.form.submit()
            }
    }
    ;
    JX.prototype.nj = function(a) {
        var b = $S(a.target)
          , c = a.target.Ra;
        a = this.La;
        var d = c
          , c = F(this.Kg, this, c)
          , e = new nL
          , f = new nL;
        window.EGGS_JANGO && d == ou && (DL(e, pv, ou),
        d = x);
        DL(e, fk, a.b);
        DL(e, mv, d);
        d = a.a + Ad;
        DL(e, vl, Hu);
        DL(f, nu, b);
        WL(a, d, e, f, F(a.o, a, c));
        this.dispatchEvent(new iN)
    }
    ;
    JX.prototype.Kg = function(a, b) {
        if (this.M && this.o)
            if (EGGS_JANGO && UU(this) == ou)
                zC(this.M),
                this.o.setVisible(!1);
            else {
                var c = Gz(Oz(Uz(b)));
                if (Az(c))
                    zC(this.M),
                    this.o.setVisible(!1);
                else {
                    var d = FA(a) ? Gu : or;
                    this.M.innerHTML = c;
                    this.M.style.textAlign = d;
                    a != this.Sj && (c = this.Yb,
                    c = dz(c.b[a]) ? !!c.b[a] : QP(a, this.c),
                    this.o.ra(c),
                    this.Sj = a);
                    this.o.setVisible(!0)
                }
            }
    }
    ;
    var HX = function(a) {
        for (var b = a.qd, c = uV(b), d = [], e = [], f = 0; f < b.a.c.length; ++f)
            d.push(b.a.c[f]);
        for (f = 0; f < b.a.g.length; ++f)
            e.push(b.a.g[f]);
        c.slh = d.join(Ky);
        c.tlh = e.join(Ky);
        b = b.a;
        d = [];
        e = [];
        for (f = 0; f < b.c.length; ++f) {
            var g = b.c[f];
            -1 == bA(d, g) && (d.push(g),
            e.push(g))
        }
        for (f = 0; f < b.g.length; ++f)
            g = b.g[f],
            -1 == bA(e, g) && e.push(g);
        c.soph = 2 < d.length && 3 < e.length;
        c.hl = a.c;
        null != a.T && (a.Ke = (new Date).getTime() - a.T,
        c.ttnc = a.Ke);
        c.uetrans = a.b.Z;
        c.eotf = a.Bc;
        a.B.log(Np, c)
    }
      , AX = function(a) {
        var b = FEATURE_STICKINESS;
        a.Ce = b;
        b = new wU(b);
        if (null != b.a[2]) {
            var c = b.a[2]
              , d = a.Yb
              , c = c ? new pG(c) : BU;
            d.a = {};
            d.a[ho] = new MP;
            for (var e, f = 0; f < Z(c.a, 3); ++f)
                if (e = f,
                e = new nG(kG(c.a, 3)[e]),
                0 == !!rG(e))
                    for (var g in d.a)
                        d.a[g].update(qG(e), !1, k);
            d.c = {};
            for (f = 0; f < Z(c.a, 1); ++f)
                g = f,
                e = new nG(kG(c.a, 1)[g]),
                d.c[qG(e)] = !!rG(e);
            d.b = {};
            for (f = 0; f < Z(c.a, 2); ++f)
                g = f,
                e = new nG(kG(c.a, 2)[g]),
                d.b[qG(e)] = !!rG(e);
            for (f = 0; f < Z(c.a, 9); ++f)
                g = f,
                g = new oG(kG(c.a, 9)[g]),
                (null != g.a[3] ? TP(d, vG(g), !0) : TP(d, ho, !0)).update(sG(g), tG(g), uG(g))
        }
        d = b.a[1];
        a.Bc = null != d ? d : !1;
        c = AU(b);
        f = [];
        d = [];
        for (g = 0; g < Z(c.ob, 0); ++g)
            e = xU(c, g),
            f.push(e);
        g = a.a;
        for (e = 0; e < f.length; ++e)
            g.c.push(f[e]);
        for (g = 0; g < Z(c.ob, 1); ++g)
            e = yU(c, g),
            d.push(e);
        c = a.a;
        for (f = 0; f < d.length; ++f)
            c.g.push(d[f]);
        if (a.Lg) {
            b = AU(b);
            d = [];
            c = [];
            for (f = 0; f < Z(b.ob, 0); ++f)
                d.push(xU(b, f));
            for (f = 0; f < Z(b.ob, 1); ++f)
                c.push(yU(b, f));
            null != b.ob[4] && (d = b.ob[4],
            d = [null != d ? d : k]);
            null != b.ob[5] && (c = b.ob[5],
            c = [null != c ? c : k]);
            2E3 < WU(a).length || window.location.href.match(/^[^#]+(\?|&)sl=([A-Za-z-]+)/) || (window.location.href.match(/^[^#]+(\?|&)tl=([A-Za-z-]+)/) ? nP(a.K, Ui) : (b = b.ob[3],
            null != b && b ? nP(a.K, Ui) : nP(a.K, d[0]),
            nP(a.R, c[0])));
            a.a.o(TU(a));
            a.a.B(UU(a))
        }
        QX(a, null);
        RN(a.a);
        b = a.a;
        MN(b.K, b.c, b.A, b.a);
        a = a.a;
        MN(a.M, a.g, a.H, a.b)
    }
      , QX = function(a, b) {
        if (a.a) {
            if (b) {
                for (var c = [], d = 0; d < Z(b.Rf, 0); ++d) {
                    var e;
                    e = d;
                    e = kG(b.Rf, 0)[e];
                    c.push(e)
                }
                LN(a.a, c)
            } else
                LN(a.a, null);
            c = a.a;
            d = c.a == Ui ? k : c.a;
            e = UN(c.c, d);
            e.push(c.a);
            c.F = nA(e);
            e = e.concat(UN(c.D.a, d));
            c.T.update(e);
            c = a.a;
            d = UN(c.g, c.b);
            d.push(c.b);
            c.J.update(d)
        }
    }
      , NU = function(a) {
        null != a.sa && (EGGS_JANGO && TU(a) == ou ? R(a.sa.c, !1) : (R(a.sa.c, !0),
        $P(a.sa, TU(a))))
    }
      , DX = function(a) {
        var b = kC(yf, null, N(Wu));
        b && 1 == b.length && (b = b[0],
        T(b, w, function(a) {
            a.preventDefault();
            a = this.gg;
            OU(a, !1);
            LU(a, !0);
            KU(Jo, !1, !0);
            KU(Wu, !1, !1);
            OX(a.a)
        }, !1, a));
        (b = kC(yf, null, N(Xu))) && 1 == b.length && (b = b[0],
        T(b, w, function(a) {
            a.preventDefault();
            a = this.gg;
            LU(a, !1);
            OU(a, !0);
            KU(Jo, !0, !0);
            KU(Wu, !0, !1);
            OX(a.a)
        }, !1, a))
    }
      , LF = function(a, b, c, d, e) {
        a.Lg = !1;
        if (b) {
            var f = void 0;
            e == Mx && (f = 3);
            a.a.o(b, f)
        }
        c && a.a.B(c);
        WU(a) != d && a.g.b(d);
        e && tK(a.B, wv, e);
        a.yd(!1)
    };
    JX.prototype.X = function(a) {
        return null != a ? rP(this.K, a) : rP(this.K)
    }
    ;
    JX.prototype.mb = function(a) {
        return null != a ? rP(this.R, a) : rP(this.R)
    }
    ;
    var VU = function(a) {
        var b = a.K.U();
        a = a.a.j;
        b == Ui && a != k && (b = a);
        return b
    }
      , TU = function(a) {
        return a.K.U()
    }
      , UU = function(a) {
        return a.R.U()
    }
      , yX = function(a) {
        return a.g.l()
    }
      , WU = function(a, b) {
        return b && a.D && a.D.b ? Dz(a.D.c) : Dz(a.g.U())
    }
      , GX = function(a) {
        var b = P(q, {
            id: Ko,
            style: ml
        });
        AC(b, N(Vo));
        var c = new AI(MSG_EDIT_POPUP,new nJ(fx));
        c.P(b);
        yC(b, MSG_SUGGEST_AN_EDIT);
        c.setVisible(!1);
        T(c, v, a.yj, !1, a);
        return c
    };
    JX.prototype.yj = function() {
        (!EGGS_JANGO || VU(this) != ou && UU(this) != ou) && WU(this) && (dT(this.b),
        this.B.log(Fl))
    }
    ;
    JX.prototype.vh = function() {
        JL && (this.vd = new kX(this.c,this,this.Rg),
        this.vd.$(document.body))
    }
    ;
    JX.prototype._submitUrl = JX.prototype.eg;
    function _csi(a, b, c, d) {
        var e = {};
        0 < d.value.length && (0 < b.length && (e.sl = b),
        0 < c.length && (e.tl = c),
        e.size = d.value.length);
        null != window.gbar && null != window.gbar.bv && (null != window.gbar.bv.m && EXPERIMENT_IDS.push(wm + window.gbar.bv.m),
        null != window.gbar.bv.e && EXPERIMENT_IDS.push(window.gbar.bv.e));
        window.location.protocol == Tp && EXPERIMENT_IDS.push(Sp);
        e.e = EXPERIMENT_IDS.join(Wb);
        b = window.jstiming.load;
        b.name = a;
        window.jstiming.sn = tx;
        window.jstiming.report(b, e);
        try {
            window[RX.a] && window[RX.a].resT && window[RX.a].resT()
        } catch (f) {
            null.Wj(Jg, f)
        }
    }
    ez("_csi", _csi);
    var RX = function() {
        var a = new RD
          , a = F(a.a, a);
        window.gbar && window.gbar.elc && (window.gbar.elc(a),
        window.gbar.elr && a(window.gbar.elr()));
        E.h = new JF;
        a = new SD;
        a.o = E.h;
        a.M = Cu;
        a.X = WEB_TRANSLATION_PATH;
        a.W = TEXT_TRANSLATION_PATH;
        a.J = FILE_TRANSLATION_PATH;
        a.Z = null != window.INPUT_SUGGESTION_SERVER_URL ? window.INPUT_SUGGESTION_SERVER_URL : k;
        a.I = Iv;
        a.g = ap;
        a.j = tp;
        a.D = cm;
        a.A = am;
        a.K = (new Date).getTime();
        a.C = MAX_ALTERNATIVES_ROUNDTRIP_RESULTS;
        a.B = !0;
        a.H = LOW_CONFIDENCE_THRESHOLD;
        EGGS_JANGO && (a.b = !0);
        E.ctr = new JX(a)
    };
    RX.a = "external";
    ez("Init", RX);
    if (window.jstiming) {
        window.jstiming.Wc = {};
        window.jstiming.Df = 1;
        var SX = function(a, b, c) {
            var d = a.t[b]
              , e = a.t.start;
            if (d && (e || c))
                return d = a.t[b][0],
                void 0 != c ? e = c : e = e[0],
                Math.round(d - e)
        }
          , TX = function(a, b, c) {
            var d = k;
            window.jstiming.srt && (d += Db + window.jstiming.srt,
            delete window.jstiming.srt);
            window.jstiming.pt && (d += Eb + window.jstiming.pt,
            delete window.jstiming.pt);
            try {
                window.external && window.external.tran ? d += Ib + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += Ib + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += Ib + window.chrome.csi().tran)
            } catch (u) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += zb);
                if (e().wasNpnNegotiated) {
                    var d = d + xb
                      , f = e().npnNegotiatedProtocol;
                    f && (d += yb + (encodeURIComponent || escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += ib)
            }
            var g = a.t, m = g.start, e = [], f = [], n;
            for (n in g)
                if (n != Xv && 0 != n.indexOf(Qh)) {
                    var p = g[n][1];
                    p ? g[p] && f.push(n + dd + SX(a, n, g[p][0])) : m && e.push(n + dd + SX(a, n))
                }
            delete g.start;
            if (b)
                for (var r in b)
                    d += cb + r + mf + b[r];
            (b = c) || (b = Tp == document.location.protocol ? Wp : Rp);
            return [b, vf, Cb + (window.jstiming.sn || tx) + fb, a.name, f.length ? vb + f.join(Wb) : k, d, Bb, e.join(Wb)].join(k)
        }
          , WX = function(a, b, c) {
            a = TX(a, b, c);
            if (!a)
                return k;
            b = new Image;
            var d = window.jstiming.Df++;
            window.jstiming.Wc[d] = b;
            b.onload = b.onerror = function() {
                window.jstiming && delete window.jstiming.Wc[d]
            }
            ;
            b.src = a;
            b = null;
            return a
        };
        window.jstiming.report = function(a, b, c) {
            if (document.webkitVisibilityState == fu) {
                var d = !1
                  , e = function() {
                    if (!d) {
                        b ? b.prerender = Gd : b = {
                            prerender: Gd
                        };
                        var f;
                        document.webkitVisibilityState == fu ? f = !1 : (WX(a, b, c),
                        f = !0);
                        f && (d = !0,
                        document.removeEventListener(qy, e, !1))
                    }
                };
                document.addEventListener(qy, e, !1);
                return k
            }
            return WX(a, b, c)
        }
    }
    ;
})();
window.jstiming.load.tick('jl');
