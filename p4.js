/* ພາກທີ 4: ຈຳນວນສົນ (ບົດ 12–16) */
M7.ch.push({
n:12, part:4, title:"ຄວາມຮູ້ເບື້ອງຕົ້ນກ່ຽວກັບຈຳນວນສົນ",
goal:R`ຮູ້ຈັກຈຳນວນສົນ, ພາກສ່ວນຈິງ ແລະ ພາກສ່ວນສົມມຸດ, ການເທົ່າກັນຂອງສອງຈຳນວນສົນ ແລະ ການສະແດງຈຳນວນສົນເທິງແຜ່ນພຽງ.`,
slides:[
[R`ເປັນຫຍັງຕ້ອງມີຈຳນວນສົນ?`, R`<p>ສົມຜົນ $x^2+1=0$ ບໍ່ມີໃຈຜົນໃນກຸ່ມຈຳນວນຈິງ ຍ້ອນ $x^2\ge0$.</p><p>ຈຶ່ງນິຍາມຈຳນວນໃໝ່ <b>$i$</b> (ຫົວໜ່ວຍສົມມຸດ) ທີ່</p><div class="box"><span class="lbl">ນິຍາມ</span>$$i^2=-1$$</div><p>ເຊັ່ນ: $x^2=-4\Rightarrow x=\pm2i$; $\ \sqrt{-9}=3i$</p><p>ຈຳນວນສົນໃຊ້ໃນວິສະວະກຳໄຟຟ້າ (ກະແສສະຫຼັບ), ຟີຊິກຄື້ນ ແລະ ການປະມວນຜົນສັນຍານ.</p>`],
[R`ຮູບຮ່າງພຶດຊະຄະນິດ`, R`<div class="box"><span class="lbl">ນິຍາມ</span>ຈຳນວນສົນມີຮູບ $z=a+bi$ ໂດຍ $a,b\in\mathbb{R}$<br>$a=\operatorname{Re}(z)$ — ພາກສ່ວນຈິງ · $b=\operatorname{Im}(z)$ — ພາກສ່ວນສົມມຸດ</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$z=5-7i$: $\operatorname{Re}=5,\ \operatorname{Im}=-7$<br>$z=4i$: $\operatorname{Re}=0$ (ຈຳນວນສົມມຸດແທ້) · $z=3$: $\operatorname{Im}=0$ (ຈຳນວນຈິງ)</div>
<p>ກຸ່ມຈຳນວນສົນ: $\mathbb{C}=\{a+bi\mid a,b\in\mathbb{R}\}$, ແລະ $\mathbb{R}\subset\mathbb{C}$.</p>`],
[R`ການເທົ່າກັນຂອງສອງຈຳນວນສົນ`, R`<div class="box"><span class="lbl">ຫຼັກເກນ</span>$$a+bi=c+di\iff a=c\ \text{ແລະ}\ b=d$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>ຊອກ $x,y\in\mathbb{R}$: $(2x-1)+(y+3)i=5-2i$<br>$2x-1=5\Rightarrow x=3$; $\ y+3=-2\Rightarrow y=-5$</div>
<div class="box red"><span class="lbl">ລະວັງ</span>ຈຳນວນສົນປຽບທຽບ “ໃຫຍ່ກວ່າ/ນ້ອຍກວ່າ” ບໍ່ໄດ້ — ມີແຕ່ເທົ່າກັນ ຫຼື ບໍ່ເທົ່າກັນ.</div>`],
[R`ແຜ່ນພຽງສົນ (ແຜ່ນພຽງ Argand)`, R`<p>ຈຳນວນສົນ $z=a+bi$ ກົງກັບເມັດ $M(a;b)$:</p><ul><li>ແກນນອນ $Ox$ = <b>ແກນຈິງ</b></li><li>ແກນຕັ້ງ $Oy$ = <b>ແກນສົມມຸດ</b></li></ul>
<svg viewBox="0 0 260 170" width="260" style="max-width:100%" role="img" aria-label="ແຜ່ນພຽງສົນ"><g stroke="currentColor" fill="none" stroke-width="1.2"><line x1="20" y1="100" x2="245" y2="100"/><line x1="110" y1="160" x2="110" y2="10"/></g><g fill="currentColor" font-size="11"><text x="232" y="94">Re</text><text x="116" y="18">Im</text><circle cx="170" cy="40" r="4" style="fill:var(--blue)"/><text x="176" y="38">3+2i</text><circle cx="50" cy="130" r="4" style="fill:var(--red)"/><text x="20" y="150">−2−i</text><circle cx="110" cy="70" r="4" style="fill:var(--green)"/><text x="116" y="74">i</text></g><g stroke="currentColor" stroke-dasharray="3 3" stroke-width=".8"><line x1="170" y1="40" x2="170" y2="100"/><line x1="170" y1="40" x2="110" y2="40"/></g></svg>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$i^2=-1$; $z=a+bi$, $a=\operatorname{Re}z,\ b=\operatorname{Im}z$</li><li>$a+bi=c+di\iff a=c,\ b=d$</li><li>$z=a+bi$ ↔ ເມັດ $(a;b)$ ເທິງແຜ່ນພຽງສົນ</li></ul>`]
],
ex:[
[R`ຈົ່ງຊອກພາກສ່ວນຈິງ ແລະ ພາກສ່ວນສົມມຸດຂອງ: $3+4i,\ -2i,\ 7,\ \frac{1-\sqrt3i}{2}$.`, R`$(3,4),\ (0,-2),\ (7,0),\ \left(\frac12,-\frac{\sqrt3}2\right)$.`],
[R`ຈົ່ງຊອກ $x,y$: $(x+y)+(x-y)i=6+2i$.`, R`$x+y=6,\ x-y=2\Rightarrow x=4,\ y=2$.`],
[R`ຈົ່ງຂຽນໃນຮູບ $a+bi$: $\sqrt{-16}+3,\ \ 2-\sqrt{-25}$.`, R`$3+4i$ ແລະ $2-5i$.`],
[R`ຈົ່ງແກ້ສົມຜົນ $x^2+9=0$ ແລະ $x^2+2=0$ ໃນ $\mathbb{C}$.`, R`$x=\pm3i$; $\ x=\pm\sqrt2\,i$.`],
[R`ຈົ່ງສະແດງເມັດຂອງ $2+3i,\ -1+i,\ -3,\ -2i$ ເທິງແຜ່ນພຽງສົນ ແລະ ບອກວ່າຢູ່ພາກສ່ວນໃດ.`, R`$(2;3)$ ພາກ I; $(-1;1)$ ພາກ II; $(-3;0)$ ເທິງແກນຈິງ; $(0;-2)$ ເທິງແກນສົມມຸດ.`],
[R`ຈົ່ງຊອກ $x,y$: $(3x-2y)+(x+y-1)i=4+i$.`, R`$3x-2y=4,\ x+y=2\Rightarrow x=\frac85,\ y=\frac25$.`]
],
hw:[
[R`ຈົ່ງຊອກພາກສ່ວນຈິງ ແລະ ພາກສ່ວນສົມມຸດຂອງ $z=5-7i$ ແລະ $z=-\frac{3}{4}i$.`, R`$(5,-7)$ ແລະ $\left(0,-\frac34\right)$.`],
[R`ຈົ່ງຊອກ $x,y$: $(2x+y)+(x-3y)i=7+7i$.`, R`$2x+y=7,\ x-3y=7\Rightarrow x=4,\ y=-1$.`],
[R`ຈົ່ງຊອກ $m$ ເພື່ອໃຫ້ $z=(m^2-4)+(m+2)i$ ເປັນຈຳນວນສົມມຸດແທ້.`, R`$m^2-4=0$ ແລະ $m+2\neq0$ → $m=2$.`],
[R`ຈົ່ງແກ້ $x^2+16=0$ ແລະ $4x^2+25=0$.`, R`$\pm4i$; $\ \pm\frac52i$.`],
[R`ຈົ່ງສະແດງເມັດ $z_1=1+i,\ z_2=-2+3i,\ z_3=3-2i$ ເທິງແຜ່ນພຽງ.`, R`ເມັດ $(1;1),\ (-2;3),\ (3;-2)$.`],
[R`ຈົ່ງຊອກ $x,y$: $x^2+yi=4-3i$ ($x\gt0$).`, R`$x=2,\ y=-3$.`]
],
quiz:[
[R`$i^2$ ເທົ່າກັບ:`, ["1","−1","i","−i"],1,""],
[R`ພາກສ່ວນສົມມຸດຂອງ $5-7i$:`, ["7","−7","5","−7i"],1,"ພາກສ່ວນສົມມຸດເປັນຈຳນວນຈິງ"],
[R`$\sqrt{-9}$ ເທົ່າກັບ:`, ["−3","3i","9i","±3"],1,""],
[R`ຖ້າ $(2x-1)+(y+3)i=5-2i$ ແລ້ວ $(x,y)$:`, [R`$(3,-5)$`,R`$(2,-5)$`,R`$(3,1)$`,R`$(3,5)$`],0,""],
[R`$z=-2+3i$ ຢູ່ພາກສ່ວນທີ:`, ["I","II","III","IV"],1,""],
[R`ໃຈຜົນຂອງ $z^2+4=0$:`, [R`$\pm2$`,R`$\pm2i$`,R`$\pm4i$`,R`$2i$ ເທົ່ານັ້ນ`],1,""],
[R`ຂໍ້ໃດເປັນຈຳນວນຈິງ?`, [R`$3i$`,R`$2+i$`,R`$i^2$`,R`$-i$`],2,R`$i^2=-1$`],
[R`ເມັດ $(0;-2)$ ກົງກັບຈຳນວນສົນ:`, [R`$-2$`,R`$-2i$`,R`$2i$`,R`$-2+i$`],1,""]
]});

M7.ch.push({
n:13, part:4, title:"ການຄຳນວນໃນກຸ່ມຈຳນວນສົນ",
goal:R`ບວກ, ລົບ, ຄູນ, ຫານຈຳນວນສົນ, ຊອກຈຳນວນສົນຄາດຄູ່ ແລະ ຄິດໄລ່ກຳລັງຂອງ $i$.`,
slides:[
[R`ການບວກ ແລະ ການລົບ`, R`<div class="box"><span class="lbl">ຫຼັກເກນ</span>$(a+bi)\pm(c+di)=(a\pm c)+(b\pm d)i$</div><p>ບວກ/ລົບ ພາກສ່ວນຈິງກັບພາກສ່ວນຈິງ, ພາກສ່ວນສົມມຸດກັບພາກສ່ວນສົມມຸດ.</p>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$(4+3i)+(1-2i)=5+i$<br>$(4+3i)-(1-2i)=3+5i$</div><p>ເທິງແຜ່ນພຽງ: ການບວກຄືການບວກເວັກເຕີ (ກົດສີ່ແຈຂ້າງຂະໜານ).</p>`],
[R`ການຄູນ`, R`<p>ຄູນຄືພຶດຊະຄະນິດທຳມະດາ ແລ້ວແທນ $i^2=-1$:</p>$$(a+bi)(c+di)=(ac-bd)+(ad+bc)i$$
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$(2+3i)(1-i)=2-2i+3i-3i^2=5+i$<br>$(1+i)^2=1+2i+i^2=2i$</div>`],
[R`ຈຳນວນສົນຄາດຄູ່`, R`<div class="box"><span class="lbl">ນິຍາມ</span>ຄາດຄູ່ຂອງ $z=a+bi$ ແມ່ນ $\bar z=a-bi$ (ປ່ຽນເຄື່ອງໝາຍພາກສ່ວນສົມມຸດ)</div>
<ul><li>$z\cdot\bar z=a^2+b^2$ (ເປັນຈຳນວນຈິງບວກ)</li><li>$z+\bar z=2a$</li><li>$\overline{z_1+z_2}=\bar z_1+\bar z_2,\quad\overline{z_1z_2}=\bar z_1\bar z_2$</li></ul><p>ເທິງແຜ່ນພຽງ: $\bar z$ ແມ່ນເງົາສະທ້ອນຂອງ $z$ ຜ່ານແກນຈິງ.</p>`],
[R`ການຫານ`, R`<p>ຄູນທັງຕົວຕັ້ງ ແລະ ຕົວພູດດ້ວຍ <b>ຄາດຄູ່ຂອງຕົວພູດ</b>:</p>$$\frac{a+bi}{c+di}=\frac{(a+bi)(c-di)}{c^2+d^2}$$
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$$\frac{3+2i}{1-i}=\frac{(3+2i)(1+i)}{1+1}=\frac{3+5i-2}{2}=\frac12+\frac52i$$</div>`],
[R`ກຳລັງຂອງ $i$`, R`<div class="tbl"><table><tr><th>$i^1$</th><th>$i^2$</th><th>$i^3$</th><th>$i^4$</th><th>$i^5$</th><th>…</th></tr><tr><td>$i$</td><td>$-1$</td><td>$-i$</td><td>$1$</td><td>$i$</td><td>ວົນທຸກ 4</td></tr></table></div>
<div class="box"><span class="lbl">ກົດ</span>$i^n=i^r$ ໂດຍ $r$ ແມ່ນຕົວເສດຂອງ $n\div4$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$i^{2025}$: $2025=4\cdot506+1$ → $i$<br>$i+i^2+i^3+i^4=0$</div>`],
[R`ແກ້ສົມຜົນໃນ $\mathbb{C}$`, R`<div class="ex"><span class="lbl">ສົມຜົນຂັ້ນສອງ $x^2-2x+5=0$</span>$\Delta=4-20=-16=(4i)^2$ → $x=\dfrac{2\pm4i}2=1\pm2i$</div>
<div class="ex"><span class="lbl">ຊອກ $z$: $(2-i)z=7+4i$</span>$z=\dfrac{7+4i}{2-i}=\dfrac{(7+4i)(2+i)}{5}=\dfrac{10+15i}5=2+3i$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ບວກ/ລົບ: ແຍກພາກຈິງ, ພາກສົມມຸດ</li><li>ຄູນ: ກະຈາຍ, $i^2=-1$</li><li>$\bar z=a-bi$, $z\bar z=a^2+b^2$</li><li>ຫານ: ຄູນດ້ວຍຄາດຄູ່ຂອງຕົວພູດ</li><li>$i^n$ ວົນທຸກ 4</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $(3-2i)+(-1+5i)$ ແລະ $(3-2i)-(-1+5i)$.`, R`$2+3i$ ແລະ $4-7i$.`],
[R`ຈົ່ງຄິດໄລ່ $(2+3i)(4-i)$.`, R`$8-2i+12i-3i^2=11+10i$.`],
[R`ຈົ່ງຄິດໄລ່ $\dfrac{5}{2+i}$.`, R`$\frac{5(2-i)}{5}=2-i$.`],
[R`ຈົ່ງຄິດໄລ່ $\dfrac{1+2i}{3-4i}$.`, R`$\frac{(1+2i)(3+4i)}{25}=\frac{3+10i-8}{25}=-\frac15+\frac25i$.`],
[R`ຈົ່ງຄິດໄລ່ $i^{2026}$ ແລະ $i^{15}+i^{20}$.`, R`$2026\equiv2$ → $-1$. $i^{15}=-i,\ i^{20}=1$ → $1-i$.`],
[R`ຈົ່ງແກ້ $z^2+4z+13=0$.`, R`$\Delta=16-52=-36$ → $z=\frac{-4\pm6i}{2}=-2\pm3i$.`]
],
hw:[
[R`ໃຫ້ $z_1=4+3i,\ z_2=1-2i$. ຈົ່ງຊອກ $z_1+z_2,\ z_1z_2,\ \frac{z_1}{z_2}$.`, R`$5+i$; $4-8i+3i+6=10-5i$; $\frac{(4+3i)(1+2i)}5=\frac{-2+11i}5$.`],
[R`ຈົ່ງຊອກ $z\bar z$ ເມື່ອ $z=3-4i$.`, R`$9+16=25$.`],
[R`ຈົ່ງຊອກ $a,b$: $(a+bi)(2-i)=7+4i$.`, R`$a+bi=\frac{7+4i}{2-i}=2+3i$ → $a=2,\ b=3$.`],
[R`ຈົ່ງຄິດໄລ່ $(1+i)^{10}$.`, R`$(1+i)^2=2i$ → $(2i)^5=32i^5=32i$.`],
[R`ຈົ່ງແກ້ $x^2-6x+10=0$.`, R`$x=3\pm i$.`],
[R`ຈົ່ງຊອກ $z$ ທີ່ $2z+\bar z=6-2i$.`, R`$z=a+bi$: $3a+bi=6-2i$ → $a=2,\ b=-2$ → $z=2-2i$.`]
],
quiz:[
[R`$(2+3i)(1-i)$`, [R`$5+i$`,R`$-1+i$`,R`$2-3i$`,R`$5-i$`],0,""],
[R`ຄາດຄູ່ຂອງ $-3+2i$:`, [R`$3-2i$`,R`$-3-2i$`,R`$3+2i$`,R`$2-3i$`],1,""],
[R`$i^{2025}$`, [R`$1$`,R`$i$`,R`$-1$`,R`$-i$`],1,""],
[R`$\frac{1}{i}$ ເທົ່າກັບ:`, [R`$i$`,R`$-i$`,"1","−1"],1,R`$\frac1i=\frac{i}{i^2}=-i$`],
[R`$z\bar z$ ເມື່ອ $z=a+bi$:`, [R`$a^2-b^2$`,R`$a^2+b^2$`,R`$2ab$`,R`$2a$`],1,""],
[R`ໃຈຜົນຂອງ $x^2-2x+5=0$:`, [R`$1\pm2i$`,R`$-1\pm2i$`,R`$2\pm i$`,R`$1\pm4i$`],0,""],
[R`$(1+i)^2$`, [R`$2$`,R`$2i$`,R`$1+i^2$`,R`$0$`],1,""],
[R`$i+i^2+i^3+i^4$`, ["4","0","i","−1"],1,""]
]});

M7.ch.push({
n:14, part:4, title:"ຮາກຂັ້ນສອງ ແລະ ຮູບຮ່າງໄຕມຸມມິຕິຂອງຈຳນວນສົນ",
goal:R`ຊອກຮາກຂັ້ນສອງຂອງຈຳນວນສົນ, ແກ້ສົມຜົນຂັ້ນສອງໃນ $\mathbb{C}$, ຊອກໂມດູນ ແລະ ອາກກູຍມັງ ແລະ ຂຽນຈຳນວນສົນເປັນຮູບຮ່າງໄຕມຸມມິຕິ.`,
slides:[
[R`ຮາກຂັ້ນສອງຂອງຈຳນວນສົນ`, R`<p>ຊອກ $w=x+yi$ ທີ່ $w^2=a+bi$:</p>$$(x+yi)^2=x^2-y^2+2xyi=a+bi\Rightarrow\begin{cases}x^2-y^2=a\\2xy=b\end{cases}$$
<p>ເພີ່ມສົມຜົນ $x^2+y^2=\sqrt{a^2+b^2}$ ເພື່ອແກ້ງ່າຍ.</p>
<div class="ex"><span class="lbl">ຮາກຂັ້ນສອງຂອງ $3+4i$</span>$x^2-y^2=3,\ x^2+y^2=5$ → $x^2=4,\ y^2=1$; $2xy=4\gt0$ → $x,y$ ເຄື່ອງໝາຍດຽວກັນ<br>ຮາກ: $\pm(2+i)$</div>`],
[R`ສົມຜົນຂັ້ນສອງໃນ $\mathbb{C}$`, R`<p>$az^2+bz+c=0$ ມີໃຈຜົນ $z=\dfrac{-b\pm\delta}{2a}$ ໂດຍ $\delta^2=\Delta=b^2-4ac$ (ໃຊ້ຮາກຂັ້ນສອງສົນ)</p>
<div class="ex"><span class="lbl">ແກ້ $z^2-3z+3-i=0$</span>$\Delta=9-12+4i=-3+4i=(1+2i)^2$<br>$z=\dfrac{3\pm(1+2i)}2$ → $z_1=2+i,\ z_2=1-i$</div>`],
[R`ໂມດູນ ແລະ ອາກກູຍມັງ`, R`<p>ເມັດ $M(a;b)$ ຂອງ $z=a+bi$:</p><div class="box"><span class="lbl">ໂມດູນ</span>$r=|z|=\sqrt{a^2+b^2}$ = ໄລຍະຈາກ $O$ ຫາ $M$</div>
<div class="box green"><span class="lbl">ອາກກູຍມັງ</span>$\theta=\arg z$ = ມຸມລະຫວ່າງ $Ox$ ແລະ $OM$: $\cos\theta=\dfrac ar,\ \sin\theta=\dfrac br$</div>
<p>ເຊັ່ນ $z=-1+i$: $r=\sqrt2$, $\cos\theta=-\frac1{\sqrt2},\ \sin\theta=\frac1{\sqrt2}$ → $\theta=\frac{3\pi}4$</p>`],
[R`ຮູບຮ່າງໄຕມຸມມິຕິ`, R`<div class="box"><span class="lbl">ຮູບຮ່າງ</span>$$z=r(\cos\theta+i\sin\theta)$$</div>
<div class="tbl"><table><tr><th>$z$</th><th>$r$</th><th>$\theta$</th><th>ຮູບໄຕມຸມມິຕິ</th></tr>
<tr><td>$1+i$</td><td>$\sqrt2$</td><td>$\frac\pi4$</td><td>$\sqrt2(\cos\frac\pi4+i\sin\frac\pi4)$</td></tr>
<tr><td>$\sqrt3-i$</td><td>$2$</td><td>$-\frac\pi6$</td><td>$2(\cos(-\frac\pi6)+i\sin(-\frac\pi6))$</td></tr>
<tr><td>$-2$</td><td>$2$</td><td>$\pi$</td><td>$2(\cos\pi+i\sin\pi)$</td></tr>
<tr><td>$3i$</td><td>$3$</td><td>$\frac\pi2$</td><td>$3(\cos\frac\pi2+i\sin\frac\pi2)$</td></tr></table></div>`],
[R`ບາດກ້າວຂຽນຮູບໄຕມຸມມິຕິ`, R`<ol><li>ຄິດໄລ່ $r=\sqrt{a^2+b^2}$</li><li>ຊອກ $\cos\theta=\frac ar,\ \sin\theta=\frac br$</li><li>ເບິ່ງພາກສ່ວນຂອງເມັດ ເພື່ອເລືອກ $\theta$ ໃຫ້ຖືກ</li><li>ຂຽນ $z=r(\cos\theta+i\sin\theta)$</li></ol>
<div class="ex"><span class="lbl">$z=2-2\sqrt3i$</span>$r=\sqrt{4+12}=4$; $\cos\theta=\frac12,\ \sin\theta=-\frac{\sqrt3}2$ → $\theta=-\frac\pi3$<br>$z=4\left(\cos(-\frac\pi3)+i\sin(-\frac\pi3)\right)$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\sqrt{a+bi}$: ແກ້ $x^2-y^2=a,\ 2xy=b$</li><li>ສົມຜົນຂັ້ນສອງ: $z=\frac{-b\pm\delta}{2a},\ \delta^2=\Delta$</li><li>$|z|=\sqrt{a^2+b^2}$, $\arg z=\theta$</li><li>$z=r(\cos\theta+i\sin\theta)$</li></ul>`]
],
ex:[
[R`ຈົ່ງຊອກຮາກຂັ້ນສອງຂອງ $-5+12i$.`, R`$x^2-y^2=-5,\ x^2+y^2=13$ → $x^2=4,\ y^2=9$, $xy\gt0$ → $\pm(2+3i)$.`],
[R`ຈົ່ງຊອກຮາກຂັ້ນສອງຂອງ $8-6i$.`, R`$x^2=9,\ y^2=1,\ xy\lt0$ → $\pm(3-i)$.`],
[R`ຈົ່ງແກ້ $z^2+2z+5=0$ ໃນ $\mathbb{C}$.`, R`$\Delta=-16=(4i)^2$ → $z=-1\pm2i$.`],
[R`ຈົ່ງຊອກໂມດູນ ແລະ ອາກກູຍມັງຂອງ $z=-\sqrt3+i$.`, R`$r=2$; $\cos\theta=-\frac{\sqrt3}2,\ \sin\theta=\frac12$ → $\theta=\frac{5\pi}6$.`],
[R`ຈົ່ງຂຽນ $z=3-3i$ ເປັນຮູບໄຕມຸມມິຕິ.`, R`$r=3\sqrt2,\ \theta=-\frac\pi4$: $3\sqrt2\left(\cos(-\frac\pi4)+i\sin(-\frac\pi4)\right)$.`],
[R`ຈົ່ງຊອກ $|3-4i|$ ແລະ $|5i|$.`, R`$5$ ແລະ $5$.`]
],
hw:[
[R`ຈົ່ງຊອກຮາກຂັ້ນສອງຂອງ $7+24i$.`, R`$\pm(4+3i)$.`],
[R`ຈົ່ງຊອກຮາກຂັ້ນສອງຂອງ $-3-4i$.`, R`$\pm(1-2i)$.`],
[R`ຈົ່ງແກ້ $z^2-3z+3-i=0$.`, R`$z=2+i$ ຫຼື $z=1-i$.`],
[R`ຈົ່ງຂຽນເປັນຮູບໄຕມຸມມິຕິ: $1+\sqrt3i,\ -1-i,\ -4i$.`, R`$2(\cos\frac\pi3+i\sin\frac\pi3)$; $\sqrt2(\cos(-\frac{3\pi}4)+i\sin(-\frac{3\pi}4))$; $4(\cos(-\frac\pi2)+i\sin(-\frac\pi2))$.`],
[R`ຈົ່ງຂຽນ $z=2(\cos\frac{2\pi}3+i\sin\frac{2\pi}3)$ ເປັນຮູບ $a+bi$.`, R`$2(-\frac12+\frac{\sqrt3}2i)=-1+\sqrt3i$.`],
[R`ຈົ່ງຊອກໂມດູນ ແລະ ອາກກູຍມັງຂອງ $z=2-2\sqrt3i$.`, R`$r=4,\ \theta=-\frac\pi3$.`]
],
quiz:[
[R`ຮາກຂັ້ນສອງຂອງ $3+4i$:`, [R`$\pm(2+i)$`,R`$\pm(1+2i)$`,R`$\pm(2-i)$`,R`$\pm(3+2i)$`],0,""],
[R`$|3-4i|$`, ["7","5","1","25"],1,""],
[R`ອາກກູຍມັງຂອງ $-1+i$:`, [R`$\frac\pi4$`,R`$\frac{3\pi}4$`,R`$-\frac\pi4$`,R`$\frac{5\pi}4$`],1,""],
[R`ຮູບໄຕມຸມມິຕິຂອງ $1+i$:`, [R`$2(\cos\frac\pi4+i\sin\frac\pi4)$`,R`$\sqrt2(\cos\frac\pi4+i\sin\frac\pi4)$`,R`$\sqrt2(\cos\frac\pi2+i\sin\frac\pi2)$`,R`$(\cos\frac\pi4+i\sin\frac\pi4)$`],1,""],
[R`$\sqrt{7+24i}$ ມີຄ່າ:`, [R`$\pm(4+3i)$`,R`$\pm(3+4i)$`,R`$\pm(5+i)$`,R`$\pm(4-3i)$`],0,""],
[R`ໂມດູນຂອງ $-3+\sqrt3 i$ ແມ່ນ:`, [R`$\sqrt{12}=2\sqrt3$`,"3","6",R`$\sqrt6$`],0,""],
[R`$z=2(\cos\pi+i\sin\pi)$ ເທົ່າກັບ:`, ["2","−2","2i","−2i"],1,""],
[R`ອາກກູຍມັງຂອງ $3i$:`, ["0",R`$\frac\pi2$`,R`$\pi$`,R`$-\frac\pi2$`],1,""]
]});

M7.ch.push({
n:15, part:4, title:"ການຄຳນວນຈຳນວນສົນໃນຮູບຮ່າງໄຕມຸມມິຕິ",
goal:R`ຄູນ, ຫານ, ຂຶ້ນກຳລັງ (ສູດມົວ) ແລະ ຖອດຮາກຂັ້ນ $n$ ຂອງຈຳນວນສົນໃນຮູບຮ່າງໄຕມຸມມິຕິ.`,
slides:[
[R`ການຄູນ ແລະ ການຫານ`, R`<p>ໃຫ້ $z_1=r_1(\cos\theta_1+i\sin\theta_1),\ z_2=r_2(\cos\theta_2+i\sin\theta_2)$</p>
<div class="box"><span class="lbl">ຄູນ: ໂມດູນຄູນກັນ, ມຸມບວກກັນ</span>$$z_1z_2=r_1r_2\left[\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)\right]$$</div>
<div class="box green"><span class="lbl">ຫານ: ໂມດູນຫານກັນ, ມຸມລົບກັນ</span>$$\frac{z_1}{z_2}=\frac{r_1}{r_2}\left[\cos(\theta_1-\theta_2)+i\sin(\theta_1-\theta_2)\right]$$</div>`],
[R`ຕົວຢ່າງ: ຄູນ ແລະ ຫານ`, R`<p>$z_1=2(\cos50^\circ+i\sin50^\circ),\ z_2=4(\cos20^\circ+i\sin20^\circ)$</p>
<div class="ex"><span class="lbl">ບົດແກ້</span>$z_1z_2=8(\cos70^\circ+i\sin70^\circ)$<br>$\dfrac{z_2}{z_1}=2(\cos(-30^\circ)+i\sin(-30^\circ))=\sqrt3-i$</div>
<p>ຄວາມໝາຍເລຂາຄະນິດ: ຄູນດ້ວຍ $z$ = ໝຸນດ້ວຍມຸມ $\theta$ ແລະ ຂະຫຍາຍ $r$ ເທື່ອ.</p>`],
[R`ສູດມົວ (De Moivre)`, R`<div class="box"><span class="lbl">ສູດມົວ</span>$$\left[r(\cos\theta+i\sin\theta)\right]^n=r^n(\cos n\theta+i\sin n\theta)$$</div>
<div class="ex"><span class="lbl">ຄິດໄລ່ $(1+i)^8$</span>$1+i=\sqrt2(\cos\frac\pi4+i\sin\frac\pi4)$ → $(\sqrt2)^8(\cos2\pi+i\sin2\pi)=16$</div>
<div class="ex"><span class="lbl">ຄິດໄລ່ $(1+\sqrt3i)^6$</span>$=2^6(\cos2\pi+i\sin2\pi)=64$</div>`],
[R`ນຳໃຊ້ສູດມົວກັບໄຕມຸມມິຕິ`, R`<p>$(\cos\theta+i\sin\theta)^3=\cos3\theta+i\sin3\theta$. ກະຈາຍຟາກຊ້າຍ:</p>$$\cos^3\theta+3i\cos^2\theta\sin\theta-3\cos\theta\sin^2\theta-i\sin^3\theta$$
<div class="box green"><span class="lbl">ທຽບພາກຈິງ ແລະ ພາກສົມມຸດ</span>$\cos3\theta=4\cos^3\theta-3\cos\theta$<br>$\sin3\theta=3\sin\theta-4\sin^3\theta$</div>`],
[R`ຮາກຂັ້ນ $n$ ຂອງຈຳນວນສົນ`, R`<div class="box"><span class="lbl">ສູດ</span>ຮາກຂັ້ນ $n$ ຂອງ $z=r(\cos\theta+i\sin\theta)$ ມີ $n$ ຄ່າ: $$w_k=\sqrt[n]r\left[\cos\frac{\theta+2k\pi}n+i\sin\frac{\theta+2k\pi}n\right],\ k=0,1,\dots,n-1$$</div>
<div class="ex"><span class="lbl">ຮາກຂັ້ນສາມຂອງ $8i=8(\cos\frac\pi2+i\sin\frac\pi2)$</span>$k=0$: $2(\cos\frac\pi6+i\sin\frac\pi6)=\sqrt3+i$<br>$k=1$: $2(\cos\frac{5\pi}6+i\sin\frac{5\pi}6)=-\sqrt3+i$<br>$k=2$: $2(\cos\frac{3\pi}2+i\sin\frac{3\pi}2)=-2i$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ຄູນ: $r_1r_2$, $\theta_1+\theta_2$ · ຫານ: $\frac{r_1}{r_2}$, $\theta_1-\theta_2$</li><li>ສູດມົວ: $z^n=r^n(\cos n\theta+i\sin n\theta)$</li><li>ຮາກຂັ້ນ $n$: $n$ ຄ່າ ຢູ່ເທິງວົງມົນລັດສະໝີ $\sqrt[n]r$, ຫ່າງກັນມຸມ $\frac{2\pi}n$</li></ul>`]
],
ex:[
[R`ຈົ່ງຄິດໄລ່ $3(\cos40^\circ+i\sin40^\circ)\cdot2(\cos50^\circ+i\sin50^\circ)$.`, R`$6(\cos90^\circ+i\sin90^\circ)=6i$.`],
[R`ຈົ່ງຄິດໄລ່ $\dfrac{6(\cos100^\circ+i\sin100^\circ)}{3(\cos40^\circ+i\sin40^\circ)}$.`, R`$2(\cos60^\circ+i\sin60^\circ)=1+\sqrt3i$.`],
[R`ຈົ່ງຄິດໄລ່ $(\sqrt3+i)^6$.`, R`$2^6(\cos\pi+i\sin\pi)=-64$.`],
[R`ຈົ່ງຊອກຮາກຂັ້ນສາມຂອງ 1.`, R`$1,\ -\frac12+\frac{\sqrt3}2i,\ -\frac12-\frac{\sqrt3}2i$.`],
[R`ຈົ່ງແກ້ $z^4=16$.`, R`$z=2(\cos\frac{k\pi}2+i\sin\frac{k\pi}2)$: $2,\ 2i,\ -2,\ -2i$.`],
[R`ຈົ່ງຂຽນສູດ $\cos3\theta$ ແລະ $\sin3\theta$ ໂດຍໃຊ້ສູດມົວ.`, R`$\cos3\theta=4\cos^3\theta-3\cos\theta$, $\ \sin3\theta=3\sin\theta-4\sin^3\theta$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $(1-i)^{10}$.`, R`$(\sqrt2)^{10}(\cos(-\frac{10\pi}4)+i\sin(-\frac{10\pi}4))=32(\cos(-\frac\pi2)+i\sin(-\frac\pi2))=-32i$.`],
[R`ໃຫ້ $z_1=1+i,\ z_2=\sqrt3-i$. ຈົ່ງຊອກ $z_1z_2$ ແລະ $\frac{z_1}{z_2}$ ໃນຮູບໄຕມຸມມິຕິ.`, R`$z_1z_2=2\sqrt2(\cos\frac\pi{12}+i\sin\frac\pi{12})$; $\frac{z_1}{z_2}=\frac{\sqrt2}2(\cos\frac{5\pi}{12}+i\sin\frac{5\pi}{12})$.`],
[R`ຈົ່ງຊອກຮາກຂັ້ນສາມຂອງ $-8$.`, R`$2(\cos\frac{\pi+2k\pi}3+\dots)$: $1+\sqrt3i,\ -2,\ 1-\sqrt3i$.`],
[R`ຈົ່ງຊອກຮາກຂັ້ນສອງຂອງ $i$ ດ້ວຍຮູບໄຕມຸມມິຕິ.`, R`$\pm\left(\frac{\sqrt2}2+\frac{\sqrt2}2i\right)$.`],
[R`ຈົ່ງຄິດໄລ່ $\left(\frac12+\frac{\sqrt3}2i\right)^{2025}$.`, R`$=\cos\frac{2025\pi}3+i\sin\frac{2025\pi}3=\cos675\pi+\dots=\cos\pi=-1$.`],
[R`ຈົ່ງແກ້ $z^3=-i$.`, R`$z=\cos\frac{-\pi/2+2k\pi}3+i\sin(\dots)$: $\frac{\sqrt3}2-\frac12i,\ i,\ -\frac{\sqrt3}2-\frac12i$.`]
],
quiz:[
[R`ຄູນສອງຈຳນວນສົນໃນຮູບໄຕມຸມມິຕິ: ອາກກູຍມັງ:`, ["ຄູນກັນ","ບວກກັນ","ລົບກັນ","ຫານກັນ"],1,""],
[R`$(1+i)^8$`, ["8","16","16i","−16"],1,""],
[R`$[2(\cos20^\circ+i\sin20^\circ)]^3$`, [R`$8(\cos60^\circ+i\sin60^\circ)$`,R`$6(\cos60^\circ+i\sin60^\circ)$`,R`$8(\cos20^\circ+i\sin20^\circ)$`,R`$2(\cos60^\circ+i\sin60^\circ)$`],0,""],
[R`ຈຳນວນສົນທີ່ບໍ່ແມ່ນສູນ ມີຮາກຂັ້ນ 4 ຈັກຄ່າ?`, ["1","2","4","8"],2,""],
[R`$\cos3\theta=$`, [R`$3\cos\theta-4\cos^3\theta$`,R`$4\cos^3\theta-3\cos\theta$`,R`$3\cos\theta$`,R`$\cos^3\theta$`],1,""],
[R`ຮາກຂັ້ນສາມຂອງ $8i$ ມີຄ່າໜຶ່ງແມ່ນ:`, [R`$2i$`,R`$-2i$`,R`$2$`,R`$1+i$`],1,""],
[R`$(1+\sqrt3i)^6$`, ["64","−64","64i","32"],0,""],
[R`$\frac{8(\cos70^\circ+i\sin70^\circ)}{2(\cos40^\circ+i\sin40^\circ)}$`, [R`$4(\cos30^\circ+i\sin30^\circ)$`,R`$6(\cos30^\circ+i\sin30^\circ)$`,R`$4(\cos110^\circ+i\sin110^\circ)$`,R`$16(\cos30^\circ+i\sin30^\circ)$`],0,""]
]});

M7.ch.push({
n:16, part:4, title:"ຮູບຮ່າງໃຈກຳລັງຂອງຈຳນວນສົນ",
goal:R`ຂຽນຈຳນວນສົນໃນຮູບຮ່າງໃຈກຳລັງ (ເອັກສະໂປນັງຊຽນ) $re^{i\theta}$ ແລະ ຄິດໄລ່ຄູນ, ຫານ, ຂຶ້ນກຳລັງໃນຮູບນີ້.`,
slides:[
[R`ສູດອອຍເລີ (Euler)`, R`<div class="box"><span class="lbl">ສູດອອຍເລີ</span>$$e^{i\theta}=\cos\theta+i\sin\theta$$</div><p>ດັ່ງນັ້ນ ຮູບໄຕມຸມມິຕິ $r(\cos\theta+i\sin\theta)$ ຂຽນສັ້ນໄດ້ເປັນ:</p>
<div class="box green"><span class="lbl">ຮູບຮ່າງໃຈກຳລັງ</span>$$z=re^{i\theta}$$</div><p>ເມື່ອ $\theta=\pi$: $e^{i\pi}+1=0$ — ສົມຜົນທີ່ເຊື່ອມ 5 ຈຳນວນສຳຄັນ $0,1,e,i,\pi$.</p>`],
[R`ປ່ຽນລະຫວ່າງຮູບຮ່າງ`, R`<div class="tbl"><table><tr><th>ພຶດຊະຄະນິດ</th><th>ໄຕມຸມມິຕິ</th><th>ໃຈກຳລັງ</th></tr>
<tr><td>$1+i$</td><td>$\sqrt2(\cos\frac\pi4+i\sin\frac\pi4)$</td><td>$\sqrt2e^{i\pi/4}$</td></tr>
<tr><td>$-2$</td><td>$2(\cos\pi+i\sin\pi)$</td><td>$2e^{i\pi}$</td></tr>
<tr><td>$1+\sqrt3i$</td><td>$2(\cos\frac\pi3+i\sin\frac\pi3)$</td><td>$2e^{i\pi/3}$</td></tr>
<tr><td>$-i$</td><td>$\cos(-\frac\pi2)+i\sin(-\frac\pi2)$</td><td>$e^{-i\pi/2}$</td></tr></table></div>
<div class="ex"><span class="lbl">ກັບຄືນ</span>$3e^{i\pi/6}=3(\frac{\sqrt3}2+\frac12i)=\frac{3\sqrt3}2+\frac32i$</div>`],
[R`ການຄິດໄລ່ໃນຮູບໃຈກຳລັງ`, R`<p>ໃຊ້ກົດເລກກຳລັງທຳມະດາ:</p><div class="box"><span class="lbl">ກົດ</span>$r_1e^{i\theta_1}\cdot r_2e^{i\theta_2}=r_1r_2e^{i(\theta_1+\theta_2)}$<br>$\dfrac{r_1e^{i\theta_1}}{r_2e^{i\theta_2}}=\dfrac{r_1}{r_2}e^{i(\theta_1-\theta_2)}$<br>$(re^{i\theta})^n=r^ne^{in\theta}$<br>$\overline{re^{i\theta}}=re^{-i\theta}$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$(\sqrt2e^{i\pi/4})^4=4e^{i\pi}=-4$, ດັ່ງນັ້ນ $(1+i)^4=-4$</div>`],
[R`ຮາກຂັ້ນ $n$ ໃນຮູບໃຈກຳລັງ`, R`<div class="box"><span class="lbl">ສູດ</span>$z=re^{i\theta}$ ມີຮາກຂັ້ນ $n$: $\ w_k=\sqrt[n]r\,e^{i\frac{\theta+2k\pi}n},\ k=0,\dots,n-1$</div>
<div class="ex"><span class="lbl">ແກ້ $z^3=1$</span>$1=e^{i0}$ → $z_k=e^{i\frac{2k\pi}3}$: $1,\ e^{2\pi i/3},\ e^{4\pi i/3}$</div><p>ຮາກທັງໝົດເປັນຈອມຂອງຮູບຫຼາຍແຈສະເໝີທີ່ແຕ້ມໃນວົງມົນ.</p>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$e^{i\theta}=\cos\theta+i\sin\theta$</li><li>$z=a+bi=r(\cos\theta+i\sin\theta)=re^{i\theta}$</li><li>ຄູນ/ຫານ/ກຳລັງ ໃຊ້ກົດເລກກຳລັງ</li><li>$e^{i\pi}=-1,\ e^{i\pi/2}=i$</li></ul>`]
],
ex:[
[R`ຈົ່ງຂຽນເປັນຮູບ $a+bi$: $2e^{i\pi/3},\ 4e^{i\pi/2},\ \sqrt2e^{-i\pi/4}$.`, R`$1+\sqrt3i$; $4i$; $1-i$.`],
[R`ຈົ່ງຂຽນເປັນຮູບໃຈກຳລັງ: $-1+i,\ -3,\ \sqrt3+i$.`, R`$\sqrt2e^{3\pi i/4}$; $3e^{i\pi}$; $2e^{i\pi/6}$.`],
[R`ຈົ່ງຄິດໄລ່ $2e^{i\pi/6}\cdot3e^{i\pi/3}$.`, R`$6e^{i\pi/2}=6i$.`],
[R`ຈົ່ງຄິດໄລ່ $\dfrac{8e^{i2\pi/3}}{2e^{i\pi/6}}$.`, R`$4e^{i\pi/2}=4i$.`],
[R`ຈົ່ງຄິດໄລ່ $(\sqrt3+i)^9$ ໂດຍໃຊ້ຮູບໃຈກຳລັງ.`, R`$(2e^{i\pi/6})^9=512e^{3\pi i/2}=-512i$.`],
[R`ຈົ່ງສະແດງວ່າ $e^{i\pi}+1=0$.`, R`$e^{i\pi}=\cos\pi+i\sin\pi=-1$.`]
],
hw:[
[R`ຈົ່ງຂຽນເປັນຮູບໃຈກຳລັງ: $1-\sqrt3i$ ແລະ $-2-2i$.`, R`$2e^{-i\pi/3}$; $2\sqrt2e^{-3\pi i/4}$.`],
[R`ຈົ່ງຂຽນເປັນຮູບ $a+bi$: $6e^{i5\pi/6}$.`, R`$-3\sqrt3+3i$.`],
[R`ຈົ່ງຄິດໄລ່ $(1-i)^{8}$ ດ້ວຍຮູບໃຈກຳລັງ.`, R`$(\sqrt2e^{-i\pi/4})^8=16e^{-2\pi i}=16$.`],
[R`ຈົ່ງຊອກ $\overline{z}$ ແລະ $z\bar z$ ເມື່ອ $z=5e^{i\pi/7}$.`, R`$\bar z=5e^{-i\pi/7}$, $z\bar z=25$.`],
[R`ຈົ່ງແກ້ $z^4=-16$ ໃນຮູບໃຈກຳລັງ.`, R`$z=2e^{i(\pi+2k\pi)/4}$: $2e^{i\pi/4},2e^{3i\pi/4},2e^{5i\pi/4},2e^{7i\pi/4}$ ($=\pm\sqrt2\pm\sqrt2i$).`],
[R`ຈົ່ງຄິດໄລ່ $e^{i\pi/2}\cdot e^{i\pi/3}\cdot e^{i\pi/6}$.`, R`$e^{i\pi}=-1$.`]
],
quiz:[
[R`$e^{i\theta}=$`, [R`$\cos\theta-i\sin\theta$`,R`$\cos\theta+i\sin\theta$`,R`$\sin\theta+i\cos\theta$`,R`$e\cos\theta$`],1,""],
[R`$e^{i\pi}$ ເທົ່າກັບ:`, ["1","−1","i","0"],1,""],
[R`ຮູບໃຈກຳລັງຂອງ $1+i$:`, [R`$2e^{i\pi/4}$`,R`$\sqrt2e^{i\pi/4}$`,R`$\sqrt2e^{i\pi/2}$`,R`$e^{i\pi/4}$`],1,""],
[R`$2e^{i\pi/3}=$`, [R`$1+\sqrt3i$`,R`$\sqrt3+i$`,R`$2+2i$`,R`$1-\sqrt3i$`],0,""],
[R`$(re^{i\theta})^n=$`, [R`$nre^{i\theta}$`,R`$r^ne^{in\theta}$`,R`$r^ne^{i\theta}$`,R`$re^{in\theta}$`],1,""],
[R`ຄາດຄູ່ຂອງ $3e^{i\pi/5}$:`, [R`$-3e^{i\pi/5}$`,R`$3e^{-i\pi/5}$`,R`$\frac13e^{i\pi/5}$`,R`$3e^{i4\pi/5}$`],1,""],
[R`$e^{i\pi/2}$ ເທົ່າກັບ:`, ["1","i","−i","−1"],1,""],
[R`$\frac{6e^{i\pi}}{3e^{i\pi/2}}$`, [R`$2i$`,R`$-2i$`,R`$2$`,R`$3i$`],0,R`$2e^{i\pi/2}$`]
]});
