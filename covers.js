// Cover illustrations: one small SVG per chapter, drawn in 240x180 units with
// theme colours (classes styled in index.html), so they follow light/dark mode.
(function(){
const f1=v=>(+v).toFixed(1);
// math-to-svg frame inside the 240x180 box
function sys(x0,x1,y0,y1){
  const X=x=>20+(x-x0)/(x1-x0)*200, Y=y=>165-(y-y0)/(y1-y0)*145;
  let ax='';
  if(y0<=0&&y1>=0) ax+=`<line class="ax" x1="${f1(X(x0))}" y1="${f1(Y(0))}" x2="${f1(X(x1))}" y2="${f1(Y(0))}"/>`;
  if(x0<=0&&x1>=0) ax+=`<line class="ax" x1="${f1(X(0))}" y1="${f1(Y(y0))}" x2="${f1(X(0))}" y2="${f1(Y(y1))}"/>`;
  return {X,Y,ax};
}
function curve(f,a,b,s,n=80){
  let d='',pen=false;
  for(let i=0;i<=n;i++){const x=a+(b-a)*i/n,y=f(x);
    if(!isFinite(y)){pen=false;continue}
    d+=(pen?'L':'M')+f1(s.X(x))+' '+f1(s.Y(y));pen=true}
  return d;
}
const path=(d,c)=>`<path class="${c}" d="${d}"/>`;
const plot=(f,a,b,s,c='c1')=>path(curve(f,a,b,s),c);
function area(f,a,b,s,c='f1',g=()=>0){
  let d=curve(f,a,b,s);
  for(let i=80;i>=0;i--){const x=a+(b-a)*i/80;d+='L'+f1(s.X(x))+' '+f1(s.Y(g(x)))}
  return path(d+'Z',c);
}
const dot=(x,y,c='dt',r=4.5)=>`<circle class="${c}" cx="${f1(x)}" cy="${f1(y)}" r="${r}"/>`;
const ring=(x,y)=>`<circle class="op" cx="${f1(x)}" cy="${f1(y)}" r="4.5"/>`;
const tx=(x,y,t,c='tx',a='middle')=>`<text class="${c}" x="${f1(x)}" y="${f1(y)}" text-anchor="${a}">${t}</text>`;
const ln=(x1,y1,x2,y2,c='ax')=>`<line class="${c}" x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}"/>`;
const rc=(x,y,w,h,c='f1b',rx=3)=>`<rect class="${c}" x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="${rx}"/>`;
const PI=Math.PI;

const A={
1(){let h='';for(let r=0;r<5;r++)for(let c=0;c<9;c++)h+=dot(40+c*20,22+r*20,'dt',6);
  return h+dot(40,122,'rd',6)+dot(60,122,'rd',6)+tx(120,165,'47 = 9 × 5 + 2','txb')},
2(){const s=sys(-0.5,10,-0.5,7.2);let h=s.ax;
  for(let x=0;x<=9;x++)for(let y=0;y<=6;y++)h+=dot(s.X(x),s.Y(y),'gd',1.6);
  h+=plot(x=>(18-2*x)/3,-0.3,9.3,s);[[0,6],[3,4],[6,2],[9,0]].forEach(([x,y])=>h+=dot(s.X(x),s.Y(y),'rd',5));
  return h+tx(165,40,'2x + 3y = 18','txb')},
3(){let h=ln(15,150,230,150);const ang=[68,52,34,16,0,0],lb=['1','2','3','…','k','k+1'];
  ang.forEach((a,i)=>{const x=24+i*34;h+=`<rect class="${i<4?'f1b':'f2b'}" x="${x}" y="80" width="14" height="70" rx="2" transform="rotate(${a} ${x+14} 150)"/>`+tx(x+7,170,lb[i],'txs')});
  return h},
4(){let h='';[[60,'a','b',0],[120,'a + c','b + c',36]].forEach(([y,a,b,d])=>{h+=ln(20,y,225,y);
  for(let x=30;x<=220;x+=20)h+=ln(x,y-4,x,y+4);h+=dot(70+d,y,'dt',6)+dot(140+d,y,'rd',6)+tx(70+d,y-14,a,'txs')+tx(140+d,y-14,b,'txs')});
  return h+ln(70,66,106,114,'dash')+ln(140,66,176,114,'dash')+tx(120,165,'a &lt; b ⇒ a + c &lt; b + c','txb')},
5(){return rc(30,95,170,45,'f0')+rc(30,70,130,70,'f0')+rc(30,40,100,100,'f2b')+tx(80,95,'x = y','txs')+tx(120,165,'x + y ≥ 2√(xy)','txb')},
6(){let h=ln(20,145,225,145);for(let i=0;i<7;i++){const hh=18+15*i;h+=rc(28+i*27,145-hh,19,hh,'f1b',2);if(i)h+=tx(37+i*27,140-hh,'+d','txr')}
  return h+tx(120,170,'aₙ = a₁ + (n − 1)d','txb')},
7(){let h=ln(20,145,225,145);for(let i=0;i<6;i++){const hh=4*2**i;h+=rc(30+i*33,145-hh,22,hh,'f1b',2);if(i)h+=tx(41+i*33,140-hh,'×r','txr')}
  return h+tx(120,170,'aₙ = a₁ · rⁿ⁻¹','txb')},
8(){const a=[1,3,7,13,21];let h='';a.forEach((v,i)=>{h+=`<circle class="f1b" cx="${30+i*45}" cy="55" r="16"/>`+tx(30+i*45,61,v,'txb')});
  for(let i=0;i<4;i++){const x=52+i*45;h+=ln(30+i*45,72,x,105,'c3')+ln(75+i*45,72,x,105,'c3')+`<circle class="f2b" cx="${x}" cy="118" r="14"/>`+tx(x,124,a[i+1]-a[i],'txr')}
  return h+tx(120,165,'bₙ = aₙ₊₁ − aₙ','txb')},
9(){const s=sys(0,13,0,2);let h=s.ax+ln(s.X(0),s.Y(1),s.X(13),s.Y(1),'dashr');
  for(let n=1;n<=12;n++)h+=dot(s.X(n),s.Y(1+(-0.78)**n),'dt',4.5);return h+tx(200,s.Y(1)-10,'L','txr')+tx(120,40,'lim aₙ = L','txb')},
10(){let h='';for(let r=0;r<6;r++)for(let c=0;c<=r;c++)h+=`<circle class="f1b" cx="${f1(120+(c-r/2)*22)}" cy="${30+r*21}" r="10"/>`;
  return h+tx(120,170,'1 + 2 + … + n = n(n+1)/2','txb')},
11(){let d='M30 30 Q45 30 60 150',x=60,hgt=84;
  for(let k=0;k<4;k++){const w=hgt*0.7+10;d+=` Q${f1(x+w/2)} ${f1(150-2*hgt)} ${f1(x+w)} 150`;x+=w;hgt*=0.6}
  return ln(15,150,230,150)+path(d,'c1')+dot(30,30,'rd',7)+tx(170,40,'h, hr, hr², …','txb')},
12(){const s=sys(-1,5,-1,4);return s.ax+ln(s.X(3),s.Y(2),s.X(3),s.Y(0),'dash')+ln(s.X(3),s.Y(2),s.X(0),s.Y(2),'dash')+ln(s.X(0),s.Y(0),s.X(3),s.Y(2),'c1')+dot(s.X(3),s.Y(2),'rd',6)
  +tx(s.X(3),s.Y(0)+15,'a','txs')+tx(s.X(0)-10,s.Y(2)+5,'b','txs')+tx(s.X(3)+8,s.Y(2)-10,'z = a + bi','txb','start')+tx(s.X(5)-5,s.Y(0)-6,'Re','txs','end')+tx(s.X(0)+6,s.Y(4)+12,'Im','txs','start')},
13(){const s=sys(-0.5,5,-0.5,4),o=[s.X(0),s.Y(0)],P=(x,y)=>[s.X(x),s.Y(y)];const [a,b,c]=[P(3,1),P(1,2.5),P(4,3.5)];
  return s.ax+ln(...a,...c,'dash')+ln(...b,...c,'dash')+ln(...o,...a,'c1')+ln(...o,...b,'c1')+ln(...o,...c,'c2')+dot(...a)+dot(...b)+dot(...c,'rd')
  +tx(a[0]+6,a[1]+14,'z₁','txs','start')+tx(b[0]-6,b[1]-6,'z₂','txs','end')+tx(c[0]-4,c[1]-8,'z₁ + z₂','txr','end')},
14(){const s=sys(-1,4,-1,3.5),p=[s.X(3),s.Y(2.5)],o=[s.X(0),s.Y(0)];const t=Math.atan2(2.5,3),R=34;
  return s.ax+ln(...o,...p,'c1')+dot(...p,'rd',6)+path(`M${f1(o[0]+R)} ${f1(o[1])} A${R} ${R} 0 0 0 ${f1(o[0]+R*Math.cos(t))} ${f1(o[1]-R*Math.sin(t))}`,'c2')
  +tx(o[0]+42,o[1]-8,'θ','txr','start')+tx((o[0]+p[0])/2-8,(o[1]+p[1])/2-6,'r','txb','end')+tx(120,172,'z = r(cos θ + i sin θ)','txb')},
15(){const o=[50,140],v=(r,d)=>[o[0]+r*Math.cos(d*PI/180),o[1]-r*Math.sin(d*PI/180)];let h=ln(20,140,225,140)+ln(50,165,50,15);
  [[70,20,'c1','z₁'],[60,45,'c1','z₂'],[150,65,'c2','z₁z₂']].forEach(([r,d,c,l])=>{const p=v(r,d);h+=ln(...o,...p,c)+dot(...p,c==='c2'?'rd':'dt')+tx(p[0]+6,p[1]-4,l,c==='c2'?'txr':'txs','start')});
  return h+tx(165,165,'θ₁ + θ₂','txr')},
16(){const c=[120,88],R=62;let pts=[],h=ln(40,88,200,88)+ln(120,15,120,165)+`<circle class="c3" cx="120" cy="88" r="${R}"/>`;
  for(let k=0;k<6;k++){const a=k*PI/3;pts.push([c[0]+R*Math.cos(a),c[1]-R*Math.sin(a)])}
  h+=`<polygon class="f1" points="${pts.map(p=>p.map(f1).join(',')).join(' ')}"/>`;pts.forEach(p=>h+=dot(...p,'rd',5.5));return h+tx(205,30,'z⁶ = 1','txb')},
17(){const s=sys(-1,4,-1,4),f=x=>Math.exp(x/1.5)-1;return s.ax+plot(x=>x,-1,4,s,'dash')+plot(f,-1,2.4,s)+plot(y=>1.5*Math.log(1+y),-0.6,4,s,'c2')
  +tx(s.X(2.1)-6,s.Y(f(2.1)),'f','txb','end')+tx(s.X(3.8),s.Y(1.5*Math.log(4.8))+16,'f⁻¹','txr','end')+tx(s.X(3.6),s.Y(3.6)-6,'y = x','txs','end')},
18(){const s=sys(-1.3,1.3,-1.8,3.4);return s.ax+plot(Math.asin,-1,1,s)+plot(Math.acos,-1,1,s,'c2')+dot(s.X(-1),s.Y(-PI/2),'dt',3.5)+dot(s.X(1),s.Y(PI/2),'dt',3.5)
  +tx(s.X(1)-4,s.Y(PI/2)+22,'arcsin x','txb','end')+tx(s.X(-1)+8,s.Y(PI)-4,'arccos x','txr','start')},
19(){const s=sys(-6,6,-2,2);return s.ax+plot(x=>PI/2,-6,6,s,'dashr')+plot(x=>-PI/2,-6,6,s,'dashr')+plot(Math.atan,-6,6,s)
  +tx(s.X(-5.6),s.Y(PI/2)-6,'π/2','txr','start')+tx(s.X(5.6),s.Y(-PI/2)+16,'−π/2','txr','end')+tx(s.X(3),s.Y(0.6),'arctan x','txb')},
20(){const s=sys(-0.5,4,-0.5,4),f=x=>0.3*x*x+0.5,a=2;return s.ax+plot(f,0,3.5,s)+ln(s.X(a),s.Y(0),s.X(a),s.Y(f(a)),'dash')+ln(s.X(0),s.Y(f(a)),s.X(a),s.Y(f(a)),'dash')+ring(s.X(a),s.Y(f(a)))
  +tx(s.X(a),s.Y(0)+15,'a','txs')+tx(s.X(0)-8,s.Y(f(a))+5,'L','txr','end')+tx(165,45,'lim f(x) = L','txb')+tx(152,60,'x→a','txs')},
21(){const L=sys(0,4,0,3.4);let h=ln(20,165,110,165)+ln(130,165,220,165)+path(`M25 140 C55 60 80 130 105 70`,'c1');
  return h+path('M135 140 C150 120 160 110 172 105','c1')+ring(172,105)+path('M172 65 C190 60 205 50 215 40','c2')+dot(172,65,'rd')+ln(172,165,172,65,'dash')
  +tx(65,30,'ຕໍ່ເນື່ອງ','txb')+tx(175,30,'ບໍ່ຕໍ່ເນື່ອງ','txr')},
22(){const s=sys(-2,4,-2,4);return s.ax+plot(x=>x,-2,4,s,'dash')+plot(Math.exp,-2,1.38,s)+plot(Math.log,0.13,4,s,'c2')+dot(s.X(0),s.Y(1),'dt',3.5)+dot(s.X(1),s.Y(0),'rd',3.5)
  +tx(s.X(1.35)+6,s.Y(3.6),'eˣ','txb','start')+tx(s.X(3.8),s.Y(Math.log(3.8))+16,'ln x','txr','end')},
23(){const s=sys(-13,13,-0.45,1.25);return s.ax+plot(x=>Math.sin(x)/x,-13,13,s,'c1')+ring(s.X(0),s.Y(1))+tx(120,30,'lim sin x / x = 1','txb')+tx(108,46,'x→0','txs')},
24(){const s=sys(-0.5,4,-0.5,4),f=x=>0.25*x*x+0.5,a=2;return s.ax+plot(f,0,3.7,s)+plot(x=>f(a)+(x-a),0.3,3.9,s,'c2')+dot(s.X(a),s.Y(f(a)),'rd',5.5)
  +tx(s.X(3.9),s.Y(3.4)+18,'m = f′(a)','txr','end')+tx(s.X(a)+8,s.Y(f(a))+18,'(a, f(a))','txs','start')},
25(){const s=sys(-0.5,4,-0.5,4),f=x=>0.25*x*x+0.5,a=1;let h=s.ax+plot(f,0,3.8,s);
  [3.6,2.7,1.9].forEach((b,i)=>{const m=(f(b)-f(a))/(b-a);h+=plot(x=>f(a)+m*(x-a),0,3.9,s,'c3 o'+i)+dot(s.X(b),s.Y(f(b)),'dt',3.5)});
  return h+plot(x=>f(a)+0.5*(x-a),0,3.9,s,'c2')+dot(s.X(a),s.Y(f(a)),'rd',5)+tx(120,30,'f′(a) = lim [f(a+h) − f(a)] / h','txb')},
26(){const s=sys(-0.2,6.6,-1.5,1.5);return s.ax+plot(Math.sin,0,6.5,s)+plot(Math.cos,0,6.5,s,'c2')+tx(s.X(1.6),s.Y(1)-8,'sin x','txb')+tx(s.X(3.1),s.Y(-1)+18,'cos x','txr')},
27(){const s=sys(0,6,-0.5,3.6),f=x=>0.15*(x-1)*(x-3)*(x-5)+1.8,m1=(18-Math.sqrt(48))/6,m2=(18+Math.sqrt(48))/6;
  return s.ax+plot(f,0.3,5.8,s)+ln(s.X(m1)-26,s.Y(f(m1)),s.X(m1)+26,s.Y(f(m1)),'c2')+ln(s.X(m2)-26,s.Y(f(m2)),s.X(m2)+26,s.Y(f(m2)),'c2')
  +dot(s.X(m1),s.Y(f(m1)),'rd',5.5)+dot(s.X(m2),s.Y(f(m2)),'rd',5.5)+tx(s.X(m1),s.Y(f(m1))-12,'ສູງສຸດ','txr')+tx(s.X(m2),s.Y(f(m2))+22,'ຕ່ຳສຸດ','txr')+tx(205,40,"f′(x) = 0",'txb')},
28(){const s=sys(-0.3,4,-0.3,4),f=x=>0.25*x*x+0.5,a=1.2,b=3.4,t=x=>f(a)+0.5*a*(x-a);
  return s.ax+plot(f,0,3.8,s)+plot(t,0.2,3.8,s,'c3')+ln(s.X(a),s.Y(f(a)),s.X(b),s.Y(f(a)),'c1')+ln(s.X(b),s.Y(f(a)),s.X(b),s.Y(t(b)),'c1')+ln(s.X(b)+8,s.Y(f(a)),s.X(b)+8,s.Y(f(b)),'c2')
  +dot(s.X(a),s.Y(f(a)),'dt')+tx((s.X(a)+s.X(b))/2,s.Y(f(a))+16,'dx','txb')+tx(s.X(b)-6,(s.Y(f(a))+s.Y(t(b)))/2+5,'dy','txb','end')+tx(s.X(b)+14,(s.Y(f(a))+s.Y(f(b)))/2,'Δy','txr','start')},
29(){return `<circle class="f2b" cx="110" cy="90" r="66"/><circle class="f0s" cx="110" cy="90" r="54"/>`+ln(110,90,164,90,'c1')+ln(164,90,176,90,'c2')
  +tx(137,84,'r','txb')+tx(182,80,'dr','txr','start')+tx(120,172,'dA ≈ 2πr · dr','txb')},
30(){const s=sys(-2,2,-0.5,4.2);let h=s.ax;[0,0.8,1.6,2.4].forEach((c,i)=>h+=plot(x=>0.55*x*x+c,-2,2,s,i==1?'c2':'c1 o'+i));
  return h+tx(120,172,'∫ f(x) dx = F(x) + C','txb')},
31(){const s=sys(-4,4,-1.3,1.3),f=x=>2*x/(1+x*x);return s.ax+area(f,0,2.5,s)+plot(f,-4,4,s)+tx(s.X(1),s.Y(1)-10,'2x / (1 + x²)','txb')+tx(120,172,'u = 1 + x²,  du = 2x dx','txr')},
32(){return rc(30,30,180,40,'f1b',6)+tx(120,56,'P(x) / Q(x)','txb')+path('M120 76 L70 104 M120 76 L170 104','c3')
  +rc(30,108,82,40,'f2b',6)+rc(128,108,82,40,'f2b',6)+tx(71,134,'A/(x − a)','txr')+tx(169,134,'B/(x − b)','txr')+tx(120,134,'+','txb')},
33(){const s=sys(-4,4,-0.2,1.25),f=x=>1/(1+x*x);return s.ax+area(f,-1,1,s)+plot(f,-4,4,s)+tx(120,30,'∫ dx/(1 + x²) = arctan x + C','txb')},
34(){const s=sys(-0.2,5,-0.3,3),f=x=>1/x;return s.ax+area(f,1,3,s)+plot(f,0.34,5,s)+tx(s.X(1),s.Y(0)+15,'1','txs')+tx(s.X(3),s.Y(0)+15,'3','txs')+tx(160,40,'∫ dx/x = ln|x| + C','txb')},
35(){const s=sys(-0.3,6.6,-1.3,1.3);return s.ax+area(Math.sin,0,PI,s)+area(Math.sin,PI,2*PI,s,'f2')+plot(Math.sin,0,6.5,s)+tx(s.X(PI/2),s.Y(0.4),'+','txb')+tx(s.X(3*PI/2),s.Y(-0.35),'−','txr')},
36(){const s=sys(-0.3,6.6,-0.3,1.3),f=x=>Math.sin(x)**2;return s.ax+plot(x=>0.5,0,6.5,s,'dashr')+area(f,0,PI,s)+plot(f,0,6.5,s)+tx(120,22,'sin²x = (1 − cos 2x)/2','txb')},
37(){const s=sys(0,5,0,4),g=u=>1+2*Math.pow((u-1)/3,0.6);let d=`M${f1(s.X(0))} ${f1(s.Y(1))}`;
  for(let i=0;i<=40;i++){const u=1+3*i/40;d+=`L${f1(s.X(u))} ${f1(s.Y(g(u)))}`}d+=`L${f1(s.X(0))} ${f1(s.Y(3))}Z`;
  return s.ax+area(g,1,4,s,'f2')+path(d,'f1')+plot(g,1,4,s)+tx(s.X(2.5),s.Y(0.6),'∫v du','txr')+tx(s.X(1),s.Y(2.6),'∫u dv','txb')+tx(160,26,'∫u dv = uv − ∫v du','txb')},
38(){const s=sys(-3.2,1.6,-0.8,4.2),f=x=>x*Math.exp(x);return s.ax+plot(f,-3.2,1.33,s)+plot(x=>(x-1)*Math.exp(x),-3.2,1.6,s,'c2')
  +tx(s.X(1.3)-4,s.Y(3.8),'x eˣ','txb','end')+tx(s.X(-1.4),s.Y(-0.4)+20,'(x − 1)eˣ','txr')},
39(){const s=sys(0,4,0,4),f=x=>1+0.4*x+0.12*x*x;let h=s.ax;const a=0.4,b=3.6,n=8,w=(b-a)/n;
  for(let i=0;i<n;i++){const x=a+i*w;h+=rc(s.X(x),s.Y(f(x)),s.X(x+w)-s.X(x),s.Y(0)-s.Y(f(x)),i%2?'f1b':'f1',0)}
  return h+plot(f,0,3.9,s)+tx(70,30,'Σ f(xᵢ) Δx','txb')},
40(){const s=sys(-0.3,4.3,-1.6,2.6),f=x=>1.7*Math.sin(1.3*x)+0.5,a=0.3,b=4;let h=s.ax;
  const r=(PI+Math.asin(0.5/1.7))/1.3;h+=area(f,a,r,s)+area(f,r,b,s,'f2')+plot(f,0,4.2,s);
  return h+tx(s.X(a),s.Y(0)+15,'a','txs')+tx(s.X(b),s.Y(0)-6,'b','txs')+tx(160,24,'∫ₐᵇ f(x) dx','txb')},
41(){const s=sys(-0.2,4,-0.3,3.6),f=x=>2+0.7*Math.sin(1.5*x);return s.ax+area(f,0.6,3.4,s)+plot(f,0,3.9,s)+ln(s.X(0.6),s.Y(0),s.X(0.6),s.Y(f(0.6)),'c3')+ln(s.X(3.4),s.Y(0),s.X(3.4),s.Y(f(3.4)),'c3')
  +tx(s.X(0.6),s.Y(0)+15,'a','txs')+tx(s.X(3.4),s.Y(0)+15,'b','txs')+tx(s.X(2),s.Y(1),'A','txb')},
42(){const s=sys(-0.2,4,-0.3,3.6),f=x=>3-0.5*(x-2)**2,g=x=>0.5+0.15*x;return s.ax+area(f,0.5,3.5,s,'f1',g)+plot(f,0.1,3.9,s)+plot(g,0,4,s,'c2')
  +tx(s.X(2),s.Y(3)-8,'y = f(x)','txb')+tx(s.X(3.6),s.Y(g(3.6))+16,'y = g(x)','txr')},
43(){const s=sys(-0.2,4.2,-2.3,2.3),f=x=>0.4+0.9*Math.sqrt(x);let h=ln(s.X(-0.2),s.Y(0),s.X(4.2),s.Y(0),'ax')+plot(f,0,4,s)+plot(x=>-f(x),0,4,s,'dash');
  [1,2,3,4].forEach(x=>h+=`<ellipse class="${x==4?'f1':'f1s'}" cx="${f1(s.X(x))}" cy="${f1(s.Y(0))}" rx="9" ry="${f1(s.Y(0)-s.Y(f(x)))}"/>`);
  return h+tx(s.X(2.4),s.Y(2.2),'V = π∫ f(x)² dx','txb')},
44(){const s=sys(-0.2,4.2,-2.3,2.3),f=x=>1.2+0.2*x,g=x=>0.35+0.15*x,x=2.6;let h=ln(s.X(-0.2),s.Y(0),s.X(4.2),s.Y(0),'ax')+plot(f,0,4,s)+plot(g,0,4,s,'c2')+plot(x=>-f(x),0,4,s,'dash')+plot(x=>-g(x),0,4,s,'dashr');
  return h+`<ellipse class="f1" cx="${f1(s.X(x))}" cy="${f1(s.Y(0))}" rx="11" ry="${f1(s.Y(0)-s.Y(f(x)))}"/><ellipse class="f0s" cx="${f1(s.X(x))}" cy="${f1(s.Y(0))}" rx="5" ry="${f1(s.Y(0)-s.Y(g(x)))}"/>`
  +tx(120,24,'V = π∫ (f² − g²) dx','txb')},
45(){const s=sys(-3.6,3.6,-0.03,0.47),f=x=>Math.exp(-x*x/2)/Math.sqrt(2*PI);return s.ax+area(f,-1,1.4,s)+plot(f,-3.6,3.6,s)
  +tx(s.X(-1),s.Y(0)+15,'a','txs')+tx(s.X(1.4),s.Y(0)+15,'b','txs')+tx(120,24,'P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx','txb')},
// supplementary matrix part (2016 textbook)
101(){const v=[[1,0,2],[-3,5,3],[4,-1,0]];let h=path('M52 30 Q38 90 52 150','c1')+path('M188 30 Q202 90 188 150','c1');
  v.forEach((r,i)=>r.forEach((x,j)=>{h+=(i===j?rc(60+j*44,38+i*40,32,30,'f1b',4):'')+tx(76+j*44,59+i*40,x,i===1&&j===2?'txr':'txb')}));
  return h+tx(120,172,'A = (aᵢⱼ)₃ₓ₃','txb')+tx(208,80,'a₂₃','txr','start')},
102(){return ln(58,40,58,130,'c1')+ln(182,40,182,130,'c1')+tx(90,75,'a','txb')+tx(150,75,'b','txb')+tx(90,115,'c','txb')+tx(150,115,'d','txb')
  +ln(98,68,142,110,'c2')+ln(142,68,98,110,'c3')+tx(120,160,'ad − bc','txb')+tx(204,95,'≠ 0 ⇒ A⁻¹','txr','start')},
103(){const s=sys(-1,5,-1,5);return s.ax+plot(x=>(7-2*x)/3*1.5,-1,5,s)+plot(x=>x-0.5,-0.5,5,s,'c2')+plot(x=>4-0.5*x,-1,5,s,'c3')
  +dot(s.X(2.5),s.Y(2),'rd',6)+tx(s.X(2.5)+8,s.Y(2)+18,'(x, y, z)','txr','start')+tx(120,24,'AX = B','txb')},
104(){const s=sys(-1,5,-1,5),T=[[1,3],[2,4.2],[3,3]],P=p=>p.map(([x,y])=>f1(s.X(x))+','+f1(s.Y(y))).join(' ');
  return s.ax+plot(x=>x,-1,5,s,'dash')+`<polygon class="f1b" points="${P(T)}"/><polygon class="f2b" points="${P(T.map(([x,y])=>[y,x]))}"/>`
  +tx(s.X(4.6),s.Y(4.6)+16,'y = x','txs','end')+tx(70,170,'(x′, y′) = A(x, y)','txb','start')},
105(){const s=sys(-0.5,8,-0.5,7.5),V=[[0,0],[7,0],[6,2],[3,5],[0,6]];
  return s.ax+`<polygon class="f1" points="${V.map(([x,y])=>f1(s.X(x))+','+f1(s.Y(y))).join(' ')}"/>`+plot(x=>14-2*x,0.5,7,s)+plot(x=>8-x,0,8,s,'c3')+plot(x=>(18-x)/3,0,8,s,'c1')
  +plot(x=>2-5/3*(x-6),3.6,7.5,s,'dashr')+dot(s.X(6),s.Y(2),'rd',6)+tx(s.X(6)+8,s.Y(2)-6,'max','txr','start')+tx(150,30,'P = 50x₁ + 30x₂','txb')}
};
M7.cover=n=>A[n]?`<svg class="cvart" viewBox="0 0 240 180" role="img" aria-hidden="true">${A[n]()}</svg>`:'';
})();
