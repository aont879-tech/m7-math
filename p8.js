/* ພາກທີ 8: ສະຖິຕິ (ບົດ 45) */
M7.ch.push({
n:45, part:8, title:"ຕົວປ່ຽນບັງເອີນຊະນິດຕໍ່ເນື່ອງ",
goal:R`ເຂົ້າໃຈຄວາມໝາຍຂອງຕົວປ່ຽນບັງເອີນຊະນິດຕໍ່ເນື່ອງ, ຕຳລາຄວາມໜາແໜ້ນ ແລະ ຄິດໄລ່ຄ່າກະຕວງ, ຄ່າສະເລ່ຍ ແລະ ຄ່າຜັນປ່ຽນ.`,
slides:[
[R`ຕົວປ່ຽນບັງເອີນໃນຊີວິດປະຈຳວັນ`, R`<p>ຫຼາຍປະລິມານມີຄ່າເປັນ <b>ຈຳນວນຈິງໃດກໍໄດ້</b> ໃນຊ່ວງໜຶ່ງ (ບໍ່ແມ່ນຈຳນວນຖ້ວນ):</p><ul><li>ເວລາເດີນທາງຈາກບ້ານຫາໂຮງຮຽນ: 25 ນາທີ, 27.8 ນາທີ, 30.5 ນາທີ…</li><li>ອາຍຸໃຊ້ງານຂອງຫຼອດໄຟ LED (ຊົ່ວໂມງ)</li><li>ປະລິມານນ້ຳຝົນໃນນະຄອນຫຼວງວຽງຈັນ (mm)</li><li>ຄວາມດັນເລືອດ, ລະດັບນ້ຳຕານໃນເລືອດ</li></ul><p>ເອີ້ນວ່າ <b>ຕົວປ່ຽນບັງເອີນຊະນິດຕໍ່ເນື່ອງ</b>.</p>`],
[R`ຕໍ່ເນື່ອງ ທຽບກັບ ບໍ່ຕໍ່ເນື່ອງ`, R`<div class="cols"><div class="box"><span class="lbl">ບໍ່ຕໍ່ເນື່ອງ</span>ຄ່ານັບໄດ້ (ເຊັ່ນ ໜ້າລູກເຕົ໋າ)<br>$P(X=x)$ ມີຄ່າ, $\sum P=1$</div><div class="box green"><span class="lbl">ຕໍ່ເນື່ອງ</span>ຄ່າເປັນຊ່ວງຂອງຈຳນວນຈິງ<br>$P(X=a)=0$ ສະເໝີ!</div></div>
<p>ເປັນຫຍັງ $P(X=25\,000)=0$? ເພາະມີຄ່າໃກ້ຄຽງນັບບໍ່ສິ້ນສຸດ (25 000.0001; 25 000.0002;…). ຈຶ່ງຄິດຄ່າກະຕວງ <b>ໃນຫວ່າງ</b>: $P(a\le X\le b)$.</p>`],
[R`ຕຳລາຄວາມໜາແໜ້ນ (pdf)`, R`<div class="box"><span class="lbl">ຄຸນລັກສະນະຂອງ $f(x)$</span>1) $f(x)\ge0$<br>2) $\displaystyle\int_{-\infty}^{+\infty}f(x)dx=1$<br>3) $\displaystyle P(a\le X\le b)=\int_a^bf(x)dx$</div>
<svg viewBox="0 0 240 120" width="240" style="max-width:100%" role="img" aria-label="ຄ່າກະຕວງເປັນເນື້ອທີ່ໃຕ້ຕຳລາຄວາມໜາແໜ້ນ"><path d="M90 100 L90 48 Q 120 30 150 42 L150 100 Z" style="fill:var(--amber-soft);stroke:none"/><g stroke="currentColor" fill="none"><line x1="10" y1="100" x2="230" y2="100"/></g><path d="M20 99 Q 70 95 100 45 Q 125 15 160 50 Q 190 90 225 98" style="stroke:var(--blue)" stroke-width="2" fill="none"/><g font-size="11" fill="currentColor"><text x="86" y="114">a</text><text x="146" y="114">b</text><text x="102" y="80">P(a≤X≤b)</text><text x="168" y="40">f(x)</text></g></svg>
<p>ຄ່າກະຕວງ = <b>ເນື້ອທີ່ໃຕ້ເສັ້ນ $f(x)$</b> ຈາກ $a$ ຫາ $b$.</p>`],
[R`ຕຳລາການແຈກຢາຍສະສົມ (cdf)`, R`<div class="box green"><span class="lbl">ນິຍາມ</span>$$F(x)=P(X\le x)=\int_{-\infty}^xf(t)dt$$</div><ul><li>$P(a\le X\le b)=F(b)-F(a)$</li><li>$F'(x)=f(x)$</li><li>$F$ ເພີ່ມຂຶ້ນ ຈາກ 0 ຫາ 1</li></ul>
<div class="ex"><span class="lbl">ຫຼອດໄຟ LED</span>$F(25\,000)$ = ຄ່າກະຕວງທີ່ຫຼອດໄຟໃຊ້ໄດ້ບໍ່ເກີນ 25 000 h<br>$P(25\,000\le X\le30\,000)=F(30\,000)-F(25\,000)$</div>`],
[R`ຕົວຢ່າງ: ຄິດໄລ່ຄ່າກະຕວງ`, R`<div class="ex"><span class="lbl">ການແຈກຢາຍສະເໝີ: $f(x)=\frac1{20},\ 0\le x\le20$</span>$P(3\le X\le10)=\int_3^{10}\frac{dx}{20}=\frac7{20}=0.35$</div>
<div class="ex"><span class="lbl">ເວລາລໍຖ້າບໍລິການ: $f(x)=\frac1{10}e^{-x/10},\ x\ge0$</span>$P(5\le X\le15)=\left[-e^{-x/10}\right]_5^{15}=e^{-0.5}-e^{-1.5}$<br>$\approx0.6065-0.2231=0.3834$ (ປະມານ 38%)</div>`],
[R`ຊອກຄ່າຄົງທີ່ $k$`, R`<div class="ex"><span class="lbl">$f(x)=k(10-x),\ 0\le x\le10$ (ນ້ຳໜັກໝາກໄມ້, kg)</span>$\int_0^{10}k(10-x)dx=k\left[10x-\frac{x^2}2\right]_0^{10}=50k=1\Rightarrow k=\frac1{50}$<br>$P(X\le2)=\frac1{50}\left[10x-\frac{x^2}2\right]_0^2=\frac{18}{50}=0.36$</div>
<div class="box red"><span class="lbl">ຂັ້ນຕອນ</span>ໃຊ້ເງື່ອນໄຂ $\int f=1$ ເພື່ອຊອກ $k$ ກ່ອນສະເໝີ</div>`],
[R`ຄ່າສະເລ່ຍ (ຄ່າຄາດຫວັງ)`, R`<div class="box"><span class="lbl">ສູດ</span>$$\mu=E(X)=\int_{-\infty}^{+\infty}x\,f(x)\,dx$$</div>
<div class="ex"><span class="lbl">ລາຍໄດ້ (ລ້ານກີບ): $f(x)=\frac{x}{5000},\ 0\le x\le100$</span>$E(X)=\int_0^{100}\frac{x^2}{5000}dx=\frac{100^3}{15\,000}\approx66.67$ ລ້ານກີບ</div>
<p>ຄວາມໝາຍ: ໂດຍສະເລ່ຍ ບໍລິສັດຄາດວ່າຈະມີລາຍໄດ້ປະມານ 66.67 ລ້ານກີບ ໃນ 3 ເດືອນທຳອິດ — ໃຊ້ວາງແຜນທຸລະກິດ.</p>`],
[R`ຄ່າຜັນປ່ຽນ ແລະ ຄ່າຜັນປ່ຽນມາດຕະຖານ`, R`<div class="box green"><span class="lbl">ສູດ</span>$\sigma^2=Var(X)=\int(x-\mu)^2f(x)dx=E(X^2)-\mu^2$<br>$\sigma=\sqrt{Var(X)}$</div>
<div class="ex"><span class="lbl">ຢາໃນເລືອດ: $f(x)=\frac{3x^2}8,\ 0\le x\le2$ (h)</span>$\mu=\int_0^2\frac{3x^3}8dx=1.5$; $E(X^2)=\int_0^2\frac{3x^4}8dx=2.4$<br>$\sigma^2=2.4-1.5^2=0.15$, $\sigma\approx0.387$ h (ປະມານ 23 ນາທີ)</div><p>$\sigma$ ນ້ອຍ → ຂໍ້ມູນກະຈຸກໃກ້ຄ່າສະເລ່ຍ; $\sigma$ ໃຫຍ່ → ກະຈາຍຫຼາຍ.</p>`],
[R`ສະຫຼຸບບົດ`, R`<div class="tbl"><table><tr><th>ປະລິມານ</th><th>ສູດ</th></tr><tr><td>ເງື່ອນໄຂ pdf</td><td>$f\ge0,\ \int f=1$</td></tr><tr><td>ຄ່າກະຕວງ</td><td>$P(a\le X\le b)=\int_a^bf\,dx$</td></tr><tr><td>cdf</td><td>$F(x)=\int_{-\infty}^xf(t)dt$</td></tr><tr><td>ຄ່າສະເລ່ຍ</td><td>$\mu=\int xf\,dx$</td></tr><tr><td>ຄ່າຜັນປ່ຽນ</td><td>$\sigma^2=\int x^2f\,dx-\mu^2$</td></tr></table></div>
<p>ການແຈກຢາຍສະເໝີ $[a;b]$: $\mu=\frac{a+b}2,\ \sigma^2=\frac{(b-a)^2}{12}$ · ການແຈກຢາຍເອັກໂປ ($\lambda$): $\mu=\frac1\lambda,\ \sigma^2=\frac1{\lambda^2}$</p>`]
],
ex:[
[R`ຄວາມໄວລົດ (km/h) ມີ $f(x)=\frac1{50}$, $50\le x\le100$. ຈົ່ງຊອກ $P(70\le X\le90)$.`, R`$\frac{20}{50}=0.4$.`],
[R`ເວລາສາກແບັດລົດໄຟຟ້າ (h) ມີ $f(x)=\frac14e^{-x/4},\ x\ge0$. ຈົ່ງຊອກ $P(2\le X\le3)$.`, R`$e^{-0.5}-e^{-0.75}\approx0.6065-0.4724=0.1342$.`],
[R`ເວລາສ້າງເຮືອນ (ເດືອນ) ມີ $f(x)=\frac12$, $\frac12\le x\le\frac52$. ຈົ່ງຊອກຄ່າກະຕວງທີ່ສຳເລັດພາຍໃນ 1.5 ເດືອນ.`, R`$\int_{0.5}^{1.5}\frac12dx=0.5$.`],
[R`ໃຫ້ $f(x)=kx(4-x)$, $0\le x\le4$. ຈົ່ງຊອກ $k$ ແລະ $E(X)$.`, R`$k\left[2x^2-\frac{x^3}3\right]_0^4=\frac{32k}3=1\Rightarrow k=\frac3{32}$; ສົມມາດ → $E(X)=2$.`],
[R`ງົບປະມານຊື້ເຄື່ອງ (ລ້ານກີບ) ມີ $f(x)=\frac12(x-1)$, $1\le x\le3$. ຈົ່ງຊອກ $\mu$, $\sigma^2$, $\sigma$.`, R`$\mu=\frac73\approx2.33$; $E(X^2)=\frac{17}3$; $\sigma^2=\frac{17}3-\frac{49}9=\frac29\approx0.222$; $\sigma\approx0.471$.`],
[R`ໃຫ້ $f(x)=\frac{3x^2}8$, $0\le x\le2$. ຈົ່ງຊອກ $F(x)$ ແລະ $P(X\le1)$.`, R`$F(x)=\frac{x^3}8$ ($0\le x\le2$); $P(X\le1)=\frac18$.`]
],
hw:[
[R`ນ້ຳໜັກໝາກໄມ້ (kg) ມີ $f(x)=k(10-x)$, $0\le x\le10$. ຈົ່ງຊອກ $k$, $E(X)$ ແລະ $P(X\le2)$.`, R`$k=\frac1{50}$; $E(X)=\frac{10}3\approx3.33$ kg; $P=0.36$.`],
[R`ໄລຍະເວລາໂທ (ນາທີ) ມີ $f(x)=\frac15e^{-x/5}$, $x\ge0$. ຈົ່ງຊອກ $P(X\gt10)$ ແລະ ຄ່າສະເລ່ຍ.`, R`$e^{-2}\approx0.1353$; $\mu=5$ ນາທີ.`],
[R`ປະລິມານນ້ຳຝົນ (mL) ມີ $f(x)=\frac{200-x}{5000}$, $100\le x\le200$. ຈົ່ງຊອກ $\mu$ ແລະ $\sigma$.`, R`$\mu\approx133.33$; $E(X^2)\approx18\,333.33$; $\sigma^2\approx555.56$; $\sigma\approx23.57$ mL.`],
[R`ຄວາມໄວລົດມີ $f(x)=\frac1{50}$, $50\le x\le100$. ຈົ່ງຊອກຄ່າສະເລ່ຍ ແລະ ຄ່າຜັນປ່ຽນ.`, R`$\mu=75$ km/h; $\sigma^2=\frac{50^2}{12}\approx208.33$.`],
[R`ອັດຕາສ່ວນສານເຄມີ $X$ ($0\le x\le1$) ມີ $f(x)=6x(1-x)$. ຈົ່ງກວດວ່າ $f$ ເປັນຕຳລາຄວາມໜາແໜ້ນ ແລະ ຊອກ $P(X\le0.5)$.`, R`$\int_0^16x(1-x)dx=3-2=1$ ✓; $P=[3x^2-2x^3]_0^{0.5}=0.75-0.25=0.5$.`],
[R`ອາຍຸເຄື່ອງຈັກ (h) ມີ $f(x)=\frac{1}{1000}e^{-x/1000}$. ຈົ່ງຊອກຄ່າກະຕວງທີ່ເຄື່ອງໃຊ້ໄດ້ເກີນ 2000 h.`, R`$e^{-2}\approx0.1353$.`]
],
quiz:[
[R`ສຳລັບຕົວປ່ຽນບັງເອີນຕໍ່ເນື່ອງ $P(X=a)=$`, ["1","0",R`$f(a)$`,R`$F(a)$`],1,""],
[R`ເງື່ອນໄຂຂອງຕຳລາຄວາມໜາແໜ້ນ:`, [R`$\int f\,dx=0$`,R`$\int f\,dx=1$`,R`$f\le0$`,R`$f(x)=1$`],1,""],
[R`$P(a\le X\le b)=$`, [R`$f(b)-f(a)$`,R`$\int_a^bf(x)dx$`,R`$F(a)-F(b)$`,R`$\int_a^bxf(x)dx$`],1,""],
[R`$E(X)=$`, [R`$\int f(x)dx$`,R`$\int xf(x)dx$`,R`$\int x^2f(x)dx$`,R`$F(x)$`],1,""],
[R`$Var(X)=$`, [R`$E(X)^2$`,R`$E(X^2)-\mu^2$`,R`$\mu^2-E(X^2)$`,R`$E(X^2)$`],1,""],
[R`$f(x)=\frac1{20},\ 0\le x\le20$: $P(3\le X\le10)$`, ["0.3","0.35","0.5","0.7"],1,""],
[R`$f(x)=k(10-x),\ 0\le x\le10$: $k=$`, [R`$\frac1{10}$`,R`$\frac1{50}$`,R`$\frac1{100}$`,R`$\frac1{5}$`],1,""],
[R`ການແຈກຢາຍສະເໝີເທິງ $[50;100]$ ມີຄ່າສະເລ່ຍ:`, ["50","75","100","25"],1,""]
]});
