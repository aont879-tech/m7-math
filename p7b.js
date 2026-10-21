/* ພາກທີ 7 (ສ່ວນ 2): ສັງຄະນິດ ແລະ ການນຳໃຊ້ (ບົດ 36–44) */
M7.ch.push({
n:36, part:7, title:"ສັງຄະນິດຂອງຕຳລາໄຕມຸມມິຕິ (ຕໍ່)",
goal:R`ຄິດໄລ່ສັງຄະນິດຂອງຜົນຄູນໄຕມຸມມິຕິ, ກຳລັງຄີກຂອງ $\sin,\cos$ ແລະ ສັງຄະນິດທີ່ນຳໄປສູ່ $\arcsin$.`,
slides:[
[R`ສູດປ່ຽນຜົນຄູນເປັນຜົນບວກ`, R`<div class="box"><span class="lbl">ສູດ</span>$\sin a\cos b=\frac12[\sin(a+b)+\sin(a-b)]$<br>$\cos a\cos b=\frac12[\cos(a+b)+\cos(a-b)]$<br>$\sin a\sin b=\frac12[\cos(a-b)-\cos(a+b)]$</div>
<div class="ex"><span class="lbl">$\int\sin3x\cos x\,dx$</span>$=\frac12\int(\sin4x+\sin2x)dx=-\frac{\cos4x}8-\frac{\cos2x}4+C$</div>`],
[R`ກຳລັງຄີກຂອງ sin ແລະ cos`, R`<p>ແຍກອອກໜຶ່ງໂຕ ແລ້ວໃຊ້ $\sin^2x+\cos^2x=1$:</p>
<div class="ex"><span class="lbl">$\int\sin^3x\,dx$</span>$=\int(1-\cos^2x)\sin x\,dx$, $u=\cos x$:<br>$=-\cos x+\frac{\cos^3x}3+C$</div>
<div class="ex"><span class="lbl">$\int\cos^3x\,dx$</span>$=\int(1-\sin^2x)\cos x\,dx=\sin x-\frac{\sin^3x}3+C$</div>`],
[R`ສັງຄະນິດທີ່ໃຫ້ arcsin`, R`<div class="box green"><span class="lbl">ສູດ</span>$$\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+C\qquad\int\frac{dx}{\sqrt{a^2-x^2}}=\arcsin\frac xa+C$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int\frac{dx}{\sqrt{4-x^2}}=\arcsin\frac x2+C$<br>$\int\frac{dx}{\sqrt{1-9x^2}}=\frac13\arcsin3x+C$<br>$\int\frac{dx}{\sqrt{2x-x^2}}=\int\frac{dx}{\sqrt{1-(x-1)^2}}=\arcsin(x-1)+C$</div>`],
[R`ກຳລັງຄູ່: $\sin^4x$`, R`<div class="ex"><span class="lbl">$\int\cos^4x\,dx$</span>$\cos^4x=\left(\frac{1+\cos2x}2\right)^2=\frac14\left(1+2\cos2x+\frac{1+\cos4x}2\right)$<br>$=\frac38x+\frac{\sin2x}4+\frac{\sin4x}{32}+C$</div>
<div class="box red"><span class="lbl">ກົດເລືອກວິທີ</span>ກຳລັງຄີກ → ແຍກໜຶ່ງໂຕ + ປ່ຽນຕົວປ່ຽນ · ກຳລັງຄູ່ → ສູດຫຼຸດກຳລັງ · ຜົນຄູນ sin/cos ຂອງມຸມຕ່າງກັນ → ສູດປ່ຽນເປັນຜົນບວກ</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ຜົນຄູນ → ຜົນບວກ</li><li>$\sin^3,\cos^3$: ແຍກ 1 ໂຕ ແລ້ວ $u=\cos x$ ຫຼື $u=\sin x$</li><li>$\int\frac{dx}{\sqrt{a^2-x^2}}=\arcsin\frac xa+C$</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int\cos3x\cos x\,dx$.`, R`$\frac12\int(\cos4x+\cos2x)dx=\frac{\sin4x}8+\frac{\sin2x}4+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\sin5x\sin2x\,dx$.`, R`$\frac12\int(\cos3x-\cos7x)dx=\frac{\sin3x}6-\frac{\sin7x}{14}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\sin^3x\cos^2x\,dx$.`, R`$\int(1-\cos^2x)\cos^2x\sin x\,dx=-\frac{\cos^3x}3+\frac{\cos^5x}5+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{\sqrt{9-x^2}}$.`, R`$\arcsin\frac x3+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x\,dx}{\sqrt{1-x^2}}$.`, R`$-\sqrt{1-x^2}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{\sqrt{1-4x^2}}$.`, R`$\frac12\arcsin2x+C$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int\sin2x\cos3x\,dx$.`, R`$\frac12\int(\sin5x-\sin x)dx=-\frac{\cos5x}{10}+\frac{\cos x}2+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\cos^3x\,dx$.`, R`$\sin x-\frac{\sin^3x}3+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\sin^5x\,dx$.`, R`$-\cos x+\frac23\cos^3x-\frac{\cos^5x}5+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{\sqrt{4-(x+1)^2}}$.`, R`$\arcsin\frac{x+1}2+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{2x+3}{\sqrt{1-x^2}}dx$.`, R`$-2\sqrt{1-x^2}+3\arcsin x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\sin^4x\,dx$.`, R`$\frac38x-\frac{\sin2x}4+\frac{\sin4x}{32}+C$.`]
],
quiz:[
[R`$\sin a\cos b=$`, [R`$\frac12[\sin(a+b)+\sin(a-b)]$`,R`$\sin(a+b)$`,R`$\frac12[\cos(a-b)-\cos(a+b)]$`,R`$\sin a+\cos b$`],0,""],
[R`$\int\frac{dx}{\sqrt{1-x^2}}$`, [R`$\arctan x+C$`,R`$\arcsin x+C$`,R`$\ln|x|+C$`,R`$\sqrt{1-x^2}+C$`],1,""],
[R`$\int\frac{dx}{\sqrt{4-x^2}}$`, [R`$\arcsin\frac x2+C$`,R`$\frac12\arcsin x+C$`,R`$2\arcsin x+C$`,R`$\arctan\frac x2+C$`],0,""],
[R`$\int\sin^3x\,dx$ ຄວນວາງ $u=$`, [R`$\sin x$`,R`$\cos x$`,R`$\sin^2x$`,R`$\tan x$`],1,""],
[R`$\int\cos^3x\,dx$`, [R`$\sin x-\frac{\sin^3x}3+C$`,R`$\frac{\cos^4x}4+C$`,R`$\cos x-\frac{\cos^3x}3+C$`,R`$3\cos^2x\sin x+C$`],0,""],
[R`$\int\sin3x\cos x\,dx$`, [R`$-\frac{\cos4x}8-\frac{\cos2x}4+C$`,R`$\frac{\sin^2 3x}{6}+C$`,R`$-\cos3x\sin x+C$`,R`$\frac{\cos4x}8+C$`],0,""],
[R`$\int\frac{dx}{\sqrt{1-9x^2}}$`, [R`$\frac13\arcsin3x+C$`,R`$3\arcsin3x+C$`,R`$\arcsin\frac x3+C$`,R`$\frac19\arcsin x+C$`],0,""],
[R`ກຳລັງຄູ່ຂອງ $\sin x$ ໃຊ້ວິທີ:`, ["ແຍກໜຶ່ງໂຕ","ສູດຫຼຸດກຳລັງ","ສັງຄະນິດພາກສ່ວນ","ແຍກເສດສ່ວນ"],1,""]
]});

M7.ch.push({
n:37, part:7, title:"ສັງຄະນິດພາກສ່ວນ",
goal:R`ເຂົ້າໃຈສູດສັງຄະນິດພາກສ່ວນ ແລະ ນຳໃຊ້ຄິດໄລ່ສັງຄະນິດຂອງຜົນຄູນ ເຊັ່ນ $xe^x,\ x\sin x,\ \ln x$.`,
slides:[
[R`ສູດສັງຄະນິດພາກສ່ວນ`, R`<p>ຈາກ $(uv)'=u'v+uv'$, ສັງຄະນິດທັງສອງຟາກ:</p><div class="box green"><span class="lbl">ສູດ</span>$$\int u\,dv=uv-\int v\,du$$</div>
<p>ໃຊ້ເມື່ອສັງຄະນິດແມ່ນ <b>ຜົນຄູນຂອງສອງຕຳລາຕ່າງຊະນິດ</b> ທີ່ປ່ຽນຕົວປ່ຽນບໍ່ໄດ້.</p>`],
[R`ເລືອກ $u$ ແນວໃດ?`, R`<div class="box"><span class="lbl">ລຳດັບ LIATE (ເລືອກ $u$ ຕາມລຳດັບນີ້)</span><b>L</b> ໂລກາຣິດ → <b>I</b> ຕຳລາປີ້ນໄຕມຸມ → <b>A</b> ພະຫຸພົດ → <b>T</b> ໄຕມຸມມິຕິ → <b>E</b> ໃຈກຳລັງ</div><p>$u$ ຄວນເປັນສິ່ງທີ່ຫາຜົນຕຳລາແລ້ວງ່າຍຂຶ້ນ; $dv$ ຄວນເປັນສິ່ງທີ່ສັງຄະນິດໄດ້ງ່າຍ.</p>`],
[R`ຕົວຢ່າງ: $\int xe^x\,dx$ ແລະ $\int x\sin x\,dx$`, R`<div class="ex"><span class="lbl">$\int xe^xdx$</span>$u=x,\ dv=e^xdx$ → $du=dx,\ v=e^x$<br>$=xe^x-\int e^xdx=(x-1)e^x+C$</div>
<div class="ex"><span class="lbl">$\int x\sin x\,dx$</span>$u=x,\ dv=\sin x\,dx$ → $v=-\cos x$<br>$=-x\cos x+\int\cos x\,dx=-x\cos x+\sin x+C$</div>`],
[R`ຕົວຢ່າງ: ສັງຄະນິດທີ່ມີ $\ln x$`, R`<div class="ex"><span class="lbl">$\int\ln x\,dx$</span>$u=\ln x,\ dv=dx$ → $du=\frac{dx}x,\ v=x$<br>$=x\ln x-\int dx=x\ln x-x+C$</div>
<div class="ex"><span class="lbl">$\int x\ln x\,dx$</span>$u=\ln x,\ dv=x\,dx$ → $v=\frac{x^2}2$<br>$=\frac{x^2\ln x}2-\int\frac x2dx=\frac{x^2\ln x}2-\frac{x^2}4+C$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\int u\,dv=uv-\int v\,du$</li><li>ເລືອກ $u$ ຕາມ LIATE</li><li>ກວດຄຳຕອບດ້ວຍການຫາຜົນຕຳລາ</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int xe^{-x}dx$.`, R`$-xe^{-x}-e^{-x}+C=-(x+1)e^{-x}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x\cos2x\,dx$.`, R`$\frac{x\sin2x}2+\frac{\cos2x}4+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int(2x+1)e^xdx$.`, R`$(2x+1)e^x-2e^x=(2x-1)e^x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x^2\ln x\,dx$.`, R`$\frac{x^3\ln x}3-\frac{x^3}9+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\ln(x+1)dx$.`, R`$(x+1)\ln(x+1)-x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x\,3^xdx$.`, R`$\frac{x3^x}{\ln3}-\frac{3^x}{\ln^23}+C$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int xe^{2x}dx$.`, R`$\frac{xe^{2x}}2-\frac{e^{2x}}4+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x\cos x\,dx$.`, R`$x\sin x+\cos x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{\ln x}{x^2}dx$.`, R`$-\frac{\ln x}x-\frac1x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int(x-1)\sin x\,dx$.`, R`$-(x-1)\cos x+\sin x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\sqrt x\ln x\,dx$.`, R`$\frac23x^{3/2}\ln x-\frac49x^{3/2}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\log_2x\,dx$.`, R`$\frac{x\ln x-x}{\ln2}+C$.`]
],
quiz:[
[R`ສູດສັງຄະນິດພາກສ່ວນ:`, [R`$\int u\,dv=uv+\int v\,du$`,R`$\int u\,dv=uv-\int v\,du$`,R`$\int uv=\int u\int v$`,R`$\int u\,dv=u'v$`],1,""],
[R`$\int xe^xdx$`, [R`$xe^x+C$`,R`$(x-1)e^x+C$`,R`$(x+1)e^x+C$`,R`$\frac{x^2}2e^x+C$`],1,""],
[R`$\int\ln x\,dx$`, [R`$\frac1x+C$`,R`$x\ln x-x+C$`,R`$x\ln x+C$`,R`$\frac{\ln^2x}2+C$`],1,""],
[R`ໃນ $\int x\sin x\,dx$ ເລືອກ $u=$`, [R`$x$`,R`$\sin x$`,R`$x\sin x$`,R`$\cos x$`],0,""],
[R`ໃນ $\int x\ln x\,dx$ ເລືອກ $u=$`, [R`$x$`,R`$\ln x$`,R`$x^2$`,"1"],1,""],
[R`$\int x\sin x\,dx$`, [R`$-x\cos x+\sin x+C$`,R`$x\cos x+C$`,R`$-x\cos x-\sin x+C$`,R`$\frac{x^2}{2}\sin x+C$`],0,""],
[R`LIATE: L ໝາຍເຖິງ:`, ["ຂອບເຂດ","ໂລກາຣິດ","ເສັ້ນຊື່","ລາກຣັງ"],1,""],
[R`$\int x\ln x\,dx$`, [R`$\frac{x^2\ln x}2-\frac{x^2}4+C$`,R`$x\ln x-x+C$`,R`$\frac{x^2\ln x}{2}+C$`,R`$\ln x+C$`],0,""]
]});

M7.ch.push({
n:38, part:7, title:"ສັງຄະນິດພາກສ່ວນ (ຕໍ່)",
goal:R`ນຳໃຊ້ສັງຄະນິດພາກສ່ວນຫຼາຍຄັ້ງຕິດຕໍ່ກັນ, ສັງຄະນິດແບບວົນ ແລະ ສັງຄະນິດຂອງຕຳລາປີ້ນໄຕມຸມມິຕິ.`,
slides:[
[R`ໃຊ້ສັງຄະນິດພາກສ່ວນສອງຄັ້ງ`, R`<div class="ex"><span class="lbl">$\int x^2e^xdx$</span>ຄັ້ງທີ 1: $u=x^2$ → $x^2e^x-2\int xe^xdx$<br>ຄັ້ງທີ 2: $\int xe^xdx=(x-1)e^x$<br>$=(x^2-2x+2)e^x+C$</div>
<div class="box"><span class="lbl">ວິທີຕາຕະລາງ</span>ຫາຜົນຕຳລາຂອງ $x^2$: $x^2,2x,2,0$; ສັງຄະນິດ $e^x$ ຊ້ຳ; ຄູນຂວາງສະຫຼັບເຄື່ອງໝາຍ $+,-,+$</div>`],
[R`ສັງຄະນິດແບບວົນ`, R`<div class="ex"><span class="lbl">$I=\int e^x\sin x\,dx$</span>$u=\sin x$: $I=e^x\sin x-\int e^x\cos x\,dx$<br>$u=\cos x$: $\int e^x\cos x\,dx=e^x\cos x+I$<br>$I=e^x\sin x-e^x\cos x-I\Rightarrow2I=e^x(\sin x-\cos x)$<br>$I=\frac{e^x(\sin x-\cos x)}2+C$</div><p>ສັງຄະນິດປາກົດຄືນ → ແກ້ສົມຜົນຊອກ $I$.</p>`],
[R`ຕຳລາປີ້ນໄຕມຸມມິຕິ`, R`<div class="ex"><span class="lbl">$\int\arctan x\,dx$</span>$u=\arctan x,\ dv=dx$: $=x\arctan x-\int\frac{x}{1+x^2}dx$<br>$=x\arctan x-\frac12\ln(1+x^2)+C$</div>
<div class="ex"><span class="lbl">$\int\arcsin x\,dx$</span>$=x\arcsin x-\int\frac x{\sqrt{1-x^2}}dx=x\arcsin x+\sqrt{1-x^2}+C$</div>`],
[R`ຕົວຢ່າງ: $\int(\ln x)^2dx$`, R`<div class="ex"><span class="lbl">ບົດແກ້</span>$u=(\ln x)^2,\ dv=dx$: $=x\ln^2x-\int x\cdot\frac{2\ln x}xdx=x\ln^2x-2\int\ln x\,dx$<br>$=x\ln^2x-2x\ln x+2x+C$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ພະຫຸພົດຂັ້ນ $n$ × $e^x$/$\sin$/$\cos$: ໃຊ້ $n$ ຄັ້ງ (ຫຼື ຕາຕະລາງ)</li><li>$e^x\sin x$, $e^x\cos x$: ວົນຄືນ → ແກ້ສົມຜົນ</li><li>$\arctan x$, $\arcsin x$, $\ln x$: ເລືອກ $dv=dx$</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int x^2\cos x\,dx$.`, R`$x^2\sin x+2x\cos x-2\sin x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int e^x\cos x\,dx$.`, R`$\frac{e^x(\sin x+\cos x)}2+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x\arctan x\,dx$.`, R`$\frac{x^2+1}2\arctan x-\frac x2+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x^2e^{-x}dx$.`, R`$-(x^2+2x+2)e^{-x}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\arccos x\,dx$.`, R`$x\arccos x-\sqrt{1-x^2}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int e^{2x}\sin x\,dx$.`, R`$\frac{e^{2x}(2\sin x-\cos x)}5+C$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int x^2\sin x\,dx$.`, R`$-x^2\cos x+2x\sin x+2\cos x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x^3e^xdx$.`, R`$(x^3-3x^2+6x-6)e^x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int e^{-x}\sin x\,dx$.`, R`$-\frac{e^{-x}(\sin x+\cos x)}2+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\arctan2x\,dx$.`, R`$x\arctan2x-\frac14\ln(1+4x^2)+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x(\ln x)^2dx$.`, R`$\frac{x^2\ln^2x}2-\frac{x^2\ln x}2+\frac{x^2}4+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\cos(\ln x)dx$.`, R`$\frac x2[\cos(\ln x)+\sin(\ln x)]+C$.`]
],
quiz:[
[R`$\int x^2e^xdx$`, [R`$(x^2-2x+2)e^x+C$`,R`$x^2e^x+C$`,R`$(x^2+2x+2)e^x+C$`,R`$\frac{x^3}3e^x+C$`],0,""],
[R`$\int e^x\sin x\,dx$`, [R`$\frac{e^x(\sin x-\cos x)}2+C$`,R`$e^x\cos x+C$`,R`$\frac{e^x(\sin x+\cos x)}2+C$`,R`$-e^x\cos x+C$`],0,""],
[R`$\int\arctan x\,dx$`, [R`$x\arctan x-\frac12\ln(1+x^2)+C$`,R`$\frac1{1+x^2}+C$`,R`$x\arctan x+C$`,R`$\arctan^2x+C$`],0,""],
[R`ສັງຄະນິດ $x^3e^x$ ຕ້ອງໃຊ້ພາກສ່ວນຈັກຄັ້ງ?`, ["1","2","3","4"],2,""],
[R`$\int\arcsin x\,dx$`, [R`$x\arcsin x+\sqrt{1-x^2}+C$`,R`$x\arcsin x-\sqrt{1-x^2}+C$`,R`$\frac1{\sqrt{1-x^2}}+C$`,R`$\arccos x+C$`],0,""],
[R`ສັງຄະນິດແບບ “ວົນ” ເກີດກັບ:`, [R`$x^2e^x$`,R`$e^x\sin x$`,R`$x\ln x$`,R`$\arctan x$`],1,""],
[R`$\int(\ln x)^2dx$`, [R`$x\ln^2x-2x\ln x+2x+C$`,R`$\frac{\ln^3x}3+C$`,R`$x\ln^2 x+C$`,R`$2\ln x+C$`],0,""],
[R`$\int x^2\cos x\,dx$`, [R`$x^2\sin x+2x\cos x-2\sin x+C$`,R`$x^2\sin x+C$`,R`$-x^2\cos x+C$`,R`$x^2\sin x-2x\cos x+C$`],0,""]
]});

M7.ch.push({
n:39, part:7, title:"ສັງຄະນິດມີຂອບ",
goal:R`ເຂົ້າໃຈຄວາມໝາຍຂອງສັງຄະນິດມີຂອບ, ທິດສະດີພື້ນຖານຂອງສັງຄະນິດ ແລະ ຄິດໄລ່ສັງຄະນິດມີຂອບດ້ວຍສູດນິວຕັນ–ໄລບນິດ.`,
slides:[
[R`ສັງຄະນິດມີຂອບແມ່ນຫຍັງ?`, R`<p>ແບ່ງ $[a;b]$ ເປັນ $n$ ຊ່ວງນ້ອຍ, ສ້າງຮູບສີ່ແຈສາກ ແລ້ວບວກເນື້ອທີ່ $\sum f(x_i)\Delta x$. ເມື່ອ $n\to\infty$:</p>
<div class="box"><span class="lbl">ນິຍາມ</span>$$\int_a^bf(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^nf(x_i)\Delta x$$ $a$ = ຂອບລຸ່ມ, $b$ = ຂອບເທິງ</div>
<p>ຖ້າ $f\ge0$: ສັງຄະນິດມີຂອບ = ເນື້ອທີ່ໃຕ້ເສັ້ນໂຄ້ງ ຈາກ $a$ ຫາ $b$.</p>`],
[R`ສູດນິວຕັນ–ໄລບນິດ`, R`<div class="box green"><span class="lbl">ທິດສະດີພື້ນຖານ</span>ຖ້າ $F$ ເປັນເຄົ້າຕຳລາຂອງ $f$ ທີ່ຕໍ່ເນື່ອງເທິງ $[a;b]$: $$\int_a^bf(x)dx=\big[F(x)\big]_a^b=F(b)-F(a)$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int_0^1x^2dx=\left[\frac{x^3}3\right]_0^1=\frac13$<br>$\int_0^\pi\sin x\,dx=[-\cos x]_0^\pi=1+1=2$<br>$\int_1^e\frac{dx}x=[\ln x]_1^e=1$</div>`],
[R`ຄຸນລັກສະນະ`, R`<ul><li>$\int_a^af\,dx=0$, $\ \int_a^bf\,dx=-\int_b^af\,dx$</li><li>$\int_a^b[kf\pm g]dx=k\int_a^bf\,dx\pm\int_a^bg\,dx$</li><li>$\int_a^bf\,dx=\int_a^cf\,dx+\int_c^bf\,dx$</li><li>ຖ້າ $f\ge g$ ເທິງ $[a;b]$ ແລ້ວ $\int_a^bf\ge\int_a^bg$</li></ul>
<div class="box"><span class="lbl">ຜົນຕຳລາຂອງສັງຄະນິດ</span>$\dfrac{d}{dx}\displaystyle\int_a^xf(t)dt=f(x)$</div>`],
[R`ຕົວຢ່າງ: ຊອກຕຳລາ ແລະ ຂອບ`, R`<div class="ex"><span class="lbl">ຊອກ $a\gt0$: $\int_0^a(2x+1)dx=6$</span>$[x^2+x]_0^a=a^2+a=6\Rightarrow a=2$</div>
<div class="ex"><span class="lbl">ຊອກ $f$ ແລະ $a$: $\int_a^xf(t)dt=x^2-2x-3$</span>ຫາຜົນຕຳລາ: $f(x)=2x-2$<br>ແທນ $x=a$: $0=a^2-2a-3\Rightarrow a=3$ ຫຼື $a=-1$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\int_a^bf(x)dx=F(b)-F(a)$ (ບໍ່ຕ້ອງໃສ່ $C$)</li><li>ໃຊ້ຄຸນລັກສະນະເສັ້ນຊື່ ແລະ ການແບ່ງຂອບ</li><li>$\frac{d}{dx}\int_a^xf(t)dt=f(x)$</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int_1^2(3x^2-2x)dx$.`, R`$[x^3-x^2]_1^2=4-0=4$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_{-1}^2(x^2+1)dx$.`, R`$\left[\frac{x^3}3+x\right]_{-1}^2=\frac{14}3+\frac43=6$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_0^1e^xdx$ ແລະ $\int_0^{\pi/2}\cos x\,dx$.`, R`$e-1$ ແລະ $1$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_1^4\left(\sqrt x-\dfrac1{x^2}\right)dx$.`, R`$\left[\frac23x^{3/2}+\frac1x\right]_1^4=\left(\frac{16}3+\frac14\right)-\left(\frac23+1\right)=\frac{47}{12}$.`],
[R`ຈົ່ງຊອກ $a\gt1$: $\int_1^a\frac{dx}x=2$.`, R`$\ln a=2\Rightarrow a=e^2$.`],
[R`ຈົ່ງຊອກ $F'(x)$ ເມື່ອ $F(x)=\int_1^x\sqrt{1+t^2}\,dt$.`, R`$\sqrt{1+x^2}$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int_0^2(x^3-2x+1)dx$.`, R`$[\frac{x^4}4-x^2+x]_0^2=4-4+2=2$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_0^{\pi}(\sin x+\cos x)dx$.`, R`$2+0=2$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_1^2\dfrac{x^2+1}{x}dx$.`, R`$\left[\frac{x^2}2+\ln x\right]_1^2=\frac32+\ln2$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_0^{\ln2}e^{2x}dx$.`, R`$\frac12(4-1)=\frac32$.`],
[R`ຈົ່ງຊອກ $f(x)$ ແລະ $a$: $\int_a^xf(t)dt=x^2-4$.`, R`$f(x)=2x$; $a^2-4=0\Rightarrow a=\pm2$.`],
[R`ໃຫ້ $\int_0^3f(x)dx=5$ ແລະ $\int_0^3g(x)dx=2$. ຈົ່ງຄິດໄລ່ $\int_0^3[2f(x)-3g(x)+1]dx$.`, R`$10-6+3=7$.`]
],
quiz:[
[R`$\int_0^1x^2dx$`, [R`$\frac12$`,R`$\frac13$`,"1",R`$\frac14$`],1,""],
[R`$\int_0^\pi\sin x\,dx$`, ["0","1","2","−2"],2,""],
[R`$\int_a^bf(x)dx=$`, [R`$F(a)-F(b)$`,R`$F(b)-F(a)$`,R`$F(b)+F(a)$`,R`$f(b)-f(a)$`],1,""],
[R`$\int_a^af(x)dx$`, ["0","1",R`$f(a)$`,R`$2F(a)$`],0,""],
[R`$\int_1^e\frac{dx}x$`, ["0","1","e",R`$e-1$`],1,""],
[R`$\frac{d}{dx}\int_1^x t^2dt$`, [R`$x^2$`,R`$\frac{x^3}3$`,R`$2x$`,R`$x^2-1$`],0,""],
[R`$\int_b^af\,dx=$`, [R`$\int_a^bf\,dx$`,R`$-\int_a^bf\,dx$`,"0",R`$2\int_a^bf$`],1,""],
[R`$\int_0^a(2x+1)dx=6,\ a\gt0$: $a=$`, ["1","2","3","6"],1,""]
]});

M7.ch.push({
n:40, part:7, title:"ສັງຄະນິດມີຂອບ (ຕໍ່)",
goal:R`ຄິດໄລ່ສັງຄະນິດມີຂອບດ້ວຍການປ່ຽນຕົວປ່ຽນ (ປ່ຽນຂອບ), ສັງຄະນິດພາກສ່ວນ, ຕຳລາຄ່າສົມບູນ ແລະ ຄວາມສົມມາດ.`,
slides:[
[R`ປ່ຽນຕົວປ່ຽນໃນສັງຄະນິດມີຂອບ`, R`<div class="box"><span class="lbl">ກົດ</span>ວາງ $u=g(x)$ ແລ້ວ <b>ປ່ຽນຂອບ</b>: $x=a\to u=g(a)$, $x=b\to u=g(b)$ $$\int_a^bf(g(x))g'(x)dx=\int_{g(a)}^{g(b)}f(u)du$$</div>
<div class="ex"><span class="lbl">$\int_0^1x(x^2+1)^3dx$</span>$u=x^2+1$: $x=0\to u=1$, $x=1\to u=2$<br>$=\frac12\int_1^2u^3du=\frac12\left[\frac{u^4}4\right]_1^2=\frac{15}8$</div>`],
[R`ສັງຄະນິດພາກສ່ວນມີຂອບ`, R`<div class="box green"><span class="lbl">ສູດ</span>$$\int_a^bu\,dv=\big[uv\big]_a^b-\int_a^bv\,du$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int_0^1xe^xdx=[(x-1)e^x]_0^1=0-(-1)=1$<br>$\int_0^\pi x\sin x\,dx=[-x\cos x+\sin x]_0^\pi=\pi$<br>$\int_1^e\ln x\,dx=[x\ln x-x]_1^e=1$</div>`],
[R`ຕຳລາຄ່າສົມບູນ`, R`<p>ແບ່ງຂອບຢູ່ບ່ອນທີ່ສຳນວນໃນຄ່າສົມບູນເທົ່າກັບ 0:</p>
<div class="ex"><span class="lbl">$\int_0^3|x-1|dx$</span>$=\int_0^1(1-x)dx+\int_1^3(x-1)dx=\frac12+2=\frac52$</div>`],
[R`ຕຳລາຄູ່ ແລະ ຕຳລາຄີກ`, R`<div class="box"><span class="lbl">ຄວາມສົມມາດ</span>$f$ ຄູ່ ($f(-x)=f(x)$): $\int_{-a}^af\,dx=2\int_0^af\,dx$<br>$f$ ຄີກ ($f(-x)=-f(x)$): $\int_{-a}^af\,dx=0$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int_{-2}^2x^3dx=0$ · $\int_{-1}^1x^2dx=\frac23$ · $\int_{-\pi}^{\pi}\sin x\cos^2x\,dx=0$</div>
<div class="ex"><span class="lbl">ສັງຄະນິດທີ່ໃຫ້ arctan</span>$\int_0^1\frac{dx}{1+x^2}=[\arctan x]_0^1=\frac\pi4$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ປ່ຽນຕົວປ່ຽນ → ປ່ຽນຂອບດ້ວຍ</li><li>ພາກສ່ວນ: $[uv]_a^b-\int_a^bv\,du$</li><li>ຄ່າສົມບູນ: ແບ່ງຂອບ</li><li>ຕຳລາຄີກເທິງ $[-a;a]$ → 0</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int_0^{\pi/2}\sin^2x\cos x\,dx$.`, R`$u=\sin x$: $\int_0^1u^2du=\frac13$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_1^e\dfrac{\ln x}xdx$.`, R`$\left[\frac{\ln^2x}2\right]_1^e=\frac12$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_0^1\dfrac{x}{x^2+1}dx$.`, R`$\frac12\ln2$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_0^{\pi/2}x\cos x\,dx$.`, R`$[x\sin x+\cos x]_0^{\pi/2}=\frac\pi2-1$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_{-1}^2|x|\,dx$.`, R`$\frac12+2=\frac52$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_{-3}^3(x^5-2x^3+x)dx$.`, R`ຕຳລາຄີກ → 0.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int_0^1(2x+1)^4dx$.`, R`$\frac1{10}[(2x+1)^5]_0^1=\frac{243-1}{10}=24.2$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_0^2xe^{x^2}dx$.`, R`$\frac12(e^4-1)$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_1^e x\ln x\,dx$.`, R`$\left[\frac{x^2\ln x}2-\frac{x^2}4\right]_1^e=\frac{e^2+1}4$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_0^4|x^2-4x+3|\,dx$.`, R`$\int_0^1+\int_1^3(-)+\int_3^4=\frac43+\frac43+\frac43=4$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_0^{\sqrt3}\dfrac{dx}{1+x^2}$.`, R`$\frac\pi3$.`],
[R`ຈົ່ງຄິດໄລ່ $\int_{-1}^{1}(x^2+x^3)dx$.`, R`$\frac23+0=\frac23$.`]
],
quiz:[
[R`$\int_0^1x(x^2+1)^3dx$`, [R`$\frac{15}8$`,R`$\frac{15}4$`,"2",R`$\frac{16}8$`],0,""],
[R`$\int_{-2}^2x^3dx$`, ["0","4","8","16"],0,""],
[R`$\int_0^1xe^xdx$`, ["0","1",R`$e$`,R`$e-1$`],1,""],
[R`$\int_0^3|x-1|dx$`, ["2",R`$\frac52$`,"3",R`$\frac32$`],1,""],
[R`$\int_0^1\frac{dx}{1+x^2}$`, [R`$\frac\pi2$`,R`$\frac\pi4$`,R`$\ln2$`,"1"],1,""],
[R`ເມື່ອປ່ຽນຕົວປ່ຽນໃນສັງຄະນິດມີຂອບ ຕ້ອງ:`, ["ໃສ່ +C","ປ່ຽນຂອບ","ຄູນ 2","ລົບ 1"],1,""],
[R`$\int_{-1}^1x^2dx$`, [R`$\frac13$`,R`$\frac23$`,"0","2"],1,""],
[R`$\int_0^\pi x\sin x\,dx$`, ["0","1",R`$\pi$`,R`$2\pi$`],2,""]
]});

M7.ch.push({
n:41, part:7, title:"ການນຳໃຊ້ສັງຄະນິດ: ເນື້ອທີ່ໃຕ້ເສັ້ນໂຄ້ງ",
goal:R`ນຳໃຊ້ສັງຄະນິດມີຂອບຄິດໄລ່ເນື້ອທີ່ທີ່ຂອບດ້ວຍເສັ້ນສະແດງຂອງຕຳລາ ແລະ ແກນ $Ox$ (ຫຼື $Oy$).`,
slides:[
[R`ເນື້ອທີ່ໃຕ້ເສັ້ນໂຄ້ງ`, R`<div class="box"><span class="lbl">ສູດ</span>ເນື້ອທີ່ຂອບດ້ວຍ $y=f(x)$, ແກນ $Ox$, $x=a$, $x=b$: $$S=\int_a^b|f(x)|\,dx$$</div>
<ul><li>$f\ge0$: $S=\int_a^bf\,dx$</li><li>$f\le0$: $S=-\int_a^bf\,dx$</li><li>$f$ ປ່ຽນເຄື່ອງໝາຍ: ແບ່ງຂອບທີ່ເມັດຕັດແກນ</li></ul>
<svg viewBox="0 0 220 120" width="220" style="max-width:100%" role="img" aria-label="ເນື້ອທີ່ໃຕ້ເສັ້ນໂຄ້ງ"><path d="M50 100 L50 62 Q 110 20 170 40 L170 100 Z" style="fill:var(--blue-soft);stroke:none"/><g stroke="currentColor" fill="none"><line x1="10" y1="100" x2="210" y2="100"/><line x1="25" y1="115" x2="25" y2="5"/></g><path d="M30 80 Q 110 10 200 45" style="stroke:var(--blue)" stroke-width="2" fill="none"/><g font-size="11" fill="currentColor"><text x="46" y="114">a</text><text x="166" y="114">b</text><text x="95" y="80">S</text></g></svg>`],
[R`ຕົວຢ່າງພື້ນຖານ`, R`<div class="ex"><span class="lbl">$y=x^2$, $0\le x\le2$</span>$S=\int_0^2x^2dx=\frac83$</div>
<div class="ex"><span class="lbl">$y=x^2-2x$ ກັບແກນ $Ox$</span>ເມັດຕັດ $x=0,\ x=2$; ຢູ່ລະຫວ່າງ $f\le0$<br>$S=\int_0^2(2x-x^2)dx=4-\frac83=\frac43$</div>`],
[R`ຕຳລາປ່ຽນເຄື່ອງໝາຍ`, R`<div class="ex"><span class="lbl">$y=x^3$, $-1\le x\le2$</span>$S=\int_{-1}^0(-x^3)dx+\int_0^2x^3dx=\frac14+4=\frac{17}4$</div>
<div class="ex"><span class="lbl">$y=\sin x$, $0\le x\le2\pi$</span>$S=\int_0^\pi\sin x\,dx-\int_\pi^{2\pi}\sin x\,dx=2+2=4$</div>
<div class="box red"><span class="lbl">ລະວັງ</span>$\int_0^{2\pi}\sin x\,dx=0$ ບໍ່ແມ່ນເນື້ອທີ່!</div>`],
[R`ເນື້ອທີ່ທຽບກັບແກນ $Oy$`, R`<div class="box green"><span class="lbl">ສູດ</span>ຂອບດ້ວຍ $x=g(y)$, ແກນ $Oy$, $y=c$, $y=d$: $S=\int_c^d|g(y)|\,dy$</div>
<div class="ex"><span class="lbl">$x=y^2$, $0\le y\le2$</span>$S=\int_0^2y^2dy=\frac83$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ol><li>ແຕ້ມຮູບ, ຊອກເມັດຕັດແກນ</li><li>ແບ່ງຂອບຕາມເຄື່ອງໝາຍຂອງ $f$</li><li>$S=\sum\left|\int f\,dx\right|$ ແຕ່ລະຊ່ວງ</li><li>ໜ່ວຍ: ຕາລາງຫົວໜ່ວຍ</li></ol>`]
],
ex:[
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=x^2-4$ ແລະ ແກນ $Ox$.`, R`ເມັດຕັດ $\pm2$: $S=\int_{-2}^2(4-x^2)dx=\frac{32}3$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=\frac1x$, $Ox$, $x=1$, $x=e$.`, "1"],
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=e^x$, $Ox$, $x=0$, $x=1$.`, R`$e-1$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=-x^2+4x-3$ ແລະ $Ox$.`, R`ເມັດຕັດ 1, 3: $\int_1^3(-x^2+4x-3)dx=\frac43$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=\cos x$, $Ox$, $x=0$, $x=\pi$.`, R`$\int_0^{\pi/2}\cos x-\int_{\pi/2}^\pi\cos x=1+1=2$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $x=4-y^2$ ແລະ ແກນ $Oy$.`, R`$\int_{-2}^2(4-y^2)dy=\frac{32}3$.`]
],
hw:[
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=x^2+1$, $Ox$, $x=-1$, $x=2$.`, R`$\left[\frac{x^3}3+x\right]_{-1}^2=6$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=x^2-x-2$ ແລະ $Ox$.`, R`ເມັດຕັດ −1, 2: $\int_{-1}^2(2+x-x^2)dx=\frac92$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=\sqrt x$, $Ox$, $x=4$.`, R`$\frac23\cdot8=\frac{16}3$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=x^3-x$ ແລະ $Ox$.`, R`$2\int_0^1(x-x^3)dx=\frac12$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=\ln x$, $Ox$, $x=e$.`, R`$\int_1^e\ln x\,dx=1$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ຂອບດ້ວຍ $y=\frac{1}{1+x^2}$, $Ox$, $x=-1$, $x=1$.`, R`$\frac\pi2$.`]
],
quiz:[
[R`ເນື້ອທີ່ໃຕ້ $y=x^2$ ຈາກ 0 ຫາ 2:`, [R`$\frac83$`,"4",R`$\frac43$`,"8"],0,""],
[R`ເນື້ອທີ່ລະຫວ່າງ $y=\sin x$ ແລະ $Ox$ ເທິງ $[0;2\pi]$:`, ["0","2","4",R`$2\pi$`],2,""],
[R`ຖ້າ $f\le0$ ເທິງ $[a;b]$, ເນື້ອທີ່ =`, [R`$\int_a^bf\,dx$`,R`$-\int_a^bf\,dx$`,"0",R`$\int_b^a(-f)\,dx$`],1,""],
[R`ເນື້ອທີ່ຂອບດ້ວຍ $y=x^2-2x$ ແລະ $Ox$:`, [R`$\frac43$`,R`$-\frac43$`,"4",R`$\frac83$`],0,""],
[R`ເນື້ອທີ່ໃຕ້ $y=\frac1x$ ຈາກ 1 ຫາ $e$:`, ["e","1","0",R`$e-1$`],1,""],
[R`ເນື້ອທີ່ໃຕ້ $y=e^x$ ຈາກ 0 ຫາ 1:`, [R`$e$`,R`$e-1$`,"1",R`$e+1$`],1,""],
[R`ເມື່ອ $f$ ປ່ຽນເຄື່ອງໝາຍ ຕ້ອງ:`, ["ໃຊ້ສູດດຽວ","ແບ່ງຂອບທີ່ເມັດຕັດແກນ","ຄູນ 2","ບໍ່ສົນໃຈ"],1,""],
[R`ເນື້ອທີ່ຂອບດ້ວຍ $y=x^2-4$ ແລະ $Ox$:`, [R`$\frac{32}3$`,R`$\frac{16}3$`,"16","8"],0,""]
]});

M7.ch.push({
n:42, part:7, title:"ການນຳໃຊ້ສັງຄະນິດ: ເນື້ອທີ່ລະຫວ່າງສອງເສັ້ນໂຄ້ງ",
goal:R`ຄິດໄລ່ເນື້ອທີ່ທີ່ຂອບດ້ວຍເສັ້ນສະແດງຂອງສອງຕຳລາຕໍ່ເນື່ອງ.`,
slides:[
[R`ສູດເນື້ອທີ່ລະຫວ່າງສອງເສັ້ນ`, R`<div class="box"><span class="lbl">ສູດ</span>ຖ້າ $f(x)\ge g(x)$ ເທິງ $[a;b]$: $$S=\int_a^b\big[f(x)-g(x)\big]dx$$ (ເສັ້ນເທິງ ລົບ ເສັ້ນລຸ່ມ)</div>
<svg viewBox="0 0 220 120" width="220" style="max-width:100%" role="img" aria-label="ເນື້ອທີ່ລະຫວ່າງສອງເສັ້ນໂຄ້ງ"><path d="M40 95 L180 25 Q 110 120 40 95 Z" style="fill:var(--green-soft);stroke:none"/><line x1="20" y1="105" x2="200" y2="15" style="stroke:var(--blue)" stroke-width="2"/><path d="M20 70 Q 110 140 200 15" style="stroke:var(--red)" stroke-width="2" fill="none"/><g font-size="11" fill="currentColor"><text x="150" y="20">y = f(x)</text><text x="120" y="112">y = g(x)</text></g></svg>
<p>ຂອບ $a,b$ ມັກແມ່ນ <b>ເມັດຕັດ</b> ຂອງສອງເສັ້ນ: ແກ້ $f(x)=g(x)$.</p>`],
[R`ຕົວຢ່າງ 1`, R`<div class="ex"><span class="lbl">$y=x^2$ ແລະ $y=x$</span>ເມັດຕັດ: $x^2=x\Rightarrow x=0,1$; ເທິງ $[0;1]$: $x\ge x^2$<br>$S=\int_0^1(x-x^2)dx=\frac12-\frac13=\frac16$</div>
<div class="ex"><span class="lbl">$y=x^2-2$ ແລະ $y=x$</span>$x^2-x-2=0\Rightarrow x=-1,2$<br>$S=\int_{-1}^2(x-x^2+2)dx=\frac92$</div>`],
[R`ຕົວຢ່າງ 2: ເສັ້ນໄຕມຸມມິຕິ`, R`<div class="ex"><span class="lbl">$y=\sin x,\ y=\cos x$, $0\le x\le\frac\pi4$</span>$\cos x\ge\sin x$: $S=\int_0^{\pi/4}(\cos x-\sin x)dx=[\sin x+\cos x]_0^{\pi/4}=\sqrt2-1$</div>
<div class="ex"><span class="lbl">ສອງເສັ້ນຕັດກັນຫຼາຍເທື່ອ: $y=x^3,\ y=x$</span>ຕັດທີ່ $-1,0,1$: $S=\int_{-1}^0(x^3-x)dx+\int_0^1(x-x^3)dx=\frac14+\frac14=\frac12$</div>`],
[R`ສັງຄະນິດຕາມ $y$`, R`<div class="box green"><span class="lbl">ສູດ</span>ຖ້າ $x=f(y)\ge x=g(y)$ ເທິງ $[c;d]$: $S=\int_c^d[f(y)-g(y)]dy$ (ເສັ້ນຂວາ ລົບ ເສັ້ນຊ້າຍ)</div>
<div class="ex"><span class="lbl">$x=y^2$ ແລະ $x=y+2$</span>$y^2=y+2\Rightarrow y=-1,2$<br>$S=\int_{-1}^2(y+2-y^2)dy=\frac92$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ol><li>ຊອກເມັດຕັດ</li><li>ກຳນົດເສັ້ນເທິງ/ລຸ່ມ (ຫຼື ຂວາ/ຊ້າຍ) ໃນແຕ່ລະຊ່ວງ</li><li>$S=\int(\text{ເທິງ}-\text{ລຸ່ມ})dx$</li><li>ຕັດກັນຫຼາຍເທື່ອ: ແບ່ງຊ່ວງ</li></ol>`]
],
ex:[
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $y=x^2$ ແລະ $y=2x$.`, R`$\int_0^2(2x-x^2)dx=\frac43$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $y=x^2$ ແລະ $y=4$.`, R`$\int_{-2}^2(4-x^2)dx=\frac{32}3$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $y=\sqrt x$ ແລະ $y=x^2$.`, R`$\int_0^1(\sqrt x-x^2)dx=\frac13$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $y=x^2$ ແລະ $y=2-x^2$.`, R`$\int_{-1}^1(2-2x^2)dx=\frac83$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $y=e^x$, $y=1$, $x=1$.`, R`$\int_0^1(e^x-1)dx=e-2$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $x=y^2$ ແລະ $x=4$.`, R`$\int_{-2}^2(4-y^2)dy=\frac{32}3$.`]
],
hw:[
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $y=x^2-4x$ ແລະ $y=x$.`, R`ຕັດທີ່ 0, 5: $\int_0^5(5x-x^2)dx=\frac{125}6$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $y=x^2+1$ ແລະ $y=x+3$.`, R`ຕັດທີ່ −1, 2: $\int_{-1}^2(x+2-x^2)dx=\frac92$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $y=\sin x$ ແລະ $y=\cos x$ ເທິງ $\left[\frac\pi4;\frac{5\pi}4\right]$.`, R`$[-\cos x-\sin x]_{\pi/4}^{5\pi/4}=2\sqrt2$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $y=\frac1x$, $y=x$, $x=2$.`, R`$\int_1^2(x-\frac1x)dx=\frac32-\ln2$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $y=x^3$ ແລະ $y=4x$.`, R`$2\int_0^2(4x-x^3)dx=8$.`],
[R`ຈົ່ງຊອກເນື້ອທີ່ລະຫວ່າງ $x=y^2-2y$ ແລະ $x=0$ (ແກນ $Oy$).`, R`$\int_0^2(2y-y^2)dy=\frac43$.`]
],
quiz:[
[R`ເນື້ອທີ່ລະຫວ່າງ $y=x^2$ ແລະ $y=x$:`, [R`$\frac16$`,R`$\frac13$`,R`$\frac12$`,"1"],0,""],
[R`ສູດເນື້ອທີ່ລະຫວ່າງສອງເສັ້ນ:`, [R`$\int(f+g)dx$`,R`$\int(\text{ເທິງ}-\text{ລຸ່ມ})dx$`,R`$\int fg\,dx$`,R`$\int(\text{ລຸ່ມ}-\text{ເທິງ})dx$`],1,""],
[R`ເນື້ອທີ່ລະຫວ່າງ $y=x^2$ ແລະ $y=2x$:`, [R`$\frac43$`,R`$\frac83$`,"4","2"],0,""],
[R`ເມັດຕັດຂອງ $y=x^2-2$ ແລະ $y=x$:`, [R`$x=1,2$`,R`$x=-1,2$`,R`$x=-2,1$`,R`$x=0,2$`],1,""],
[R`ເນື້ອທີ່ລະຫວ່າງ $y=x^3$ ແລະ $y=x$:`, ["0",R`$\frac14$`,R`$\frac12$`,"1"],2,""],
[R`ເນື້ອທີ່ລະຫວ່າງ $y=\sqrt x$ ແລະ $y=x^2$:`, [R`$\frac13$`,R`$\frac23$`,R`$\frac16$`,"1"],0,""],
[R`ສັງຄະນິດຕາມ $y$: ສູດແມ່ນ:`, [R`$\int(\text{ຂວາ}-\text{ຊ້າຍ})dy$`,R`$\int(\text{ເທິງ}-\text{ລຸ່ມ})dy$`,R`$\int x\,dy$`,R`$\int y\,dx$`],0,""],
[R`ເນື້ອທີ່ລະຫວ່າງ $y=\sin x,\ y=\cos x$ ເທິງ $[0;\frac\pi4]$:`, [R`$\sqrt2-1$`,R`$\sqrt2$`,"1",R`$1-\frac{\sqrt2}2$`],0,""]
]});

M7.ch.push({
n:43, part:7, title:"ການນຳໃຊ້ສັງຄະນິດ: ບໍລິມາດຮູບກ້ອນໝູນ",
goal:R`ຄິດໄລ່ບໍລິມາດຂອງຮູບກ້ອນທີ່ໄດ້ຈາກການປິ່ນເສັ້ນສະແດງຂອງຕຳລາຕໍ່ເນື່ອງອ້ອມແກນ $Ox$ ຫຼື $Oy$.`,
slides:[
[R`ຮູບກ້ອນໝູນ`, R`<p>ປິ່ນເນື້ອທີ່ໃຕ້ $y=f(x)$ ອ້ອມແກນ $Ox$ → ໄດ້ຮູບກ້ອນ. ຕັດຂວາງທີ່ $x$ ໄດ້ <b>ແຜ່ນມົນ</b> ລັດສະໝີ $f(x)$, ເນື້ອທີ່ $\pi[f(x)]^2$.</p>
<div class="box"><span class="lbl">ສູດ (ວິທີແຜ່ນມົນ)</span>ອ້ອມ $Ox$: $V=\pi\displaystyle\int_a^b[f(x)]^2dx$<br>ອ້ອມ $Oy$: $V=\pi\displaystyle\int_c^d[g(y)]^2dy$</div>`],
[R`ຕົວຢ່າງ`, R`<div class="ex"><span class="lbl">$y=x$, $0\le x\le1$ ອ້ອມ $Ox$</span>$V=\pi\int_0^1x^2dx=\frac\pi3$ (ຮູບຈວຍ)</div>
<div class="ex"><span class="lbl">$y=\sqrt x$, $0\le x\le4$ ອ້ອມ $Ox$</span>$V=\pi\int_0^4x\,dx=8\pi$</div>
<div class="ex"><span class="lbl">$x=\sqrt y$, $0\le y\le4$ ອ້ອມ $Oy$</span>$V=\pi\int_0^4y\,dy=8\pi$</div>`],
[R`ພິສູດສູດທີ່ຮູ້ຈັກ`, R`<div class="ex"><span class="lbl">ໜ່ວຍກົມລັດສະໝີ $r$</span>ປິ່ນ $y=\sqrt{r^2-x^2}$: $V=\pi\int_{-r}^r(r^2-x^2)dx=\pi\left[r^2x-\frac{x^3}3\right]_{-r}^r=\frac43\pi r^3$</div>
<div class="ex"><span class="lbl">ຮູບຈວຍ ລັດສະໝີ $r$ ສູງ $h$</span>ປິ່ນ $y=\frac rhx$, $0\le x\le h$: $V=\pi\frac{r^2}{h^2}\cdot\frac{h^3}3=\frac13\pi r^2h$</div>`],
[R`ຕົວຢ່າງເພີ່ມເຕີມ`, R`<div class="ex"><span class="lbl">$y=\sin x$, $0\le x\le\pi$ ອ້ອມ $Ox$</span>$V=\pi\int_0^\pi\sin^2x\,dx=\pi\cdot\frac\pi2=\frac{\pi^2}2$</div>
<div class="ex"><span class="lbl">$y=\sqrt{x-1}$, $2\le x\le5$ ອ້ອມ $Ox$</span>$V=\pi\int_2^5(x-1)dx=\pi\left[\frac{x^2}2-x\right]_2^5=\frac{15\pi}2$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ອ້ອມ $Ox$: $V=\pi\int_a^bf^2(x)dx$</li><li>ອ້ອມ $Oy$: $V=\pi\int_c^dg^2(y)dy$ (ຂຽນ $x$ ຕາມ $y$)</li><li>ຂອບ = ເມັດຕັດກັບແກນ ຫຼື ຕາມບົດເລກກຳນົດ</li></ul>`]
],
ex:[
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນ $y=x^2$, $0\le x\le1$ ອ້ອມ $Ox$.`, R`$\pi\int_0^1x^4dx=\frac\pi5$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນ $y=2x+1$, $0\le x\le1$ ອ້ອມ $Ox$.`, R`$\pi\int_0^1(4x^2+4x+1)dx=\pi\left(\frac43+2+1\right)=\frac{13\pi}3$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນ $y=3x-x^2$, $0\le x\le3$ ອ້ອມ $Ox$.`, R`ຂອບ 0, 3: $\pi\int_0^3(3x-x^2)^2dx=\pi\int_0^3(9x^2-6x^3+x^4)dx=\pi\left(81-\frac{243}2+\frac{243}5\right)=\frac{81\pi}{10}$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນ $y=e^x$, $0\le x\le1$ ອ້ອມ $Ox$.`, R`$\pi\int_0^1e^{2x}dx=\frac\pi2(e^2-1)$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນ $x=y^2$, $0\le y\le1$ ອ້ອມ $Oy$.`, R`$\pi\int_0^1y^4dy=\frac\pi5$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນ $y=\frac1x$, $1\le x\le3$ ອ້ອມ $Ox$.`, R`$\pi\int_1^3x^{-2}dx=\pi\left(1-\frac13\right)=\frac{2\pi}3$.`]
],
hw:[
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນ $y=\sqrt{x-1}$, $2\le x\le5$ ອ້ອມ $Ox$.`, R`$\frac{15\pi}2$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນ $y=4x-x^2$, $0\le x\le1$ ອ້ອມ $Ox$.`, R`$\pi\int_0^1(16x^2-8x^3+x^4)dx=\frac{53\pi}{15}$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເສັ້ນສະແດງຂອງ $y=x^2+2$ ($x\ge0$), $2\le y\le5$ ອ້ອມ $Oy$.`, R`$x^2=y-2$: $\pi\int_2^5(y-2)dy=\frac{9\pi}2$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນ $y=\cos x$, $0\le x\le\frac\pi2$ ອ້ອມ $Ox$.`, R`$\pi\int_0^{\pi/2}\cos^2x\,dx=\frac{\pi^2}4$.`],
[R`ຈົ່ງພິສູດສູດບໍລິມາດຮູບກະບອກ $V=\pi r^2h$ ດ້ວຍສັງຄະນິດ.`, R`ປິ່ນ $y=r$, $0\le x\le h$: $\pi\int_0^hr^2dx=\pi r^2h$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນ $x=4y-y^2$, $0\le y\le4$ ອ້ອມ $Oy$.`, R`$\pi\int_0^4(4y-y^2)^2dy=\pi\left[\frac{16y^3}3-2y^4+\frac{y^5}5\right]_0^4=\frac{512\pi}{15}$.`]
],
quiz:[
[R`ສູດບໍລິມາດປິ່ນອ້ອມ $Ox$:`, [R`$\pi\int_a^bf(x)dx$`,R`$\pi\int_a^bf^2(x)dx$`,R`$2\pi\int_a^bf(x)dx$`,R`$\int_a^bf^2(x)dx$`],1,""],
[R`ປິ່ນ $y=x$, $0\le x\le1$ ອ້ອມ $Ox$:`, [R`$\frac\pi3$`,R`$\frac\pi2$`,R`$\pi$`,R`$\frac{2\pi}3$`],0,""],
[R`ປິ່ນ $y=\sqrt x$, $0\le x\le4$ ອ້ອມ $Ox$:`, [R`$4\pi$`,R`$8\pi$`,R`$16\pi$`,R`$2\pi$`],1,""],
[R`ປິ່ນ $y=\sqrt{r^2-x^2}$ ອ້ອມ $Ox$ ໄດ້:`, ["ຮູບຈວຍ","ໜ່ວຍກົມ","ຮູບກະບອກ","ຮູບກ້ອນສາກ"],1,""],
[R`ປິ່ນ $y=x^2$, $0\le x\le1$ ອ້ອມ $Ox$:`, [R`$\frac\pi3$`,R`$\frac\pi5$`,R`$\frac\pi4$`,R`$\pi$`],1,""],
[R`ປິ່ນອ້ອມ $Oy$ ຕ້ອງຂຽນ:`, [R`$y$ ຕາມ $x$`,R`$x$ ຕາມ $y$`,"ບໍ່ຕ້ອງປ່ຽນ","ໃຊ້ຂອບ x"],1,""],
[R`ປິ່ນ $y=\sin x$, $0\le x\le\pi$ ອ້ອມ $Ox$:`, [R`$2\pi$`,R`$\frac{\pi^2}2$`,R`$\pi^2$`,"2"],1,""],
[R`ຮູບຈວຍລັດສະໝີ 3 ສູງ 4 ມີບໍລິມາດ:`, [R`$12\pi$`,R`$36\pi$`,R`$4\pi$`,R`$9\pi$`],0,""]
]});

M7.ch.push({
n:44, part:7, title:"ການນຳໃຊ້ສັງຄະນິດ: ບໍລິມາດລະຫວ່າງສອງເສັ້ນໂຄ້ງ",
goal:R`ຄິດໄລ່ບໍລິມາດຂອງຮູບກ້ອນທີ່ໄດ້ຈາກການປິ່ນເນື້ອທີ່ທີ່ຂອບດ້ວຍສອງເສັ້ນສະແດງ ອ້ອມແກນ $Ox$ ຫຼື $Oy$ (ວິທີແຫວນ).`,
slides:[
[R`ວິທີແຫວນ (Washer)`, R`<p>ປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=f(x)$ (ນອກ) ແລະ $y=g(x)$ (ໃນ), $f\ge g\ge0$, ອ້ອມ $Ox$. ຕັດຂວາງໄດ້ <b>ແຫວນ</b>: ເນື້ອທີ່ $\pi(f^2-g^2)$.</p>
<div class="box"><span class="lbl">ສູດ</span>ອ້ອມ $Ox$: $V=\pi\displaystyle\int_a^b\left([f(x)]^2-[g(x)]^2\right)dx$<br>ອ້ອມ $Oy$: $V=\pi\displaystyle\int_c^d\left([f(y)]^2-[g(y)]^2\right)dy$</div>
<div class="box red"><span class="lbl">ລະວັງ</span>$\pi\int(f^2-g^2)\neq\pi\int(f-g)^2$</div>`],
[R`ຕົວຢ່າງ 1`, R`<div class="ex"><span class="lbl">$y=x$ ແລະ $y=x^2$ ອ້ອມ $Ox$</span>ເມັດຕັດ 0, 1; ນອກ $y=x$, ໃນ $y=x^2$<br>$V=\pi\int_0^1(x^2-x^4)dx=\pi\left(\frac13-\frac15\right)=\frac{2\pi}{15}$</div>
<div class="ex"><span class="lbl">$y=\sqrt x$ ແລະ $y=x^2$ ອ້ອມ $Ox$</span>$V=\pi\int_0^1(x-x^4)dx=\pi\left(\frac12-\frac15\right)=\frac{3\pi}{10}$</div>`],
[R`ຕົວຢ່າງ 2`, R`<div class="ex"><span class="lbl">$y=x+3$ ແລະ $y=x^2+1$ ອ້ອມ $Ox$</span>ເມັດຕັດ $x=-1,2$; ນອກ $y=x+3$<br>$V=\pi\int_{-1}^2\left[(x+3)^2-(x^2+1)^2\right]dx=\pi\int_{-1}^2(-x^4-x^2+6x+8)dx=\frac{117\pi}5$</div>
<div class="ex"><span class="lbl">$y=4$ ແລະ $y=x^2$ ອ້ອມ $Ox$</span>$V=\pi\int_{-2}^2(16-x^4)dx=\frac{256\pi}5$</div>`],
[R`ປິ່ນອ້ອມແກນ $Oy$`, R`<div class="ex"><span class="lbl">ເນື້ອທີ່ລະຫວ່າງ $y=x$ ແລະ $y=x^2$ ($x\ge0$) ອ້ອມ $Oy$</span>ຂຽນຕາມ $y$: ນອກ $x=\sqrt y$, ໃນ $x=y$, $0\le y\le1$<br>$V=\pi\int_0^1(y-y^2)dy=\frac\pi6$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ol><li>ຊອກເມັດຕັດ → ຂອບ</li><li>ກຳນົດລັດສະໝີນອກ $R$ ແລະ ໃນ $r$</li><li>$V=\pi\int(R^2-r^2)$</li><li>ອ້ອມ $Oy$: ຂຽນທຸກຢ່າງຕາມ $y$</li></ol>`]
],
ex:[
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=x^2$ ແລະ $y=2x$ ອ້ອມ $Ox$.`, R`$\pi\int_0^2(4x^2-x^4)dx=\pi\left(\frac{32}3-\frac{32}5\right)=\frac{64\pi}{15}$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=1$ ແລະ $y=x^2$ ອ້ອມ $Ox$.`, R`$\pi\int_{-1}^1(1-x^4)dx=\frac{8\pi}5$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=\sqrt x$ ແລະ $y=x$ ອ້ອມ $Ox$.`, R`$\pi\int_0^1(x-x^2)dx=\frac\pi6$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=x^2+1$ ແລະ $y=3$ ອ້ອມ $Ox$.`, R`ເມັດຕັດ $\pm\sqrt2$: $\pi\int_{-\sqrt2}^{\sqrt2}\left[9-(x^2+1)^2\right]dx=\pi\int(8-2x^2-x^4)dx=\pi\left[8x-\frac{2x^3}3-\frac{x^5}5\right]_{-\sqrt2}^{\sqrt2}=\frac{176\sqrt2\pi}{15}$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $x=y^2$ ແລະ $x=y$ ອ້ອມ $Oy$.`, R`ນອກ $x=y$, ໃນ $x=y^2$: $\pi\int_0^1(y^2-y^4)dy=\frac{2\pi}{15}$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=x^2$ ແລະ $y=4$ ($x\ge0$) ອ້ອມ $Oy$.`, R`$x=\sqrt y$: $\pi\int_0^4y\,dy=8\pi$.`]
],
hw:[
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=x$ ແລະ $y=x^2$ ອ້ອມ $Ox$.`, R`$\frac{2\pi}{15}$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=x+3$ ແລະ $y=x^2+1$ ອ້ອມ $Ox$.`, R`$\frac{117\pi}5$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=2$ ແລະ $y=\sqrt x$, $0\le x\le4$ ອ້ອມ $Ox$.`, R`$\pi\int_0^4(4-x)dx=8\pi$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=\cos x$ ແລະ $y=\sin x$ ເທິງ $[0;\frac\pi4]$ ອ້ອມ $Ox$.`, R`$\pi\int_0^{\pi/4}(\cos^2x-\sin^2x)dx=\pi\int_0^{\pi/4}\cos2x\,dx=\frac\pi2$.`],
[R`ຈົ່ງຊອກບໍລິມາດຂອງແຫວນ (ທໍ່) ເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=3$ ແລະ $y=1$, $0\le x\le5$ ອ້ອມ $Ox$.`, R`$\pi\int_0^5(9-1)dx=40\pi$.`],
[R`ຈົ່ງຊອກບໍລິມາດເມື່ອປິ່ນເນື້ອທີ່ລະຫວ່າງ $x=y^2$ ແລະ $x=4$ ອ້ອມ $Oy$.`, R`$\pi\int_{-2}^2(16-y^4)dy=\frac{256\pi}5$.`]
],
quiz:[
[R`ສູດວິທີແຫວນອ້ອມ $Ox$:`, [R`$\pi\int(f-g)^2dx$`,R`$\pi\int(f^2-g^2)dx$`,R`$\pi\int(f+g)^2dx$`,R`$\int(f^2-g^2)dx$`],1,""],
[R`ປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=x,\ y=x^2$ ອ້ອມ $Ox$:`, [R`$\frac{2\pi}{15}$`,R`$\frac\pi6$`,R`$\frac\pi{30}$`,R`$\frac\pi3$`],0,""],
[R`ປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=\sqrt x,\ y=x^2$ ອ້ອມ $Ox$:`, [R`$\frac{3\pi}{10}$`,R`$\frac\pi3$`,R`$\frac\pi5$`,R`$\frac{\pi}{2}$`],0,""],
[R`ໃນວິທີແຫວນ $f$ ແມ່ນ:`, ["ລັດສະໝີໃນ","ລັດສະໝີນອກ","ຄວາມສູງ","ຄວາມໜາ"],1,""],
[R`$\pi\int_{-2}^2(16-x^4)dx=$`, [R`$\frac{256\pi}5$`,R`$64\pi$`,R`$\frac{128\pi}5$`,R`$32\pi$`],0,""],
[R`ປິ່ນເນື້ອທີ່ລະຫວ່າງ $y=1,\ y=x^2$ ອ້ອມ $Ox$:`, [R`$\frac{8\pi}5$`,R`$\frac{4\pi}3$`,R`$\frac{4\pi}5$`,R`$2\pi$`],0,""],
[R`ເມັດຕັດຂອງ $y=x+3$ ແລະ $y=x^2+1$:`, [R`$x=-1,2$`,R`$x=1,-2$`,R`$x=0,1$`,R`$x=-2,2$`],0,""],
[R`ປິ່ນອ້ອມ $Oy$ ສັງຄະນິດຕາມ:`, [R`$dx$`,R`$dy$`,R`$dt$`,R`$d\theta$`],1,""]
]});
