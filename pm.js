/* ພາກເສີມ: ມາຕຣິດ, ເດແຕກມີນັງ ແລະ ລະບົບສົມຜົນລີເນແອ — ຈາກແບບຮຽນ ມ.7 ສະບັບປີ 2016 (ພາກທີ 3, ບົດ 7–11).
   n 101–105 keep these chapters apart from the 2025 book's 1–45; `label` is what the page shows. */
// credit line for the "fried chicken" intuition slides, linking to the video at second t
const M7_CHK=t=>`<p class="hint" style="margin-top:.8em">🎬 ແນວຄິດຈາກວິດີໂອ: <a href="https://youtu.be/yhBOk5JuyW0?t=${t}" target="_blank" rel="noopener">ເຂົ້າໃຈເມທຣິກຊ໌ງ່າຍໆດ້ວຍໄກ່ທອດ — ຊ່ອງ ແມທເລົ່າໃຫ້ຟັງ (MLHF)</a></p>`;
const M7_MENU=(title,rows,cols)=>`<div class="tbl"><table><tr><th>${title}</th>${cols.map(c=>`<th>${c}</th>`).join('')}</tr>${rows.map(([n,...v])=>`<tr><td>${n}</td>${v.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</table></div>`;
M7.ch.push({
n:101, label:"1", part:9, title:"ມາຕຣິດ ແລະ ຄຸນລັກສະນະຂອງມາຕຣິດ",
goal:R`ຮູ້ຈັກມາຕຣິດ ແລະ ຊະນິດຕ່າງໆ, ຄິດໄລ່ການບວກ, ການລົບ, ການຄູນມາຕຣິດ ແລະ ນຳໃຊ້ຄຸນລັກສະນະ $A^2-(a+d)A+(ad-bc)I=O$ ເພື່ອຊອກກຳລັງຂອງມາຕຣິດ.`,
slides:[
[R`ມາຕຣິດແມ່ນຫຍັງ?`, R`<div class="box"><span class="lbl">ນິຍາມ</span>ມາຕຣິດແມ່ນຕາຕະລາງຈຳນວນທີ່ຈັດເປັນ <b>ແຖວ</b> (ນອນ) ແລະ <b>ຖັນ</b> (ຕັ້ງ). ອົງປະກອບ $a_{ij}$ ຢູ່ແຖວທີ $i$ ຖັນທີ $j$.</div>
$$A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\end{pmatrix}=(a_{ij})_{2\times3}$$
<p>ມາຕຣິດທີ່ມີ $m$ ແຖວ ແລະ $n$ ຖັນ ມີ <b>ຂະໜາດ $m\times n$</b>.</p>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}1&0&2\\-3&0.5&3\end{pmatrix}$ ຂະໜາດ $2\times3$, $\ a_{13}=2,\ a_{21}=-3$</div>`],
[R`ຊະນິດຂອງມາຕຣິດ (1)`, R`<div class="cols"><div><ul><li><b>ມາຕຣິດແຖວ</b>: ມີແຖວດຽວ<br>$(1\ \ 2\ \ 3)$</li><li><b>ມາຕຣິດຖັນ</b>: ມີຖັນດຽວ<br>$\begin{pmatrix}0\\3\\1\end{pmatrix}$</li></ul></div>
<div><ul><li><b>ມາຕຣິດຈະຕຸລັດ</b> $n\times n$:<br><span style="white-space:nowrap">ຈຳນວນແຖວ = ຈຳນວນຖັນ</span><br>$\begin{pmatrix}1&2\\3&4\end{pmatrix}$</li><li><b>ມາຕຣິດສູນ</b> $O$: ອົງປະກອບເປັນ 0 ໝົດ<br>$\begin{pmatrix}0&0\\0&0\end{pmatrix}$</li></ul></div></div>`],
[R`ຊະນິດຂອງມາຕຣິດ (2)`, R`<div class="cols"><div><ul><li><b>ມາຕຣິດເນັ່ງຈອມ</b>: ນອກເສັ້ນເນັ່ງຈອມເປັນ 0<br>$\begin{pmatrix}2&0\\0&5\end{pmatrix}$</li><li><b>ມາຕຣິດຫົວໜ່ວຍ</b>: ເສັ້ນເນັ່ງຈອມເປັນ 1, ນອກນັ້ນເປັນ 0<br>$I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}$, $I_3=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}$</li></ul></div>
<div><ul><li><b>ມາຕຣິດສາມແຈເທິງ</b>: ລຸ່ມເສັ້ນເນັ່ງຈອມເປັນ 0<br>$\begin{pmatrix}1&2&3\\0&4&5\\0&0&6\end{pmatrix}$</li><li><b>ມາຕຣິດສາມແຈລຸ່ມ</b>: ເທິງເສັ້ນເນັ່ງຈອມເປັນ 0<br>$\begin{pmatrix}1&0&0\\2&3&0\\4&5&6\end{pmatrix}$</li></ul></div></div>`],
[R`ການເທົ່າກັນຂອງສອງມາຕຣິດ`, R`<div class="box"><span class="lbl">ນິຍາມ</span>$A=B$ ກໍຕໍ່ເມື່ອ ມີ <b>ຂະໜາດເທົ່າກັນ</b> ແລະ ອົງປະກອບທີ່ຢູ່ຕຳແໜ່ງດຽວກັນ <b>ເທົ່າກັນ</b>.</div>
<div class="ex"><span class="lbl" style="display:block">ຕົວຢ່າງ</span>ໃຫ້ມາຕຣິດ $A=\begin{pmatrix}\class{k-a11}{x+2}&\class{k-a12}{3}\\\class{k-a21}{4}&\class{k-a22}{x-y}\end{pmatrix}$ ແລະ $B=\begin{pmatrix}\class{k-b11}{5}&\class{k-b12}{3}\\\class{k-b21}{4}&\class{k-b22}{2}\end{pmatrix}$, ຖ້າ $A=B$ ຈົ່ງຊອກຫາ $x$ ແລະ $y$.<span class="sinfo" data-note="ກົດ <b>ຂັ້ນຕໍ່ໄປ ▸</b> ຫຼື ປຸ່ມ → ເພື່ອເບິ່ງວິທີແກ້ເທື່ອລະຂັ້ນ."></span><br><b>ວິທີແກ້:</b> ເນື່ອງຈາກ $A=B$, ອົງປະກອບທີ່ຢູ່ຕຳແໜ່ງດຽວກັນຂອງສອງມາຕຣິດຕ້ອງເທົ່າກັນ ດັ່ງນັ້ນ:<span class="sinfo" data-hl="a12:ok,b12:ok,a21:ok,b21:ok" data-note="ອົງປະກອບ $3=3$ ແລະ $4=4$ (ສີຂຽວ) ເທົ່າກັນຢູ່ແລ້ວ — ເຫຼືອແຕ່ຄູ່ທີ່ມີ $x$ ແລະ $y$."></span><br><span class="istep">$\Rightarrow\begin{cases}\class{r1}{x+2=5}\\\class{r2}{x-y=2}\end{cases}$<span class="sinfo" data-hl="a11:c1,b11:c1,a22:c2,b22:c2" data-note="<b style='color:#f76707'>ແຖວ 1 ຖັນ 1:</b> $x+2$ ຕ້ອງເທົ່າກັບ $5$ &nbsp; <b style='color:#845ef7'>ແຖວ 2 ຖັນ 2:</b> $x-y$ ຕ້ອງເທົ່າກັບ $2$ → ໄດ້ລະບົບສົມຜົນ 2 ຕົວປ່ຽນ."></span></span><span class="istep">$\ \Leftrightarrow\begin{cases}x=5\class{mk}{-2}\\x-y=2\end{cases}$<span class="sinfo" data-hl="a11:c1,b11:c1" data-note="ຍ້າຍ $2$ ຈາກເບື້ອງຊ້າຍໄປເບື້ອງຂວາ, ປ່ຽນເຄື່ອງໝາຍຈາກ $+$ ເປັນ $-$."></span></span><span class="istep">$\ \Leftrightarrow\begin{cases}x=\class{mk}{3}\\x-y=2\end{cases}$<span class="sinfo" data-note="ຄິດໄລ່: $5-2=3$, ສະນັ້ນ $x=3$."></span></span><span class="istep">$\ \Leftrightarrow\begin{cases}x=3\\\class{mk}{3}-y=2\end{cases}$<span class="sinfo" data-hl="a22:c2,b22:c2" data-note="ແທນ $x=3$ ໃສ່ສົມຜົນທີ 2: $x-y=2$ ກາຍເປັນ $3-y=2$."></span></span><span class="istep">$\ \Leftrightarrow\begin{cases}x=3\\-y=\class{mk}{-3}+2\end{cases}$<span class="sinfo" data-note="ຍ້າຍ $3$ ໄປເບື້ອງຂວາ, ປ່ຽນເຄື່ອງໝາຍຈາກ $+$ ເປັນ $-$."></span></span><span class="istep">$\ \Leftrightarrow\begin{cases}x=3\\-y=\class{mk}{-1}\end{cases}$<span class="sinfo" data-note="ຄິດໄລ່: $-3+2=-1$."></span></span><span class="istep">$\ \Leftrightarrow\begin{cases}\class{mk}{x=3}\\\class{mk}{y=1}\end{cases}$<span class="sinfo" data-note="ຄູນທັງສອງຂ້າງດ້ວຍ $-1$: $-y=-1$ ກາຍເປັນ $y=1$."></span></span><br>ສະນັ້ນ: $x=3$ ແລະ $y=1$.<span class="sinfo" data-hl="a11:ok,b11:ok,a12:ok,b12:ok,a21:ok,b21:ok,a22:ok,b22:ok" data-note="<b>ກວດຄືນ:</b> ແທນ $x=3,\ y=1$ ໃສ່ $A$: $3+2=5$ ແລະ $3-1=2$ — ທຸກອົງປະກອບກົງກັບ $B$ (ສີຂຽວ), ຈຶ່ງໄດ້ $A=B$ ແທ້."></span></div>`],
[R`ການເທົ່າກັນຂອງສອງມາຕຣິດ (ຕໍ່)`, R`<div class="ex"><span class="lbl" style="display:block">ຕົວຢ່າງ</span>ຈົ່ງຊອກຫາ $x,\ y,\ a,\ b$ ຖ້າ $\begin{pmatrix}x+2y&a+2b\\3x+4y&3a+4b\end{pmatrix}=\begin{pmatrix}1&2\\3&4\end{pmatrix}$.<br><b>ວິທີແກ້:</b> ໃຫ້ອົງປະກອບທີ່ຢູ່ຕຳແໜ່ງດຽວກັນເທົ່າກັນ:<br>ຖັນທີ 1: $\begin{cases}x+2y=1\\3x+4y=3\end{cases}\Rightarrow x=1,\ y=0$<br>ຖັນທີ 2: $\begin{cases}a+2b=2\\3a+4b=4\end{cases}\Rightarrow a=0,\ b=1$<br>ສະນັ້ນ: $x=1,\ y=0,\ a=0$ ແລະ $b=1$.</div>`],
[R`ການບວກ, ການລົບ ແລະ ການຄູນກັບຈຳນວນ`, R`<div class="box"><span class="lbl">ຫຼັກເກນ</span>ບວກ/ລົບໄດ້ສະເພາະມາຕຣິດ <b>ຂະໜາດດຽວກັນ</b>: $A\pm B=(a_{ij}\pm b_{ij})$ · $\ kA=(k\,a_{ij})$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}1&-2\\3&-4\end{pmatrix},\ B=\begin{pmatrix}0&5\\3&-2\end{pmatrix}$<br>$A+B=\begin{pmatrix}1&3\\6&-6\end{pmatrix}$, $\ A-B=\begin{pmatrix}1&-7\\0&-2\end{pmatrix}$, $\ 2A=\begin{pmatrix}2&-4\\6&-8\end{pmatrix}$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>ຖ້າ $3X+2B=X+4A$ ແລ້ວ $2X=4A-2B\Rightarrow X=2A-B$</div>`],
[R`ການຄູນມາຕຣິດກັບມາຕຣິດ`, R`<div class="box"><span class="lbl">ເງື່ອນໄຂ</span>$A_{m\times n}\cdot B_{n\times p}=C_{m\times p}$ — ຈຳນວນ <b>ຖັນຂອງ $A$</b> ຕ້ອງເທົ່າ ຈຳນວນ <b>ແຖວຂອງ $B$</b>.<br>$c_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\dots+a_{in}b_{nj}$ (ແຖວທີ $i$ ຄູນຖັນທີ $j$)</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$(2\ \ 3)\begin{pmatrix}2\\-1\end{pmatrix}=(4-3)=(1)$ · $\ \begin{pmatrix}2\\-1\end{pmatrix}(2\ \ 3)=\begin{pmatrix}4&6\\-2&-3\end{pmatrix}$<br>$\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}p&q\\r&s\end{pmatrix}=\begin{pmatrix}ap+br&aq+bs\\cp+dr&cq+ds\end{pmatrix}$</div>`],
[R`🍗 ເຂົ້າໃຈການຄູນມາຕຣິດດ້ວຍໄກ່ທອດ`, `<div class="cols"><div>`+M7_MENU('ເມນູຮ້ານ',[['ໄກ່ທອດ (ຕ່ອນ)',2,1],['ນັກເກັດ (ຕ່ອນ)',0,2]],['ຊຸດ 1','ຊຸດ 2'])+R`<p>ລູກຄ້າສັ່ງ: <b>ຊຸດ 1</b> ຈຳນວນ 1 ຊຸດ, <b>ຊຸດ 2</b> ຈຳນວນ 3 ຊຸດ</p></div>
<div><p>ພະນັກງານຄິດວ່າຕ້ອງຫຍິບໄກ່ຈັກຕ່ອນ:</p><p>ໄກ່ທອດ: $2\times1+1\times3=5$<br>ນັກເກັດ: $0\times1+2\times3=6$</p></div></div>
<div class="box"><span class="lbl">ນີ້ຄືການຄູນມາຕຣິດ</span>$$\begin{pmatrix}2&1\\0&2\end{pmatrix}\begin{pmatrix}1\\3\end{pmatrix}=\begin{pmatrix}5\\6\end{pmatrix}$$<p style="text-align:center;margin-top:-.4em"><b>ເມນູ</b> × <b>ລາຍການສັ່ງ</b> = <b>ຈຳນວນໄກ່</b></p>ແຖວຂອງເມນູ (ຊະນິດໄກ່) × ຖັນຂອງລາຍການສັ່ງ (ຈຳນວນຊຸດ) — ນີ້ຄືເຫດຜົນທີ່ຕ້ອງເອົາ <b>ແຖວ × ຖັນ</b>.</div>`+M7_CHK(129)],
[R`🍗 ເປັນຫຍັງຂະໜາດຕ້ອງກົງກັນ?`, R`<p>ຖ້າມີລູກຄ້າ 2 ຄົນ: ຄົນທີ 1 ສັ່ງ (ຊຸດ 1: 1, ຊຸດ 2: 3), ຄົນທີ 2 ສັ່ງ (ຊຸດ 1: 2, ຊຸດ 2: 0) — ລາຍການສັ່ງກາຍເປັນມາຕຣິດ, ແຕ່ລະຖັນແມ່ນລູກຄ້າໜຶ່ງຄົນ:</p>
$$\begin{pmatrix}2&1\\0&2\end{pmatrix}\begin{pmatrix}1&2\\3&0\end{pmatrix}=\begin{pmatrix}5&4\\6&0\end{pmatrix}$$
<p>ຄົນທີ 1 ໄດ້ໄກ່ທອດ 5 ນັກເກັດ 6; ຄົນທີ 2 ໄດ້ໄກ່ທອດ 4 ນັກເກັດ 0.</p>
<div class="box"><span class="lbl">ຂະໜາດ</span>(ຊະນິດໄກ່ × <b>ຈຳນວນຊຸດ</b>) · (<b>ຈຳນວນຊຸດ</b> × ຈຳນວນຄົນ) = (ຊະນິດໄກ່ × ຈຳນວນຄົນ)<br>ເລກທີ່ຢູ່ກາງ (ຈຳນວນຊຸດ) ຕ້ອງເທົ່າກັນ — ຖ້າບໍ່ດັ່ງນັ້ນ ລາຍການສັ່ງກັບເມນູກໍບໍ່ກົງກັນ ຄູນບໍ່ໄດ້.</div>`+M7_CHK(318)],
[R`ການຄູນມາຕຣິດບໍ່ສະຫຼັບບ່ອນ`, R`<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}2&2\\1&0\end{pmatrix},\ B=\begin{pmatrix}-1&-2\\3&2\end{pmatrix}$<br>$AB=\begin{pmatrix}4&0\\-1&-2\end{pmatrix}$ ແຕ່ $BA=\begin{pmatrix}-4&-2\\8&6\end{pmatrix}$</div>
<div class="box red"><span class="lbl">ຈື່ໄວ້</span>ໂດຍທົ່ວໄປ $AB\ne BA$. ຈາກ $AB=O$ ບໍ່ໄດ້ໝາຍຄວາມວ່າ $A=O$ ຫຼື $B=O$.</div>
<div class="box"><span class="lbl">ຄຸນລັກສະນະ</span>$(AB)C=A(BC)$ · $A(B+C)=AB+AC$ · $(A+B)C=AC+BC$<br>$k(AB)=(kA)B=A(kB)$ · $AI=IA=A$ · $A^n=AA^{n-1}$</div>`],
[R`ຫຼັກເກນສຳຄັນຂອງມາຕຣິດ 2×2`, R`<div class="box"><span class="lbl">ຫຼັກເກນ</span>ຖ້າ $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ ແລ້ວ $$A^2-(a+d)A+(ad-bc)I=O$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$: $A^2-5A-2I=O\Rightarrow A^2=5A+2I=\begin{pmatrix}7&10\\15&22\end{pmatrix}$<br>$A^3=5A^2+2A=27A+10I=\begin{pmatrix}37&54\\81&118\end{pmatrix}$</div>
<p>ມາຕຣິດເນັ່ງຈອມ: $\begin{pmatrix}\alpha&0\\0&\beta\end{pmatrix}^n=\begin{pmatrix}\alpha^n&0\\0&\beta^n\end{pmatrix}$</p>`],
[R`ກຳລັງທີ່ວົນຄືນ`, R`<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}1&-2\\1&-1\end{pmatrix}$: $A^2-0\cdot A+1\cdot I=O\Rightarrow A^2=-I$<br>$A^4=I$, ສະນັ້ນ $I+A+A^2+A^3=I+A-I-A=O$<br>$I+A+\dots+A^{100}=A^{100}=(A^4)^{25}=I$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}1&3\\-1&-2\end{pmatrix}$: $A^2+A+I=O\Rightarrow A^3=I$<br>$A^n=I$ (ເມື່ອ $n=3k$), $A$ ($n=3k+1$), $-A-I$ ($n=3k+2$)</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ຂະໜາດ $m\times n$; $A=B$ ⇔ ຂະໜາດ ແລະ ອົງປະກອບເທົ່າກັນ</li><li>$A\pm B$ ຕ້ອງຂະໜາດດຽວກັນ; $kA$ ຄູນທຸກອົງປະກອບ</li><li>$A_{m\times n}B_{n\times p}$: ແຖວ × ຖັນ; ໂດຍທົ່ວໄປ $AB\ne BA$</li><li>2×2: $A^2-(a+d)A+(ad-bc)I=O$ ຊ່ວຍຊອກ $A^n$</li></ul>`]
],
ex:[
[R`ຈົ່ງບອກຂະໜາດຂອງ $A=\begin{pmatrix}4&3\\1&2\end{pmatrix},\ B=\begin{pmatrix}-1&5\\-1&4\\3&1\end{pmatrix},\ C=\begin{pmatrix}1&-2&3\\0&4&1\\-2&-1&3\end{pmatrix}$.`, R`$A$: $2\times2$, $\ B$: $3\times2$, $\ C$: $3\times3$.`],
[R`ຈົ່ງຂຽນມາຕຣິດ $A_{3\times3}$ ທີ່ $a_{ij}=2$ ເມື່ອ $i\gt j$, $a_{ij}=-1$ ເມື່ອ $i=j$, $a_{ij}=3$ ເມື່ອ $i\lt j$.`, R`$A=\begin{pmatrix}-1&3&3\\2&-1&3\\2&2&-1\end{pmatrix}$.`],
[R`ຈົ່ງຊອກ $x,y$: $\begin{pmatrix}x-1\\x\end{pmatrix}=\begin{pmatrix}y\\y^2+y\end{pmatrix}$.`, R`$x=y+1$ ແທນໃສ່: $y+1=y^2+y\Rightarrow y^2=1$.<br>$y=1,x=2$ ຫຼື $y=-1,x=0$.`],
[R`ຈົ່ງຄິດໄລ່ $\begin{pmatrix}1&-1&3\\2&0&5\\-3&2&0\end{pmatrix}+\begin{pmatrix}2&0&-1\\1&4&-2\\0&-2&3\end{pmatrix}$.`, R`$\begin{pmatrix}3&-1&2\\3&4&3\\-3&0&3\end{pmatrix}$.`],
[R`ຈົ່ງຄິດໄລ່ $\begin{pmatrix}2&-1\\1&3\end{pmatrix}\begin{pmatrix}5&3&1\\2&-1&4\end{pmatrix}$.`, R`ຜົນເປັນມາຕຣິດ $2\times3$: $\begin{pmatrix}10-2&6+1&2-4\\5+6&3-3&1+12\end{pmatrix}=\begin{pmatrix}8&7&-2\\11&0&13\end{pmatrix}$.`],
[R`ໃຫ້ $2A+B=\begin{pmatrix}0&1\\3&3\end{pmatrix}$ ແລະ $A+2B=\begin{pmatrix}3&-1\\0&3\end{pmatrix}$. ຈົ່ງຊອກ $A$ ແລະ $B$.`, R`ເອົາ 2×(ສົມຜົນທີ 1) − (ສົມຜົນທີ 2): $3A=\begin{pmatrix}-3&3\\6&3\end{pmatrix}\Rightarrow A=\begin{pmatrix}-1&1\\2&1\end{pmatrix}$<br>$B=\begin{pmatrix}0&1\\3&3\end{pmatrix}-2A=\begin{pmatrix}2&-1\\-1&1\end{pmatrix}$.`]
],
hw:[
[R`ຈົ່ງຄິດໄລ່ $3\begin{pmatrix}1&4\\0&-1\\2&1\end{pmatrix}-2\begin{pmatrix}2&0\\1&-1\\3&1\end{pmatrix}$.`, R`$\begin{pmatrix}-1&12\\-2&-1\\0&1\end{pmatrix}$.`],
[R`ຈົ່ງຄິດໄລ່ $(1\ \ 2\ \ 3)\begin{pmatrix}1\\2\\3\end{pmatrix}$ ແລະ $\begin{pmatrix}1\\2\\3\end{pmatrix}(1\ \ 2\ \ 3)$.`, R`$(14)$ ແລະ $\begin{pmatrix}1&2&3\\2&4&6\\3&6&9\end{pmatrix}$.`],
[R`ໃຫ້ $A=\begin{pmatrix}2&1&-2\\0&1&3\end{pmatrix},\ B=\begin{pmatrix}0&-3&1\\1&0&-2\end{pmatrix}$. ຈົ່ງຊອກ $2(3A-B)-5A$.`, R`$=A-2B=\begin{pmatrix}2&7&-4\\-2&1&7\end{pmatrix}$.`],
[R`ໃຫ້ $A=\begin{pmatrix}2&2\\3&3\end{pmatrix},\ B=\begin{pmatrix}x&-1\\-2&y\end{pmatrix}$ ແລະ $AB=O$. ຈົ່ງຊອກ $x,y$.`, R`$AB=\begin{pmatrix}2x-4&-2+2y\\3x-6&-3+3y\end{pmatrix}=O\Rightarrow x=2,\ y=1$.`],
[R`ໃຫ້ $A=\begin{pmatrix}2&1\\-1&4\end{pmatrix}$. ຈົ່ງຊອກ $A^2-3A$.`, R`$A^2-6A+9I=O\Rightarrow A^2=6A-9I$<br>$A^2-3A=3A-9I=\begin{pmatrix}-3&3\\-3&3\end{pmatrix}$.`],
[R`ໃຫ້ $A=\begin{pmatrix}1&-2\\1&3\end{pmatrix}$. ຈົ່ງຄິດໄລ່ $A^2-2A$.`, R`$A^2=\begin{pmatrix}-1&-8\\4&7\end{pmatrix}$, $\ A^2-2A=\begin{pmatrix}-3&-4\\2&1\end{pmatrix}$.`]
],
quiz:[
[R`ຂະໜາດຂອງ $\begin{pmatrix}1&0&2\\-3&0.5&3\end{pmatrix}$ ແມ່ນ:`, [R`$3\times2$`,R`$2\times3$`,R`$2\times2$`,R`$3\times3$`],1,""],
[R`ໃນ $A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}$, ອົງປະກອບ $a_{23}$ ແມ່ນ:`, ["5","6","3","4"],1,"ແຖວທີ 2 ຖັນທີ 3"],
[R`ຜົນຄູນ $AB$ ຄິດໄລ່ໄດ້ກໍຕໍ່ເມື່ອ:`, ["ຈຳນວນແຖວ A = ຈຳນວນແຖວ B","ຈຳນວນຖັນ A = ຈຳນວນແຖວ B","A ແລະ B ເປັນມາຕຣິດຈະຕຸລັດ","ຈຳນວນຖັນ A = ຈຳນວນຖັນ B"],1,""],
[R`ຖ້າ $A$ ຂະໜາດ $2\times3$ ແລະ $B$ ຂະໜາດ $3\times4$ ແລ້ວ $AB$ ມີຂະໜາດ:`, [R`$3\times3$`,R`$2\times4$`,R`$4\times2$`,"ຄິດໄລ່ບໍ່ໄດ້"],1,""],
[R`$(2\ \ 3)\begin{pmatrix}2\\-1\end{pmatrix}$ ເທົ່າກັບ:`, [R`$(1)$`,R`$(7)$`,R`$\begin{pmatrix}4&6\\-2&-3\end{pmatrix}$`,R`$(4\ \ -3)$`],0,""],
[R`ສຳລັບມາຕຣິດຈະຕຸລັດທົ່ວໄປ $A,B$ ຂໍ້ໃດຖືກ?`, [R`$AB=BA$ ສະເໝີ`,R`$AB\ne BA$ ໂດຍທົ່ວໄປ`,R`$AB=O\Rightarrow A=O$`,R`$AI=I$`],1,""],
[R`ໃຫ້ $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$. $A^2-5A-2I$ ເທົ່າກັບ:`, [R`$O$`,R`$I$`,R`$A$`,R`$2I$`],0,R`ຫຼັກເກນ $A^2-(a+d)A+(ad-bc)I=O$`],
[R`$AI$ ເທົ່າກັບ:`, [R`$I$`,R`$A$`,R`$O$`,R`$A^2$`],1,""]
]});

M7.ch.push({
n:102, label:"2", part:9, title:"ເດແຕກມີນັງ ແລະ ມາຕຣິດປີ້ນ",
goal:R`ຄິດໄລ່ເດແຕກມີນັງຂອງມາຕຣິດ $2\times2$ ແລະ $3\times3$, ນຳໃຊ້ຄຸນລັກສະນະຂອງເດແຕກມີນັງ ແລະ ຊອກມາຕຣິດປີ້ນ.`,
slides:[
[R`ເດແຕກມີນັງ 2×2`, R`<div class="box"><span class="lbl">ນິຍາມ</span>ເດແຕກມີນັງເປັນຈຳນວນທີ່ຄິດໄລ່ໄດ້ຈາກ <b>ມາຕຣິດຈະຕຸລັດ</b>, ຂຽນ $\det A$ ຫຼື $|A|$.<br>$$\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}2&3\\4&5\end{pmatrix},\ B=\begin{pmatrix}-1&3\\-4&2\end{pmatrix}$<br>$\det A=10-12=-2$, $\ \det B=-2+12=10$<br>$\det(AB)=-20=\det A\cdot\det B$; ແຕ່ $\det(A+B)=7\ne\det A+\det B=8$</div>`],
[R`🍗 ເດແຕກມີນັງດ້ວຍໄກ່ທອດ`, `<div class="cols"><div>`+M7_MENU('ຮ້ານ A',[['ໄກ່ທອດ',2,1],['ນັກເກັດ',0,2]],['ຊຸດ 1','ຊຸດ 2'])+R`<p>$\det=4\ne0$: ຢາກໄດ້ໄກ່ແບບໃດກໍສັ່ງໄດ້ສະເໝີ<br>(ໄກ່ທອດ 3, ນັກເກັດ 1) → ຊຸດ 1: 1.25, ຊຸດ 2: 0.5<br>(ໄກ່ທອດ 0, ນັກເກັດ 4) → ຊຸດ 1: −1, ຊຸດ 2: 2</p></div>
<div>`+M7_MENU('ຮ້ານ B',[['ໄກ່ທອດ',2,1],['ນັກເກັດ',4,2]],['ຊຸດ 1','ຊຸດ 2'])+R`<p>ທຸກຊຸດມີນັກເກັດ <b>2 ເທົ່າ</b>ຂອງໄກ່ທອດສະເໝີ → ສັ່ງແບບໃດກໍໄດ້ນັກເກັດ 2 ເທົ່າ<br>ຢາກໄດ້ (ໄກ່ທອດ 1, ນັກເກັດ 1) <b>ເປັນໄປບໍ່ໄດ້</b></p></div></div>
<div class="box"><span class="lbl">ຄວາມໝາຍຂອງ det</span>ສັ່ງຕາມໃຈບໍ່ໄດ້ ເມື່ອອັດຕາສ່ວນຂອງທຸກຊຸດເທົ່າກັນ: $\dfrac{a}{c}=\dfrac{b}{d}\iff ad-bc=0$<br>$\det A\ne0$ ⇒ ລະບົບ $AX=B$ <b>ມີໃຈຜົນ ແລະ ມີໃຈຜົນດຽວ</b> ສະເໝີ</div>
<p class="hint">ປະຫວັດ: Seki (ຍີ່ປຸ່ນ) ແລະ Leibniz (ເຢຍລະມັນ) ຄິດເດແຕກມີນັງ ປະມານປີ 1683 — ກ່ອນມີຄຳວ່າ "ມາຕຣິດ" (1850) ເກືອບ 200 ປີ.</p>`+M7_CHK(545)],
[R`ເດແຕກມີນັງ 3×3 (ວິທີຊາຣຸສ)`, R`<p>ຂຽນຖັນທີ 1 ແລະ 2 ຕື່ມທາງຂວາ, ບວກຜົນຄູນຕາມເສັ້ນສະຫຼຽງລົງ ແລ້ວລົບຜົນຄູນຕາມເສັ້ນສະຫຼຽງຂຶ້ນ:</p>
$$\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-(a_{31}a_{22}a_{13}+a_{32}a_{23}a_{11}+a_{33}a_{21}a_{12})$$
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\begin{vmatrix}1&2&3\\1&3&5\\1&5&11\end{vmatrix}=(33+10+15)-(9+25+22)=58-56=2$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\begin{vmatrix}2&-1&3\\1&1&1\\2&4&4\end{vmatrix}=(8-2+12)-(6+8-4)=18-10=8$</div>`],
[R`ມີເນີ ແລະ ການແຍກຕາມແຖວ`, R`<div class="box"><span class="lbl">ນິຍາມ</span><b>ມີເນີ</b> $M_{ij}$ ແມ່ນເດແຕກມີນັງທີ່ໄດ້ຈາກການລຶບແຖວທີ $i$ ແລະ ຖັນທີ $j$.<br><b>ໂກແຟັກເຕີ</b> $C_{ij}=(-1)^{i+j}M_{ij}$</div>
$$\det A=a_{11}C_{11}+a_{12}C_{12}+a_{13}C_{13}=a_{11}M_{11}-a_{12}M_{12}+a_{13}M_{13}$$
<p>ແຍກຕາມແຖວ ຫຼື ຖັນໃດກໍໄດ້ — ເລືອກແຖວ/ຖັນທີ່ມີ 0 ຫຼາຍ.</p>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\begin{vmatrix}0&2&3&0\\0&4&5&0\\0&1&0&3\\2&0&1&3\end{vmatrix}=-2\begin{vmatrix}2&3&0\\4&5&0\\1&0&3\end{vmatrix}=-2\cdot3\begin{vmatrix}2&3\\4&5\end{vmatrix}=12$ (ແຍກຕາມຖັນທີ 1)</div>`],
[R`ຄຸນລັກສະນະຂອງເດແຕກມີນັງ`, R`<div class="box"><span class="lbl">ຄຸນລັກສະນະ</span><ol><li>$\det I=1$</li><li>ມີແຖວ ຫຼື ຖັນໃດໜຶ່ງເປັນສູນໝົດ ⇒ $\det A=0$</li><li>ມີ 2 ແຖວ ຫຼື 2 ຖັນຄືກັນ ⇒ $\det A=0$</li><li>$\det(AB)=\det A\cdot\det B$</li></ol></div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\begin{vmatrix}1&2&3\\0&0&0\\2&4&5\end{vmatrix}=0$ (ແຖວສູນ) · $\begin{vmatrix}1&-2&2\\3&2&-1\\1&-2&2\end{vmatrix}=0$ (ແຖວ 1 = ແຖວ 3)</div>`],
[R`ມາຕຣິດປີ້ນ 2×2`, R`<div class="box"><span class="lbl">ນິຍາມ</span>ຖ້າ $AB=BA=I$ ແລ້ວ $B=A^{-1}$ ແມ່ນ <b>ມາຕຣິດປີ້ນ</b> ຂອງ $A$.</div>
<div class="box"><span class="lbl">ສູດ</span>ຖ້າ $\det A=ad-bc\ne0$: $$\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$$ ຖ້າ $\det A=0$ ແມ່ນບໍ່ມີມາຕຣິດປີ້ນ.</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$: $\det A=-2$, $A^{-1}=\begin{pmatrix}-2&1\\ \frac32&-\frac12\end{pmatrix}$</div>`],
[R`ແກ້ສົມຜົນມາຕຣິດ`, R`<div class="box"><span class="lbl">ຄຸນລັກສະນະ</span>$(A^{-1})^{-1}=A$ · $(AB)^{-1}=B^{-1}A^{-1}$ · $(P^{-1}AP)^n=P^{-1}A^nP$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\ B=\begin{pmatrix}3&0\\1&1\end{pmatrix}$<br>$AX=B\Rightarrow X=A^{-1}B=\begin{pmatrix}-5&1\\4&-\frac12\end{pmatrix}$<br>$XA=B\Rightarrow X=BA^{-1}=\begin{pmatrix}-6&3\\-\frac12&\frac12\end{pmatrix}$</div>
<div class="box red"><span class="lbl">ລະວັງ</span>$AX=B$ ຄູນ $A^{-1}$ ທາງ<b>ຊ້າຍ</b>; $XA=B$ ຄູນ $A^{-1}$ ທາງ<b>ຂວາ</b>.</div>`],
[R`ມາຕຣິດປີ້ນ 3×3`, R`<p><b>ມາຕຣິດປ່ຽນແຖວເປັນຖັນ</b> $\,{}^tA$: ແຖວທີ $i$ ຂອງ $A$ ກາຍເປັນຖັນທີ $i$. $\ adj(A)={}^t[C_{ij}]$</p>
<div class="box"><span class="lbl">ສູດ</span>$$A^{-1}=\frac{1}{\det A}\,adj(A),\quad \det A\ne0$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}1&2&3\\1&3&5\\1&5&12\end{pmatrix}$, $\det A=3$<br>$C_{11}=11,C_{12}=-7,C_{13}=2;\ C_{21}=-9,C_{22}=9,C_{23}=-3;\ C_{31}=1,C_{32}=-2,C_{33}=1$<br>$A^{-1}=\frac13\begin{pmatrix}11&-9&1\\-7&9&-2\\2&-3&1\end{pmatrix}$</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$; 3×3 ໃຊ້ວິທີຊາຣຸສ ຫຼື ແຍກຕາມແຖວ</li><li>$C_{ij}=(-1)^{i+j}M_{ij}$; $\det(AB)=\det A\det B$</li><li>$A^{-1}$ ມີ ⇔ $\det A\ne0$; $A^{-1}=\frac1{\det A}adj(A)$</li><li>$(AB)^{-1}=B^{-1}A^{-1}$</li></ul>`]
],
ex:[
[R`ໃຫ້ $A=\begin{pmatrix}2&5\\7&15\end{pmatrix}$. ຈົ່ງຊອກ $\det A$ ແລະ $A^{-1}$.`, R`$\det A=30-35=-5$, $\ A^{-1}=-\frac15\begin{pmatrix}15&-5\\-7&2\end{pmatrix}=\begin{pmatrix}-3&1\\ \frac75&-\frac25\end{pmatrix}$.`],
[R`ຈົ່ງຄິດໄລ່ $\begin{vmatrix}1&2&3\\1&3&5\\1&5&11\end{vmatrix}$ ດ້ວຍການແຍກຕາມແຖວທີ 1.`, R`$1(33-25)-2(11-5)+3(5-3)=8-12+6=2$.`],
[R`ຈົ່ງຄິດໄລ່ $\begin{vmatrix}2&5&1\\0&3&4\\0&0&-1\end{vmatrix}$.`, R`ມາຕຣິດສາມແຈເທິງ: ຜົນຄູນເສັ້ນເນັ່ງຈອມ $=2\cdot3\cdot(-1)=-6$.`],
[R`ເປັນຫຍັງ $\begin{vmatrix}1&-2&2\\3&2&-1\\1&-2&2\end{vmatrix}=0$?`, R`ແຖວທີ 1 ແລະ ແຖວທີ 3 ຄືກັນ ⇒ ເດແຕກມີນັງເທົ່າກັບ 0.`],
[R`ໃຫ້ $A=\begin{pmatrix}-3&7\\-1&2\end{pmatrix},\ B=\begin{pmatrix}1&-1\\2&3\end{pmatrix}$. ຈົ່ງຊອກ $X$ ທີ່ $AX=B$.`, R`$\det A=1$, $A^{-1}=\begin{pmatrix}2&-7\\1&-3\end{pmatrix}$<br>$X=A^{-1}B=\begin{pmatrix}-12&-23\\-5&-10\end{pmatrix}$.`],
[R`ໃຫ້ $A=\begin{pmatrix}x+1&4\\-2&y-3\end{pmatrix}$. ຈົ່ງຊອກ $x,y$ ທີ່ $A=A^{-1}$.`, R`$A=A^{-1}\iff A^2=I$. ໃຫ້ $a=x+1,\ d=y-3$: $A^2=\begin{pmatrix}a^2-8&4(a+d)\\-2(a+d)&d^2-8\end{pmatrix}=I$<br>$\Rightarrow a+d=0,\ a^2=9$: $x=2,y=0$ ຫຼື $x=-4,y=6$.`]
],
hw:[
[R`ຈົ່ງຊອກ $\det B$ ແລະ $B^{-1}$ ເມື່ອ $B=\begin{pmatrix}-5&-1\\-3&-4\end{pmatrix}$.`, R`$\det B=20-3=17$, $\ B^{-1}=\frac1{17}\begin{pmatrix}-4&1\\3&-5\end{pmatrix}$.`],
[R`ຈົ່ງຊອກ $D^{-1}$ ເມື່ອ $D=\begin{pmatrix}2&5\\1&3\end{pmatrix}$.`, R`$\det D=1$, $\ D^{-1}=\begin{pmatrix}3&-5\\-1&2\end{pmatrix}$.`],
[R`ໃຫ້ $A=\begin{pmatrix}1&2&3\\1&3&3\\1&2&4\end{pmatrix}$ ແລະ $B=\begin{pmatrix}6&-2&-3\\-1&1&0\\-1&0&1\end{pmatrix}$. $B$ ເປັນມາຕຣິດປີ້ນຂອງ $A$ ບໍ?`, R`$\det A=1$ ແລະ $AB=I$ (ກວດ: ແຖວ 1 × ຖັນ 1 $=6-2-3=1$, …). ສະນັ້ນ $B=A^{-1}$.`],
[R`ໃຫ້ $A=\begin{pmatrix}-3&7\\-1&2\end{pmatrix},\ B=\begin{pmatrix}1&-1\\2&3\end{pmatrix}$. ຈົ່ງຊອກ $X$ ທີ່ $XA=B$.`, R`$X=BA^{-1}=\begin{pmatrix}1&-1\\2&3\end{pmatrix}\begin{pmatrix}2&-7\\1&-3\end{pmatrix}=\begin{pmatrix}1&-4\\7&-23\end{pmatrix}$.`],
[R`ຈົ່ງຄິດໄລ່ $\begin{vmatrix}2&-1&3\\1&1&1\\2&4&4\end{vmatrix}$ ດ້ວຍການແຍກຕາມແຖວທີ 1.`, R`$2(4-4)+1(4-2)+3(4-2)=0+2+6=8$.`],
[R`ໃຫ້ $A=\begin{pmatrix}2&3\\4&5\end{pmatrix},\ B=\begin{pmatrix}3&-1\\-2&-1\end{pmatrix}$. ຈົ່ງຄິດໄລ່ $(AB)^{-1}A$.`, R`$(AB)^{-1}A=B^{-1}A^{-1}A=B^{-1}$; $\det B=-5$<br>$B^{-1}=\begin{pmatrix}\frac15&-\frac15\\-\frac25&-\frac35\end{pmatrix}$.`]
],
quiz:[
[R`$\begin{vmatrix}2&3\\4&5\end{vmatrix}$ ເທົ່າກັບ:`, ["−2","2","22","−22"],0,"10 − 12"],
[R`$\det(AB)$ ເທົ່າກັບ:`, [R`$\det A+\det B$`,R`$\det A\cdot\det B$`,R`$\det A-\det B$`,R`$\det(A+B)$`],1,""],
[R`ມາຕຣິດຈະຕຸລັດ $A$ ມີມາຕຣິດປີ້ນກໍຕໍ່ເມື່ອ:`, [R`$\det A=0$`,R`$\det A\ne0$`,R`$\det A=1$`,R`$A$ ເປັນມາຕຣິດເນັ່ງຈອມ`],1,""],
[R`ມາຕຣິດປີ້ນຂອງ $\begin{pmatrix}2&1\\1&1\end{pmatrix}$ ແມ່ນ:`, [R`$\begin{pmatrix}1&-1\\-1&2\end{pmatrix}$`,R`$\begin{pmatrix}1&1\\1&2\end{pmatrix}$`,R`$\begin{pmatrix}2&-1\\-1&1\end{pmatrix}$`,R`$\begin{pmatrix}-1&1\\1&-2\end{pmatrix}$`],0,"det = 1"],
[R`$(AB)^{-1}$ ເທົ່າກັບ:`, [R`$A^{-1}B^{-1}$`,R`$B^{-1}A^{-1}$`,R`$BA$`,R`$\frac1{AB}$`],1,""],
[R`ມາຕຣິດທີ່ມີສອງແຖວຄືກັນ ມີເດແຕກມີນັງ:`, ["1","0","−1","ບໍ່ແນ່ນອນ"],1,""],
[R`$\begin{vmatrix}1&2&3\\1&3&5\\1&5&11\end{vmatrix}$ ເທົ່າກັບ:`, ["2","3","0","−2"],0,""],
[R`ໂກແຟັກເຕີ $C_{12}$ ຂອງ $\begin{pmatrix}1&2\\3&4\end{pmatrix}$ ແມ່ນ:`, ["3","−3","2","−2"],1,R`$C_{12}=(-1)^{1+2}\cdot3$`]
]});

M7.ch.push({
n:103, label:"3", part:9, title:"ລະບົບສົມຜົນລີເນແອ",
goal:R`ຂຽນລະບົບສົມຜົນລີເນແອເປັນ $AX=B$ ແລະ ແກ້ດ້ວຍມາຕຣິດປີ້ນ, ຫຼັກເກນແກຣມເມີ (ເດແຕກມີນັງ) ແລະ ວິທີກຳຈັດຂອງກາວ-ຈໍແດນ.`,
slides:[
[R`ລະບົບສົມຜົນໃນຮູບຮ່າງມາຕຣິດ`, R`<p>ລະບົບ $n$ ສົມຜົນ $n$ ຕົວປ່ຽນ:</p>
$$\begin{cases}a_{11}x_1+\dots+a_{1n}x_n=b_1\\ \quad\vdots\\ a_{n1}x_1+\dots+a_{nn}x_n=b_n\end{cases}\iff AX=B$$
<p>$A=(a_{ij})$ — ມາຕຣິດສຳປະສິດ, $X$ — ຖັນຕົວປ່ຽນ, $B$ — ຖັນຈຳນວນຄົງຄ່າ.</p>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\begin{cases}2x+3y=7\\x+2y=4\end{cases}\iff\begin{pmatrix}2&3\\1&2\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}7\\4\end{pmatrix}$</div>`],
[R`ວິທີທີ 1: ໃຊ້ມາຕຣິດປີ້ນ`, R`<div class="box"><span class="lbl">ຫຼັກເກນ</span>ຖ້າ $\det A\ne0$: $\ AX=B\Rightarrow X=A^{-1}B$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\begin{pmatrix}2&3\\1&2\end{pmatrix}^{-1}=\begin{pmatrix}2&-3\\-1&2\end{pmatrix}$ ⇒ $\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}2&-3\\-1&2\end{pmatrix}\begin{pmatrix}7\\4\end{pmatrix}=\begin{pmatrix}2\\1\end{pmatrix}$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\begin{cases}x+3y-z=4\\2x+5y-3z=3\\3x+y+9z=32\end{cases}$: $\det A=-20$, $A^{-1}=-\frac1{20}\begin{pmatrix}48&-28&-4\\-27&12&1\\-13&8&-1\end{pmatrix}$<br>$X=A^{-1}B=\begin{pmatrix}1\\2\\3\end{pmatrix}$</div>`],
[R`ວິທີທີ 2: ຫຼັກເກນແກຣມເມີ (Cramer)`, R`<div class="box"><span class="lbl">ຫຼັກເກນ</span>$$x_i=\frac{\det A_i}{\det A},\quad \det A\ne0$$ $A_i$ ແມ່ນ $A$ ທີ່ແທນ <b>ຖັນທີ $i$</b> ດ້ວຍຖັນ $B$.</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\begin{cases}2x_1+3x_2=4\\3x_1+x_2=-1\end{cases}$: $\det A=\begin{vmatrix}2&3\\3&1\end{vmatrix}=-7$<br>$\det A_1=\begin{vmatrix}4&3\\-1&1\end{vmatrix}=7,\ \det A_2=\begin{vmatrix}2&4\\3&-1\end{vmatrix}=-14$<br>$x_1=\frac{7}{-7}=-1,\ x_2=\frac{-14}{-7}=2$</div>`],
[R`ແກຣມເມີ 3 ຕົວປ່ຽນ`, R`<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\begin{cases}x_1+x_2-x_3=3\\2x_1+3x_2+x_3=11\\-x_1+x_2+2x_3=2\end{cases}$<br>$\det A=\begin{vmatrix}1&1&-1\\2&3&1\\-1&1&2\end{vmatrix}=-5$<br>$\det A_1=\begin{vmatrix}3&1&-1\\11&3&1\\2&1&2\end{vmatrix}=-10,\ \det A_2=\begin{vmatrix}1&3&-1\\2&11&1\\-1&2&2\end{vmatrix}=-10,\ \det A_3=\begin{vmatrix}1&1&3\\2&3&11\\-1&1&2\end{vmatrix}=-5$<br>$x_1=2,\ x_2=2,\ x_3=1$</div>
<p>ກວດຄືນ: $2+2-1=3$ ✓, $\ 4+6+1=11$ ✓, $\ -2+2+2=2$ ✓</p>`],
[R`ມາຕຣິດຂະຫຍາຍ ແລະ ຮູບແບບຂັ້ນໄດ`, R`<p><b>ມາຕຣິດຂະຫຍາຍ</b> $[A|B]$: $\begin{cases}x-y+2z=9\\-2x+3y-z=-11\\3x+y+z=4\end{cases}\to\left[\begin{array}{ccc|c}1&-1&2&9\\-2&3&-1&-11\\3&1&1&4\end{array}\right]$</p>
<div class="box"><span class="lbl">ການດຳເນີນການເບື້ອງຕົ້ນກ່ຽວກັບແຖວ</span>① ສັບປ່ຽນ 2 ແຖວ ② ຄູນແຖວດ້ວຍ $k\ne0$ ③ ບວກແຖວໜຶ່ງດ້ວຍ $k$ ເທົ່າຂອງອີກແຖວໜຶ່ງ</div>
<p><b>ມາຕຣິດເອຊີລອນແບບແຖວ</b>: ແຖວສູນຢູ່ລຸ່ມສຸດ, ເລກທີ່ບໍ່ແມ່ນ 0 ຕົວທຳອິດຂອງແຕ່ລະແຖວເປັນ 1 ແລະ ເລື່ອນໄປທາງຂວາເທື່ອລະແຖວ. ຖ້າຖັນຂອງເລກ 1 ນຳໜ້ານັ້ນເປັນ 0 ໝົດ (ນອກຈາກ 1) ເອີ້ນວ່າ <b>ຣີດິວເອຊີລອນ</b>.</p>`],
[R`🍗 ການດຳເນີນການແຖວດ້ວຍໄກ່ທອດ`, `<div class="cols"><div>`+M7_MENU('ຮ້ານຊ້າຍ',[['ໄກ່ທອດ',2,1],['ນັກເກັດ',2,3]],['ຊຸດ 1','ຊຸດ 2'])+`</div><div>`+M7_MENU('ຮ້ານຂວາ',[['ຄອມໂບ (ໄກ່ທອດ+ນັກເກັດ)',2,1],['ນັກເກັດ',0,2]],['ຊຸດ 1','ຊຸດ 2'])+`</div></div>`+R`
<p>ສັ່ງຊຸດ 1 ແລະ ຊຸດ 2 ຢ່າງລະຊຸດ: ຮ້ານຊ້າຍ ໄດ້ໄກ່ທອດ 3, ນັກເກັດ 5. ຮ້ານຂວາ ໄດ້ຄອມໂບ 3 + ນັກເກັດ 2 = ໄກ່ທອດ 3, ນັກເກັດ 5 — <b>ເທົ່າກັນ</b>!</p>
<div class="box"><span class="lbl">ຄວາມໝາຍ</span>ຮ້ານຂວາ = ຮ້ານຊ້າຍ ທີ່ເຮັດ $R_2-R_1$ (ຂຽນເມນູແບບໃໝ່ ແຕ່ຄວາມໝາຍຄືເກົ່າ)<br>① ສັບປ່ຽນແຖວ = ສະລັບບ່ອນໄກ່ທອດກັບນັກເກັດ ② ຄູນແຖວດ້ວຍ $k\ne0$ = ປ່ຽນໜ່ວຍ (ເຊັ່ນ ນັກເກັດເຄິ່ງຕ່ອນ) ③ ບວກ/ລົບແຖວ = ຈັດເປັນຄອມໂບ</div>
<p>ສະນັ້ນ ການດຳເນີນການແຖວ ບໍ່ປ່ຽນໃຈຜົນຂອງລະບົບສົມຜົນ.</p>`+M7_CHK(1198)],
[R`ວິທີທີ 3: ກາວ-ຈໍແດນ`, R`<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$\begin{cases}x+y+2z=3\\2x-y+z=6\\-x+3y=-5\end{cases}$<br>
$\left[\begin{array}{ccc|c}1&1&2&3\\2&-1&1&6\\-1&3&0&-5\end{array}\right]\xrightarrow[R_3+R_1]{R_2-2R_1}\left[\begin{array}{ccc|c}1&1&2&3\\0&-3&-3&0\\0&4&2&-2\end{array}\right]$<br>
$\xrightarrow{-\frac13R_2}\left[\begin{array}{ccc|c}1&1&2&3\\0&1&1&0\\0&4&2&-2\end{array}\right]\xrightarrow[R_3-4R_2]{R_1-R_2}\left[\begin{array}{ccc|c}1&0&1&3\\0&1&1&0\\0&0&-2&-2\end{array}\right]$<br>
$\xrightarrow{-\frac12R_3}\ \cdots\ \to\left[\begin{array}{ccc|c}1&0&0&2\\0&1&0&-1\\0&0&1&1\end{array}\right]$ ⇒ $x=2,\ y=-1,\ z=1$</div>`],
[R`ບໍ່ມີໃຈຜົນ ຫຼື ມີຫຼາຍໃຈຜົນ`, R`<div class="ex"><span class="lbl">ບໍ່ມີໃຈຜົນ</span>$\begin{cases}x+y+z=2\\x+2y+2z=1\\2x+3y+3z=4\end{cases}$: $R_3-R_1-R_2$ ໄດ້ແຖວ $(0\ 0\ 0\,|\,1)$ ຄື $0=1$ — ຂັດແຍ່ງ ⇒ <b>ບໍ່ມີໃຈຜົນ</b></div>
<div class="ex"><span class="lbl">ຫຼາຍໃຈຜົນ</span>$\begin{cases}x_1+x_2+x_3+x_4=8\\-x_1+3x_2-x_3-2x_4=0\\2x_1+6x_2-2x_3+x_4=16\end{cases}$ ຫຼຸດໄດ້<br>$x_1+\frac54x_4=4,\ x_2-\frac14x_4=2,\ x_3=2$. ໃຫ້ $x_4=m\in\mathbb{R}$:<br>$x_1=4-\frac54m,\ x_2=2+\frac14m,\ x_3=2,\ x_4=m$ ⇒ <b>ມີຫຼາຍໃຈຜົນ</b></div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$AX=B$; ຖ້າ $\det A\ne0$ ມີໃຈຜົນດຽວ $X=A^{-1}B$</li><li>ແກຣມເມີ: $x_i=\dfrac{\det A_i}{\det A}$</li><li>ກາວ-ຈໍແດນ: ປ່ຽນ $[A|B]$ ເປັນ $[I|X]$ ດ້ວຍການດຳເນີນການແຖວ</li><li>ແຖວ $(0\cdots0\,|\,c\ne0)$ ⇒ ບໍ່ມີໃຈຜົນ; ມີຕົວປ່ຽນອິດສະຫຼະ ⇒ ຫຼາຍໃຈຜົນ</li></ul>`]
],
ex:[
[R`ຈົ່ງແກ້ດ້ວຍຫຼັກເກນແກຣມເມີ: $\begin{cases}y-x=4\\2x+3y=22\end{cases}$`, R`$\begin{cases}-x+y=4\\2x+3y=22\end{cases}$: $\det A=-5$, $\det A_x=12-22=-10$, $\det A_y=-22-8=-30$<br>$x=2,\ y=6$.`],
[R`ຈົ່ງແກ້: $\begin{cases}2x-3y=2\\2y-x-5=0\end{cases}$`, R`$\begin{cases}2x-3y=2\\-x+2y=5\end{cases}$: $\det A=4-3=1$<br>$x=\frac{4+15}{1}=19,\ y=\frac{10+2}{1}=12$.`],
[R`ຈົ່ງແກ້ດ້ວຍມາຕຣິດປີ້ນ: $\begin{cases}x+2y=5\\3x+4y=11\end{cases}$`, R`$A^{-1}=-\frac12\begin{pmatrix}4&-2\\-3&1\end{pmatrix}$, $\ X=A^{-1}\begin{pmatrix}5\\11\end{pmatrix}=\begin{pmatrix}1\\2\end{pmatrix}$.`],
[R`ຈົ່ງແກ້ດ້ວຍວິທີກາວ-ຈໍແດນ: $\begin{cases}x+y+z=6\\x-y+z=2\\x+y-z=0\end{cases}$`, R`$R_2-R_1$: $-2y=-4\Rightarrow y=2$; $\ R_3-R_1$: $-2z=-6\Rightarrow z=3$; $\ x=6-2-3=1$.<br>ໃຈຜົນ $(1,2,3)$.`],
[R`ຈົ່ງແກ້: $\begin{cases}x+2y-z=3\\3x+y=6\\2x+y=1\end{cases}$`, R`ຈາກສົມຜົນ 2 − 3: $x=5$, ແລ້ວ $y=1-10=-9$, $\ z=5-18-3=-16$.<br>ໃຈຜົນ $(5,-9,-16)$.`],
[R`ລະບົບ $\begin{cases}x+y=1\\2x+2y=3\end{cases}$ ມີໃຈຜົນບໍ? ເພາະຫຍັງ?`, R`$\det A=0$; $R_2-2R_1$ ໄດ້ $0=1$ ⇒ ບໍ່ມີໃຈຜົນ (ສອງເສັ້ນຊື່ຂະໜານກັນ).`]
],
hw:[
[R`ຈົ່ງແກ້: $\begin{cases}3y+2x=1\\x-3y+1=0\end{cases}$`, R`$\begin{cases}2x+3y=1\\x-3y=-1\end{cases}$ ບວກກັນ: $3x=0\Rightarrow x=0,\ y=\frac13$.`],
[R`ຈົ່ງແກ້: $\begin{cases}x+y+z=4\\x+2y+2z=2\\z-x-y=2\end{cases}$`, R`ສົມຜົນ 1 + 3: $2z=6\Rightarrow z=3$, $x+y=1$; ແທນໃສ່ສົມຜົນ 2: $x+2y=-4$<br>$y=-5,\ x=6$. ໃຈຜົນ $(6,-5,3)$.`],
[R`ຈົ່ງແກ້ດ້ວຍແກຣມເມີ: $\begin{cases}4a+5b=-22\\3a-4b=-1\end{cases}$`, R`$\det A=-31$, $\det A_a=88+5=93$, $\det A_b=-4+66=62$<br>$a=-3,\ b=-2$.`],
[R`ຈົ່ງແກ້: $\begin{cases}x+y+z=30\\4x+y-4z=0\\5y-3z=4\end{cases}$`, R`$x=10,\ y=8,\ z=12$ (ກວດ: $40+8-48=0$, $40-36=4$).`],
[R`ຈົ່ງແກ້: $\begin{cases}2x-3y=-1\\-5x+8y=0\end{cases}$`, R`$\det A=16-15=1$; $x=\frac{-8-0}{1}=-8,\ y=\frac{0-5}{1}=-5$.`],
[R`ຈົ່ງແກ້: $\begin{cases}r-t=1\\3r+s=6\\5r+6t=-12\end{cases}$`, R`$t=r-1\Rightarrow 11r-6=-12\Rightarrow r=-\frac6{11}$<br>$t=-\frac{17}{11},\ s=6-3r=\frac{84}{11}$.`]
],
quiz:[
[R`ໃຈຜົນຂອງ $\begin{cases}2x+3y=7\\x+2y=4\end{cases}$:`, [R`$(2,1)$`,R`$(1,2)$`,R`$(-1,3)$`,R`$(3,0)$`],0,""],
[R`ຫຼັກເກນແກຣມເມີ: $x_i=$`, [R`$\frac{\det A}{\det A_i}$`,R`$\frac{\det A_i}{\det A}$`,R`$\det A_i-\det A$`,R`$A^{-1}B$`],1,""],
[R`ລະບົບ $AX=B$ ($A$ ຈະຕຸລັດ) ມີໃຈຜົນດຽວກໍຕໍ່ເມື່ອ:`, [R`$\det A=0$`,R`$\det A\ne0$`,R`$B=O$`,R`$A=I$`],1,""],
[R`$\det A$ ຂອງລະບົບ $\begin{cases}2x+3y=4\\3x+y=-1\end{cases}$:`, ["7","−7","11","−11"],1,"2·1 − 3·3"],
[R`ຫຼັງການດຳເນີນການແຖວ ໄດ້ແຖວ $(0\ \ 0\ \ 0\ |\ 5)$ ໝາຍຄວາມວ່າ:`, ["ມີໃຈຜົນດຽວ","ບໍ່ມີໃຈຜົນ","ມີຫຼາຍໃຈຜົນ","ໃຈຜົນເປັນ 5"],1,"0 = 5 ຂັດແຍ່ງ"],
[R`ມາຕຣິດຂະຫຍາຍຂອງ $\begin{cases}x-y=2\\2x+y=1\end{cases}$:`, [R`$\left[\begin{array}{cc|c}1&-1&2\\2&1&1\end{array}\right]$`,R`$\left[\begin{array}{cc|c}1&1&2\\2&1&1\end{array}\right]$`,R`$\left[\begin{array}{cc|c}1&-1&1\\2&1&2\end{array}\right]$`,R`$\left[\begin{array}{cc|c}2&1&1\\1&-1&-2\end{array}\right]$`],0,""],
[R`ຂໍ້ໃດ <b>ບໍ່ແມ່ນ</b> ການດຳເນີນການເບື້ອງຕົ້ນກ່ຽວກັບແຖວ?`, ["ສັບປ່ຽນສອງແຖວ","ຄູນແຖວດ້ວຍ 0","ຄູນແຖວດ້ວຍ 3","ບວກ 2 ເທົ່າຂອງແຖວໜຶ່ງໃສ່ອີກແຖວ"],1,"ຕ້ອງຄູນດ້ວຍ k ≠ 0"],
[R`ລະບົບ $\begin{cases}x+y=1\\2x+2y=2\end{cases}$ ມີ:`, ["ໃຈຜົນດຽວ","ບໍ່ມີໃຈຜົນ","ຫຼາຍໃຈຜົນ","2 ໃຈຜົນ"],2,"ສອງສົມຜົນແມ່ນເສັ້ນຊື່ດຽວກັນ"]
]});

M7.ch.push({
n:104, label:"4", part:9, title:"ການຜັນປ່ຽນລີເນແອ",
goal:R`ຮູ້ຈັກການຜັນປ່ຽນລີເນແອໃນແຜ່ນພຽງ (ສະທ້ອນ, ປິ່ນ, ຂະຫຍາຍ), ຊອກເງົາຂອງເມັດ ແລະ ເສັ້ນຊື່, ຊອກຄ່າສະເພາະ ແລະ ເວັກເຕີສະເພາະ ແລະ ນຳໃຊ້ກັບເສັ້ນຂັ້ນສອງ.`,
slides:[
[R`ການຜັນປ່ຽນລີເນແອ`, R`<div class="box"><span class="lbl">ນິຍາມ</span>$$\begin{pmatrix}x'\\y'\end{pmatrix}=\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}$$ ເມັດ $(x',y')$ ແມ່ນ <b>ເງົາ</b> ຂອງ $(x,y)$; $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ ແມ່ນມາຕຣິດຂອງການຜັນປ່ຽນ.</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>ເງົາຂອງ $(1,2)$ ດ້ວຍ $\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$: $\begin{pmatrix}2-2\\-3+4\end{pmatrix}=\begin{pmatrix}0\\1\end{pmatrix}$</div>
<p>ຂັ້ນຕອນຊອກເງົາຂອງເສັ້ນ: ຖອນ $x,y$ ອອກເປັນຄ່າຂອງ $x',y'$ (ໃຊ້ມາຕຣິດປີ້ນ) ແລ້ວແທນໃສ່ສົມຜົນຂອງເສັ້ນ.</p>`],
[R`ເງົາຂອງເສັ້ນຊື່`, R`<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>ເງົາຂອງ $3x+2y=1$ ດ້ວຍ $A=\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$ ($\det A=1$):<br>$\begin{pmatrix}x\\y\end{pmatrix}=A^{-1}\begin{pmatrix}x'\\y'\end{pmatrix}=\begin{pmatrix}2&1\\3&2\end{pmatrix}\begin{pmatrix}x'\\y'\end{pmatrix}$ ⇒ $x=2x'+y',\ y=3x'+2y'$<br>$3(2x'+y')+2(3x'+2y')=1\Rightarrow$ ເງົາແມ່ນ $12x+7y=1$</div>
<div class="ex"><span class="lbl">ກໍລະນີ $\det A=0$</span>$A=\begin{pmatrix}2&-1\\-2&1\end{pmatrix}$: $y'=-x'$ ສະເໝີ<br>ເສັ້ນ $2x+y-1=0$ ($y=-2x+1$) ⇒ $x'=4x-1$ ແລ່ນທົ່ວ ℝ: ເງົາແມ່ນ <b>ເສັ້ນ</b> $y=-x$<br>ເສັ້ນ $6x-3y+2=0$ ⇒ $x'=2x-y=-\frac23$ ຄົງຄ່າ: ເງົາເປັນ <b>ເມັດດຽວ</b> $\left(-\frac23,\frac23\right)$</div>`],
[R`ການສະທ້ອນເຄິ່ງຄືຫຼັບ`, R`<div class="tbl"><table><tr><th>ການສະທ້ອນໃສ່</th><th>ມາຕຣິດ</th><th>$(x,y)\mapsto$</th></tr>
<tr><td>ແກນ $x$</td><td>$\begin{pmatrix}1&0\\0&-1\end{pmatrix}$</td><td>$(x,-y)$</td></tr>
<tr><td>ແກນ $y$</td><td>$\begin{pmatrix}-1&0\\0&1\end{pmatrix}$</td><td>$(-x,y)$</td></tr>
<tr><td>ເມັດເຄົ້າ $O$</td><td>$\begin{pmatrix}-1&0\\0&-1\end{pmatrix}$</td><td>$(-x,-y)$</td></tr>
<tr><td>ເສັ້ນ $y=x$</td><td>$\begin{pmatrix}0&1\\1&0\end{pmatrix}$</td><td>$(y,x)$</td></tr>
<tr><td>ເສັ້ນ $y=-x$</td><td>$\begin{pmatrix}0&-1\\-1&0\end{pmatrix}$</td><td>$(-y,-x)$</td></tr></table></div>
<svg viewBox="0 0 220 120" width="220" style="max-width:100%" role="img" aria-label="ສະທ້ອນໃສ່ແກນ x ແລະ y=x"><g stroke="currentColor" stroke-width="1" fill="none"><line x1="10" y1="60" x2="210" y2="60"/><line x1="110" y1="5" x2="110" y2="115"/></g><line x1="55" y1="115" x2="165" y2="5" stroke="var(--ink-2)" stroke-dasharray="4 3"/><g fill="currentColor" font-size="10"><circle cx="160" cy="35" r="3.5" style="fill:var(--blue)"/><text x="165" y="33">P</text><circle cx="160" cy="85" r="3.5" style="fill:var(--red)"/><text x="165" y="93">P′ (ແກນ x)</text><circle cx="135" cy="10" r="3.5" style="fill:var(--green)"/><text x="141" y="14">P″ (y=x)</text></g><line x1="160" y1="35" x2="160" y2="85" stroke="var(--red)" stroke-dasharray="3 2"/></svg>`],
[R`ການຂະຫຍາຍ ແລະ ການປິ່ນ`, R`<div class="box"><span class="lbl">ການຂະຫຍາຍ</span>$\begin{pmatrix}k&0\\0&k\end{pmatrix}$: ໄລຍະຈາກເມັດເຄົ້າຄູນດ້ວຍ $|k|$ (ໃຫຍ່ຂຶ້ນເມື່ອ $|k|\gt1$, ນ້ອຍລົງເມື່ອ $|k|\lt1$).</div>
<div class="box"><span class="lbl">ການປິ່ນອ້ອມເມັດເຄົ້າດ້ວຍມຸມ θ</span>$$R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>ປິ່ນ $90^\circ$: $R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, ເງົາຂອງ $(3,1)$ ແມ່ນ $(-1,3)$</div>`],
[R`ສະທ້ອນໃສ່ເສັ້ນ y = (tan θ)x`, R`<p>ສະທ້ອນໃສ່ແກນ $x$ ແລ້ວປິ່ນ $2\theta$:</p>
<div class="box"><span class="lbl">ສູດ</span>$$\begin{pmatrix}\cos2\theta&-\sin2\theta\\ \sin2\theta&\cos2\theta\end{pmatrix}\begin{pmatrix}1&0\\0&-1\end{pmatrix}=\begin{pmatrix}\cos2\theta&\sin2\theta\\ \sin2\theta&-\cos2\theta\end{pmatrix}$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>ສະທ້ອນໃສ່ $y=\frac13x$: $\tan\theta=\frac13\Rightarrow\cos2\theta=\frac{1-\frac19}{1+\frac19}=\frac45,\ \sin2\theta=\frac{\frac23}{1+\frac19}=\frac35$<br>$A=\frac15\begin{pmatrix}4&3\\3&-4\end{pmatrix}$</div>`],
[R`ຄ່າສະເພາະ ແລະ ເວັກເຕີສະເພາະ`, R`<div class="box"><span class="lbl">ນິຍາມ</span>ຈຳນວນ $\lambda$ ທີ່ $Ax=\lambda x$ ມີໃຈຜົນ $x\ne0$ ແມ່ນ <b>ຄ່າສະເພາະ</b>; $x$ ແມ່ນ <b>ເວັກເຕີສະເພາະ</b>. ຊອກ $\lambda$ ຈາກ $$\det(A-\lambda E)=0$$</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>$A=\begin{pmatrix}-5&2\\2&-2\end{pmatrix}$: $(-5-\lambda)(-2-\lambda)-4=\lambda^2+7\lambda+6=0$<br>$\lambda=-1$: $-4x_1+2x_2=0\Rightarrow x=\begin{pmatrix}1\\2\end{pmatrix}$ · $\ \lambda=-6$: $x_1+2x_2=0\Rightarrow x=\begin{pmatrix}2\\-1\end{pmatrix}$</div>`],
[R`🍗 ຄ່າສະເພາະດ້ວຍໄກ່ທອດ`, `<div class="cols"><div>`+M7_MENU('ເມນູ',[['ໄກ່ທອດ',2,1],['ນັກເກັດ',2,3]],['ຊຸດ 1','ຊຸດ 2'])+R`<p>ໝູ່ 3 ຄົນ: 1 ຄົນກິນແຕ່ໄກ່ທອດ, 2 ຄົນກິນແຕ່ນັກເກັດ. ສັ່ງ <b>ຊຸດ 1: 1 ຊຸດ, ຊຸດ 2: 2 ຊຸດ</b></p></div>
<div><p>ໄດ້ 3 ກ່ອງ: ໄກ່ທອດ $2+1+1=4$, ນັກເກັດ $2+3+3=8$<br>ຈັດກ່ອງໃໝ່: ກ່ອງໄກ່ທອດ 4 ຕ່ອນ 1 ກ່ອງ, ກ່ອງນັກເກັດ 4 ຕ່ອນ 2 ກ່ອງ<br>→ ທຸກຄົນໄດ້ <b>4 ຕ່ອນ</b> ເທົ່າກັນ ພໍດີ!</p></div></div>
<div class="box"><span class="lbl">ຄວາມໝາຍ</span>$$\begin{pmatrix}2&1\\2&3\end{pmatrix}\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}4\\8\end{pmatrix}=4\begin{pmatrix}1\\2\end{pmatrix}$$ ລາຍການສັ່ງພິເສດ $(1,2)$ = <b>ເວັກເຕີສະເພາະ</b> ("Chicken Order"), ເລກ 4 = <b>ຄ່າສະເພາະ</b> ("Chicken Value")<br>ຄ່າສະເພາະອີກຄ່າໜຶ່ງ: $\lambda^2-5\lambda+4=0\Rightarrow\lambda=1$, ເວັກເຕີ $(1,-1)$</div>`+M7_CHK(985)],
[R`ນຳໃຊ້ກັບເສັ້ນຂັ້ນສອງ`, R`<p>$17x^2-30xy+17y^2=128\iff(x\ \ y)\begin{pmatrix}17&-15\\-15&17\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=128$</p>
<p>ຄ່າສະເພາະ $\lambda=2$ (ເວັກເຕີ $\frac1{\sqrt2}(1,1)$) ແລະ $\lambda=32$ (ເວັກເຕີ $\frac1{\sqrt2}(-1,1)$). ໃຫ້ $X$ ມີຖັນເປັນເວັກເຕີເຫຼົ່ານີ້: $\,{}^tXAX=\begin{pmatrix}2&0\\0&32\end{pmatrix}$</p>
<div class="box"><span class="lbl">ຜົນ</span>ໃນລະບົບແກນໃໝ່ (ປິ່ນ $45^\circ$): $2x'^2+32y'^2=128\iff\dfrac{x'^2}{64}+\dfrac{y'^2}{4}=1$ — ເປັນ <b>ແອັບລິບ</b></div>
<p>ທົ່ວໄປ: $ax^2+2bxy+cy^2+dx+ey+f=0$ ປ່ຽນເປັນ $\lambda_1x'^2+\lambda_2y'^2+\dots=0$.</p>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>$\begin{pmatrix}x'\\y'\end{pmatrix}=A\begin{pmatrix}x\\y\end{pmatrix}$; ເງົາຂອງເສັ້ນ: ຖອນ $x,y$ ດ້ວຍ $A^{-1}$</li><li>ສະທ້ອນ/ປິ່ນ/ຂະຫຍາຍ ມີມາຕຣິດສະເພາະ; ປິ່ນ θ: $R_\theta$</li><li>ຄ່າສະເພາະ: $\det(A-\lambda E)=0$; ເວັກເຕີສະເພາະ: $(A-\lambda E)x=0$</li><li>ມາຕຣິດເຄິ່ງຄື ⇒ ປ່ຽນເສັ້ນຂັ້ນສອງໃຫ້ເປັນຮູບມາດຕະຖານ</li></ul>`]
],
ex:[
[R`ຈົ່ງຊອກເງົາຂອງເມັດ $(1,2)$ ແລະ $(-1,3)$ ດ້ວຍ $A=\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$.`, R`$(0,1)$ ແລະ $(-5,9)$.`],
[R`ຈົ່ງຂຽນມາຕຣິດປິ່ນອ້ອມເມັດເຄົ້າ $90^\circ$ ແລະ ຊອກເງົາຂອງ $(3,1)$.`, R`$\begin{pmatrix}0&-1\\1&0\end{pmatrix}$; ເງົາ $(-1,3)$.`],
[R`ຈົ່ງຊອກເງົາຂອງ $(2,5)$ ເມື່ອສະທ້ອນໃສ່ເສັ້ນ $y=x$ ແລະ ໃສ່ແກນ $y$.`, R`ໃສ່ $y=x$: $(5,2)$; ໃສ່ແກນ $y$: $(-2,5)$.`],
[R`ຈົ່ງຊອກຄ່າສະເພາະ ແລະ ເວັກເຕີສະເພາະຂອງ $\begin{pmatrix}8&-4\\2&2\end{pmatrix}$.`, R`$\lambda^2-10\lambda+24=0\Rightarrow\lambda=4,6$.<br>$\lambda=4$: $x_1=x_2$, ເວັກເຕີ $(1,1)$; $\ \lambda=6$: $x_1=2x_2$, ເວັກເຕີ $(2,1)$.`],
[R`ຈົ່ງຊອກຄ່າສະເພາະ ແລະ ເວັກເຕີສະເພາະຂອງ $\begin{pmatrix}2&0\\-1&3\end{pmatrix}$.`, R`$(2-\lambda)(3-\lambda)=0\Rightarrow\lambda=2,3$.<br>$\lambda=2$: $(1,1)$; $\ \lambda=3$: $(0,1)$.`],
[R`ຈົ່ງຊອກເງົາຂອງເສັ້ນ $x+2y-1=0$ ທີ່ໄດ້ຈາກການປິ່ນອ້ອມເມັດເຄົ້າດ້ວຍມຸມ $\frac{\pi}{3}$.`, R`ປີ້ນກັບ: $x=\frac12x'+\frac{\sqrt3}2y',\ y=-\frac{\sqrt3}2x'+\frac12y'$. ແທນໃສ່:<br>$\left(\frac12-\sqrt3\right)x'+\left(\frac{\sqrt3}2+1\right)y'=1\iff(1-2\sqrt3)x+(2+\sqrt3)y=2$.`]
],
hw:[
[R`ຈົ່ງຊອກມາຕຣິດຂອງການສະທ້ອນໃສ່ເສັ້ນ $y=2x$.`, R`$\tan\theta=2$: $\cos2\theta=-\frac35,\ \sin2\theta=\frac45$ ⇒ $\begin{pmatrix}-\frac35&\frac45\\ \frac45&\frac35\end{pmatrix}$.`],
[R`ຈົ່ງຊອກເງົາຂອງເສັ້ນ $2x-y+3=0$ ດ້ວຍ $A=\begin{pmatrix}3&-1\\6&-2\end{pmatrix}$.`, R`$y'=2x'$ ສະເໝີ; ໃນເສັ້ນ $y=2x+3$: $x'=x-3$ ແລ່ນທົ່ວ ℝ ⇒ ເງົາແມ່ນເສັ້ນ $y=2x$.`],
[R`ຈົ່ງຊອກເງົາຂອງເສັ້ນ $3x-y+2=0$ ດ້ວຍ $A=\begin{pmatrix}3&-1\\6&-2\end{pmatrix}$.`, R`ໃນເສັ້ນ $y=3x+2$: $x'=3x-y=-2,\ y'=-4$ ⇒ ເງົາເປັນເມັດດຽວ $(-2,-4)$.`],
[R`ຈົ່ງຊອກຄ່າສະເພາະ ແລະ ເວັກເຕີສະເພາະຂອງ $\begin{pmatrix}0&-1\\-3&2\end{pmatrix}$.`, R`$\lambda^2-2\lambda-3=0\Rightarrow\lambda=3,-1$.<br>$\lambda=3$: $(1,-3)$; $\ \lambda=-1$: $(1,1)$.`],
[R`ຈົ່ງຊອກຄ່າສະເພາະ ແລະ ເວັກເຕີສະເພາະຂອງ $\begin{pmatrix}2&1\\0&2\end{pmatrix}$.`, R`$(2-\lambda)^2=0\Rightarrow\lambda=2$ (ຊ້ຳ); ເວັກເຕີສະເພາະ $(1,0)$.`],
[R`ມາຕຣິດ $A=\begin{pmatrix}\frac12&-\frac{\sqrt3}2\\ \frac{\sqrt3}2&\frac12\end{pmatrix}$ ແທນການຜັນປ່ຽນຫຍັງ? ຈົ່ງຊອກ $A^6$.`, R`ການປິ່ນອ້ອມເມັດເຄົ້າ $60^\circ$. $A^6$ = ປິ່ນ $360^\circ$ ⇒ $A^6=I$.`]
],
quiz:[
[R`ມາຕຣິດຂອງການສະທ້ອນໃສ່ແກນ $x$:`, [R`$\begin{pmatrix}1&0\\0&-1\end{pmatrix}$`,R`$\begin{pmatrix}-1&0\\0&1\end{pmatrix}$`,R`$\begin{pmatrix}0&1\\1&0\end{pmatrix}$`,R`$\begin{pmatrix}-1&0\\0&-1\end{pmatrix}$`],0,""],
[R`ມາຕຣິດປິ່ນອ້ອມເມັດເຄົ້າດ້ວຍມຸມ θ:`, [R`$\begin{pmatrix}\cos\theta&\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}$`,R`$\begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix}$`,R`$\begin{pmatrix}\sin\theta&-\cos\theta\\ \cos\theta&\sin\theta\end{pmatrix}$`,R`$\begin{pmatrix}1&\theta\\0&1\end{pmatrix}$`],1,""],
[R`ເງົາຂອງ $(1,0)$ ເມື່ອປິ່ນ $90^\circ$:`, [R`$(0,1)$`,R`$(0,-1)$`,R`$(-1,0)$`,R`$(1,1)$`],0,""],
[R`ຄ່າສະເພາະຂອງ $\begin{pmatrix}-5&2\\2&-2\end{pmatrix}$:`, ["1 ແລະ 6","−1 ແລະ −6","−5 ແລະ −2","2 ແລະ 3"],1,R`$\lambda^2+7\lambda+6=0$`],
[R`ສົມຜົນທີ່ໃຊ້ຊອກຄ່າສະເພາະ:`, [R`$\det A=0$`,R`$\det(A-\lambda E)=0$`,R`$A=\lambda$`,R`$A^{-1}=\lambda E$`],1,""],
[R`$\begin{pmatrix}0&1\\1&0\end{pmatrix}$ ແມ່ນການສະທ້ອນໃສ່:`, ["ແກນ x","ແກນ y","ເສັ້ນ y = x","ເມັດເຄົ້າ"],2,""],
[R`$\begin{pmatrix}3&0\\0&3\end{pmatrix}$ ເຮັດໃຫ້ໄລຍະຈາກເມັດເຄົ້າ:`, ["ຄືເກົ່າ","ເພີ່ມ 3 ເທົ່າ","ຫຼຸດ 3 ເທົ່າ","ເພີ່ມ 9 ເທົ່າ"],1,""],
[R`ເວັກເຕີສະເພາະຂອງ $\begin{pmatrix}-5&2\\2&-2\end{pmatrix}$ ທີ່ກ່ຽວກັບ $\lambda=-1$:`, [R`$(1,2)$`,R`$(2,-1)$`,R`$(1,-1)$`,R`$(2,1)$`],0,R`$-4x_1+2x_2=0$`]
]});

M7.ch.push({
n:105, label:"5", part:9, title:"ການວາງແຜນລີເນແອ",
goal:R`ສ້າງແບບຈຳລອງການວາງແຜນລີເນແອ (ຕຳລາເປົ້າໝາຍ ແລະ ເງື່ອນໄຂ), ແກ້ດ້ວຍເສັ້ນສະແດງ ແລະ ເມັດຈອມຂອງເຂດເງື່ອນໄຂ ແລະ ນຳໃຊ້ສູດລີອົງແຕບ $X=(E-A)^{-1}D$.`,
slides:[
[R`ການວາງແຜນລີເນແອແມ່ນຫຍັງ?`, R`<p>ແມ່ນການຊອກ <b>ຄ່າໃຫຍ່ສຸດ</b> (ກຳໄລ) ຫຼື <b>ຄ່ານ້ອຍສຸດ</b> (ຕົ້ນທຶນ) ຂອງຕຳລາລີເນແອ ພາຍໃຕ້ເງື່ອນໄຂທີ່ເປັນອະສົມຜົນລີເນແອ. ໃຊ້ຫຼາຍໃນການຜະລິດ ແລະ ການບໍລິຫານ.</p>
<div class="box"><span class="lbl">ຂັ້ນຕອນ</span><ol><li>ກຳນົດຕົວປ່ຽນ ແລະ ຂຽນ <b>ຕຳລາເປົ້າໝາຍ</b> $P=ax_1+bx_2\to\max/\min$</li><li>ຂຽນ <b>ເງື່ອນໄຂ</b> (ອະສົມຜົນ) ແລະ $x_1,x_2\ge0$</li><li>ແຕ້ມ <b>ເຂດເງື່ອນໄຂ</b> ໃນແຜ່ນພຽງ</li><li>ຊອກເມັດທີ່ດີທີ່ສຸດ — ຢູ່ <b>ເມັດຈອມ</b> ຂອງເຂດ</li></ol></div>`],
[R`ຕົວຢ່າງ 1: ສ້າງແບບຈຳລອງ`, R`<p>ຜະລິດເສື້ອ A ($x_1$ ຜືນ) ແລະ B ($x_2$ ຜືນ):</p>
<div class="tbl"><table><tr><th></th><th>ຕັດ</th><th>ຫຍິບ</th><th>ເຕືອບ</th><th>ກຳໄລ</th></tr><tr><td>A</td><td>2 ຊມ</td><td>5 ຊມ</td><td>1 ຊມ</td><td>$50</td></tr><tr><td>B</td><td>1 ຊມ</td><td>5 ຊມ</td><td>3 ຊມ</td><td>$30</td></tr><tr><td>ມີເວລາ</td><td>14</td><td>40</td><td>18</td><td></td></tr></table></div>
<div class="box"><span class="lbl">ແບບຈຳລອງ</span>$P=50x_1+30x_2\to\max$<br>$2x_1+x_2\le14,\ \ 5x_1+5x_2\le40,\ \ x_1+3x_2\le18,\ \ x_1,x_2\ge0$</div>`],
[R`ຕົວຢ່າງ 1: ແກ້ດ້ວຍເສັ້ນສະແດງ`, R`<div class="cols"><div><svg viewBox="0 0 230 200" width="230" style="max-width:100%" role="img" aria-label="ເຂດເງື່ອນໄຂ"><polygon points="30,170 128,170 114,142 72,100 30,86" style="fill:var(--blue);fill-opacity:.2;stroke:var(--blue);stroke-width:1.5"/><g stroke="currentColor" fill="none" stroke-width="1"><line x1="30" y1="185" x2="30" y2="10"/><line x1="15" y1="170" x2="225" y2="170"/></g><g stroke-width="1.2" fill="none"><line x1="44" y1="2" x2="128" y2="170" stroke="var(--red)"/><line x1="30" y1="58" x2="142" y2="170" stroke="var(--amber)"/><line x1="30" y1="86" x2="222" y2="150" stroke="var(--green)"/><line x1="44" y1="25" x2="142" y2="189" stroke="var(--ink-2)" stroke-dasharray="4 3"/></g><circle cx="114" cy="142" r="4" style="fill:var(--red)"/><g fill="currentColor" font-size="10"><text x="118" y="138">(6,2)</text><text x="200" y="182">x₁</text><text x="10" y="16">x₂</text><text x="130" y="182">7</text><text x="18" y="89">6</text></g></svg></div>
<div><p>ເມັດຈອມ ແລະ ຄ່າ $P$:</p><div class="tbl"><table><tr><th>ເມັດ</th><th>$P$</th></tr><tr><td>(0,0)</td><td>0</td></tr><tr><td>(7,0)</td><td>350</td></tr><tr><td><b>(6,2)</b></td><td><b>360</b></td></tr><tr><td>(3,5)</td><td>300</td></tr><tr><td>(0,6)</td><td>180</td></tr></table></div><p>ກຳໄລສູງສຸດ $360$: ຜະລິດ A 6 ຜືນ, B 2 ຜືນ.</p></div></div>`],
[R`ເສັ້ນລະດັບຂອງຕຳລາເປົ້າໝາຍ`, R`<p>ໃຫ້ $P=0$: $x_2=-\frac53x_1$ — ເສັ້ນລະດັບ (ເສັ້ນຂີດໃນຮູບ). ເລື່ອນເສັ້ນນີ້ຂະໜານຂຶ້ນ ຄ່າ $P$ ເພີ່ມຂຶ້ນ.</p>
<div class="box"><span class="lbl">ຫຼັກການ</span>ເມັດສຸດທ້າຍທີ່ເສັ້ນລະດັບແຕະເຂດເງື່ອນໄຂ ແມ່ນເມັດທີ່ $P$ ໃຫຍ່ສຸດ. ເມື່ອເຂດເງື່ອນໄຂເປັນຮູບຫຼາຍແຈ, ເມັດນັ້ນເປັນ <b>ເມັດຈອມ</b> ຫຼື ຂອບຂອງເຂດ.</div>
<p>ສະນັ້ນໃນທາງປະຕິບັດ: ຊອກເມັດຈອມທຸກເມັດ (ຈຸດຕັດຂອງເສັ້ນເງື່ອນໄຂ) ແລ້ວແທນຄ່າເປົ້າໝາຍ.</p>`],
[R`ຕົວຢ່າງ 2: ຕົ້ນທຶນນ້ອຍສຸດ`, R`<p>ຝຸ່ນ $y_1$ ($12/ຖົງ: A 3, B 4, C 14) ແລະ $y_2$ ($20/ຖົງ: A 9, B 6, C 7). ຕ້ອງການ A ≥ 45, B ≥ 48, C ≥ 84.</p>
<div class="box"><span class="lbl">ແບບຈຳລອງ</span>$C=12y_1+20y_2\to\min$<br>$3y_1+9y_2\ge45,\ \ 4y_1+6y_2\ge48,\ \ 14y_1+7y_2\ge84,\ \ y_1,y_2\ge0$</div>
<div class="tbl"><table><tr><th>ເມັດຈອມ</th><th>(0,12)</th><th>(3,6)</th><th><b>(9,2)</b></th><th>(15,0)</th></tr><tr><td>$C$</td><td>240</td><td>156</td><td><b>148</b></td><td>180</td></tr></table></div>
<p>ຕົ້ນທຶນຕ່ຳສຸດ $148$ ເມື່ອໃຊ້ $y_1=9,\ y_2=2$. (ເຂດເງື່ອນໄຂເປີດອອກໄປທາງເທິງ, ຈຶ່ງບໍ່ມີຄ່າໃຫຍ່ສຸດ.)</p>`],
[R`ສູດລີອົງແຕບ (ຂາເຂົ້າ-ຂາອອກ)`, R`<div class="box"><span class="lbl">ສູດ</span>ຜົນຜະລິດທັງໝົດ = ຄວາມຕ້ອງການພາຍນອກ + ການຊົມໃຊ້ພາຍໃນ<br>$X=D+AX\Rightarrow X=(E-A)^{-1}D$<br>$A$ — ມາຕຣິດເຕັກໂນໂລຊີການຜະລິດ</div>
<div class="ex"><span class="lbl">ຕົວຢ່າງ</span>ໄຟຟ້າ, ຖ່ານຫີນ, ເຫຼັກ: $A=\begin{pmatrix}0.15&0.15&0.09\\0.50&0&0.10\\0.10&0.03&0.20\end{pmatrix}$, $D=\begin{pmatrix}1\,156\,500\\685\,000\\1\,668\,000\end{pmatrix}$<br>$X=(E-A)^{-1}D=\begin{pmatrix}1\,950\,000\\1\,900\,000\\2\,400\,000\end{pmatrix}$ (ກວດ: $X-AX=D$ ✓)</div>`],
[R`ສະຫຼຸບບົດ`, R`<ul><li>ແບບຈຳລອງ: ຕຳລາເປົ້າໝາຍ + ເງື່ອນໄຂ + $x_i\ge0$</li><li>ແຕ້ມເຂດເງື່ອນໄຂ, ຊອກເມັດຈອມ, ແທນຄ່າເປົ້າໝາຍ</li><li>ຄ່າດີທີ່ສຸດຢູ່ເມັດຈອມ (ຫຼື ຕາມຂອບ)</li><li>ລີອົງແຕບ: $X=(E-A)^{-1}D$</li></ul>`]
],
ex:[
[R`Max $Z=5x_1+7x_2$ ພາຍໃຕ້ $2x_1+3x_2\le12,\ 3x_1+x_2\le12,\ x_1,x_2\ge0$.`, R`ເມັດຈອມ: $(0,0),(4,0),(0,4),\left(\frac{24}7,\frac{12}7\right)$; $Z$: $0,20,28,\frac{204}7$.<br>Max $Z=\frac{204}7\approx29.1$ ທີ່ $\left(\frac{24}7,\frac{12}7\right)$.`],
[R`Max $Z=x_1+5x_2$ ພາຍໃຕ້ $2x_1+x_2\le10,\ x_1+2x_2\le10,\ x_1,x_2\ge0$.`, R`ເມັດຈອມ $(0,0),(5,0),\left(\frac{10}3,\frac{10}3\right),(0,5)$; $Z$: $0,5,20,25$.<br>Max $Z=25$ ທີ່ $(0,5)$.`],
[R`Min $Z=3x_1+4x_2$ ພາຍໃຕ້ $x_1+x_2\ge2,\ 2x_1+3x_2\ge6,\ x_1,x_2\ge0$.`, R`ເມັດຈອມ $(0,2)$: $Z=8$; $(3,0)$: $Z=9$.<br>Min $Z=8$ ທີ່ $(0,2)$.`],
[R`ໂຮງງານຜະລິດ A ($x_1$) ແລະ B ($x_2$). A ໃຊ້ 5 ຊມ ຜະລິດຊິ້ນສ່ວນ, 3 ຊມ ປະກອບ, 4 ຊມ ຫຸ້ມຫໍ່; B ໃຊ້ 2, 12, 8 ຊມ. ມີເວລາ 40, 60, 48 ຊມ. ກຳໄລ A 7 000 ກີບ, B 21 000 ກີບ. ຈົ່ງຊອກກຳໄລສູງສຸດ.`, R`$P=7000x_1+21000x_2$; $5x_1+2x_2\le40,\ 3x_1+12x_2\le60,\ 4x_1+8x_2\le48$.<br>ເມັດຈອມ: $(8,0)$→56 000; $(7;2.5)$→101 500; $(4,4)$→<b>112 000</b>; $(0,5)$→105 000.<br>ຜະລິດ A 4 ອັນ, B 4 ອັນ, ກຳໄລ 112 000 ກີບ.`],
[R`ສອງຂະແໜງ: $A=\begin{pmatrix}0.2&0.3\\0.4&0.1\end{pmatrix}$, $D=\begin{pmatrix}120\\180\end{pmatrix}$. ຈົ່ງຊອກ $X$.`, R`$E-A=\begin{pmatrix}0.8&-0.3\\-0.4&0.9\end{pmatrix}$, $\det=0.6$, $(E-A)^{-1}=\frac1{0.6}\begin{pmatrix}0.9&0.3\\0.4&0.8\end{pmatrix}$<br>$X=\frac1{0.6}\begin{pmatrix}162\\192\end{pmatrix}=\begin{pmatrix}270\\320\end{pmatrix}$.`],
[R`ເຂດ $x+y\le4,\ x\ge0,\ y\ge0$ ມີເມັດຈອມໃດແດ່? ຈົ່ງຊອກ Max $Z=2x+3y$.`, R`ເມັດຈອມ $(0,0),(4,0),(0,4)$; $Z$: $0,8,12$ ⇒ Max $Z=12$ ທີ່ $(0,4)$.`]
],
hw:[
[R`Max $Z=5x_1+4x_2$ ພາຍໃຕ້ $x_1+x_2\le2,\ 2x_1+3x_2\le6,\ x_1,x_2\ge0$.`, R`ເມັດຈອມ $(0,0),(2,0),(0,2)$ ($2x_1+3x_2\le6$ ບໍ່ກຳນົດເມັດຈອມໃໝ່).<br>Max $Z=10$ ທີ່ $(2,0)$.`],
[R`Max $Z=3x_1+5x_2$ ພາຍໃຕ້ $2x_1+x_2\le4,\ x_1+2x_2\le6,\ x_1,x_2\ge0$.`, R`ເມັດຈອມ $(2,0)$→6, $(0,3)$→15, $\left(\frac23,\frac83\right)$→$\frac{46}3$.<br>Max $Z=\frac{46}3$ ທີ່ $\left(\frac23,\frac83\right)$.`],
[R`Max $Z=2x_1+3x_2$ ພາຍໃຕ້ $x_1+2x_2\le4,\ x_1+x_2\le3,\ x_1,x_2\ge0$.`, R`ເມັດຈອມ $(3,0)$→6, $(2,1)$→7, $(0,2)$→6. Max $Z=7$ ທີ່ $(2,1)$.`],
[R`ອາຫານສັດ $y_1$ (20 000 ກີບ/ຖົງ: ທາດ ຊ 3, ເຫຼັກ 6, ສັງກະສີ 1 mg) ແລະ $y_2$ (15 000 ກີບ/ຖົງ: 2, 6, 4 mg). ຕ້ອງການຢ່າງໜ້ອຍ 36, 84, 16 mg. ຈົ່ງຊອກຄ່າໃຊ້ຈ່າຍຕ່ຳສຸດ.`, R`$C=20000y_1+15000y_2\to\min$; $3y_1+2y_2\ge36,\ y_1+y_2\ge14,\ y_1+4y_2\ge16$.<br>ເມັດຈອມ $(0,18)$→270 000; $(8,6)$→<b>250 000</b>; $\left(\frac{40}3,\frac23\right)$→≈276 667; $(16,0)$→320 000.<br>ໃຊ້ $y_1=8,\ y_2=6$ ຖົງ, 250 000 ກີບ.`],
[R`ຊ່າງຜະລິດເຄື່ອງ 2 ຊະນິດ: ກຳໄລ 32 000 ແລະ 24 000 ກີບ. ຊະນິດ 1 ໃຊ້ຕີ 2, ປະກອບ 7, ຂັດ 6 ຊມ; ຊະນິດ 2 ໃຊ້ 2, 7, 3 ຊມ. ມີເວລາ 40, 70, 48 ຊມ. ຈົ່ງຊອກກຳໄລສູງສຸດ.`, R`$x_1+x_2\le20,\ x_1+x_2\le10,\ 2x_1+x_2\le16$ ⇒ ເງື່ອນໄຂທີ່ມີຜົນ: $x_1+x_2\le10,\ 2x_1+x_2\le16$.<br>ເມັດຈອມ $(8,0)$→256 000; $(6,4)$→<b>288 000</b>; $(0,10)$→240 000. ກຳໄລສູງສຸດ 288 000 ກີບ.`],
[R`ໃຫ້ $(E-A)^{-1}\approx\begin{pmatrix}2.6&2.0&0.4\\1.5&2.6&0.5\\0.8&0.6&1.3\end{pmatrix}$ ແລະ ຄວາມຕ້ອງການພາຍນອກ $700, 800, 750$. ຈົ່ງຄິດໄລ່ມູນຄ່າການຜະລິດ.`, R`$X\approx\begin{pmatrix}2.6(700)+2(800)+0.4(750)\\1.5(700)+2.6(800)+0.5(750)\\0.8(700)+0.6(800)+1.3(750)\end{pmatrix}=\begin{pmatrix}3720\\3505\\2015\end{pmatrix}$.`]
],
quiz:[
[R`ໃນການວາງແຜນລີເນແອ, ຕຳລາທີ່ຕ້ອງການໃຫ້ໃຫຍ່ສຸດ ຫຼື ນ້ອຍສຸດ ເອີ້ນວ່າ:`, ["ຕຳລາເງື່ອນໄຂ","ຕຳລາເປົ້າໝາຍ","ຕຳລາປີ້ນ","ເສັ້ນລະດັບ"],1,""],
[R`ຄ່າດີທີ່ສຸດຂອງຕຳລາເປົ້າໝາຍ ເກີດຢູ່:`, ["ເມັດເຄົ້າສະເໝີ","ເມັດຈອມຂອງເຂດເງື່ອນໄຂ","ທາງໃນເຂດເງື່ອນໄຂ","ນອກເຂດເງື່ອນໄຂ"],1,""],
[R`ໃນຕົວຢ່າງເສື້ອ ($P=50x_1+30x_2$) ກຳໄລສູງສຸດແມ່ນ:`, ["350","360","300","180"],1,"ທີ່ (6,2)"],
[R`ເມັດໃດຢູ່ໃນເຂດ $x+y\le4,\ x,y\ge0$?`, [R`$(1,2)$`,R`$(3,2)$`,R`$(-1,1)$`,R`$(5,0)$`],0,""],
[R`Max $Z=x+y$ ພາຍໃຕ້ $x+2y\le4,\ x,y\ge0$:`, ["2","4","6","8"],1,"ທີ່ເມັດ (4,0)"],
[R`ສູດລີອົງແຕບແມ່ນ:`, [R`$X=AD$`,R`$X=(E-A)^{-1}D$`,R`$X=(E+A)D$`,R`$X=A^{-1}D$`],1,""],
[R`ເງື່ອນໄຂ "ທາດ A ຢ່າງໜ້ອຍ 45 ໜ່ວຍ" ຂຽນເປັນ:`, [R`$3y_1+9y_2\le45$`,R`$3y_1+9y_2\ge45$`,R`$3y_1+9y_2=45$`,R`$3y_1+9y_2\lt45$`],1,""],
[R`Min $C=12y_1+20y_2$ ໃນຕົວຢ່າງຝຸ່ນ ມີຄ່າ:`, ["156","148","180","240"],1,"ທີ່ (9,2)"]
]});
