/* ພາກທີ 7 (ສ່ວນ 1): ຈຸນລະຄະນິດ ແລະ ສັງຄະນິດບໍ່ມີຂອບ (ບົດ 28–35) */
M7.ch.push({
n:28, part:7, title:"ຈຸນລະຄະນິດ",
goal:R`ເຂົ້າໃຈຄວາມໝາຍຂອງຈຸນລະຄະນິດ $dy$ ຂອງຕຳລາ, ແຍກຄວາມແຕກຕ່າງລະຫວ່າງ $\Delta y$ ແລະ $dy$ ແລະ ຄິດໄລ່ຈຸນລະຄະນິດຂອງຕຳລາຕ່າງໆ.`,
slides:[
[R`ຈຸນລະຄະນິດໃຊ້ເຮັດຫຍັງ?`, R`<ul><li><b>ວິສະວະກຳ:</b> ປະເມີນຜົນຂອງຄວາມຜິດພາດນ້ອຍໆໃນການວັດແທກ</li><li><b>ຟີຊິກ:</b> ການປ່ຽນແປງນ້ອຍໆຂອງຄວາມໄວ, ໄລຍະທາງ</li><li><b>ເສດຖະສາດ:</b> ຄາດຄະເນການປ່ຽນແປງຂອງກຳໄລ ເມື່ອລາຄາປ່ຽນໜ້ອຍໜຶ່ງ</li><li><b>ການແພດ:</b> ການປ່ຽນແປງປະລິມານຢາ</li></ul><p>ແນວຄິດ: ໃກ້ໆເມັດໜຶ່ງ ເສັ້ນໂຄ້ງເກືອບເປັນເສັ້ນຊື່ (ເສັ້ນຕິດ).</p>`],
[R`ນິຍາມຈຸນລະຄະນິດ`, R`<p>ໃຫ້ $y=f(x)$ ມີຜົນຕຳລາ. ເມື່ອ $x$ ປ່ຽນ $\Delta x=dx$:</p>
<div class="box"><span class="lbl">ການປ່ຽນແປງແທ້</span>$\Delta y=f(x+\Delta x)-f(x)$</div>
<div class="box green"><span class="lbl">ຈຸນລະຄະນິດ</span>$dy=f'(x)\,dx$</div>
<p>ຄວາມໝາຍເລຂາຄະນິດ: $dy$ ແມ່ນການປ່ຽນແປງຕາມ <b>ເສັ້ນຕິດ</b>; $\Delta y$ ແມ່ນຕາມ <b>ເສັ້ນໂຄ້ງ</b>. ເມື່ອ $dx$ ນ້ອຍ: $\Delta y\approx dy$.</p>`],
[R`ຕົວຢ່າງ: ປຽບທຽບ $\Delta y$ ກັບ $dy$`, R`<div class="ex"><span class="lbl">$y=x^2,\ x=2,\ dx=0.1$</span>$\Delta y=(2.1)^2-4=0.41$<br>$dy=2x\,dx=2(2)(0.1)=0.4$<br>$\Delta y-dy=0.01$ (ນ້ອຍຫຼາຍ)</div>
<div class="ex"><span class="lbl">$y=x^3,\ x=1,\ dx=0.01$</span>$\Delta y=1.030301-1=0.030301$; $dy=3(1)^2(0.01)=0.03$</div>`],
[R`ຫຼັກເກນຄິດໄລ່ຈຸນລະຄະນິດ`, R`<div class="box"><span class="lbl">ຫຼັກເກນ (ຄືກັບຜົນຕຳລາ)</span>$d(c)=0$ · $d(cu)=c\,du$ · $d(u\pm v)=du\pm dv$<br>$d(uv)=u\,dv+v\,du$ · $d\left(\dfrac uv\right)=\dfrac{v\,du-u\,dv}{v^2}$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$d(\sin2x)=2\cos2x\,dx$<br>$d(e^{x^2})=2xe^{x^2}dx$<br>$d(\ln(x^2+1))=\dfrac{2x}{x^2+1}dx$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$dy=f'(x)dx$; $\Delta y=f(x+dx)-f(x)$</li><li>$\Delta y\approx dy$ ເມື່ອ $dx$ ນ້ອຍ</li><li>ຄິດໄລ່ $dy$ = ຄິດໄລ່ຜົນຕຳລາ ແລ້ວຄູນ $dx$</li></ul>`]
],
ex:[
[R`ຈົ່ງຊອກ $dy$: $y=x^4-3x^2+2$.`, R`$dy=(4x^3-6x)dx$.`],
[R`ຈົ່ງຊອກ $dy$: $y=\sqrt{2x+1}$.`, R`$dy=\frac{1}{\sqrt{2x+1}}dx$.`],
[R`ຈົ່ງຊອກ $dy$: $y=x\ln x$.`, R`$dy=(\ln x+1)dx$.`],
[R`ຈົ່ງຊອກ $dy$: $y=\dfrac{x}{x+1}$.`, R`$dy=\frac{1}{(x+1)^2}dx$.`],
[R`ໃຫ້ $y=x^2-x$, $x=3,\ dx=0.02$. ຈົ່ງຄິດໄລ່ $\Delta y,\ dy$ ແລະ $\Delta y-dy$.`, R`$\Delta y=(3.02^2-3.02)-6=0.1004$; $dy=(2x-1)dx=0.1$; ຕ່າງກັນ $0.0004$.`],
[R`ຈົ່ງຊອກ $dy$: $y=e^{\sin x}$.`, R`$dy=\cos x\,e^{\sin x}dx$.`]
],
hw:[
[R`ຈົ່ງຊອກ $dy$: $y=(3x^2+1)^5$.`, R`$30x(3x^2+1)^4dx$.`],
[R`ຈົ່ງຊອກ $dy$: $y=\tan2x$.`, R`$\frac{2}{\cos^22x}dx$.`],
[R`ຈົ່ງຊອກ $dy$: $y=\arctan x^2$.`, R`$\frac{2x}{1+x^4}dx$.`],
[R`ໃຫ້ $y=x^3$, $x=2,\ dx=0.1$. ຈົ່ງຄິດໄລ່ $\Delta y$ ແລະ $dy$.`, R`$\Delta y=9.261-8=1.261$; $dy=12(0.1)=1.2$.`],
[R`ໃຫ້ $y=\sqrt x$, $x=4,\ dx=0.5$. ຈົ່ງຄິດໄລ່ $\Delta y$ ແລະ $dy$.`, R`$\Delta y=\sqrt{4.5}-2\approx0.1213$; $dy=\frac{0.5}{4}=0.125$.`],
[R`ຈົ່ງຊອກ $dy$: $y=e^{x}\cos x$.`, R`$e^x(\cos x-\sin x)dx$.`]
],
quiz:[
[R`ຈຸນລະຄະນິດ $dy=$`, [R`$f(x)dx$`,R`$f'(x)dx$`,R`$f(x+dx)-f(x)$`,R`$\frac{f'(x)}{dx}$`],1,""],
[R`$y=x^2,\ x=2,\ dx=0.1$: $dy=$`, ["0.41","0.4","0.2","4"],1,""],
[R`$y=x^2,\ x=2,\ dx=0.1$: $\Delta y=$`, ["0.41","0.4","0.21","0.01"],0,""],
[R`$d(\sin2x)$`, [R`$\cos2x\,dx$`,R`$2\cos2x\,dx$`,R`$-2\cos2x\,dx$`,R`$2\sin x\,dx$`],1,""],
[R`$d(uv)$`, [R`$du\,dv$`,R`$u\,dv+v\,du$`,R`$u\,dv-v\,du$`,R`$\frac{du}{dv}$`],1,""],
[R`$dy$ ແມ່ນການປ່ຽນແປງຕາມ:`, ["ເສັ້ນໂຄ້ງ","ເສັ້ນຕິດ","ແກນ Ox","ເສັ້ນຕັ້ງສາກ"],1,""],
[R`$d(\ln x)$`, [R`$\frac{dx}x$`,R`$x\,dx$`,R`$\ln x\,dx$`,R`$e^x dx$`],0,""],
[R`ເມື່ອ $dx$ ນ້ອຍຫຼາຍ:`, [R`$\Delta y=0$`,R`$\Delta y\approx dy$`,R`$dy=0$`,R`$\Delta y\gg dy$`],1,""]
]});

M7.ch.push({
n:29, part:7, title:"ການນຳໃຊ້ຈຸນລະຄະນິດ",
goal:R`ນຳໃຊ້ຈຸນລະຄະນິດເພື່ອຄິດໄລ່ຄ່າປະມານ ແລະ ປະເມີນຄວາມຜິດພາດໃນການວັດແທກ (ຄວາມຜິດພາດສົມບູນ ແລະ ສຳພັດ).`,
slides:[
[R`ສູດຄ່າປະມານ`, R`<div class="box green"><span class="lbl">ສູດ</span>$$f(x_0+\Delta x)\approx f(x_0)+f'(x_0)\Delta x$$</div><p>ເລືອກ $x_0$ ທີ່ຄິດໄລ່ $f(x_0)$ ງ່າຍ ແລະ ໃກ້ກັບຄ່າທີ່ຕ້ອງການ.</p>
<div class="ex"><span class="lbl">$\sqrt{26}$</span>$f(x)=\sqrt x,\ x_0=25,\ \Delta x=1$: $\sqrt{26}\approx5+\dfrac1{2\cdot5}=5.1$ (ຄ່າແທ້ 5.0990)</div>`],
[R`ຕົວຢ່າງຄ່າປະມານ`, R`<div class="ex"><span class="lbl">$\sqrt[3]{8.1}$</span>$f=\sqrt[3]x,\ f'=\frac1{3\sqrt[3]{x^2}}$: $\approx2+\frac{0.1}{12}\approx2.0083$</div>
<div class="ex"><span class="lbl">$(1.01)^5$</span>$\approx1+5(0.01)=1.05$ (ແທ້ 1.0510)</div>
<div class="ex"><span class="lbl">$\sin31^\circ$</span>$x_0=30^\circ,\ \Delta x=1^\circ=\frac\pi{180}$: $\approx\frac12+\frac{\sqrt3}2\cdot\frac\pi{180}\approx0.5151$</div>
<div class="box red"><span class="lbl">ລະວັງ</span>ໃນຕຳລາໄຕມຸມມິຕິ $\Delta x$ ຕ້ອງເປັນເຣດຽນ</div>`],
[R`ຄວາມຜິດພາດໃນການວັດແທກ`, R`<p>ວັດ $x$ ໄດ້ຄວາມຜິດພາດ $dx$ → ຄ່າທີ່ຄິດໄລ່ $y=f(x)$ ຜິດພາດປະມານ $dy$:</p>
<div class="box"><span class="lbl">ນິຍາມ</span>ຄວາມຜິດພາດສົມບູນ: $|dy|$ · ຄວາມຜິດພາດສຳພັດ: $\left|\dfrac{dy}y\right|$ · ເປີເຊັນ: $\left|\dfrac{dy}y\right|\times100\%$</div>
<div class="ex"><span class="lbl">ແຜ່ນມົນ $r=24$ cm, ຜິດ $0.2$ cm</span>$A=\pi r^2\Rightarrow dA=2\pi r\,dr=2\pi(24)(0.2)=9.6\pi\approx30.16$ cm²<br>ສຳພັດ: $\frac{dA}A=\frac{2dr}r=\frac{0.4}{24}\approx1.67\%$</div>`],
[R`ຕົວຢ່າງ: ບໍລິມາດ`, R`<div class="ex"><span class="lbl">ຮູບກ້ອນຈະຕຸລັດຂ້າງ 30 cm, ຜິດ 0.1 cm</span>$V=x^3\Rightarrow dV=3x^2dx=3(900)(0.1)=270$ cm³<br>ສຳພັດ: $\frac{3dx}{x}=1\%$</div>
<div class="ex"><span class="lbl">ໜ່ວຍກົມ $r=50$ cm, ຜິດ 0.01 cm</span>$dV=4\pi r^2dr=100\pi\approx314$ cm³; ສຳພັດ $\frac{3dr}r=0.06\%$</div>
<div class="box green"><span class="lbl">ກົດໄວ</span>ຖ້າ $y=kx^n$ ແລ້ວ $\dfrac{dy}y=n\dfrac{dx}x$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$f(x_0+\Delta x)\approx f(x_0)+f'(x_0)\Delta x$</li><li>ຄວາມຜິດພາດ: $dy=f'(x)dx$; ສຳພັດ $\frac{dy}y$</li><li>$y=kx^n$: ຄວາມຜິດພາດສຳພັດ $=n\times$ ຄວາມຜິດພາດສຳພັດຂອງ $x$</li></ul>`]
],
ex:[
[R`ຈົ່ງໃຊ້ຈຸນລະຄະນິດຄິດໄລ່ຄ່າປະມານ $\sqrt{49.5}$.`, R`$7+\frac{0.5}{14}\approx7.0357$.`],
[R`ຈົ່ງຄິດໄລ່ຄ່າປະມານ $\sqrt[3]{26.5}$.`, R`$3+\frac{-0.5}{27}\approx2.9815$.`],
[R`ຈົ່ງຄິດໄລ່ຄ່າປະມານ $\ln(1.02)$.`, R`$\ln1+\frac1{1}(0.02)=0.02$.`],
[R`ຈົ່ງຄິດໄລ່ຄ່າປະມານ $\cos61^\circ$.`, R`$\frac12-\frac{\sqrt3}2\cdot\frac\pi{180}\approx0.4849$.`],
[R`ຂ້າງຮູບຈະຕຸລັດວັດໄດ້ 30 cm ຜິດ 0.1 cm. ປະເມີນຄວາມຜິດພາດຂອງເນື້ອທີ່.`, R`$dS=2x\,dx=6$ cm²; ສຳພັດ $\frac{2(0.1)}{30}\approx0.67\%$.`],
[R`ຄວາມຕ້ານ $R=\frac k{r^2}$. ຖ້າ $r$ ຜິດ 1%, $R$ ຜິດຈັກ %?`, R`$\frac{dR}R=-2\frac{dr}r$ → ປະມານ 2%.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ຄ່າປະມານ $\sqrt{101}$.`, R`$10+\frac1{20}=10.05$.`],
[R`ຈົ່ງຄິດໄລ່ຄ່າປະມານ $(2.01)^4$.`, R`$16+32(0.01)=16.32$.`],
[R`ຈົ່ງຄິດໄລ່ຄ່າປະມານ $e^{0.05}$.`, R`$1+0.05=1.05$.`],
[R`ລັດສະໝີແຜ່ນມົນວັດໄດ້ 24 cm ຜິດ 0.2 cm. ຈົ່ງປະເມີນຄວາມຜິດພາດຂອງເນື້ອທີ່ ແລະ ເປີເຊັນຄວາມຜິດພາດ.`, R`$dA=9.6\pi\approx30.16$ cm²; $\approx1.67\%$.`],
[R`ໜ່ວຍກົມລັດສະໝີ 50 cm ວັດຜິດ 0.01 cm. ຄວາມຜິດພາດຂອງບໍລິມາດ ແລະ ເນື້ອທີ່ໜ້າ?`, R`$dV=100\pi\approx314$ cm³; $dS=8\pi r\,dr=4\pi\approx12.57$ cm².`],
[R`ຕ້ອງວັດລັດສະໝີຂອງໜ່ວຍກົມໃຫ້ຖືກຕ້ອງຂະໜາດໃດ ເພື່ອໃຫ້ບໍລິມາດຜິດບໍ່ເກີນ 3%?`, R`$\frac{dV}V=3\frac{dr}r\le3\%$ → $\frac{dr}r\le1\%$.`]
],
quiz:[
[R`$f(x_0+\Delta x)\approx$`, [R`$f(x_0)\Delta x$`,R`$f(x_0)+f'(x_0)\Delta x$`,R`$f'(x_0)+\Delta x$`,R`$f(x_0)+\Delta x$`],1,""],
[R`ຄ່າປະມານ $\sqrt{26}$:`, ["5.01","5.1","5.2","5.5"],1,""],
[R`ຄ່າປະມານ $(1.01)^5$:`, ["1.005","1.05","1.5","1.01"],1,""],
[R`ຮູບກ້ອນຂ້າງ 30 cm ຜິດ 0.1 cm: $dV=$`, ["90 cm³","270 cm³","9 cm³","2700 cm³"],1,""],
[R`ຖ້າ $y=x^3$ ແລະ $x$ ຜິດ 1% ແລ້ວ $y$ ຜິດປະມານ:`, ["1%","2%","3%","9%"],2,""],
[R`ຄວາມຜິດພາດສຳພັດແມ່ນ:`, [R`$dy$`,R`$\frac{dy}{y}$`,R`$\Delta x$`,R`$y\,dy$`],1,""],
[R`ຄ່າປະມານ $\sin31^\circ$ ໃຊ້ $\Delta x=$`, [R`$1$`,R`$\frac\pi{180}$`,R`$\frac{180}\pi$`,R`$0.1$`],1,""],
[R`ແຜ່ນມົນ $r=24$, $dr=0.2$: $dA=$`, [R`$9.6\pi$`,R`$4.8\pi$`,R`$0.4\pi$`,R`$96\pi$`],0,""]
]});

M7.ch.push({
n:30, part:7, title:"ສັງຄະນິດບໍ່ມີຂອບ",
goal:R`ເຂົ້າໃຈຄວາມໝາຍຂອງເຄົ້າຕຳລາ ແລະ ສັງຄະນິດບໍ່ມີຂອບ ແລະ ຄິດໄລ່ສັງຄະນິດດ້ວຍຕາຕະລາງສູດພື້ນຖານ.`,
slides:[
[R`ເຄົ້າຕຳລາ`, R`<div class="box"><span class="lbl">ນິຍາມ</span>$F(x)$ ເປັນ <b>ເຄົ້າຕຳລາ</b> ຂອງ $f(x)$ ຖ້າ $F'(x)=f(x)$</div><p>ເຊັ່ນ: $x^2,\ x^2+5,\ x^2-3$ ເປັນເຄົ້າຕຳລາຂອງ $2x$ ທັງໝົດ.</p>
<div class="box green"><span class="lbl">ສັງຄະນິດບໍ່ມີຂອບ</span>$$\int f(x)\,dx=F(x)+C$$ $C$ = ຄ່າຄົງທີ່ສັງຄະນິດ</div><p>ສັງຄະນິດ ແມ່ນການປະຕິບັດປີ້ນຂອງການຫາຜົນຕຳລາ.</p>`],
[R`ຕາຕະລາງສູດພື້ນຖານ`, R`<div class="tbl"><table><tr><th>$\int f(x)dx$</th><th>ຜົນ</th></tr>
<tr><td>$\int x^n dx\ (n\neq-1)$</td><td>$\frac{x^{n+1}}{n+1}+C$</td></tr>
<tr><td>$\int\frac1x dx$</td><td>$\ln|x|+C$</td></tr>
<tr><td>$\int e^x dx$</td><td>$e^x+C$</td></tr>
<tr><td>$\int a^x dx$</td><td>$\frac{a^x}{\ln a}+C$</td></tr>
<tr><td>$\int\sin x\,dx$</td><td>$-\cos x+C$</td></tr>
<tr><td>$\int\cos x\,dx$</td><td>$\sin x+C$</td></tr>
<tr><td>$\int\frac{dx}{\cos^2x}$</td><td>$\tan x+C$</td></tr></table></div>`],
[R`ຄຸນລັກສະນະ`, R`<div class="box"><span class="lbl">ຄຸນລັກສະນະເສັ້ນຊື່</span>$\int kf(x)dx=k\int f(x)dx$<br>$\int[f(x)\pm g(x)]dx=\int f\,dx\pm\int g\,dx$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int(3x^2-4x+5)dx=x^3-2x^2+5x+C$<br>$\int\left(\sqrt x+\frac1{x^2}\right)dx=\frac23x^{3/2}-\frac1x+C$<br>$\int\frac{(x+1)^2}x dx=\int\left(x+2+\frac1x\right)dx=\frac{x^2}2+2x+\ln|x|+C$</div>`],
[R`ຊອກຕຳລາຈາກເງື່ອນໄຂ`, R`<div class="ex"><span class="lbl">ໃຫ້ $f'(x)=6x^2-2,\ f(1)=3$</span>$f(x)=2x^3-2x+C$; $f(1)=C=3$ → $f(x)=2x^3-2x+3$</div>
<div class="ex"><span class="lbl">ເສັ້ນໂຄ້ງມີສຳປະສິດມຸມ $2x+1$ ແລະ ຜ່ານ $(1;4)$</span>$y=x^2+x+C$, $4=2+C$ → $y=x^2+x+2$</div>
<div class="box red"><span class="lbl">ກວດຄຳຕອບ</span>ຫາຜົນຕຳລາຂອງຄຳຕອບ ຕ້ອງໄດ້ຕຳລາໃນສັງຄະນິດ</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\int f(x)dx=F(x)+C \iff F'=f$</li><li>ຈື່ຕາຕະລາງສູດພື້ນຖານ</li><li>ແຍກເປັນຜົນບວກ ແລ້ວສັງຄະນິດແຕ່ລະພົດ</li><li>ເງື່ອນໄຂເບື້ອງຕົ້ນໃຊ້ຊອກ $C$</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int(4x^3-6x+1)dx$.`, R`$x^4-3x^2+x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\left(\dfrac2x+e^x\right)dx$.`, R`$2\ln|x|+e^x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int(2\sin x-3\cos x)dx$.`, R`$-2\cos x-3\sin x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x^3-2x+1}{x^2}dx$.`, R`$\int(x-\frac2x+x^{-2})dx=\frac{x^2}2-2\ln|x|-\frac1x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int(2^x+\sqrt[3]x)dx$.`, R`$\frac{2^x}{\ln2}+\frac34x^{4/3}+C$.`],
[R`ຈົ່ງຊອກ $f(x)$ ທີ່ $f'(x)=3x^2+2x$ ແລະ $f(0)=-1$.`, R`$f(x)=x^3+x^2-1$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int(x^2+1)^2dx$.`, R`$\frac{x^5}5+\frac{2x^3}3+x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\left(\dfrac1{\sqrt x}-\dfrac3{x}\right)dx$.`, R`$2\sqrt x-3\ln|x|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{\cos^2x}+\int\sin x\,dx$.`, R`$\tan x-\cos x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int(e^x-3^x)dx$.`, R`$e^x-\frac{3^x}{\ln3}+C$.`],
[R`ຈົ່ງຊອກສົມຜົນເສັ້ນໂຄ້ງທີ່ຜ່ານ $(1;2)$ ແລະ ມີສຳປະສິດມຸມເສັ້ນຕິດ $3x^2-1$.`, R`$y=x^3-x+2$.`],
[R`ວັດຖຸມີຄວາມໄວ $v(t)=3t^2+2$ (m/s) ແລະ $s(0)=5$. ຈົ່ງຊອກ $s(t)$.`, R`$s(t)=t^3+2t+5$.`]
],
quiz:[
[R`$\int x^3dx$`, [R`$3x^2+C$`,R`$\frac{x^4}4+C$`,R`$x^4+C$`,R`$\frac{x^3}3+C$`],1,""],
[R`$\int\frac1x dx$`, [R`$\ln|x|+C$`,R`$-\frac1{x^2}+C$`,R`$x+C$`,R`$e^x+C$`],0,""],
[R`$\int\sin x\,dx$`, [R`$\cos x+C$`,R`$-\cos x+C$`,R`$\sin x+C$`,R`$-\sin x+C$`],1,""],
[R`$\int e^x dx$`, [R`$e^x+C$`,R`$xe^{x-1}+C$`,R`$\frac{e^{x+1}}{x+1}+C$`,R`$\ln x+C$`],0,""],
[R`$F$ ເປັນເຄົ້າຕຳລາຂອງ $f$ ຖ້າ:`, [R`$f'=F$`,R`$F'=f$`,R`$F=f$`,R`$F''=f$`],1,""],
[R`$\int(3x^2-4x+5)dx$`, [R`$x^3-2x^2+5x+C$`,R`$6x-4+C$`,R`$3x^3-4x^2+5x+C$`,R`$x^3-4x^2+5+C$`],0,""],
[R`$f'(x)=2x,\ f(0)=3$: $f(x)=$`, [R`$x^2$`,R`$x^2+3$`,R`$2x+3$`,R`$x^2-3$`],1,""],
[R`$\int\frac{dx}{\cos^2x}$`, [R`$\tan x+C$`,R`$\cot x+C$`,R`$-\tan x+C$`,R`$\sin x+C$`],0,""]
]});

M7.ch.push({
n:31, part:7, title:"ສັງຄະນິດຂອງຕຳລາປົກກະຕິ ແລະ ການປ່ຽນຕົວປ່ຽນ",
goal:R`ຄິດໄລ່ສັງຄະນິດຂອງຕຳລາເສດສ່ວນ (ຕຳລາປົກກະຕິ) ດ້ວຍສູດ $\int\frac{du}u=\ln|u|+C$ ແລະ ວິທີປ່ຽນຕົວປ່ຽນໃໝ່.`,
slides:[
[R`ສັງຄະນິດໃນສາຂາຕ່າງໆ`, R`<p>ສັງຄະນິດໃຊ້ຄິດໄລ່: ເນື້ອທີ່ໃຕ້ເສັ້ນໂຄ້ງ, ບໍລິມາດ, ວຽກ ແລະ ພະລັງງານ, ການເຕີບໂຕຂອງປະຊາກອນ, ການແຜ່ກະຈາຍຂອງຢາໃນຮ່າງກາຍ, ການສ້າງພາບ CT scan/MRI.</p><div class="box"><span class="lbl">ຂໍ້ຄວນຈື່</span>$(\ln|u|)'=\dfrac{u'}u$ ດັ່ງນັ້ນ $\displaystyle\int\frac{u'(x)}{u(x)}dx=\ln|u(x)|+C$</div>`],
[R`ວິທີປ່ຽນຕົວປ່ຽນໃໝ່`, R`<div class="box green"><span class="lbl">ຫຼັກການ</span>ວາງ $u=g(x)$, $du=g'(x)dx$: $$\int f(g(x))g'(x)dx=\int f(u)du$$</div>
<div class="ex"><span class="lbl">$\int x(x^2+1)^3dx$</span>$u=x^2+1,\ du=2x\,dx$ → $\frac12\int u^3du=\frac{u^4}8=\frac{(x^2+1)^4}8+C$</div>
<div class="ex"><span class="lbl">$\int(2x+1)^5dx$</span>$u=2x+1$ → $\frac12\int u^5du=\frac{(2x+1)^6}{12}+C$</div>`],
[R`ຮູບ $\int\frac{u'}u$`, R`<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\displaystyle\int\frac{dx}{2x+3}=\frac12\ln|2x+3|+C$<br>$\displaystyle\int\frac{x\,dx}{x^2+4}=\frac12\ln(x^2+4)+C$<br>$\displaystyle\int\frac{3x^2}{x^3+1}dx=\ln|x^3+1|+C$<br>$\displaystyle\int\left(\frac{2}{x-1}+\frac{x}{x^2+2}\right)dx=2\ln|x-1|+\frac12\ln(x^2+2)+C$</div>
<div class="box"><span class="lbl">ສູດທົ່ວໄປ</span>$\displaystyle\int\frac{dx}{ax+b}=\frac1a\ln|ax+b|+C$</div>`],
[R`ຂັ້ນຕົວຕັ້ງ ≥ ຂັ້ນຕົວພູດ: ຫານກ່ອນ`, R`<div class="ex"><span class="lbl">$\displaystyle\int\frac{x^2+1}{x-1}dx$</span>ຫານ: $\dfrac{x^2+1}{x-1}=x+1+\dfrac2{x-1}$<br>$=\dfrac{x^2}2+x+2\ln|x-1|+C$</div>
<div class="ex"><span class="lbl">$\displaystyle\int\frac{x}{x+1}dx$</span>$=\int\left(1-\frac1{x+1}\right)dx=x-\ln|x+1|+C$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\int\frac{u'}u dx=\ln|u|+C$</li><li>ປ່ຽນຕົວປ່ຽນ: ເລືອກ $u$ ທີ່ຜົນຕຳລາຂອງມັນປາກົດຢູ່ໃນສັງຄະນິດ</li><li>ເສດສ່ວນທີ່ຕົວຕັ້ງຂັ້ນສູງ: ຫານພະຫຸພົດກ່ອນ</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{3x-2}$.`, R`$\frac13\ln|3x-2|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{2x+3}{x^2+3x+1}dx$.`, R`$\ln|x^2+3x+1|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x^2(x^3-1)^4dx$.`, R`$u=x^3-1$: $\frac{(x^3-1)^5}{15}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x^2}{x+2}dx$.`, R`$\frac{x^2}{x+2}=x-2+\frac4{x+2}$ → $\frac{x^2}2-2x+4\ln|x+2|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x}{\sqrt{x^2+1}}dx$.`, R`$\sqrt{x^2+1}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\left(\dfrac{2x}{x^2-1}+\dfrac{1}{x+2}\right)dx$.`, R`$\ln|x^2-1|+\ln|x+2|+C$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{5-2x}$.`, R`$-\frac12\ln|5-2x|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{4x^3}{x^4+5}dx$.`, R`$\ln(x^4+5)+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x\sqrt{1-x^2}\,dx$.`, R`$-\frac13(1-x^2)^{3/2}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x^3+x}{x^2+1}dx$.`, R`$=\int x\,dx=\frac{x^2}2+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{2x^2+3}{x-1}dx$.`, R`$2x+2+\frac5{x-1}$ → $x^2+2x+5\ln|x-1|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x+1}{(x^2+2x+3)^2}dx$.`, R`$u=x^2+2x+3$: $-\frac1{2(x^2+2x+3)}+C$.`]
],
quiz:[
[R`$\int\frac{dx}{2x+3}$`, [R`$\ln|2x+3|+C$`,R`$\frac12\ln|2x+3|+C$`,R`$2\ln|2x+3|+C$`,R`$\frac1{(2x+3)^2}+C$`],1,""],
[R`$\int\frac{2x}{x^2+1}dx$`, [R`$\ln(x^2+1)+C$`,R`$\arctan x+C$`,R`$2\ln(x^2+1)+C$`,R`$\frac1{x^2+1}+C$`],0,""],
[R`$\int(2x+1)^5dx$`, [R`$\frac{(2x+1)^6}6+C$`,R`$\frac{(2x+1)^6}{12}+C$`,R`$10(2x+1)^4+C$`,R`$(2x+1)^6+C$`],1,""],
[R`ໃນ $\int x(x^2+1)^3dx$ ຄວນວາງ $u=$`, [R`$x$`,R`$x^2+1$`,R`$(x^2+1)^3$`,R`$x^3$`],1,""],
[R`$\int\frac{x}{x+1}dx$`, [R`$x-\ln|x+1|+C$`,R`$\ln|x+1|+C$`,R`$x+\ln|x+1|+C$`,R`$\frac{x^2}{2}+C$`],0,""],
[R`$\int\frac{u'}{u}dx$`, [R`$\ln|u|+C$`,R`$u'+C$`,R`$\frac1u+C$`,R`$u\ln u+C$`],0,""],
[R`$\int\frac{3x^2}{x^3+1}dx$`, [R`$\ln|x^3+1|+C$`,R`$3\ln|x^3+1|+C$`,R`$x^3+C$`,R`$\frac{1}{x^3+1}+C$`],0,""],
[R`ກ່ອນສັງຄະນິດ $\frac{x^2+1}{x-1}$ ຕ້ອງ:`, ["ແຍກເສດສ່ວນ","ຫານພະຫຸພົດ","ໃຊ້ arctan","ຄູນສັງຍຸກ"],1,""]
]});

M7.ch.push({
n:32, part:7, title:"ສັງຄະນິດຂອງຕຳລາປົກກະຕິ (ແຍກເສດສ່ວນງ່າຍດາຍ)",
goal:R`ແຍກຕຳລາເສດສ່ວນເປັນເສດສ່ວນງ່າຍດາຍ ແລ້ວຄິດໄລ່ສັງຄະນິດ.`,
slides:[
[R`ແນວຄິດການແຍກເສດສ່ວນ`, R`<p>ບວກເສດສ່ວນ: $\dfrac2{x-1}+\dfrac3{x+1}=\dfrac{5x-1}{x^2-1}$</p><p>ການສັງຄະນິດຕ້ອງເຮັດ <b>ປີ້ນຄືນ</b>: ແຍກ $\dfrac{5x-1}{x^2-1}$ ອອກເປັນເສດສ່ວນງ່າຍດາຍ ເພາະແຕ່ລະອັນສັງຄະນິດງ່າຍ.</p>
<div class="box"><span class="lbl">ເງື່ອນໄຂ</span>ຂັ້ນຕົວຕັ້ງ &lt; ຂັ້ນຕົວພູດ (ຖ້າບໍ່ດັ່ງນັ້ນ ຫານພະຫຸພົດກ່ອນ)</div>`],
[R`ຮູບແບບການແຍກ`, R`<div class="tbl"><table><tr><th>ຕົວປະກອບໃນຕົວພູດ</th><th>ເສດສ່ວນງ່າຍດາຍ</th></tr>
<tr><td>$(x-a)$</td><td>$\frac A{x-a}$</td></tr>
<tr><td>$(x-a)^m$</td><td>$\frac{A_1}{x-a}+\frac{A_2}{(x-a)^2}+\dots+\frac{A_m}{(x-a)^m}$</td></tr>
<tr><td>$x^2+px+q$ ($p^2-4q\lt0$)</td><td>$\frac{Ax+B}{x^2+px+q}$</td></tr></table></div>
<p>ຊອກ $A,B,\dots$: ຄູນຕົວພູດທັງສອງຟາກ ແລ້ວແທນຄ່າ $x$ ທີ່ເປັນຮາກ ຫຼື ທຽບສຳປະສິດ.</p>`],
[R`ຕົວຢ່າງ 1: ຕົວປະກອບຂັ້ນໜຶ່ງຕ່າງກັນ`, R`<div class="ex"><span class="lbl">$\displaystyle\int\frac{5x-1}{(x-1)(x+1)}dx$</span>$5x-1=A(x+1)+B(x-1)$<br>$x=1$: $4=2A\Rightarrow A=2$; $\ x=-1$: $-6=-2B\Rightarrow B=3$<br>$=2\ln|x-1|+3\ln|x+1|+C$</div>
<div class="ex"><span class="lbl">$\displaystyle\int\frac{dx}{x^2-1}$</span>$=\frac12\int\left(\frac1{x-1}-\frac1{x+1}\right)dx=\frac12\ln\left|\frac{x-1}{x+1}\right|+C$</div>`],
[R`ຕົວຢ່າງ 2: ຕົວປະກອບຊ້ຳ`, R`<div class="ex"><span class="lbl">$\displaystyle\int\frac{dx}{x(x-1)^2}$</span>$\dfrac1{x(x-1)^2}=\dfrac Ax+\dfrac B{x-1}+\dfrac C{(x-1)^2}$<br>$1=A(x-1)^2+Bx(x-1)+Cx$<br>$x=0$: $A=1$; $x=1$: $C=1$; ສຳປະສິດ $x^2$: $A+B=0\Rightarrow B=-1$<br>$=\ln|x|-\ln|x-1|-\dfrac1{x-1}+C$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ol><li>ກວດຂັ້ນ (ຫານຖ້າຈຳເປັນ)</li><li>ແຍກຕົວພູດເປັນຕົວປະກອບ</li><li>ຂຽນຮູບເສດສ່ວນງ່າຍດາຍ ແລະ ຊອກສຳປະສິດ</li><li>ສັງຄະນິດແຕ່ລະພົດ: $\int\frac{A}{x-a}=A\ln|x-a|$, $\int\frac{A}{(x-a)^m}=\frac{-A}{(m-1)(x-a)^{m-1}}$</li></ol>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{x^2-5x+6}$.`, R`$\frac1{(x-2)(x-3)}=\frac{1}{x-3}-\frac1{x-2}$ → $\ln\left|\frac{x-3}{x-2}\right|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x+5}{x^2+x-2}dx$.`, R`$\frac{-1}{x+2}+\frac2{x-1}$ → $-\ln|x+2|+2\ln|x-1|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{x^2-4}$.`, R`$\frac14\ln\left|\frac{x-2}{x+2}\right|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{3x+1}{x(x+1)}dx$.`, R`$A=1,\ B=2$: $\ln|x|+2\ln|x+1|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x}{(x+1)^2}dx$.`, R`$\frac1{x+1}-\frac1{(x+1)^2}$ → $\ln|x+1|+\frac1{x+1}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x^2+1}{x^2-1}dx$.`, R`$1+\frac2{x^2-1}$ → $x+\ln\left|\frac{x-1}{x+1}\right|+C$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{x(x+2)}$.`, R`$\frac12\ln\left|\frac{x}{x+2}\right|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{2x-1}{(x-2)(x+3)}dx$.`, R`$A=\frac35,\ B=\frac75$: $\frac35\ln|x-2|+\frac75\ln|x+3|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x^2}{x^2-9}dx$.`, R`$x+\frac32\ln\left|\frac{x-3}{x+3}\right|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{(x-1)(x-2)(x-3)}$.`, R`$\frac{1/2}{x-1}-\frac1{x-2}+\frac{1/2}{x-3}$ → $\frac12\ln|x-1|-\ln|x-2|+\frac12\ln|x-3|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{2x+3}{(x+1)^2}dx$.`, R`$\frac2{x+1}+\frac1{(x+1)^2}$ → $2\ln|x+1|-\frac1{x+1}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{x^2(x+1)}$.`, R`$-\frac1x+\frac1{x^2}+\frac1{x+1}$ → $-\ln|x|-\frac1x+\ln|x+1|+C$.`]
],
quiz:[
[R`$\frac{5x-1}{(x-1)(x+1)}=\frac A{x-1}+\frac B{x+1}$: $A=$`, ["1","2","3","5"],1,""],
[R`$\int\frac{dx}{x^2-1}$`, [R`$\frac12\ln|\frac{x-1}{x+1}|+C$`,R`$\arctan x+C$`,R`$\ln|x^2-1|+C$`,R`$\frac12\ln|\frac{x+1}{x-1}|+C$`],0,""],
[R`ຮູບເສດສ່ວນງ່າຍດາຍຂອງ $\frac{1}{x(x-1)^2}$ ມີຈັກພົດ?`, ["1","2","3","4"],2,""],
[R`ກ່ອນແຍກເສດສ່ວນ ຕ້ອງໃຫ້:`, ["ຕົວຕັ້ງ = 1","ຂັ້ນຕົວຕັ້ງ < ຂັ້ນຕົວພູດ","ຕົວພູດເປັນກຳລັງສອງ","x > 0"],1,""],
[R`$\int\frac{dx}{(x-a)}$`, [R`$\ln|x-a|+C$`,R`$\frac1{(x-a)^2}+C$`,R`$-\ln|x-a|$`,R`$(x-a)+C$`],0,""],
[R`$\int\frac{dx}{(x-1)^2}$`, [R`$\ln(x-1)^2$`,R`$-\frac1{x-1}+C$`,R`$\frac1{x-1}+C$`,R`$2\ln|x-1|$`],1,""],
[R`$\frac1{(x-2)(x-3)}=$`, [R`$\frac1{x-3}-\frac1{x-2}$`,R`$\frac1{x-2}-\frac1{x-3}$`,R`$\frac1{x-2}+\frac1{x-3}$`,R`$\frac{1}{x-5}$`],0,""],
[R`ຕົວປະກອບ $x^2+1$ ໃນຕົວພູດ ໃຫ້ພົດຮູບ:`, [R`$\frac A{x^2+1}$`,R`$\frac{Ax+B}{x^2+1}$`,R`$\frac{A}{x+1}$`,R`$Ax+B$`],1,""]
]});

M7.ch.push({
n:33, part:7, title:"ສັງຄະນິດຂອງຕຳລາປົກກະຕິ (ຮູບ arctan)",
goal:R`ຄິດໄລ່ສັງຄະນິດທີ່ນຳໄປສູ່ $\arctan$: $\int\frac{dx}{a^2+x^2}$, ການເຮັດກຳລັງສອງສົມບູນ ແລະ ເສດສ່ວນທີ່ມີຕົວປະກອບຂັ້ນສອງ.`,
slides:[
[R`ສູດພື້ນຖານ`, R`<p>ຈາກ $(\arctan x)'=\dfrac1{1+x^2}$:</p><div class="box green"><span class="lbl">ສູດ</span>$$\int\frac{dx}{1+x^2}=\arctan x+C\qquad\int\frac{dx}{a^2+x^2}=\frac1a\arctan\frac xa+C$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int\frac{dx}{x^2+9}=\frac13\arctan\frac x3+C$<br>$\int\frac{dx}{4x^2+1}=\frac12\arctan2x+C$</div><p>ນຳໃຊ້: ການວິເຄາະສັນຍານໃນວົງຈອນໄຟຟ້າ, ສັນຍານທາງການແພດ.</p>`],
[R`ເຮັດກຳລັງສອງສົມບູນ`, R`<p>ຕົວພູດ $x^2+px+q$ ທີ່ $p^2-4q\lt0$: ຂຽນເປັນ $(x+\frac p2)^2+k^2$</p>
<div class="ex"><span class="lbl">$\displaystyle\int\frac{dx}{x^2+2x+5}$</span>$=\int\frac{dx}{(x+1)^2+4}=\frac12\arctan\frac{x+1}2+C$</div>
<div class="ex"><span class="lbl">$\displaystyle\int\frac{dx}{4x^2+4x+2}$</span>$=\int\frac{dx}{(2x+1)^2+1}=\frac12\arctan(2x+1)+C$</div>`],
[R`ຕົວຕັ້ງເປັນຂັ້ນໜຶ່ງ`, R`<p>ແຍກເປັນສ່ວນ $\frac{u'}u$ (→ ln) ກັບສ່ວນຄ່າຄົງທີ່ (→ arctan):</p>
<div class="ex"><span class="lbl">$\displaystyle\int\frac{2x+3}{x^2+1}dx$</span>$=\int\frac{2x}{x^2+1}dx+3\int\frac{dx}{x^2+1}=\ln(x^2+1)+3\arctan x+C$</div>
<div class="ex"><span class="lbl">$\displaystyle\int\frac{x+3}{x^2+2x+2}dx$</span>$=\frac12\int\frac{2x+2}{x^2+2x+2}dx+2\int\frac{dx}{(x+1)^2+1}$<br>$=\frac12\ln(x^2+2x+2)+2\arctan(x+1)+C$</div>`],
[R`ເສດສ່ວນປະສົມ`, R`<div class="ex"><span class="lbl">$\displaystyle\int\frac{3x+1}{(x-1)(x^2+1)}dx$</span>$\frac{3x+1}{(x-1)(x^2+1)}=\frac A{x-1}+\frac{Bx+C}{x^2+1}$<br>$x=1$: $A=2$; ທຽບ $x^2$: $B=-2$; ທຽບຄ່າຄົງທີ່: $C=1$<br>$=2\ln|x-1|-\ln(x^2+1)+\arctan x+C$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\int\frac{dx}{a^2+x^2}=\frac1a\arctan\frac xa+C$</li><li>ຕົວພູດຂັ້ນສອງບໍ່ມີຮາກ: ເຮັດກຳລັງສອງສົມບູນ</li><li>ຕົວຕັ້ງ $Ax+B$: ແຍກສ່ວນ ln ແລະ ສ່ວນ arctan</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{x^2+10}$.`, R`$\frac1{\sqrt{10}}\arctan\frac x{\sqrt{10}}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{x^2+4x+5}$.`, R`$\arctan(x+2)+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{7+3x^2}$.`, R`$\frac1{\sqrt{21}}\arctan\left(\sqrt{\frac37}\,x\right)+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x+1}{x^2+1}dx$.`, R`$\frac12\ln(x^2+1)+\arctan x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{2x+4}{x^2+4x+5}dx$.`, R`$\ln(x^2+4x+5)+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{x^2-6x+13}$.`, R`$\frac12\arctan\frac{x-3}2+C$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{9x^2+1}$.`, R`$\frac13\arctan3x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{x^2+2x+10}$.`, R`$\frac13\arctan\frac{x+1}3+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{3x-1}{x^2+4}dx$.`, R`$\frac32\ln(x^2+4)-\frac12\arctan\frac x2+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x^2}{x^2+1}dx$.`, R`$x-\arctan x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{x(x^2+1)}$.`, R`$\frac1x-\frac x{x^2+1}$ → $\ln|x|-\frac12\ln(x^2+1)+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{x^2-2x+4}{(x^2+1)(x-1)}dx$.`, R`$A=\frac32,\ B=-\frac12,\ C=-\frac52$: $\frac32\ln|x-1|-\frac14\ln(x^2+1)-\frac52\arctan x+C$.`]
],
quiz:[
[R`$\int\frac{dx}{1+x^2}$`, [R`$\ln(1+x^2)+C$`,R`$\arctan x+C$`,R`$\arcsin x+C$`,R`$\frac1{1+x^2}+C$`],1,""],
[R`$\int\frac{dx}{x^2+9}$`, [R`$\arctan\frac x3+C$`,R`$\frac13\arctan\frac x3+C$`,R`$3\arctan3x+C$`,R`$\frac19\arctan x+C$`],1,""],
[R`$x^2+2x+5=$`, [R`$(x+1)^2+4$`,R`$(x+2)^2+1$`,R`$(x+1)^2+5$`,R`$(x-1)^2+4$`],0,""],
[R`$\int\frac{dx}{(x+1)^2+1}$`, [R`$\arctan(x+1)+C$`,R`$\ln((x+1)^2+1)+C$`,R`$\arctan x+1+C$`,R`$\frac{1}{x+1}+C$`],0,""],
[R`$\int\frac{2x}{x^2+1}dx$`, [R`$\arctan x+C$`,R`$\ln(x^2+1)+C$`,R`$2\arctan x+C$`,R`$x^2+C$`],1,""],
[R`$\int\frac{dx}{4x^2+1}$`, [R`$\frac12\arctan2x+C$`,R`$2\arctan2x+C$`,R`$\frac14\arctan x+C$`,R`$\arctan4x+C$`],0,""],
[R`$\int\frac{2x+3}{x^2+1}dx$`, [R`$\ln(x^2+1)+3\arctan x+C$`,R`$2\ln(x^2+1)+3x+C$`,R`$\arctan x+C$`,R`$3\ln(x^2+1)+C$`],0,""],
[R`$\int\frac{x^2}{x^2+1}dx$`, [R`$x-\arctan x+C$`,R`$\arctan x+C$`,R`$x+\arctan x+C$`,R`$\ln(x^2+1)+C$`],0,""]
]});

M7.ch.push({
n:34, part:7, title:"ສັງຄະນິດຂອງຕຳລາໃຈກຳລັງ ແລະ ຕຳລາໂລກາຣິດ",
goal:R`ຄິດໄລ່ສັງຄະນິດທີ່ມີ $e^x,\ a^x$ ແລະ $\ln x$ ໂດຍໃຊ້ສູດພື້ນຖານ ແລະ ການປ່ຽນຕົວປ່ຽນ.`,
slides:[
[R`ສູດພື້ນຖານ`, R`<div class="box"><span class="lbl">ສູດ</span>$\int e^xdx=e^x+C$ · $\int e^{ax+b}dx=\frac1ae^{ax+b}+C$<br>$\int a^xdx=\frac{a^x}{\ln a}+C$ · $\int\frac{dx}x=\ln|x|+C$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int e^{3x}dx=\frac{e^{3x}}3+C$ · $\int2^xdx=\frac{2^x}{\ln2}+C$<br>$\int(e^x+e^{-x})^2dx=\int(e^{2x}+2+e^{-2x})dx=\frac{e^{2x}}2+2x-\frac{e^{-2x}}2+C$</div>`],
[R`ປ່ຽນຕົວປ່ຽນກັບ $e^u$`, R`<div class="box green"><span class="lbl">ຮູບ</span>$\int u'e^u\,dx=e^u+C$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int xe^{x^2}dx=\frac12e^{x^2}+C$<br>$\int\frac{e^{\sqrt x}}{\sqrt x}dx=2e^{\sqrt x}+C$<br>$\int\frac{e^x}{e^x+1}dx=\ln(e^x+1)+C$<br>$\int\cos x\,e^{\sin x}dx=e^{\sin x}+C$</div>`],
[R`ສັງຄະນິດທີ່ມີ $\ln x$`, R`<div class="box"><span class="lbl">ວາງ $u=\ln x$, $du=\frac{dx}x$</span></div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int\frac{\ln x}xdx=\frac{(\ln x)^2}2+C$<br>$\int\frac{dx}{x\ln x}=\ln|\ln x|+C$<br>$\int\frac{(\ln x)^3}{x}dx=\frac{(\ln x)^4}4+C$</div>
<p>ສັງຄະນິດ $\int\ln x\,dx$ ຕ້ອງໃຊ້ <b>ສັງຄະນິດພາກສ່ວນ</b> (ບົດທີ 37).</p>`],
[R`ການນຳໃຊ້: ການເຕີບໂຕ`, R`<div class="ex"><span class="lbl">ການເຕີບໂຕຂອງເຊື້ອ</span>ອັດຕາເຕີບໂຕ $N'(t)=200e^{0.1t}$ ໂຕ/ຊົ່ວໂມງ, $N(0)=2000$<br>$N(t)=2000e^{0.1t}+C$; $N(0)=2000+C=2000\Rightarrow C=0$<br>$N(10)=2000e\approx5437$ ໂຕ</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\int e^{ax+b}dx=\frac1ae^{ax+b}+C$, $\int a^xdx=\frac{a^x}{\ln a}+C$</li><li>$\int u'e^udx=e^u+C$</li><li>ມີ $\ln x$ ແລະ $\frac1x$: ວາງ $u=\ln x$</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int e^{2x-1}dx$.`, R`$\frac12e^{2x-1}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int3^{2x}dx$.`, R`$\frac{9^x}{\ln9}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int x^2e^{x^3}dx$.`, R`$\frac13e^{x^3}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{e^{2x}}{e^{2x}+3}dx$.`, R`$\frac12\ln(e^{2x}+3)+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{\ln^2x}{x}dx$.`, R`$\frac{\ln^3x}3+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{e^x-e^{-x}}{e^x+e^{-x}}dx$.`, R`$\ln(e^x+e^{-x})+C$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int(e^{x}+1)^2dx$.`, R`$\frac{e^{2x}}2+2e^x+x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int5^{x}\,dx+\int e^{-x}dx$.`, R`$\frac{5^x}{\ln5}-e^{-x}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{e^{1/x}}{x^2}dx$.`, R`$-e^{1/x}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{dx}{x(1+\ln x)}$.`, R`$\ln|1+\ln x|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{\ln(2x)}{x}dx$.`, R`$\frac{\ln^2(2x)}2+C$.`],
[R`ອັດຕາການຂາຍສິນຄ້າ $S'(t)=50e^{0.2t}$ ໜ່ວຍ/ມື້, $S(0)=0$. ຈົ່ງຊອກ $S(t)$.`, R`$S(t)=250(e^{0.2t}-1)$.`]
],
quiz:[
[R`$\int e^{3x}dx$`, [R`$3e^{3x}+C$`,R`$\frac13e^{3x}+C$`,R`$e^{3x}+C$`,R`$\frac{e^{3x+1}}{3x+1}+C$`],1,""],
[R`$\int2^xdx$`, [R`$\frac{2^x}{\ln2}+C$`,R`$2^x\ln2+C$`,R`$\frac{2^{x+1}}{x+1}+C$`,R`$2^x+C$`],0,""],
[R`$\int xe^{x^2}dx$`, [R`$e^{x^2}+C$`,R`$\frac12e^{x^2}+C$`,R`$2e^{x^2}+C$`,R`$x^2e^{x^2}+C$`],1,""],
[R`$\int\frac{\ln x}{x}dx$`, [R`$\frac{\ln^2x}2+C$`,R`$\ln x+C$`,R`$x\ln x+C$`,R`$\frac1x+C$`],0,""],
[R`$\int\frac{dx}{x\ln x}$`, [R`$\ln|\ln x|+C$`,R`$\frac1{\ln x}+C$`,R`$\ln^2x+C$`,R`$x\ln x+C$`],0,""],
[R`$\int\frac{e^x}{e^x+1}dx$`, [R`$\ln(e^x+1)+C$`,R`$e^x+C$`,R`$\arctan e^x+C$`,R`$\frac1{e^x+1}+C$`],0,""],
[R`$\int e^{-x}dx$`, [R`$e^{-x}+C$`,R`$-e^{-x}+C$`,R`$e^x+C$`,R`$-e^x+C$`],1,""],
[R`$\int\cos x\,e^{\sin x}dx$`, [R`$e^{\sin x}+C$`,R`$e^{\cos x}+C$`,R`$\sin x\,e^{\sin x}+C$`,R`$-e^{\sin x}+C$`],0,""]
]});

M7.ch.push({
n:35, part:7, title:"ສັງຄະນິດຂອງຕຳລາໄຕມຸມມິຕິ",
goal:R`ຄິດໄລ່ສັງຄະນິດຂອງ $\sin,\cos$ ແລະ ຕຳລາໄຕມຸມມິຕິພື້ນຖານ ດ້ວຍສູດ, ການປ່ຽນຕົວປ່ຽນ ແລະ ສູດຫຼຸດກຳລັງ.`,
slides:[
[R`ສູດພື້ນຖານ`, R`<div class="tbl"><table><tr><th>ສັງຄະນິດ</th><th>ຜົນ</th></tr>
<tr><td>$\int\sin(ax+b)dx$</td><td>$-\frac1a\cos(ax+b)+C$</td></tr>
<tr><td>$\int\cos(ax+b)dx$</td><td>$\frac1a\sin(ax+b)+C$</td></tr>
<tr><td>$\int\frac{dx}{\cos^2x}$</td><td>$\tan x+C$</td></tr>
<tr><td>$\int\frac{dx}{\sin^2x}$</td><td>$-\cot x+C$</td></tr>
<tr><td>$\int\tan x\,dx$</td><td>$-\ln|\cos x|+C$</td></tr>
<tr><td>$\int\cot x\,dx$</td><td>$\ln|\sin x|+C$</td></tr></table></div>`],
[R`ການປ່ຽນຕົວປ່ຽນ`, R`<div class="box"><span class="lbl">ຮູບ</span>$\int\sin^nx\cos x\,dx=\frac{\sin^{n+1}x}{n+1}+C$ · $\int\cos^nx\sin x\,dx=-\frac{\cos^{n+1}x}{n+1}+C$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int\sin x\cos x\,dx=\frac{\sin^2x}2+C$<br>$\int\sin^3x\cos x\,dx=\frac{\sin^4x}4+C$<br>$\int\frac{\cos x}{1+\sin x}dx=\ln(1+\sin x)+C$<br>$\int\tan x\,dx=\int\frac{\sin x}{\cos x}dx=-\ln|\cos x|+C$</div>`],
[R`ສູດຫຼຸດກຳລັງ`, R`<div class="box green"><span class="lbl">ສູດ</span>$\sin^2x=\dfrac{1-\cos2x}2,\qquad\cos^2x=\dfrac{1+\cos2x}2$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int\sin^2x\,dx=\frac x2-\frac{\sin2x}4+C$<br>$\int\cos^2x\,dx=\frac x2+\frac{\sin2x}4+C$<br>$\int\sin^2x\cos^2x\,dx=\int\frac{\sin^22x}4dx=\frac x8-\frac{\sin4x}{32}+C$</div>`],
[R`ໃຊ້ $1+\tan^2x=\frac1{\cos^2x}$`, R`<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\int\tan^2x\,dx=\int\left(\frac1{\cos^2x}-1\right)dx=\tan x-x+C$<br>$\int\frac{dx}{\cos^2(3x)}=\frac13\tan3x+C$<br>$\int\frac{\tan x}{\cos^2x}dx=\frac{\tan^2x}2+C$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ຈື່ສູດພື້ນຖານ ແລະ ຕົວຄູນ $\frac1a$</li><li>$\sin^n x\cos x$: ວາງ $u=\sin x$</li><li>$\sin^2,\cos^2$: ໃຊ້ສູດຫຼຸດກຳລັງ</li><li>$\tan^2x=\frac1{\cos^2x}-1$</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\int\sin3x\,dx$ ແລະ $\int\cos(2x+1)dx$.`, R`$-\frac13\cos3x+C$; $\frac12\sin(2x+1)+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\cos^2x\,dx$.`, R`$\frac x2+\frac{\sin2x}4+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\cos^4x\sin x\,dx$.`, R`$-\frac{\cos^5x}5+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{\sin x}{\cos^3x}dx$.`, R`$\frac1{2\cos^2x}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\cot x\,dx$.`, R`$\ln|\sin x|+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int(\sin x+\cos x)^2dx$.`, R`$\int(1+\sin2x)dx=x-\frac{\cos2x}2+C$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\int\sin^2(2x)\,dx$.`, R`$\frac x2-\frac{\sin4x}8+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\sin x\cos^2x\,dx$.`, R`$-\frac{\cos^3x}3+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{\cos x}{\sin^2x}dx$.`, R`$-\frac1{\sin x}+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\tan^2(2x)dx$.`, R`$\frac12\tan2x-x+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int\dfrac{\sin2x}{1+\cos^2x}dx$.`, R`$u=1+\cos^2x$, $du=-\sin2x\,dx$: $-\ln(1+\cos^2x)+C$.`],
[R`ຈົ່ງຄິດໄລ່ $\int(1-2\sin^2x)dx$.`, R`$\int\cos2x\,dx=\frac{\sin2x}2+C$.`]
],
quiz:[
[R`$\int\cos x\,dx$`, [R`$-\sin x+C$`,R`$\sin x+C$`,R`$\cos x+C$`,R`$-\cos x+C$`],1,""],
[R`$\int\sin3x\,dx$`, [R`$-3\cos3x+C$`,R`$-\frac13\cos3x+C$`,R`$\frac13\cos3x+C$`,R`$3\cos3x+C$`],1,""],
[R`$\int\tan x\,dx$`, [R`$\ln|\cos x|+C$`,R`$-\ln|\cos x|+C$`,R`$\frac1{\cos^2x}+C$`,R`$\ln|\sin x|+C$`],1,""],
[R`$\sin^2x=$`, [R`$\frac{1+\cos2x}2$`,R`$\frac{1-\cos2x}2$`,R`$2\sin x\cos x$`,R`$1-\cos x$`],1,""],
[R`$\int\sin^2x\,dx$`, [R`$\frac x2-\frac{\sin2x}4+C$`,R`$\frac{\sin^3x}3+C$`,R`$\frac x2+\frac{\sin2x}4+C$`,R`$-\cos^2x+C$`],0,""],
[R`$\int\sin x\cos x\,dx$`, [R`$\frac{\sin^2x}2+C$`,R`$\sin x\cos x+C$`,R`$\cos2x+C$`,R`$-\frac{\sin^2x}{2}+C$`],0,""],
[R`$\int\tan^2x\,dx$`, [R`$\tan x-x+C$`,R`$\frac{\tan^3x}3+C$`,R`$\tan x+C$`,R`$x-\tan x+C$`],0,""],
[R`$\int\frac{dx}{\sin^2x}$`, [R`$\cot x+C$`,R`$-\cot x+C$`,R`$\tan x+C$`,R`$-\frac1{\sin x}+C$`],1,""]
]});
