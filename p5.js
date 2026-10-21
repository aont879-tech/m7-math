/* ພາກທີ 5: ຕຳລາປີ້ນ ແລະ ຕຳລາປີ້ນຂອງຕຳລາໄຕມຸມມິຕິ (ບົດ 17–19) */
M7.ch.push({
n:17, part:5, title:"ຄຸນລັກສະນະຂອງຕຳລາປີ້ນ",
goal:R`ເຂົ້າໃຈເງື່ອນໄຂການມີຕຳລາປີ້ນ, ຊອກຕຳລາປີ້ນ ແລະ ຮູ້ຄວາມສຳພັນລະຫວ່າງເສັ້ນສະແດງຂອງ $f$ ແລະ $f^{-1}$.`,
slides:[
[R`ຕຳລາປີ້ນແມ່ນຫຍັງ?`, R`<p>ຕຳລາ $f$ ເອົາ $x$ ໄປເປັນ $y$. ຕຳລາປີ້ນ $f^{-1}$ ເອົາ $y$ ກັບຄືນມາເປັນ $x$:</p>$$y=f(x)\iff x=f^{-1}(y)$$
<div class="box"><span class="lbl">ເງື່ອນໄຂ</span>$f$ ມີຕຳລາປີ້ນ ກໍຕໍ່ເມື່ອ $f$ ເປັນ <b>ຕຳລາໜຶ່ງຕໍ່ໜຶ່ງ</b>: $x_1\neq x_2\Rightarrow f(x_1)\neq f(x_2)$</div>
<p>ກວດດ້ວຍເສັ້ນຂະໜານແກນ $Ox$: ຕັດເສັ້ນສະແດງບໍ່ເກີນ 1 ເມັດ. ຕຳລາທີ່ເພີ່ມຂຶ້ນ ຫຼື ຫຼຸດລົງຕະຫຼອດ ເປັນໜຶ່ງຕໍ່ໜຶ່ງ.</p>`],
[R`ບາດກ້າວຊອກຕຳລາປີ້ນ`, R`<ol><li>ຂຽນ $y=f(x)$</li><li>ແກ້ຊອກ $x$ ຕາມ $y$</li><li>ສັບປ່ຽນ $x$ ແລະ $y$ → $y=f^{-1}(x)$</li><li>ກຳນົດເຂດກຳນົດ: $D_{f^{-1}}=R_f$</li></ol>
<div class="ex"><span class="lbl">$f(x)=2x+3$</span>$y=2x+3\Rightarrow x=\dfrac{y-3}2$ → $f^{-1}(x)=\dfrac{x-3}2$</div>`],
[R`ຕົວຢ່າງ: ຕຳລາເສດສ່ວນ`, R`<div class="ex"><span class="lbl">$f(x)=\dfrac{2x+1}{x-1},\ x\neq1$</span>$y(x-1)=2x+1\Rightarrow x(y-2)=y+1\Rightarrow x=\dfrac{y+1}{y-2}$<br>$f^{-1}(x)=\dfrac{x+1}{x-2},\ x\neq2$</div>
<div class="ex"><span class="lbl">$f(x)=x^2,\ x\ge0$</span>$f^{-1}(x)=\sqrt x,\ x\ge0$ (ຕ້ອງຈຳກັດເຂດ ຈຶ່ງເປັນໜຶ່ງຕໍ່ໜຶ່ງ)</div>`],
[R`ຄຸນລັກສະນະຂອງຕຳລາປີ້ນ`, R`<ul><li>$f\left(f^{-1}(x)\right)=x$ ແລະ $f^{-1}\left(f(x)\right)=x$</li><li>$D_{f^{-1}}=R_f,\quad R_{f^{-1}}=D_f$</li><li>$(f^{-1})^{-1}=f$</li><li>ເສັ້ນສະແດງຂອງ $f$ ແລະ $f^{-1}$ <b>ສົມມາດກັນ</b> ທຽບກັບເສັ້ນ $y=x$</li></ul>
<svg viewBox="0 0 220 160" width="220" style="max-width:100%" role="img" aria-label="ເສັ້ນສະແດງ e^x ແລະ ln x ສົມມາດຜ່ານ y=x"><g stroke="currentColor" stroke-width="1" fill="none"><line x1="10" y1="120" x2="210" y2="120"/><line x1="70" y1="155" x2="70" y2="5"/><line x1="20" y1="155" x2="200" y2="5" stroke-dasharray="4 3" opacity=".6"/></g><path d="M10 117 C 50 110, 70 100, 90 80 S 115 20, 120 5" style="stroke:var(--blue)" fill="none" stroke-width="2"/><path d="M73 155 C 80 110, 90 100, 110 80 S 170 50, 205 45" style="stroke:var(--red)" fill="none" stroke-width="2"/><g font-size="11" fill="currentColor"><text x="124" y="16">y = eˣ</text><text x="168" y="40">y = ln x</text><text x="186" y="22">y = x</text></g></svg>`],
[R`ຊອກຕຳລາປີ້ນຈາກ $g(ax+b)$`, R`<div class="ex"><span class="lbl">ໃຫ້ $g(3x+2)=x-1$. ຊອກ $g^{-1}(x)$</span>ວາງ $t=3x+2\Rightarrow x=\frac{t-2}3$<br>$g(t)=\frac{t-2}3-1=\frac{t-5}3$ → $g(x)=\frac{x-5}3$<br>$g^{-1}(x)=3x+5$</div>
<div class="box green"><span class="lbl">ຄູ່ຕຳລາປີ້ນທີ່ຄວນຈື່</span>$e^x\leftrightarrow\ln x$ · $\ a^x\leftrightarrow\log_ax$ · $\ x^3\leftrightarrow\sqrt[3]x$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$f$ ມີຕຳລາປີ້ນ $\iff$ $f$ ໜຶ່ງຕໍ່ໜຶ່ງ</li><li>ຊອກ: ແກ້ $x$ ຕາມ $y$ ແລ້ວສັບປ່ຽນ</li><li>$f(f^{-1}(x))=x$; ເຂດກຳນົດ ↔ ເຂດຄ່າ</li><li>ເສັ້ນສະແດງສົມມາດຜ່ານ $y=x$</li></ul>`]
],
ex:[
[R`ຈົ່ງຊອກຕຳລາປີ້ນຂອງ $f(x)=5x-7$.`, R`$f^{-1}(x)=\frac{x+7}5$.`],
[R`ຈົ່ງຊອກຕຳລາປີ້ນຂອງ $f(x)=x^3+1$.`, R`$f^{-1}(x)=\sqrt[3]{x-1}$.`],
[R`ຈົ່ງຊອກຕຳລາປີ້ນຂອງ $f(x)=\dfrac{3x-2}{x+4}$.`, R`$y(x+4)=3x-2\Rightarrow x(y-3)=-4y-2\Rightarrow f^{-1}(x)=\frac{-4x-2}{x-3}=\frac{4x+2}{3-x},\ x\neq3$.`],
[R`ໃຫ້ $h(x+3)=6x-1$. ຈົ່ງຊອກ $h^{-1}(x)$.`, R`$h(t)=6(t-3)-1=6t-19$ → $h^{-1}(x)=\frac{x+19}6$.`],
[R`ຈົ່ງຊອກຕຳລາປີ້ນຂອງ $f(x)=2^{x-1}$ ແລະ ເຂດກຳນົດຂອງມັນ.`, R`$x-1=\log_2y$ → $f^{-1}(x)=1+\log_2x,\ x\gt0$.`],
[R`ໃຫ້ $f(x)=2x+3$. ຈົ່ງກວດວ່າ $f(f^{-1}(x))=x$.`, R`$f\left(\frac{x-3}2\right)=2\cdot\frac{x-3}2+3=x$ ✓.`]
],
hw:[
[R`ຈົ່ງຊອກຕຳລາປີ້ນຂອງ $f(x)=\dfrac{x+2}{2x-1}$.`, R`$f^{-1}(x)=\frac{x+2}{2x-1}$ (ຕຳລານີ້ເປັນຕຳລາປີ້ນຂອງຕົວມັນເອງ).`],
[R`ຈົ່ງຊອກຕຳລາປີ້ນຂອງ $f(x)=\sqrt{x-2},\ x\ge2$.`, R`$f^{-1}(x)=x^2+2,\ x\ge0$.`],
[R`ຈົ່ງຊອກຕຳລາປີ້ນຂອງ $f(x)=\ln(x+1)$.`, R`$f^{-1}(x)=e^x-1$.`],
[R`ໃຫ້ $g(3x+2)=x-1$. ຈົ່ງຊອກ $g^{-1}(4)$.`, R`$g^{-1}(x)=3x+5$ → $g^{-1}(4)=17$.`],
[R`ໃຫ້ $h(2x-1)=3x$. ຈົ່ງຊອກ $h^{-1}(x)$.`, R`$h(t)=\frac{3(t+1)}2$ → $h^{-1}(x)=\frac{2x}3-1$.`],
[R`ຕຳລາ $f(x)=x^2$ ($x\in\mathbb{R}$) ມີຕຳລາປີ້ນບໍ? ຖ້າບໍ່ມີ ຈະຈຳກັດເຂດກຳນົດແນວໃດ?`, R`ບໍ່ມີ ($f(-1)=f(1)$). ຈຳກັດເປັນ $x\ge0$ → $f^{-1}(x)=\sqrt x$, ຫຼື $x\le0$ → $-\sqrt x$.`]
],
quiz:[
[R`ຕຳລາປີ້ນຂອງ $f(x)=5x-7$:`, [R`$\frac{x-7}5$`,R`$\frac{x+7}5$`,R`$5x+7$`,R`$\frac15x-7$`],1,""],
[R`ຕຳລາມີຕຳລາປີ້ນເມື່ອມັນ:`, ["ເປັນພະຫຸພົດ","ໜຶ່ງຕໍ່ໜຶ່ງ","ຕໍ່ເນື່ອງ","ເປັນຕຳລາຄູ່"],1,""],
[R`ເສັ້ນສະແດງ $f$ ແລະ $f^{-1}$ ສົມມາດທຽບກັບ:`, [R`ແກນ $Ox$`,R`ແກນ $Oy$`,R`ເສັ້ນ $y=x$`,R`ເມັດ $O$`],2,""],
[R`ຕຳລາປີ້ນຂອງ $f(x)=2x+3$:`, [R`$\frac{x-3}2$`,R`$\frac{x+3}2$`,R`$2x-3$`,R`$\frac1{2x+3}$`],0,""],
[R`$f^{-1}$ ຂອງ $f(x)=e^x$:`, [R`$e^{-x}$`,R`$\ln x$`,R`$\frac1{e^x}$`,R`$\log x$`],1,""],
[R`ຖ້າ $f(2)=5$ ແລ້ວ $f^{-1}(5)$:`, ["5","2",R`$\frac15$`,R`$\frac12$`],1,""],
[R`ເຂດກຳນົດຂອງ $f^{-1}$ ເທົ່າກັບ:`, [R`ເຂດກຳນົດຂອງ $f$`,R`ເຂດຄ່າຂອງ $f$`,R`$\mathbb{R}$`,"ບໍ່ມີ"],1,""],
[R`ຕຳລາປີ້ນຂອງ $f(x)=\frac{2x+1}{x-1}$:`, [R`$\frac{x+1}{x-2}$`,R`$\frac{x-1}{2x+1}$`,R`$\frac{x-2}{x+1}$`,R`$\frac{2x-1}{x+1}$`],0,""]
]});

M7.ch.push({
n:18, part:5, title:"ຕຳລາປີ້ນຂອງຕຳລາຊິນ ແລະ ໂກຊິນ",
goal:R`ກຳໄດ້ນິຍາມ, ເຂດກຳນົດ, ເຂດຄ່າ ແລະ ຄຸນລັກສະນະຂອງ $\arcsin x$ ແລະ $\arccos x$ ແລະ ຄິດໄລ່ສຳນວນທີ່ກ່ຽວຂ້ອງ.`,
slides:[
[R`ຈຳກັດເຂດເພື່ອໃຫ້ມີຕຳລາປີ້ນ`, R`<p>$\sin x$ ແລະ $\cos x$ ບໍ່ແມ່ນໜຶ່ງຕໍ່ໜຶ່ງເທິງ $\mathbb{R}$ (ວົນຄືນ). ຈຶ່ງຈຳກັດເຂດ:</p>
<div class="cols"><div class="box"><span class="lbl">ຊິນ</span>$\sin x$ ເທິງ $\left[-\frac\pi2;\frac\pi2\right]$ → ໜຶ່ງຕໍ່ໜຶ່ງ</div><div class="box green"><span class="lbl">ໂກຊິນ</span>$\cos x$ ເທິງ $[0;\pi]$ → ໜຶ່ງຕໍ່ໜຶ່ງ</div></div>`],
[R`ຕຳລາ arcsin`, R`<div class="box"><span class="lbl">ນິຍາມ</span>$y=\arcsin x\iff\sin y=x$ ແລະ $-\frac\pi2\le y\le\frac\pi2$</div>
<p>ເຂດກຳນົດ: $[-1;1]$ · ເຂດຄ່າ: $\left[-\frac\pi2;\frac\pi2\right]$ · ເປັນຕຳລາຄີກ: $\arcsin(-x)=-\arcsin x$</p>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\arcsin\frac12=\frac\pi6$ · $\arcsin1=\frac\pi2$ · $\arcsin\left(-\frac{\sqrt2}2\right)=-\frac\pi4$</div>`],
[R`ຕຳລາ arccos`, R`<div class="box green"><span class="lbl">ນິຍາມ</span>$y=\arccos x\iff\cos y=x$ ແລະ $0\le y\le\pi$</div>
<p>ເຂດກຳນົດ: $[-1;1]$ · ເຂດຄ່າ: $[0;\pi]$ · $\arccos(-x)=\pi-\arccos x$</p>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\arccos\frac12=\frac\pi3$ · $\arccos0=\frac\pi2$ · $\arccos\left(-\frac12\right)=\frac{2\pi}3$ · $\arccos(-1)=\pi$</div>`],
[R`ຄຸນລັກສະນະສຳຄັນ`, R`<ul><li>$\sin(\arcsin x)=x,\ \cos(\arccos x)=x$ ສຳລັບ $x\in[-1;1]$</li><li>$\arcsin(\sin x)=x$ ສະເພາະ $x\in\left[-\frac\pi2;\frac\pi2\right]$</li><li>$\arccos(\cos x)=x$ ສະເພາະ $x\in[0;\pi]$</li><li>$\arcsin x+\arccos x=\dfrac\pi2$</li><li>$\cos(\arcsin x)=\sqrt{1-x^2},\quad\sin(\arccos x)=\sqrt{1-x^2}$</li></ul>`],
[R`ຕົວຢ່າງການຄິດໄລ່`, R`<div class="ex"><span class="lbl">$\sin\left(\arccos\frac35\right)$</span>ໃຫ້ $\alpha=\arccos\frac35\in[0;\pi]$ → $\sin\alpha=\sqrt{1-\frac9{25}}=\frac45$</div>
<div class="ex"><span class="lbl">$\arcsin\left(\sin\frac{5\pi}6\right)$</span>$\sin\frac{5\pi}6=\frac12$ → $\arcsin\frac12=\frac\pi6$ (ບໍ່ແມ່ນ $\frac{5\pi}6$!)</div>
<div class="ex"><span class="lbl">$\cos\left(2\arcsin\frac13\right)$</span>$=1-2\sin^2(\arcsin\frac13)=1-\frac29=\frac79$</div>`],
[R`ສະຫຼຸບບົດ`, R`<div class="tbl"><table><tr><th></th><th>ເຂດກຳນົດ</th><th>ເຂດຄ່າ</th></tr><tr><td>$\arcsin x$</td><td>$[-1;1]$</td><td>$[-\frac\pi2;\frac\pi2]$</td></tr><tr><td>$\arccos x$</td><td>$[-1;1]$</td><td>$[0;\pi]$</td></tr></table></div><ul><li>$\arcsin x+\arccos x=\frac\pi2$</li><li>ລະວັງເຂດຄ່າເມື່ອຄິດໄລ່ $\arcsin(\sin x)$</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\arcsin\frac{\sqrt3}2,\ \arccos\frac{\sqrt2}2,\ \arcsin(-1)$.`, R`$\frac\pi3,\ \frac\pi4,\ -\frac\pi2$.`],
[R`ຈົ່ງຄິດໄລ່ $\arccos\left(-\frac{\sqrt3}2\right)$.`, R`$\pi-\frac\pi6=\frac{5\pi}6$.`],
[R`ຈົ່ງຄິດໄລ່ $\cos\left(\arcsin\frac13\right)$.`, R`$\sqrt{1-\frac19}=\frac{2\sqrt2}3$.`],
[R`ຈົ່ງຄິດໄລ່ $\arccos\left(\cos\frac{7\pi}6\right)$.`, R`$\cos\frac{7\pi}6=-\frac{\sqrt3}2$ → $\arccos(-\frac{\sqrt3}2)=\frac{5\pi}6$.`],
[R`ຈົ່ງຄິດໄລ່ $\arcsin\frac25+\arccos\frac25$.`, R`$\frac\pi2$.`],
[R`ຈົ່ງຄິດໄລ່ $\sin\left(\arcsin\frac35+\arccos\frac5{13}\right)$.`, R`$\sin a=\frac35,\cos a=\frac45;\ \cos b=\frac5{13},\sin b=\frac{12}{13}$. $\sin(a+b)=\frac35\cdot\frac5{13}+\frac45\cdot\frac{12}{13}=\frac{63}{65}$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\arcsin0+\arccos0+\arccos1$.`, R`$0+\frac\pi2+0=\frac\pi2$.`],
[R`ຈົ່ງຊອກເຂດກຳນົດຂອງ $f(x)=\arcsin(2x-1)$.`, R`$-1\le2x-1\le1\Rightarrow0\le x\le1$.`],
[R`ຈົ່ງຄິດໄລ່ $\tan\left(\arccos\frac45\right)$.`, R`$\cos=\frac45,\ \sin=\frac35$ → $\tan=\frac34$.`],
[R`ຈົ່ງຄິດໄລ່ $\sin\left(2\arccos\frac35\right)$.`, R`$2\cdot\frac45\cdot\frac35=\frac{24}{25}$.`],
[R`ຈົ່ງແກ້ $\arcsin x=\frac\pi3$ ແລະ $\arccos x=\frac{3\pi}4$.`, R`$x=\frac{\sqrt3}2$; $\ x=-\frac{\sqrt2}2$.`],
[R`ຈົ່ງຄິດໄລ່ $\arcsin\left(\sin\frac{2\pi}3\right)$.`, R`$\sin\frac{2\pi}3=\frac{\sqrt3}2$ → $\frac\pi3$.`]
],
quiz:[
[R`ເຂດກຳນົດຂອງ $\arcsin x$:`, [R`$\mathbb{R}$`,R`$[-1;1]$`,R`$[0;\pi]$`,R`$[-\frac\pi2;\frac\pi2]$`],1,""],
[R`ເຂດຄ່າຂອງ $\arccos x$:`, [R`$[-1;1]$`,R`$[0;\pi]$`,R`$[-\frac\pi2;\frac\pi2]$`,R`$(0;\pi)$`],1,""],
[R`$\arcsin\frac12$`, [R`$\frac\pi3$`,R`$\frac\pi6$`,R`$\frac{5\pi}6$`,R`$\frac\pi4$`],1,""],
[R`$\arccos\left(-\frac12\right)$`, [R`$-\frac\pi3$`,R`$\frac\pi3$`,R`$\frac{2\pi}3$`,R`$\frac{4\pi}3$`],2,""],
[R`$\arcsin x+\arccos x=$`, ["0",R`$\pi$`,R`$\frac\pi2$`,"1"],2,""],
[R`$\sin\left(\arccos\frac35\right)$`, [R`$\frac35$`,R`$\frac45$`,R`$\frac34$`,R`$-\frac45$`],1,""],
[R`$\arcsin\left(\sin\frac{5\pi}6\right)$`, [R`$\frac{5\pi}6$`,R`$\frac\pi6$`,R`$-\frac\pi6$`,R`$\frac\pi3$`],1,""],
[R`$\arcsin(-x)=$`, [R`$\arcsin x$`,R`$-\arcsin x$`,R`$\pi-\arcsin x$`,R`$\frac\pi2-\arcsin x$`],1,""]
]});

M7.ch.push({
n:19, part:5, title:"ຕຳລາປີ້ນຂອງຕຳລາຕັງ ແລະ ໂກຕັງ",
goal:R`ກຳໄດ້ນິຍາມ ແລະ ຄຸນລັກສະນະຂອງ $\arctan x$ ແລະ $\operatorname{arccot}x$ ແລະ ຄິດໄລ່ສຳນວນທີ່ກ່ຽວຂ້ອງ.`,
slides:[
[R`ຕຳລາ arctan`, R`<p>ຈຳກັດ $\tan x$ ເທິງ $\left(-\frac\pi2;\frac\pi2\right)$:</p><div class="box"><span class="lbl">ນິຍາມ</span>$y=\arctan x\iff\tan y=x$ ແລະ $-\frac\pi2\lt y\lt\frac\pi2$</div>
<p>ເຂດກຳນົດ: $\mathbb{R}$ · ເຂດຄ່າ: $\left(-\frac\pi2;\frac\pi2\right)$ · ຕຳລາຄີກ · ເສັ້ນເຂົ້າໃກ້ $y=\pm\frac\pi2$</p>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\arctan1=\frac\pi4$ · $\arctan\sqrt3=\frac\pi3$ · $\arctan(-\sqrt3)=-\frac\pi3$ · $\arctan0=0$</div>`],
[R`ຕຳລາ arccot`, R`<p>ຈຳກັດ $\cot x$ ເທິງ $(0;\pi)$:</p><div class="box green"><span class="lbl">ນິຍາມ</span>$y=\operatorname{arccot}x\iff\cot y=x$ ແລະ $0\lt y\lt\pi$</div>
<p>ເຂດກຳນົດ: $\mathbb{R}$ · ເຂດຄ່າ: $(0;\pi)$ · $\operatorname{arccot}(-x)=\pi-\operatorname{arccot}x$</p>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\operatorname{arccot}1=\frac\pi4$ · $\operatorname{arccot}0=\frac\pi2$ · $\operatorname{arccot}(-1)=\frac{3\pi}4$</div>`],
[R`ຄຸນລັກສະນະ`, R`<ul><li>$\tan(\arctan x)=x$; $\arctan(\tan x)=x$ ສະເພາະ $x\in(-\frac\pi2;\frac\pi2)$</li><li>$\arctan x+\operatorname{arccot}x=\dfrac\pi2$</li><li>$\operatorname{arccot}x=\arctan\dfrac1x$ ສຳລັບ $x\gt0$</li><li>$\cos(\arctan x)=\dfrac1{\sqrt{1+x^2}},\quad\sin(\arctan x)=\dfrac x{\sqrt{1+x^2}}$</li></ul>`],
[R`ສູດຜົນບວກ`, R`<div class="box"><span class="lbl">ຈາກສູດ $\tan(\alpha+\beta)$</span>$$\tan(\arctan a+\arctan b)=\frac{a+b}{1-ab}$$</div>
<div class="ex"><span class="lbl">ສະແດງວ່າ $\arctan\frac12+\arctan\frac13=\frac\pi4$</span>$\tan(\dots)=\dfrac{\frac12+\frac13}{1-\frac16}=1$; ຜົນບວກຢູ່ໃນ $(0;\frac\pi2)$ → $=\frac\pi4$</div>
<div class="ex"><span class="lbl">$\tan(\operatorname{arccot}2+\operatorname{arccot}3)$</span>$=\tan(\arctan\frac12+\arctan\frac13)=1$</div>`],
[R`ຕົວຢ່າງ`, R`<div class="ex"><span class="lbl">$\cos(\arctan2)$</span>$\tan\alpha=2,\ \alpha\in(0;\frac\pi2)$ → $\cos\alpha=\frac1{\sqrt{1+4}}=\frac{\sqrt5}5$</div>
<div class="ex"><span class="lbl">$\sin\left(2\arctan\frac34\right)$</span>$=\dfrac{2\tan\alpha}{1+\tan^2\alpha}=\dfrac{\frac32}{\frac{25}{16}}=\dfrac{24}{25}$</div>`],
[R`ສະຫຼຸບບົດ`, R`<div class="tbl"><table><tr><th></th><th>ເຂດກຳນົດ</th><th>ເຂດຄ່າ</th></tr><tr><td>$\arctan x$</td><td>$\mathbb{R}$</td><td>$(-\frac\pi2;\frac\pi2)$</td></tr><tr><td>$\operatorname{arccot}x$</td><td>$\mathbb{R}$</td><td>$(0;\pi)$</td></tr></table></div><ul><li>$\arctan x+\operatorname{arccot}x=\frac\pi2$</li><li>$\tan(\arctan a+\arctan b)=\frac{a+b}{1-ab}$</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\arctan\frac{\sqrt3}3$ ແລະ $\operatorname{arccot}\sqrt3$.`, R`$\frac\pi6$ ແລະ $\frac\pi6$.`],
[R`ຈົ່ງຄິດໄລ່ $\operatorname{arccot}\left(-\sqrt3\right)$.`, R`$\pi-\frac\pi6=\frac{5\pi}6$.`],
[R`ຈົ່ງຄິດໄລ່ $\sin\left(\arctan\frac34\right)$.`, R`$\frac{3/4}{\sqrt{1+9/16}}=\frac35$.`],
[R`ຈົ່ງສະແດງວ່າ $\arctan2+\arctan3=\frac{3\pi}4$.`, R`$\tan(\dots)=\frac{5}{1-6}=-1$; ຜົນບວກຢູ່ໃນ $(\frac\pi2;\pi)$ → $\frac{3\pi}4$.`],
[R`ຈົ່ງຄິດໄລ່ $\tan(x+y)$ ເມື່ອ $x=\arctan\frac14,\ y=\arctan\frac35$.`, R`$\frac{\frac14+\frac35}{1-\frac3{20}}=\frac{17/20}{17/20}=1$.`],
[R`ຈົ່ງຄິດໄລ່ $\arctan(-1)+\operatorname{arccot}(-1)$.`, R`$-\frac\pi4+\frac{3\pi}4=\frac\pi2$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\arctan1+\operatorname{arccot}1$.`, R`$\frac\pi2$.`],
[R`ຈົ່ງຄິດໄລ່ $\cos\left(\operatorname{arccot}\frac12\right)$.`, R`$\cot\alpha=\frac12,\ \alpha\in(0;\frac\pi2)$: $\cos\alpha=\frac{1}{\sqrt5}$.`],
[R`ຈົ່ງຄິດໄລ່ $\tan\left(2\arctan\frac13\right)$.`, R`$\frac{2/3}{1-1/9}=\frac34$.`],
[R`ຈົ່ງແກ້ $\arctan x=\frac\pi3$ ແລະ $\operatorname{arccot}x=\frac{2\pi}3$.`, R`$x=\sqrt3$; $\ x=\cot\frac{2\pi}3=-\frac{\sqrt3}3$.`],
[R`ຈົ່ງສະແດງວ່າ $2\arctan\frac13+\arctan\frac17=\frac\pi4$.`, R`$\tan(2\arctan\frac13)=\frac34$; $\tan(\cdot+\arctan\frac17)=\frac{\frac34+\frac17}{1-\frac3{28}}=1$ ✓.`],
[R`ຈົ່ງຄິດໄລ່ $\sin(\arctan x)$ ຕາມ $x$.`, R`$\frac x{\sqrt{1+x^2}}$.`]
],
quiz:[
[R`ເຂດຄ່າຂອງ $\arctan x$:`, [R`$[-\frac\pi2;\frac\pi2]$`,R`$(-\frac\pi2;\frac\pi2)$`,R`$(0;\pi)$`,R`$\mathbb{R}$`],1,""],
[R`ເຂດຄ່າຂອງ $\operatorname{arccot}x$:`, [R`$(0;\pi)$`,R`$[0;\pi]$`,R`$(-\frac\pi2;\frac\pi2)$`,R`$\mathbb{R}$`],0,""],
[R`$\operatorname{arccot}(1)$`, [R`$\frac\pi4$`,R`$\frac{3\pi}4$`,R`$\frac\pi2$`,"0"],0,""],
[R`$\arctan(-\sqrt3)$`, [R`$\frac\pi3$`,R`$-\frac\pi3$`,R`$\frac{2\pi}3$`,R`$-\frac\pi6$`],1,""],
[R`$\arctan x+\operatorname{arccot}x$`, ["0",R`$\frac\pi2$`,R`$\pi$`,R`$\frac\pi4$`],1,""],
[R`$\tan(\operatorname{arccot}2+\operatorname{arccot}3)$`, ["1","−1","5",R`$\frac56$`],0,""],
[R`$\arctan\frac12+\arctan\frac13$`, [R`$\frac\pi6$`,R`$\frac\pi4$`,R`$\frac\pi3$`,R`$\frac\pi2$`],1,""],
[R`$\cos(\arctan2)$`, [R`$\frac{\sqrt5}5$`,R`$\frac{2\sqrt5}5$`,R`$\frac12$`,"2"],0,""]
]});
