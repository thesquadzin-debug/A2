(function(){var cv=document.getElementById('net');if(!cv)return;var c=cv.getContext('2d'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches,W,H,dpr,mx=0,my=0,tx=0,ty=0,vis=true,raf=0;
var C=[['Ayodhya',82.2,26.79,95,-12,-18,'right'],['Delhi',77.21,28.61,50,-10,-14,'right'],['Noida',77.4,28.54,40,12,-8,'left'],['Lucknow',80.95,26.85,50,-14,-8,'right'],['Basti',82.73,26.8,40,4,24,'center'],['Gorakhpur',83.37,26.76,45,14,-6,'left'],['Bhopal',77.41,23.26,45,12,16,'left'],['Indore',75.86,22.72,45,-12,10,'right']];
function size(){dpr=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;c.setTransform(dpr,0,0,dpr,0,0);if(rm)draw(0)}
function draw(t){var K=Math.min(W/10,H/5.4),a=Math.sin(t*.35)*.28+mx*.35,b=1.0+my*.12,ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b);
function P(lo,la,z){var x=(lo-79.6)*K,y=(la-25.8)*K,x1=x*ca-y*sa,y1=x*sa+y*ca,y2=y1*cb-z*sb,z2=y1*sb+z*cb,s=1800/(1800-z2);return[W/2+x1*s,H/2*1.05-y2*s,s]}
c.clearRect(0,0,W,H);c.lineWidth=1;c.strokeStyle='rgba(60,150,255,.2)';
for(var lo=74.5;lo<=84.5;lo+=.5){c.beginPath();for(var la=21.5;la<=29.5;la+=.5){var p=P(lo,la,0);la==21.5?c.moveTo(p[0],p[1]):c.lineTo(p[0],p[1])}c.stroke()}
for(var la=21.5;la<=29.5;la+=.5){c.beginPath();for(var lo=74.5;lo<=84.5;lo+=.5){var p=P(lo,la,0);lo==74.5?c.moveTo(p[0],p[1]):c.lineTo(p[0],p[1])}c.stroke()}
var h=C[0],hp=[];
C.forEach(function(k,i){if(!i)return;c.strokeStyle='rgba(0,194,255,.5)';c.beginPath();for(var j=0;j<=28;j++){var u=j/28,p=P(h[1]+(k[1]-h[1])*u,h[2]+(k[2]-h[2])*u,h[3]+(k[3]-h[3])*u+75*Math.sin(Math.PI*u));j?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1])}c.stroke();
var u=(t*.22+i*.14)%1,q=P(h[1]+(k[1]-h[1])*u,h[2]+(k[2]-h[2])*u,h[3]+(k[3]-h[3])*u+75*Math.sin(Math.PI*u));c.fillStyle='#fff';c.beginPath();c.arc(q[0],q[1],2.6,0,7);c.fill()});
C.forEach(function(k,i){var f=P(k[1],k[2],0),tp=P(k[1],k[2],k[3]),r=i?5:8,g=c.createLinearGradient(0,f[1],0,tp[1]);g.addColorStop(0,'rgba(30,144,255,0)');g.addColorStop(1,'rgba(0,194,255,.9)');c.strokeStyle=g;c.lineWidth=2;c.beginPath();c.moveTo(f[0],f[1]);c.lineTo(tp[0],tp[1]);c.stroke();
var pr=((t*.5+i*.2)%1);c.strokeStyle='rgba(0,194,255,'+(.6*(1-pr))+')';c.lineWidth=1.5;c.beginPath();c.ellipse(f[0],f[1],(10+pr*34)*f[2],(10+pr*34)*f[2]*sb*.9,0,0,7);c.stroke();
c.fillStyle=i?'#00c2ff':'#fff';c.shadowColor='#1e90ff';c.shadowBlur=16;c.beginPath();c.arc(tp[0],tp[1],r,0,7);c.fill();c.shadowBlur=0;
c.font=(i?'600 12px':'800 14px')+' system-ui,sans-serif';c.fillStyle='#eaf2ff';c.textAlign=k[6];c.fillText(k[0],tp[0]+k[4],tp[1]+k[5])})}
function loop(n){if(!vis){raf=0;return}mx+=(tx-mx)*.05;my+=(ty-my)*.05;draw(n/1000);raf=requestAnimationFrame(loop)}
addEventListener('pointermove',function(e){var r=cv.getBoundingClientRect();tx=Math.max(-1,Math.min(1,((e.clientX-r.left)/r.width-.5)*2));ty=Math.max(-1,Math.min(1,((e.clientY-r.top)/r.height-.5)*2))},{passive:true});
addEventListener('resize',size);size();if(rm)return;if('IntersectionObserver'in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting;if(vis&&!raf)raf=requestAnimationFrame(loop)}).observe(cv);raf=requestAnimationFrame(loop)})();
