/* ພາກທີ 6: ວິເຄາະຄະນິດ (ບົດ 20–27) */
M7.ch.push({
n:20, part:6, title:"ຂອບເຂດຂອງຕຳລາ",
goal:R`ເຂົ້າໃຈຄວາມໝາຍຂອງຂອບເຂດຂອງຕຳລາ, ຂອບເຂດຂ້າງດຽວ ແລະ ຄິດໄລ່ຂອບເຂດດ້ວຍຫຼັກເກນ ລວມທັງຮູບບໍ່ກຳນົດ $\frac00$.`,
slides:[
[R`ແນວຄິດຂອງຂອບເຂດ`, R`<p>ພິຈາລະນາ $f(x)=\dfrac{x^2-4}{x-2}$ ເມື່ອ $x$ ເຂົ້າໃກ້ 2 (ແຕ່ $x\neq2$):</p>
<div class="tbl"><table><tr><th>$x$</th><td>1.9</td><td>1.99</td><td>1.999</td><td>2.001</td><td>2.01</td><td>2.1</td></tr><tr><th>$f(x)$</th><td>3.9</td><td>3.99</td><td>3.999</td><td>4.001</td><td>4.01</td><td>4.1</td></tr></table></div>
<div class="box"><span class="lbl">ນິຍາມ</span>ຖ້າ $f(x)$ ເຂົ້າໃກ້ $L$ ເມື່ອ $x$ ເຂົ້າໃກ້ $a$ ($x\neq a$) ຂຽນ $\displaystyle\lim_{x\to a}f(x)=L$</div><p>ຂອບເຂດບໍ່ຂຶ້ນກັບຄ່າ $f(a)$ — ເຖິງ $f(2)$ ບໍ່ມີ ກໍມີຂອບເຂດ = 4.</p>`],
[R`ຂອບເຂດຂ້າງດຽວ`, R`<ul><li>ຂອບເຂດເບື້ອງຊ້າຍ: $\lim\limits_{x\to a^-}f(x)$ ($x\lt a$)</li><li>ຂອບເຂດເບື້ອງຂວາ: $\lim\limits_{x\to a^+}f(x)$ ($x\gt a$)</li></ul>
<div class="box"><span class="lbl">ທິດສະດີ</span>$\lim\limits_{x\to a}f(x)=L\iff\lim\limits_{x\to a^-}f(x)=\lim\limits_{x\to a^+}f(x)=L$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$f(x)=\frac{|x|}x$: ຂວາ $=1$, ຊ້າຍ $=-1$ → $\lim\limits_{x\to0}f(x)$ ບໍ່ມີ</div>`],
[R`ຫຼັກເກນຄິດໄລ່ຂອບເຂດ`, R`<p>ໃຫ້ $\lim f=L,\ \lim g=M$ (ເມື່ອ $x\to a$):</p><ul><li>$\lim[f\pm g]=L\pm M$, $\lim[cf]=cL$</li><li>$\lim[fg]=LM$, $\lim\frac fg=\frac LM\ (M\neq0)$</li><li>$\lim[f]^n=L^n$, $\lim\sqrt[n]f=\sqrt[n]L$</li></ul>
<div class="box green"><span class="lbl">ພະຫຸພົດ ແລະ ຕຳລາທີ່ຕໍ່ເນື່ອງ</span>ແທນຄ່າໂດຍກົງ: $\lim\limits_{x\to2}(x^3-2x+1)=8-4+1=5$</div>`],
[R`ຮູບບໍ່ກຳນົດ $\frac00$: ແຍກຕົວປະກອບ`, R`<div class="ex"><span class="lbl">$\displaystyle\lim_{x\to3}\frac{x^2-5x+6}{x^2-9}$</span>ແທນ $x=3$ → $\frac00$. ແຍກຕົວປະກອບ: $$\frac{(x-2)(x-3)}{(x-3)(x+3)}=\frac{x-2}{x+3}\to\frac16$$</div>
<div class="ex"><span class="lbl">$\displaystyle\lim_{x\to1}\frac{x^3-1}{x-1}$</span>$=\lim(x^2+x+1)=3$</div>`],
[R`ຮູບບໍ່ກຳນົດ $\frac00$: ຄູນສັງຍຸກ`, R`<div class="ex"><span class="lbl">$\displaystyle\lim_{x\to0}\frac{\sqrt{x+4}-2}x$</span>ຄູນດ້ວຍ $\sqrt{x+4}+2$: $$\frac{x+4-4}{x(\sqrt{x+4}+2)}=\frac1{\sqrt{x+4}+2}\to\frac14$$</div>
<div class="box red"><span class="lbl">ຂັ້ນຕອນ</span>1) ແທນຄ່າກ່ອນ · 2) ຖ້າໄດ້ $\frac00$: ແຍກຕົວປະກອບ ຫຼື ຄູນສັງຍຸກ ແລ້ວຕັດ · 3) ແທນຄ່າອີກຄັ້ງ</div>`],
[R`ຊອກພາລາແມັດຈາກຂອບເຂດ`, R`<div class="ex"><span class="lbl">ຊອກ $a,b$: $\displaystyle\lim_{x\to1}\frac{x^2+ax+b}{x-1}=3$</span>ຕົວພູດ → 0 ດັ່ງນັ້ນຕົວຕັ້ງຕ້ອງ → 0: $1+a+b=0$<br>ຕົວຕັ້ງ $=(x-1)(x+1+a)$ → ຂອບເຂດ $=2+a=3$<br>$a=1,\ b=-2$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\lim_{x\to a}f(x)=L$: $f(x)$ ເຂົ້າໃກ້ $L$ ເມື່ອ $x\to a$</li><li>ມີຂອບເຂດ ⟺ ຂອບເຂດຊ້າຍ = ຂວາ</li><li>$\frac00$: ແຍກຕົວປະກອບ, ຄູນສັງຍຸກ</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}$.`, R`$\lim(x+2)=4$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to3}\frac{x^2-5x+6}{x^2-9}$.`, R`$\lim\frac{x-2}{x+3}=\frac16$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to4}\frac{\sqrt x-2}{x-4}$.`, R`$\frac{1}{\sqrt x+2}\to\frac14$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to-2}\frac{x^3+8}{x+2}$.`, R`$\lim(x^2-2x+4)=12$.`],
[R`ໃຫ້ $f(x)=\begin{cases}x+1,&x\lt1\\3x-1,&x\ge1\end{cases}$. ຈົ່ງຊອກ $\lim_{x\to1}f(x)$.`, R`ຊ້າຍ: 2, ຂວາ: 2 → ຂອບເຂດ = 2.`],
[R`ຈົ່ງຊອກ $a,b$: $\displaystyle\lim_{x\to2}\frac{x^2+ax+b}{x-2}=5$.`, R`$4+2a+b=0$; ຕົວຕັ້ງ $=(x-2)(x+2+a)$ → $4+a=5$ → $a=1,\ b=-6$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to1}(2x^2-3x+5)$.`, "4"],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to2}\frac{x^2+x-6}{x^2-4}$.`, R`$\frac{x+3}{x+2}\to\frac54$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{(1+x)^2-1}{x}$.`, R`$\lim(2+x)=2$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to1}\frac{\sqrt{x+3}-2}{\sqrt x-1}$.`, R`$\frac{\sqrt x+1}{\sqrt{x+3}+2}\to\frac24=\frac12$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{\sqrt{1+x}-\sqrt{1-x}}{x}$.`, R`$\frac{2}{\sqrt{1+x}+\sqrt{1-x}}\to1$.`],
[R`$\lim_{x\to0}\dfrac{|x|}{x}$ ມີບໍ? ອະທິບາຍ.`, R`ບໍ່ມີ: ຂອບເຂດຂວາ $=1\neq$ ຂອບເຂດຊ້າຍ $=-1$.`]
],
quiz:[
[R`$\lim_{x\to2}\frac{x^2-4}{x-2}$`, ["0","2","4","ບໍ່ມີ"],2,""],
[R`$\lim_{x\to1}\frac{x^3-1}{x-1}$`, ["1","2","3","0"],2,""],
[R`$\lim_{x\to0}\frac{\sqrt{x+4}-2}{x}$`, [R`$\frac12$`,R`$\frac14$`,"2","0"],1,""],
[R`ຂອບເຂດມີ ກໍຕໍ່ເມື່ອ:`, ["f(a) ມີ","ຂອບເຂດຊ້າຍ = ຂອບເຂດຂວາ","f ເປັນພະຫຸພົດ","x > 0"],1,""],
[R`$\lim_{x\to2}(x^3-2x+1)$`, ["5","3","7","9"],0,""],
[R`$\lim_{x\to3}\frac{x^2-5x+6}{x^2-9}$`, [R`$\frac16$`,R`$\frac13$`,"0",R`$\frac56$`],0,""],
[R`ຮູບ $\frac00$ ໝາຍຄວາມວ່າ:`, ["ຂອບເຂດ = 0","ຂອບເຂດບໍ່ມີ","ຕ້ອງປ່ຽນຮູບສຳນວນກ່ອນ","ຂອບເຂດ = 1"],2,""],
[R`$\lim_{x\to4}\frac{\sqrt x-2}{x-4}$`, [R`$\frac14$`,R`$\frac12$`,"4","0"],0,""]
]});

M7.ch.push({
n:21, part:6, title:"ຂອບເຂດ ແລະ ການຕໍ່ເນື່ອງຂອງຕຳລາ",
goal:R`ຄິດໄລ່ຂອບເຂດເມື່ອ $x\to\pm\infty$ ແລະ ຂອບເຂດອະສົງໄຂ, ກວດການຕໍ່ເນື່ອງຂອງຕຳລາຢູ່ເມັດໜຶ່ງ ແລະ ເທິງຫວ່າງ.`,
slides:[
[R`ຂອບເຂດເມື່ອ $x\to\pm\infty$`, R`<div class="box"><span class="lbl">ພື້ນຖານ</span>$\displaystyle\lim_{x\to\pm\infty}\frac c{x^n}=0\ (n\gt0)$</div>
<p>ເສດສ່ວນພະຫຸພົດ: ຫານຕົວຕັ້ງ ແລະ ຕົວພູດດ້ວຍ $x$ ກຳລັງສູງສຸດຂອງຕົວພູດ.</p>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$$\lim_{x\to\infty}\frac{3x^2+1}{2x^2-x}=\lim\frac{3+\frac1{x^2}}{2-\frac1x}=\frac32$$</div><p>ຖ້າ $\lim\limits_{x\to\pm\infty}f(x)=L$: ເສັ້ນ $y=L$ ເປັນ <b>ເສັ້ນເຂົ້າໃກ້ລວງນອນ</b>.</p>`],
[R`ຂອບເຂດອະສົງໄຂ ແລະ ຮູບ $\infty-\infty$`, R`<div class="ex"><span class="lbl">ຂອບເຂດອະສົງໄຂ</span>$\lim\limits_{x\to0^+}\frac1x=+\infty,\ \lim\limits_{x\to0^-}\frac1x=-\infty$ → ເສັ້ນ $x=0$ ເປັນເສັ້ນເຂົ້າໃກ້ລວງຕັ້ງ</div>
<div class="ex"><span class="lbl">$\infty-\infty$: ຄູນສັງຍຸກ</span>$$\lim_{x\to\infty}(\sqrt{x^2+x}-x)=\lim\frac{x}{\sqrt{x^2+x}+x}=\frac12$$</div>
<div class="box red"><span class="lbl">ລະວັງ $x\to-\infty$</span>$\sqrt{x^2}=|x|=-x$ ເມື່ອ $x\lt0$</div>`],
[R`ການຕໍ່ເນື່ອງຢູ່ເມັດໜຶ່ງ`, R`<div class="box"><span class="lbl">ນິຍາມ</span>$f$ ຕໍ່ເນື່ອງຢູ່ $x=a$ ຖ້າຄົບ 3 ເງື່ອນໄຂ:<br>1) $f(a)$ ມີຄ່າ · 2) $\lim\limits_{x\to a}f(x)$ ມີ · 3) $\lim\limits_{x\to a}f(x)=f(a)$</div>
<p>ຖ້າຂາດເງື່ອນໄຂໃດໜຶ່ງ → $f$ <b>ບໍ່ຕໍ່ເນື່ອງ</b> ຢູ່ $a$.</p><p>ຮູບພາບ: ແຕ້ມເສັ້ນສະແດງຜ່ານ $a$ ໄດ້ໂດຍບໍ່ຍົກປາກກາ.</p>`],
[R`ຕົວຢ່າງ: ຊອກຄ່າໃຫ້ຕໍ່ເນື່ອງ`, R`<div class="ex"><span class="lbl">$f(x)=\begin{cases}\dfrac{x^2-1}{x-1},&x\neq1\\k,&x=1\end{cases}$</span>$\lim\limits_{x\to1}f(x)=\lim(x+1)=2$ → ຕ້ອງການ $k=2$</div>
<div class="ex"><span class="lbl">$f(x)=\begin{cases}ax+1,&x\lt2\\x^2-1,&x\ge2\end{cases}$</span>ຊ້າຍ: $2a+1$, ຂວາ $=f(2)=3$ → $a=1$</div>`],
[R`ການຕໍ່ເນື່ອງເທິງຫວ່າງ`, R`<ul><li>ພະຫຸພົດ ຕໍ່ເນື່ອງທົ່ວ $\mathbb{R}$</li><li>ຕຳລາເສດສ່ວນ ຕໍ່ເນື່ອງທຸກບ່ອນທີ່ຕົວພູດ $\neq0$</li><li>$\sin x,\cos x,e^x$ ຕໍ່ເນື່ອງທົ່ວ $\mathbb{R}$; $\ln x$ ຕໍ່ເນື່ອງເທິງ $(0;+\infty)$</li><li>ຜົນບວກ, ຜົນຄູນ, ຜົນຫານ, ຕຳລາປະກອບຂອງຕຳລາຕໍ່ເນື່ອງ ກໍຕໍ່ເນື່ອງ</li></ul>
<div class="box green"><span class="lbl">ທິດສະດີຄ່າກາງ</span>ຖ້າ $f$ ຕໍ່ເນື່ອງເທິງ $[a;b]$ ແລະ $f(a)f(b)\lt0$ ແລ້ວ ມີ $c\in(a;b)$ ທີ່ $f(c)=0$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$x\to\pm\infty$: ຫານດ້ວຍກຳລັງສູງສຸດ; $\infty-\infty$: ຄູນສັງຍຸກ</li><li>ຕໍ່ເນື່ອງຢູ່ $a$: $\lim_{x\to a}f(x)=f(a)$</li><li>ຕຳລາແບ່ງຊ່ວງ: ກວດ ຊ້າຍ = ຂວາ = $f(a)$</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}\frac{5x^3-2x}{2x^3+7}$.`, R`$\frac52$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}\frac{2x+3}{x^2+1}$.`, "0"],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to-\infty}\frac{2x+1}{\sqrt{x^2+1}}$.`, R`$\sqrt{x^2+1}=-x\sqrt{1+\frac1{x^2}}$ → $\frac{2+\frac1x}{-\sqrt{1+\frac1{x^2}}}\to-2$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}(\sqrt{x^2+4x}-x)$.`, R`$\frac{4x}{\sqrt{x^2+4x}+x}\to2$.`],
[R`ຈົ່ງຊອກ $k$ ເພື່ອໃຫ້ $f(x)=\begin{cases}\frac{x^2-9}{x-3},&x\neq3\\k,&x=3\end{cases}$ ຕໍ່ເນື່ອງຢູ່ $x=3$.`, R`$k=6$.`],
[R`ຈົ່ງສະແດງວ່າ $x^3+x-1=0$ ມີໃຈຜົນຢູ່ໃນ $(0;1)$.`, R`$f(0)=-1\lt0,\ f(1)=1\gt0$, $f$ ຕໍ່ເນື່ອງ → ທິດສະດີຄ່າກາງ.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}\frac{\sqrt{4x^2+1}}{3x-2}$.`, R`$\frac23$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}(\sqrt{x+1}-\sqrt x)$.`, "0"],
[R`ຈົ່ງຊອກເສັ້ນເຂົ້າໃກ້ລວງຕັ້ງ ແລະ ລວງນອນຂອງ $y=\frac{2x-1}{x+3}$.`, R`$x=-3$ ແລະ $y=2$.`],
[R`ຈົ່ງຊອກ $a$ ເພື່ອໃຫ້ $f(x)=\begin{cases}x^2+a,&x\le1\\2x+3,&x\gt1\end{cases}$ ຕໍ່ເນື່ອງທົ່ວ $\mathbb{R}$.`, R`$1+a=5\Rightarrow a=4$.`],
[R`$f(x)=\frac{x^2-4}{x-2}$ ຕໍ່ເນື່ອງຢູ່ $x=2$ ບໍ? ເປັນຫຍັງ?`, R`ບໍ່ຕໍ່ເນື່ອງ ຍ້ອນ $f(2)$ ບໍ່ມີ (ເຖິງຂອບເຂດ = 4).`],
[R`ຈົ່ງຊອກ $a,b$ ເພື່ອໃຫ້ $f(x)=\begin{cases}ax+b,&x\lt1\\x^2,&x\ge1\end{cases}$ ຕໍ່ເນື່ອງທົ່ວ $\mathbb{R}$ ແລະ $f(0)=3$.`, R`$b=3$; $a+b=1\Rightarrow a=-2$.`]
],
quiz:[
[R`$\lim_{x\to\infty}\frac{3x^2+1}{2x^2-x}$`, [R`$\frac32$`,"3","0",R`$\infty$`],0,""],
[R`$\lim_{x\to\infty}(\sqrt{x^2+x}-x)$`, ["0","1",R`$\frac12$`,R`$\infty$`],2,""],
[R`ເສັ້ນເຂົ້າໃກ້ລວງນອນຂອງ $y=\frac{2x-1}{x+3}$:`, [R`$y=2$`,R`$y=-3$`,R`$x=-3$`,R`$y=0$`],0,""],
[R`ເງື່ອນໄຂການຕໍ່ເນື່ອງຢູ່ $a$ ມີຈັກຂໍ້?`, ["1","2","3","4"],2,""],
[R`ຕຳລາໃດຕໍ່ເນື່ອງທົ່ວ $\mathbb{R}$?`, [R`$\frac1x$`,R`$\ln x$`,R`$x^3-2x$`,R`$\tan x$`],2,""],
[R`$f(x)=\frac{x^2-1}{x-1}\ (x\neq1),\ f(1)=k$ ຕໍ່ເນື່ອງເມື່ອ $k=$`, ["0","1","2","−1"],2,""],
[R`$\lim_{x\to0^+}\frac1x$`, ["0",R`$+\infty$`,R`$-\infty$`,"1"],1,""],
[R`$\lim_{x\to-\infty}\frac{2x+1}{\sqrt{x^2+1}}$`, ["2","−2","0","1"],1,""]
]});

M7.ch.push({
n:22, part:6, title:"ຂອບເຂດຂອງຕຳລາໃຈກຳລັງ ແລະ ຕຳລາໂລກາຣິດ",
goal:R`ນຳໃຊ້ຂອບເຂດພື້ນຖານທີ່ກ່ຽວກັບຈຳນວນ $e$ ເພື່ອຄິດໄລ່ຂອບເຂດຂອງຕຳລາໃຈກຳລັງ ແລະ ໂລກາຣິດ.`,
slides:[
[R`ຈຳນວນ $e$`, R`<div class="box"><span class="lbl">ຂອບເຂດພື້ນຖານ</span>$$\lim_{x\to\infty}\left(1+\frac1x\right)^x=e\qquad\lim_{x\to0}(1+x)^{\frac1x}=e$$ $e\approx2.71828\ldots$</div>
<div class="tbl"><table><tr><th>$x$</th><td>10</td><td>100</td><td>1000</td><td>10 000</td></tr><tr><th>$(1+\frac1x)^x$</th><td>2.5937</td><td>2.7048</td><td>2.7169</td><td>2.7181</td></tr></table></div><p>ນຳໃຊ້: ດອກເບ້ຍທົບຕົ້ນຕໍ່ເນື່ອງ $A=Pe^{rt}$.</p>`],
[R`ຮູບທົ່ວໄປ $1^\infty$`, R`<div class="box green"><span class="lbl">ສູດ</span>$$\lim_{x\to\infty}\left(1+\frac kx\right)^x=e^k$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\lim\left(1+\frac2x\right)^x=e^2$ · $\lim\left(1-\frac1x\right)^x=e^{-1}$<br>$$\lim_{x\to\infty}\left(\frac{x+1}{x-1}\right)^x=\lim\left(1+\frac2{x-1}\right)^{x}=e^2$$</div>`],
[R`ຂອບເຂດທີ່ໄດ້ຈາກ $e$`, R`<div class="box"><span class="lbl">ສູດສຳຄັນ (x → 0)</span>$$\lim_{x\to0}\frac{e^x-1}x=1\qquad\lim_{x\to0}\frac{\ln(1+x)}x=1\qquad\lim_{x\to0}\frac{a^x-1}x=\ln a$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\lim\limits_{x\to0}\dfrac{e^{3x}-1}x=3\lim\dfrac{e^{3x}-1}{3x}=3$<br>$\lim\limits_{x\to0}\dfrac{\ln(1+2x)}x=2$ · $\lim\limits_{x\to0}\dfrac{2^x-1}x=\ln2$</div>`],
[R`ຂອບເຂດທີ່ອະສົງໄຂ`, R`<ul><li>$\lim\limits_{x\to+\infty}e^x=+\infty,\ \lim\limits_{x\to-\infty}e^x=0$</li><li>$\lim\limits_{x\to+\infty}\ln x=+\infty,\ \lim\limits_{x\to0^+}\ln x=-\infty$</li><li>ເລກກຳລັງເຕີບໂຕໄວກວ່າພະຫຸພົດ: $\lim\limits_{x\to\infty}\dfrac{x^n}{e^x}=0$</li><li>ພະຫຸພົດເຕີບໂຕໄວກວ່າ $\ln$: $\lim\limits_{x\to\infty}\dfrac{\ln x}{x}=0$</li></ul>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$(1+\frac1x)^x\to e$, $(1+\frac kx)^x\to e^k$</li><li>$\frac{e^x-1}x\to1$, $\frac{\ln(1+x)}x\to1$, $\frac{a^x-1}x\to\ln a$ (x → 0)</li><li>ປັບຮູບໃຫ້ກົງກັບສູດ (ຄູນ/ຫານຄ່າຄົງທີ່)</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}\left(1+\frac3x\right)^x$.`, R`$e^3$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}\left(1+\frac1x\right)^{2x}$.`, R`$e^2$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{e^{5x}-1}{2x}$.`, R`$\frac52$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{\ln(1+3x)}{x}$.`, R`$3\lim\frac{\ln(1+3x)}{3x}=3$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}(1+2x)^{\frac1x}$.`, R`$\left[(1+2x)^{\frac1{2x}}\right]^2\to e^2$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{3^x-1}{x}$.`, R`$\ln3$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}\left(1-\frac2x\right)^x$.`, R`$e^{-2}$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}\left(\frac{x+3}{x}\right)^{x}$.`, R`$e^3$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{e^{2x}-e^{x}}{x}$.`, R`$\frac{e^{2x}-1}x-\frac{e^x-1}x\to2-1=1$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{\ln(1+x)}{e^x-1}$.`, "1"],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}\frac{x^2}{e^x}$.`, "0"],
[R`ຝາກ 1 000 000 ກີບ ດອກເບ້ຍ 10%/ປີ ທົບຕົ້ນຕໍ່ເນື່ອງ $A=Pe^{rt}$. ຫຼັງ 5 ປີ?`, R`$10^6e^{0.5}\approx1\,648\,721$ ກີບ.`]
],
quiz:[
[R`$\lim_{x\to\infty}(1+\frac1x)^x$`, ["1",R`$e$`,R`$\infty$`,"0"],1,""],
[R`$\lim_{x\to\infty}(1+\frac2x)^x$`, [R`$2e$`,R`$e^2$`,R`$e$`,R`$e^{1/2}$`],1,""],
[R`$\lim_{x\to0}\frac{e^x-1}x$`, ["0","1",R`$e$`,R`$\infty$`],1,""],
[R`$\lim_{x\to0}\frac{\ln(1+2x)}x$`, ["1","2",R`$\frac12$`,"0"],1,""],
[R`$\lim_{x\to0}\frac{2^x-1}x$`, ["2",R`$\ln2$`,"1",R`$\log_2e$`],1,""],
[R`$\lim_{x\to-\infty}e^x$`, ["0","1",R`$\infty$`,R`$-\infty$`],0,""],
[R`$\lim_{x\to\infty}(1-\frac1x)^x$`, [R`$e$`,R`$e^{-1}$`,"0","1"],1,""],
[R`$\lim_{x\to0}(1+x)^{1/x}$`, ["1",R`$e$`,"0",R`$\infty$`],1,""]
]});

M7.ch.push({
n:23, part:6, title:"ຂອບເຂດຂອງຕຳລາໄຕມຸມມິຕິ",
goal:R`ນຳໃຊ້ຂອບເຂດພື້ນຖານ $\lim\limits_{x\to0}\frac{\sin x}x=1$ ແລະ ສູດໄຕມຸມມິຕິ ເພື່ອຄິດໄລ່ຂອບເຂດຂອງຕຳລາໄຕມຸມມິຕິ.`,
slides:[
[R`ສູດໄຕມຸມມິຕິທີ່ຕ້ອງໃຊ້`, R`<ul><li>$\sin^2x+\cos^2x=1$</li><li>$\sin2x=2\sin x\cos x$, $\ \cos2x=1-2\sin^2x$</li><li>$1-\cos x=2\sin^2\frac x2$</li><li>$\sin a-\sin b=2\cos\frac{a+b}2\sin\frac{a-b}2$</li></ul><p>ຕຳລາ $\sin,\cos$ ຕໍ່ເນື່ອງ ດັ່ງນັ້ນ $\lim\limits_{x\to a}\sin x=\sin a$.</p>`],
[R`ຂອບເຂດພື້ນຖານ`, R`<div class="box"><span class="lbl">ທິດສະດີ (x ເປັນເຣດຽນ)</span>$$\lim_{x\to0}\frac{\sin x}x=1$$</div>
<div class="tbl"><table><tr><th>$x$</th><td>0.5</td><td>0.1</td><td>0.01</td></tr><tr><th>$\frac{\sin x}x$</th><td>0.9589</td><td>0.9983</td><td>0.99998</td></tr></table></div>
<div class="box green"><span class="lbl">ຜົນຕາມມາ</span>$\lim\limits_{x\to0}\dfrac{\tan x}x=1$ · $\lim\limits_{x\to0}\dfrac{1-\cos x}{x^2}=\dfrac12$ · $\lim\limits_{x\to0}\dfrac{\sin ax}{bx}=\dfrac ab$</div>`],
[R`ຕົວຢ່າງ`, R`<div class="ex"><span class="lbl">$\lim\limits_{x\to0}\dfrac{\sin5x}x$</span>$=5\lim\dfrac{\sin5x}{5x}=5$</div>
<div class="ex"><span class="lbl">$\lim\limits_{x\to0}\dfrac{\tan3x}{\sin2x}$</span>$=\lim\dfrac{\tan3x}{3x}\cdot\dfrac{2x}{\sin2x}\cdot\dfrac32=\dfrac32$</div>
<div class="ex"><span class="lbl">$\lim\limits_{x\to0}\dfrac{1-\cos2x}{x^2}$</span>$=\lim\dfrac{2\sin^2x}{x^2}=2$</div>`],
[R`ປ່ຽນຕົວປ່ຽນ`, R`<div class="ex"><span class="lbl">$\lim\limits_{x\to\pi}\dfrac{\sin x}{\pi-x}$</span>ວາງ $t=\pi-x\to0$: $\sin x=\sin(\pi-t)=\sin t$ → $\lim\dfrac{\sin t}t=1$</div>
<div class="ex"><span class="lbl">$\lim\limits_{x\to\infty}x\sin\dfrac1x$</span>ວາງ $t=\frac1x\to0$: $\lim\dfrac{\sin t}t=1$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\frac{\sin x}x\to1,\ \frac{\tan x}x\to1,\ \frac{1-\cos x}{x^2}\to\frac12$ (x → 0)</li><li>ຈັດຮູບໃຫ້ມີ $\frac{\sin u}u$ ໂດຍ $u\to0$</li><li>ໃຊ້ສູດໄຕມຸມມິຕິ ແລະ ການປ່ຽນຕົວປ່ຽນ</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{\sin4x}{\sin7x}$.`, R`$\frac47$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{x}{\tan2x}$.`, R`$\frac12$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x\sin x}$.`, R`$\frac{2\sin^2\frac x2}{x\sin x}\to\frac{2\cdot\frac14}{1}=\frac12$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{\sin x-\tan x}{x^3}$.`, R`$\tan x(\cos x-1)/x^3\to1\cdot(-\frac12)=-\frac12$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{\sin^2 3x}{x^2}$.`, "9"],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\frac\pi2}\frac{\cos x}{x-\frac\pi2}$.`, R`$t=x-\frac\pi2$: $\cos x=-\sin t$ → $-1$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{\sin 6x}{2x}$.`, "3"],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{\tan x-\sin x}{x^3}$.`, R`$\frac12$.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{1-\cos4x}{x^2}$.`, "8"],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{\sin3x+\sin x}{x}$.`, "4"],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}x\sin\frac2x$.`, "2"],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{\cos x-\cos3x}{x^2}$.`, R`$=\frac{2\sin2x\sin x}{x^2}\to4$.`]
],
quiz:[
[R`$\lim_{x\to0}\frac{\sin x}{x}$`, ["0","1",R`$\infty$`,"ບໍ່ມີ"],1,""],
[R`$\lim_{x\to0}\frac{\sin5x}{x}$`, ["1",R`$\frac15$`,"5","0"],2,""],
[R`$\lim_{x\to0}\frac{1-\cos x}{x^2}$`, ["1",R`$\frac12$`,"0","2"],1,""],
[R`$\lim_{x\to0}\frac{\tan3x}{\sin2x}$`, [R`$\frac23$`,R`$\frac32$`,"1","6"],1,""],
[R`$\lim_{x\to\pi}\frac{\sin x}{\pi-x}$`, ["0","1","−1",R`$\pi$`],1,""],
[R`$\lim_{x\to0}\frac{1-\cos2x}{x^2}$`, ["1","2","4",R`$\frac12$`],1,""],
[R`ໃນ $\lim\frac{\sin x}x=1$, $x$ ວັດແທກເປັນ:`, ["ອົງສາ","ເຣດຽນ","ແມັດ","ໃດກໍໄດ້"],1,""],
[R`$\lim_{x\to\infty}x\sin\frac1x$`, ["0","1",R`$\infty$`,"ບໍ່ມີ"],1,""]
]});

M7.ch.push({
n:24, part:6, title:"ອັດຕາປ່ຽນແປງ ແລະ ສຳປະສິດມຸມຂອງເສັ້ນຕິດ",
goal:R`ຄິດໄລ່ອັດຕາປ່ຽນແປງສະເລ່ຍ ແລະ ອັດຕາປ່ຽນແປງທັນທີ, ຊອກສຳປະສິດມຸມ ແລະ ສົມຜົນເສັ້ນຕິດຂອງເສັ້ນໂຄ້ງ.`,
slides:[
[R`ອັດຕາປ່ຽນແປງສະເລ່ຍ`, R`<div class="box"><span class="lbl">ນິຍາມ</span>ອັດຕາປ່ຽນແປງສະເລ່ຍຂອງ $f$ ຈາກ $x$ ຫາ $x+h$: $$\frac{\Delta y}{\Delta x}=\frac{f(x+h)-f(x)}h$$</div><p>ຄວາມໝາຍເລຂາຄະນິດ: ສຳປະສິດມຸມຂອງ <b>ເສັ້ນຕັດ</b> ຜ່ານສອງເມັດເທິງເສັ້ນໂຄ້ງ.</p>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$f(x)=x^3$ ຈາກ $x=1$ ຫາ $x=3$: $\frac{27-1}{2}=13$</div>`],
[R`ອັດຕາປ່ຽນແປງທັນທີ`, R`<p>ໃຫ້ $h\to0$: ເສັ້ນຕັດກາຍເປັນ <b>ເສັ້ນຕິດ</b>.</p><div class="box green"><span class="lbl">ນິຍາມ</span>$$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h$$ = ອັດຕາປ່ຽນແປງທັນທີ = ສຳປະສິດມຸມຂອງເສັ້ນຕິດຢູ່ $x$</div>
<div class="ex"><span class="lbl">$f(x)=x^2$ ຢູ່ $x=3$</span>$\dfrac{(3+h)^2-9}h=6+h\to6$</div>`],
[R`ສົມຜົນເສັ້ນຕິດ`, R`<div class="box"><span class="lbl">ສູດ</span>ເສັ້ນຕິດກັບ $y=f(x)$ ຢູ່ເມັດ $(x_0;y_0)$: $$y-y_0=f'(x_0)(x-x_0)$$</div>
<div class="ex"><span class="lbl">$y=x^2$ ຢູ່ $(3;9)$</span>$k=6$ → $y-9=6(x-3)$ → $y=6x-9$</div>
<svg viewBox="0 0 220 150" width="220" style="max-width:100%" role="img" aria-label="ເສັ້ນໂຄ້ງ ແລະ ເສັ້ນຕິດ"><g stroke="currentColor" fill="none"><line x1="10" y1="135" x2="210" y2="135"/><line x1="40" y1="145" x2="40" y2="5"/></g><path d="M40 135 Q 110 135 180 15" style="stroke:var(--blue)" stroke-width="2" fill="none"/><line x1="70" y1="140" x2="200" y2="20" style="stroke:var(--red)" stroke-width="1.6"/><circle cx="140" cy="70" r="4" style="fill:var(--red)"/><g font-size="11" fill="currentColor"><text x="148" y="78">(x₀; y₀)</text><text x="170" y="40">ເສັ້ນຕິດ</text></g></svg>`],
[R`ອັດຕາປ່ຽນແປງໃນຟີຊິກ`, R`<p>ຖ້າ $s(t)$ ແມ່ນໄລຍະທາງຕາມເວລາ:</p><ul><li>ຄວາມໄວສະເລ່ຍ: $\dfrac{s(t_2)-s(t_1)}{t_2-t_1}$</li><li>ຄວາມໄວທັນທີ: $v(t)=s'(t)$</li><li>ອັດຕາເລັ່ງ: $a(t)=v'(t)$</li></ul>
<div class="ex"><span class="lbl">$s(t)=t^2+2t$ (m)</span>$v(3)=\lim\limits_{h\to0}\dfrac{s(3+h)-s(3)}h=\lim(8+h)=8$ m/s</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ອັດຕາສະເລ່ຍ = $\frac{f(x+h)-f(x)}h$ (ສຳປະສິດມຸມເສັ້ນຕັດ)</li><li>ອັດຕາທັນທີ = $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h$ (ສຳປະສິດມຸມເສັ້ນຕິດ)</li><li>ເສັ້ນຕິດ: $y-y_0=f'(x_0)(x-x_0)$</li></ul>`]
],
ex:[
[R`ຈົ່ງຊອກອັດຕາປ່ຽນແປງສະເລ່ຍຂອງ $f(x)=x^2+1$ ຈາກ $x=1$ ຫາ $x=4$.`, R`$\frac{17-2}{3}=5$.`],
[R`ຈົ່ງໃຊ້ນິຍາມຊອກ $f'(2)$ ເມື່ອ $f(x)=3x^2-x$.`, R`$\frac{3(2+h)^2-(2+h)-10}h=11+3h\to11$.`],
[R`ຈົ່ງຂຽນສົມຜົນເສັ້ນຕິດກັບ $y=x^2$ ຢູ່ $x=-1$.`, R`$k=-2$, ເມັດ $(-1;1)$: $y=-2x-1$.`],
[R`ຈົ່ງໃຊ້ນິຍາມຊອກ $f'(x)$ ເມື່ອ $f(x)=\frac1x$.`, R`$\frac{\frac1{x+h}-\frac1x}h=\frac{-1}{x(x+h)}\to-\frac1{x^2}$.`],
[R`ວັດຖຸເຄື່ອນທີ່ $s(t)=5t^2$ (m). ຈົ່ງຊອກຄວາມໄວສະເລ່ຍໃນ $[1;3]$ ແລະ ຄວາມໄວທັນທີທີ່ $t=2$.`, R`ສະເລ່ຍ: $\frac{45-5}2=20$ m/s; ທັນທີ: $v=10t=20$ m/s.`],
[R`ຈົ່ງໃຊ້ນິຍາມຊອກ $f'(4)$ ເມື່ອ $f(x)=\sqrt x$.`, R`$\frac{\sqrt{4+h}-2}h=\frac1{\sqrt{4+h}+2}\to\frac14$.`]
],
hw:[
[R`ຈົ່ງຊອກອັດຕາປ່ຽນແປງສະເລ່ຍຂອງ $f(x)=x^3$ ຈາກ 1 ຫາ 3.`, "13"],
[R`ຈົ່ງໃຊ້ນິຍາມຊອກ $f'(x)$ ເມື່ອ $f(x)=x^2-4x$.`, R`$2x-4$.`],
[R`ຈົ່ງຂຽນສົມຜົນເສັ້ນຕິດກັບ $y=x^3$ ຢູ່ $(1;1)$.`, R`$f'(1)=3$: $y=3x-2$.`],
[R`ຈົ່ງຊອກເມັດເທິງ $y=x^2-6x$ ທີ່ເສັ້ນຕິດຂະໜານກັບແກນ $Ox$.`, R`$2x-6=0\Rightarrow x=3$: ເມັດ $(3;-9)$.`],
[R`ໝາກບານຖືກໂຍນຂຶ້ນ $h(t)=20t-5t^2$ (m). ຄວາມໄວທີ່ $t=1$ s?`, R`$h'(t)=20-10t$ → 10 m/s.`],
[R`ຈົ່ງຂຽນສົມຜົນເສັ້ນຕິດກັບ $y=\frac1x$ ຢູ່ $x=2$.`, R`$k=-\frac14$, ເມັດ $(2;\frac12)$: $y=-\frac14x+1$.`]
],
quiz:[
[R`ອັດຕາປ່ຽນແປງສະເລ່ຍຂອງ $x^3$ ຈາກ 1 ຫາ 3:`, ["13","26","9","27"],0,""],
[R`ສຳປະສິດມຸມຂອງເສັ້ນຕິດກັບ $y=x^2$ ຢູ່ $x=3$:`, ["3","6","9","2"],1,""],
[R`ເສັ້ນຕິດກັບ $y=x^2$ ຢູ່ $(3;9)$:`, [R`$y=6x-9$`,R`$y=6x+9$`,R`$y=3x$`,R`$y=9x-18$`],0,""],
[R`$f'(x)$ ນິຍາມໂດຍ:`, [R`$\frac{f(x)}{x}$`,R`$\lim_{h\to0}\frac{f(x+h)-f(x)}h$`,R`$f(x+1)-f(x)$`,R`$\lim_{h\to0}f(x+h)$`],1,""],
[R`$s(t)=t^2+2t$: ຄວາມໄວທີ່ $t=3$:`, ["15","8","6","9"],1,""],
[R`ອັດຕາປ່ຽນແປງທັນທີ ໝາຍເຖິງ ສຳປະສິດມຸມຂອງ:`, ["ເສັ້ນຕັດ","ເສັ້ນຕິດ","ແກນ Ox","ເສັ້ນຕັ້ງສາກ"],1,""],
[R`$f(x)=\frac1x$: $f'(x)=$`, [R`$\frac1{x^2}$`,R`$-\frac1{x^2}$`,R`$\ln x$`,R`$-\frac1x$`],1,""],
[R`ເສັ້ນຕິດຂະໜານ $Ox$ ເມື່ອ:`, [R`$f'(x_0)=1$`,R`$f'(x_0)=0$`,R`$f(x_0)=0$`,R`$f'(x_0)$ ບໍ່ມີ`],1,""]
]});

M7.ch.push({
n:25, part:6, title:"ຜົນຕຳລາ",
goal:R`ຄິດໄລ່ຜົນຕຳລາຂອງຕຳລາພື້ນຖານ ດ້ວຍຫຼັກເກນ ບວກ, ຄູນ, ຫານ, ຕຳລາປະກອບ, ຕຳລາໃຈກຳລັງ, ໂລກາຣິດ ແລະ ຜົນຕຳລາຂັ້ນສູງ.`,
slides:[
[R`ສູດຜົນຕຳລາພື້ນຖານ`, R`<div class="tbl"><table><tr><th>$f(x)$</th><th>$f'(x)$</th></tr>
<tr><td>$c$</td><td>$0$</td></tr><tr><td>$x^n$</td><td>$nx^{n-1}$</td></tr><tr><td>$\sqrt x$</td><td>$\frac1{2\sqrt x}$</td></tr><tr><td>$\frac1x$</td><td>$-\frac1{x^2}$</td></tr></table></div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$(x^5)'=5x^4$ · $(x^{-2})'=-2x^{-3}$ · $(\sqrt[3]{x})'=\frac13x^{-2/3}$</div>`],
[R`ຫຼັກເກນການຄິດໄລ່`, R`<div class="box"><span class="lbl">ຫຼັກເກນ</span>$(cu)'=cu'$ · $(u\pm v)'=u'\pm v'$<br>$(uv)'=u'v+uv'$<br>$\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$(x^2(3x-1))'=2x(3x-1)+3x^2=9x^2-2x$<br>$\left(\dfrac{x+1}{x-1}\right)'=\dfrac{(x-1)-(x+1)}{(x-1)^2}=\dfrac{-2}{(x-1)^2}$</div>`],
[R`ຜົນຕຳລາຂອງຕຳລາປະກອບ (ກົດລູກໂສ້)`, R`<div class="box green"><span class="lbl">ກົດລູກໂສ້</span>$y=f(u),\ u=g(x)$ → $y'=f'(u)\cdot u'$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\left[(2x+1)^5\right]'=5(2x+1)^4\cdot2=10(2x+1)^4$<br>$\left(\sqrt{x^2+1}\right)'=\dfrac{2x}{2\sqrt{x^2+1}}=\dfrac x{\sqrt{x^2+1}}$</div>`],
[R`ຕຳລາໃຈກຳລັງ ແລະ ໂລກາຣິດ`, R`<div class="tbl"><table><tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(u)$</th><th>$f'$</th></tr>
<tr><td>$e^x$</td><td>$e^x$</td><td>$e^u$</td><td>$u'e^u$</td></tr><tr><td>$a^x$</td><td>$a^x\ln a$</td><td>$a^u$</td><td>$u'a^u\ln a$</td></tr><tr><td>$\ln x$</td><td>$\frac1x$</td><td>$\ln u$</td><td>$\frac{u'}u$</td></tr><tr><td>$\log_ax$</td><td>$\frac1{x\ln a}$</td><td>$\log_au$</td><td>$\frac{u'}{u\ln a}$</td></tr></table></div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$(e^{3x^2})'=6xe^{3x^2}$ · $(\ln(x^2+1))'=\frac{2x}{x^2+1}$ · $(xe^x)'=e^x(1+x)$</div>`],
[R`ຜົນຕຳລາຂັ້ນສູງ`, R`<p>$f''(x)=(f'(x))'$, $f'''(x)=(f''(x))'$, …, $f^{(n)}(x)$</p>
<div class="ex"><span class="lbl">$f(x)=x^4-2x^3$</span>$f'=4x^3-6x^2$, $f''=12x^2-12x$, $f'''=24x-12$, $f^{(4)}=24$</div>
<div class="ex"><span class="lbl">ຮູບທົ່ວໄປ</span>$(e^{2x})^{(n)}=2^ne^{2x}$ · $\left(\frac1x\right)^{(n)}=\dfrac{(-1)^nn!}{x^{n+1}}$</div><p>ໃນຟີຊິກ: $s''(t)=a(t)$ ແມ່ນອັດຕາເລັ່ງ.</p>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$(x^n)'=nx^{n-1}$; ຜົນບວກ, ຜົນຄູນ, ຜົນຫານ</li><li>ກົດລູກໂສ້: $[f(u)]'=f'(u)u'$</li><li>$(e^u)'=u'e^u$, $(\ln u)'=\frac{u'}u$</li><li>ຜົນຕຳລາຂັ້ນສູງ: ຫາຜົນຕຳລາຊ້ຳ</li></ul>`]
],
ex:[
[R`ຈົ່ງຊອກ $y'$: $y=3x^4-5x^2+7x-2$.`, R`$12x^3-10x+7$.`],
[R`ຈົ່ງຊອກ $y'$: $y=(x^2+1)(2x-3)$.`, R`$2x(2x-3)+2(x^2+1)=6x^2-6x+2$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\dfrac{2x-1}{x+3}$.`, R`$\frac{2(x+3)-(2x-1)}{(x+3)^2}=\frac7{(x+3)^2}$.`],
[R`ຈົ່ງຊອກ $y'$: $y=(3x^2-1)^4$.`, R`$4(3x^2-1)^3\cdot6x=24x(3x^2-1)^3$.`],
[R`ຈົ່ງຊອກ $y'$: $y=e^{2x}\ln x$.`, R`$2e^{2x}\ln x+\frac{e^{2x}}x$.`],
[R`ຈົ່ງຊອກ $y''$: $y=x^3-3x^2+5$.`, R`$y'=3x^2-6x,\ y''=6x-6$.`]
],
hw:[
[R`ຈົ່ງຊອກ $y'$: $y=\sqrt{x}+\dfrac1{x^2}$.`, R`$\frac1{2\sqrt x}-\frac2{x^3}$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\sqrt{1-x^2}$.`, R`$\frac{-x}{\sqrt{1-x^2}}$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\ln(3x^2+1)$.`, R`$\frac{6x}{3x^2+1}$.`],
[R`ຈົ່ງຊອກ $y'$: $y=2^{x^2}$.`, R`$2x\cdot2^{x^2}\ln2$.`],
[R`ວັດຖຸເຄື່ອນທີ່ $s(t)=t^3-6t^2+9t$ (m). ຈົ່ງຊອກຄວາມໄວ ແລະ ອັດຕາເລັ່ງທີ່ $t=2$.`, R`$v=3t^2-12t+9=-3$ m/s; $a=6t-12=0$ m/s².`],
[R`ຈົ່ງຊອກ $y^{(n)}$ ຂອງ $y=e^{3x}$.`, R`$3^ne^{3x}$.`]
],
quiz:[
[R`$(x^5)'$`, [R`$5x^5$`,R`$5x^4$`,R`$x^4$`,R`$4x^5$`],1,""],
[R`$(e^{3x})'$`, [R`$e^{3x}$`,R`$3e^{3x}$`,R`$3xe^{3x-1}$`,R`$e^3$`],1,""],
[R`$(\ln x)'$`, [R`$\frac1x$`,R`$\ln x$`,R`$x$`,R`$e^x$`],0,""],
[R`$(uv)'$`, [R`$u'v'$`,R`$u'v+uv'$`,R`$u'v-uv'$`,R`$\frac{u'}{v'}$`],1,""],
[R`$\left[(2x+1)^5\right]'$`, [R`$5(2x+1)^4$`,R`$10(2x+1)^4$`,R`$(2x+1)^4$`,R`$2(2x+1)^5$`],1,""],
[R`$\left(\frac{x+1}{x-1}\right)'$`, [R`$\frac{-2}{(x-1)^2}$`,R`$\frac{2}{(x-1)^2}$`,"1",R`$\frac{2x}{(x-1)^2}$`],0,""],
[R`$(x^4)''$`, [R`$4x^3$`,R`$12x^2$`,R`$24x$`,R`$12x$`],1,""],
[R`$(\sqrt x)'$`, [R`$\frac1{\sqrt x}$`,R`$\frac1{2\sqrt x}$`,R`$2\sqrt x$`,R`$\frac{\sqrt x}2$`],1,""]
]});

M7.ch.push({
n:26, part:6, title:"ຜົນຕຳລາຂອງຕຳລາໄຕມຸມມິຕິ ແລະ ຕຳລາປີ້ນຂອງຕຳລາໄຕມຸມມິຕິ",
goal:R`ຄິດໄລ່ຜົນຕຳລາຂອງ $\sin,\cos,\tan,\cot$ ແລະ $\arcsin,\arccos,\arctan,\operatorname{arccot}$ ລວມທັງຕຳລາປະກອບ.`,
slides:[
[R`ສູດຜົນຕຳລາໄຕມຸມມິຕິ`, R`<div class="tbl"><table><tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(u)$</th><th>$f'$</th></tr>
<tr><td>$\sin x$</td><td>$\cos x$</td><td>$\sin u$</td><td>$u'\cos u$</td></tr>
<tr><td>$\cos x$</td><td>$-\sin x$</td><td>$\cos u$</td><td>$-u'\sin u$</td></tr>
<tr><td>$\tan x$</td><td>$\frac1{\cos^2x}=1+\tan^2x$</td><td>$\tan u$</td><td>$\frac{u'}{\cos^2u}$</td></tr>
<tr><td>$\cot x$</td><td>$-\frac1{\sin^2x}$</td><td>$\cot u$</td><td>$-\frac{u'}{\sin^2u}$</td></tr></table></div>
<p>ພິສູດ $(\sin x)'$: $\frac{\sin(x+h)-\sin x}h=\frac{2\cos(x+\frac h2)\sin\frac h2}h\to\cos x$</p>`],
[R`ຕົວຢ່າງ: ຕຳລາໄຕມຸມມິຕິ`, R`<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$(\sin3x)'=3\cos3x$<br>$(\cos^2x)'=2\cos x(-\sin x)=-\sin2x$<br>$(x\sin x)'=\sin x+x\cos x$<br>$(\tan(2x+1))'=\dfrac2{\cos^2(2x+1)}$<br>$(e^x\cos x)'=e^x(\cos x-\sin x)$</div>`],
[R`ຜົນຕຳລາຂອງຕຳລາປີ້ນໄຕມຸມມິຕິ`, R`<div class="tbl"><table><tr><th>$f(x)$</th><th>$f'(x)$</th></tr>
<tr><td>$\arcsin x$</td><td>$\frac1{\sqrt{1-x^2}}$</td></tr><tr><td>$\arccos x$</td><td>$-\frac1{\sqrt{1-x^2}}$</td></tr><tr><td>$\arctan x$</td><td>$\frac1{1+x^2}$</td></tr><tr><td>$\operatorname{arccot}x$</td><td>$-\frac1{1+x^2}$</td></tr></table></div>
<p>ພິສູດ: $y=\arcsin x\Rightarrow\sin y=x\Rightarrow\cos y\cdot y'=1\Rightarrow y'=\frac1{\cos y}=\frac1{\sqrt{1-x^2}}$</p>`],
[R`ຕົວຢ່າງ: ຕຳລາປີ້ນ`, R`<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$(\arcsin2x)'=\dfrac2{\sqrt{1-4x^2}}$<br>$(\arctan x^2)'=\dfrac{2x}{1+x^4}$<br>$(\arctan\sqrt x)'=\dfrac1{1+x}\cdot\dfrac1{2\sqrt x}$<br>$(x\arctan x)'=\arctan x+\dfrac x{1+x^2}$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$(\sin u)'=u'\cos u$, $(\cos u)'=-u'\sin u$</li><li>$(\tan u)'=\frac{u'}{\cos^2u}$, $(\cot u)'=-\frac{u'}{\sin^2u}$</li><li>$(\arcsin u)'=\frac{u'}{\sqrt{1-u^2}}$, $(\arctan u)'=\frac{u'}{1+u^2}$</li><li>arccos, arccot: ເຄື່ອງໝາຍລົບ</li></ul>`]
],
ex:[
[R`ຈົ່ງຊອກ $y'$: $y=\sin^3x$.`, R`$3\sin^2x\cos x$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\cos(x^2+1)$.`, R`$-2x\sin(x^2+1)$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\tan x-x$.`, R`$1+\tan^2x-1=\tan^2x$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\arcsin\frac x2$.`, R`$\frac{1/2}{\sqrt{1-x^2/4}}=\frac1{\sqrt{4-x^2}}$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\arctan\frac1x$.`, R`$\frac{-1/x^2}{1+1/x^2}=-\frac1{1+x^2}$.`],
[R`ຈົ່ງຊອກ $y''$: $y=\sin2x$.`, R`$y'=2\cos2x,\ y''=-4\sin2x$.`]
],
hw:[
[R`ຈົ່ງຊອກ $y'$: $y=x^2\cos x$.`, R`$2x\cos x-x^2\sin x$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\dfrac{\sin x}{1+\cos x}$.`, R`$\frac{\cos x(1+\cos x)+\sin^2x}{(1+\cos x)^2}=\frac1{1+\cos x}$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\ln(\sin x)$.`, R`$\cot x$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\arccos(2x-1)$.`, R`$-\frac{2}{\sqrt{1-(2x-1)^2}}=-\frac1{\sqrt{x-x^2}}$.`],
[R`ຈົ່ງຊອກ $y'$: $y=\arctan(e^x)$.`, R`$\frac{e^x}{1+e^{2x}}$.`],
[R`ຈົ່ງສະແດງວ່າ $y=\sin x+\cos x$ ສອດຄ່ອງກັບ $y''+y=0$.`, R`$y''=-\sin x-\cos x=-y$ ✓.`]
],
quiz:[
[R`$(\sin x)'$`, [R`$-\cos x$`,R`$\cos x$`,R`$\sin x$`,R`$-\sin x$`],1,""],
[R`$(\cos x)'$`, [R`$\sin x$`,R`$-\sin x$`,R`$\cos x$`,R`$-\cos x$`],1,""],
[R`$(\tan x)'$`, [R`$\frac1{\cos^2x}$`,R`$\frac1{\sin^2x}$`,R`$\cot x$`,R`$-\frac1{\cos^2x}$`],0,""],
[R`$(\arctan x)'$`, [R`$\frac1{\sqrt{1-x^2}}$`,R`$\frac1{1+x^2}$`,R`$-\frac1{1+x^2}$`,R`$\frac1{1-x^2}$`],1,""],
[R`$(\arcsin x)'$`, [R`$\frac1{\sqrt{1-x^2}}$`,R`$-\frac1{\sqrt{1-x^2}}$`,R`$\frac1{1+x^2}$`,R`$\cos x$`],0,""],
[R`$(\sin3x)'$`, [R`$\cos3x$`,R`$3\cos3x$`,R`$-3\cos3x$`,R`$3\sin3x$`],1,""],
[R`$(\cos^2x)'$`, [R`$2\cos x$`,R`$-\sin2x$`,R`$\sin2x$`,R`$-2\sin x$`],1,""],
[R`$(\operatorname{arccot}x)'$`, [R`$\frac1{1+x^2}$`,R`$-\frac1{1+x^2}$`,R`$-\frac1{\sin^2x}$`,R`$\frac1{\sqrt{1+x^2}}$`],1,""]
]});

M7.ch.push({
n:27, part:6, title:"ການນຳໃຊ້ຜົນຕຳລາ",
goal:R`ນຳໃຊ້ຜົນຕຳລາເພື່ອຂຽນເສັ້ນຕິດ ແລະ ເສັ້ນຕັ້ງສາກ, ສຶກສາການປ່ຽນແປງ, ຊອກຄ່າສູງສຸດ–ຕ່ຳສຸດ, ແຕ້ມເສັ້ນສະແດງ ແລະ ຄິດໄລ່ຂອບເຂດດ້ວຍຫຼັກເກນໂລປີຕານ.`,
slides:[
[R`ເສັ້ນຕິດ ແລະ ເສັ້ນຕັ້ງສາກ`, R`<p>ຢູ່ເມັດ $M(x_0;y_0)$ ຂອງ $y=f(x)$:</p><div class="box"><span class="lbl">ເສັ້ນຕິດ</span>$y-y_0=f'(x_0)(x-x_0)$</div><div class="box green"><span class="lbl">ເສັ້ນຕັ້ງສາກ</span>$y-y_0=-\dfrac1{f'(x_0)}(x-x_0)$ (ເມື່ອ $f'(x_0)\neq0$)</div>
<div class="ex"><span class="lbl">$y=x^3-2x$ ຢູ່ $x=1$</span>$y_0=-1,\ f'(1)=3x^2-2=1$<br>ເສັ້ນຕິດ: $y=x-2$ · ເສັ້ນຕັ້ງສາກ: $y=-x$</div>`],
[R`ອັດຕາປ່ຽນແປງສຳພັນ (ຄວາມໄວທີ່ກ່ຽວພັນກັນ)`, R`<div class="ex"><span class="lbl">ສູບລົມເຂົ້າໝາກບານ</span>ລັດສະໝີເພີ່ມຂຶ້ນ 2 cm/s. ບໍລິມາດເພີ່ມໄວເທົ່າໃດເມື່ອ $r=10$ cm?<br>$V=\frac43\pi r^3\Rightarrow\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}=4\pi(100)(2)=800\pi$ cm³/s</div>
<div class="box"><span class="lbl">ບາດກ້າວ</span>1) ຂຽນສົມຜົນເຊື່ອມຕົວປ່ຽນ · 2) ຫາຜົນຕຳລາຕາມ $t$ ທັງສອງຟາກ · 3) ແທນຄ່າ</div>`],
[R`ການປ່ຽນແປງ ແລະ ຄ່າສຸດຂີດ`, R`<ul><li>$f'(x)\gt0$ ເທິງຫວ່າງ → $f$ <b>ຂຶ້ນ</b>; $f'(x)\lt0$ → $f$ <b>ແຮມ (ລົງ)</b></li><li>ເມັດວິກິດ: $f'(x_0)=0$ ຫຼື ບໍ່ມີ</li><li>$f'$ ປ່ຽນ $+\to-$: <b>ສູງສຸດທ້ອງຖິ່ນ</b>; $-\to+$: <b>ຕ່ຳສຸດທ້ອງຖິ່ນ</b></li><li>ກວດຂັ້ນສອງ: $f''(x_0)\lt0$ → ສູງສຸດ; $f''(x_0)\gt0$ → ຕ່ຳສຸດ</li></ul>
<div class="ex"><span class="lbl">$f(x)=x^3-3x$</span>$f'=3x^2-3=0\Rightarrow x=\pm1$<br>$f''(-1)=-6\lt0$: ສູງສຸດ $f(-1)=2$; $f''(1)=6\gt0$: ຕ່ຳສຸດ $f(1)=-2$</div>`],
[R`ຄວາມໂຄ້ງ ແລະ ເມັດຫັກລ້ຽວ`, R`<ul><li>$f''(x)\gt0$: ເສັ້ນສະແດງ <b>ໂຄ້ງຫງາຍ</b> (∪)</li><li>$f''(x)\lt0$: ເສັ້ນສະແດງ <b>ໂຄ້ງຂວ້ຳ</b> (∩)</li><li>$f''$ ປ່ຽນເຄື່ອງໝາຍທີ່ $x_0$: ເມັດ $(x_0;f(x_0))$ ເປັນ <b>ເມັດຫັກລ້ຽວ</b></li></ul>
<div class="box"><span class="lbl">ບາດກ້າວແຕ້ມເສັ້ນສະແດງ</span>1) ເຂດກຳນົດ · 2) $f'$, ຕາຕະລາງການປ່ຽນແປງ · 3) $f''$, ຄວາມໂຄ້ງ, ເມັດຫັກລ້ຽວ · 4) ເສັ້ນເຂົ້າໃກ້ · 5) ເມັດຕັດແກນ · 6) ແຕ້ມ</div>`],
[R`ບັນຫາຄ່າສູງສຸດ–ຕ່ຳສຸດ`, R`<div class="ex"><span class="lbl">ກ່ອງບໍ່ມີຝາ</span>ຈາກແຜ່ນເຫຼັກຈະຕຸລັດຂ້າງ 12 cm ຕັດຈະຕຸລັດຂ້າງ $x$ ອອກຈາກ 4 ແຈ ແລ້ວພັບ.<br>$V=x(12-2x)^2,\ 0\lt x\lt6$<br>$V'=(12-2x)(12-6x)=0\Rightarrow x=2$<br>$V_{\max}=2\cdot8^2=128$ cm³</div>
<div class="box red"><span class="lbl">ຄ່າສູງສຸດເທິງ $[a;b]$</span>ປຽບທຽບ $f$ ຢູ່ເມັດວິກິດ ແລະ ຢູ່ສອງປາຍ $a,b$</div>`],
[R`ຫຼັກເກນໂລປີຕານ (L'Hôpital)`, R`<div class="box green"><span class="lbl">ຫຼັກເກນ</span>ຖ້າ $\lim\frac{f}{g}$ ເປັນຮູບ $\frac00$ ຫຼື $\frac\infty\infty$ ແລ້ວ $$\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\lim\limits_{x\to0}\dfrac{e^x-1-x}{x^2}=\lim\dfrac{e^x-1}{2x}=\lim\dfrac{e^x}2=\dfrac12$<br>$\lim\limits_{x\to\infty}\dfrac{\ln x}{x}=\lim\dfrac{1/x}{1}=0$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ເສັ້ນຕິດ: $k=f'(x_0)$; ເສັ້ນຕັ້ງສາກ: $k=-\frac1{f'(x_0)}$</li><li>$f'$ ບອກການຂຶ້ນ–ລົງ ແລະ ຄ່າສຸດຂີດ; $f''$ ບອກຄວາມໂຄ້ງ</li><li>ບັນຫາຕົວຈິງ: ສ້າງຕຳລາ → $f'=0$ → ກວດ</li><li>ໂລປີຕານ: $\frac00,\frac\infty\infty$ → $\frac{f'}{g'}$</li></ul>`]
],
ex:[
[R`ຈົ່ງຂຽນສົມຜົນເສັ້ນຕິດ ແລະ ເສັ້ນຕັ້ງສາກກັບ $y=x^2-3x+1$ ຢູ່ $x=2$.`, R`$y_0=-1,\ k=1$: ເສັ້ນຕິດ $y=x-3$; ເສັ້ນຕັ້ງສາກ $y=-x+1$.`],
[R`ຈົ່ງສຶກສາການປ່ຽນແປງ ແລະ ຊອກຄ່າສຸດຂີດຂອງ $f(x)=x^3-6x^2+9x+1$.`, R`$f'=3(x-1)(x-3)$: ຂຶ້ນເທິງ $(-\infty;1)$ ແລະ $(3;\infty)$, ລົງເທິງ $(1;3)$. ສູງສຸດ $f(1)=5$, ຕ່ຳສຸດ $f(3)=1$.`],
[R`ຈົ່ງຊອກເມັດຫັກລ້ຽວຂອງ $f(x)=x^3-3x^2+2$.`, R`$f''=6x-6=0\Rightarrow x=1$, ປ່ຽນເຄື່ອງໝາຍ → ເມັດ $(1;0)$.`],
[R`ອ່າງເກັບນ້ຳຮູບຈວຍຂວ້ຳ: ລັດສະໝີປາກ 5 m, ສູງ 10 m. ນ້ຳໄຫຼເຂົ້າ 2 m³/min. ລະດັບນ້ຳຂຶ້ນໄວເທົ່າໃດເມື່ອເລິກ 4 m?`, R`$r=\frac h2$, $V=\frac\pi{12}h^3$ → $\frac{dV}{dt}=\frac\pi4h^2\frac{dh}{dt}$ → $2=4\pi\frac{dh}{dt}$ → $\frac{dh}{dt}=\frac1{2\pi}\approx0.16$ m/min.`],
[R`ຈົ່ງຊອກຄ່າສູງສຸດ ແລະ ຕ່ຳສຸດຂອງ $f(x)=x^3-3x$ ເທິງ $[0;2]$.`, R`$f(0)=0,\ f(1)=-2,\ f(2)=2$: ສູງສຸດ 2, ຕ່ຳສຸດ −2.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$ ດ້ວຍໂລປີຕານ.`, R`$\frac{1-\cos x}{3x^2}\to\frac{\sin x}{6x}\to\frac16$.`]
],
hw:[
[R`ສູບລົມເຂົ້າໝາກບານມົນ ລັດສະໝີເພີ່ມ 2 cm/s. ເນື້ອທີ່ໜ້າ $S=4\pi r^2$ ເພີ່ມໄວເທົ່າໃດເມື່ອ $r=5$ cm?`, R`$\frac{dS}{dt}=8\pi r\frac{dr}{dt}=80\pi$ cm²/s.`],
[R`ຈົ່ງຊອກສົມຜົນເສັ້ນຕິດກັບ $y=\ln x$ ທີ່ຜ່ານເມັດ $O(0;0)$.`, R`ເມັດຕິດ $(a;\ln a)$: $\ln a=\frac1a\cdot a=1\Rightarrow a=e$ → $y=\frac xe$.`],
[R`ຈົ່ງສຶກສາ ແລະ ແຕ້ມເສັ້ນສະແດງຂອງ $y=x^3-3x^2$.`, R`$y'=3x(x-2)$: ສູງສຸດ $(0;0)$, ຕ່ຳສຸດ $(2;-4)$; ເມັດຫັກລ້ຽວ $(1;-2)$; ຕັດແກນ $x=0,\ x=3$.`],
[R`ສວນຮູບສີ່ແຈສາກຕິດຝາເຮືອນ ໃຊ້ຮົ້ວ 40 m ສາມດ້ານ. ເນື້ອທີ່ໃຫຍ່ສຸດ?`, R`$S=x(40-2x)$, $S'=40-4x=0\Rightarrow x=10$ → $S=200$ m².`],
[R`ຈົ່ງຊອກ $m$ ເພື່ອໃຫ້ $f(x)=x^3-3mx+1$ ມີຕ່ຳສຸດທ້ອງຖິ່ນຢູ່ $x=2$.`, R`$f'(2)=12-3m=0\Rightarrow m=4$; $f''(2)=12\gt0$ ✓.`],
[R`ຈົ່ງຄິດໄລ່ $\displaystyle\lim_{x\to\infty}\frac{x^2}{e^x}$ ດ້ວຍໂລປີຕານ.`, R`$\frac{2x}{e^x}\to\frac2{e^x}\to0$.`]
],
quiz:[
[R`ສຳປະສິດມຸມຂອງເສັ້ນຕັ້ງສາກຢູ່ $x_0$:`, [R`$f'(x_0)$`,R`$-\frac1{f'(x_0)}$`,R`$\frac1{f'(x_0)}$`,R`$-f'(x_0)$`],1,""],
[R`ຖ້າ $f'(x)\gt0$ ເທິງຫວ່າງ ແລ້ວ $f$:`, ["ລົງ","ຂຶ້ນ","ຄົງທີ່","ໂຄ້ງຂວ້ຳ"],1,""],
[R`$f(x)=x^3-3x$ ມີຄ່າສູງສຸດທ້ອງຖິ່ນ:`, ["2","−2","0","1"],0,""],
[R`ຖ້າ $f'(x_0)=0$ ແລະ $f''(x_0)\gt0$:`, ["ສູງສຸດ","ຕ່ຳສຸດ","ເມັດຫັກລ້ຽວ","ບໍ່ຮູ້ໄດ້"],1,""],
[R`ເມັດຫັກລ້ຽວແມ່ນບ່ອນທີ່:`, [R`$f'$ ປ່ຽນເຄື່ອງໝາຍ`,R`$f''$ ປ່ຽນເຄື່ອງໝາຍ`,R`$f=0$`,R`$f'$ ບໍ່ມີ`],1,""],
[R`$\lim_{x\to0}\frac{e^x-1-x}{x^2}$`, ["1",R`$\frac12$`,"0",R`$\infty$`],1,""],
[R`ກ່ອງຈາກແຜ່ນ 12×12 cm: ບໍລິມາດໃຫຍ່ສຸດເມື່ອຕັດ $x=$`, ["1 cm","2 cm","3 cm","4 cm"],1,""],
[R`ຫຼັກເກນໂລປີຕານໃຊ້ກັບຮູບ:`, [R`$\frac00$ ຫຼື $\frac\infty\infty$`,R`$\frac10$`,R`$0\cdot1$`,R`$\frac21$`],0,""]
]});
